const title = 'Chronicles of the Celestial Nexus';
const author = 'storyWeaver';
const description = 'In the year 2205, humanity has spread across the galaxy, forging alliances with alien civilizations and grappling with the rise of sentient AI. You are an elite agent for the Galactic Council, tasked with unraveling a conspiracy that threatens the delicate balance of power in the universe. As you navigate through political intrigue, advanced technologies, and the enigmatic Celestial Nexus, your choices will determine the fate of countless worlds.';
const imageUrl = '/images/sci-fi-landscape.jpg';
const genre = 'Science Fiction';
const tags = [
    'sentient artificial intelligence',
    'political intrigue', 
    'conspiracy', 
    'cyborgs'
]

const chapters = [
    {
        "chapterIndex": 0,
        "title": "The Galactic Council's Call",
        "content": "You receive an urgent summons from the Galactic Council. An encrypted message reveals a conspiracy that could destabilize the entire galaxy. Do you accept the mission to investigate the Celestial Nexus, a mythical artifact rumored to hold immense power?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept the mission.",
                "nextChapterIndex": 1,
            },
            {
                "choiceText": "Decline and report to your superior.",
                "nextChapterIndex": 2,
            },
            {
                "choiceText": "Seek more information about the Celestial Nexus.",
                "nextChapterIndex": 3,
            }
        ]
    },
    {
        "chapterIndex": 1,
        "title": "Embarking on the Quest",
        "content": "You accept the mission and embark on your quest. Your first stop is the planet Nuvora, home to an ancient library that might hold clues about the Celestial Nexus. Do you head straight to the library, meet with a contact, or explore the local market for information?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Head straight to the library.",
                "nextChapterIndex": 4,
            },
            {
                "choiceText": "Meet with a trusted contact.",
                "nextChapterIndex": 5,
            },
            {
                "choiceText": "Explore the local market.",
                "nextChapterIndex": 6,
            }
        ]
    },
    {
        "chapterIndex": 2,
        "title": "Reporting to Your Superior",
        "content": "You decide to decline the mission and report to your superior. He listens to your concerns and assigns you to a different task. However, you can't shake the feeling that you missed out on something crucial. Your life continues in relative peace, but you always wonder what might have been.",
        "isEnd": true,
    },
    {
        "chapterIndex": 3,
        "title": "Gathering Information",
        "content": "You decide to seek more information about the Celestial Nexus before making a decision. You contact a renowned historian who specializes in ancient artifacts. After a lengthy discussion, you gain valuable insights that strengthen your resolve to accept the mission.",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept the mission.",
                "nextChapterIndex": 1,
            },
            {
                "choiceText": "Decline and report to your superior.",
                "nextChapterIndex": 2,
            },
            {
                "choiceText": "Seek additional resources.",
                "nextChapterIndex": 7,
            }
        ]
    },
    {
        "chapterIndex": 4,
        "title": "The Ancient Library",
        "content": "You arrive at the ancient library on Nuvora. The place is a treasure trove of knowledge, but accessing the most valuable information requires solving intricate puzzles. Do you attempt to solve the puzzles, ask the librarian for help, or look for a backdoor into the archives?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Solve the puzzles.",
                "nextChapterIndex": 8,
            },
            {
                "choiceText": "Ask the librarian for help.",
                "nextChapterIndex": 9,
            },
            {
                "choiceText": "Look for a backdoor.",
                "nextChapterIndex": 10,
            }
        ]
    },
    {
        "chapterIndex": 5,
        "title": "Meeting the Contact",
        "content": "You meet with your trusted contact, Liora, a former agent turned informant. She provides you with critical intelligence and offers to join you on your quest. Do you accept her help, continue alone, or ask her to gather more intel while you proceed?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept Liora's help.",
                "nextChapterIndex": 11,
            },
            {
                "choiceText": "Continue alone.",
                "nextChapterIndex": 12,
            },
            {
                "choiceText": "Ask Liora to gather more intel.",
                "nextChapterIndex": 13,
            }
        ]
    },
    {
        "chapterIndex": 6,
        "title": "Exploring the Market",
        "content": "You explore the bustling market of Nuvora, a vibrant place teeming with diverse alien species and advanced technology. Amidst the chaos, you overhear a conversation about the Celestial Nexus. Do you eavesdrop on the conversation, approach the speakers, or look for other clues in the market?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Eavesdrop on the conversation.",
                "nextChapterIndex": 14,
            },
            {
                "choiceText": "Approach the speakers.",
                "nextChapterIndex": 15,
            },
            {
                "choiceText": "Look for other clues.",
                "nextChapterIndex": 16,
            }
        ]
    },
    {
        "chapterIndex": 7,
        "title": "Seeking Additional Resources",
        "content": "You decide to seek additional resources before embarking on the mission. You contact an old friend, an AI specialist, who offers you a powerful AI companion to assist you. Do you accept the AI companion, continue alone, or seek out another expert?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept the AI companion.",
                "nextChapterIndex": 17,
            },
            {
                "choiceText": "Continue alone.",
                "nextChapterIndex": 18,
            },
            {
                "choiceText": "Seek out another expert.",
                "nextChapterIndex": 19,
            }
        ]
    },
    {
        "chapterIndex": 8,
        "title": "Solving the Puzzles",
        "content": "You tackle the intricate puzzles with determination. After hours of effort, you unlock a hidden chamber containing ancient texts about the Celestial Nexus. Do you study the texts, take them with you, or seek help from a historian?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Study the texts.",
                "nextChapterIndex": 20,
            },
            {
                "choiceText": "Take them with you.",
                "nextChapterIndex": 21,
            },
            {
                "choiceText": "Seek help from a historian.",
                "nextChapterIndex": 22,
            }
        ]
    },
    {
        "chapterIndex": 9,
        "title": "Asking the Librarian",
        "content": "You ask the librarian for help. The librarian, an elderly cyborg with vast knowledge, provides you with a key to the restricted archives. Do you enter the archives alone, ask the librarian to accompany you, or search for other resources?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Enter the archives alone.",
                "nextChapterIndex": 23,
            },
            {
                "choiceText": "Ask the librarian to accompany you.",
                "nextChapterIndex": 24,
            },
            {
                "choiceText": "Search for other resources.",
                "nextChapterIndex": 25,
            }
        ]
    },
    {
        "chapterIndex": 10,
        "title": "Finding a Backdoor",
        "content": "You look for a backdoor into the archives and find a hidden entrance. As you enter, you trigger a silent alarm. Do you proceed with caution, disable the alarm, or retreat and find another way?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Proceed with caution.",
                "nextChapterIndex": 26,
            },
            {
                "choiceText": "Disable the alarm.",
                "nextChapterIndex": 27,
            },
            {
                "choiceText": "Retreat and find another way.",
                "nextChapterIndex": 28,
            }
        ]
    },
    {
        "chapterIndex": 11,
        "title": "Partnership with Liora",
        "content": "You accept Liora's help, and together you make a formidable team. She shares valuable intel about the factions involved in the conspiracy. Do you infiltrate a rival faction's base, gather more intel, or seek allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Infiltrate a rival faction's base.",
                "nextChapterIndex": 29,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 12,
        "title": "Going Solo",
        "content": "You decide to continue alone, relying on your skills and instincts. The journey is perilous, but you remain focused. Eventually, you arrive at a critical juncture. Do you infiltrate a rival faction's base, gather more intel, or seek allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Infiltrate a rival faction's base.",
                "nextChapterIndex": 29,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 13,
        "title": "Liora's Intel",
        "content": "You ask Liora to gather more intel while you proceed. She provides you with crucial information about the factions involved in the conspiracy. Do you infiltrate a rival faction's base, gather more intel, or seek allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Infiltrate a rival faction's base.",
                "nextChapterIndex": 29,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 14,
        "title": "Eavesdropping",
        "content": "You decide to eavesdrop on the conversation. You learn about a hidden meeting place where key figures of the conspiracy will gather. Do you infiltrate the meeting, follow the speakers, or report back to your superiors?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Infiltrate the meeting.",
                "nextChapterIndex": 32,
            },
            {
                "choiceText": "Follow the speakers.",
                "nextChapterIndex": 33,
            },
            {
                "choiceText": "Report back to your superiors.",
                "nextChapterIndex": 34,
            }
        ]
    },
    {
        "chapterIndex": 15,
        "title": "Approaching the Speakers",
        "content": "You approach the speakers directly. They are initially suspicious, but you manage to gain their trust. They reveal information about the next steps in the conspiracy. Do you follow their lead, gather more intel, or double-cross them?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Follow their lead.",
                "nextChapterIndex": 35,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 36,
            },
            {
                "choiceText": "Double-cross them.",
                "nextChapterIndex": 37,
            }
        ]
    },
    {
        "chapterIndex": 16,
        "title": "Looking for Other Clues",
        "content": "You decide to look for other clues in the market. You come across a vendor selling rare artifacts, including one that seems related to the Celestial Nexus. Do you buy the artifact, investigate the vendor, or continue searching?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Buy the artifact.",
                "nextChapterIndex": 38,
            },
            {
                "choiceText": "Investigate the vendor.",
                "nextChapterIndex": 39,
            },
            {
                "choiceText": "Continue searching.",
                "nextChapterIndex": 40,
            }
        ]
    },
    {
        "chapterIndex": 17,
        "title": "AI Companion",
        "content": "You accept the AI companion, an advanced entity named Orion. With Orion's assistance, you gain access to vast amounts of data and insights. Do you use Orion to hack into enemy systems, gather more intel, or find allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Hack into enemy systems.",
                "nextChapterIndex": 41,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 42,
            },
            {
                "choiceText": "Find allies.",
                "nextChapterIndex": 43,
            }
        ]
    },
    {
        "chapterIndex": 18,
        "title": "Continuing Alone",
        "content": "You decide to continue alone, relying on your skills and instincts. The journey is perilous, but you remain focused. Eventually, you arrive at a critical juncture. Do you hack into enemy systems, gather more intel, or find allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Hack into enemy systems.",
                "nextChapterIndex": 41,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 42,
            },
            {
                "choiceText": "Find allies.",
                "nextChapterIndex": 43,
            }
        ]
    },
    {
        "chapterIndex": 19,
        "title": "Seeking Another Expert",
        "content": "You seek out another expert, a renowned cyborg engineer named Dr. Nyx. She offers to upgrade your bio-enhancements for the journey ahead. Do you accept the upgrades, continue alone, or seek another resource?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept the upgrades.",
                "nextChapterIndex": 44,
            },
            {
                "choiceText": "Continue alone.",
                "nextChapterIndex": 45,
            },
            {
                "choiceText": "Seek another resource.",
                "nextChapterIndex": 46,
            }
        ]
    },
    {
        "chapterIndex": 20,
        "title": "Studying the Texts",
        "content": "You decide to study the ancient texts. As you delve into their mysteries, you uncover vital information about the Celestial Nexus and its powers. Do you use this knowledge to craft a plan, seek allies, or confront the conspirators directly?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Craft a plan.",
                "nextChapterIndex": 47,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 48,
            },
            {
                "choiceText": "Confront the conspirators.",
                "nextChapterIndex": 49,
            }
        ]
    },
    {
        "chapterIndex": 21,
        "title": "Taking the Texts",
        "content": "You decide to take the ancient texts with you. Their knowledge is too valuable to leave behind. As you leave the library, you encounter a group of mercenaries. Do you fight them, negotiate, or try to escape?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Fight the mercenaries.",
                "nextChapterIndex": 50,
            },
            {
                "choiceText": "Negotiate.",
                "nextChapterIndex": 51,
            },
            {
                "choiceText": "Escape.",
                "nextChapterIndex": 52,
            }
        ]
    },
    {
        "chapterIndex": 22,
        "title": "Seeking a Historian",
        "content": "You seek help from a renowned historian, Dr. Linara. She provides critical insights into the texts and offers to join you on your quest. Do you accept her help, continue alone, or seek another resource?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept Dr. Linara's help.",
                "nextChapterIndex": 53,
            },
            {
                "choiceText": "Continue alone.",
                "nextChapterIndex": 54,
            },
            {
                "choiceText": "Seek another resource.",
                "nextChapterIndex": 55,
            }
        ]
    },
    {
        "chapterIndex": 23,
        "title": "Entering the Archives Alone",
        "content": "You enter the restricted archives alone. The room is filled with ancient artifacts and texts. As you search, you find a hidden compartment. Do you open it, leave it, or seek help?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Open the compartment.",
                "nextChapterIndex": 56,
            },
            {
                "choiceText": "Leave it.",
                "nextChapterIndex": 57,
            },
            {
                "choiceText": "Seek help.",
                "nextChapterIndex": 58,
            }
        ]
    },
    {
        "chapterIndex": 24,
        "title": "With the Librarian",
        "content": "You ask the librarian to accompany you. Together, you navigate the archives and uncover hidden secrets about the Celestial Nexus. Do you study the secrets, take them with you, or leave the archives?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Study the secrets.",
                "nextChapterIndex": 59,
            },
            {
                "choiceText": "Take them with you.",
                "nextChapterIndex": 60,
            },
            {
                "choiceText": "Leave the archives.",
                "nextChapterIndex": 61,
            }
        ]
    },
    {
        "chapterIndex": 25,
        "title": "Searching for Other Resources",
        "content": "You decide to search for other resources in the library. As you explore, you find a hidden passage leading to an ancient chamber. Do you enter the chamber, look for more information, or leave the library?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Enter the chamber.",
                "nextChapterIndex": 62,
            },
            {
                "choiceText": "Look for more information.",
                "nextChapterIndex": 63,
            },
            {
                "choiceText": "Leave the library.",
                "nextChapterIndex": 64,
            }
        ]
    },
    {
        "chapterIndex": 26,
        "title": "Proceeding with Caution",
        "content": "You proceed with caution, avoiding the alarm's sensors. You reach the inner sanctum of the archives, where the most valuable information is stored. Do you take the information, study it, or leave it?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Take the information.",
                "nextChapterIndex": 65,
            },
            {
                "choiceText": "Study it.",
                "nextChapterIndex": 66,
            },
            {
                "choiceText": "Leave it.",
                "nextChapterIndex": 67,
            }
        ]
    },
    {
        "chapterIndex": 27,
        "title": "Disabling the Alarm",
        "content": "You successfully disable the alarm and proceed to the inner sanctum of the archives. The room is filled with ancient artifacts and texts. Do you take the information, study it, or leave it?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Take the information.",
                "nextChapterIndex": 65,
            },
            {
                "choiceText": "Study it.",
                "nextChapterIndex": 66,
            },
            {
                "choiceText": "Leave it.",
                "nextChapterIndex": 67,
            }
        ]
    },
    {
        "chapterIndex": 28,
        "title": "Finding Another Way",
        "content": "You retreat and find another way into the archives. After navigating through hidden passages, you reach the inner sanctum. The room is filled with ancient artifacts and texts. Do you take the information, study it, or leave it?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Take the information.",
                "nextChapterIndex": 65,
            },
            {
                "choiceText": "Study it.",
                "nextChapterIndex": 66,
            },
            {
                "choiceText": "Leave it.",
                "nextChapterIndex": 67,
            }
        ]
    },
    {
        "chapterIndex": 29,
        "title": "Infiltrating the Faction's Base",
        "content": "You and Liora successfully infiltrate the rival faction's base. Inside, you uncover crucial information about their plans. Do you sabotage their operations, gather more intel, or escape?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Sabotage their operations.",
                "nextChapterIndex": 68,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 69,
            },
            {
                "choiceText": "Escape.",
                "nextChapterIndex": 70,
            }
        ]
    },
    {
        "chapterIndex": 30,
        "title": "Gathering More Intel",
        "content": "You and Liora decide to gather more intel on the rival faction. Through careful surveillance, you learn about their next move. Do you infiltrate their base, warn the Galactic Council, or confront the faction leader?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Infiltrate their base.",
                "nextChapterIndex": 29,
            },
            {
                "choiceText": "Warn the Galactic Council.",
                "nextChapterIndex": 71,
            },
            {
                "choiceText": "Confront the faction leader.",
                "nextChapterIndex": 72,
            }
        ]
    },
    {
        "chapterIndex": 31,
        "title": "Seeking Allies",
        "content": "You and Liora decide to seek allies to bolster your mission. You reach out to a trusted ally, Commander Zane, who commands a formidable fleet. Do you join forces with Zane, seek another ally, or continue alone?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Join forces with Zane.",
                "nextChapterIndex": 73,
            },
            {
                "choiceText": "Seek another ally.",
                "nextChapterIndex": 74,
            },
            {
                "choiceText": "Continue alone.",
                "nextChapterIndex": 75,
            }
        ]
    },
    {
        "chapterIndex": 32,
        "title": "Infiltrating the Meeting",
        "content": "You decide to infiltrate the hidden meeting. Disguised and armed with stealth tech, you enter the room filled with conspirators. Do you gather intel, disrupt the meeting, or make an alliance?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Gather intel.",
                "nextChapterIndex": 76,
            },
            {
                "choiceText": "Disrupt the meeting.",
                "nextChapterIndex": 77,
            },
            {
                "choiceText": "Make an alliance.",
                "nextChapterIndex": 78,
            }
        ]
    },
    {
        "chapterIndex": 33,
        "title": "Following the Speakers",
        "content": "You follow the speakers discreetly, gathering valuable information. They lead you to a hidden base. Do you infiltrate the base, gather more intel, or contact your allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Infiltrate the base.",
                "nextChapterIndex": 29,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Contact your allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 34,
        "title": "Reporting Back",
        "content": "You decide to report back to your superiors. The Galactic Council takes immediate action, but without your direct involvement, the outcome is uncertain. You are reassigned to a different mission.",
        "isEnd": true,
    },
    {
        "chapterIndex": 35,
        "title": "Following the Lead",
        "content": "You follow the lead provided by the speakers. They guide you to a hidden lab where advanced research on the Celestial Nexus is being conducted. Do you infiltrate the lab, gather more intel, or confront the researchers?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Infiltrate the lab.",
                "nextChapterIndex": 79,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 80,
            },
            {
                "choiceText": "Confront the researchers.",
                "nextChapterIndex": 81,
            }
        ]
    },
    {
        "chapterIndex": 36,
        "title": "Gathering Intel",
        "content": "You decide to gather more intel. The information you collect reveals a network of conspirators spanning the galaxy. Do you trace the network, warn the Galactic Council, or confront the leader?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Trace the network.",
                "nextChapterIndex": 82,
            },
            {
                "choiceText": "Warn the Galactic Council.",
                "nextChapterIndex": 71,
            },
            {
                "choiceText": "Confront the leader.",
                "nextChapterIndex": 72,
            }
        ]
    },
    {
        "chapterIndex": 37,
        "title": "Double-Cross",
        "content": "You decide to double-cross the speakers. Your deception pays off, and you gain access to their inner circle. Do you gather intel, disrupt their plans, or make an alliance?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Gather intel.",
                "nextChapterIndex": 76,
            },
            {
                "choiceText": "Disrupt their plans.",
                "nextChapterIndex": 77,
            },
            {
                "choiceText": "Make an alliance.",
                "nextChapterIndex": 78,
            }
        ]
    },
    {
        "chapterIndex": 38,
        "title": "Buying the Artifact",
        "content": "You decide to buy the artifact. It reveals a hidden map leading to the Celestial Nexus. Do you follow the map, investigate the vendor, or seek expert advice?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Follow the map.",
                "nextChapterIndex": 83,
            },
            {
                "choiceText": "Investigate the vendor.",
                "nextChapterIndex": 39,
            },
            {
                "choiceText": "Seek expert advice.",
                "nextChapterIndex": 84,
            }
        ]
    },
    {
        "chapterIndex": 39,
        "title": "Investigating the Vendor",
        "content": "You decide to investigate the vendor. He is more than he seems, connected to a network of black-market dealers. Do you gather intel, confront him, or follow him?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Gather intel.",
                "nextChapterIndex": 85,
            },
            {
                "choiceText": "Confront him.",
                "nextChapterIndex": 86,
            },
            {
                "choiceText": "Follow him.",
                "nextChapterIndex": 87,
            }
        ]
    },
    {
        "chapterIndex": 40,
        "title": "Continuing the Search",
        "content": "You decide to continue searching the market. Amidst the chaos, you find a hidden clue pointing to a secret meeting. Do you attend the meeting, investigate further, or contact your allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Attend the meeting.",
                "nextChapterIndex": 32,
            },
            {
                "choiceText": "Investigate further.",
                "nextChapterIndex": 33,
            },
            {
                "choiceText": "Contact your allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 41,
        "title": "Hacking Enemy Systems",
        "content": "With Orion's help, you hack into enemy systems and uncover vital information about their plans. Do you use the information to sabotage their operations, gather more intel, or confront them directly?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Sabotage their operations.",
                "nextChapterIndex": 68,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 69,
            },
            {
                "choiceText": "Confront them directly.",
                "nextChapterIndex": 49,
            }
        ]
    },
    {
        "chapterIndex": 42,
        "title": "Gathering More Intel",
        "content": "With Orion's assistance, you gather more intel on the enemy. The information reveals a network of conspirators. Do you trace the network, warn the Galactic Council, or confront the leader?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Trace the network.",
                "nextChapterIndex": 82,
            },
            {
                "choiceText": "Warn the Galactic Council.",
                "nextChapterIndex": 71,
            },
            {
                "choiceText": "Confront the leader.",
                "nextChapterIndex": 72,
            }
        ]
    },
    {
        "chapterIndex": 43,
        "title": "Finding Allies",
        "content": "With Orion's help, you reach out to potential allies. Commander Zane, a trusted ally, offers his support. Do you join forces with Zane, seek another ally, or continue alone?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Join forces with Zane.",
                "nextChapterIndex": 73,
            },
            {
                "choiceText": "Seek another ally.",
                "nextChapterIndex": 74,
            },
            {
                "choiceText": "Continue alone.",
                "nextChapterIndex": 75,
            }
        ]
    },
    {
        "chapterIndex": 44,
        "title": "Upgrading Enhancements",
        "content": "You accept Dr. Nyx's offer to upgrade your bio-enhancements. The upgrades give you enhanced abilities. Do you use your new abilities to hack into enemy systems, gather more intel, or find allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Hack into enemy systems.",
                "nextChapterIndex": 41,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 42,
            },
            {
                "choiceText": "Find allies.",
                "nextChapterIndex": 43,
            }
        ]
    },
    {
        "chapterIndex": 45,
        "title": "Continuing Alone",
        "content": "You decide to continue alone, relying on your skills and instincts. The journey is perilous, but you remain focused. Eventually, you arrive at a critical juncture. Do you hack into enemy systems, gather more intel, or find allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Hack into enemy systems.",
                "nextChapterIndex": 41,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 42,
            },
            {
                "choiceText": "Find allies.",
                "nextChapterIndex": 43,
            }
        ]
    },
    {
        "chapterIndex": 46,
        "title": "Seeking Another Resource",
        "content": "You decide to seek another resource. You contact an old friend, an AI specialist, who offers you a powerful AI companion to assist you. Do you accept the AI companion, continue alone, or seek out another expert?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept the AI companion.",
                "nextChapterIndex": 17,
            },
            {
                "choiceText": "Continue alone.",
                "nextChapterIndex": 18,
            },
            {
                "choiceText": "Seek out another expert.",
                "nextChapterIndex": 19,
            }
        ]
    },
    {
        "chapterIndex": 47,
        "title": "Crafting a Plan",
        "content": "You use the knowledge from the texts to craft a detailed plan. The plan involves infiltrating the enemy base and sabotaging their operations. Do you proceed with the plan, gather more intel, or seek allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Proceed with the plan.",
                "nextChapterIndex": 68,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 69,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 48,
        "title": "Seeking Allies",
        "content": "You decide to seek allies to bolster your mission. You reach out to a trusted ally, Commander Zane, who commands a formidable fleet. Do you join forces with Zane, seek another ally, or continue alone?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Join forces with Zane.",
                "nextChapterIndex": 73,
            },
            {
                "choiceText": "Seek another ally.",
                "nextChapterIndex": 74,
            },
            {
                "choiceText": "Continue alone.",
                "nextChapterIndex": 75,
            }
        ]
    },
    {
        "chapterIndex": 49,
        "title": "Confronting the Conspirators",
        "content": "You decide to confront the conspirators directly. The encounter is intense, and you face many dangers. Do you fight them, negotiate, or retreat?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Fight them.",
                "nextChapterIndex": 50,
            },
            {
                "choiceText": "Negotiate.",
                "nextChapterIndex": 51,
            },
            {
                "choiceText": "Retreat.",
                "nextChapterIndex": 52,
            }
        ]
    },
    {
        "chapterIndex": 50,
        "title": "Fighting the Conspirators",
        "content": "You engage the conspirators in a fierce battle. Your skills and enhancements give you an edge, but the fight is brutal. Eventually, you defeat them and uncover their plans. Do you report to the Galactic Council, continue investigating, or seek allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Report to the Galactic Council.",
                "nextChapterIndex": 71,
            },
            {
                "choiceText": "Continue investigating.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 51,
        "title": "Negotiating with the Conspirators",
        "content": "You attempt to negotiate with the conspirators. Through careful diplomacy, you gain valuable information and a temporary truce. Do you use the information to sabotage their operations, gather more intel, or seek allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Sabotage their operations.",
                "nextChapterIndex": 68,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 69,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 52,
        "title": "Escaping the Conspirators",
        "content": "You decide to retreat and escape from the conspirators. The journey is perilous, but you manage to get away. Do you report to the Galactic Council, gather more intel, or seek allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Report to the Galactic Council.",
                "nextChapterIndex": 71,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 53,
        "title": "Accepting Dr. Linara's Help",
        "content": "You accept Dr. Linara's help, and together you delve deeper into the mysteries of the Celestial Nexus. Her expertise proves invaluable. Do you craft a plan, seek allies, or confront the conspirators directly?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Craft a plan.",
                "nextChapterIndex": 47,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 48,
            },
            {
                "choiceText": "Confront the conspirators.",
                "nextChapterIndex": 49,
            }
        ]
    },
    {
        "chapterIndex": 54,
        "title": "Continuing Alone",
        "content": "You decide to continue alone, relying on your skills and instincts. The journey is perilous, but you remain focused. Eventually, you arrive at a critical juncture. Do you craft a plan, seek allies, or confront the conspirators?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Craft a plan.",
                "nextChapterIndex": 47,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 48,
            },
            {
                "choiceText": "Confront the conspirators.",
                "nextChapterIndex": 49,
            }
        ]
    },
    {
        "chapterIndex": 55,
        "title": "Seeking Another Resource",
        "content": "You decide to seek another resource. You contact an old friend, an AI specialist, who offers you a powerful AI companion to assist you. Do you accept the AI companion, continue alone, or seek out another expert?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Accept the AI companion.",
                "nextChapterIndex": 17,
            },
            {
                "choiceText": "Continue alone.",
                "nextChapterIndex": 18,
            },
            {
                "choiceText": "Seek out another expert.",
                "nextChapterIndex": 19,
            }
        ]
    },
    {
        "chapterIndex": 56,
        "title": "Opening the Compartment",
        "content": "You open the hidden compartment and find a powerful artifact connected to the Celestial Nexus. Its energy pulses in your hands. Do you use the artifact, study it further, or seek expert advice?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Use the artifact.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Study it further.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Seek expert advice.",
                "nextChapterIndex": 84,
            }
        ]
    },
    {
        "chapterIndex": 57,
        "title": "Leaving the Compartment",
        "content": "You decide to leave the hidden compartment untouched. As you continue exploring, you uncover more secrets about the Celestial Nexus. Do you take the information, study it, or leave it?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Take the information.",
                "nextChapterIndex": 65,
            },
            {
                "choiceText": "Study it.",
                "nextChapterIndex": 66,
            },
            {
                "choiceText": "Leave it.",
                "nextChapterIndex": 67,
            }
        ]
    },
    {
        "chapterIndex": 58,
        "title": "Seeking Help",
        "content": "You decide to seek help. The librarian provides you with additional resources and insights into the Celestial Nexus. Do you take the information, study it, or leave it?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Take the information.",
                "nextChapterIndex": 65,
            },
            {
                "choiceText": "Study it.",
                "nextChapterIndex": 66,
            },
            {
                "choiceText": "Leave it.",
                "nextChapterIndex": 67,
            }
        ]
    },
    {
        "chapterIndex": 59,
        "title": "Studying the Secrets",
        "content": "You and the librarian decide to study the secrets of the archives. The knowledge you gain provides critical insights into the Celestial Nexus. Do you craft a plan, seek allies, or confront the conspirators?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Craft a plan.",
                "nextChapterIndex": 47,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 48,
            },
            {
                "choiceText": "Confront the conspirators.",
                "nextChapterIndex": 49,
            }
        ]
    },
    {
        "chapterIndex": 60,
        "title": "Taking the Secrets",
        "content": "You and the librarian decide to take the secrets with you. As you leave the archives, you encounter a group of mercenaries. Do you fight them, negotiate, or try to escape?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Fight the mercenaries.",
                "nextChapterIndex": 50,
            },
            {
                "choiceText": "Negotiate.",
                "nextChapterIndex": 51,
            },
            {
                "choiceText": "Escape.",
                "nextChapterIndex": 52,
            }
        ]
    },
    {
        "chapterIndex": 61,
        "title": "Leaving the Archives",
        "content": "You decide to leave the archives. As you exit, you encounter a group of mercenaries. Do you fight them, negotiate, or try to escape?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Fight the mercenaries.",
                "nextChapterIndex": 50,
            },
            {
                "choiceText": "Negotiate.",
                "nextChapterIndex": 51,
            },
            {
                "choiceText": "Escape.",
                "nextChapterIndex": 52,
            }
        ]
    },
    {
        "chapterIndex": 62,
        "title": "Entering the Chamber",
        "content": "You enter the ancient chamber and find a powerful artifact connected to the Celestial Nexus. Its energy pulses in your hands. Do you use the artifact, study it further, or seek expert advice?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Use the artifact.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Study it further.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Seek expert advice.",
                "nextChapterIndex": 84,
            }
        ]
    },
    {
        "chapterIndex": 63,
        "title": "Looking for More Information",
        "content": "You decide to look for more information in the library. As you explore, you uncover more secrets about the Celestial Nexus. Do you take the information, study it, or leave it?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Take the information.",
                "nextChapterIndex": 65,
            },
            {
                "choiceText": "Study it.",
                "nextChapterIndex": 66,
            },
            {
                "choiceText": "Leave it.",
                "nextChapterIndex": 67,
            }
        ]
    },
    {
        "chapterIndex": 64,
        "title": "Leaving the Library",
        "content": "You decide to leave the library. As you exit, you encounter a group of mercenaries. Do you fight them, negotiate, or try to escape?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Fight the mercenaries.",
                "nextChapterIndex": 50,
            },
            {
                "choiceText": "Negotiate.",
                "nextChapterIndex": 51,
            },
            {
                "choiceText": "Escape.",
                "nextChapterIndex": 52,
            }
        ]
    },
    {
        "chapterIndex": 65,
        "title": "Taking the Information",
        "content": "You decide to take the information with you. As you leave, you encounter a group of mercenaries. Do you fight them, negotiate, or try to escape?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Fight the mercenaries.",
                "nextChapterIndex": 50,
            },
            {
                "choiceText": "Negotiate.",
                "nextChapterIndex": 51,
            },
            {
                "choiceText": "Escape.",
                "nextChapterIndex": 52,
            }
        ]
    },
    {
        "chapterIndex": 66,
        "title": "Studying the Information",
        "content": "You decide to study the information. The knowledge you gain provides critical insights into the Celestial Nexus. Do you craft a plan, seek allies, or confront the conspirators?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Craft a plan.",
                "nextChapterIndex": 47,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 48,
            },
            {
                "choiceText": "Confront the conspirators.",
                "nextChapterIndex": 49,
            }
        ]
    },
    {
        "chapterIndex": 67,
        "title": "Leaving the Information",
        "content": "You decide to leave the information. As you exit, you encounter a group of mercenaries. Do you fight them, negotiate, or try to escape?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Fight the mercenaries.",
                "nextChapterIndex": 50,
            },
            {
                "choiceText": "Negotiate.",
                "nextChapterIndex": 51,
            },
            {
                "choiceText": "Escape.",
                "nextChapterIndex": 52,
            }
        ]
    },
    {
        "chapterIndex": 68,
        "title": "Sabotaging Operations",
        "content": "You decide to sabotage the enemy operations. The sabotage is successful, and you severely disrupt their plans. Do you report to the Galactic Council, gather more intel, or seek allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Report to the Galactic Council.",
                "nextChapterIndex": 71,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 69,
        "title": "Gathering More Intel",
        "content": "You decide to gather more intel. The information you collect reveals a network of conspirators spanning the galaxy. Do you trace the network, warn the Galactic Council, or confront the leader?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Trace the network.",
                "nextChapterIndex": 82,
            },
            {
                "choiceText": "Warn the Galactic Council.",
                "nextChapterIndex": 71,
            },
            {
                "choiceText": "Confront the leader.",
                "nextChapterIndex": 72,
            }
        ]
    },
    {
        "chapterIndex": 70,
        "title": "Escaping the Base",
        "content": "You decide to escape the enemy base. The journey is perilous, but you manage to get away. Do you report to the Galactic Council, gather more intel, or seek allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Report to the Galactic Council.",
                "nextChapterIndex": 71,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 71,
        "title": "Reporting to the Galactic Council",
        "content": "You decide to report to the Galactic Council. The Council takes immediate action and successfully dismantles the conspiracy. You are commended for your efforts and given a new mission.",
        "isEnd": true,
    },
    {
        "chapterIndex": 72,
        "title": "Confronting the Leader",
        "content": "You decide to confront the leader of the conspirators. The encounter is intense, and you face many dangers. Eventually, you defeat the leader and uncover their plans. Do you report to the Galactic Council, continue investigating, or seek allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Report to the Galactic Council.",
                "nextChapterIndex": 71,
            },
            {
                "choiceText": "Continue investigating.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 73,
        "title": "Joining Forces with Zane",
        "content": "You decide to join forces with Commander Zane. Together, you form a powerful alliance. Do you use your combined strength to infiltrate the enemy base, gather more intel, or confront the conspirators?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Infiltrate the enemy base.",
                "nextChapterIndex": 29,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Confront the conspirators.",
                "nextChapterIndex": 49,
            }
        ]
    },
    {
        "chapterIndex": 74,
        "title": "Seeking Another Ally",
        "content": "You decide to seek another ally. You reach out to an influential senator who has resources at their disposal. Do you join forces with the senator, seek another ally, or continue alone?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Join forces with the senator.",
                "nextChapterIndex": 90,
            },
            {
                "choiceText": "Seek another ally.",
                "nextChapterIndex": 74,
            },
            {
                "choiceText": "Continue alone.",
                "nextChapterIndex": 75,
            }
        ]
    },
    {
        "chapterIndex": 75,
        "title": "Continuing Alone",
        "content": "You decide to continue alone, relying on your skills and instincts. The journey is perilous, but you remain focused. Eventually, you arrive at a critical juncture. Do you infiltrate the enemy base, gather more intel, or confront the conspirators?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Infiltrate the enemy base.",
                "nextChapterIndex": 29,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Confront the conspirators.",
                "nextChapterIndex": 49,
            }
        ]
    },
    {
        "chapterIndex": 76,
        "title": "Gathering Intel at the Meeting",
        "content": "You decide to gather intel at the hidden meeting. The information you collect reveals a network of conspirators. Do you trace the network, warn the Galactic Council, or confront the leader?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Trace the network.",
                "nextChapterIndex": 82,
            },
            {
                "choiceText": "Warn the Galactic Council.",
                "nextChapterIndex": 71,
            },
            {
                "choiceText": "Confront the leader.",
                "nextChapterIndex": 72,
            }
        ]
    },
    {
        "chapterIndex": 77,
        "title": "Disrupting the Meeting",
        "content": "You decide to disrupt the hidden meeting. Your actions cause chaos and reveal crucial information. Do you use the information to sabotage their operations, gather more intel, or seek allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Sabotage their operations.",
                "nextChapterIndex": 68,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 78,
        "title": "Making an Alliance",
        "content": "You decide to make an alliance with some of the conspirators. Together, you work to uncover the true leaders behind the conspiracy. Do you gather more intel, disrupt their plans, or confront the leaders?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 76,
            },
            {
                "choiceText": "Disrupt their plans.",
                "nextChapterIndex": 77,
            },
            {
                "choiceText": "Confront the leaders.",
                "nextChapterIndex": 72,
            }
        ]
    },
    {
        "chapterIndex": 79,
        "title": "Infiltrating the Lab",
        "content": "You successfully infiltrate the hidden lab. Inside, you uncover advanced research on the Celestial Nexus. Do you sabotage their work, gather more intel, or confront the researchers?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Sabotage their work.",
                "nextChapterIndex": 68,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Confront the researchers.",
                "nextChapterIndex": 81,
            }
        ]
    },
    {
        "chapterIndex": 80,
        "title": "Gathering Intel at the Lab",
        "content": "You decide to gather intel at the hidden lab. The information you collect reveals a network of conspirators. Do you trace the network, warn the Galactic Council, or confront the leader?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Trace the network.",
                "nextChapterIndex": 82,
            },
            {
                "choiceText": "Warn the Galactic Council.",
                "nextChapterIndex": 71,
            },
            {
                "choiceText": "Confront the leader.",
                "nextChapterIndex": 72,
            }
        ]
    },
    {
        "chapterIndex": 81,
        "title": "Confronting the Researchers",
        "content": "You decide to confront the researchers directly. The encounter is intense, and you face many dangers. Eventually, you uncover their plans. Do you report to the Galactic Council, continue investigating, or seek allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Report to the Galactic Council.",
                "nextChapterIndex": 71,
            },
            {
                "choiceText": "Continue investigating.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 82,
        "title": "Tracing the Network",
        "content": "You decide to trace the network of conspirators. Your investigation leads you to a hidden base. Do you infiltrate the base, gather more intel, or contact your allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Infiltrate the base.",
                "nextChapterIndex": 29,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Contact your allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 83,
        "title": "Following the Map",
        "content": "You decide to follow the hidden map. It leads you to a remote planet where the Celestial Nexus is rumored to be hidden. Do you explore the planet, search for clues, or contact your allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Explore the planet.",
                "nextChapterIndex": 91,
            },
            {
                "choiceText": "Search for clues.",
                "nextChapterIndex": 92,
            },
            {
                "choiceText": "Contact your allies.",
                "nextChapterIndex": 93,
            }
        ]
    },
    {
        "chapterIndex": 84,
        "title": "Seeking Expert Advice",
        "content": "You decide to seek expert advice about the artifact. Dr. Linara provides critical insights into its powers. Do you use the artifact, study it further, or seek another expert?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Use the artifact.",
                "nextChapterIndex": 88,
            },
            {
                "choiceText": "Study it further.",
                "nextChapterIndex": 89,
            },
            {
                "choiceText": "Seek another expert.",
                "nextChapterIndex": 94,
            }
        ]
    },
    {
        "chapterIndex": 85,
        "title": "Gathering Intel from the Vendor",
        "content": "You decide to gather intel from the vendor. The information you collect reveals a network of black-market dealers. Do you trace the network, confront the leader, or contact your allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Trace the network.",
                "nextChapterIndex": 82,
            },
            {
                "choiceText": "Confront the leader.",
                "nextChapterIndex": 72,
            },
            {
                "choiceText": "Contact your allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 86,
        "title": "Confronting the Vendor",
        "content": "You decide to confront the vendor directly. The encounter is intense, and you face many dangers. Eventually, you uncover their plans. Do you report to the Galactic Council, continue investigating, or seek allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Report to the Galactic Council.",
                "nextChapterIndex": 71,
            },
            {
                "choiceText": "Continue investigating.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Seek allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 87,
        "title": "Following the Vendor",
        "content": "You decide to follow the vendor discreetly. He leads you to a hidden base. Do you infiltrate the base, gather more intel, or contact your allies?",
        "isEnd": false,
        "choices": [
            {
                "choiceText": "Infiltrate the base.",
                "nextChapterIndex": 29,
            },
            {
                "choiceText": "Gather more intel.",
                "nextChapterIndex": 30,
            },
            {
                "choiceText": "Contact your allies.",
                "nextChapterIndex": 31,
            }
        ]
    },
    {
        "chapterIndex": 88,
        "title": "Using the Artifact",
        "content": "You decide to use the powerful artifact. Its energy grants you immense power, allowing you to overcome the conspirators and save the galaxy. You are hailed as a hero and given a new mission.",
        "isEnd": true,
    },
    {
        "chapterIndex": 89,
        "title": "Studying the Artifact",
        "content": "You decide to study the artifact further. The knowledge you gain provides critical insights into the Celestial Nexus. You use this knowledge to dismantle the conspiracy and save the galaxy. You are commended for your efforts and given a new mission.",
        "isEnd": true,
    },
    {
        "chapterIndex": 90,
        "title": "Joining Forces with the Senator",
        "content": "You decide to join forces with the senator. Together, you form a powerful alliance and dismantle the conspiracy. You are commended for your efforts and given a new mission.",
        "isEnd": true,
    },
    {
        "chapterIndex": 91,
        "title": "Exploring the Planet",
        "content": "You decide to explore the remote planet. The journey is filled with dangers, but you uncover the hidden location of the Celestial Nexus. You use its power to save the galaxy and are hailed as a hero.",
        "isEnd": true,
    },
    {
        "chapterIndex": 92,
        "title": "Searching for Clues",
        "content": "You decide to search for clues on the remote planet. The investigation is challenging, but you eventually find the Celestial Nexus. You use its power to dismantle the conspiracy and save the galaxy. You are commended for your efforts and given a new mission.",
        "isEnd": true,
    },
    {
        "chapterIndex": 93,
        "title": "Contacting Allies on the Planet",
        "content": "You decide to contact your allies on the remote planet. Together, you uncover the hidden location of the Celestial Nexus. You use its power to dismantle the conspiracy and save the galaxy. You are commended for your efforts and given a new mission.",
        "isEnd": true,
    },
    {
        "chapterIndex": 94,
        "title": "Seeking Another Expert",
        "content": "You decide to seek another expert about the artifact. Dr. Nyx provides critical insights into its powers. You use the knowledge to dismantle the conspiracy and save the galaxy. You are commended for your efforts and given a new mission.",
        "isEnd": true,
    }
];

module.exports = { title, author, description, imageUrl, genre, tags, chapters }