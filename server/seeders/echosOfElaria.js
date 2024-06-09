const title = 'The Echoes of Elaria: A Tale of Love and Loss';
const author = 'questMaster';
const description = 'In the ethereal kingdom of Elaria, the benevolent King Thalion embarks on a quest to find the Flower of Hope to save his beloved daughter. Follow his journey through the Enchanted Forest where love and sacrifice intertwine.';
const imageUrl = '/images/echoes-of-elaria.jpg';
const price = 4;
const genre = 'Fantasy';
const tags = [
    'love',
    'sacrifice',
    'magic',
    'heartbreaking'
];

const chapters = [
    {
        "chapterIndex": 0,
        "title": "The King's Quest",
        "content": "You hear of the Flower of Hope that can save the princess. Where do you start your journey?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Enter the Enchanted Forest.",
                "nextChapterIndex": 1,
            },
            {
                "choiceText": "Consult with the kingdom’s wisest elder.",
                "nextChapterIndex": 2,
            },
            {
                "choiceText": "Seek help from the royal wizard.",
                "nextChapterIndex": 3,
            },
        ],
    },
    {
        "chapterIndex": 1,
        "title": "Enchanted Forest",
        "content": "You enter the Enchanted Forest. What do you want to do next?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Follow the path of glowing flowers.",
                "nextChapterIndex": 4,
            },
            {
                "choiceText": "Speak with the forest spirits.",
                "nextChapterIndex": 5,
            },
            {
                "choiceText": "Search for clues in the ancient trees.",
                "nextChapterIndex": 6,
            },
        ],
    },
    {
        "chapterIndex": 2,
        "title": "Wisest Elder",
        "content": "You consult with the kingdom’s wisest elder. What do you want to do next?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Learn about the Flower of Hope’s location.",
                "nextChapterIndex": 7,
            },
            {
                "choiceText": "Seek advice on the journey ahead.",
                "nextChapterIndex": 8,
            },
            {
                "choiceText": "Gather supplies for the journey.",
                "nextChapterIndex": 9,
            },
        ],
    },
    {
        "chapterIndex": 3,
        "title": "Royal Wizard",
        "content": "You seek help from the royal wizard. What do you want to do next?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Receive a magical artifact for protection.",
                "nextChapterIndex": 10,
            },
            {
                "choiceText": "Learn a spell to guide you to the Flower.",
                "nextChapterIndex": 11,
            },
            {
                "choiceText": "Get a map to navigate the Enchanted Forest.",
                "nextChapterIndex": 12,
            },
        ],
    },
    {
        "chapterIndex": 4,
        "title": "Path of Glowing Flowers",
        "content": "You follow the path of glowing flowers. What do you want to do next?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Discover a hidden grove.",
                "nextChapterIndex": 13,
            },
            {
                "choiceText": "Encounter a mystical creature.",
                "nextChapterIndex": 14,
            },
            {
                "choiceText": "Find a magical stream with healing properties.",
                "nextChapterIndex": 15,
            },
        ],
    },
    {
        "chapterIndex": 5,
        "title": "Forest Spirits",
        "content": "You speak with the forest spirits. What do you want to do next?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Gain wisdom about the Flower of Hope.",
                "nextChapterIndex": 16,
            },
            {
                "choiceText": "Receive a blessing for your journey.",
                "nextChapterIndex": 17,
            },
            {
                "choiceText": "Learn about the trials you will face.",
                "nextChapterIndex": 18,
            },
        ],
    },
    {
        "chapterIndex": 6,
        "title": "Ancient Trees",
        "content": "You search for clues in the ancient trees. What do you want to do next?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Find carvings that tell a story.",
                "nextChapterIndex": 19,
            },
            {
                "choiceText": "Discover a hidden pathway.",
                "nextChapterIndex": 20,
            },
            {
                "choiceText": "Uncover an ancient relic.",
                "nextChapterIndex": 21,
            },
        ],
    },
    {
        "chapterIndex": 7,
        "title": "Flower's Location",
        "content": "You learn about the Flower of Hope’s location. What do you want to do next?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Prepare to enter the deepest part of the forest.",
                "nextChapterIndex": 22,
            },
            {
                "choiceText": "Gather companions for the journey.",
                "nextChapterIndex": 23,
            },
            {
                "choiceText": "Seek more information from the elder.",
                "nextChapterIndex": 24,
            },
        ],
    },
    {
        "chapterIndex": 8,
        "title": "Advice for the Journey",
        "content": "You seek advice on the journey ahead. What do you want to do next?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Train in survival skills.",
                "nextChapterIndex": 25,
            },
            {
                "choiceText": "Learn about the dangers of the forest.",
                "nextChapterIndex": 26,
            },
            {
                "choiceText": "Receive a protective charm.",
                "nextChapterIndex": 27,
            },
        ],
    },
    {
        "chapterIndex": 9,
        "title": "Gathering Supplies",
        "content": "You gather supplies for the journey. What do you want to do next?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Collect healing herbs and potions.",
                "nextChapterIndex": 28,
            },
            {
                "choiceText": "Prepare food and water for the trip.",
                "nextChapterIndex": 29,
            },
            {
                "choiceText": "Pack warm clothing and shelter materials.",
                "nextChapterIndex": 30,
            },
        ],
    },
    {
        "chapterIndex": 10,
        "title": "Magical Artifact",
        "content": "You receive a magical artifact for protection. What do you want to do next?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Learn how to use the artifact.",
                "nextChapterIndex": 31,
            },
            {
                "choiceText": "Test the artifact’s power.",
                "nextChapterIndex": 32,
            },
            {
                "choiceText": "Keep the artifact hidden for emergencies.",
                "nextChapterIndex": 33,
            },
        ],
    },
    {
        "chapterIndex": 11,
        "title": "Learning a Spell",
        "content": "You learn a spell to guide you to the Flower. What do you want to do next?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Practice casting the spell.",
                "nextChapterIndex": 34,
            },
            {
                "choiceText": "Memorize the spell’s incantation.",
                "nextChapterIndex": 35,
            },
            {
                "choiceText": "Seek advice on using the spell wisely.",
                "nextChapterIndex": 36,
            },
        ],
    },
    {
        "chapterIndex": 12,
        "title": "Navigating the Forest",
        "content": "You get a map to navigate the Enchanted Forest. What do you want to do next?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Study the map for hidden paths.",
                "nextChapterIndex": 37,
            },
            {
                "choiceText": "Use the map to plan your route.",
                "nextChapterIndex": 38,
            },
            {
                "choiceText": "Seek a guide who knows the forest well.",
                "nextChapterIndex": 39,
            },
        ],
    },
    {
        "chapterIndex": 13,
        "title": "Hidden Grove",
        "content": "You find the Flower of Hope and save the princess.",
        "isEnd": true,
    },
    {
        "chapterIndex": 14,
        "title": "Mystical Creature",
        "content": "You find the Flower, but at a great personal cost.",
        "isEnd": true,
    },
    {
        "chapterIndex": 15,
        "title": "Magical Stream",
        "content": "You discover the Flower, but must make a heart-wrenching decision.",
        "isEnd": true,
    },
    {
        "chapterIndex": 16,
        "title": "Gaining Wisdom",
        "content": "You return home with newfound wisdom and stories to tell.",
        "isEnd": true,
    },
    {
        "chapterIndex": 17,
        "title": "Receiving a Blessing",
        "content": "You gain knowledge of the Flower’s true power.",
        "isEnd": true,
    },
    {
        "chapterIndex": 18,
        "title": "Learning Trials",
        "content": "You decide to protect the Flower’s secret for future generations.",
        "isEnd": true,
    },
    {
        "chapterIndex": 19,
        "title": "Carvings' Story",
        "content": "You make an unexpected ally who enriches your journey.",
        "isEnd": true,
    },
    {
        "chapterIndex": 20,
        "title": "Hidden Pathway",
        "content": "You face a final challenge that brings great rewards.",
        "isEnd": true,
    },
    {
        "chapterIndex": 21,
        "title": "Ancient Relic",
        "content": "You discover something even more valuable than the Flower.",
        "isEnd": true,
    },
    {
        "chapterIndex": 22,
        "title": "Deepest Part of Forest",
        "content": "You uncover an ancient prophecy about your destiny.",
        "isEnd": true,
    },
    {
        "chapterIndex": 23,
        "title": "Gathering Companions",
        "content": "You find a portal to another world full of wonders.",
        "isEnd": true,
    },
    {
        "chapterIndex": 24,
        "title": "More Information",
        "content": "You are awarded a medal of honor by the local king.",
        "isEnd": true,
    },
    {
        "chapterIndex": 25,
        "title": "Survival Skills",
        "content": "You discover a hidden talent within yourself.",
        "isEnd": true,
    },
    {
        "chapterIndex": 26,
        "title": "Forest Dangers",
        "content": "You unlock the secrets of an ancient civilization.",
        "isEnd": true,
    },
    {
        "chapterIndex": 27,
        "title": "Protective Charm",
        "content": "You write a bestselling book about your adventure.",
        "isEnd": true,
    },
    {
        "chapterIndex": 28,
        "title": "Healing Herbs",
        "content": "You find a map leading to even greater adventures.",
        "isEnd": true,
    },
    {
        "chapterIndex": 29,
        "title": "Food and Water",
        "content": "You are invited to join an exclusive explorers' guild.",
        "isEnd": true,
    },
    {
        "chapterIndex": 30,
        "title": "Warm Clothing",
        "content": "You establish a museum to share your findings with the world.",
        "isEnd": true,
    },
    {
        "chapterIndex": 31,
        "title": "Artifact Usage",
        "content": "You find the Flower and help a community with its power.",
        "isEnd": true,
    },
    {
        "chapterIndex": 32,
        "title": "Artifact's Power",
        "content": "You invent a new tool inspired by your journey.",
        "isEnd": true,
    },
    {
        "chapterIndex": 33,
        "title": "Hiding Artifact",
        "content": "You become a mentor for future adventurers.",
        "isEnd": true,
    },
    {
        "chapterIndex": 34,
        "title": "Practicing Spell",
        "content": "You discover the power of true friendship and loyalty.",
        "isEnd": true,
    },
    {
        "chapterIndex": 35,
        "title": "Memorizing Incantation",
        "content": "You discover a rare and precious artifact.",
        "isEnd": true,
    },
    {
        "chapterIndex": 36,
        "title": "Using Spell Wisely",
        "content": "You become the guardian of a sacred site.",
        "isEnd": true,
    },
    {
        "chapterIndex": 37,
        "title": "Studying Map",
        "content": "You retrieve the Flower and are celebrated as a hero in a grand festival.",
        "isEnd": true,
    },
    {
        "chapterIndex": 38,
        "title": "Planning Route",
        "content": "You find a magical artifact that brings joy to many.",
        "isEnd": true,
    },
    {
        "chapterIndex": 39,
        "title": "Forest Guide",
        "content": "You become an ambassador for peace and harmony between realms.",
        "isEnd": true,
    },
];

module.exports = { title, author, description, imageUrl, price, genre, tags, chapters };
