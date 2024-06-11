const title = `Dragon's Pact: The Last Alliance`;
const author = 'storyWeaver';
const description = 'In the ancient world of Elaria, dragons and humans once lived in harmony. But now, the dragons have vanished, and the realm is on the brink of war. As a young warrior chosen by the last dragon, you must forge a pact and unite the kingdoms. Will you bring peace or unleash destruction?';
const imageUrl = '/images/dragons-pact.jpg';
const genre = 'Epic Fantasy';
const tags = [
  'dragon bond',
  'ancient prophecies',
  'kingdoms united'
]

const chapters = [
  {
    "chapterIndex": 0,
    "title": "The Chosen Warrior",
    "content": "You are a young warrior in the kingdom of Eldoria. One night, a mysterious dragon appears before you, revealing that you are the chosen one destined to unite the kingdoms. The dragon offers to form a pact with you. Do you accept the pact?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Accept the pact and begin the journey.",
        "nextChapterIndex": 1,
      },
      {
        "choiceText": "Refuse the pact and stay in the kingdom.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Ask the dragon for more information.",
        "nextChapterIndex": 3,
      }
    ]
  },
  {
    "chapterIndex": 1,
    "title": "The Journey Begins",
    "content": "With the dragon as your ally, you set out on your journey. Your first task is to convince the neighboring kingdom of Arion to join the alliance. As you approach their borders, you encounter a group of hostile warriors. Do you fight them, negotiate, or find another way?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Fight the hostile warriors.",
        "nextChapterIndex": 4,
      },
      {
        "choiceText": "Negotiate with the warriors.",
        "nextChapterIndex": 5,
      },
      {
        "choiceText": "Find another way around.",
        "nextChapterIndex": 6,
      }
    ]
  },
  {
    "chapterIndex": 2,
    "title": "A Life Unfulfilled",
    "content": "You refuse the dragon’s pact and stay in the kingdom. Years pass, and the realm falls into chaos. You are haunted by the decision you made, wondering what might have been if you had accepted the dragon’s offer.",
    "isEnd": true,
  },
  {
    "chapterIndex": 3,
    "title": "Seeking More Information",
    "content": "You ask the dragon for more information about the pact. The dragon reveals that the fate of the entire realm rests on your shoulders. Convinced of the importance of the mission, you decide to accept the pact.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Accept the pact and begin the journey.",
        "nextChapterIndex": 1,
      },
      {
        "choiceText": "Refuse the pact and stay in the kingdom.",
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
    "title": "Battle at the Border",
    "content": "You draw your sword and engage the hostile warriors. The battle is fierce, but with the dragon’s support, you manage to defeat them. Now you must decide whether to continue towards Arion or rest and recover.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Continue towards Arion.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Rest and recover.",
        "nextChapterIndex": 9,
      },
      {
        "choiceText": "Search the warriors for clues.",
        "nextChapterIndex": 10,
      }
    ]
  },
  {
    "chapterIndex": 5,
    "title": "Diplomatic Negotiation",
    "content": "You attempt to negotiate with the hostile warriors. After a tense discussion, they agree to let you pass, intrigued by your mission. With their help, you gain safe passage towards Arion.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Continue towards Arion.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Ask for their assistance.",
        "nextChapterIndex": 11,
      },
      {
        "choiceText": "Offer them a place in the alliance.",
        "nextChapterIndex": 12,
      }
    ]
  },
  {
    "chapterIndex": 6,
    "title": "A Hidden Path",
    "content": "You decide to find another way around the hostile warriors. After navigating through dense forests and treacherous terrain, you discover a hidden path that leads directly to Arion.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Take the hidden path.",
        "nextChapterIndex": 13,
      },
      {
        "choiceText": "Return and face the warriors.",
        "nextChapterIndex": 4,
      },
      {
        "choiceText": "Camp for the night and rest.",
        "nextChapterIndex": 14,
      }
    ]
  },
  {
    "chapterIndex": 7,
    "title": "A Trusted Companion",
    "content": "You ask the dragon for a companion to join you on this journey. The dragon introduces you to Elara, a skilled archer with a mysterious past. Together, you set out to unite the kingdoms.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Head towards Arion.",
        "nextChapterIndex": 1,
      },
      {
        "choiceText": "Visit a nearby town for supplies.",
        "nextChapterIndex": 15,
      },
      {
        "choiceText": "Ask Elara about her past.",
        "nextChapterIndex": 16,
      }
    ]
  },
  {
    "chapterIndex": 8,
    "title": "Entering Arion",
    "content": "You arrive at the gates of Arion. The guards are wary, but the dragon’s presence convinces them to grant you an audience with the king. As you enter the throne room, the king listens to your plea for an alliance.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Convince the king with a speech.",
        "nextChapterIndex": 17,
      },
      {
        "choiceText": "Present evidence of the dragon’s return.",
        "nextChapterIndex": 18,
      },
      {
        "choiceText": "Request a private meeting.",
        "nextChapterIndex": 19,
      }
    ]
  },
  {
    "chapterIndex": 9,
    "title": "Rest and Recovery",
    "content": "You decide to rest and recover after the battle. Finding a safe spot, you tend to your wounds and regain your strength. The next morning, you feel rejuvenated and ready to continue your journey.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Head towards Arion.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Explore the surrounding area.",
        "nextChapterIndex": 20,
      },
      {
        "choiceText": "Search for clues about the warriors.",
        "nextChapterIndex": 10,
      }
    ]
  },
  {
    "chapterIndex": 10,
    "title": "Uncovering Clues",
    "content": "You search the fallen warriors and find a map detailing their plans. It seems they were working for a rival kingdom intent on disrupting your mission. With this information, you prepare to continue your journey.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Head towards Arion.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Follow the map’s clues.",
        "nextChapterIndex": 21,
      },
      {
        "choiceText": "Return to your kingdom with the information.",
        "nextChapterIndex": 22,
      }
    ]
  },
  {
    "chapterIndex": 11,
    "title": "Gaining Allies",
    "content": "You ask the warriors for their assistance in your mission. Impressed by your determination, they agree to join you. With their help, you gain safe passage and additional support for the alliance.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Head towards Arion.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Plan a strategy with the warriors.",
        "nextChapterIndex": 24,
      }
    ]
  },
  {
    "chapterIndex": 12,
    "title": "Offering a Place",
    "content": "You offer the warriors a place in the alliance. They accept, seeing the potential benefits of unity. With their support, your mission gains momentum, and you continue towards Arion with renewed confidence.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Head towards Arion.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Plan a strategy with the warriors.",
        "nextChapterIndex": 24,
      }
    ]
  },
  {
    "chapterIndex": 13,
    "title": "The Hidden Path",
    "content": "You take the hidden path and avoid any further confrontations. The journey is long and arduous, but you eventually arrive at the borders of Arion, ready to negotiate for their alliance.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Approach the gates of Arion.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Scout the area for potential threats.",
        "nextChapterIndex": 25,
      },
      {
        "choiceText": "Rest before entering the kingdom.",
        "nextChapterIndex": 14,
      }
    ]
  },
  {
    "chapterIndex": 14,
    "title": "Camping for the Night",
    "content": "You decide to camp for the night and rest. The dragon watches over you as you sleep. In the morning, you feel refreshed and ready to face the challenges ahead.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Head towards Arion.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Explore the surrounding area.",
        "nextChapterIndex": 20,
      },
      {
        "choiceText": "Search for clues about the warriors.",
        "nextChapterIndex": 10,
      }
    ]
  },
  {
    "chapterIndex": 15,
    "title": "Gathering Supplies",
    "content": "You decide to visit a nearby town for supplies. The townsfolk are curious about your mission, and some offer their help. With fresh supplies and newfound support, you continue your journey.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Head towards Arion.",
        "nextChapterIndex": 1,
      },
      {
        "choiceText": "Ask the townsfolk for information.",
        "nextChapterIndex": 26,
      },
      {
        "choiceText": "Recruit more companions.",
        "nextChapterIndex": 27,
      }
    ]
  },
  {
    "chapterIndex": 16,
    "title": "Elara’s Past",
    "content": "You ask Elara about her past. She reveals that she was once part of a secret order dedicated to protecting the realm. Her skills and knowledge prove invaluable as you continue your journey.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Head towards Arion.",
        "nextChapterIndex": 1,
      },
      {
        "choiceText": "Ask Elara for advice.",
        "nextChapterIndex": 28,
      },
      {
        "choiceText": "Learn more about the secret order.",
        "nextChapterIndex": 29,
      }
    ]
  },
  {
    "chapterIndex": 17,
    "title": "Convincing the King",
    "content": "You deliver a passionate speech to the king of Arion, detailing the importance of the alliance and the return of the dragons. The king is impressed by your conviction and agrees to join the alliance.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Plan the next steps with the king.",
        "nextChapterIndex": 30,
      },
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Strengthen the alliance.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 18,
    "title": "Evidence of Dragons",
    "content": "You present evidence of the dragon’s return to the king. The sight of the majestic creature convinces the king of your mission’s legitimacy, and he pledges his kingdom’s support to the alliance.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Plan the next steps with the king.",
        "nextChapterIndex": 30,
      },
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Strengthen the alliance.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 19,
    "title": "Private Meeting",
    "content": "You request a private meeting with the king, away from prying eyes. In this intimate setting, you discuss the details of your mission and the importance of the alliance. The king agrees to join your cause.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Plan the next steps with the king.",
        "nextChapterIndex": 30,
      },
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Strengthen the alliance.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 20,
    "title": "Exploring the Area",
    "content": "You decide to explore the surrounding area before heading to Arion. The dragon scouts ahead, ensuring your safety. You find a hidden grove that offers a moment of peace and reflection.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Continue towards Arion.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Rest in the grove.",
        "nextChapterIndex": 14,
      },
      {
        "choiceText": "Search for clues about the warriors.",
        "nextChapterIndex": 10,
      }
    ]
  },
  {
    "chapterIndex": 21,
    "title": "Following the Map",
    "content": "You decide to follow the map’s clues, leading you to a hidden camp. Here, you discover more about the rival kingdom’s plans and gather valuable information for your mission.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Continue towards Arion.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Return to your kingdom with the information.",
        "nextChapterIndex": 22,
      },
      {
        "choiceText": "Seek out the rival kingdom’s leader.",
        "nextChapterIndex": 32,
      }
    ]
  },
  {
    "chapterIndex": 22,
    "title": "Returning Home",
    "content": "You decide to return to your kingdom with the information. The dragon accompanies you, and together you present your findings to the king. With this new knowledge, your kingdom prepares for the challenges ahead.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Prepare for the next steps.",
        "nextChapterIndex": 33,
      },
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Strengthen the kingdom’s defenses.",
        "nextChapterIndex": 34,
      }
    ]
  },
  {
    "chapterIndex": 23,
    "title": "Seeking Allies",
    "content": "You continue your journey, seeking out more allies for the alliance. Along the way, you encounter various kingdoms and factions, each with their own challenges and potential for cooperation.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Negotiate with a nearby kingdom.",
        "nextChapterIndex": 35,
      },
      {
        "choiceText": "Recruit a band of mercenaries.",
        "nextChapterIndex": 36,
      },
      {
        "choiceText": "Seek out a hidden faction.",
        "nextChapterIndex": 37,
      }
    ]
  },
  {
    "chapterIndex": 24,
    "title": "Strategic Planning",
    "content": "You sit down with the warriors to plan a strategy. Their insights prove invaluable, and together you devise a plan to approach Arion and other kingdoms. The alliance grows stronger with each passing day.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Head towards Arion.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Strengthen the alliance.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 25,
    "title": "Scouting the Area",
    "content": "You scout the area around Arion, ensuring there are no threats before entering. Your vigilance pays off as you discover a group of spies planning an ambush. You neutralize the threat and proceed safely to the kingdom.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Approach the gates of Arion.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Rest before entering the kingdom.",
        "nextChapterIndex": 14,
      },
      {
        "choiceText": "Investigate the spies further.",
        "nextChapterIndex": 38,
      }
    ]
  },
  {
    "chapterIndex": 26,
    "title": "Information Gathering",
    "content": "You ask the townsfolk for information. They share tales of the rival kingdom and their plans. With this knowledge, you are better prepared to face the challenges ahead and negotiate with Arion.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Head towards Arion.",
        "nextChapterIndex": 1,
      },
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Prepare a strategy with the information.",
        "nextChapterIndex": 24,
      }
    ]
  },
  {
    "chapterIndex": 27,
    "title": "Recruiting Companions",
    "content": "You recruit more companions from the town. Their skills and knowledge add to the strength of your mission. With a larger group, you continue your journey with greater confidence.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Head towards Arion.",
        "nextChapterIndex": 1,
      },
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Prepare a strategy with the new companions.",
        "nextChapterIndex": 24,
      }
    ]
  },
  {
    "chapterIndex": 28,
    "title": "Seeking Advice",
    "content": "You ask Elara for advice on the journey ahead. Her insights prove invaluable, and together you decide on the best course of action. With her guidance, you feel more confident in your mission.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Head towards Arion.",
        "nextChapterIndex": 1,
      },
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Strengthen the alliance.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 29,
    "title": "Learning About the Order",
    "content": "You learn more about the secret order Elara was part of. Their knowledge and skills are crucial to your mission. With this newfound understanding, you are better equipped to face the challenges ahead.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Head towards Arion.",
        "nextChapterIndex": 1,
      },
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Strengthen the alliance.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 30,
    "title": "Planning with the King",
    "content": "You sit down with the king of Arion to plan the next steps. Together, you devise a strategy to unite the kingdoms and strengthen the alliance. The support of Arion bolsters your mission’s success.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Strengthen the alliance.",
        "nextChapterIndex": 31,
      },
      {
        "choiceText": "Prepare for the final battle.",
        "nextChapterIndex": 39,
      }
    ]
  },
  {
    "chapterIndex": 31,
    "title": "Strengthening the Alliance",
    "content": "You focus on strengthening the alliance, ensuring the cooperation of all involved kingdoms. Your efforts pay off as the alliance grows stronger and more unified, ready to face any challenge.",
    "isEnd": true,
  },
  {
    "chapterIndex": 32,
    "title": "Confronting the Rival",
    "content": "You decide to confront the rival kingdom’s leader. The dragon accompanies you, and together you present a compelling case for peace and unity. The leader agrees to a truce, strengthening your mission.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Strengthen the alliance.",
        "nextChapterIndex": 31,
      },
      {
        "choiceText": "Prepare for the final battle.",
        "nextChapterIndex": 39,
      }
    ]
  },
  {
    "chapterIndex": 33,
    "title": "Preparing for the Next Steps",
    "content": "Back in your kingdom, you prepare for the next steps of your mission. The dragon helps you gather resources and allies, ensuring you are ready for the challenges ahead.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Strengthen the kingdom’s defenses.",
        "nextChapterIndex": 34,
      },
      {
        "choiceText": "Plan the next move with the dragon.",
        "nextChapterIndex": 24,
      }
    ]
  },
  {
    "chapterIndex": 34,
    "title": "Strengthening Defenses",
    "content": "You focus on strengthening your kingdom’s defenses, preparing for any potential threats. The dragon’s presence boosts morale, and your kingdom becomes a bastion of strength.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Plan the next move with the dragon.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Prepare for the final battle.",
        "nextChapterIndex": 39,
      }
    ]
  },
  {
    "chapterIndex": 35,
    "title": "Negotiating with a Kingdom",
    "content": "You negotiate with a nearby kingdom, presenting the importance of the alliance. The king agrees to join your cause, and your mission gains significant support.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Strengthen the alliance.",
        "nextChapterIndex": 31,
      },
      {
        "choiceText": "Prepare for the final battle.",
        "nextChapterIndex": 39,
      }
    ]
  },
  {
    "chapterIndex": 36,
    "title": "Recruiting Mercenaries",
    "content": "You recruit a band of mercenaries, promising them a share of the rewards. Their skills and numbers bolster your mission, and you continue with greater confidence.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Strengthen the alliance.",
        "nextChapterIndex": 31,
      },
      {
        "choiceText": "Prepare for the final battle.",
        "nextChapterIndex": 39,
      }
    ]
  },
  {
    "chapterIndex": 37,
    "title": "Finding Hidden Factions",
    "content": "You seek out a hidden faction known for their prowess in battle. Convincing them to join your cause, you gain powerful allies who add to the strength of the alliance.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek out more allies.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Strengthen the alliance.",
        "nextChapterIndex": 31,
      },
      {
        "choiceText": "Prepare for the final battle.",
        "nextChapterIndex": 39,
      }
    ]
  },
  {
    "chapterIndex": 38,
    "title": "Investigating the Spies",
    "content": "You investigate the spies further, discovering their plans to sabotage your mission. With this knowledge, you are able to thwart their efforts and proceed safely to Arion.",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Approach the gates of Arion.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Rest before entering the kingdom.",
        "nextChapterIndex": 14,
      },
      {
        "choiceText": "Continue to scout the area.",
        "nextChapterIndex": 25,
      }
    ]
  },
  {
    "chapterIndex": 39,
    "title": "Final Battle Preparation",
    "content": "With the alliance strong and your kingdom prepared, you plan for the final battle against the forces threatening the realm. The dragon and your allies stand ready, and the fate of Elaria rests in your hands.",
    "isEnd": true,
  }
]

module.exports = { title, author, description, imageUrl, genre, tags, chapters }
