import './App.css';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// Bring in the Outlet component which will render the proper pages conditionally on the browser's URL
import { Outlet } from 'react-router-dom';
// import Tree from './components/Tree/index';


const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    // Get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // Return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

//DO NOT make changes to this function. it breaks the display.
function App() {
    return (
        <ApolloProvider client={client}>
            {/* The Outlet component will be replaced by the proper page based on the URL */}
            <Outlet />
        </ApolloProvider>
    );
}

export default App;

