const title = 'The Adventures of Sir Bumble and the Quest for the Golden Spoon';
const author = 'questMaster';
const description = 'Join Sir Bumble, the clumsiest knight in Frolicshire, as he embarks on a hilarious quest to find the Golden Spoon and save the kingdom’s taste buds. Encounter mischievous goblins, cackling forests, and a marsh witch in this whimsical adventure.';
const imageUrl = '/images/sir-bumble.jpg';
const price = 4;
const genre = 'Fantasy Comedy';
const tags = [
  'humor',
  'knight',
  'quest',
  'adventure'
];

const chapters = [
  {
    "chapterIndex": 0,
    "title": "The King's Request",
    "content": "You receive the king’s request to find the Golden Spoon. Where do you start your journey?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Head into the Cackling Forest.",
        "nextChapterIndex": 1,
      },
      {
        "choiceText": "Visit the Goblin Glade.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Travel to the Mirthful Marsh.",
        "nextChapterIndex": 3,
      },
    ],
  },
  {
    "chapterIndex": 1,
    "title": "Cackling Forest",
    "content": "You are in the Cackling Forest. What do you want to do next?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Talk to Chuckles the Squirrel.",
        "nextChapterIndex": 4,
      },
      {
        "choiceText": "Follow a trail of laughter.",
        "nextChapterIndex": 5,
      },
      {
        "choiceText": "Set up camp and explore at night.",
        "nextChapterIndex": 6,
      },
    ],
  },
  {
    "chapterIndex": 2,
    "title": "Goblin Glade",
    "content": "You visit the Goblin Glade. What do you want to do next?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Challenge Snickers the Goblin Chief to a game.",
        "nextChapterIndex": 7,
      },
      {
        "choiceText": "Search for clues among the goblin huts.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Ask the goblins for help.",
        "nextChapterIndex": 9,
      },
    ],
  },
  {
    "chapterIndex": 3,
    "title": "Mirthful Marsh",
    "content": "You travel to the Mirthful Marsh. What do you want to do next?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Speak with Giggles, the Marsh Witch.",
        "nextChapterIndex": 10,
      },
      {
        "choiceText": "Search for the Golden Spoon in the marsh.",
        "nextChapterIndex": 11,
      },
      {
        "choiceText": "Follow a mysterious glow in the distance.",
        "nextChapterIndex": 12,
      },
    ],
  },
  {
    "chapterIndex": 4,
    "title": "Talking to Chuckles",
    "content": "You talk to Chuckles the Squirrel. What do you want to do next?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Listen to a pun-filled riddle.",
        "nextChapterIndex": 13,
      },
      {
        "choiceText": "Follow Chuckles to a hidden treasure.",
        "nextChapterIndex": 14,
      },
      {
        "choiceText": "Ask Chuckles about the Golden Spoon.",
        "nextChapterIndex": 15,
      },
    ],
  },
  {
    "chapterIndex": 5,
    "title": "Trail of Laughter",
    "content": "You follow a trail of laughter. What do you want to do next?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Discover a group of laughing pixies.",
        "nextChapterIndex": 16,
      },
      {
        "choiceText": "Find a magical laughing stream.",
        "nextChapterIndex": 17,
      },
      {
        "choiceText": "Encounter a talking tree that tells jokes.",
        "nextChapterIndex": 18,
      },
    ],
  },
  {
    "chapterIndex": 6,
    "title": "Exploring at Night",
    "content": "You set up camp and explore at night. What do you want to do next?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Hear a melody and follow it to a musical gathering.",
        "nextChapterIndex": 19,
      },
      {
        "choiceText": "Find an ancient relic buried in the ground.",
        "nextChapterIndex": 20,
      },
      {
        "choiceText": "Encounter a group of friendly nomads who share their stories.",
        "nextChapterIndex": 21,
      },
    ],
  },
  {
    "chapterIndex": 7,
    "title": "Game with Snickers",
    "content": "You challenge Snickers the Goblin Chief to a game. What do you want to do next?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Play a game of Goblin Toss.",
        "nextChapterIndex": 22,
      },
      {
        "choiceText": "Compete in a riddle contest.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Challenge Snickers to a race.",
        "nextChapterIndex": 24,
      },
    ],
  },
  {
    "chapterIndex": 8,
    "title": "Searching Goblin Huts",
    "content": "You search for clues among the goblin huts. What do you want to do next?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Find a map to the Golden Spoon.",
        "nextChapterIndex": 25,
      },
      {
        "choiceText": "Discover a hidden passage.",
        "nextChapterIndex": 26,
      },
      {
        "choiceText": "Uncover a goblin’s secret stash of treasures.",
        "nextChapterIndex": 27,
      },
    ],
  },
  {
    "chapterIndex": 9,
    "title": "Asking for Help",
    "content": "You ask the goblins for help. What do you want to do next?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Befriend a helpful goblin guide.",
        "nextChapterIndex": 28,
      },
      {
        "choiceText": "Trade a favor for information.",
        "nextChapterIndex": 29,
      },
      {
        "choiceText": "Join the goblins in a festive celebration.",
        "nextChapterIndex": 30,
      },
    ],
  },
  {
    "chapterIndex": 10,
    "title": "Speaking with Giggles",
    "content": "You speak with Giggles, the Marsh Witch. What do you want to do next?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Ask Giggles for a potion.",
        "nextChapterIndex": 31,
      },
      {
        "choiceText": "Learn a spell to find the Golden Spoon.",
        "nextChapterIndex": 32,
      },
      {
        "choiceText": "Help Giggles with a magical task.",
        "nextChapterIndex": 33,
      },
    ],
  },
  {
    "chapterIndex": 11,
    "title": "Searching the Marsh",
    "content": "You search for the Golden Spoon in the marsh. What do you want to do next?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Follow the sound of bubbling laughter.",
        "nextChapterIndex": 34,
      },
      {
        "choiceText": "Investigate a glowing swamp lily.",
        "nextChapterIndex": 35,
      },
      {
        "choiceText": "Look for clues among the marsh creatures.",
        "nextChapterIndex": 36,
      },
    ],
  },
  {
    "chapterIndex": 12,
    "title": "Following the Glow",
    "content": "You follow a mysterious glow in the distance. What do you want to do next?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Discover a hidden glade with magical properties.",
        "nextChapterIndex": 37,
      },
      {
        "choiceText": "Find a treasure chest guarded by marsh spirits.",
        "nextChapterIndex": 38,
      },
      {
        "choiceText": "Encounter a wise old toad with knowledge of the Spoon.",
        "nextChapterIndex": 39,
      },
    ],
  },
  {
    "chapterIndex": 13,
    "title": "Pun-Filled Riddle",
    "content": "You solve Chuckles’s riddle and find the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 14,
    "title": "Hidden Treasure",
    "content": "You follow Chuckles and find the Golden Spoon in a hidden treasure.",
    "isEnd": true,
  },
  {
    "chapterIndex": 15,
    "title": "Squirrel's Secret",
    "content": "Chuckles reveals the location of the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 16,
    "title": "Laughing Pixies",
    "content": "The laughing pixies guide you to the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 17,
    "title": "Magical Stream",
    "content": "The magical stream’s laughter leads you to the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 18,
    "title": "Talking Tree",
    "content": "The talking tree tells you where to find the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 19,
    "title": "Musical Gathering",
    "content": "The musical gathering points you to the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 20,
    "title": "Ancient Relic",
    "content": "You find the Golden Spoon buried with the ancient relic.",
    "isEnd": true,
  },
  {
    "chapterIndex": 21,
    "title": "Nomad Stories",
    "content": "The nomads share a story that leads you to the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 22,
    "title": "Goblin Toss",
    "content": "You win the game of Goblin Toss and earn the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 23,
    "title": "Riddle Contest",
    "content": "You solve the riddle contest and receive the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 24,
    "title": "Winning the Race",
    "content": "You win the race and Snickers gives you the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 25,
    "title": "Following the Map",
    "content": "You follow the map and find the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 26,
    "title": "Hidden Passage",
    "content": "The hidden passage leads you to the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 27,
    "title": "Goblin's Stash",
    "content": "You find the Golden Spoon in the goblin’s secret stash.",
    "isEnd": true,
  },
  {
    "chapterIndex": 28,
    "title": "Goblin Guide",
    "content": "The goblin guide takes you to the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 29,
    "title": "Trading Favor",
    "content": "You trade a favor for the Golden Spoon’s location.",
    "isEnd": true,
  },
  {
    "chapterIndex": 30,
    "title": "Goblin Celebration",
    "content": "The goblins celebrate and reveal the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 31,
    "title": "Witch's Potion",
    "content": "Giggles’s potion reveals the Golden Spoon’s location.",
    "isEnd": true,
  },
  {
    "chapterIndex": 32,
    "title": "Learning Spell",
    "content": "You learn a spell that leads you to the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 33,
    "title": "Helping Giggles",
    "content": "Helping Giggles earns you the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 34,
    "title": "Bubbling Laughter",
    "content": "The bubbling laughter guides you to the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 35,
    "title": "Swamp Lily",
    "content": "The glowing swamp lily reveals the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 36,
    "title": "Marsh Creatures",
    "content": "The marsh creatures lead you to the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 37,
    "title": "Hidden Glade",
    "content": "The hidden glade holds the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 38,
    "title": "Treasure Chest",
    "content": "The treasure chest contains the Golden Spoon.",
    "isEnd": true,
  },
  {
    "chapterIndex": 39,
    "title": "Wise Old Toad",
    "content": "The wise old toad directs you to the Golden Spoon.",
    "isEnd": true,
  },
];

module.exports = { title, author, description, imageUrl, price, genre, tags, chapters };
