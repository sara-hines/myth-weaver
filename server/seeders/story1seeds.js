const title = 'The Quest for the Eternal Light'; 
const author = 'fableFan'; 
const description = 'In the mystical realm of Eldoria, you are a young adventurer chosen by fate to seek out the fabled Eternal Light, a relic said to hold the power to vanquish darkness and bring peace to the fractured lands. Navigate through treacherous terrains, decipher cryptic prophecies, and make choices that will shape the future of Eldoria. Will you be the hero who saves the realm or a fallen adventurer lost to time?';
const imageUrl = '/images/epic-fantasy.jpg';
const genre = 'Epic Fantasy';
const tags = [
    `hero's journey`,
    'magic and adventure', 
    'magical artifacts'
]

const chapters = [
    {  
        "chapterIndex": 0, 
        "title": "The Call to Adventure",
        "content": "You are a humble villager living on the outskirts of Eldoria. One day, an enigmatic stranger arrives at your doorstep, claiming that you are the chosen one destined to find the Eternal Light. The stranger hands you an ancient map and a talisman for protection. Do you accept the call to adventure and set out on this perilous journey?",
        "isEnd": false, 
        "choices": [
            {
                "choiceText": "Accept the call and begin your journey.",
                "nextChapterIndex": 1,
            },
            {
                "choiceText": "Refuse the stranger and stay in the village.",
                "nextChapterIndex": 2,
            },
            {
                "choiceText": "Ask the stranger for more information.",
                "nextChapterIndex": 3,
            }
        ]
    },
    {  
        "chapterIndex": 1, 
        "title": "A Journey Begins",
        "content": "With the map and talisman in hand, you set out on your quest. The road ahead is long and filled with uncertainty, but your determination drives you forward. As you travel through dense forests and over rugged mountains, you encounter a group of bandits blocking your path.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Fight the bandits.",
                "nextChapterIndex": 4,
            },
            {
                "choiceText": "Negotiate with the bandits.",
                "nextChapterIndex": 5,
            },
            {
                "choiceText": "Find an alternate route.",
                "nextChapterIndex": 6,
            }
        ]
    },
    {
        "chapterIndex": 2, 
        "title": "A Life of Regret",
        "content": "You decide to stay in the village, ignoring the stranger's plea. Years pass, and the darkness grows, engulfing Eldoria. You are haunted by dreams of what might have been and the lives you could have saved. As the realm falls into chaos, you realize that your choice has led to the doom of many.",
        "isEnd": true,
    },
    {
        "chapterIndex": 3, 
        "title": "More Information",
        "content": "You ask the stranger for more information about the quest. The stranger reveals that the Eternal Light is the only hope to save Eldoria from a looming darkness. The urgency in the stranger's voice convinces you that this mission is of utmost importance. Do you decide to embark on the journey now?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept the call and begin your journey.",
                "nextChapterIndex": 1,
            },
            {
                "choiceText": "Refuse the stranger and stay in the village.",
                "nextChapterIndex": 2,
            },
            {
                "choiceText": "Ask for a companion to join you.",
                "nextChapterIndex": 7,
            }
        ]
    },
    {
        "chapterIndex": 4, 
        "title": "Battle in the Forest",
        "content": "You draw your sword and charge at the bandits. The clash of steel rings through the forest as you fight bravely. With a surge of strength and skill, you defeat the bandits and continue your journey, but not without injuries. Do you stop to tend to your wounds or push on despite the pain?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Tend to your wounds.",
                "nextChapterIndex": 8,
            },
            {
                "choiceText": "Push on despite the pain.",
                "nextChapterIndex": 9,
            },
            {
                "choiceText": "Look for a healer nearby.",
                "nextChapterIndex": 10,
            }
        ]
    },
    {
        "chapterIndex": 5, 
        "title": "An Uneasy Alliance",
        "content": "You attempt to negotiate with the bandits, offering them gold and safe passage. The bandit leader, intrigued by your bravery, agrees to let you pass but demands you complete a task for them in return. Do you agree to the bandit leader's terms or find another way to proceed?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Agree to the bandit leader's terms.",
                "nextChapterIndex": 11,
            },
            {
                "choiceText": "Refuse and find another way.",
                "nextChapterIndex": 12,
            },
            {
                "choiceText": "Offer a different bargain.",
                "nextChapterIndex": 13,
            }
        ]
    },
    {
        "chapterIndex": 6, 
        "title": "Lost in the Wilderness",
        "content": "You decide to find an alternate route, venturing deeper into the forest. As night falls, you lose your way and the forest seems to close in around you. Exhausted and disoriented, you stumble upon a mysterious hermit who offers to guide you out if you help him with a small task.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Help the hermit.",
                "nextChapterIndex": 14,
            },
            {
                "choiceText": "Refuse the hermit's offer.",
                "nextChapterIndex": 15,
            },
            {
                "choiceText": "Try to find your way alone.",
                "nextChapterIndex": 16,
            }
        ]
    },
    {
        "chapterIndex": 7, 
        "title": "A New Companion",
        "content": "You ask the stranger if someone can accompany you on this perilous journey. The stranger introduces you to Elara, a skilled archer with a mysterious past. Together, you set out on your quest, the bond of companionship bolstering your courage.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Head towards the forest.",
                "nextChapterIndex": 1,
            },
            {
                "choiceText": "Visit a nearby town for supplies.",
                "nextChapterIndex": 17,
            },
            {
                "choiceText": "Ask Elara about her past.",
                "nextChapterIndex": 18,
            }
        ]
    },
    {
        "chapterIndex": 8, 
        "title": "Rest and Recovery",
        "content": "You find a safe spot to tend to your wounds and rest for the night. In the morning, you feel rejuvenated and ready to continue your quest. As you pack your belongings, you notice a strange glow emanating from your talisman. Do you investigate the talisman or ignore it and move on?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Investigate the talisman.",
                "nextChapterIndex": 19,
            },
            {
                "choiceText": "Ignore it and move on.",
                "nextChapterIndex": 20,
            },
            {
                "choiceText": "Show the talisman to someone knowledgeable.",
                "nextChapterIndex": 21,
            }
        ]
    },
    {
        "chapterIndex": 9, 
        "title": "Pushing Through the Pain",
        "content": "Despite your injuries, you press on. The pain is excruciating, but your will to succeed keeps you moving. As you reach the edge of the forest, you encounter a wise old sage who offers to heal you and provide guidance for your journey. Do you accept the sage's help or decline and continue alone?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept the sage's help.",
                "nextChapterIndex": 22,
            },
            {
                "choiceText": "Decline and continue alone.",
                "nextChapterIndex": 23,
            },
            {
                "choiceText": "Ask the sage for a potion.",
                "nextChapterIndex": 24,
            }
        ]
    },
    {
        "chapterIndex": 10, 
        "title": "Seeking a Healer",
        "content": "You look for a healer nearby and find a small village where a healer resides. The healer agrees to treat your wounds in exchange for a favor. Do you accept the healer's request, offer payment instead, or continue on without treatment?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept the healer's request.",
                "nextChapterIndex": 25,
            },
            {
                "choiceText": "Offer payment instead.",
                "nextChapterIndex": 26,
            },
            {
                "choiceText": "Continue on without treatment.",
                "nextChapterIndex": 27,
            }
        ]
    },
    {
        "chapterIndex": 11, 
        "title": "The Bandit's Task",
        "content": "The bandit leader instructs you to retrieve a stolen artifact from a rival group. You set out to complete this task, knowing it will earn you safe passage. After a dangerous encounter, you manage to retrieve the artifact and return to the bandits. They honor their word and allow you to continue your journey.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey.",
                "nextChapterIndex": 28,
            },
            {
                "choiceText": "Ask the bandits for more help.",
                "nextChapterIndex": 29,
            },
            {
                "choiceText": "Offer to join the bandits.",
                "nextChapterIndex": 30,
            }
        ]
    },
    {
        "chapterIndex": 12, 
        "title": "The Bandit's Wrath",
        "content": "Refusing the bandit leader's terms, you try to find another way. Angered by your defiance, the bandits attack you. Despite your best efforts, you are outnumbered and overwhelmed. Your journey comes to a brutal end as the bandits' blades claim your life.",
        "isEnd": true,
    },
    {
        "chapterIndex": 13, 
        "title": "A New Bargain",
        "content": "You offer the bandit leader a different bargain, suggesting a trade of goods instead of completing a task. The bandit leader considers your offer and eventually agrees. With the new bargain struck, you continue your journey.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey.",
                "nextChapterIndex": 28,
            },
            {
                "choiceText": "Ask the bandits for directions.",
                "nextChapterIndex": 31,
            },
            {
                "choiceText": "Request an escort through the forest.",
                "nextChapterIndex": 32,
            }
        ]
    },
    {
        "chapterIndex": 14, 
        "title": "The Hermit's Request",
        "content": "You agree to help the hermit, who reveals that he needs a rare herb to complete a powerful potion. Together, you venture into the forest and find the herb. In return, the hermit guides you out of the forest and shares a cryptic prophecy about your quest.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Heed the hermit's prophecy.",
                "nextChapterIndex": 33,
            },
            {
                "choiceText": "Ignore the prophecy and continue.",
                "nextChapterIndex": 34,
            },
            {
                "choiceText": "Ask the hermit for more details.",
                "nextChapterIndex": 35,
            }
        ]
    },
    {
        "chapterIndex": 15, 
        "title": "Lost Forever",
        "content": "You refuse the hermit's offer, determined to find your own way. However, the forest's labyrinthine paths lead you deeper into its heart. Days turn into weeks, and you are never seen again. Your bones become a part of the forest's dark secrets.",
        "isEnd": true,
    },
    {
        "chapterIndex": 16, 
        "title": "A Perilous Journey",
        "content": "You try to find your way alone, but the forest's dense foliage and confusing paths make it nearly impossible. Exhausted and hungry, you stumble upon a hidden cave. Do you enter the cave for shelter, continue trying to find your way, or call out for help?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Enter the cave for shelter.",
                "nextChapterIndex": 36,
            },
            {
                "choiceText": "Continue trying to find your way.",
                "nextChapterIndex": 37,
            },
            {
                "choiceText": "Call out for help.",
                "nextChapterIndex": 38,
            }
        ]
    },
    {
        "chapterIndex": 17, 
        "title": "Gathering Supplies",
        "content": "You decide to visit a nearby town for supplies before beginning your quest. In the town, you encounter a merchant who offers you a powerful artifact for your journey. Do you buy the artifact, gather basic supplies, or seek information from the townsfolk?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Buy the artifact.",
                "nextChapterIndex": 39,
            },
            {
                "choiceText": "Gather basic supplies.",
                "nextChapterIndex": 40,
            },
            {
                "choiceText": "Seek information from the townsfolk.",
                "nextChapterIndex": 41,
            }
        ]
    },
    {
        "chapterIndex": 18, 
        "title": "Elara's Past",
        "content": "You ask Elara about her past. She reveals that she is searching for her lost brother who disappeared while seeking the Eternal Light. Her determination and strength inspire you, and you feel a deeper connection forming.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Ask Elara to lead the way.",
                "nextChapterIndex": 42,
            },
            {
                "choiceText": "Offer to help find her brother.",
                "nextChapterIndex": 43,
            },
            {
                "choiceText": "Continue the journey together.",
                "nextChapterIndex": 44,
            }
        ]
    },
    {
        "chapterIndex": 19, 
        "title": "The Talisman's Secret",
        "content": "Curious about the glowing talisman, you investigate it and discover hidden runes that reveal a forgotten language. The runes speak of a hidden power that can aid you in your quest. Empowered by this newfound knowledge, you continue your journey with renewed vigor.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Follow the path indicated by the runes.",
                "nextChapterIndex": 45,
            },
            {
                "choiceText": "Continue on your original path.",
                "nextChapterIndex": 46,
            },
            {
                "choiceText": "Seek out a sage for more information.",
                "nextChapterIndex": 47,
            }
        ]
    },
    {
        "chapterIndex": 20, 
        "title": "Moving On",
        "content": "You decide to ignore the talisman and continue your journey. The road ahead is fraught with danger, but you press on. As you venture further, you come across a mystical lake that is said to hold ancient secrets. Do you investigate the lake or continue past it?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Investigate the lake.",
                "nextChapterIndex": 48,
            },
            {
                "choiceText": "Continue past the lake.",
                "nextChapterIndex": 49,
            },
            {
                "choiceText": "Set up camp nearby.",
                "nextChapterIndex": 50,
            }
        ]
    },
    {
        "chapterIndex": 21, 
        "title": "Seeking Knowledge",
        "content": "You decide to show the talisman to someone knowledgeable. You find a sage who reveals that the talisman is a key to an ancient temple. The sage offers to accompany you to the temple. Do you accept the sage's offer, venture to the temple alone, or continue your quest without investigating further?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept the sage's offer.",
                "nextChapterIndex": 51,
            },
            {
                "choiceText": "Venture to the temple alone.",
                "nextChapterIndex": 52,
            },
            {
                "choiceText": "Continue your quest.",
                "nextChapterIndex": 53,
            }
        ]
    },
    {
        "chapterIndex": 22, 
        "title": "Guidance of the Sage",
        "content": "You accept the sage's help, and he heals your wounds with a touch of his staff. The sage shares wisdom about the Eternal Light and provides you with a powerful amulet to aid you on your quest. With the sage's blessings, you continue your journey, feeling stronger and more confident.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey with the amulet.",
                "nextChapterIndex": 54,
            },
            {
                "choiceText": "Ask the sage for more guidance.",
                "nextChapterIndex": 55,
            },
            {
                "choiceText": "Seek out a nearby village.",
                "nextChapterIndex": 56,
            }
        ]
    },
    {
        "chapterIndex": 23, 
        "title": "A Lone Traveler",
        "content": "You decline the sage's help and continue your journey alone. The path is arduous, and without the sage's guidance, you struggle. Eventually, you reach a crossroads where you must choose between a treacherous mountain pass and a dark, foreboding cave.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Take the mountain pass.",
                "nextChapterIndex": 57,
            },
            {
                "choiceText": "Enter the dark cave.",
                "nextChapterIndex": 58,
            },
            {
                "choiceText": "Set up camp and rest.",
                "nextChapterIndex": 59,
            }
        ]
    },
    {
        "chapterIndex": 24, 
        "title": "A Potion's Power",
        "content": "You ask the sage for a potion to help with your journey. The sage gives you a vial of glowing liquid, warning you to use it only in times of great need. With the potion in hand, you continue your quest, feeling a sense of security.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey.",
                "nextChapterIndex": 60,
            },
            {
                "choiceText": "Ask the sage about the potion.",
                "nextChapterIndex": 61,
            },
            {
                "choiceText": "Test the potion's effects.",
                "nextChapterIndex": 62,
            }
        ]
    },
    {
        "chapterIndex": 25, 
        "title": "The Healer's Request",
        "content": "You accept the healer's request and agree to retrieve a rare herb from the forest. The task is dangerous, but you manage to find the herb and return to the healer. Grateful, the healer treats your wounds and gives you a charm for protection.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey.",
                "nextChapterIndex": 63,
            },
            {
                "choiceText": "Ask the healer for more help.",
                "nextChapterIndex": 64,
            },
            {
                "choiceText": "Stay in the village for a while.",
                "nextChapterIndex": 65,
            }
        ]
    },
    {
        "chapterIndex": 26, 
        "title": "A Generous Payment",
        "content": "You offer the healer a generous payment for treating your wounds. The healer accepts and provides you with a potion to aid you on your journey. With your wounds healed and a new potion in hand, you continue your quest.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey.",
                "nextChapterIndex": 63,
            },
            {
                "choiceText": "Ask the healer about the potion.",
                "nextChapterIndex": 66,
            },
            {
                "choiceText": "Seek more supplies in the village.",
                "nextChapterIndex": 67,
            }
        ]
    },
    {
        "chapterIndex": 27, 
        "title": "Unhealed and Weary",
        "content": "You decide to continue on without treatment. The journey is difficult, and your wounds slow you down. Eventually, you find yourself at a crossroads where you must choose between a dense forest and a rocky mountain path.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Take the forest path.",
                "nextChapterIndex": 68,
            },
            {
                "choiceText": "Take the mountain path.",
                "nextChapterIndex": 69,
            },
            {
                "choiceText": "Rest and tend to your wounds yourself.",
                "nextChapterIndex": 70,
            }
        ]
    },
    {
        "chapterIndex": 28, 
        "title": "A New Ally",
        "content": "Having completed the bandit's task, you continue your journey with newfound confidence. Along the way, you meet a fellow traveler named Arion, a skilled mage with his own quest. He offers to join you, believing your paths are intertwined.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept Arion's offer.",
                "nextChapterIndex": 71,
            },
            {
                "choiceText": "Politely decline and continue alone.",
                "nextChapterIndex": 72,
            },
            {
                "choiceText": "Ask Arion about his quest.",
                "nextChapterIndex": 73,
            }
        ]
    },
    {
        "chapterIndex": 29, 
        "title": "Bandit Allies",
        "content": "You ask the bandits for more help on your journey. The bandit leader, seeing potential in you, agrees to send a guide with you. The guide, a rogue named Lira, accompanies you and provides valuable assistance as you continue your quest.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey with Lira.",
                "nextChapterIndex": 74,
            },
            {
                "choiceText": "Part ways with Lira after a while.",
                "nextChapterIndex": 75,
            },
            {
                "choiceText": "Ask Lira about the bandits.",
                "nextChapterIndex": 76,
            }
        ]
    },
    {
        "chapterIndex": 30, 
        "title": "Joining the Bandits",
        "content": "You offer to join the bandits, believing it will help you achieve your goal. The bandit leader accepts, and you become part of their group. However, this choice leads you down a darker path, and you find yourself entangled in their criminal activities.",
        "isEnd": true,
        "content": "You become a member of the bandits, your quest for the Eternal Light forgotten. The life of crime consumes you, and you never fulfill your true destiny.",
    },
    {
        "chapterIndex": 31, 
        "title": "Directions from the Bandits",
        "content": "You ask the bandits for directions through the forest. They provide you with a map and some advice on how to avoid the dangers. With this new information, you continue your journey with more confidence.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Follow the bandit's map.",
                "nextChapterIndex": 77,
            },
            {
                "choiceText": "Explore a different route.",
                "nextChapterIndex": 78,
            },
            {
                "choiceText": "Seek a safer path.",
                "nextChapterIndex": 79,
            }
        ]
    },
    {
        "chapterIndex": 32, 
        "title": "Bandit Escort",
        "content": "You request an escort through the forest, and the bandit leader agrees. With the bandits guiding you, you avoid many dangers and make good progress. Eventually, you part ways and continue your journey alone.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey.",
                "nextChapterIndex": 80,
            },
            {
                "choiceText": "Seek out more allies.",
                "nextChapterIndex": 81,
            },
            {
                "choiceText": "Explore a nearby cave.",
                "nextChapterIndex": 82,
            }
        ]
    },
    {
        "chapterIndex": 33, 
        "title": "Prophecy Fulfilled",
        "content": "Heeding the hermit's prophecy, you follow his guidance and discover a hidden temple deep in the forest. Inside, you find ancient writings that reveal the true nature of the Eternal Light. Armed with this knowledge, you continue your journey with a clear purpose.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey.",
                "nextChapterIndex": 83,
            },
            {
                "choiceText": "Seek more information about the prophecy.",
                "nextChapterIndex": 84,
            },
            {
                "choiceText": "Investigate the temple further.",
                "nextChapterIndex": 85,
            }
        ]
    },
    {
        "chapterIndex": 34, 
        "title": "Ignoring the Prophecy",
        "content": "You choose to ignore the hermit's prophecy and continue on your own path. The road ahead is treacherous, and you soon find yourself caught in a deadly trap set by dark forces who seek to stop you. Your journey ends in a brutal and untimely death.",
        "isEnd": true,
    },
    {
        "chapterIndex": 35, 
        "title": "Seeking Details",
        "content": "You ask the hermit for more details about the prophecy. The hermit reveals that the Eternal Light is hidden in a sacred place protected by powerful guardians. Armed with this knowledge, you continue your journey with a clearer goal.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey.",
                "nextChapterIndex": 83,
            },
            {
                "choiceText": "Seek out the sacred place.",
                "nextChapterIndex": 86,
            },
            {
                "choiceText": "Investigate the guardians.",
                "nextChapterIndex": 87,
            }
        ]
    },
    {
        "chapterIndex": 36, 
        "title": "Shelter in the Cave",
        "content": "You enter the cave for shelter, finding it to be a safe haven from the dangers of the forest. Inside, you discover ancient carvings that tell of a hidden path to the Eternal Light. Do you follow the carvings' directions, rest for the night, or continue exploring the cave?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Follow the carvings' directions.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Rest for the night.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Continue exploring the cave.",
                "nextChapterIndex": 90,
            }
        ]
    }, 
    {
        "chapterIndex": 37, 
        "title": "Lost in the Forest",
        "content": "You decide to continue trying to find your way alone. The forest is unforgiving, and you struggle to make progress. Eventually, you come across a clearing where a mystical creature offers to guide you.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept the creature's guidance.",
                "nextChapterIndex": 84,
            },
            {
                "choiceText": "Decline and continue alone.",
                "nextChapterIndex": 85,
            },
            {
                "choiceText": "Set up camp in the clearing.",
                "nextChapterIndex": 86,
            }
        ]
    },
    {
        "chapterIndex": 38, 
        "title": "A Cry for Help",
        "content": "You call out for help, hoping someone will hear you. After a while, a group of travelers finds you and offers to guide you out of the forest. Grateful for their help, you continue your journey with renewed hope.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Join the travelers for a while.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Ask the travelers about their journey.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 39, 
        "title": "A Powerful Artifact",
        "content": "You decide to buy the artifact from the merchant. The artifact grants you increased strength and magical abilities, which you find invaluable as you continue your quest. With the artifact in hand, you feel more confident in facing the challenges ahead.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey.",
                "nextChapterIndex": 90,
            },
            {
                "choiceText": "Test the artifact's powers.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Ask the merchant about the artifact.",
                "nextChapterIndex": 88,
            }
        ]
    },
    {
        "chapterIndex": 40, 
        "title": "Basic Supplies",
        "content": "You gather basic supplies from the town, ensuring you have enough food, water, and other essentials for your journey. Well-prepared, you set out with a sense of readiness. As you leave the town, you encounter a mysterious traveler who offers to join you.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept the traveler's offer.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Decline and continue alone.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Ask the traveler about their journey.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 41, 
        "title": "Seeking Information",
        "content": "You seek information from the townsfolk, who share stories and legends about the Eternal Light. One tale in particular catches your attention, describing a hidden temple in the mountains. Do you decide to investigate the temple, follow your original path, or seek more information?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Investigate the temple.",
                "nextChapterIndex": 86,
            },
            {
                "choiceText": "Follow your original path.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Seek more information.",
                "nextChapterIndex": 88,
            }
        ]
    },
    {
        "chapterIndex": 42, 
        "title": "Elara Leads the Way",
        "content": "You ask Elara to lead the way, trusting in her experience and knowledge. Together, you navigate through the forest, encountering various challenges. Elara's skills prove invaluable as you continue your quest.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue following Elara.",
                "nextChapterIndex": 83,
            },
            {
                "choiceText": "Take a different route.",
                "nextChapterIndex": 84,
            },
            {
                "choiceText": "Ask Elara about her brother.",
                "nextChapterIndex": 85,
            }
        ]
    },
    {
        "chapterIndex": 43, 
        "title": "Searching for Elara's Brother",
        "content": "You offer to help Elara find her lost brother. Grateful for your support, she shares more details about her brother's last known whereabouts. Together, you set out to find him, hoping that your paths will lead to the Eternal Light.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Follow the clues about her brother.",
                "nextChapterIndex": 86,
            },
            {
                "choiceText": "Continue on your quest.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Seek more information in a nearby town.",
                "nextChapterIndex": 88,
            }
        ]
    },
    {
        "chapterIndex": 44, 
        "title": "Journey Together",
        "content": "You and Elara continue the journey together, your bond growing stronger with each passing day. Along the way, you encounter a group of travelers who share tales of a mystical artifact that could aid in your quest.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Seek out the mystical artifact.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Ignore the travelers and continue.",
                "nextChapterIndex": 90,
            },
            {
                "choiceText": "Ask the travelers for more details.",
                "nextChapterIndex": 88,
            }
        ]
    },
    {
        "chapterIndex": 45, 
        "title": "The Runes' Guidance",
        "content": "Following the path indicated by the runes, you discover a hidden valley teeming with magical creatures. Here, you meet Arion, a wise centaur who offers to guide you through the valley. Do you accept Arion's guidance or continue alone?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept Arion's guidance.",
                "nextChapterIndex": 90,
            },
            {
                "choiceText": "Continue alone.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Ask Arion about the valley.",
                "nextChapterIndex": 88,
            }
        ]
    },
    {
        "chapterIndex": 46, 
        "title": "On the Original Path",
        "content": "Ignoring the runes, you stick to your original path. The journey is arduous and filled with challenges, but you press on. Eventually, you come across a village under siege by dark forces. Do you help the villagers or avoid the conflict?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Help the villagers.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Avoid the conflict.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Seek more information about the conflict.",
                "nextChapterIndex": 87,
            }
        ]
    },
    {
        "chapterIndex": 47, 
        "title": "Seeking a Sage",
        "content": "You seek out a sage for more information about the runes. The sage reveals that the runes are part of an ancient prophecy linked to the Eternal Light. With this new knowledge, you feel more prepared to face the challenges ahead.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Ask the sage for more guidance.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Seek out other parts of the prophecy.",
                "nextChapterIndex": 87,
            }
        ]
    },
    {
        "chapterIndex": 48, 
        "title": "Secrets of the Lake",
        "content": "You decide to investigate the mystical lake. As you approach, a water spirit emerges and offers to grant you a boon in exchange for a favor. The spirit asks you to retrieve a stolen artifact from a nearby cave.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Retrieve the artifact for the spirit.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Refuse and continue your journey.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Ask the spirit for more information.",
                "nextChapterIndex": 90,
            }
        ]
    },
    {
        "chapterIndex": 49, 
        "title": "Passing the Lake",
        "content": "You decide to continue past the lake, ignoring its allure. The journey ahead is challenging, and you soon find yourself facing a powerful sorcerer who demands a toll to pass through his territory. Do you fight the sorcerer, pay the toll, or find another way around?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Fight the sorcerer.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Pay the toll.",
                "nextChapterIndex": 90,
            },
            {
                "choiceText": "Find another way around.",
                "nextChapterIndex": 88,
            }
        ]
    },
    {
        "chapterIndex": 50, 
        "title": "Camp by the Lake",
        "content": "You set up camp near the lake, deciding to rest and gather your strength. As night falls, you are visited by a dream of the Eternal Light, guiding you towards your next step. Do you follow the vision, ignore it, or seek more dreams?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Follow the vision.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Ignore the vision.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Seek more dreams.",
                "nextChapterIndex": 90,
            }
        ]
    },
    {
        "chapterIndex": 51, 
        "title": "Journey to the Temple",
        "content": "Accepting the sage's offer, you travel together to the ancient temple. The sage's wisdom helps you avoid traps and puzzles inside the temple. Finally, you reach the inner sanctum where the Eternal Light awaits. Do you claim it, study it, or leave it?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Claim the Eternal Light.",
                "nextChapterIndex": 83,
            },
            {
                "choiceText": "Study the Eternal Light.",
                "nextChapterIndex": 84,
            },
            {
                "choiceText": "Leave the Eternal Light.",
                "nextChapterIndex": 85,
            }
        ]
    },
    {
        "chapterIndex": 52, 
        "title": "Temple Alone",
        "content": "You venture to the temple alone, facing numerous challenges without the sage's help. After many trials, you reach the inner sanctum and find the Eternal Light. Do you claim it, study it, or leave it?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Claim the Eternal Light.",
                "nextChapterIndex": 83,
            },
            {
                "choiceText": "Study the Eternal Light.",
                "nextChapterIndex": 84,
            },
            {
                "choiceText": "Leave the Eternal Light.",
                "nextChapterIndex": 85,
            }
        ]
    },
    {
        "chapterIndex": 53, 
        "title": "Continuing the Quest",
        "content": "You decide not to investigate the temple and continue your journey. The road is difficult and full of challenges, but your determination remains strong. Eventually, you reach a crossroads where you must decide your next move.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Follow the road north.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Follow the road south.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Rest and plan your next move.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 54, 
        "title": "Amulet of Power",
        "content": "With the amulet given by the sage, you continue your journey feeling stronger and more confident. The amulet's power helps you overcome many obstacles. Eventually, you reach a place where you must decide your next move.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue towards the mountains.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Head to the nearby village.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Explore the surrounding area.",
                "nextChapterIndex": 90,
            }
        ]
    },
    {
        "chapterIndex": 55, 
        "title": "More Guidance",
        "content": "You ask the sage for more guidance. He tells you about a secret path that leads directly to the Eternal Light. Following his directions, you embark on this new path, hoping it will lead you to your goal.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Follow the secret path.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Continue on your original path.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Rest before continuing.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 56, 
        "title": "Nearby Village",
        "content": "You decide to seek out a nearby village. The villagers welcome you and share stories of the Eternal Light. They offer you supplies and guidance for the next leg of your journey.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey.",
                "nextChapterIndex": 90,
            },
            {
                "choiceText": "Stay in the village for a while.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Ask the villagers for more stories.",
                "nextChapterIndex": 88,
            }
        ]
    },
    {
        "chapterIndex": 57, 
        "title": "Mountain Pass",
        "content": "You decide to take the treacherous mountain pass. The journey is perilous, and the cold bites at your skin. Halfway up, you encounter a group of travelers who warn you of a great danger ahead.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Heed their warning and turn back.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Continue despite the warning.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Join the travelers and find another way.",
                "nextChapterIndex": 90,
            }
        ]
    },
    {
        "chapterIndex": 58, 
        "title": "Dark Cave",
        "content": "You choose to enter the dark cave. The cave is filled with eerie sounds and unknown dangers. As you navigate through, you find ancient carvings that hint at the location of the Eternal Light.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Follow the carvings' directions.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Explore deeper into the cave.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Leave the cave and continue on your path.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 59, 
        "title": "Setting up Camp",
        "content": "You decide to set up camp and rest. As you sleep, you have a vivid dream of the Eternal Light, guiding you towards its location. Upon waking, you must decide whether to follow the dream or continue on your current path.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Follow the dream's guidance.",
                "nextChapterIndex": 90,
            },
            {
                "choiceText": "Ignore the dream and continue.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Seek out more information first.",
                "nextChapterIndex": 88,
            }
        ]
    },
    {
        "chapterIndex": 60, 
        "title": "Continuing Onward",
        "content": "With the potion in hand, you feel a sense of security as you continue your quest. The path ahead is filled with challenges, but you remain undeterred. Eventually, you come across a crossroads where you must make a crucial decision.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Head north towards the mountains.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Take the southern path through the forest.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Rest and reconsider your options.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 61, 
        "title": "Understanding the Potion",
        "content": "You ask the sage about the potion. He explains that it grants temporary invulnerability and great strength, but it can only be used once. With this knowledge, you continue your journey, feeling more prepared for the dangers ahead.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Use the potion now.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Save the potion for later.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Ask the sage for more advice.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 62, 
        "title": "Testing the Potion",
        "content": "You decide to test the potion's effects. Instantly, you feel a surge of power coursing through your veins. However, using it now might not be wise. Do you press on with the potion's power, save it for later, or seek more guidance?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Press on with the potion's power.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Save it for later.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Seek more guidance.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 63, 
        "title": "Continuing the Journey",
        "content": "With your wounds healed, you continue your journey. The road ahead is filled with challenges, but you feel prepared. Eventually, you reach a point where you must decide your next course of action.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Head towards the mountains.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Explore the nearby forest.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Seek out a nearby village.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 64, 
        "title": "More Help from the Healer",
        "content": "You ask the healer for more help. She gives you a powerful amulet that will protect you from harm. With this new protection, you continue your journey with renewed confidence.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey.",
                "nextChapterIndex": 90,
            },
            {
                "choiceText": "Seek more supplies in the village.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Ask the healer for more advice.",
                "nextChapterIndex": 88,
            }
        ]
    },
    {
        "chapterIndex": 65, 
        "title": "Staying in the Village",
        "content": "You decide to stay in the village for a while. The villagers welcome you and share their stories and wisdom. However, staying too long might delay your quest. Do you leave now, gather more information, or help the villagers with their troubles?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Leave the village now.",
                "nextChapterIndex": 90,
            },
            {
                "choiceText": "Gather more information.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Help the villagers.",
                "nextChapterIndex": 88,
            }
        ]
    },
    {
        "chapterIndex": 66, 
        "title": "Potion Knowledge",
        "content": "You ask the healer about the potion she gave you. She explains that it has the power to heal even the most grievous wounds instantly. With this knowledge, you continue your journey, feeling more prepared.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Use the potion now.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Save the potion for later.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Ask for more advice.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 67, 
        "title": "Seeking More Supplies",
        "content": "You decide to seek more supplies in the village. The villagers provide you with everything you need for the journey ahead. Well-prepared, you set out with a sense of readiness.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey.",
                "nextChapterIndex": 90,
            },
            {
                "choiceText": "Stay a bit longer.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Ask the villagers for more stories.",
                "nextChapterIndex": 88,
            }
        ]
    },
    {
        "chapterIndex": 68, 
        "title": "Forest Path",
        "content": "You decide to take the forest path. The forest is dense and full of life. As you make your way through, you encounter a group of forest guardians who offer to help you.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept their help.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Continue alone.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Ask them for more information.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 69, 
        "title": "Mountain Path",
        "content": "You decide to take the mountain path. The journey is tough, but you push through. Halfway up, you find a hidden cave that might offer shelter and valuable resources.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Enter the cave.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Continue on the mountain path.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Set up camp and rest.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 70, 
        "title": "Rest and Recovery",
        "content": "You decide to rest and tend to your wounds yourself. The process is slow, but you manage to heal enough to continue your journey. Eventually, you come across a crossroads where you must choose your next path.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Head towards the forest.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Take the mountain path.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Seek out a nearby village.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 71, 
        "title": "Accepting Arion",
        "content": "You accept Arion's offer to join you. His magical abilities and knowledge prove invaluable as you continue your journey. Together, you face many challenges and grow stronger as a team.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue towards the mountains.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Head to the nearby village.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Explore the surrounding area.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 72, 
        "title": "Continuing Alone",
        "content": "You politely decline Arion's offer and continue your journey alone. The path is tough, but you remain determined. Eventually, you reach a point where you must decide your next move.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Head towards the mountains.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Explore the nearby forest.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Seek out a nearby village.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 73, 
        "title": "Arion's Quest",
        "content": "You ask Arion about his quest. He reveals that he is searching for a powerful artifact that can aid in the quest for the Eternal Light. Together, you set out to find this artifact, hoping it will help you achieve your goal.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Search for the artifact with Arion.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Continue on your original path.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Ask Arion for more details.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 74, 
        "title": "Journey with Lira",
        "content": "With Lira's guidance, you navigate through the forest safely. Her knowledge of the terrain and its dangers proves invaluable. Eventually, you reach a point where you must decide your next move.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue towards the mountains.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Head to the nearby village.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Explore the surrounding area.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 75, 
        "title": "Parting Ways with Lira",
        "content": "You part ways with Lira after a while, continuing your journey alone. The path is tough, but you remain determined. Eventually, you reach a point where you must decide your next move.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Head towards the mountains.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Explore the nearby forest.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Seek out a nearby village.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 76, 
        "title": "Learning About the Bandits",
        "content": "You ask Lira about the bandits. She reveals that they were once noble protectors but turned to banditry due to harsh circumstances. This knowledge gives you a deeper understanding of your allies and the challenges you face.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue your journey with Lira.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Part ways with Lira.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Ask Lira for more guidance.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 77, 
        "title": "Following the Map",
        "content": "You follow the map given by the bandits, navigating through the forest with ease. The map leads you safely through many dangers. Eventually, you reach a point where you must decide your next move.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue towards the mountains.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Head to the nearby village.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Explore the surrounding area.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 78, 
        "title": "Exploring a Different Route",
        "content": "You decide to explore a different route through the forest. The journey is challenging, but you discover hidden paths and secrets. Eventually, you reach a point where you must decide your next move.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue towards the mountains.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Head to the nearby village.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Explore the surrounding area.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 79, 
        "title": "Seeking a Safer Path",
        "content": "You decide to seek a safer path through the forest. The journey is slower, but you avoid many dangers. Eventually, you reach a point where you must decide your next move.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue towards the mountains.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Head to the nearby village.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Explore the surrounding area.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 80, 
        "title": "Journey Alone",
        "content": "You continue your journey alone after parting ways with the bandit escort. The path is challenging, but you remain determined. Eventually, you reach a point where you must decide your next move.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Head towards the mountains.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Explore the nearby forest.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Seek out a nearby village.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 81, 
        "title": "Seeking More Allies",
        "content": "You decide to seek out more allies for your journey. Along the way, you meet various travelers who offer their assistance. Together, you face many challenges and grow stronger as a team.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Continue towards the mountains.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Head to the nearby village.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Explore the surrounding area.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 82, 
        "title": "Exploring a Nearby Cave",
        "content": "You decide to explore a nearby cave. Inside, you find ancient carvings that tell of a hidden path to the Eternal Light. The cave also offers valuable resources for your journey.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Follow the carvings' directions.",
                "nextChapterIndex": 87,
            },
            {
                "choiceText": "Explore deeper into the cave.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Leave the cave and continue on your path.",
                "nextChapterIndex": 89,
            }
        ]
    },
    {
        "chapterIndex": 83, 
        "title": "Claiming the Eternal Light",
        "content": "You claim the Eternal Light, feeling its immense power course through you. With the relic in your possession, you return to Eldoria as a hero, bringing peace and prosperity to the realm.",
        "isEnd": true,
    },
    {
        "chapterIndex": 84, 
        "title": "Studying the Eternal Light",
        "content": "You decide to study the Eternal Light, uncovering its secrets and understanding its true power. Your knowledge allows you to use the relic wisely, saving Eldoria from darkness and becoming a legendary scholar.",
        "isEnd": true,
    },
    {
        "chapterIndex": 85, 
        "title": "Leaving the Eternal Light",
        "content": "You choose to leave the Eternal Light where it is, believing it is too powerful for anyone to possess. Your wisdom is praised, and you return to Eldoria as a wise and respected figure.",
        "isEnd": true,
    },
    {
        "chapterIndex": 86, 
        "title": "Following Clues",
        "content": "You follow the clues about Elara's brother, eventually finding him in a hidden sanctuary. Reunited, the siblings join you in your quest, and together you achieve great success in your journey.",
        "isEnd": true,
    },
    {
        "chapterIndex": 87, 
        "title": "Continuing Towards the Mountains",
        "content": "You decide to continue towards the mountains. The journey is tough, but you persevere. Eventually, you reach the peak and find the Eternal Light, completing your quest and becoming a hero.",
        "isEnd": true,
    },
    {
        "chapterIndex": 88, 
        "title": "Exploring Further",
        "content": "You decide to explore further, uncovering hidden secrets and treasures along the way. Your journey is filled with adventure and discovery, and you return to Eldoria with newfound wisdom and wealth.",
        "isEnd": true,
    },
    {
        "chapterIndex": 89, 
        "title": "Unexpected Allies",
        "content": "Along your journey, you encounter unexpected allies who help you overcome numerous challenges. Together, you find the Eternal Light and save Eldoria from darkness, becoming celebrated heroes.",
        "isEnd": true,
    },
    {
        "chapterIndex": 90, 
        "title": "A Hero's Return",
        "content": "After many trials and tribulations, you finally achieve your goal and find the Eternal Light. With the relic in hand, you return to Eldoria as a hero, ensuring peace and prosperity for generations to come.",
        "isEnd": true,
    }
]

module.exports = { title, author, description, imageUrl, genre, tags, chapters }