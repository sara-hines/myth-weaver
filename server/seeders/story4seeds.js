const title = 'Echoes of the Abyss';
const author = 'fableFan';
const description = 'In a world where sorcery is commonplace and demons known as "Umbral Shades" haunt the shadows, you are a skilled magician named Elara. As you grapple with increasing demonic encounters, your sanity frays, endangering your family and your quest to develop new spells for the greater good. Your choices will determine if you can fend off the darkness and contribute to a brighter future—or if you will succumb to the horrors lurking within and around you.';
const imageUrl = '/images/haunted-forest.jpg';
const genre = 'Sword and Sorcery';
const tags = [
  'ghosts',
  'magic',
  'supernatural',
  'horror'
]

const chapters = [
  {
    "chapterIndex": 0,
    "title": "Whispers in the Dark",
    "content": "You are Elara, a skilled magician living in the small town of Drakestone. Recently, you have been plagued by nightmares and whispers that seem to come from the shadows themselves. One evening, while practicing a new spell, you see a ghostly figure materialize before you. Do you confront the figure, seek help from a fellow magician, or ignore it and focus on your family?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Confront the figure.",
        "nextChapterIndex": 1,
      },
      {
        "choiceText": "Seek help from a fellow magician.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Ignore it and focus on your family.",
        "nextChapterIndex": 3,
      }
    ]
  },
  {
    "chapterIndex": 1,
    "title": "A Haunting Presence",
    "content": "You gather your courage and confront the ghostly figure. It turns out to be an Umbral Shade, a demon from ancient myths. The Shade hisses and lunges at you. Do you cast a banishing spell, call for help, or try to negotiate with the Shade?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Cast a banishing spell.",
        "nextChapterIndex": 4,
      },
      {
        "choiceText": "Call for help.",
        "nextChapterIndex": 5,
      },
      {
        "choiceText": "Negotiate with the Shade.",
        "nextChapterIndex": 6,
      }
    ]
  },
  {
    "chapterIndex": 2,
    "title": "Seeking Wisdom",
    "content": "You seek out your friend Arin, a wise and experienced magician. Arin listens to your tale and agrees to help you. He suggests that you both visit the ancient library for clues about the Umbral Shades. Do you agree, suggest a different plan, or ask Arin to perform a protective spell?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Agree to visit the library.",
        "nextChapterIndex": 7,
      },
      {
        "choiceText": "Suggest a different plan.",
        "nextChapterIndex": 8,
      },
      {
        "choiceText": "Ask Arin to perform a protective spell.",
        "nextChapterIndex": 9,
      }
    ]
  },
  {
    "chapterIndex": 3,
    "title": "Family First",
    "content": "You decide to ignore the ghostly figure and focus on your family. Your spouse, Lira, and your children, Miri and Thad, provide a brief respite from the horrors. However, the whispers and visions grow stronger, threatening your sanity. Do you confide in Lira, visit a healer, or attempt to shield your family with magic?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Confide in Lira.",
        "nextChapterIndex": 10,
      },
      {
        "choiceText": "Visit a healer.",
        "nextChapterIndex": 11,
      },
      {
        "choiceText": "Shield your family with magic.",
        "nextChapterIndex": 12,
      }
    ]
  },
  {
    "chapterIndex": 4,
    "title": "The Banishing Spell",
    "content": "You cast a powerful banishing spell, and the Shade shrieks as it dissolves into nothingness. However, you feel a chilling presence lingering. Do you investigate further, seek help from Arin, or return to your family?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Investigate further.",
        "nextChapterIndex": 13,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Return to your family.",
        "nextChapterIndex": 3,
      }
    ]
  },
  {
    "chapterIndex": 5,
    "title": "Help Arrives",
    "content": "You call for help, and Arin arrives just in time. Together, you manage to banish the Shade, but not without sustaining injuries. Do you rest and recover, seek out the source of the Shades, or fortify your home with protective spells?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Rest and recover.",
        "nextChapterIndex": 14,
      },
      {
        "choiceText": "Seek out the source of the Shades.",
        "nextChapterIndex": 15,
      },
      {
        "choiceText": "Fortify your home with protective spells.",
        "nextChapterIndex": 16,
      }
    ]
  },
  {
    "chapterIndex": 6,
    "title": "A Dangerous Bargain",
    "content": "You try to negotiate with the Shade. It offers to spare your family in exchange for your soul. The offer is tempting but comes with dire consequences. Do you accept the bargain, refuse, or try to trick the Shade?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Accept the bargain.",
        "nextChapterIndex": 17,
      },
      {
        "choiceText": "Refuse the bargain.",
        "nextChapterIndex": 18,
      },
      {
        "choiceText": "Try to trick the Shade.",
        "nextChapterIndex": 19,
      }
    ]
  },
  {
    "chapterIndex": 7,
    "title": "Ancient Knowledge",
    "content": "You and Arin visit the ancient library. The musty tomes hold secrets of the Umbral Shades and their origins. As you delve deeper into the lore, you find a ritual that might banish the Shades forever. Do you attempt the ritual, seek further clarification, or leave the library with the information?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Attempt the ritual.",
        "nextChapterIndex": 20,
      },
      {
        "choiceText": "Seek further clarification.",
        "nextChapterIndex": 21,
      },
      {
        "choiceText": "Leave the library with the information.",
        "nextChapterIndex": 22,
      }
    ]
  },
  {
    "chapterIndex": 8,
    "title": "Different Paths",
    "content": "You suggest a different plan to Arin. He listens and agrees to try your approach. Do you propose seeking out a powerful artifact, consulting a mystical seer, or journeying to the source of the Shades?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek out a powerful artifact.",
        "nextChapterIndex": 23,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Journey to the source of the Shades.",
        "nextChapterIndex": 25,
      }
    ]
  },
  {
    "chapterIndex": 9,
    "title": "Protective Spells",
    "content": "You ask Arin to perform a protective spell around your home. The spell is cast, but you feel the Shades are growing stronger. Do you fortify the spell, investigate the source of the Shades, or seek help from another magician?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Fortify the spell.",
        "nextChapterIndex": 26,
      },
      {
        "choiceText": "Investigate the source of the Shades.",
        "nextChapterIndex": 15,
      },
      {
        "choiceText": "Seek help from another magician.",
        "nextChapterIndex": 27,
      }
    ]
  },
  {
    "chapterIndex": 10,
    "title": "Confiding in Lira",
    "content": "You confide in Lira about the haunting visions and the Shade. She listens with concern and suggests seeking a healer or a protective spell. Do you agree to see a healer, ask Lira to help with a protective spell, or try to face the Shades together?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "See a healer.",
        "nextChapterIndex": 11,
      },
      {
        "choiceText": "Ask Lira to help with a protective spell.",
        "nextChapterIndex": 28,
      },
      {
        "choiceText": "Face the Shades together.",
        "nextChapterIndex": 29,
      }
    ]
  },
  {
    "chapterIndex": 11,
    "title": "Seeking Healing",
    "content": "You visit a healer, who provides potions and spells to strengthen your mind. The healing helps, but the Shades still linger. Do you continue seeking help from the healer, consult a mystical seer, or return to Arin for assistance?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Continue seeking help from the healer.",
        "nextChapterIndex": 30,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Return to Arin for assistance.",
        "nextChapterIndex": 2,
      }
    ]
  },
  {
    "chapterIndex": 12,
    "title": "Shielding Your Family",
    "content": "You attempt to shield your family with magic, casting protective spells around your home. However, the Shades' influence grows stronger, seeping into your mind. Do you fortify the spells, seek help from Arin, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Fortify the spells.",
        "nextChapterIndex": 26,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 13,
    "title": "Deeper into the Abyss",
    "content": "You investigate further, delving into the origins of the Umbral Shades. The more you learn, the more your sanity frays. Do you continue your research, seek help from Arin, or attempt to banish the Shades once and for all?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Continue your research.",
        "nextChapterIndex": 32,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Attempt to banish the Shades.",
        "nextChapterIndex": 33,
      }
    ]
  },
  {
    "chapterIndex": 14,
    "title": "A Moment of Respite",
    "content": "You rest and recover from your injuries. The nightmares and whispers continue, but you feel stronger. Do you investigate the source of the Shades, fortify your home with protective spells, or seek out a powerful artifact?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Investigate the source of the Shades.",
        "nextChapterIndex": 15,
      },
      {
        "choiceText": "Fortify your home with protective spells.",
        "nextChapterIndex": 16,
      },
      {
        "choiceText": "Seek out a powerful artifact.",
        "nextChapterIndex": 23,
      }
    ]
  },
  {
    "chapterIndex": 15,
    "title": "Source of Darkness",
    "content": "You and Arin decide to seek out the source of the Umbral Shades. The journey is perilous, filled with horrifying visions and demonic encounters. Do you press on, seek help from a mystical seer, or return home to protect your family?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Press on.",
        "nextChapterIndex": 34,
      },
      {
        "choiceText": "Seek help from a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Return home to protect your family.",
        "nextChapterIndex": 3,
      }
    ]
  },
  {
    "chapterIndex": 16,
    "title": "Fortifying the Home",
    "content": "You fortify your home with powerful protective spells. However, the Shades' influence continues to grow. Do you investigate the source of the Shades, seek help from another magician, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Investigate the source of the Shades.",
        "nextChapterIndex": 15,
      },
      {
        "choiceText": "Seek help from another magician.",
        "nextChapterIndex": 27,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 17,
    "title": "A Soul's Bargain",
    "content": "You accept the Shade's bargain, sacrificing your soul to protect your family. The Shades leave, but you feel your humanity slipping away. You become a hollow shell, forever haunted by the knowledge of what you've lost.",
    "isEnd": true,
  },
  {
    "chapterIndex": 18,
    "title": "Defiant Stand",
    "content": "You refuse the Shade's bargain, standing firm against its temptations. The Shade retaliates, plunging you into a nightmare realm. You fight bravely but are eventually overwhelmed by the darkness, losing your sanity and your life.",
    "isEnd": true,
  },
  {
    "chapterIndex": 19,
    "title": "Trickery and Shadows",
    "content": "You attempt to trick the Shade, using your wits to outmaneuver it. The Shade realizes your deception and attacks. Despite your best efforts, you are consumed by the darkness, your soul forever trapped in the abyss.",
    "isEnd": true,
  },
  {
    "chapterIndex": 20,
    "title": "Ritual of Banishment",
    "content": "You and Arin perform the ancient ritual, invoking powerful magic to banish the Umbral Shades. The ritual is successful, and the Shades are driven back into the void. You are hailed as a hero, but the strain on your mind leaves you forever changed.",
    "isEnd": true,
  },
  {
    "chapterIndex": 21,
    "title": "Seeking Clarity",
    "content": "You seek further clarification on the ritual. The ancient texts reveal additional steps needed for success. Do you proceed with the ritual, seek help from a mystical seer, or leave the library with the information?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Proceed with the ritual.",
        "nextChapterIndex": 20,
      },
      {
        "choiceText": "Seek help from a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Leave the library with the information.",
        "nextChapterIndex": 22,
      }
    ]
  },
  {
    "chapterIndex": 22,
    "title": "Armed with Knowledge",
    "content": "You leave the library, armed with knowledge about the Umbral Shades. As you prepare to confront them, the whispers grow louder. Do you seek help from Arin, fortify your home with protective spells, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Fortify your home with protective spells.",
        "nextChapterIndex": 16,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 23,
    "title": "Artifact of Power",
    "content": "You and Arin seek out a powerful artifact rumored to banish demons. The journey is dangerous, filled with traps and demonic guardians. Do you continue your quest for the artifact, seek help from a mystical seer, or return home to protect your family?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Continue your quest for the artifact.",
        "nextChapterIndex": 35,
      },
      {
        "choiceText": "Seek help from a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Return home to protect your family.",
        "nextChapterIndex": 3,
      }
    ]
  },
  {
    "chapterIndex": 24,
    "title": "Mystical Guidance",
    "content": "You consult a mystical seer, who provides cryptic advice and a vision of the future. The seer's words are both enlightening and terrifying. Do you follow the seer's guidance, seek help from Arin, or pursue your own path?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Follow the seer's guidance.",
        "nextChapterIndex": 36,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Pursue your own path.",
        "nextChapterIndex": 37,
      }
    ]
  },
  {
    "chapterIndex": 25,
    "title": "Journey to Darkness",
    "content": "You and Arin journey to the source of the Umbral Shades, deep in the cursed forest. The path is treacherous, and the shadows whisper of despair. Do you continue forward, set up a protective barrier, or split up to cover more ground?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Continue forward.",
        "nextChapterIndex": 38,
      },
      {
        "choiceText": "Set up a protective barrier.",
        "nextChapterIndex": 39,
      },
      {
        "choiceText": "Split up to cover more ground.",
        "nextChapterIndex": 40,
      }
    ]
  },
  {
    "chapterIndex": 26,
    "title": "Strengthening the Shield",
    "content": "You decide to fortify the protective spell around your home. The magic is strong, but the Shadows seem to grow more aggressive. Do you seek additional magical sources, consult a mystical seer, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek additional magical sources.",
        "nextChapterIndex": 41,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 27,
    "title": "Calling for Allies",
    "content": "You seek out another magician, hoping for more powerful assistance. The magician, Lyra, agrees to help you. Do you and Lyra perform a powerful ritual, seek out the source of the Shades, or fortify your home together?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Perform a powerful ritual.",
        "nextChapterIndex": 42,
      },
      {
        "choiceText": "Seek out the source of the Shades.",
        "nextChapterIndex": 15,
      },
      {
        "choiceText": "Fortify your home together.",
        "nextChapterIndex": 43,
      }
    ]
  },
  {
    "chapterIndex": 28,
    "title": "United Front",
    "content": "You and Lira work together to cast a protective spell. The bond between you strengthens the magic, but the Shades seem relentless. Do you seek help from Arin, consult a mystical seer, or fortify the spell with ancient runes?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Fortify the spell with ancient runes.",
        "nextChapterIndex": 44,
      }
    ]
  },
  {
    "chapterIndex": 29,
    "title": "Facing the Darkness",
    "content": "You and Lira decide to face the Shades together. The battle is fierce, and the Shades' power is overwhelming. Do you continue fighting, retreat and seek help, or attempt a desperate banishment spell?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Continue fighting.",
        "nextChapterIndex": 45,
      },
      {
        "choiceText": "Retreat and seek help.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Attempt a desperate banishment spell.",
        "nextChapterIndex": 46,
      }
    ]
  },
  {
    "chapterIndex": 30,
    "title": "Endless Healing",
    "content": "You continue seeking help from the healer. The process is slow, and the Shades' influence grows stronger. Do you seek help from Arin, consult a mystical seer, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 31,
    "title": "Final Confrontation",
    "content": "You decide to confront the Shades directly. The battle is intense, and you feel your sanity slipping away. Do you press on, seek help from Arin, or attempt a desperate banishment spell?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Press on.",
        "nextChapterIndex": 47,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Attempt a desperate banishment spell.",
        "nextChapterIndex": 46,
      }
    ]
  },
  {
    "chapterIndex": 32,
    "title": "Mind's Abyss",
    "content": "You continue your research, delving deeper into the abyss of your mind. The knowledge is vast, but so is the risk to your sanity. Do you press on, seek help from Arin, or consult a mystical seer?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Press on.",
        "nextChapterIndex": 48,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      }
    ]
  },
  {
    "chapterIndex": 33,
    "title": "Attempted Banishment",
    "content": "You attempt to banish the Shades once and for all. The ritual is powerful, but the Shades fight back. Do you seek help from Arin, consult a mystical seer, or fortify your home with protective spells?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Fortify your home with protective spells.",
        "nextChapterIndex": 16,
      }
    ]
  },
  {
    "chapterIndex": 34,
    "title": "Path of Shadows",
    "content": "You press on, deeper into the cursed forest. The shadows seem to close in around you. Do you seek help from Arin, consult a mystical seer, or attempt a desperate banishment spell?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Attempt a desperate banishment spell.",
        "nextChapterIndex": 46,
      }
    ]
  },
  {
    "chapterIndex": 35,
    "title": "Artifact's Power",
    "content": "You continue your quest for the powerful artifact. The journey is perilous, but you feel the artifact's power drawing closer. Do you press on, seek help from Arin, or return home to protect your family?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Press on.",
        "nextChapterIndex": 49,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Return home to protect your family.",
        "nextChapterIndex": 3,
      }
    ]
  },
  {
    "chapterIndex": 36,
    "title": "Seer's Path",
    "content": "You follow the seer's guidance, embarking on a path of hidden truths. The journey is filled with cryptic signs and visions. Do you seek further guidance from the seer, press on alone, or seek help from Arin?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek further guidance from the seer.",
        "nextChapterIndex": 50,
      },
      {
        "choiceText": "Press on alone.",
        "nextChapterIndex": 51,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      }
    ]
  },
  {
    "chapterIndex": 37,
    "title": "Own Path",
    "content": "You decide to pursue your own path, trusting your instincts. The journey is fraught with dangers and revelations. Do you seek help from Arin, consult a mystical seer, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 38,
    "title": "Darkness Unveiled",
    "content": "You continue forward, unveiling the source of the darkness. The shadows writhe and whisper of ancient secrets. Do you confront the source directly, seek help from Arin, or attempt a desperate banishment spell?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Confront the source directly.",
        "nextChapterIndex": 52,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Attempt a desperate banishment spell.",
        "nextChapterIndex": 46,
      }
    ]
  },
  {
    "chapterIndex": 39,
    "title": "Protective Barrier",
    "content": "You set up a protective barrier, hoping to fend off the Shades. The magic holds, but the Shadows grow restless. Do you seek help from Arin, consult a mystical seer, or press on through the darkness?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Press on through the darkness.",
        "nextChapterIndex": 53,
      }
    ]
  },
  {
    "chapterIndex": 40,
    "title": "Split Paths",
    "content": "You and Arin decide to split up to cover more ground. The isolation is terrifying, and the Shadows seem to close in. Do you continue alone, seek help from Arin, or consult a mystical seer?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Continue alone.",
        "nextChapterIndex": 54,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      }
    ]
  },
  {
    "chapterIndex": 41,
    "title": "Magical Sources",
    "content": "You seek additional magical sources, hoping to strengthen your defenses. The journey is perilous, but you find a hidden wellspring of power. Do you draw from the wellspring, seek help from Arin, or fortify your home with the newfound power?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Draw from the wellspring.",
        "nextChapterIndex": 55,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Fortify your home with the newfound power.",
        "nextChapterIndex": 56,
      }
    ]
  },
  {
    "chapterIndex": 42,
    "title": "Powerful Ritual",
    "content": "You and Lyra perform a powerful ritual to banish the Shades. The magic is intense, but so is the risk. Do you press on with the ritual, seek help from Arin, or consult a mystical seer?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Press on with the ritual.",
        "nextChapterIndex": 57,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      }
    ]
  },
  {
    "chapterIndex": 43,
    "title": "United Defense",
    "content": "You and Lyra fortify your home together. The combined magic is strong, but the Shadows are relentless. Do you seek help from Arin, consult a mystical seer, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 44,
    "title": "Ancient Runes",
    "content": "You fortify the protective spell with ancient runes. The magic holds, but the Shadows seem to grow more aggressive. Do you seek help from Arin, consult a mystical seer, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 45,
    "title": "Final Stand",
    "content": "You continue fighting the Shades with Lira. The battle is fierce, and you feel your strength waning. Do you seek help from Arin, consult a mystical seer, or attempt a desperate banishment spell?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Attempt a desperate banishment spell.",
        "nextChapterIndex": 46,
      }
    ]
  },
  {
    "chapterIndex": 46,
    "title": "Desperate Banishment",
    "content": "You attempt a desperate banishment spell. The magic is powerful, but so are the Shadows. Do you seek help from Arin, consult a mystical seer, or fortify your home with protective spells?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Fortify your home with protective spells.",
        "nextChapterIndex": 16,
      }
    ]
  },
  {
    "chapterIndex": 47,
    "title": "Pressing On",
    "content": "You press on, determined to banish the Shades. The battle is fierce, and your strength is waning. Do you seek help from Arin, consult a mystical seer, or attempt a desperate banishment spell?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Attempt a desperate banishment spell.",
        "nextChapterIndex": 46,
      }
    ]
  },
  {
    "chapterIndex": 48,
    "title": "Madness Beckons",
    "content": "You press on, delving deeper into your research. The knowledge is vast, but so is the risk to your sanity. Do you seek help from Arin, consult a mystical seer, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 49,
    "title": "Artifact Found",
    "content": "You find the powerful artifact, its energy pulsing with ancient magic. The artifact could banish the Shades, but using it is risky. Do you use the artifact, seek help from Arin, or consult a mystical seer?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Use the artifact.",
        "nextChapterIndex": 58,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      }
    ]
  },
  {
    "chapterIndex": 50,
    "title": "Further Guidance",
    "content": "You seek further guidance from the seer. The visions are clearer, but so are the dangers. Do you follow the seer's instructions, seek help from Arin, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Follow the seer's instructions.",
        "nextChapterIndex": 59,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 51,
    "title": "Pressing On Alone",
    "content": "You press on alone, facing the dangers head-on. The journey is perilous, and the Shadows grow stronger. Do you seek help from Arin, consult a mystical seer, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 52,
    "title": "Confronting the Source",
    "content": "You confront the source of the darkness directly. The Shadows are overwhelming, and you feel your sanity slipping away. Do you seek help from Arin, consult a mystical seer, or attempt a desperate banishment spell?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Attempt a desperate banishment spell.",
        "nextChapterIndex": 46,
      }
    ]
  },
  {
    "chapterIndex": 53,
    "title": "Through the Darkness",
    "content": "You press on through the darkness, facing the Shadows head-on. The journey is perilous, and you feel your strength waning. Do you seek help from Arin, consult a mystical seer, or attempt a desperate banishment spell?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Attempt a desperate banishment spell.",
        "nextChapterIndex": 46,
      }
    ]
  },
  {
    "chapterIndex": 54,
    "title": "Alone in the Dark",
    "content": "You continue alone, facing the Shadows head-on. The isolation is terrifying, and the Shadows seem to close in. Do you seek help from Arin, consult a mystical seer, or attempt a desperate banishment spell?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Attempt a desperate banishment spell.",
        "nextChapterIndex": 46,
      }
    ]
  },
  {
    "chapterIndex": 55,
    "title": "Wellspring of Power",
    "content": "You draw from the wellspring of power, feeling the ancient magic surge through you. The power is overwhelming, but so are the risks. Do you use the newfound power to banish the Shades, seek help from Arin, or consult a mystical seer?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Use the newfound power.",
        "nextChapterIndex": 60,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      }
    ]
  },
  {
    "chapterIndex": 56,
    "title": "Home Fortified",
    "content": "You fortify your home with the newfound power. The magic is strong, but the Shadows are relentless. Do you seek help from Arin, consult a mystical seer, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 57,
    "title": "Ritual Completed",
    "content": "You press on with the ritual, channeling powerful magic. The ritual is successful, but the strain on your mind is immense. Do you seek help from Arin, consult a mystical seer, or rest and recover?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Rest and recover.",
        "nextChapterIndex": 14,
      }
    ]
  },
  {
    "chapterIndex": 58,
    "title": "Artifact's Power Unleashed",
    "content": "You use the artifact's power to banish the Shades. The magic is overwhelming, and you feel your sanity slipping away. Do you seek help from Arin, consult a mystical seer, or rest and recover?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Rest and recover.",
        "nextChapterIndex": 14,
      }
    ]
  },
  {
    "chapterIndex": 59,
    "title": "Seer's Path Followed",
    "content": "You follow the seer's instructions, embarking on a path of hidden truths. The journey is filled with cryptic signs and visions. Do you seek further guidance from the seer, seek help from Arin, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek further guidance from the seer.",
        "nextChapterIndex": 50,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 60,
    "title": "Power Unleashed",
    "content": "You use the newfound power to banish the Shades. The magic is overwhelming, and you feel your sanity slipping away. Do you seek help from Arin, consult a mystical seer, or rest and recover?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Rest and recover.",
        "nextChapterIndex": 14,
      }
    ]
  },
  {
    "chapterIndex": 61,
    "title": "Pressing On Alone",
    "content": "You press on alone, facing the dangers head-on. The journey is perilous, and the Shadows grow stronger. Do you seek help from Arin, consult a mystical seer, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 62,
    "title": "Confronting the Source",
    "content": "You confront the source of the darkness directly. The Shadows are overwhelming, and you feel your sanity slipping away. Do you seek help from Arin, consult a mystical seer, or attempt a desperate banishment spell?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Attempt a desperate banishment spell.",
        "nextChapterIndex": 46,
      }
    ]
  },
  {
    "chapterIndex": 63,
    "title": "Through the Darkness",
    "content": "You press on through the darkness, facing the Shadows head-on. The journey is perilous, and you feel your strength waning. Do you seek help from Arin, consult a mystical seer, or attempt a desperate banishment spell?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Attempt a desperate banishment spell.",
        "nextChapterIndex": 46,
      }
    ]
  },
  {
    "chapterIndex": 64,
    "title": "Alone in the Dark",
    "content": "You continue alone, facing the Shadows head-on. The isolation is terrifying, and the Shadows seem to close in. Do you seek help from Arin, consult a mystical seer, or attempt a desperate banishment spell?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Attempt a desperate banishment spell.",
        "nextChapterIndex": 46,
      }
    ]
  },
  {
    "chapterIndex": 65,
    "title": "Wellspring of Power",
    "content": "You draw from the wellspring of power, feeling the ancient magic surge through you. The power is overwhelming, but so are the risks. Do you use the newfound power to banish the Shades, seek help from Arin, or consult a mystical seer?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Use the newfound power.",
        "nextChapterIndex": 60,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      }
    ]
  },
  {
    "chapterIndex": 66,
    "title": "Home Fortified",
    "content": "You fortify your home with the newfound power. The magic is strong, but the Shadows are relentless. Do you seek help from Arin, consult a mystical seer, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 67,
    "title": "Ritual Completed",
    "content": "You press on with the ritual, channeling powerful magic. The ritual is successful, but the strain on your mind is immense. Do you seek help from Arin, consult a mystical seer, or rest and recover?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Rest and recover.",
        "nextChapterIndex": 14,
      }
    ]
  },
  {
    "chapterIndex": 68,
    "title": "Artifact's Power Unleashed",
    "content": "You use the artifact's power to banish the Shades. The magic is overwhelming, and you feel your sanity slipping away. Do you seek help from Arin, consult a mystical seer, or rest and recover?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Consult a mystical seer.",
        "nextChapterIndex": 24,
      },
      {
        "choiceText": "Rest and recover.",
        "nextChapterIndex": 14,
      }
    ]
  },
  {
    "chapterIndex": 69,
    "title": "Seer's Path Followed",
    "content": "You follow the seer's instructions, embarking on a path of hidden truths. The journey is filled with cryptic signs and visions. Do you seek further guidance from the seer, seek help from Arin, or confront the Shades directly?",
    "isEnd": false,
    "choices": [
      {
        "choiceText": "Seek further guidance from the seer.",
        "nextChapterIndex": 50,
      },
      {
        "choiceText": "Seek help from Arin.",
        "nextChapterIndex": 2,
      },
      {
        "choiceText": "Confront the Shades directly.",
        "nextChapterIndex": 31,
      }
    ]
  },
  {
    "chapterIndex": 70,
    "title": "Power Unleashed",
    "content": "You use the newfound power to banish the Shades. The magic is overwhelming, and you feel your sanity slipping away. Do you seek help from Arin, consult a mystical seer, or rest and recover?",
    "isEnd": true,
  },
  {
    "chapterIndex": 71,
    "title": "Tragic End",
    "content": "In your final attempt to confront the Shades alone, you succumb to their overwhelming power. The last thing you see is a swirl of darkness enveloping you, your mind shattering as the world fades to black. Your family is left unprotected and unaware of your valiant efforts.",
    "isEnd": true,
  },
  {
    "chapterIndex": 72,
    "title": "Heroic Sacrifice",
    "content": "Using the artifact's power, you manage to banish the Shades at the cost of your own life. As the darkness lifts, your family mourns your loss but lives on, forever grateful for your sacrifice. Your name becomes a legend in Drakestone, remembered for generations.",
    "isEnd": true,
  },
  {
    "chapterIndex": 73,
    "title": "Eternal Struggle",
    "content": "Despite your efforts, the Umbral Shades prove too strong. You spend your remaining days battling them, slowly losing your grip on reality. In the end, your family is safe, but you are a mere shadow of your former self, forever haunted by the darkness.",
    "isEnd": true,
  },
  {
    "chapterIndex": 74,
    "title": "Mysterious Disappearance",
    "content": "Following the seer's cryptic guidance leads you to vanish into a realm between worlds. Your family searches for you in vain, left with only fragments of your journals that speak of your bravery and struggle. You become a myth, a tale told around campfires.",
    "isEnd": true,
  },
  {
    "chapterIndex": 75,
    "title": "Banishing the Darkness",
    "content": "With Arin's help and the seer's guidance, you finally manage to banish the Shades for good. The ritual leaves you exhausted but victorious. Drakestone flourishes, and your family thrives, forever grateful for your courage and wisdom.",
    "isEnd": true,
  },
  {
    "chapterIndex": 76,
    "title": "A New Dawn",
    "content": "The ancient runes combined with your newfound power successfully repel the Umbral Shades. Peace returns to Drakestone, and you dedicate your life to helping others learn to protect themselves. Your family enjoys a future filled with hope and prosperity.",
    "isEnd": true,
  },
  {
    "chapterIndex": 77,
    "title": "Legacy of Light",
    "content": "You and Lyra's combined efforts create a protective barrier so strong that the Shades never return. Your home becomes a beacon of safety, and you teach future generations the powerful magic that saved your town. Your name becomes synonymous with hope and resilience.",
    "isEnd": true,
  },
  {
    "chapterIndex": 78,
    "title": "Ultimate Triumph",
    "content": "Through sheer will and the combined knowledge of ancient texts, you perform a ritual that eradicates the Umbral Shades. The town celebrates your victory, and you are honored as the greatest magician of your time. Your family prospers, and your legacy is assured.",
    "isEnd": true,
  },
  {
    "chapterIndex": 79,
    "title": "Shattered Mind",
    "content": "Despite your powerful magic, the constant exposure to the Shades' darkness shatters your mind. You are left in a catatonic state, and your family must carry on without you. They remember you as a brave soul who fought valiantly against insurmountable odds.",
    "isEnd": true,
  },
  {
    "chapterIndex": 80,
    "title": "Final Peace",
    "content": "After a desperate battle, you manage to seal away the Shades at the cost of your own life force. As you fade away, you see your family safe and sound, their future bright because of your sacrifice. Your soul finds peace, knowing you protected those you love.",
    "isEnd": true,
  },
  {
    "chapterIndex": 81,
    "title": "Cursed Victory",
    "content": "The ritual succeeds, but at a great cost. The Shades are banished, but their curse lingers within you, slowly consuming your essence. Your family survives, but you are left in eternal torment, a tragic hero who gave everything for their safety.",
    "isEnd": true,
  },
  {
    "chapterIndex": 82,
    "title": "Dimensional Rift",
    "content": "The ritual goes awry, and you are sucked into a dimensional rift. Lost in a realm of shadows, you fight an endless battle against the Shades. Your family, believing you dead, continues their lives, while you become a legend told with awe and sorrow.",
    "isEnd": true,
  },
  {
    "chapterIndex": 83,
    "title": "Forgotten Hero",
    "content": "In a final act of bravery, you confront the source of the Shades alone. Your efforts weaken the enemy, but you disappear in the process. Drakestone eventually recovers, and though your family moves on, your name fades into a mere whisper of history.",
    "isEnd": true,
  },
  {
    "chapterIndex": 84,
    "title": "Living Legacy",
    "content": "Your powerful magic and bravery inspire the town of Drakestone to band together and create a powerful defense against the Shades. The community thrives, and you live out your days teaching others to harness their inner strength and protect the weak.",
    "isEnd": true,
  },
  {
    "chapterIndex": 85,
    "title": "Darkness Prevails",
    "content": "Despite your best efforts, the Umbral Shades overwhelm you. Your town falls into darkness, and your family is lost. Your legacy becomes a cautionary tale of the dangers of underestimating ancient evil.",
    "isEnd": true,
  },
  {
    "chapterIndex": 86,
    "title": "Eternal Guardian",
    "content": "In your final moments, you cast a spell that binds your soul to the town, forever guarding it against future threats. Your family is safe, but you become a ghostly protector, watching over Drakestone from the shadows.",
    "isEnd": true,
  },
  {
    "chapterIndex": 87,
    "title": "Shattered Reality",
    "content": "The relentless battle against the Shades fractures your perception of reality. You wander the town, a broken hero, lost in your own mind. Your family is safe, but you are a tragic reminder of the toll of dark magic.",
    "isEnd": true,
  },
  {
    "chapterIndex": 88,
    "title": "Betrayed Trust",
    "content": "A trusted ally turns against you, leading to your downfall. The Shades overwhelm you, and your family is left to fend for themselves. Your story is one of betrayal and caution against misplaced trust.",
    "isEnd": true,
  },
  {
    "chapterIndex": 89,
    "title": "Ancient Secrets",
    "content": "You uncover ancient secrets that allow you to banish the Shades permanently. The town celebrates your victory, and your family lives in peace. You are remembered as the one who unlocked the mysteries of the past to save the future.",
    "isEnd": true,
  },
  {
    "chapterIndex": 90,
    "title": "Tranquil Future",
    "content": "After a long and arduous journey, you finally rid the town of the Umbral Shades. Your family thrives, and you spend your days in peace, teaching future generations the importance of vigilance and courage. Your legacy is one of wisdom and tranquility.",
    "isEnd": true,
  }
];

module.exports = { title, author, description, imageUrl, genre, tags, chapters }