require('dotenv').config();
const db = require('./config/connection');
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const path = require('path');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../server/config/cloudinaryConfig');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3000', // Allow only this origin to access the server
  methods: ['GET', 'POST'], // Allow only these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
}));

// Creates a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => authMiddleware({ req }),
  cache: 'bounded', // Add this line for bounded cache
  // persistedQueries: false, // Alternatively, you can disable persisted queries
});

// Set up Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'mythweaver',
    format: async (req, file) => 'png', // supports promises as well
    public_id: (req, file) => file.filename,
  },
});

const upload = multer({ storage: storage });

// Set up and start server
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Cloudinary image upload endpoint
  app.post('/api/upload', upload.single('file'), async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      res.status(200).json({ url: result.secure_url });
    } catch (error) {
      res.status(500).json({ error: 'Failed to upload image' });
    }
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
