const title = 'Neon Abyss: The Cyberpunk Adventure';
const author = 'cyberExplorer';
const description = 'In a dystopian future, the neon-lit city of Neo-Tokyo is rife with corruption and cyber-enhancements. You are a skilled hacker with a mission to expose the corporate overlords controlling the city. Navigate the dark alleys, hack into secure networks, and make choices that will determine the fate of Neo-Tokyo. Will you ignite a revolution or become a pawn in the corporate game?';
const imageUrl = '/images/neon-abyss.jpg';
const genre = 'Cyberpunk';
const tags = [
    'hacker revolution',
    'dystopian future',
    'cyber enhancements'
]

const chapters = [
    {
        "chapterIndex": 0,
        "title": "The Hacker's Mission",
        "content": "You receive a cryptic message from an anonymous source. The message contains details of a high-profile corporate server with critical data that could expose the corrupt practices of the city’s overlords. Do you accept the mission and hack into the server?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept the mission and start the hack.",
                "nextChapterIndex": 1,
            },
            {
                "choiceText": "Ignore the message and continue with your life.",
                "nextChapterIndex": 2,
            },
            {
                "choiceText": "Investigate the source of the message.",
                "nextChapterIndex": 3,
            }
        ]
    },
    {
        "chapterIndex": 1,
        "title": "Hacking the Server",
        "content": "You prepare your equipment and start the hack. The server's defenses are tough, but you manage to break through. You find incriminating data on a powerful corporation. As you download the files, alarms go off. Do you finish the download or abort and escape?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Finish the download.",
                "nextChapterIndex": 4,
            },
            {
                "choiceText": "Abort and escape.",
                "nextChapterIndex": 5,
            },
            {
                "choiceText": "Erase your traces and then escape.",
                "nextChapterIndex": 6,
            }
        ]
    },
    {
        "chapterIndex": 2,
        "title": "A Safe Life",
        "content": "You choose to ignore the message and continue with your life. The city remains under the control of the corrupt corporations, and you blend into the shadows, living a quiet but unremarkable life.",
        "isEnd": true,
    },
    {
        "chapterIndex": 3,
        "title": "Investigating the Source",
        "content": "You decide to investigate the source of the message. Tracing the IP address, you discover it came from a group of underground hackers known as the Neon Rebellion. They seek your help to bring down the corporate overlords. Do you join them?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Join the Neon Rebellion.",
                "nextChapterIndex": 7,
            },
            {
                "choiceText": "Decline and stay independent.",
                "nextChapterIndex": 8,
            },
            {
                "choiceText": "Betray them to the corporations.",
                "nextChapterIndex": 9,
            }
        ]
    },
    {
        "chapterIndex": 4,
        "title": "Data Acquired",
        "content": "You manage to finish the download and escape just in time. With the data in hand, you can now expose the corruption. Do you release the data to the public, sell it to a rival corporation, or use it to blackmail the overlords?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Release the data to the public.",
                "nextChapterIndex": 10,
            },
            {
                "choiceText": "Sell it to a rival corporation.",
                "nextChapterIndex": 11,
            },
            {
                "choiceText": "Blackmail the overlords.",
                "nextChapterIndex": 12,
            }
        ]
    },
    {
        "chapterIndex": 5,
        "title": "Narrow Escape",
        "content": "You abort the download and make a hasty escape, barely evading the corporate security forces. Though you escaped, you missed the opportunity to gather critical data. Do you try again, seek help from others, or give up the mission?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Try the hack again.",
                "nextChapterIndex": 13,
            },
            {
                "choiceText": "Seek help from other hackers.",
                "nextChapterIndex": 14,
            },
            {
                "choiceText": "Give up the mission.",
                "nextChapterIndex": 15,
            }
        ]
    },
    {
        "chapterIndex": 6,
        "title": "Erased Traces",
        "content": "You take the time to erase your traces and then escape. Although you didn’t get the data, you remain undetected. The Neon Rebellion contacts you, impressed by your skills. Do you join them, stay independent, or turn them in?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Join the Neon Rebellion.",
                "nextChapterIndex": 7,
            },
            {
                "choiceText": "Stay independent.",
                "nextChapterIndex": 8,
            },
            {
                "choiceText": "Turn them in.",
                "nextChapterIndex": 9,
            }
        ]
    },
    {
        "chapterIndex": 7,
        "title": "Joining the Neon Rebellion",
        "content": "You decide to join the Neon Rebellion. With their resources and your skills, you plan larger operations to expose and dismantle the corporations. Your actions spark a city-wide rebellion, and the fight for freedom begins.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Plan an attack on the main corporate headquarters.",
                "nextChapterIndex": 16,
            },
            {
                "choiceText": "Hack into the city's surveillance systems.",
                "nextChapterIndex": 17,
            },
            {
                "choiceText": "Infiltrate the corporate elites.",
                "nextChapterIndex": 18,
            }
        ]
    },
    {
        "chapterIndex": 8,
        "title": "Remaining Independent",
        "content": "You choose to stay independent, relying on your own skills and resources. The path is difficult, and you face many challenges alone. Despite this, you continue to fight against the corporations, one hack at a time.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Launch solo attacks on corporate servers.",
                "nextChapterIndex": 19,
            },
            {
                "choiceText": "Seek out allies in unexpected places.",
                "nextChapterIndex": 20,
            },
            {
                "choiceText": "Focus on small, impactful missions.",
                "nextChapterIndex": 21,
            }
        ]
    },
    {
        "chapterIndex": 9,
        "title": "Betraying the Rebellion",
        "content": "You decide to betray the Neon Rebellion to the corporations. You provide valuable information to the corporate overlords, gaining their trust and rewards. However, this comes at the cost of the rebellion and the freedom of the city.",
        "isEnd": true,
    },
    {
        "chapterIndex": 10,
        "title": "Public Exposure",
        "content": "You release the data to the public, causing an uproar. The citizens of Neo-Tokyo rise up against the corporations, inspired by your bravery. The city plunges into chaos, but a new hope for freedom emerges.",
        "isEnd": true,
    },
    {
        "chapterIndex": 11,
        "title": "Corporate Deal",
        "content": "You sell the data to a rival corporation, gaining a substantial reward. However, this only shifts the power balance, and the corruption continues under new management. You become wealthier, but the city remains unchanged.",
        "isEnd": true,
    },
    {
        "chapterIndex": 12,
        "title": "Blackmail Power",
        "content": "You use the data to blackmail the corporate overlords. They comply with your demands, but you become entangled in a dangerous game of power and deceit. The city remains under corporate control, but you hold significant influence.",
        "isEnd": true,
    },
    {
        "chapterIndex": 13,
        "title": "Retrying the Hack",
        "content": "Determined to succeed, you attempt the hack again. This time, you are better prepared and manage to secure the data. With the incriminating information, you now have the power to make a significant impact.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Release the data to the public.",
                "nextChapterIndex": 10,
            },
            {
                "choiceText": "Sell it to a rival corporation.",
                "nextChapterIndex": 11,
            },
            {
                "choiceText": "Blackmail the overlords.",
                "nextChapterIndex": 12,
            }
        ]
    },
    {
        "chapterIndex": 14,
        "title": "Seeking Help",
        "content": "You seek help from other hackers. The Neon Rebellion agrees to assist you in the mission. With their support, you plan a coordinated attack on the corporate servers, aiming to expose the corruption.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Hack the main corporate server.",
                "nextChapterIndex": 16,
            },
            {
                "choiceText": "Infiltrate the corporate headquarters.",
                "nextChapterIndex": 18,
            },
            {
                "choiceText": "Disrupt the city's surveillance system.",
                "nextChapterIndex": 17,
            }
        ]
    },
    {
        "chapterIndex": 15,
        "title": "Giving Up the Mission",
        "content": "You decide to give up the mission. The corporations remain in power, and you continue your life as a skilled but unremarkable hacker. The city's fate is left in the hands of others.",
        "isEnd": true,
    },
    {
        "chapterIndex": 16,
        "title": "Corporate Attack",
        "content": "You plan an attack on the main corporate headquarters. The operation is risky, but with careful planning and execution, you manage to infiltrate and cause significant damage, igniting a city-wide rebellion.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue attacking corporate targets.",
                "nextChapterIndex": 22,
            },
            {
                "choiceText": "Focus on protecting the rebellion.",
                "nextChapterIndex": 23,
            },
            {
                "choiceText": "Seek new allies in the fight.",
                "nextChapterIndex": 24,
            }
        ]
    },
    {
        "chapterIndex": 17,
        "title": "Surveillance Disruption",
        "content": "You hack into the city's surveillance systems, causing widespread disruption. The corporations are left blind, allowing the rebellion to gain ground. The city is thrown into chaos, and the fight for freedom intensifies.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Coordinate further attacks.",
                "nextChapterIndex": 22,
            },
            {
                "choiceText": "Protect the rebellion.",
                "nextChapterIndex": 23,
            },
            {
                "choiceText": "Seek new allies.",
                "nextChapterIndex": 24,
            }
        ]
    },
    {
        "chapterIndex": 18,
        "title": "Infiltrating the Elites",
        "content": "You infiltrate the corporate elites, gaining access to their inner circle. With inside information, you are able to plan precise attacks and expose their corruption from within. The rebellion gains momentum as more people join the cause.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Plan an attack on the main corporate headquarters.",
                "nextChapterIndex": 16,
            },
            {
                "choiceText": "Hack into the city's surveillance systems.",
                "nextChapterIndex": 17,
            },
            {
                "choiceText": "Infiltrate the corporate elites further.",
                "nextChapterIndex": 25,
            }
        ]
    },
    {
        "chapterIndex": 19,
        "title": "Solo Attacks",
        "content": "You launch solo attacks on corporate servers, causing significant disruptions. Although you face many dangers alone, your actions inspire others to join the fight. The rebellion slowly gains strength.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Join forces with other hackers.",
                "nextChapterIndex": 14,
            },
            {
                "choiceText": "Continue solo attacks.",
                "nextChapterIndex": 16,
            },
            {
                "choiceText": "Seek new allies.",
                "nextChapterIndex": 24,
            }
        ]
    },
    {
        "chapterIndex": 20,
        "title": "Unexpected Allies",
        "content": "You seek out allies in unexpected places, finding support from various underground groups. Together, you coordinate attacks and gain ground against the corporations. The rebellion grows stronger with each victory.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Coordinate further attacks.",
                "nextChapterIndex": 22,
            },
            {
                "choiceText": "Protect the rebellion.",
                "nextChapterIndex": 23,
            },
            {
                "choiceText": "Seek more allies.",
                "nextChapterIndex": 24,
            }
        ]
    },
    {
        "chapterIndex": 21,
        "title": "Impactful Missions",
        "content": "You focus on small, impactful missions, striking where it hurts the corporations most. Your precise attacks cause significant damage, and the rebellion gains ground. Your reputation as a skilled hacker grows.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Coordinate further attacks.",
                "nextChapterIndex": 22,
            },
            {
                "choiceText": "Protect the rebellion.",
                "nextChapterIndex": 23,
            },
            {
                "choiceText": "Seek new allies.",
                "nextChapterIndex": 24,
            }
        ]
    },
    {
        "chapterIndex": 22,
        "title": "Further Attacks",
        "content": "You coordinate further attacks on corporate targets, causing widespread disruption. The rebellion gains more ground, and the city's citizens rally to your cause. The fight for freedom continues.",
        "isEnd": true,
    },
    {
        "chapterIndex": 23,
        "title": "Protecting the Rebellion",
        "content": "You focus on protecting the rebellion, ensuring its survival. Your efforts help the movement grow, and more people join the fight. The corporations begin to lose their grip on the city.",
        "isEnd": true,
    },
    {
        "chapterIndex": 24,
        "title": "New Allies",
        "content": "You seek out new allies, finding support from various underground groups. Together, you launch coordinated attacks and gain significant victories. The rebellion grows stronger, and hope for a free city emerges.",
        "isEnd": true,
    },
    {
        "chapterIndex": 25,
        "title": "Deep Infiltration",
        "content": "You infiltrate the corporate elites further, gaining access to their deepest secrets. With this knowledge, you plan precise attacks that cripple the corporations. The rebellion gains momentum, and the city edges closer to freedom.",
        "isEnd": true,
    }
]

module.exports = { title, author, description, imageUrl, genre, tags, chapters }
