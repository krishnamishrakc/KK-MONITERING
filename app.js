
/* ===== Learn Hub data ===== */
// KK's MONITORING — 1000 High-Frequency / Exam-Oriented Vocabulary
// Drop-in replacement for the existing V29 vocab.js.
// Existing app fields are preserved: word, type, pos, meaning, hindi, synonyms, antonyms, example.
const vocabData = [
  {
    "word": "Abate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "become less intense or widespread",
    "hindi": "कम होना / घटाना",
    "synonyms": "subside, diminish",
    "antonyms": "intensify, increase",
    "example": "The storm began to abate.",
    "commonMistake": "Do not confuse abate with abet.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abdicate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "give up a position or responsibility",
    "hindi": "पद या जिम्मेदारी छोड़ना",
    "synonyms": "resign, renounce",
    "antonyms": "retain, accept",
    "example": "The king decided to abdicate the throne.",
    "commonMistake": "Abdicate is followed by a responsibility, office, or throne.",
    "difficulty": "Moderate"
  },
  {
    "word": "Aberration",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "a departure from what is normal",
    "hindi": "असामान्यता / विचलन",
    "synonyms": "anomaly, deviation",
    "antonyms": "normality, conformity",
    "example": "The error was an aberration in an otherwise accurate report.",
    "commonMistake": "Aberration is a noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abhor",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "regard with intense hatred or disgust",
    "hindi": "घृणा करना",
    "synonyms": "detest, loathe",
    "antonyms": "admire, love",
    "example": "She abhors corruption.",
    "commonMistake": "Use abhor + noun; not abhorred to.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abjure",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "formally reject or renounce",
    "hindi": "त्याग देना / शपथपूर्वक छोड़ना",
    "synonyms": "renounce, forswear",
    "antonyms": "accept, embrace",
    "example": "He abjured his former position.",
    "commonMistake": "Abjure means formally renounce, not merely avoid.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abnegate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "deny or renounce something",
    "hindi": "त्याग करना",
    "synonyms": "renounce, relinquish",
    "antonyms": "accept, claim",
    "example": "She abnegated personal comfort for the cause.",
    "commonMistake": "Abnegate takes an object.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abrasive",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "harsh or irritating in manner or effect",
    "hindi": "रूखा / घर्षणकारी",
    "synonyms": "caustic, harsh",
    "antonyms": "gentle, soothing",
    "example": "His abrasive tone upset the team.",
    "commonMistake": "Abrasive can describe both a substance and a manner.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abridge",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "shorten without losing the main sense",
    "hindi": "संक्षिप्त करना",
    "synonyms": "shorten, condense",
    "antonyms": "expand, lengthen",
    "example": "The editor abridged the report.",
    "commonMistake": "Abridge means shorten, not destroy.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abrogate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "officially repeal or cancel",
    "hindi": "रद्द करना / समाप्त करना",
    "synonyms": "repeal, annul",
    "antonyms": "enact, establish",
    "example": "The court abrogated the outdated rule.",
    "commonMistake": "Abrogate is generally used for laws, agreements, or rights.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abscond",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "leave secretly to avoid responsibility",
    "hindi": "फरार होना",
    "synonyms": "flee, escape",
    "antonyms": "remain, surrender",
    "example": "The accused absconded before the hearing.",
    "commonMistake": "Abscond is intransitive; usually do not use a direct object.",
    "difficulty": "Moderate"
  },
  {
    "word": "Absolve",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "free someone from blame or guilt",
    "hindi": "दोषमुक्त करना",
    "synonyms": "exonerate, acquit",
    "antonyms": "blame, condemn",
    "example": "The evidence absolved him of wrongdoing.",
    "commonMistake": "Common pattern: absolve someone of/from blame.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abstain",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "refrain from doing or using something",
    "hindi": "परहेज करना",
    "synonyms": "refrain, desist",
    "antonyms": "indulge, participate",
    "example": "He decided to abstain from junk food.",
    "commonMistake": "Use abstain from + noun/gerund.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abundant",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "existing in large quantities",
    "hindi": "प्रचुर / भरपूर",
    "synonyms": "plentiful, copious",
    "antonyms": "scarce, meager",
    "example": "The region has abundant water resources.",
    "commonMistake": "Abundant is normally followed by in when specifying a resource.",
    "difficulty": "Moderate"
  },
  {
    "word": "Accolade",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "an award or expression of praise",
    "hindi": "सम्मान / प्रशंसा",
    "synonyms": "honour, tribute",
    "antonyms": "criticism, censure",
    "example": "The scientist received many accolades.",
    "commonMistake": "Accolade is a noun, not a verb.",
    "difficulty": "Moderate"
  },
  {
    "word": "Acquiesce",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "accept something reluctantly without protest",
    "hindi": "अनिच्छा से मान लेना",
    "synonyms": "comply, consent",
    "antonyms": "resist, oppose",
    "example": "She acquiesced to the new terms.",
    "commonMistake": "Common pattern: acquiesce in/to something.",
    "difficulty": "Moderate"
  },
  {
    "word": "Acumen",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "ability to make good judgments",
    "hindi": "तीक्ष्ण समझ / कुशाग्रता",
    "synonyms": "insight, astuteness",
    "antonyms": "stupidity, ignorance",
    "example": "His financial acumen impressed the board.",
    "commonMistake": "Acumen is uncountable in normal use.",
    "difficulty": "Moderate"
  },
  {
    "word": "Adamant",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "firm and unwilling to change",
    "hindi": "दृढ़ / अडिग",
    "synonyms": "uncompromising, resolute",
    "antonyms": "yielding, flexible",
    "example": "She was adamant about the decision.",
    "commonMistake": "Adamant is usually followed by about or that.",
    "difficulty": "Moderate"
  },
  {
    "word": "Adept",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "highly skilled or proficient",
    "hindi": "निपुण / कुशल",
    "synonyms": "proficient, skilled",
    "antonyms": "inept, incompetent",
    "example": "He is adept at solving puzzles.",
    "commonMistake": "Use adept at + noun/gerund.",
    "difficulty": "Moderate"
  },
  {
    "word": "Admonish",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "warn or reprimand someone firmly",
    "hindi": "फटकारना / चेतावनी देना",
    "synonyms": "rebuke, reprimand",
    "antonyms": "praise, commend",
    "example": "The manager admonished the employee for carelessness.",
    "commonMistake": "Admonish means warn/reprimand, not praise.",
    "difficulty": "Moderate"
  },
  {
    "word": "Adroit",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "clever or skillful in using hands or mind",
    "hindi": "कुशल / चतुर",
    "synonyms": "skillful, dexterous",
    "antonyms": "clumsy, awkward",
    "example": "She gave an adroit response to the question.",
    "commonMistake": "Adroit is an adjective.",
    "difficulty": "Moderate"
  },
  {
    "word": "Adulation",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "excessive praise or admiration",
    "hindi": "चापलूसी / अत्यधिक प्रशंसा",
    "synonyms": "flattery, praise",
    "antonyms": "criticism, condemnation",
    "example": "The leader disliked excessive adulation.",
    "commonMistake": "Adulation is usually excessive, unlike ordinary praise.",
    "difficulty": "Moderate"
  },
  {
    "word": "Adversary",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "an opponent or enemy",
    "hindi": "विरोधी / शत्रु",
    "synonyms": "opponent, rival",
    "antonyms": "ally, friend",
    "example": "The team defeated a strong adversary.",
    "commonMistake": "Adversary refers to an opponent, not necessarily a criminal.",
    "difficulty": "Moderate"
  },
  {
    "word": "Affable",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "friendly and easy to talk to",
    "hindi": "मिलनसार",
    "synonyms": "amiable, genial",
    "antonyms": "aloof, hostile",
    "example": "The affable officer welcomed the candidates.",
    "commonMistake": "Affable describes a person's manner.",
    "difficulty": "Moderate"
  },
  {
    "word": "Affluent",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "having plenty of wealth",
    "hindi": "समृद्ध / धनवान",
    "synonyms": "wealthy, prosperous",
    "antonyms": "poor, impoverished",
    "example": "The affluent district has high property prices.",
    "commonMistake": "Affluent describes people or places with wealth.",
    "difficulty": "Moderate"
  },
  {
    "word": "Alacrity",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "cheerful readiness or eagerness",
    "hindi": "तत्परता / उत्साह",
    "synonyms": "eagerness, promptness",
    "antonyms": "reluctance, hesitation",
    "example": "She accepted the task with alacrity.",
    "commonMistake": "Alacrity is a noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Alleviate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "make suffering or a problem less severe",
    "hindi": "कम करना / राहत देना",
    "synonyms": "relieve, ease",
    "antonyms": "aggravate, intensify",
    "example": "The policy may alleviate rural distress.",
    "commonMistake": "Alleviate reduces severity; it does not necessarily cure.",
    "difficulty": "Moderate"
  },
  {
    "word": "Altruistic",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "showing selfless concern for others",
    "hindi": "परोपकारी",
    "synonyms": "selfless, charitable",
    "antonyms": "selfish, selfish-minded",
    "example": "Her altruistic work helped many families.",
    "commonMistake": "Altruistic is an adjective; altruism is the noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ambiguous",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "open to more than one interpretation",
    "hindi": "अस्पष्ट / द्विअर्थी",
    "synonyms": "unclear, equivocal",
    "antonyms": "explicit, unambiguous",
    "example": "The statement was ambiguous.",
    "commonMistake": "Do not use ambiguous to mean simply difficult.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ameliorate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "make a bad situation better",
    "hindi": "सुधारना",
    "synonyms": "improve, enhance",
    "antonyms": "worsen, aggravate",
    "example": "The reform aims to ameliorate poverty.",
    "commonMistake": "Ameliorate means improve, not eliminate.",
    "difficulty": "Moderate"
  },
  {
    "word": "Anachronism",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "something belonging to a different period",
    "hindi": "काल-विसंगति",
    "synonyms": "misplacement, incongruity",
    "antonyms": "timeliness, modernity",
    "example": "The modern device in the historical film was an anachronism.",
    "commonMistake": "Anachronism is a noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Animosity",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "strong hostility or hatred",
    "hindi": "शत्रुता / वैर",
    "synonyms": "hostility, enmity",
    "antonyms": "friendship, goodwill",
    "example": "Years of rivalry created animosity.",
    "commonMistake": "Animosity is uncountable in normal use.",
    "difficulty": "Moderate"
  },
  {
    "word": "Anomaly",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "something that differs from what is usual",
    "hindi": "असामान्यता",
    "synonyms": "irregularity, aberration",
    "antonyms": "normality, conformity",
    "example": "The sudden result was an anomaly.",
    "commonMistake": "Anomaly is a noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Antipathy",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "a strong feeling of dislike",
    "hindi": "विरक्ति / घृणा",
    "synonyms": "aversion, hostility",
    "antonyms": "affinity, sympathy",
    "example": "He has an antipathy toward dishonest practices.",
    "commonMistake": "Use antipathy toward/to, depending on construction.",
    "difficulty": "Moderate"
  },
  {
    "word": "Apathy",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "lack of interest or enthusiasm",
    "hindi": "उदासीनता",
    "synonyms": "indifference, unconcern",
    "antonyms": "interest, enthusiasm",
    "example": "Public apathy can weaken reform efforts.",
    "commonMistake": "Apathy is lack of interest, not hatred.",
    "difficulty": "Moderate"
  },
  {
    "word": "Appease",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "calm or satisfy by giving in to demands",
    "hindi": "शांत करना / संतुष्ट करना",
    "synonyms": "pacify, placate",
    "antonyms": "provoke, irritate",
    "example": "The government tried to appease the protesters.",
    "commonMistake": "Appease often implies giving something to stop anger.",
    "difficulty": "Moderate"
  },
  {
    "word": "Apprehensive",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "anxious about a future event",
    "hindi": "आशंकित",
    "synonyms": "anxious, uneasy",
    "antonyms": "confident, assured",
    "example": "She was apprehensive about the interview.",
    "commonMistake": "Apprehensive about is the common pattern.",
    "difficulty": "Moderate"
  },
  {
    "word": "Arbitrary",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "based on random choice rather than reason",
    "hindi": "मनमाना",
    "synonyms": "random, capricious",
    "antonyms": "reasoned, systematic",
    "example": "The rule seemed arbitrary.",
    "commonMistake": "Arbitrary does not mean merely strict.",
    "difficulty": "Moderate"
  },
  {
    "word": "Arduous",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "requiring great effort",
    "hindi": "कठिन / श्रमसाध्य",
    "synonyms": "strenuous, laborious",
    "antonyms": "easy, effortless",
    "example": "Preparing for the exam is an arduous task.",
    "commonMistake": "Arduous describes a task or process.",
    "difficulty": "Moderate"
  },
  {
    "word": "Articulate",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "able to express ideas clearly",
    "hindi": "स्पष्टवक्ता",
    "synonyms": "eloquent, expressive",
    "antonyms": "inarticulate, unclear",
    "example": "She is articulate and confident.",
    "commonMistake": "As a verb, articulate means express clearly.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ascertain",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "find out something with certainty",
    "hindi": "पता लगाना / सुनिश्चित करना",
    "synonyms": "determine, establish",
    "antonyms": "guess, overlook",
    "example": "The officer tried to ascertain the facts.",
    "commonMistake": "Ascertain is followed by what/why/how clauses or a noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Assiduous",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "showing great care and persistent effort",
    "hindi": "परिश्रमी",
    "synonyms": "diligent, industrious",
    "antonyms": "lazy, negligent",
    "example": "His assiduous preparation paid off.",
    "commonMistake": "Assiduous describes effort or a person.",
    "difficulty": "Moderate"
  },
  {
    "word": "Audacious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "bold and willing to take risks",
    "hindi": "साहसी / दुस्साहसी",
    "synonyms": "bold, daring",
    "antonyms": "timid, cautious",
    "example": "It was an audacious decision.",
    "commonMistake": "Audacious can be positive or imply excessive boldness.",
    "difficulty": "Moderate"
  },
  {
    "word": "Avarice",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "extreme greed for wealth",
    "hindi": "लोभ",
    "synonyms": "greed, cupidity",
    "antonyms": "generosity, charity",
    "example": "Avarice can destroy trust.",
    "commonMistake": "Avarice is a noun; avaricious is the adjective.",
    "difficulty": "Moderate"
  },
  {
    "word": "Avert",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "prevent something bad from happening",
    "hindi": "टालना / रोकना",
    "synonyms": "prevent, forestall",
    "antonyms": "cause, invite",
    "example": "Quick action averted a crisis.",
    "commonMistake": "Avert means prevent; avert one's eyes means turn them away.",
    "difficulty": "Moderate"
  },
  {
    "word": "Banal",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "boring because it is overused or unoriginal",
    "hindi": "घिसा-पिटा / साधारण",
    "synonyms": "trite, hackneyed",
    "antonyms": "original, novel",
    "example": "The article repeated banal arguments.",
    "commonMistake": "Banal usually carries a negative sense.",
    "difficulty": "Moderate"
  },
  {
    "word": "Belligerent",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "hostile and aggressive",
    "hindi": "आक्रामक / युद्धप्रिय",
    "synonyms": "aggressive, combative",
    "antonyms": "peaceful, conciliatory",
    "example": "His belligerent tone worsened the dispute.",
    "commonMistake": "Belligerent can describe people, states, or attitudes.",
    "difficulty": "Moderate"
  },
  {
    "word": "Benevolent",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "kind and generous",
    "hindi": "दयालु / परोपकारी",
    "synonyms": "charitable, kindhearted",
    "antonyms": "malevolent, cruel",
    "example": "The benevolent donor funded the school.",
    "commonMistake": "Benevolent means well-intentioned and kind.",
    "difficulty": "Moderate"
  },
  {
    "word": "Bolster",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "support or strengthen",
    "hindi": "मजबूत करना",
    "synonyms": "support, reinforce",
    "antonyms": "weaken, undermine",
    "example": "The evidence bolstered her argument.",
    "commonMistake": "Bolster can be used as a verb or noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Brevity",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "shortness in duration or expression",
    "hindi": "संक्षिप्तता",
    "synonyms": "conciseness, terseness",
    "antonyms": "verbosity, lengthiness",
    "example": "Brevity is valuable in a formal answer.",
    "commonMistake": "Brevity is a noun; brief is the adjective.",
    "difficulty": "Moderate"
  },
  {
    "word": "Cajole",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "persuade by flattering or coaxing",
    "hindi": "मनाना / फुसलाना",
    "synonyms": "coax, wheedle",
    "antonyms": "dissuade, deter",
    "example": "He cajoled his friend into joining the study group.",
    "commonMistake": "Cajole someone into doing something is common.",
    "difficulty": "Moderate"
  },
  {
    "word": "Candor",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "honest and direct expression",
    "hindi": "स्पष्टवादिता",
    "synonyms": "frankness, honesty",
    "antonyms": "deceit, concealment",
    "example": "Her candor was appreciated.",
    "commonMistake": "Candor is usually uncountable.",
    "difficulty": "Moderate"
  },
  {
    "word": "Capitulate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "surrender or stop resisting",
    "hindi": "आत्मसमर्पण करना",
    "synonyms": "surrender, yield",
    "antonyms": "resist, defy",
    "example": "The rebels finally capitulated.",
    "commonMistake": "Capitulate often takes to rather than a direct object.",
    "difficulty": "Moderate"
  },
  {
    "word": "Capricious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "liable to sudden unpredictable changes",
    "hindi": "सनकी / चंचल",
    "synonyms": "fickle, unpredictable",
    "antonyms": "stable, consistent",
    "example": "The weather is capricious in spring.",
    "commonMistake": "Capricious describes unpredictable behavior.",
    "difficulty": "Moderate"
  },
  {
    "word": "Castigate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "criticize or punish severely",
    "hindi": "कड़ी फटकार लगाना",
    "synonyms": "rebuke, chastise",
    "antonyms": "praise, commend",
    "example": "The report castigated the officials for negligence.",
    "commonMistake": "Castigate is stronger than simply criticize.",
    "difficulty": "Moderate"
  },
  {
    "word": "Censure",
    "type": "Vocab",
    "pos": "Noun/Verb",
    "meaning": "strong official criticism",
    "hindi": "निंदा / फटकार",
    "synonyms": "condemn, rebuke",
    "antonyms": "praise, commend",
    "example": "The committee censured the official.",
    "commonMistake": "Censure can be both noun and verb.",
    "difficulty": "Moderate"
  },
  {
    "word": "Chastise",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "scold or punish severely",
    "hindi": "फटकारना",
    "synonyms": "rebuke, reprimand",
    "antonyms": "praise, reward",
    "example": "The coach chastised the team for poor discipline.",
    "commonMistake": "Chastise is a verb.",
    "difficulty": "Moderate"
  },
  {
    "word": "Coherent",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "logical and consistent",
    "hindi": "सुसंगत",
    "synonyms": "logical, consistent",
    "antonyms": "incoherent, confused",
    "example": "Her explanation was coherent.",
    "commonMistake": "Coherent means logically connected, not merely clear-looking.",
    "difficulty": "Moderate"
  },
  {
    "word": "Cogent",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "clear, logical, and convincing",
    "hindi": "प्रभावशाली / तर्कसंगत",
    "synonyms": "convincing, compelling",
    "antonyms": "weak, unconvincing",
    "example": "He gave a cogent argument.",
    "commonMistake": "Cogent usually describes an argument, reason, or case.",
    "difficulty": "Moderate"
  },
  {
    "word": "Complacency",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "self-satisfaction that prevents improvement",
    "hindi": "आत्मसंतुष्टि",
    "synonyms": "self-satisfaction, smugness",
    "antonyms": "dissatisfaction, vigilance",
    "example": "Complacency can be dangerous before an exam.",
    "commonMistake": "Complacency is not the same as confidence.",
    "difficulty": "Moderate"
  },
  {
    "word": "Concede",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "admit something is true or give something up",
    "hindi": "मान लेना / छोड़ देना",
    "synonyms": "admit, yield",
    "antonyms": "deny, resist",
    "example": "The company conceded that the error was serious.",
    "commonMistake": "Concede can mean admit or surrender a point.",
    "difficulty": "Moderate"
  },
  {
    "word": "Concur",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "agree or have the same opinion",
    "hindi": "सहमत होना",
    "synonyms": "agree, assent",
    "antonyms": "disagree, dissent",
    "example": "The judges concurred with the decision.",
    "commonMistake": "Concur with someone/on a matter are common patterns.",
    "difficulty": "Moderate"
  },
  {
    "word": "Conundrum",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "a difficult and confusing problem",
    "hindi": "जटिल समस्या",
    "synonyms": "puzzle, dilemma",
    "antonyms": "solution, certainty",
    "example": "The budget remains a conundrum.",
    "commonMistake": "Conundrum is a noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Conspicuous",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "easily noticed",
    "hindi": "स्पष्ट / ध्यान देने योग्य",
    "synonyms": "noticeable, prominent",
    "antonyms": "inconspicuous, hidden",
    "example": "The error was conspicuous.",
    "commonMistake": "Conspicuous means noticeable, not necessarily important.",
    "difficulty": "Moderate"
  },
  {
    "word": "Contrite",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "feeling sorry and remorseful",
    "hindi": "पश्चातापी",
    "synonyms": "remorseful, repentant",
    "antonyms": "unrepentant, defiant",
    "example": "He was contrite after the mistake.",
    "commonMistake": "Contrite refers to genuine remorse.",
    "difficulty": "Moderate"
  },
  {
    "word": "Copious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "abundant in quantity",
    "hindi": "प्रचुर",
    "synonyms": "abundant, plentiful",
    "antonyms": "scarce, sparse",
    "example": "She took copious notes.",
    "commonMistake": "Copious is generally used with plural or uncountable nouns.",
    "difficulty": "Moderate"
  },
  {
    "word": "Cursory",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "quick and not thorough",
    "hindi": "सरसरी / सतही",
    "synonyms": "superficial, hasty",
    "antonyms": "thorough, careful",
    "example": "He gave the document a cursory glance.",
    "commonMistake": "Cursory often implies lack of care.",
    "difficulty": "Moderate"
  },
  {
    "word": "Debilitate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "make weak or less effective",
    "hindi": "कमजोर करना",
    "synonyms": "weaken, enervate",
    "antonyms": "strengthen, invigorate",
    "example": "The illness debilitated him.",
    "commonMistake": "Debilitate means weaken, not destroy.",
    "difficulty": "Moderate"
  },
  {
    "word": "Decorum",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "proper and polite behavior",
    "hindi": "शिष्टाचार",
    "synonyms": "propriety, etiquette",
    "antonyms": "indecency, impropriety",
    "example": "The meeting was conducted with decorum.",
    "commonMistake": "Decorum is a noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Deference",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "respectful submission to another's wishes",
    "hindi": "सम्मान / अधीन सम्मान",
    "synonyms": "respect, submission",
    "antonyms": "defiance, disrespect",
    "example": "He showed deference to the senior officer.",
    "commonMistake": "Deference is followed by to.",
    "difficulty": "Moderate"
  },
  {
    "word": "Deliberate",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "done intentionally and carefully",
    "hindi": "जानबूझकर / विचारपूर्वक",
    "synonyms": "intentional, calculated",
    "antonyms": "accidental, impulsive",
    "example": "It was a deliberate decision.",
    "commonMistake": "As a verb, deliberate means think carefully; as an adjective, it can mean intentional.",
    "difficulty": "Moderate"
  },
  {
    "word": "Deride",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "mock or ridicule",
    "hindi": "उपहास करना",
    "synonyms": "ridicule, mock",
    "antonyms": "praise, respect",
    "example": "They derided the proposal.",
    "commonMistake": "Deride takes a person/thing as object.",
    "difficulty": "Moderate"
  },
  {
    "word": "Despondent",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "without hope or confidence",
    "hindi": "निराश",
    "synonyms": "dejected, gloomy",
    "antonyms": "hopeful, cheerful",
    "example": "He felt despondent after the result.",
    "commonMistake": "Despondent describes a person or mood.",
    "difficulty": "Moderate"
  },
  {
    "word": "Diligent",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "hardworking and careful",
    "hindi": "मेहनती / परिश्रमी",
    "synonyms": "industrious, assiduous",
    "antonyms": "lazy, negligent",
    "example": "Diligent students revise regularly.",
    "commonMistake": "Diligent is an adjective; diligence is the noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Discrepancy",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "a difference or inconsistency",
    "hindi": "असंगति / अंतर",
    "synonyms": "difference, inconsistency",
    "antonyms": "agreement, correspondence",
    "example": "The auditor found a discrepancy in the accounts.",
    "commonMistake": "Discrepancy is a noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Disdain",
    "type": "Vocab",
    "pos": "Noun/Verb",
    "meaning": "a feeling that something is unworthy of respect",
    "hindi": "तिरस्कार",
    "synonyms": "contempt, scorn",
    "antonyms": "respect, admiration",
    "example": "She looked at the rumor with disdain.",
    "commonMistake": "Disdain can be a noun or verb.",
    "difficulty": "Moderate"
  },
  {
    "word": "Dubious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "not certain or reliable",
    "hindi": "संदिग्ध",
    "synonyms": "doubtful, questionable",
    "antonyms": "certain, credible",
    "example": "The claim is dubious.",
    "commonMistake": "Dubious means doubtful, not simply difficult.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ebullient",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "cheerful and full of enthusiasm",
    "hindi": "उत्साही",
    "synonyms": "exuberant, enthusiastic",
    "antonyms": "gloomy, subdued",
    "example": "The ebullient candidate energized the group.",
    "commonMistake": "Ebullient is an adjective.",
    "difficulty": "Moderate"
  },
  {
    "word": "Eccentric",
    "type": "Vocab",
    "pos": "Adjective/Noun",
    "meaning": "unconventional or odd",
    "hindi": "सनकी / विचित्र",
    "synonyms": "unconventional, peculiar",
    "antonyms": "conventional, ordinary",
    "example": "His eccentric habits amused everyone.",
    "commonMistake": "Eccentric can be a noun for an unusual person.",
    "difficulty": "Moderate"
  },
  {
    "word": "Elucidate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "make something clear by explaining it",
    "hindi": "स्पष्ट करना",
    "synonyms": "clarify, explain",
    "antonyms": "confuse, obscure",
    "example": "The teacher elucidated the rule.",
    "commonMistake": "Elucidate means clarify, not simplify every detail.",
    "difficulty": "Moderate"
  },
  {
    "word": "Emulate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "imitate someone in order to match or surpass",
    "hindi": "अनुकरण करना",
    "synonyms": "imitate, emulate",
    "antonyms": "ignore, neglect",
    "example": "Young players try to emulate the champion.",
    "commonMistake": "Emulate is not the same as mock.",
    "difficulty": "Moderate"
  },
  {
    "word": "Enervate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "drain energy or vitality",
    "hindi": "कमजोर करना",
    "synonyms": "exhaust, weaken",
    "antonyms": "energize, invigorate",
    "example": "Long hours can enervate the mind.",
    "commonMistake": "Enervate means weaken, despite its similarity to energize.",
    "difficulty": "Moderate"
  },
  {
    "word": "Enigma",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "a person or thing that is mysterious",
    "hindi": "पहेली / रहस्य",
    "synonyms": "mystery, puzzle",
    "antonyms": "clarity, explanation",
    "example": "The source of the rumor remains an enigma.",
    "commonMistake": "Enigma is a noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Eloquent",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "fluent or persuasive in speaking or writing",
    "hindi": "वाक्पटु",
    "synonyms": "articulate, expressive",
    "antonyms": "inarticulate, hesitant",
    "example": "She gave an eloquent speech.",
    "commonMistake": "Eloquent describes effective expression, not merely fluency.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ephemeral",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "lasting for a very short time",
    "hindi": "क्षणिक",
    "synonyms": "short-lived, transient",
    "antonyms": "permanent, enduring",
    "example": "Online trends can be ephemeral.",
    "commonMistake": "Ephemeral is an adjective.",
    "difficulty": "Moderate"
  },
  {
    "word": "Erudite",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "highly educated and knowledgeable",
    "hindi": "विद्वान",
    "synonyms": "learned, scholarly",
    "antonyms": "ignorant, uneducated",
    "example": "The erudite professor answered every question.",
    "commonMistake": "Erudite describes a person or writing.",
    "difficulty": "Moderate"
  },
  {
    "word": "Euphemism",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "a mild expression replacing a harsh one",
    "hindi": "शिष्टोक्ति",
    "synonyms": "mild expression, circumlocution",
    "antonyms": "directness, bluntness",
    "example": "Passed away is a euphemism for died.",
    "commonMistake": "Euphemism is a noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Exacerbate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "make a problem or situation worse",
    "hindi": "बिगाड़ना / बढ़ाना",
    "synonyms": "aggravate, worsen",
    "antonyms": "alleviate, mitigate",
    "example": "The delay exacerbated the problem.",
    "commonMistake": "Exacerbate means worsen, not improve.",
    "difficulty": "Moderate"
  },
  {
    "word": "Expedite",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "make a process happen faster",
    "hindi": "शीघ्र करना",
    "synonyms": "hasten, accelerate",
    "antonyms": "delay, obstruct",
    "example": "The bank expedited the application.",
    "commonMistake": "Expedite means speed up.",
    "difficulty": "Moderate"
  },
  {
    "word": "Fervent",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "showing intense enthusiasm or feeling",
    "hindi": "उत्कट / जोशीला",
    "synonyms": "passionate, ardent",
    "antonyms": "apathetic, indifferent",
    "example": "She is a fervent supporter of education.",
    "commonMistake": "Fervent is an adjective.",
    "difficulty": "Moderate"
  },
  {
    "word": "Flagrant",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "obviously offensive or wrong",
    "hindi": "घोर / स्पष्ट रूप से गलत",
    "synonyms": "glaring, blatant",
    "antonyms": "hidden, acceptable",
    "example": "The report exposed a flagrant violation.",
    "commonMistake": "Flagrant is usually negative.",
    "difficulty": "Moderate"
  },
  {
    "word": "Frugal",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "careful about spending money",
    "hindi": "मितव्ययी",
    "synonyms": "thrifty, economical",
    "antonyms": "extravagant, wasteful",
    "example": "A frugal budget can increase savings.",
    "commonMistake": "Frugal does not mean poor.",
    "difficulty": "Moderate"
  },
  {
    "word": "Garrulous",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "excessively talkative",
    "hindi": "बातूनी",
    "synonyms": "talkative, loquacious",
    "antonyms": "taciturn, reserved",
    "example": "The garrulous passenger kept talking.",
    "commonMistake": "Garrulous usually has a mildly negative sense.",
    "difficulty": "Moderate"
  },
  {
    "word": "Guile",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "cunning or deceitful cleverness",
    "hindi": "कपट / छल",
    "synonyms": "cunning, deceit",
    "antonyms": "honesty, sincerity",
    "example": "The fraudster used guile to deceive investors.",
    "commonMistake": "Guile is a noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Harangue",
    "type": "Vocab",
    "pos": "Noun/Verb",
    "meaning": "a lengthy aggressive speech or lecture",
    "hindi": "लंबा आक्रामक भाषण",
    "synonyms": "tirade, rant",
    "antonyms": "praise, compliment",
    "example": "The official delivered a harangue against corruption.",
    "commonMistake": "Harangue can be noun or verb.",
    "difficulty": "Moderate"
  },
  {
    "word": "Hubris",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "excessive pride or self-confidence",
    "hindi": "अहंकार",
    "synonyms": "arrogance, conceit",
    "antonyms": "humility, modesty",
    "example": "His hubris led to poor decisions.",
    "commonMistake": "Hubris is usually uncountable.",
    "difficulty": "Moderate"
  },
  {
    "word": "Immutable",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "unchangeable",
    "hindi": "अपरिवर्तनीय",
    "synonyms": "fixed, unalterable",
    "antonyms": "changeable, mutable",
    "example": "The rule is not immutable.",
    "commonMistake": "Immutable is the opposite of mutable.",
    "difficulty": "Moderate"
  },
  {
    "word": "Impetuous",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "acting quickly without thought",
    "hindi": "आवेगी / उतावला",
    "synonyms": "rash, impulsive",
    "antonyms": "cautious, deliberate",
    "example": "His impetuous decision caused problems.",
    "commonMistake": "Impetuous is often negative.",
    "difficulty": "Moderate"
  },
  {
    "word": "Indigent",
    "type": "Vocab",
    "pos": "Adjective/Noun",
    "meaning": "poor and lacking basic resources",
    "hindi": "गरीब / निर्धन",
    "synonyms": "destitute, needy",
    "antonyms": "affluent, wealthy",
    "example": "The scheme supports indigent families.",
    "commonMistake": "Indigent is formal; indigence is the noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Indolent",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "habitually lazy",
    "hindi": "आलसी",
    "synonyms": "lazy, idle",
    "antonyms": "diligent, industrious",
    "example": "The indolent worker avoided difficult tasks.",
    "commonMistake": "Indolent means lazy, not independent.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ingenious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "clever, original, and inventive",
    "hindi": "चतुर / आविष्कारशील",
    "synonyms": "inventive, creative",
    "antonyms": "unimaginative, dull",
    "example": "She found an ingenious solution.",
    "commonMistake": "Ingenious means inventive; ingenuous means innocent or sincere.",
    "difficulty": "Moderate"
  },
  {
    "word": "Incessant",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "continuing without interruption",
    "hindi": "लगातार",
    "synonyms": "constant, continuous",
    "antonyms": "intermittent, occasional",
    "example": "The incessant noise was distracting.",
    "commonMistake": "Incessant means without stopping, not merely frequent.",
    "difficulty": "Moderate"
  },
  {
    "word": "Incisive",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "clear, sharp, and direct",
    "hindi": "तीक्ष्ण / सटीक",
    "synonyms": "penetrating, sharp",
    "antonyms": "vague, dull",
    "example": "Her incisive analysis exposed the flaw.",
    "commonMistake": "Incisive is often used for analysis, comments, or questions.",
    "difficulty": "Moderate"
  },
  {
    "word": "Inundate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "flood or overwhelm with a large amount",
    "hindi": "बाढ़ में डुबोना / भर देना",
    "synonyms": "flood, overwhelm",
    "antonyms": "drain, relieve",
    "example": "The office was inundated with applications.",
    "commonMistake": "Inundate can be literal or figurative.",
    "difficulty": "Moderate"
  },
  {
    "word": "Irascible",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "easily angered",
    "hindi": "क्रोधी",
    "synonyms": "irritable, hot-tempered",
    "antonyms": "calm, placid",
    "example": "The irascible manager often lost patience.",
    "commonMistake": "Irascible describes temperament.",
    "difficulty": "Moderate"
  },
  {
    "word": "Judicious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "having good judgment",
    "hindi": "विवेकपूर्ण",
    "synonyms": "wise, prudent",
    "antonyms": "foolish, reckless",
    "example": "A judicious choice can save time.",
    "commonMistake": "Judicious means sensible, not judicial.",
    "difficulty": "Moderate"
  },
  {
    "word": "Lucid",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "clear and easy to understand",
    "hindi": "स्पष्ट / सुबोध",
    "synonyms": "clear, intelligible",
    "antonyms": "confusing, obscure",
    "example": "The explanation was lucid.",
    "commonMistake": "Lucid can also mean mentally clear.",
    "difficulty": "Moderate"
  },
  {
    "word": "Magnanimous",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "generous and forgiving toward a rival",
    "hindi": "उदार / क्षमाशील",
    "synonyms": "generous, charitable",
    "antonyms": "petty, vindictive",
    "example": "The winner was magnanimous toward the loser.",
    "commonMistake": "Magnanimous often implies generosity toward an opponent.",
    "difficulty": "Moderate"
  },
  {
    "word": "Malevolent",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "having or showing a wish to do harm",
    "hindi": "दुर्भावनापूर्ण",
    "synonyms": "malicious, spiteful",
    "antonyms": "benevolent, kind",
    "example": "The villain had a malevolent intention.",
    "commonMistake": "Malevolent is opposite of benevolent.",
    "difficulty": "Moderate"
  },
  {
    "word": "Malleable",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "easily shaped or influenced",
    "hindi": "लचीला",
    "synonyms": "flexible, pliable",
    "antonyms": "rigid, inflexible",
    "example": "Young minds can be malleable.",
    "commonMistake": "Malleable can be physical or figurative.",
    "difficulty": "Moderate"
  },
  {
    "word": "Mitigate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "make something less severe",
    "hindi": "कम करना / शांत करना",
    "synonyms": "alleviate, lessen",
    "antonyms": "aggravate, intensify",
    "example": "The measure may mitigate the impact.",
    "commonMistake": "Mitigate reduces severity; it does not always remove the cause.",
    "difficulty": "Moderate"
  },
  {
    "word": "Nefarious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "wicked or criminal",
    "hindi": "दुष्ट / घोर अपराधी",
    "synonyms": "wicked, villainous",
    "antonyms": "virtuous, honorable",
    "example": "The gang was involved in nefarious activities.",
    "commonMistake": "Nefarious is strongly negative.",
    "difficulty": "Moderate"
  },
  {
    "word": "Obfuscate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "make something unclear or confusing",
    "hindi": "भ्रमित करना / अस्पष्ट करना",
    "synonyms": "confuse, obscure",
    "antonyms": "clarify, elucidate",
    "example": "The statement seemed designed to obfuscate the issue.",
    "commonMistake": "Obfuscate means make unclear, often deliberately.",
    "difficulty": "Moderate"
  },
  {
    "word": "Obsequious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "excessively eager to please someone powerful",
    "hindi": "चापलूस",
    "synonyms": "servile, sycophantic",
    "antonyms": "independent, assertive",
    "example": "The obsequious assistant agreed with everything.",
    "commonMistake": "Obsequious is usually negative.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ostentatious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "showy in a way intended to attract attention",
    "hindi": "दिखावटी",
    "synonyms": "showy, pretentious",
    "antonyms": "modest, understated",
    "example": "He disliked ostentatious displays of wealth.",
    "commonMistake": "Ostentatious usually carries a negative sense.",
    "difficulty": "Moderate"
  },
  {
    "word": "Palliate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "reduce the severity of a problem without curing it",
    "hindi": "शमन करना",
    "synonyms": "ease, alleviate",
    "antonyms": "aggravate, intensify",
    "example": "The treatment palliated the symptoms.",
    "commonMistake": "Palliate does not mean cure completely.",
    "difficulty": "Moderate"
  },
  {
    "word": "Paragon",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "a person or thing regarded as a model of excellence",
    "hindi": "आदर्श उदाहरण",
    "synonyms": "model, exemplar",
    "antonyms": "failure, inferior example",
    "example": "She is a paragon of discipline.",
    "commonMistake": "Paragon is followed by of.",
    "difficulty": "Moderate"
  },
  {
    "word": "Parsimonious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "unwilling to spend or use money or resources",
    "hindi": "कंजूस / मितव्ययी",
    "synonyms": "stingy, miserly",
    "antonyms": "generous, lavish",
    "example": "His parsimonious approach annoyed the team.",
    "commonMistake": "Parsimonious is usually negative.",
    "difficulty": "Moderate"
  },
  {
    "word": "Penchant",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "a strong liking or tendency",
    "hindi": "विशेष रुचि",
    "synonyms": "liking, inclination",
    "antonyms": "aversion, dislike",
    "example": "She has a penchant for puzzles.",
    "commonMistake": "Use penchant for + noun/gerund.",
    "difficulty": "Moderate"
  },
  {
    "word": "Perfunctory",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "done with little care or interest",
    "hindi": "औपचारिक / लापरवाह",
    "synonyms": "cursory, superficial",
    "antonyms": "thorough, careful",
    "example": "He gave a perfunctory apology.",
    "commonMistake": "Perfunctory implies lack of genuine effort.",
    "difficulty": "Moderate"
  },
  {
    "word": "Perspicacious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "having a sharp understanding",
    "hindi": "सूक्ष्मदर्शी / बुद्धिमान",
    "synonyms": "perceptive, insightful",
    "antonyms": "obtuse, ignorant",
    "example": "Her perspicacious comments improved the plan.",
    "commonMistake": "Perspicacious means perceptive, not merely intelligent.",
    "difficulty": "Moderate"
  },
  {
    "word": "Pervasive",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "present or spreading widely",
    "hindi": "व्यापक",
    "synonyms": "widespread, prevalent",
    "antonyms": "limited, rare",
    "example": "Digital payments are pervasive in urban areas.",
    "commonMistake": "Pervasive means widespread, not invasive.",
    "difficulty": "Moderate"
  },
  {
    "word": "Petulant",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "childishly irritable",
    "hindi": "चिड़चिड़ा",
    "synonyms": "irritable, peevish",
    "antonyms": "patient, composed",
    "example": "His petulant reply surprised everyone.",
    "commonMistake": "Petulant usually describes behavior or tone.",
    "difficulty": "Moderate"
  },
  {
    "word": "Phlegmatic",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "calm and unemotional",
    "hindi": "शांत / निर्विकार",
    "synonyms": "calm, composed",
    "antonyms": "excitable, emotional",
    "example": "His phlegmatic nature helped during the crisis.",
    "commonMistake": "Phlegmatic is pronounced with an initial silent ph.",
    "difficulty": "Moderate"
  },
  {
    "word": "Precarious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "not securely held; risky or uncertain",
    "hindi": "अस्थिर / जोखिमपूर्ण",
    "synonyms": "unstable, risky",
    "antonyms": "secure, stable",
    "example": "The company was in a precarious position.",
    "commonMistake": "Precarious means dangerously uncertain.",
    "difficulty": "Moderate"
  },
  {
    "word": "Proclivity",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "a natural tendency or liking",
    "hindi": "प्रवृत्ति",
    "synonyms": "inclination, tendency",
    "antonyms": "aversion, disinclination",
    "example": "He has a proclivity for overthinking.",
    "commonMistake": "Use proclivity for/toward + noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Prosaic",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "ordinary or lacking imagination",
    "hindi": "नीरस / साधारण",
    "synonyms": "mundane, dull",
    "antonyms": "imaginative, poetic",
    "example": "The article was informative but prosaic.",
    "commonMistake": "Prosaic can mean dull or commonplace.",
    "difficulty": "Moderate"
  },
  {
    "word": "Pugnacious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "eager or ready to fight",
    "hindi": "झगड़ालू / लड़ाकू",
    "synonyms": "combative, aggressive",
    "antonyms": "peaceful, placid",
    "example": "The pugnacious player argued with the referee.",
    "commonMistake": "Pugnacious is usually negative.",
    "difficulty": "Moderate"
  },
  {
    "word": "Quixotic",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "idealistic but unrealistic",
    "hindi": "अव्यावहारिक आदर्शवादी",
    "synonyms": "idealistic, impractical",
    "antonyms": "pragmatic, realistic",
    "example": "His quixotic plan ignored the budget.",
    "commonMistake": "Quixotic comes from Don Quixote.",
    "difficulty": "Moderate"
  },
  {
    "word": "Recalcitrant",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "stubbornly resistant to authority or control",
    "hindi": "हठी / अवज्ञाकारी",
    "synonyms": "defiant, obstinate",
    "antonyms": "obedient, compliant",
    "example": "The recalcitrant employee ignored repeated warnings.",
    "commonMistake": "Recalcitrant usually implies resistance to authority.",
    "difficulty": "Moderate"
  },
  {
    "word": "Sagacious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "wise and showing good judgment",
    "hindi": "बुद्धिमान / विवेकी",
    "synonyms": "wise, astute",
    "antonyms": "foolish, imprudent",
    "example": "The sagacious leader avoided a costly mistake.",
    "commonMistake": "Sagacious is an adjective.",
    "difficulty": "Moderate"
  },
  {
    "word": "Scrupulous",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "very careful and honest",
    "hindi": "सावधान / ईमानदार",
    "synonyms": "meticulous, conscientious",
    "antonyms": "careless, unscrupulous",
    "example": "She is scrupulous about checking figures.",
    "commonMistake": "Scrupulous can mean careful or morally principled.",
    "difficulty": "Moderate"
  },
  {
    "word": "Spurious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "false or not genuine",
    "hindi": "नकली / झूठा",
    "synonyms": "fake, bogus",
    "antonyms": "genuine, authentic",
    "example": "The claim was based on spurious evidence.",
    "commonMistake": "Spurious means false, not merely unusual.",
    "difficulty": "Moderate"
  },
  {
    "word": "Tenacious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "persistent and unwilling to give up",
    "hindi": "दृढ़ / जुझारू",
    "synonyms": "persistent, determined",
    "antonyms": "yielding, irresolute",
    "example": "Her tenacious effort produced results.",
    "commonMistake": "Tenacious can also mean physically adhesive.",
    "difficulty": "Moderate"
  },
  {
    "word": "Vindicate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "clear someone from blame or prove right",
    "hindi": "दोषमुक्त करना / सही सिद्ध करना",
    "synonyms": "exonerate, justify",
    "antonyms": "blame, condemn",
    "example": "The evidence vindicated the accused.",
    "commonMistake": "Vindicate means clear from blame or justify, not punish.",
    "difficulty": "Moderate"
  },
  {
    "word": "Austere",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "simple, strict, or severe in appearance or manner",
    "hindi": "सादा / कठोर",
    "synonyms": "severe, stern",
    "antonyms": "luxurious, indulgent",
    "example": "The office had an austere design.",
    "commonMistake": "Austere can describe style, discipline, or conditions.",
    "difficulty": "Moderate"
  },
  {
    "word": "Benevolence",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "disposition to do good",
    "hindi": "परोपकारिता",
    "synonyms": "kindness, charity",
    "antonyms": "malevolence, cruelty",
    "example": "Her benevolence benefited the village.",
    "commonMistake": "Benevolence is the noun of benevolent.",
    "difficulty": "Moderate"
  },
  {
    "word": "Callous",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "showing no concern for others' feelings",
    "hindi": "निर्दयी",
    "synonyms": "insensitive, hard-hearted",
    "antonyms": "compassionate, sensitive",
    "example": "His callous remark hurt her.",
    "commonMistake": "Callous can also mean physically hardened skin.",
    "difficulty": "Moderate"
  },
  {
    "word": "Conflagration",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "a large destructive fire",
    "hindi": "भीषण आग",
    "synonyms": "inferno, blaze",
    "antonyms": "extinguishment, calm",
    "example": "The conflagration destroyed several buildings.",
    "commonMistake": "Conflagration is a noun.",
    "difficulty": "Moderate"
  },
  {
    "word": "Deleterious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "causing harm or damage",
    "hindi": "हानिकारक",
    "synonyms": "harmful, detrimental",
    "antonyms": "beneficial, helpful",
    "example": "Smoking has deleterious effects on health.",
    "commonMistake": "Deleterious is followed by to.",
    "difficulty": "Moderate"
  },
  {
    "word": "Deter",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "discourage someone from doing something",
    "hindi": "रोकना / हतोत्साहित करना",
    "synonyms": "discourage, dissuade",
    "antonyms": "encourage, persuade",
    "example": "High costs may deter buyers.",
    "commonMistake": "Use deter someone from doing something.",
    "difficulty": "Moderate"
  },
  {
    "word": "Disseminate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "spread information widely",
    "hindi": "प्रसारित करना",
    "synonyms": "circulate, spread",
    "antonyms": "collect, suppress",
    "example": "The agency disseminated the guidelines.",
    "commonMistake": "Disseminate is commonly used with information/news.",
    "difficulty": "Moderate"
  },
  {
    "word": "Embolden",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "give someone confidence or courage",
    "hindi": "साहस बढ़ाना",
    "synonyms": "encourage, hearten",
    "antonyms": "discourage, intimidate",
    "example": "The victory emboldened the team.",
    "commonMistake": "Embolden is a verb.",
    "difficulty": "Moderate"
  },
  {
    "word": "Exonerate",
    "type": "Vocab",
    "pos": "Verb",
    "meaning": "officially clear from blame",
    "hindi": "दोषमुक्त करना",
    "synonyms": "acquit, absolve",
    "antonyms": "convict, incriminate",
    "example": "The inquiry exonerated the officer.",
    "commonMistake": "Exonerate is stronger and more formal than excuse.",
    "difficulty": "Moderate"
  },
  {
    "word": "Fastidious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "very attentive to detail and difficult to satisfy",
    "hindi": "अति सावधान / नकचढ़ा",
    "synonyms": "meticulous, fussy",
    "antonyms": "careless, uncritical",
    "example": "She is fastidious about accuracy.",
    "commonMistake": "Fastidious can mean meticulous or hard to please.",
    "difficulty": "Moderate"
  },
  {
    "word": "Furtive",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "secretive and intended to avoid notice",
    "hindi": "छिपा हुआ / गुप्त",
    "synonyms": "secretive, stealthy",
    "antonyms": "open, overt",
    "example": "He made a furtive glance at the clock.",
    "commonMistake": "Furtive implies an attempt to avoid attention.",
    "difficulty": "Moderate"
  },
  {
    "word": "Imminent",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "about to happen",
    "hindi": "आसन्न",
    "synonyms": "impending, approaching",
    "antonyms": "distant, remote",
    "example": "A storm is imminent.",
    "commonMistake": "Imminent means near in time; eminent means distinguished.",
    "difficulty": "Moderate"
  },
  {
    "word": "Inimical",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "harmful or hostile",
    "hindi": "हानिकारक / शत्रुतापूर्ण",
    "synonyms": "hostile, adverse",
    "antonyms": "friendly, beneficial",
    "example": "The policy may be inimical to small firms.",
    "commonMistake": "Inimical is usually followed by to.",
    "difficulty": "Moderate"
  },
  {
    "word": "Insipid",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "lacking flavor, interest, or excitement",
    "hindi": "नीरस / फीका",
    "synonyms": "bland, dull",
    "antonyms": "interesting, stimulating",
    "example": "The speech was insipid.",
    "commonMistake": "Insipid can be literal or figurative.",
    "difficulty": "Moderate"
  },
  {
    "word": "Intrepid",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "fearless and adventurous",
    "hindi": "निडर",
    "synonyms": "fearless, bold",
    "antonyms": "timid, cowardly",
    "example": "The intrepid officer entered the building.",
    "commonMistake": "Intrepid is an adjective.",
    "difficulty": "Moderate"
  },
  {
    "word": "Laconic",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "using very few words",
    "hindi": "संक्षिप्त / अल्पभाषी",
    "synonyms": "terse, concise",
    "antonyms": "verbose, talkative",
    "example": "His laconic reply ended the discussion.",
    "commonMistake": "Laconic means brief in speech, not rude.",
    "difficulty": "Moderate"
  },
  {
    "word": "Loquacious",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "very talkative",
    "hindi": "बहुभाषी / बातूनी",
    "synonyms": "garrulous, talkative",
    "antonyms": "taciturn, reticent",
    "example": "The loquacious speaker exceeded the time limit.",
    "commonMistake": "Loquacious describes a person or speech.",
    "difficulty": "Moderate"
  },
  {
    "word": "Meticulous",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "very careful and precise",
    "hindi": "अत्यंत सावधान",
    "synonyms": "careful, painstaking",
    "antonyms": "careless, sloppy",
    "example": "She is meticulous in maintaining records.",
    "commonMistake": "Meticulous is positive in most exam contexts.",
    "difficulty": "Moderate"
  },
  {
    "word": "Nonchalant",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "calm and unconcerned",
    "hindi": "बेपरवाह",
    "synonyms": "casual, unconcerned",
    "antonyms": "anxious, concerned",
    "example": "He looked nonchalant before the interview.",
    "commonMistake": "Nonchalant means unconcerned, not careless.",
    "difficulty": "Moderate"
  },
  {
    "word": "Obsolete",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "no longer in use or useful",
    "hindi": "पुराना / अप्रचलित",
    "synonyms": "outdated, antiquated",
    "antonyms": "modern, current",
    "example": "The old system is obsolete.",
    "commonMistake": "Obsolete means no longer useful or current.",
    "difficulty": "Moderate"
  },
  {
    "word": "Perilous",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "full of danger or risk",
    "hindi": "खतरनाक",
    "synonyms": "dangerous, hazardous",
    "antonyms": "safe, secure",
    "example": "The hikers faced a perilous route.",
    "commonMistake": "Perilous is stronger than difficult.",
    "difficulty": "Moderate"
  },
  {
    "word": "Reticent",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "not revealing thoughts or feelings readily",
    "hindi": "संकोची / कम बोलने वाला",
    "synonyms": "reserved, restrained",
    "antonyms": "talkative, expressive",
    "example": "He was reticent about his plans.",
    "commonMistake": "Reticent means reserved, not necessarily shy.",
    "difficulty": "Moderate"
  },
  {
    "word": "Terse",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "brief and sometimes abrupt",
    "hindi": "संक्षिप्त",
    "synonyms": "concise, laconic",
    "antonyms": "verbose, lengthy",
    "example": "She gave a terse reply.",
    "commonMistake": "Terse can imply abruptness.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ubiquitous",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "present or found everywhere",
    "hindi": "सर्वव्यापी",
    "synonyms": "omnipresent, pervasive",
    "antonyms": "rare, scarce",
    "example": "Smartphones are ubiquitous today.",
    "commonMistake": "Ubiquitous means widespread, not unique.",
    "difficulty": "Moderate"
  },
  {
    "word": "Vacuous",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "lacking thought or intelligence",
    "hindi": "बुद्धिहीन / खोखला",
    "synonyms": "empty, senseless",
    "antonyms": "meaningful, intelligent",
    "example": "The article made a vacuous argument.",
    "commonMistake": "Vacuous can describe ideas, expressions, or people.",
    "difficulty": "Moderate"
  },
  {
    "word": "Veracity",
    "type": "Vocab",
    "pos": "Noun",
    "meaning": "truthfulness or accuracy",
    "hindi": "सत्यता",
    "synonyms": "truthfulness, accuracy",
    "antonyms": "falsehood, deceit",
    "example": "The journalist checked the veracity of the claim.",
    "commonMistake": "Veracity means truthfulness, not variety.",
    "difficulty": "Moderate"
  },
  {
    "word": "Wary",
    "type": "Vocab",
    "pos": "Adjective",
    "meaning": "cautious because of possible danger",
    "hindi": "सतर्क",
    "synonyms": "cautious, vigilant",
    "antonyms": "careless, trusting",
    "example": "Investors are wary of risky schemes.",
    "commonMistake": "Wary is followed by of.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abandon",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "त्याग देना / छोड़ देना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “abandon” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abide",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पालन करना / सहना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “abide” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abject",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अत्यंत दयनीय / नीच",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “abject” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abolish",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "समाप्त करना / खत्म करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “abolish” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Accelerate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "तेज़ करना / गति बढ़ाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “accelerate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Accentuate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विशेष रूप से उभारना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “accentuate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Accessible",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सुलभ / आसानी से उपलब्ध",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “accessible” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Acclaim",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रशंसा / सराहना करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “acclaim” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Accommodate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "समायोजित करना / जगह देना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “accommodate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Accomplish",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पूरा करना / सफलतापूर्वक करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “accomplish” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Accord",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सहमति / प्रदान करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “accord” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Accumulate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "इकट्ठा करना / जमा करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “accumulate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Accurate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सटीक / सही",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “accurate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Acknowledge",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "स्वीकार करना / मान्यता देना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “acknowledge” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Acquire",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्राप्त करना / हासिल करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “acquire” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Acquisition",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अधिग्रहण / प्राप्ति",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “acquisition” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Adapt",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनुकूल बनाना / ढलना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “adapt” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Adverse",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रतिकूल / हानिकारक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “adverse” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Advocate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "समर्थन करना / समर्थक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “advocate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Allocate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आवंटित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “allocate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Amend",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "संशोधन करना / सुधारना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “amend” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Amiable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मिलनसार / सौम्य",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “amiable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ample",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पर्याप्त / भरपूर",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “ample” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Analogy",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "समानता / उपमा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “analogy” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Anticipate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पूर्वानुमान करना / अपेक्षा करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “anticipate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Appraise",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मूल्यांकन करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “appraise” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Assess",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आकलन करना / मूल्य निर्धारित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “assess” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Assimilate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आत्मसात करना / समझकर ग्रहण करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “assimilate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Attain",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्राप्त करना / हासिल करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “attain” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Authentic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रामाणिक / असली",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “authentic” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Benign",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सौम्य / हानिरहित",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “benign” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Bias",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पक्षपात / झुकाव",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “bias” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Blatant",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "स्पष्ट और बेशर्म / खुला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “blatant” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Breach",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उल्लंघन / दरार",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “breach” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Concise",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "संक्षिप्त / सारगर्भित",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “concise” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Compel",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मजबूर करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “compel” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Competent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सक्षम / योग्य",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “competent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Complement",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पूरक / पूरा करने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “complement” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Comply",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पालन करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “comply” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Comprehensive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "व्यापक / सर्वसमावेशी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “comprehensive” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Conducive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनुकूल / सहायक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “conducive” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Confer",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रदान करना / विचार-विमर्श करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “confer” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Consensus",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सर्वसम्मति",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “consensus” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Consecutive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "लगातार / क्रमिक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “consecutive” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Consolidate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मजबूत करना / एकीकृत करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “consolidate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Constrain",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बाधित करना / सीमित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “constrain” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Contemplate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विचार करना / चिंतन करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “contemplate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Conventional",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "परंपरागत / प्रचलित",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “conventional” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Corroborate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पुष्टि करना / प्रमाणित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “corroborate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Credible",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विश्वसनीय / भरोसेमंद",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “credible” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Crucial",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अत्यंत महत्वपूर्ण / निर्णायक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “crucial” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Cumulative",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "संचयी / क्रमशः बढ़ता हुआ",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “cumulative” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Curtail",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कम करना / सीमित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “curtail” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Decipher",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "समझना / गूढ़ बात का अर्थ निकालना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “decipher” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Decisive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निर्णायक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “decisive” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Detrimental",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "हानिकारक / नुकसानदायक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “detrimental” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Deviate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विचलित होना / मार्ग से हटना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “deviate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Diminish",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कम होना / घटाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “diminish” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Discrete",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अलग-अलग / पृथक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “discrete” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Discriminate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "भेदभाव करना / अंतर करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “discriminate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Elicit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्राप्त करना / प्रतिक्रिया उत्पन्न करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “elicit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Elusive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पकड़ में न आने वाला / दुर्लभ",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “elusive” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Empirical",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनुभवजन्य / प्रयोग आधारित",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “empirical” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Enhance",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बढ़ाना / सुधारना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “enhance” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Entail",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "शामिल करना / आवश्यक बनाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “entail” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Equivalent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "समतुल्य / बराबर",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “equivalent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Eradicate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "जड़ से मिटाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “eradicate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Explicit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "स्पष्ट / साफ-साफ कहा हुआ",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “explicit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Feasible",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "व्यवहार्य / संभव",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “feasible” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Formidable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दुर्जेय / कठिन चुनौती वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “formidable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Foster",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बढ़ावा देना / प्रोत्साहित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “foster” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Fluctuate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उतार-चढ़ाव होना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “fluctuate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Fragile",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "नाज़ुक / आसानी से टूटने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “fragile” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Fundamental",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मूलभूत / बुनियादी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “fundamental” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Hamper",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बाधा डालना / रोकना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “hamper” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Impartial",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निष्पक्ष",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “impartial” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Implicit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निहित / अप्रत्यक्ष",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “implicit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Incentive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रोत्साहन / प्रेरक लाभ",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “incentive” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Incumbent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पदासीन / वर्तमान पदाधिकारी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “incumbent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Inevitable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अपरिहार्य / अनिवार्य रूप से होने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “inevitable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Infer",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निष्कर्ष निकालना / अनुमान लगाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “infer” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Inhibit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "रोकना / बाधित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “inhibit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Innovative",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "नवोन्मेषी / नवीन",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “innovative” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Integrity",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "ईमानदारी / सत्यनिष्ठा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “integrity” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Intermittent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "रुक-रुक कर होने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “intermittent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Intrinsic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आंतरिक / स्वाभाविक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “intrinsic” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Invoke",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आह्वान करना / लागू करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “invoke” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Justify",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उचित ठहराना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “justify” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Legitimate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "वैध / जायज़",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “legitimate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Lucrative",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "लाभदायक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “lucrative” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Mandatory",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनिवार्य",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “mandatory” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Marginal",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सीमांत / बहुत कम",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “marginal” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Mediate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मध्यस्थता करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “mediate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Moderate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मध्यम / संयमित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “moderate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Negate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "नकारना / निष्प्रभावी करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “negate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Negligent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "लापरवाह / उपेक्षापूर्ण",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “negligent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Nevertheless",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "फिर भी / तथापि",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “nevertheless” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Notable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उल्लेखनीय",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “notable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Objective",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उद्देश्य / निष्पक्ष",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “objective” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Offset",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "भरपाई करना / संतुलित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “offset” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Orthodox",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "रूढ़िवादी / परंपरागत",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “orthodox” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Paramount",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सर्वोपरि / अत्यंत महत्वपूर्ण",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “paramount” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Peculiar",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अजीब / विशिष्ट",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “peculiar” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Plausible",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विश्वसनीय / संभावित",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “plausible” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Prevalent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "व्यापक / प्रचलित",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “prevalent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Proficient",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दक्ष / कुशल",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “proficient” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Profound",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "गहन / गहरा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “profound” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Prohibit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रतिबंधित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “prohibit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Prompt",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "तत्काल / शीघ्र",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “prompt” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Prudent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विवेकपूर्ण / समझदार",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “prudent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Rectify",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सुधारना / ठीक करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “rectify” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Redundant",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनावश्यक / अतिरिक्त",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “redundant” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Reinforce",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मजबूत करना / सुदृढ़ करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “reinforce” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Reluctant",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनिच्छुक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “reluctant” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Resilient",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "लचीला / विपरीत परिस्थितियों से उबरने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “resilient” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Restrain",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "रोकना / नियंत्रित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “restrain” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Retain",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बनाए रखना / अपने पास रखना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “retain” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Robust",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मजबूत / सुदृढ़",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “robust” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Scrutinize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बारीकी से जांच करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “scrutinize” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Subordinate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अधीनस्थ / गौण",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “subordinate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Substantial",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "महत्वपूर्ण / पर्याप्त",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “substantial” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Subtle",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सूक्ष्म / बारीक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “subtle” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Suffice",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पर्याप्त होना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “suffice” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Superficial",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "ऊपरी / सतही",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “superficial” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Suppress",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दबाना / रोकना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “suppress” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Tangible",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मूर्त / स्पष्ट रूप से महसूस होने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “tangible” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Tentative",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अस्थायी / अनिश्चित",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “tentative” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Terminate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "समाप्त करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “terminate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Transparent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पारदर्शी / स्पष्ट",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “transparent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Unanimous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सर्वसम्मत",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “unanimous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Undermine",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कमज़ोर करना / नुकसान पहुँचाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “undermine” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Unprecedented",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अभूतपूर्व",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “unprecedented” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Versatile",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बहुमुखी / कई कामों में सक्षम",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “versatile” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Viable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "व्यवहार्य / सफल होने योग्य",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “viable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Vigilant",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सतर्क / चौकस",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “vigilant” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Vulnerable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "असुरक्षित / आसानी से प्रभावित होने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “vulnerable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Withstand",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सहन करना / सामना करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “withstand” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Zeal",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उत्साह / जोश",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “zeal” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Aberrant",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "असामान्य / विचलित",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “aberrant” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abeyance",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "स्थगन / अस्थायी रोक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “abeyance” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abnegation",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "त्याग / आत्मसंयम",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “abnegation” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Acquiescence",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मौन स्वीकृति / अनिच्छुक सहमति",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “acquiescence” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Altruism",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "परोपकारिता",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “altruism” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Anarchy",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अराजकता",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “anarchy” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Apprehension",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आशंका / भय",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “apprehension” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ardent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उत्साही / जोशीला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “ardent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Clemency",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दया / क्षमादान",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “clemency” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Complacent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आत्मसंतुष्ट / लापरवाह",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “complacent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Complicit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सह-अपराधी / मिलीभगत वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “complicit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Condescending",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उपकार जताने वाला / अहंकारी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “condescending” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Conjecture",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनुमान / अटकल",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “conjecture” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Connive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मिलीभगत करना / गुप्त रूप से सहयोग करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “connive” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Debacle",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "भारी विफलता / दुर्दशा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “debacle” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Dearth",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कमी / अभाव",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “dearth” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Deferential",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आदरपूर्ण / सम्मान दिखाने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “deferential” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Defy",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अवज्ञा करना / चुनौती देना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “defy” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Delineate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "स्पष्ट रूप से वर्णन करना / सीमांकन करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “delineate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Deplore",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निंदा करना / खेद व्यक्त करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “deplore” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Deplorable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निंदनीय / दयनीय",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “deplorable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Desolate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उजाड़ / वीरान",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “desolate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Detest",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "घोर नफरत करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “detest” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Devout",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "धार्मिक / श्रद्धालु",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “devout” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Dexterous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निपुण / कुशल",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “dexterous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Dismal",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निराशाजनक / उदास",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “dismal” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Dogmatic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "हठधर्मी / कट्टर विचारों वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “dogmatic” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Dormant",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निष्क्रिय / सुप्त",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “dormant” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Eclectic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विविध स्रोतों से चुना हुआ",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “eclectic” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Edify",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "ज्ञानवर्धन करना / नैतिक रूप से सुधारना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “edify” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Egregious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बहुत बुरा / घोर",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “egregious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Elated",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बहुत प्रसन्न / उत्साहित",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “elated” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Empathy",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सहानुभूति / दूसरे की भावनाएँ समझने की क्षमता",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “empathy” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Enigmatic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "रहस्यमय / गूढ़",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “enigmatic” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Enmity",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "शत्रुता / वैर",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “enmity” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Equivocal",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अस्पष्ट / संदिग्ध",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “equivocal” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Expedient",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सुविधाजनक / व्यावहारिक उपाय",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “expedient” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Extemporaneous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बिना तैयारी का / तत्काल किया गया",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “extemporaneous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Extol",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बहुत प्रशंसा करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “extol” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Extraneous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनावश्यक / बाहरी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “extraneous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Flounder",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "संघर्ष करना / कठिनाई में पड़ना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “flounder” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Gregarious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मिलनसार / सामाजिक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “gregarious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Heedless",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "लापरवाह / असावधान",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “heedless” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Heinous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "घोर निंदनीय / जघन्य",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “heinous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Heresy",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विधर्म / प्रचलित मत के विरुद्ध विचार",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “heresy” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Implacable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अडिग / जिसे शांत न किया जा सके",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “implacable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Impoverished",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "गरीब / निर्धन",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “impoverished” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Inadvertent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनजाने में हुआ",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “inadvertent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Innate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "जन्मजात / स्वाभाविक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “innate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Insidious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कपटी / धीरे-धीरे नुकसान पहुँचाने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “insidious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Inveterate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पुराना / आदतन",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “inveterate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Languid",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सुस्त / शिथिल",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “languid” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Lenient",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उदार / नरम",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “lenient” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Mundane",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सांसारिक / साधारण",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “mundane” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Onerous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कठिन / बोझिल",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “onerous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Staunch",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दृढ़ / निष्ठावान",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “staunch” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Steadfast",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दृढ़ / अटल",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “steadfast” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Stringent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कठोर / सख्त",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “stringent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Tacit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मौन / बिना कहे समझा गया",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “tacit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Whimsical",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सनकी / मनमौजी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “whimsical” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Vindictive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रतिशोधी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “vindictive” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Virtuous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सदाचारी / गुणी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “virtuous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Volatile",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अस्थिर / तेजी से बदलने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “volatile” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Voracious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बहुत लालची / बहुत भूखा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “voracious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Wily",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "चालाक / धूर्त",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “wily” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Wane",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कम होना / क्षीण होना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “wane” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Wither",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मुरझाना / सूखना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “wither” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Yield",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उपज देना / समर्पण करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “yield” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Zealot",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कट्टर समर्थक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “zealot” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Zealous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उत्साही / जोशीला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “zealous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abet",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उकसाना / गलत काम में सहायता करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “abet” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Abysmal",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बेहद खराब / अत्यंत निम्न",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “abysmal” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Accede",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मान लेना / पद ग्रहण करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “accede” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Acrimony",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कटुता / कड़वाहट",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “acrimony” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Acuity",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "तीक्ष्णता / समझ की तेज़ी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “acuity” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Affront",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अपमान / अपमानित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “affront” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Aggrandize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "महत्व या शक्ति बढ़ाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “aggrandize” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Agitate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उत्तेजित करना / आंदोलन करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “agitate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Allay",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कम करना / शांत करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “allay” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Allude",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "संकेत करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “allude” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Amass",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "इकट्ठा करना / जमा करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “amass” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ambivalent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "द्वंद्वात्मक भावनाओं वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “ambivalent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Amenable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सहमत / आसानी से प्रभावित होने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “amenable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Anathema",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "घोर अप्रिय / अभिशाप",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “anathema” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ancillary",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सहायक / गौण",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “ancillary” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Annex",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "जोड़ना / अधिग्रहित क्षेत्र",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “annex” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Anomalous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "असामान्य / विसंगतिपूर्ण",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “anomalous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Antagonize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "शत्रुता उत्पन्न करना / नाराज़ करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “antagonize” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Apprise",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सूचित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “apprise” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Apt",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उपयुक्त / कुशल",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “apt” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Aptitude",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "योग्यता / स्वाभाविक क्षमता",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “aptitude” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ascend",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "ऊपर चढ़ना / आरोहण करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “ascend” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ascetic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "तपस्वी / सादा जीवन जीने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “ascetic” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Assuage",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "शांत करना / कम करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “assuage” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Astute",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "चतुर / सूझबूझ वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “astute” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Atrophy",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "क्षीण होना / कमजोर पड़ना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “atrophy” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Augment",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बढ़ाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “augment” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Auspicious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "शुभ / मंगलकारी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “auspicious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Aversion",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "घृणा / विरक्ति",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “aversion” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Avow",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "खुले तौर पर स्वीकार करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “avow” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Bellicose",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "झगड़ालू / युद्धप्रिय",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “bellicose” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Bombastic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आडंबरपूर्ण / बड़े-बड़े शब्दों वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “bombastic” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Brusque",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "रूखा / संक्षिप्त व्यवहार वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “brusque” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Buffoonery",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मसखरापन / मूर्खतापूर्ण व्यवहार",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “buffoonery” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Chagrin",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "खिन्नता / शर्मिंदगी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “chagrin” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Clandestine",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "गुप्त / गुप्त रूप से किया गया",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “clandestine” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Coerce",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बलपूर्वक मजबूर करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “coerce” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Colloquial",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बोलचाल का",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “colloquial” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Commensurate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनुपातिक / अनुरूप",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “commensurate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Conciliatory",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मेल-मिलाप कराने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “conciliatory” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Condone",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "माफ करना / गलत कार्य को अनदेखा करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “condone” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Confound",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "भ्रमित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “confound” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Contrive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "युक्ति से करना / योजना बनाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “contrive” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Contentious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विवादास्पद / झगड़ालू",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “contentious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Credulous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आसानी से विश्वास करने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “credulous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Cryptic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "गूढ़ / रहस्यमय",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “cryptic” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Culpable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दोषी / दोषारोपण योग्य",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “culpable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Debunk",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "झूठा साबित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “debunk” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Decry",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कड़ी निंदा करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “decry” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Demagogue",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "जनभावनाएँ भड़काने वाला नेता",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “demagogue” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Despicable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "घृणित / नीच",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “despicable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Despondency",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निराशा / हताशा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “despondency” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Digress",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विषय से भटकना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “digress” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Discerning",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पारखी / सूझबूझ वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “discerning” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Disconcert",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "परेशान या विचलित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “disconcert” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Discredit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बदनाम करना / विश्वसनीयता नष्ट करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “discredit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Disparate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "असमान / अलग-अलग",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “disparate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Dogged",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दृढ़ / जिद्दी प्रयास करने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “dogged” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Duplicity",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कपट / दोहरा व्यवहार",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “duplicity” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Efface",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मिटा देना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “efface” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Effusive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अत्यधिक भावुक / खुलकर व्यक्त करने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “effusive” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Embellish",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सजाना / बढ़ा-चढ़ाकर बताना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “embellish” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Enthrall",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मंत्रमुग्ध करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “enthrall” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Equivocate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "गोलमोल जवाब देना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “equivocate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Erratic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनियमित / अस्थिर",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “erratic” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Erudition",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विद्वत्ता / गहन ज्ञान",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “erudition” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Esoteric",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "गूढ़ / केवल विशेषज्ञों को समझ आने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “esoteric” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Expunge",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मिटा देना / हटाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “expunge” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Fallacy",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "भ्रांति / तर्कदोष",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “fallacy” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Fervid",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उत्साही / प्रबल भावनाओं वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “fervid” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Fickle",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "चंचल / अस्थिर विचारों वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “fickle” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Flippant",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "गंभीर विषय पर हल्का या असम्मानजनक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “flippant” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Fortuitous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "संयोगवश / आकस्मिक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “fortuitous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Gratuitous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनावश्यक / बिना कारण दिया गया",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “gratuitous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Hackneyed",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "घिसा-पिटा / बहुत पुराना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “hackneyed” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Haughty",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "घमंडी / अहंकारी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “haughty” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Idiosyncratic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विशिष्ट / अपनी अलग शैली वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “idiosyncratic” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ignominious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अपमानजनक / कलंकपूर्ण",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “ignominious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Impasse",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "गतिरोध",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “impasse” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Impecunious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निर्धन / पैसे की कमी वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “impecunious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Impertinent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उद्दंड / असभ्य",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “impertinent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Impropriety",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनुचित व्यवहार / अशिष्टता",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “impropriety” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Indignant",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आक्रोशित / क्षुब्ध",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “indignant” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Indolence",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आलस्य",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “indolence” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Inexorable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अटल / जिसे रोका न जा सके",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “inexorable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ingenuous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "भोला-भाला / निष्कपट",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “ingenuous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Insular",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "संकीर्ण सोच वाला / अलग-थलग",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “insular” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Intimation",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "संकेत / सूचना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “intimation” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Invective",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अपमानजनक भाषा / कटु आलोचना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “invective” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Irrefutable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अखंडनीय / जिसका खंडन न किया जा सके",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “irrefutable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Labyrinthine",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "भूलभुलैया जैसा जटिल",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “labyrinthine” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Lament",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विलाप करना / शोक व्यक्त करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “lament” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Laud",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रशंसा करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “laud” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Magnanimity",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उदारता / विशाल हृदयता",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “magnanimity” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Mendacious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "झूठा / असत्यवादी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “mendacious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Misnomer",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "गलत नाम / गलत नामकरण",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “misnomer” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Mollify",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "शांत करना / नरम करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “mollify” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Morose",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उदास / चिड़चिड़ा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “morose” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Munificent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बहुत उदार / उदारतापूर्वक देने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “munificent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Myopic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दूरदृष्टिहीन / संकीर्ण दृष्टिकोण वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “myopic” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Nebulous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अस्पष्ट / धुंधला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “nebulous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Negligible",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "नगण्य / बहुत कम",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “negligible” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Notorious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कुख्यात / बदनाम",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “notorious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Obdurate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "हठी / कठोर हृदय",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “obdurate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Obstinate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "जिद्दी / हठी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “obstinate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Obscure",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अस्पष्ट / अज्ञात",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “obscure” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Odious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "घृणित / अप्रिय",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “odious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Opaque",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अपारदर्शी / अस्पष्ट",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “opaque” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Opulent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "धनाढ्य / भव्य",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “opulent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ornate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अलंकारपूर्ण / सजावटी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “ornate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ostensible",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दिखावटी / प्रकट रूप से बताया गया",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “ostensible” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ostracize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बहिष्कार करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “ostracize” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Overt",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "खुला / स्पष्ट",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “overt” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Palatable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "स्वादिष्ट / स्वीकार्य",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “palatable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Pallid",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "फीका / पीला पड़ा हुआ",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “pallid” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Panacea",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सर्वरोगहारी उपाय / रामबाण इलाज",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “panacea” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Paradox",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विरोधाभास",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “paradox” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Patronize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "संरक्षण देना / उपकार जताना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “patronize” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Pedantic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दिखावटी विद्वत्ता वाला / अत्यधिक नियमवादी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “pedantic” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Penance",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रायश्चित / दंड",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “penance” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Perfidious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विश्वासघाती / कपटी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “perfidious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Pernicious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "हानिकारक / विनाशकारी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “pernicious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Perturbed",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "परेशान / विचलित",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “perturbed” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Placate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "शांत करना / मनाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “placate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Plethora",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बहुतायत / अत्यधिक मात्रा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “plethora” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Poignant",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मार्मिक / हृदयस्पर्शी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “poignant” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Pragmatic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "व्यावहारिक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “pragmatic” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Precipitate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "जल्दबाजी करना / अचानक घटित होना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “precipitate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Preclude",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "रोकना / पहले ही असंभव कर देना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “preclude” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Predilection",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विशेष पसंद / झुकाव",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “predilection” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Preposterous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बेतुका / हास्यास्पद",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “preposterous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Pristine",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बिल्कुल साफ / मूल अवस्था का",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “pristine” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Prodigal",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अपव्ययी / फिजूलखर्च",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “prodigal” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Prolific",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बहुत उत्पादक / विपुल",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “prolific” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Proliferate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "तेजी से बढ़ना / फैलना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “proliferate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Propensity",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रवृत्ति / झुकाव",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “propensity” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Punctilious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "नियमों का बहुत सावधानी से पालन करने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “punctilious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Quandary",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दुविधा / असमंजस",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “quandary” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Querulous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "शिकायती / चिड़चिड़ा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “querulous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Rancor",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "द्वेष / कटुता",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “rancor” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Rebuke",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "फटकारना / डांटना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “rebuke” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Reconcile",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मेल कराना / सामंजस्य स्थापित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “reconcile” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Reclusive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "एकांतप्रिय / समाज से दूर रहने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “reclusive” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Redolent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सुगंधित / किसी चीज़ की याद दिलाने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “redolent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Refute",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "खंडन करना / गलत साबित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “refute” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Reiterate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दोहराना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “reiterate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Relinquish",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "त्याग देना / छोड़ देना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “relinquish” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Remorse",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पश्चाताप / ग्लानि",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “remorse” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Remonstrate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आपत्ति करना / विरोध जताना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “remonstrate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Renounce",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "त्याग करना / अधिकार छोड़ना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “renounce” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Reprehensible",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निंदनीय / दोषपूर्ण",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “reprehensible” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Rhetoric",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आलंकारिक भाषण / प्रभावशाली लेकिन कभी-कभी खोखली भाषा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “rhetoric” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Rigorous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कठोर / सख्त / गहन",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “rigorous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Rudimentary",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रारंभिक / बुनियादी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “rudimentary” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Sagacity",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बुद्धिमत्ता / सूझबूझ",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “sagacity” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Sanctimonious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "ढोंगी धार्मिक / पाखंडी नैतिकतावादी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “sanctimonious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Scanty",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अल्प / बहुत कम",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “scanty” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Sedentary",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निष्क्रिय / अधिकतर बैठकर किया जाने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “sedentary” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Seminal",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मौलिक और प्रभावशाली",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “seminal” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Shrewd",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "चतुर / समझदार",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “shrewd” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Solicitous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "चिंतित / ध्यान रखने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “solicitous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Sporadic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "छिटपुट / कभी-कभार होने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “sporadic” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Stagnant",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "ठहरा हुआ / निष्क्रिय",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “stagnant” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Strident",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कर्कश / तीखा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “strident” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Superfluous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनावश्यक / अतिरिक्त",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “superfluous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Surreptitious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "गुप्त / चोरी-छिपे",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “surreptitious” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Tirade",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "लंबा क्रोधपूर्ण भाषण / फटकार",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “tirade” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Torpid",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सुस्त / निष्क्रिय",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “torpid” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Tractable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आसानी से नियंत्रित / आज्ञाकारी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “tractable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Transient",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "क्षणिक / अस्थायी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “transient” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Treacherous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विश्वासघाती / कपटी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “treacherous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Truculent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आक्रामक / झगड़ालू",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “truculent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Unassailable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अजेय / जिस पर हमला या आपत्ति न की जा सके",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “unassailable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Unequivocal",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "स्पष्ट / दो टूक",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “unequivocal” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Unpalatable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अरुचिकर / अप्रिय",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “unpalatable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Unscrupulous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बेईमान / सिद्धांतहीन",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “unscrupulous” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Vacillate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "डगमगाना / निर्णय बदलते रहना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “vacillate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Vehement",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रबल / जोरदार",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “vehement” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Venerable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सम्माननीय / पूजनीय",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “venerable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Veritable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "वास्तविक / सच्चा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “veritable” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Virulent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अत्यंत विषैला / कटु",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “virulent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Wanton",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मनमाना / उच्छृंखल",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “wanton” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Withhold",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "रोककर रखना / न देना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “withhold” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Wretched",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दयनीय / बदहाल",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “wretched” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Xenophobia",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विदेशियों के प्रति भय या घृणा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “xenophobia” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Yearn",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "तरसना / तीव्र इच्छा करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “yearn” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Yoke",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "जुआ / जोड़ना या बाँधना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “yoke” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Absorb",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अवशोषित करना / आत्मसात करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “absorb” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Accept",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "स्वीकार करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “accept” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Account",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "खाता / विवरण देना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “account” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Accredit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मान्यता देना / श्रेय देना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “accredit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Acquit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दोषमुक्त करना / बरी करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “acquit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Activate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सक्रिय करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “activate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Adhere",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पालन करना / चिपके रहना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “adhere” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Administer",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रशासन करना / लागू करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “administer” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Admonition",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "फटकार / चेतावनी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “admonition” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Affirm",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दृढ़ता से कहना / पुष्टि करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “affirm” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Aggregate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कुल / एकत्र करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “aggregate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Aggravate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बिगाड़ना / और गंभीर करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “aggravate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Aid",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सहायता / मदद करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “aid” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Ailment",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बीमारी / रोग",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “ailment” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Appeal",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अपील / आकर्षित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “appeal” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Apprehend",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "गिरफ्तार करना / समझना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “apprehend” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Appropriate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "उचित / अधिकारपूर्वक लेना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “appropriate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Arbitrate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मध्यस्थता करना / पंच फैसला करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “arbitrate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Arrest",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "गिरफ्तार करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “arrest” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Aspire",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आकांक्षा रखना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “aspire” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Assert",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दृढ़ता से कहना / दावा करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “assert” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Assume",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मान लेना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “assume” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Assure",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आश्वस्त करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “assure” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Attribute",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विशेषता / कारण बताना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “attribute” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Audit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "लेखा-परीक्षा करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “audit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Authorize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अधिकृत करना / अनुमति देना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “authorize” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Avail",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "लाभ देना / उपयोगी होना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “avail” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Backlash",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "तीखी प्रतिकूल प्रतिक्रिया",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “backlash” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Bailout",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "वित्तीय सहायता देकर बचाव",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “bailout” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Benchmark",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मानक / तुलना का आधार",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “benchmark” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Beneficiary",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "लाभार्थी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “beneficiary” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Broker",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दलाल / मध्यस्थ",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “broker” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Budget",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बजट / आय-व्यय योजना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “budget” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Capitalise",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पूंजी लगाना / लाभ उठाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “capitalise” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Casualty",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "हताहत व्यक्ति / नुकसान का शिकार",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “casualty” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Caution",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सावधानी / चेतावनी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “caution” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Cease",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बंद करना / समाप्त होना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “cease” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Certify",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रमाणित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “certify” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Charter",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अधिकार-पत्र / चार्टर",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “charter” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Commodity",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "वस्तु / व्यापारिक माल",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “commodity” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Compliance",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनुपालन",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “compliance” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Concurrent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "समकालिक / एक साथ होने वाला",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “concurrent” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Consult",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "परामर्श करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “consult” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Contingency",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आकस्मिक स्थिति / संभावित घटना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “contingency” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Convey",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रेषित करना / व्यक्त करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “convey” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Creditor",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "लेनदार",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “creditor” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Deficit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "घाटा / कमी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “deficit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Default",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "चूक / भुगतान न करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “default” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Defer",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "स्थगित करना / टालना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “defer” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Delegate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रतिनिधि / अधिकार सौंपना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “delegate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Demand",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मांग / मांग करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “demand” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Denote",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दर्शाना / सूचित करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “denote” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Deposit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "जमा करना / जमा राशि",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “deposit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Depreciate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मूल्य घटना / अवमूल्यन करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “depreciate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Derivative",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "व्युत्पन्न / व्युत्पन्न वित्तीय साधन",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “derivative” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Devise",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "योजना बनाना / उपाय निकालना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “devise” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Dividend",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "लाभांश",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “dividend” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Endorse",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "समर्थन करना / अनुमोदन करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “endorse” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Enforce",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "लागू करना / पालन करवाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “enforce” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Equity",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "न्यायसंगतता / अंशधारिता पूंजी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “equity” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Exempt",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "छूट देना / मुक्त",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “exempt” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Fiscal",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "राजकोषीय / सरकारी आय-व्यय संबंधी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “fiscal” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Forecast",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "पूर्वानुमान / पूर्वानुमान करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “forecast” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Fraud",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "धोखाधड़ी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “fraud” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Facilitate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "सुगम बनाना / सहायता करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “facilitate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Finance",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "वित्त / वित्तपोषण करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “finance” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Inflation",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मुद्रास्फीति",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “inflation” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Inherit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विरासत में पाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “inherit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Inject",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "डालना / प्रविष्ट करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “inject” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Insolvency",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दिवालियापन / ऋण चुकाने में असमर्थता",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “insolvency” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Installment",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "किस्त",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “installment” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Insure",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बीमा करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “insure” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Interest",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "ब्याज / रुचि",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “interest” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Liability",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "दायित्व / देनदारी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “liability” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Liquidity",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "तरलता / आसानी से नकद में बदलने की क्षमता",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “liquidity” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Mandate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "आदेश / अधिकार देना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “mandate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Merger",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विलय",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “merger” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Mortgage",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बंधक / गिरवी रखना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “mortgage” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Monetary",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मौद्रिक / मुद्रा संबंधी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “monetary” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Negotiate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बातचीत करके समझौता करना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “negotiate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Obligate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "बाध्य करना / जिम्मेदार बनाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “obligate” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Portfolio",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निवेशों का संग्रह / पोर्टफोलियो",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “portfolio” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Premium",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अधिमूल्य / बीमा की किस्त",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “premium” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Principal",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मूलधन / प्रधान",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “principal” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Procure",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्राप्त करना / खरीदना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “procure” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Profit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "लाभ / मुनाफा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “profit” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Provision",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "प्रावधान / व्यवस्था",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “provision” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Recession",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मंदी / आर्थिक मंदी",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “recession” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Reserve",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "भंडार / आरक्षित रखना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “reserve” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Retail",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "खुदरा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “retail” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Revenue",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "राजस्व / आय",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “revenue” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Subsidy",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अनुदान / सरकारी आर्थिक सहायता",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “subsidy” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Surplus",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "अधिशेष / बची हुई मात्रा",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “surplus” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Tariff",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "शुल्क / आयात-कर",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “tariff” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Tenure",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "कार्यकाल / अवधि",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “tenure” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Transaction",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "लेन-देन",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “transaction” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Treasury",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "राजकोष / सरकारी खजाना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “treasury” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Valuation",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "मूल्यांकन",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “valuation” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Vendor",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "विक्रेता / आपूर्तिकर्ता",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “vendor” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Withdrawal",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An important English word commonly useful in competitive-exam reading and usage.",
    "hindi": "निकासी / वापस लेना",
    "synonyms": "See related usage",
    "antonyms": "See context",
    "example": "The word “withdrawal” is commonly encountered in formal English.",
    "commonMistake": "Learn the exact meaning and part of speech before using it.",
    "difficulty": "Moderate"
  },
  {
    "word": "Answer",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "हिंदी अर्थ उपलब्ध नहीं",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “answer” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Example",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "उदाहरण",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “example” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Problem",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "समस्या",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “problem” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Result",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "परिणाम",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “result” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "System",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रणाली",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “system” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Process",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रक्रिया",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “process” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Question",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रश्न",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “question” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Reason",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "कारण",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “reason” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Value",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "मूल्य / महत्त्व",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “value” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Change",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "परिवर्तन",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “change” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Company",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "कंपनी",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “company” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Market",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "बाज़ार",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “market” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Service",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सेवा",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “service” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Support",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सहायता",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “support” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Product",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "उत्पाद",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “product” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Study",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अध्ययन",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “study” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Experience",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अनुभव",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “experience” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "History",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "इतिहास",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “history” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Effect",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रभाव",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “effect” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Report",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "रिपोर्ट",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “report” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Policy",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "नीति",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “policy” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Government",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सरकार",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “government” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Public",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सार्वजनिक",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “public” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Community",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "समुदाय",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “community” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Society",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "समाज",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “society” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Economy",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अर्थव्यवस्था",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “economy” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Business",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "व्यवसाय",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “business” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Development",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "विकास",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “development” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Research",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अनुसंधान",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “research” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Important",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "महत्त्वपूर्ण",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “important” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Possible",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "संभव",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “possible” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Particular",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "विशिष्ट",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “particular” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "General",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सामान्य",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “general” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Different",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अलग / भिन्न",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “different” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Similar",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "समान",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “similar” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Current",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "वर्तमान",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “current” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Future",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "भविष्य",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “future” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Present",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "वर्तमान / प्रस्तुत",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “present” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Local",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "स्थानीय",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “local” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "National",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "राष्ट्रीय",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “national” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "International",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अंतरराष्ट्रीय",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “international” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Major",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रमुख",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “major” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Minor",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "गौण / छोटा",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “minor” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Simple",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सरल",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “simple” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Complex",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "जटिल",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “complex” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Clear",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "स्पष्ट",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “clear” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Difficult",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "कठिन",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “difficult” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Useful",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "उपयोगी",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “useful” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Necessary",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "आवश्यक",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “necessary” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Available",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "उपलब्ध",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “available” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Likely",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "संभावित",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “likely” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Actual",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "वास्तविक",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “actual” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Social",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सामाजिक",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “social” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Economic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "आर्थिक",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “economic” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Financial",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "वित्तीय",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “financial” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Political",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "राजनीतिक",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “political” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Environmental",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "पर्यावरणीय",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “environmental” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Cultural",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सांस्कृतिक",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “cultural” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Individual",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "व्यक्ति / व्यक्तिगत",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “individual” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Organization",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "संगठन",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “organization” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Management",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रबंधन",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “management” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Opportunity",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अवसर",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “opportunity” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Challenge",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "चुनौती",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “challenge” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Issue",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "मुद्दा",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “issue” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Matter",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "मामला / विषय",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “matter” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Situation",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "स्थिति",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “situation” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Condition",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "परिस्थिति / शर्त",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “condition” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Cause",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "कारण",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “cause” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Purpose",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "उद्देश्य",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “purpose” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Method",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "विधि",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “method” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Level",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "स्तर",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “level” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Quality",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "गुणवत्ता",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “quality” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Number",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "संख्या",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “number” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Amount",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "राशि / मात्रा",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “amount” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Rate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "दर",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “rate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Growth",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "वृद्धि",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “growth” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Decline",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "गिरावट",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “decline” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Increase",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "बढ़ना / वृद्धि",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “increase” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Decrease",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "कमी / घटाव",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “decrease” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Reduce",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "कम करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “reduce” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Improve",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सुधारना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “improve” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Provide",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रदान करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “provide” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Require",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "आवश्यक होना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “require” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Include",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "शामिल करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “include” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Involve",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "शामिल करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “involve” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Create",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "बनाना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “create” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Produce",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "उत्पादन करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “produce” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Develop",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "विकसित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “develop” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Establish",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "स्थापित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “establish” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Continue",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "जारी रखना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “continue” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Maintain",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "बनाए रखना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “maintain” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Control",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "नियंत्रण करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “control” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Decide",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "निर्णय लेना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “decide” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Determine",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "निर्धारित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “determine” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Consider",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "विचार करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “consider” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Compare",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "तुलना करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “compare” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Explain",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "समझाना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “explain” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Describe",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "वर्णन करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “describe” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Indicate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "संकेत देना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “indicate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Suggest",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सुझाव देना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “suggest” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Discuss",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "चर्चा करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “discuss” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Agree",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सहमत होना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “agree” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Allow",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अनुमति देना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “allow” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Expect",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अपेक्षा करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “expect” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Believe",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "विश्वास करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “believe” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Achieve",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्राप्त करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “achieve” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Avoid",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "बचना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “avoid” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Build",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "निर्माण करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “build” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Carry",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "ले जाना / वहन करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “carry” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Collect",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "एकत्र करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “collect” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Complete",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "पूरा करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “complete” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Connect",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "जोड़ना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “connect” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Contain",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "शामिल होना / रखना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “contain” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Cover",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "ढकना / शामिल करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “cover” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Deliver",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "पहुँचाना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “deliver” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Design",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "रूपरेखा / डिज़ाइन करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “design” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Discover",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "खोज करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “discover” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Educate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "शिक्षित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “educate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Encourage",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रोत्साहित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “encourage” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Ensure",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सुनिश्चित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “ensure” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Evaluate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "मूल्यांकन करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “evaluate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Examine",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "जाँच करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “examine” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Exist",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "मौजूद होना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “exist” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Expand",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "विस्तार करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “expand” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Fail",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "असफल होना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “fail” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Focus",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "ध्यान केंद्रित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “focus” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Follow",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अनुसरण करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “follow” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Gain",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्राप्त करना / लाभ",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “gain” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Generate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "उत्पन्न करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “generate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Handle",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "संभालना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “handle” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Identify",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "पहचानना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “identify” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Implement",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "लागू करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “implement” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Influence",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रभावित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “influence” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Inform",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सूचित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “inform” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Introduce",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "परिचय कराना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “introduce” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Manage",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रबंधित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “manage” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Measure",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "मापना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “measure” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Mention",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "उल्लेख करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “mention” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Obtain",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्राप्त करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “obtain” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Occur",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "घटित होना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “occur” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Offer",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रस्ताव देना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “offer” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Organize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "व्यवस्थित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “organize” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Participate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "भाग लेना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “participate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Perform",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रदर्शन / कार्य करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “perform” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Plan",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "योजना बनाना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “plan” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Prepare",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "तैयार करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “prepare” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Prevent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "रोकना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “prevent” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Protect",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सुरक्षा करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “protect” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Publish",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रकाशित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “publish” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Receive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्राप्त करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “receive” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Recognize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "पहचानना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “recognize” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Recommend",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सिफारिश करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “recommend” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Record",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "दर्ज करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “record” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Reflect",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रतिबिंबित करना / विचार करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “reflect” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Remain",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "बने रहना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “remain” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Remove",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "हटाना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “remove” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Replace",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "बदलना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “replace” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Represent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रतिनिधित्व करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “represent” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Respond",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रतिक्रिया देना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “respond” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Review",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "समीक्षा करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “review” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Select",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "चुनना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “select” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Solve",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "हल करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “solve” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Spend",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "खर्च करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “spend” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Spread",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "फैलाना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “spread” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Strengthen",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "मज़बूत करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “strengthen” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Succeed",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सफल होना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “succeed” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Target",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "लक्ष्य",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “target” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Train",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रशिक्षित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “train” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Transfer",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "स्थानांतरित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “transfer” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Transform",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "रूपांतरित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “transform” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Treat",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "व्यवहार करना / उपचार करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “treat” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Understand",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "समझना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “understand” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Update",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अद्यतन करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “update” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Use",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "उपयोग करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “use” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Vary",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "बदलना / भिन्न होना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “vary” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Verify",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सत्यापित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “verify” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "View",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "दृष्टिकोण / देखना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “view” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Adjust",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "समायोजित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “adjust” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Analyze",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "विश्लेषण करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “analyze” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Apply",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "लागू करना / आवेदन करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “apply” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Arrange",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "व्यवस्थित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “arrange” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Balance",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "संतुलन",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “balance” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Calculate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "गणना करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “calculate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Categorize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "वर्गीकृत करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “categorize” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Combine",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "संयोजित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “combine” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Communicate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "संवाद करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “communicate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Compete",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रतिस्पर्धा करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “compete” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Concentrate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "एकाग्र होना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “concentrate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Conduct",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "संचालित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “conduct” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Confirm",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "पुष्टि करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “confirm” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Construct",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "निर्माण करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “construct” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Consume",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "उपभोग करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “consume” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Contribute",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "योगदान करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “contribute” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Convert",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "परिवर्तित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “convert” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Coordinate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "समन्वय करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “coordinate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Cooperate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सहयोग करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “cooperate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Demonstrate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रदर्शित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “demonstrate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Depend",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "निर्भर होना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “depend” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Derive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्राप्त करना / व्युत्पन्न करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “derive” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Distinguish",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अंतर करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “distinguish” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Distribute",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "वितरित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “distribute” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Document",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "दस्तावेज़ / दस्तावेज़ बनाना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “document” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Eliminate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "समाप्त करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “eliminate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Emerge",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "उभरना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “emerge” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Employ",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "नियोजित करना / उपयोग करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “employ” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Enable",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सक्षम करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “enable” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Estimate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अनुमान लगाना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “estimate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Exclude",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "बहिष्कृत करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “exclude” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Explore",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "खोजना / अन्वेषण करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “explore” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Express",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "व्यक्त करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “express” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Extend",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "विस्तार करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “extend” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Extract",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "निकालना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “extract” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Finalize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अंतिम रूप देना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “finalize” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Formulate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "तैयार करना / सूत्रबद्ध करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “formulate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Fund",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "धन देना / निधि",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “fund” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Illustrate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "उदाहरण देकर समझाना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “illustrate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Interpret",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "व्याख्या करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “interpret” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Investigate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "जाँच-पड़ताल करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “investigate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Launch",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "शुरू करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “launch” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Maximize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अधिकतम करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “maximize” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Minimize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "न्यूनतम करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “minimize” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Monitor",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "निगरानी करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “monitor” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Motivate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रेरित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “motivate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Optimize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अनुकूलित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “optimize” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Perceive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अनुभव करना / समझना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “perceive” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Predict",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "भविष्यवाणी करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “predict” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Prioritize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्राथमिकता देना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “prioritize” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Promote",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "बढ़ावा देना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “promote” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Pursue",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "पीछा करना / प्रयास करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “pursue” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Qualify",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "योग्य होना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “qualify” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Quantify",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "मात्रा निर्धारित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “quantify” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "React",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "प्रतिक्रिया करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “react” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Recover",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "वापस पाना / स्वस्थ होना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “recover” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Refine",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "परिष्कृत करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “refine” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Regulate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "नियंत्रित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “regulate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Release",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "जारी करना / मुक्त करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “release” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Resolve",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "समाधान करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “resolve” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Restore",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "पुनर्स्थापित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “restore” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Revise",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "संशोधित करना / दोहराना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “revise” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Schedule",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "समय-सारणी",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “schedule” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Secure",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सुरक्षित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “secure” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Simplify",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सरल बनाना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “simplify” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Simulate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अनुकरण करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “simulate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Specify",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "निर्दिष्ट करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “specify” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Summarize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "सारांश देना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “summarize” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Sustain",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "बनाए रखना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “sustain” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Track",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "नज़र रखना / ट्रैक करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “track” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Translate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "अनुवाद करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “translate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Validate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "A useful English word for competitive-exam reading and writing.",
    "hindi": "मान्य करना / सत्यापित करना",
    "synonyms": "related word",
    "antonyms": "opposite depends on context",
    "example": "Candidates should understand the word “validate” in context.",
    "commonMistake": "Check the exact meaning, spelling, and part of speech.",
    "difficulty": "Easy"
  },
  {
    "word": "Abacus",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “abacus” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Abattoir",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “abattoir” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Abstemious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “abstemious” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Abstruse",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “abstruse” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Accost",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “accost” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Acrimonious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “acrimonious” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Acquiescent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “acquiescent” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Acquisitive",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “acquisitive” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Acerbic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “acerbic” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Adamantine",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “adamantine” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Affray",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “affray” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Agog",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “agog” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Allusion",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “allusion” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Amalgamate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “amalgamate” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Amelioration",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “amelioration” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Amnesty",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “amnesty” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Apocryphal",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “apocryphal” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Apotheosis",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “apotheosis” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Approbation",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “approbation” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Audacity",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “audacity” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Avaricious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “avaricious” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Baleful",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “baleful” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Banter",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “banter” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Bastion",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “bastion” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Beatific",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “beatific” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Bedlam",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “bedlam” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Beguile",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “beguile” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Beleaguer",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “beleaguer” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Belligerence",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “belligerence” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Beneficent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “beneficent” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Bereft",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “bereft” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Blithe",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “blithe” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Blunder",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “blunder” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Boisterous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “boisterous” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Bombast",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “bombast” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Bucolic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “bucolic” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Burnish",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “burnish” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Cacophony",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “cacophony” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Capitulation",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “capitulation” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Carping",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “carping” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Catalyst",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “catalyst” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Caustic",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “caustic” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Chary",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “chary” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Circumspect",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “circumspect” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Cogitate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “cogitate” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Collusion",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “collusion” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Conflate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “conflate” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Confluence",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “confluence” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Contrition",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “contrition” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Convivial",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “convivial” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Copiousness",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “copiousness” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Credence",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “credence” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Credulity",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “credulity” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Demure",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “demure” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Denigrate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “denigrate” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Desultory",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “desultory” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Diatribe",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “diatribe” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Dichotomy",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “dichotomy” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Diffident",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “diffident” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Dilatory",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “dilatory” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Discern",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “discern” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Discomfit",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “discomfit” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Disingenuous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “disingenuous” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Dispassionate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “dispassionate” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Dissonance",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “dissonance” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Docile",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “docile” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Ebullience",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “ebullience” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Efficacious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “efficacious” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Effrontery",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “effrontery” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Elegy",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “elegy” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Eloquence",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “eloquence” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Enunciate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “enunciate” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Equivocation",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “equivocation” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Eschew",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “eschew” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Evanescent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “evanescent” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Exculpate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “exculpate” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Expediency",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “expediency” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Extirpate",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “extirpate” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Facetious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “facetious” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Fallacious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “fallacious” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Felicitous",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “felicitous” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Fervor",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “fervor” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Flagitious",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “flagitious” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Florid",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “florid” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Flummox",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “flummox” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Forbearance",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “forbearance” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Fortitude",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “fortitude” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Frugality",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “frugality” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Furtiveness",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “furtiveness” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Galvanize",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “galvanize” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Garrulity",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “garrulity” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Grandiloquent",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “grandiloquent” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Gravitas",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “gravitas” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Halcyon",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “halcyon” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  },
  {
    "word": "Haphazard",
    "type": "Vocab",
    "pos": "Word",
    "meaning": "An exam-oriented English vocabulary word; learn its precise contextual meaning.",
    "hindi": "प्रतियोगी परीक्षा के लिए महत्वपूर्ण शब्द",
    "synonyms": "related meaning",
    "antonyms": "opposite meaning",
    "example": "The word “haphazard” should be learned with its context.",
    "commonMistake": "Do not guess its meaning from spelling alone.",
    "difficulty": "Advanced"
  }
];

/* ===== Application core ===== */
// KK Monitoring — consolidated application core

const EXAM_PATTERNS = {
    "SBI PO": { hasEng: true, eng: 40, qua: 30, rea: 30, max: 100, quaName: "Quantitative Aptitude" },
    "SBI Clerk": { hasEng: true, eng: 30, qua: 35, rea: 35, max: 100, quaName: "Numerical Ability" },
    "IBPS PO": { hasEng: true, eng: 30, qua: 35, rea: 35, max: 100, quaName: "Quantitative Aptitude" },
    "IBPS Clerk": { hasEng: true, eng: 30, qua: 35, rea: 35, max: 100, quaName: "Numerical Ability" },
    "IBPS RRB PO": { hasEng: false, eng: 0, qua: 40, rea: 40, max: 80, quaName: "Quantitative Aptitude" },
    "IBPS RRB Clerk": { hasEng: false, eng: 0, qua: 40, rea: 40, max: 80, quaName: "Numerical Ability" }
};
window.KK_EXAM_PATTERNS = EXAM_PATTERNS;

/* 120 Rules of Grammar — extracted from the supplied PDF. */
const grammarData = [
  {
    "title": "Rule 1: Difference between “Each” and “Every”",
    "desc": "1.They are always followed by a singular\nverb.",
    "example": "Examples:-\n(I)Each student is very talented.\n[Singular verb is used]\n(II)Each of my students is very talented.\n[Singular verb is used]\nIn sentence (I), “each” performs the function\nof Adjective (words used to describe or modify\nnouns or pronouns). The word it describes is\nthe noun “student”.\nIn sentence (II), “each” performs the\nfunction of Pronoun (word that is used instead\nof a noun or noun phrase).\nIn both the cases, we use the singular\nverb “is”.\n*NOTE: Each refers to a plural number of\npeople or items, but it considers each person or\nitem as an individual or dissimilar unit, it does\nnot consider the group collectively.\n[Individualistic Approach]\nEvery also refers to a multiple number of\npeople or items; but it considers these people or\nitems as part of a similar collective group.\n[General Approach]\n*NOTE: “Each” can play the role of both\n“Pronoun” and “Adjective”. However,\n“Every” is used as an “Adjective” only.\nExamples:-\n(I)Every student is very talented. [Correct]\n(II)Every of my students is very\ntalented. [Incorrect (X)]\nIn sentence (I), “Every” is used as an\nAdjective. The word it describes is the noun\n“student”.\nIn sentence (II), “Every” is used as a Pronoun\nwhich is incorrect.\n*NOTE: “Each” is used for two or more than\ntwo items or people but “Every” is used only\nfor more than two items or people. We cannot\nuse “every” for exactly two things (In such\ncase, “every” can be replaced by “both”).\nExamples:-\nEach person on this earth has to die one\nday. [more than two persons]\nEvery person I know has watched the\nmovie. [more than two persons]\nHe has a book in each hand. [Correct]\nHe has a book in every hand\n[Incorrect](Every cannot be used with two\nthings]\n*NOTE: \"Every\", but not \"each\", can be\nused with abstract nouns.\nExamples:-\nThey have every reason to be happy\nwith their new home. [Correct]\nThey have each reason to be happy with\ntheir new home. [Incorrect]"
  },
  {
    "title": "Rule 2: “Both” and “not” cannot be used together. In such case, we can use “Neither…nor” which is used when we want to say that two or more things are not true.",
    "desc": "",
    "example": "Examples:-\nBoth Ram and Shyam are not going to visit\nthis place. [Incorrect]\nNeither Ram nor Shyam is going to visit\nthis place. [Correct]\nThis is a war which both sides cannot\nwin. [Incorrect]\nThis is a war which neither side can win.\n[Correct]\n*NOTE: “Neither” allows us to make a\nnegative statement about two people or\nthings at the same time. “Neither” goes before\nsingular countable nouns. We use it to say\n“not either” in relation to two things."
  },
  {
    "title": "Rule 3: Usage of Relative Pronouns – who, whom, which and that.",
    "desc": "(1) “Who” and “whom” are mainly used for\npeople. However, these pronouns can also be\nused to refer to animals that are mentioned\nby name and domesticated by people (i.e.\nDomestic Animals).",
    "example": "Examples:-\nThe witnesses whom I interviewed gave\nconflicting evidence. [Used for people]\nThe people who just boarded the plane are in\na rock band. [Used for people]\nThe vacuum scared our dog Rocky, who\nwas sleeping on the rug. [Used for a pet]\n(2) “Which” is used for animals in general or\nthings (i.e. Non- domestic Animals and Non-\nliving things).\nExamples:-\nVinita visited the park with a dog, which\nlikes to chase squirrels. [Used for an animal]\nThe bomb, which killed 15 people, was the\nworst of a series of terrorist outrages. [Used\nfor a non-living thing]\n(3) “That” can be used for people, animals or\nthings (i.e. No restrictions)\nExamples:-\nThe car that Jasprit bought runs on\nelectricity and gas. [Used for a thing]\nThe musician that won the award is\nIndian. [Used for a person]\nThe dog that is chasing the squirrels\nbelongs to Brijesh. [Used for an animal]\n*NOTE: All, any, the only , the same, none,\nmuch, none , much, no, the little, the few,\nsomething, anything, nothing and superlative\ndegrees are all followed by “that” only. They\ncannot be followed by “who” or “which”\nExamples:-\nThis is the same book which you were\nreading. [Incorrect]\nThis is the same book that you were\nreading. [Correct]\nThis is the same person that I want to marry.\nHe spent up the little amount which he\nhad.[Incorrect]\nHe spent up the little amount that he had.\n[Correct]\nThis is the best that I can do for you .\n*NOTE: “Whoever” vs. “Whomever”:\n(1)Whoever is a subjective pronoun. It serves\nas a subject of a verb.\nExamples:-\nWhoever is hungry can have the leftover\npizza. (Whoever is the subject of the verb\nis, like \"He is hungry.\")\nGive the package to whoever comes for it.\n(Whoever is the subject of the verb\ncomes, like \"He comes for it.\")\nI am happy with whoever wins. (Whoever is\nthe subject of the verb wins, like \"He wins.\")\nWhoever is also correct as a subject\ncomplement, with linking verbs such as is,\nare, and will be.\nExamples:-\nWhoever it was did not leave her name.\nWhoever they are, I like their confidence.\n(2) Whomever is an objective pronoun. It\nserves as an object of a verb or a preposition.\nExamples:-\nPlease invite whomever you choose.\n(Whomever is the object of the verb choose,\nlike \"You choose him.\")\nWhomever Kate marries is none of our\nbusiness. (Whomever is the object of the\nverb marries, like \"Kate marries him.\")\nI am eager to work with whomever Dale\nselects as my partner. (Whomever is the\nobject of the verb selects, like \"Dales\nselects her.\")"
  },
  {
    "title": "Rule 4: There are three types of conditional sentences:",
    "desc": "TYPE CONDITION\nI condition possible to fulfill\nII condition in theory possible to\nfulfill\nIII condition not possible to fulfill\n(too late)\nLet’s understand their form:\nTYPE IF -\nCLAUSE\nMAIN CLAUSE\nI Simple\nPresent\nwill-future or\n(Modal + infinitive)\nshall/can/may/must\n+ V1\nII Simple Past would + V1 or,\ncould/might/should\n+ V1\nIII Past Perfect would + have + past\nparticiple (V3) or,\ncould/might/should\n+ have + past\nparticiple (V3)",
    "example": "Examples:-\nIf I study, I will pass the exam. [Type I]\nIf I studied, I would pass the exam. [Type II]\nIf I had studied, I would have passed the\nexam. [Type III]\nIf your files are in order you may/can leave\nat once.\nIf you want to lose weight you must eat less\nfat diet .\nIf I lived near my metro station I would be\nin time for work.\nIf I were you I would plant some\nsaplings round the house.\nIf we had found him earlier we could have\narrested him saved the crime.\nHad you obeyed orders this fire accident\nwould have been averted.\n*NOTE: The given rule is not applicable\nin the case of universal truth.\nExamples:-\nIf water reaches 100 degree celcius, it boils.\n[Universal truth]\nIf you heat water, it turns into vapour.\n[Universal truth]"
  },
  {
    "title": "Rule 5: The general rule for usage of the phrase \"one of the\" is:",
    "desc": "“One of the + PLURAL NOUN + that/who\netc. + SINGULAR/PLURAL VERB”\nSo, the noun following the phrase \"one of\nthe\" is always a plural noun\nThe RELATIVE PRONOUN\n(WHO/THAT/WHICH) is absolutely\ncrucial here:\n(1)When the relative pronoun “who/that” is\nnot used – i.e. if \"one of the NOUNs\" is\nactually the SUBJECT of the verb - then\nwe use a singular verb.",
    "example": "Examples:-\nThere are many birds on the tree. One of the\nbirds is red. [“One of the birds” is used as\nthe Subject]\n(2) When the relative pronoun “who/that”\nis used – i.e. if \"one of the NOUNs\" is not\nactually the SUBJECT of the verb - then we\nuse a plural verb.\nExamples:-\n(I)That is one of the birds that fly over my\nhouse at night.\n(II)She is one of the mothers who are really\nworking hard to make both ends meet.\nIn sentence (I), “that” acts as the subject for\nthe verb \"fly\", and “that” in this sentence\nrefers to birds (plural noun) and thus,\n“fly” (plural verb) is used.\nIn sentence (II), “who” acts as the subject for\nthe verb \"are\", and “who” in this sentence\nrefers to mothers (plural noun) and thus,\n“are” (plural verb) is used.\n(3)If the sentence follows the form, “The only\none of the + PLURAL NOUN + WHO/THAT\netc.”, a SINGULAR verb is required.\nExamples:-\nRina is the only one of the girls who has\never been to India. [Singular verb]\nThis is the only one of the novels which\nis interesting. [Singular verb]"
  },
  {
    "title": "Rule 6: If there is a combination of “Number + Unit + Noun” or, “Number + Unit + Adjective” in a sentence, we always use the singular form of the Unit.",
    "desc": "",
    "example": "Examples:-\nHe saw a ten inch snake. [Unit – Singular]\nShe gave me two five hundred rupee notes.\n[Unit – Singular]\n*NOTE: If there is a combination of “Number\n+ Unit” in a sentence, a singular Unit will\nbe used if the sentence is not self\nexplanatory , otherwise a plural Unit will be\nused if the sentence is self explanatory.\nExamples:-\nHe had five dozen. [Singular Unit]{ Not self\nexplanatory, hence we have used a\nsingular noun}\nI have five rupees. [Plural Unit]{Explanatory\n; hence we have used a plural noun}\n*NOTE: In a sentence, if there is more\nthan one Unit, Units are always arranged in\nascending order.\nExamples:-\nThousands of lakhs of students took the\ntest. [Units arranged in ascending order]\nNote:\nStudents take a test and teachers give a test.\n*NOTE: Use of words like “handful,\nglassful and fistful” as measuring units:\nSuch units are called arbitrary units\nSingular Plural\nHandful Handfuls\nGlassful Glassfuls\nFistful Fistfuls\nSpoonful Spoonfuls\nMouthful Mouthfuls\nCupful Cupfuls\nExamples:-\nHe pulled out a handful of coins from\nhis pocket. [Unit – Singular]\nI use two handfuls of pasta per person.\n[Unit – Plural]\nDrink a glassful of water with this medicine.\n[Unit – Singular]\nShe drank two whole glassfuls of orange\njuice. [Unit – Plural]\nHe has a fistful of acting awards. [Unit\n– Singular]\nAll of a sudden we just started having\nfistfuls of money. [Unit – Plural]"
  },
  {
    "title": "Rule 7: Expressions of time, money, speed, weight, height and distance, when used or covered in one way, usually take a Singular verb. However, when these expressions are used or covered in various ways, a Plural verb is used.",
    "desc": "",
    "example": "Examples:-\n(I)Ten miles needs to be covered\ncompletely on foot. [Singular verb]\n(II)Ten mile need to be covered partly by car\nand rest on foot. [Plural verb]\nIn sentence (I), the complete distance (i.e. ten\nmiles) has to be covered by just one means\n(i.e. on foot), thus a singular verb “needs” is\nused.\nIn sentence (II), the complete distance (i.e. ten\nmiles) has to be covered by two means (i.e. by\ncar and on foot), thus a plural verb “need” is\nused.\n(III)Five thousand rupees is his\nsalary. [Singular verb]\n(IV)Five thousand rupees were spent on\nfood and entertainment. [Plural verb]\n(V)Six weeks is not long enough. [Singular\nverb]\n(VI) Five kilograms is his weight."
  },
  {
    "title": "Rule 8: Certain cases of comparisons:",
    "desc": "",
    "example": "Examples:-\n(I)Gold is more precious than all\nmetals. [Incorrect]\n(II)Gold is more precious than any\nother metals. [Correct]\nLook at the above two examples carefully; in\nthe first sentence, “Gold” is itself a metal and\nis being compared with all metals which\ninclude even gold as a metal. Thus, at a point\nof time, the meaning of the sentence becomes\n– “Gold is more precious than gold”,\nwhich makes the sentence wrong.\nHowever, in the second case, gold is\ncompared with any other metals, which\nmeans gold is precious than any metal other\nthan gold. This makes the statement\nmeaningful and logical.\n(III)Diamond is more precious than\nall metals. [Correct]\nThe above sentence is correct as Diamond\nbeing a non-metal is compared to all metals.\n(IV)Kalidasa was more famous than\nall English poets. [Correct]\n(V)Kalidasa was more famous than all\npoets. [Incorrect]\nIn sentence (IV), Kalidasa is compared with\nall English poets, which is correct as Kalidasa\nwas not an English poet.\nHowever, in sentence (V), Kalidasa is\ncompared with all poets, which include\neven Kalidasa. This makes the sentence\nwrong or meaningless."
  },
  {
    "title": "Rule 9: Prepositions of Time: “Since” and “For”.",
    "desc": "The words “for” and “since” are used in\nsentences where the speaker wants to talk\nabout something that started in the past and\ncontinues into the present.\nThe preposition “for” is used to talk about\nan amount of time or space. The amount of\ntime could be seconds, minutes, hours, days,\nmonths or even years. The amount of time\ndoes not need to be exact.\nFor is used for “duration”\nSince is used to denote “Point of start”\nThe preposition “since” is used to refer to a\npoint of time. “Since” can refer to a point\nafter a specific time or event in the past or, it\ncan refer to a particular point beginning\nsometime in the past and continuing until\nthe present time. The particular point in\ntime could be anything – last Tuesday, 2008\nor midnight.",
    "example": "Examples:-\nHe has been here for 6 months and still\ncannot speak a word of German. [for + a\nperiod of time]\nI've only known her since the beginning of\nlast week. [since + a particular point in time]\nHe has been learning English\nsince childhood.\n*NOTE: “for” is used to specify a period of\ntime while “since” is used to specify a\nparticular point in time.\n*NOTE: Only the Perfect Tense or Perfect\nContinuous Tense is used before “since” and\n“for” when they denote time..\nExamples:-\nIt has been raining since 8 a.m. [Present\nPerfect Continuous Tense]\nI have had this watch since 1965. [Present\nPerfect Tense]\n*NOTE: “since” is always followed by “Simple\nPast” tense.\nExamples:-\nI had been waiting for him since the time I\nhad completed my graduation. [Incorrect]\nI had been waiting for him since the time I\ncompleted my graduation. [Correct]"
  },
  {
    "title": "Rule 10: When two actions occurred in past, the action which happened earlier is denoted by using Past Perfect Tense and the action which happened later is denoted by using Simple Past Tense.",
    "desc": "",
    "example": "Examples:-\nHe had finished the work after we had met\nhim. [Incorrect]\nHe finished the work after we had met\nhim. [Correct]\nThe patient died before the doctor\narrived. [Incorrect]\nThe patient had died before the doctor\narrived. [Correct]\nI finished the book after I had returned\nfrom college."
  },
  {
    "title": "Rule 11: We use a Possessive Adjective (my, our, his, her, their, your) before a Gerund.",
    "desc": "",
    "example": "Examples:-\nI hope you don’t mind me borrowing\nyour car. [Incorrect]\nI hope you don’t mind my borrowing\nyour car. [Correct]\nIn the above examples, notice that the only\ndifference is ‘me’ versus ‘my’. “My” is the\npossessive form of the pronoun ‘I’ or ‘me’.\nFor example, “my book” and “my idea” are\npossessives. The book and the idea belong\nto me.\n“Me” is the objective case of the pronoun.\nThus, the second example is correct—the\nsentence that uses the possessive “my”\nbecause we use a possessive before a Gerund\nand “borrowing” is a gerund. Here\n“borrowing” plays the role of a noun.\n“Gerund”\nas a noun\n------------> When V1+ING is used\nI know his reading every night has helped\nhim pass the test. [Possessive and Gerund –\nfocus is on reading]\nI hope you don’t mind my staying with you\nnext week. [Possessive and Gerund – focus\nis on staying]\nMy father doesn't like my going outside with\nRam."
  },
  {
    "title": "Rule 12: Law of Inversion:",
    "desc": "Inversion means putting the verb before the\nsubject. It is a literary technique in which the\nnormal order of words is reversed, generally\nfor emphasis or special effect.\nTwo types of Inversion:\n(1)Partial Inversion\n(2)Complete Inversion\nStructure of Sentence (Normal Sentence):\n“Subject + helping verb + Main verb + …”",
    "example": "Examples:-\nMy students are working very hard. [Normal\nsentence]\nI have never seen such a beautiful place.\n[Normal sentence]\nIn case of inversion, we start a sentence with\nthe helping verb instead of the Subject.\nStructure of Sentence (Inversion): “Helping\nverb + Subject + Main Verb + …”\nExamples:-\nNever have I seen such a beautiful place.\n[Inversion]\nIn the given example, inversion is used to\nemphasize the fact that in my whole lifetime\nI have not seen such a beautiful place.\nWe generally use Inversion when we begin\nthe sentence with an Adverb.\nExamples:-\nRarely did he go there. [Adverb +\nhelping verb + subject + main verb + …]\nSeldom have I seen such a beautiful view.\n[Adverb + helping verb + subject + main\nverb + …]\nConsider the above two examples, whenever\nwe begin a sentence with an Adverb, Law of\nInversion is followed, according to which\nAdverb will always be followed by a helping\nverb.\nAnd whenever the Adverb is followed by a\nhelping verb, we call that a Partial Inversion.\nIn the case of Complete Inversion, a\nmain verb is used after the Adverb.\nExamples:-\nHere comes the King! [Adverb + main verb +\n…]\nThere goes all our money! [Adverb + main\nverb + …]\n*NOTE: The case of “No sooner…than…”\nNo sooner had I entered the class when\nit began to rain. [Incorrect]\nNo sooner had I entered the class than\nit began to rain. [Correct]\nIn the above two examples, “No sooner” is\nused as an Adverb which is followed by a\nhelping verb “had”. But it is to be noted that\n“No sooner” always comes with “than” and\nnot with “when”.\n*NOTE: Some more examples:-\nHe never goes to temple. Neither she does.\n[Incorrect]\nHe never goes to temple. Neither does she.\n[Correct]\nIn the above examples, the first part of the\nsentence is complete. In the second part, the\nsentence is starting with an adverb “Neither”\nwhich will follow the law of inversion. Thus,\nthe helping verb “does” will come before the\nsubject “she”."
  },
  {
    "title": "Rule 13: Whenever we use normal places like school, college, church, bed, table, hospital, market, prison, jail, court, temple, mosque, university etc. for primary purpose (for which they are being made), the article “The” is not used before them. But when these places are used for secondary purpose, the article “The” is used before them.",
    "desc": "",
    "example": "Examples:-\nChildren go to school every day. [Primary\npurpose]\nHe goes to temple. [Primary purpose]\nHis home is just beside the temple.\n[Secondary purpose]\nWe go to church on fridays. [Correct]\nWe go to the church on fridays. [Incorrect]\nThe politician was sent to jail . [Correct]\nThe politician was sent to the jail.[Incorrect]\n*NOTE: It is important to understand the\ndifference between primary purpose and\nsecondary purpose. The primary purpose refers\nto work for which they are being made while\nsecondary purpose refers to any work other\nthan for which are they are being made.\nExamples:-\nHe goes to temple. [It means he goes there to\nworship]\nHe goes to the temple. [It means he goes\nthere to do any work other than worship]"
  },
  {
    "title": "Rule 14: Whenever adverbs like “No sooner”, “Hardly”, “Scarcely”, etc. are used in the beginning of a sentence, they are always followed by a helping verb.",
    "desc": "",
    "example": "Examples:-\nHardly had I begun to speak when I was\ninterrupted.\nScarcely had we started our meal when the\nphone rang.\nNo sooner had I arrived than they all\nstarted to argue.\n*NOTE: Note that adverbs “hardly, scarcely\nand barely” are always followed by “when”,\nwhile “No sooner” is followed by “than”."
  },
  {
    "title": "Rule 15: Use of Reflexive Pronoun as the Object of a sentence.",
    "desc": "The object of a sentence is the person or thing\nthat receives the action of the verb. It\nanswers the question “whom” or “what”?.\nThere are certain words which are always\nfollowed by an object: enjoy, avail, absent,\npride, adjust, reconcile, acquit, amuse,\nresign, avenge, exert, apply, adapt, etc.\nWhen these words are not followed by an\nobject in the sentence, we use the reflexive\npronouns as their object.",
    "example": "Examples:-\n(I)He enjoyed himself at the party. [Object]\n(II)She availed herself of the opportunity\nand thus got a promotion. [Object]\n(III)They enjoyed picture last evening.\n[Object]\n(IV)The former IPS officer acquitted himself\neffectively.\n(V)He absented himself from the class\nIn the first sentence, the reflexive pronoun\n“himself” does the function of an object. It\ncan be understood by finding the answer\nof, “He enjoyed whom?” – “himself”.\nSimilarly, in the second sentence, the word\n“availed” is followed by the object “herself”.\nHowever, in the third example, the word\n“enjoyed” is followed by the object “picture”.\nThus we do not need to put a reflexive\npronoun as its object.\n*NOTE: There are certain words which are\nnot followed by reflexive pronouns as their\nobject: “keep, stop, turn, qualify, bathe, move,\nrest, hide, etc.”\nExamples:-\nHe hid himself in the room. [Incorrect]\nHe hid in the room. [Correct]\nShe has qualified herself for the post.\n[Incorrect]\nShe has qualified for the post. [Correct]"
  },
  {
    "title": "Rule 16: There are certain words which are never followed by Reflexive pronoun: hide, keep, stop, turn, shave, bathe, etc.",
    "desc": "",
    "example": "Examples:-\nHe hid himself in the cave and thus saved\nhis life. [Incorrect]\nHe hid in the cave and thus saved his\nlife. [Correct]\nIn the given examples, we cannot use the\nword “himself” as the word “hid” is not\nfollowed by a reflexive pronoun."
  },
  {
    "title": "Rule 17: Whenever the two subjects are connected by “as well as, together with, along with, and not, in addition to, like, unlike, with, rather than, except, no less than, nothing but, more than one”, the verb agrees with the first Subject.",
    "desc": "",
    "example": "Examples:-\nJohn, as well as Mary, wants to drop the\ncourse. [Singular verb]\nRam, as well as his friends, keeps asking\nme many questions. [Singular verb]\nThe publisher, as well as the writers,\nhas come. [Singular verb]\nThe club members, along with his owner,\nwere arrested. [Incorrect]\nThe club members, along with his owner,\nwas arrested. [Correct]\nHe, and not his friends, are found\nguilty. [Incorrect]\nHe, and not his friends, is found guilty\n[correct]\nIn the given examples, the Subject prior to\n“as well as” is Singular, so a singular verb\n“wants” is used. Similarly, in the second case,\n“Ram” is a singular Subject which requires a\nsingular verb “keeps”.\n*NOTE: We follow the same rule (i.e. the verb\nagrees with the first Subject) when two\nsubjects are connected by “governed by”,\n“accompanied by”, “but”, “besides”, “led by”,\n“run by”, etc.\nExamples:-\nCalifornia, along with Florida, is among\nthe most popular US tourist destinations.\nThe teachers, along with the Principal, are\nentering the class. [Subject is plural in this\ncase]"
  },
  {
    "title": "Rule 18: Difference between Noun and Verb for similar sounding words, like (a)Advice – Noun (b)Advise – Verb (a)Practice – Noun (b)Practise – Verb (a) Belief-- Noun (b) Believe-- Verb",
    "desc": "",
    "example": "Examples:-\nI advise you to practise a lot since\npractice makes a man perfect.\nI'm quite good at tennis but I need to\npractise my serve.\nPractice makes a man perfect\nHe gave me a piece of advice\nIt is my belief that my students are very\ntalented.\nI believe my students.\n*NOTE: To locate noun in the sentence,\nwe generally try to find the answer of\n‘what’, ‘who’, or ‘whom’."
  },
  {
    "title": "Rule 19: There are three cases of pronouns The Subject Objecti Possessi Possessi cases of ive ve ve ve Persona Pronou Pronou Adjecti pronou l ns ns ves ns Pronou n First I Me My Mine person we us our ours Second You you your yours person Third She Her Her Hers person He Him His His It It Its --- They them their theirs Comparisons are usually done between the same things. So whenever we compare, we compare Subjective case to Subjective case and Objective case to objective case.",
    "desc": "",
    "example": "Examples:-\n1.My parents scold me more than he.\n[Correct]\n2.My parents scold me more than\nhim. [Correct]\n3.She is taller than me [INCORRECT]\n4.She is taller than I[Correct]\nConsider the above examples; in the first\ncase, the subjective case “my parents” is\ncompared with the subjective case “he”. If we\nelaborate the meaning of the sentence, it\nwould be – “My parents scold me more than\nhe does.”\nIn the second case, the objective case “me” is\ncompared with the objective case “him”. If\nwe elaborate the meaning of the sentence, it\nwould be – “My parents scold me more than\nthey scold him.”\nBoth sentences 1 and 2 are correct but\nthey have different meanings.\nShe likes chocolates more than me.\n[Incorrect]\nShe likes chocolates more than I. [Correct]\nIn the first sentence, we cannot compare\n“chocolates” with the objective case “me”.\nChocolates cannot be compared with\na person.\nSo “me” is wrong\nHowever, the second sentence compares a\nsubjective case with another subjective case.\nShe is compared to I\nHence it is correct.\nHe is as tall as I. [Correct]\nHe speaks more frequently than she[Correct]\nIn the above examples, there is no object, so\nwe cannot use an objective case."
  },
  {
    "title": "Rule 20: Who vs. Whom?",
    "desc": "“Who” is used as a subjective pronoun, and\n“Whom” is used as an objective pronoun.\nThat simply means that “who” is always as a\nsubject to a verb, and that “whom” is always\nworking as an object in a sentence. As simple\nand important as that distinction is, many\npeople have difficulty deciding on the proper\nusage of “who” and “whom” in sentences.\nTo clear this doubt, simply substitute the\npersonal pronoun “he/him” or “she/her”\nfor “who/whom.” If he or she would be the\ncorrect form, the proper choice is “who”. If\n“him” or “her” would be correct, use\n“whom.”",
    "example": "Examples:-\nMrs. Dixit consulted an astrologer whom\nshe met in Sonpur. [She met him in Sonpur.]\nJack is the man whom I went fishing with last\nspring. [I went fishing with him.]\nJyoti is the girl who got the job. [She got the\njob.]\nWhom can we turn to in a time of crisis? [Can\nwe turn to her?]\nThe delegates differed as to who they\nthought might win. [Not “whom”. Here the\nentire clause is the object of the preposition.\nSubstitution is particularly helpful in cases\nsuch as this. They thought he might win.]\nSome more examples:-\nShe is one of the professors who I think is\na mathematician.\nHe is the man whom everyone admires.\nShe met the people who they say are helping\nall aspirants.\nThey hired the man whom we interviewed\nlast week."
  },
  {
    "title": "Rule 21: Certain words like “separation, excuse, mention, favour, pardon, leave, report, sight, etc.” do not take Possessive case before them.",
    "desc": "",
    "example": "Examples:-\nYour separation pains me a lot and I become\nsad. [Incorrect]\nSeparation from you pains me a lot and\nI become sad. [Correct]\nConsider the above two examples; in the first\ncase, we cannot use “your” with “separation”\nas “your” is a Possessive Adjective.\nHowever, the first sentence can be\nrewritten to make it grammatically feasible\nwithout altering its meaning, as can be seen\nin the second sentence.\nI want your favour, will you please help me?\n[Incorrect]\nI want favour from you, will you please help\nme? [Correct]\nThe first sentence is grammatically incorrect\nas we cannot use “your favour”. However it\ncan be written as “favour from you”, as in the\nsecond sentence.\nHis mention in the story received great\napplause from audience. [Incorrect]\nMention of him in the story received\ngreat applause from audience. [Correct]\nThe first sentence is grammatically incorrect\nas we cannot use “His mention” as “his” is\nalso a Possessive Adjective.\nHowever, the first sentence can be rewritten\nto make it grammatically correct without\naltering its meaning, as can be seen in\nthe second sentence.\nAt his sight the robbers fled. [Incorrect]\nAt the sight of him, the robbers fled. [Correct]\n*NOTE: Possessive Case: your, his, her, my,\ntheir, our, its, etc."
  },
  {
    "title": "Rule 22: We use “each other” and “one another” to show that each person in a group of two or more people does something to the others. There is very little difference between each other and one another. “Each other” is generally used for two people while “one another” is used for more than two people.",
    "desc": "",
    "example": "Examples:-\nAll citizens should love each other.\n[Incorrect]\nAll citizens should love one other. [Correct]\nIn the first sentence, “all citizens” refer to\nmore than two people. So, “each other”\nshould be replaced by “one another”, as\nin the case of second sentence.\nPeter and Mary helped each other. [Peter\nhelped Mary and Mary helped Peter]\nWe sent one other Christmas cards. [We sent\nthem a Christmas card and they sent us a\nChristmas card]\n*NOTE: Difference between “other” and\n“another”:\nOther is an adjective meaning 'different' or\n'the second of two items'. Other can be used\nwith singular or plural nouns. Other can also\nbe a pronoun to refer to things or people. The\nplural form is others.\nHowever, When we use ‘an’ before ‘other’,\nwe write it as one word: another. It means\n'additional' or 'one more'. Another can be\nused before a plural noun when that noun is\npreceded by a number, or words/phrases\nsuch as a couple of, few etc.\nExamples:-\nSome children learn quickly but\nother children need more time.\nHave you got any other questions?\nOnly half of the guests have arrived. Where\nare the others? [Plural]\nThis cake is delicious. Could I have another\nslice please?\nThe investigation will take another two\nweeks/couple of weeks. [Plural]\nThis place isn’t great. Is there another place\nwe could go to? [Another can also mean ‘an\nalternative’ or ‘different’]"
  },
  {
    "title": "Rule 23: The use of “Seldom or never”:",
    "desc": "The word “Seldom” is an Adverb and when a\nsentence begins with “seldom”, the law of\ninversion will be followed.",
    "example": "Examples:-\n(I)Seldom or never he comes to my house.\n[Incorrect]\n(II)Seldom or ever he comes to my house.\n[Incorrect]\n(III)Seldom, if ever does he come to my house.\n[Correct]\n(IV)Seldom or never does he come to my\nhouse. [Correct]\n*NOTE: We can either use “Seldom or never”\nor “Seldom, if ever”, but we cannot use\n“Seldom or ever”.\n*NOTE: The use of phrase “Little\nor nothing”:\nThe phrase “Little or nothing” means “Hardly\nanything”. In this case also, we can either use\n“Little or nothing” or “Little, if everything”,\nbut we cannot use “Little or everything”.\nExamples:-\nI can find little or nothing on this table.\n[Correct]\nI can find little, if anything on this table\n[Correct]\nI can find little if nothing on this table.\n[Incorrect]\nI can find little or anything on this table.\n[Incorrect]"
  },
  {
    "title": "Rule 24: Whenever we use “very” with Superlative degree, article “the” is always used before “very” i.e. “the very superlative”.",
    "desc": "“Very” modifies present participle used as\nadjective, adverb and adjective in positive\ndegree.\nEg. It is a very interesting novel.\nHowever, when we use “much” with\nSuperlative degree, article “the” is used\nbefore the superlative i.e. “much the\nsuperlative”.\n“Much” is used with comparative degree\nand past participle.\nEg. He is much interested.\nHe is much smarter.",
    "example": "Examples:-\nHe is the much best student of my class.\n[Incorrect]\nHe is very the best student of my class.\n[Incorrect]\nHe is the very best student of my class.\n[Correct]{ It means really}\nHe is much the best student of my class.\n[Correct]{It means decidedly}\nHe is much smarter than all other students.\n[Correct]\nI was very exhausted after the\nmatch. [Correct]"
  },
  {
    "title": "Rule 25: The use of “Enough”:",
    "desc": "“Enough” plays the role of both Adverb and\nAdjective. When it is used as an Adverb, it\nqualifies an adjective, verb, or other adverb\nor a word group. When it is used as an\nAdjective, it qualifies a noun or a pronoun.\nWhen “enough” plays the role of an\nAdjective, “enough” is placed before the\nnoun or pronoun i.e. “enough noun”.\nWhen “enough” plays the role of an\nAdverb, “enough” is placed after the\nadjective i.e. “adjective enough”.",
    "example": "Examples:-\nHe has enough sugar. [Used as an Adjective]\nShe is smart enough. [Used as an Adverb]\nOn neither of those trips was there enough\nsun to get any decent photographs. [Used\nas an Adjective]\nTest reports indicate that it develops enough\npower for the job and is flexible. [Used as an\nAdjective]\nYou are not big enough for basketball.\n[Used as an Adverb]\nA landing between the ground and first\nfloors is ample enough to be used as a study.\n[Used as an Adverb]"
  },
  {
    "title": "Rule 26: The use of Adverb “as”:",
    "desc": "“as” can be used as an adverb with these\ngiven words – “treat, define, regard, describe,\nrespect,depict, portray,view, know, etc.”\nHowever, “as” cannot be used as an adverb\nwith these two words – “elect, name, think,\nconsider, call, make, choose, appoint, etc.”",
    "example": "Examples:-\nBiology is defined as the science of\nliving beings.\nHe is regarded as God in India.\nShe described Gary as shy.\nHis latest film is described as a\n'romantic comedy'.\nShe is treated as a child.\nShe was elected Chair of the Board of\nGovernors.\nHe has just been appointed director of the\npublishing division.\nHe thinks her a fool.\nThe teacher called him stupid."
  },
  {
    "title": "Rule 27: The use of Conjunction “although”:",
    "desc": "“Although”, meaning “in spite of something”,\nis a subordinating conjunction. This means\nthat the clause which it introduces is a\nsubordinate clause, which needs a main\nclause to make it complete. Sometimes\n“although” as a subordinate clause may take\n“yet” in the main clause. However,\n“although” as a subordinate clause never\ntakes “but” in the main clause.\nYet is optional. It can or cannot be used.",
    "example": "Examples:-\nAlthough she is rich, she thinks twice\nbefore spending a penny. [Correct]\nAlthough she is rich, yet she thinks twice\nbefore spending a penny. [Correct]\nAlthough she is rich, but she thinks twice\nbefore spending a penny. [Incorrect]"
  },
  {
    "title": "Rule 28: There are certain verbs which do not exist in “-ing” form.",
    "desc": "These are:\nPOSSESSI PERCEPTI FEELING\nON ON\nOwn See Love\nBelong Smell Know\nHave Taste Think\nInclude Hear Hate\nPossess Feel Want\nOwe Appear Need\nContain Seem Desire\nCompromis Resemble Wish\ne\nNotice Like\nConsist",
    "example": "Examples:-\nI am owning a car. [Incorrect]\nI own a car. [Correct]\nI am loving it. [Incorrect]\nI love it. [Correct]\nThis sauce is tasting strange. [Incorrect]\nThis sauce tastes strange. [Correct]\nThis perfume is smelling like roses.\n[Incorrect]\nThis perfume smells like roses. [Correct]\nShe has always been hating jazz. [Incorrect]\nShe has always hated jazz. [Correct]\nAll the luggage is belonging to me. [Incorrect]\nAll the luggage belongs to me. [Correct]\n*NOTE: Sometimes the word “loving” is\nused as an adjective, which should not be\nconfused with a verb.\nExamples:-\nHe is a very loving person. [Used as an\nAdjective]\nHe described his work in loving detail.\n[Used as an Adjective]\n*NOTE: When “have” is used in the sense of\npossession or belongingness or ownership, we\ncannot use “having”. However, apart from\nthis, we can use “having” as perfect participle\nor in other cases.\nExamples:-\n(I)I am having a book. [Incorrect]\n(II)I have a book. [Correct]\n(III)I am having lunch now. [Correct]\n(IV)Having done the work, he went to play.\n[Correct]\nIn sentence (I), “have” denotes possession,\nso we cannot use “having” and it should be\nreplaced by “have” as rightly done in\nsentence (II).\nIn sentences (III) and (IV), “have” is not used\nin the sense of possession or belongingness or\nownership, thus “having” is correctly used\nin these two sentences."
  },
  {
    "title": "Rule 29: There are certain words which are always used in Perfect Tense: “ever, never, yet, already, now, just now, until, now, always, occasionally, often, lately, recently, so far, upto now, upto the present”",
    "desc": "",
    "example": "Examples:-\nThe concert had already begun by the time we\narrived. [Correct]\nI went to Paris last summer. Have you ever\nbeen there? [Correct]\nI have not spoken to her yet. [Correct]\nHe has gone just now. [Correct]\nHe went there already. [Incorrect]\nHe had gone there already. [Correct]\nAman completed his work upto now\n. [Incorrect]\nAman has not completed his work upto now .\n[Correct]\nThe train already left. [Incorrect]\nThe train has already left. [Correct]"
  },
  {
    "title": "Rule 30: Subject-Verb Agreement with Collective Nouns:",
    "desc": "When a collective noun denotes that the\nwhole group is working together on the\nsame task, we use a singular verb.",
    "example": "Examples:-\nThe audience is watching the movie. [every\naudience is watching together]\nThe army is marching towards the\nHimalayas. [whole army (personnel) is\nmoving together]\nThe jury is taking a decision. [all the members\nof the jury is taking decision together]\nWhen a collective noun denotes that the\nwhole group is working on different tasks,\nwe use a plural verb.\nExamples:-\nThe audience are taking the seats.\nThe army are changing their dresses.\nThe jury are divided in their opinion.\n*NOTE: Words like “police, vermin,\ncattle,clergy,gentry,poultry,folk,peasantry,\npeople, infantry, cavalry, etc.” are “plural\nnouns” and not “collective nouns”. Plural\nnoun always takes a plural verb.\nSo these words always take plural verbs.\nExamples:-\nThe police are investigating the case.\nCattle are wandering in the farm.\nPeople want to attain all worldly pleasures..\n*NOTE: Sometimes the word “people” is\nused in the meaning of “a country” instead\nof “persons”, in that case we use a singular\nverb.Peoples means countries or people\nbelonging to different nationalities.\n“Peoples” in that case is correct."
  },
  {
    "title": "Rule 31: There are certain words which are always followed by the preposition “to”.",
    "desc": "These are:\nPrefer Superior Inferior\nInjurious Junior Ancillary\nAddicted Senior Exterior\nKnown Ulterior Posterior\n*NOTE: Any word suffixed with “-ior” will\nalways be followed by the preposition “to”.",
    "example": "Examples:-\nFor babies, breastfeeding is superior to\nbottle-feeding.\nToo much alcohol is injurious to your health.\nWould you prefer to pay by cash, cheque,\nor credit card?\nThey promoted a man who was junior to\nme and made him my boss.\nParagraph 19 was merely ancillary to\nparagraph 16.\nI prefer tea to coffee.\n*NOTE: The words “marry” and “known”\nare always followed by the preposition “to”\nin the Passive voice.\nExamples:-\nRama is married to Sita.\nI am known to him.\nI am known by him.--------> Incorrect"
  },
  {
    "title": "Rule 32: The use of phrase “as… as” and “so… as”:",
    "desc": "These blanks are filled up with the adjectives\nof positive degree.",
    "example": "Examples:-\nIf we pass on the information, he's as good\nas dead.\nI'm not so desperate as to agree to that.\n*NOTE: “as… as” can be used to denote both\npositive and negative sentences while “so…\nas” can only be used only to denote negative\nsentences.\nExamples:-\nHe is as good as Ram. [Correct]\nHe is not as good as Ram. [Correct]\nHe is not so good as Ram. [Correct]\nHe is so good as Ram. [Incorrect]"
  },
  {
    "title": "Rule 33: In a sentence depicting comparison, whenever the word “times” comes up, it is never followed by a comparative degree.",
    "desc": "",
    "example": "Examples:-\n(I)This book is three times larger than that\nbook. [Incorrect]\n(II)This book is three times heavier than\nthat book. [Incorrect]\n(III)It is twice cheaper than that.\n[Correct]{Times is not written , hence it\nis correct}\n(IV)This book is three times as large as that\nbook. [Correct]\n(V)It is twice costlier than that. [Correct]\n(VI)It is two times as costly as that. [Correct]\nIn sentence (I), the word “times” and the\ncomparative degree “larger” cannot be used\ntogether. The sentence should be rewritten\neither as sentence (IV) to make it\ngrammatically correct.\nIn sentences (III) and (V), there is no use of\nthe word “times” and thus we can use the\ncomparative degree to bring up the\ncomparisons."
  },
  {
    "title": "Rule 34: Some common errors of NARRATION:",
    "desc": "Indirect Speech is always a statement.\nStructure of a statement\nSubject + Helping Verb + Main Verb\n+.............\nStructure of a question\nWh word + Helping verb + Subject + Main\nVerb +...............\nHence a helping verb comes after a subject in\nthe case of a statement and before a subject\nin the case of a question.",
    "example": "Examples:-\nHe asked me where are you going. [Incorrect]\nHe asked me where I was going. [Correct]\nHe asked me what was my name. [Incorrect]\nHe asked me what my name was. [Correct]\nShe says that she is a little bit nervous. [Direct\nspeech was an Assertive sentence]\nThe teacher ordered me to shut the door.\n[Direct speech was an Imperative sentence]\nHe exclaimed with great joy that he had won\nthe match. [Direct speech was an\nExclamatory sentence]\nWe asked him if he was ill. [Direct speech was\nan Interrogative sentence]\nHe prayed that I might live long. [Direct\nspeech was an Optative sentence]\nShe wished she had been rich. [Direct\nspeech was an Optative sentence]\nBut, all the indirect speeches are\nalways statements."
  },
  {
    "title": "Rule 35: If two subjects are connected by the words \"or,\" \"nor,\" \"neither/nor,\" \"either/or,\" or \"not only/but also\", we use the verb according to the nearest subject.",
    "desc": "",
    "example": "Examples:-\nEither the bears or the lion has escaped from\nthe zoo. [Nearest subject “lion” is singular]\nNeither the lion nor the bears have escaped\nfrom the zoo. [Nearest subject “bears” is\nplural]\nNot only the teachers but also the Principal is\nhappy. [Nearest subject “Principal” is\nsingular]\nNot only dogs but also cats are available at\nthe animal shelter. [Nearest subject “cats” is\nplural]"
  },
  {
    "title": "Rule 36: Comparison between two qualities of an object:",
    "desc": "Whenever two qualities of an object are\ncompared, we always use the word\n“more”. We don’t use comparative degree\nin that case.",
    "example": "Examples:-\nThis pen is redder than white. [Incorrect]\nThis book is heavier than larger. [Incorrect]\nThis shirt is more white than red. [Correct]\nThis umbrella is more beautiful than\nstrong. [Correct]"
  },
  {
    "title": "Rule 37: Whenever “more than one” or “many a” is used to quantify a noun, it is always followed by a singular noun and a singular verb.",
    "desc": "And whenever “Many, A good many, A great\nmany” are used to quantify a noun, they are\nalways followed by a plural noun and a\nplural verb.",
    "example": "Example:-\nA great many devotees are protesting to\nbuild ram mandir .\nMany tigers are missing from the national\npark.\nStructure:\nMore than one + singular noun +\nsingular verb\nMany a + singular noun + singular verb\nA great many + plural noun + plural verb\nA good many + plural noun + plural verb\nExamples:-\nMore than one student is absent today.\n[Singular verb]\nMany a student is absent today.\n[Singular verb]\n*NOTE: Also consider the\nfollowing examples:\nOne student is absent today. [Singular verb]\nA great many students are absent today.\n[Plural verb]\nMany students are absent today. [Plural\nverb]"
  },
  {
    "title": "Rule 38: Whenever we get the word “doubt” or “doubtful” in a sentence, we use the connector either “if” or “whether”. However, in case we get the words “no doubt” and “not doubtful”, we use the connector “that”.",
    "desc": "",
    "example": "Examples:-\nI have no doubt whether it will rain or\nnot. [Incorrect]\nI have no doubt that it will rain or\nnot. [Correct]\nThere is a doubt that he goes there or\nnot. [Incorrect]\nThere is a doubt whether he goes there or not.\n[Correct]\nHe has no doubt if Shyam is his best\nfriend. [Incorrect]\nHe has no doubt that Shyam is his best\nfriend. [Correct]"
  },
  {
    "title": "Rule 39: NARRATION, Sequence of Tenses:",
    "desc": "The tense of the verb does not change even if\nthe Reporting verb is in past tense for the\nfollowing cases:\n(1)Universal truth:",
    "example": "Examples:-\n(I)He told me that honey was sweet.\n[Incorrect]\n(II)He told me that honey is sweet. [Correct]\n(III)He told me that the honey is\nsweet. [Incorrect]\n(IV)He told me that the honey was\nsweet. [Correct]\nIn sentence (I), the sentence is incorrect\nbecause “honey is sweet” is a universal\ntruth and should be written in Simple\nPresent Tense in indirect speech as well.\nThis makes the statement (II) correct.\nIn sentence (III), the sentence is incorrect\nbecause “the honey is sweet” is not a\nuniversal truth as “the honey” denotes a\nparticular type of honey. Thus, the indirect\nstatement should follow the tense form of\nmain clause as correctly done in\nstatement (IV).\n*NOTE: Sequence of Tenses suggests that if\nthe principal clause of the sentence is in Past\nTense, subordinate clause will also be in the\nPast Tense.\n(2)Historical Facts:\nExamples:-\nThe teacher said, “Kalidas is the\nShakespeare of India.” [Direct Speech]\nThe teacher said that Kalidas is the\nShakespeare of India. [Indirect Speech]\n(3)Proverbs:\nExamples:-\nRohit said, “Where there is a will there is a\nway.” [Direct Speech]\nRohit said that where there is a will there is\na way. [Indirect Speech]\n(4)Habitual Facts:\nExamples:-\nHe said, “I snooze my alarm every day.”\n[Direct Speech]\nHe said that he snoozes his alarm every day.\n[Indirect Speech]"
  },
  {
    "title": "Rule 40: Use of little, the little and a little:",
    "desc": "We use these quantifiers with uncountable\nnouns according to their following meanings:\n(1)Little: Hardly any\n(2)A little: Some but not much\n(3)The little: All that is available",
    "example": "Examples:-\nI cannot make tea since there is little milk.\n[Hardly any milk]\nA little knowledge is dangerous. [ Some but\nnot much]\nHe utilized the little water that was available.\n[ All that is available]\n*NOTE: Use of few, a few and the few:\nWe use these quantifiers with countable\nnouns according to their following meanings:\n(1)Few: Hardly any\n(2)A few: Some but not many (It has\na positive meaning)\n(3)The few: All that are available\nExamples:-\nFew members attended the meeting.\n[Hardly any member attended the meeting.]\nThere were a few members present. [Some\nmembers were present.]\nHe lost the few friends he had. [All those\nhe had]\n*NOTE: Use of some and any:\nThe general rule is that “any” is used for\nquestions and negative sentences while\n“some” is used for positive sentences.\nBoth may be used with countable\nand uncountable nouns.\nExamples:-\nDo we need any rice?\nNo, we don’t need any rice.\nWe have some rice in the cupboard.\nWould you like some water?\nMay I have some more chocolate?\nBut in some cases “Some” is used\nwith interrogative sentences\nWhen we know that the answer will be\nyes, we can use “some” .\nEg. Do you have some water???\nIt is correct because we know already\nthat the answer will be yes."
  },
  {
    "title": "Rule 41: Objective Case of the pronoun comes after the Preposition.",
    "desc": "SUBJECTIVE OBJECTIVE\nCASE CASE\nI me\nWe us\nYou you\nThey them\nHe him\nShe her\nIt it",
    "example": "Examples:-\nNone but he is going to the party. [Incorrect]\nNone but him is going to the party. [Correct]\nAll except he liked the performance.\n[Incorrect]\nAll except him liked the\nperformance. [Correct]\nIn the first sentence, “but” plays the role of\npreposition, so it must be followed by a\npronoun of objective case. Similarly, “except”\nin the third sentence is a preposition which\nshould be followed by the pronoun of\nobjective case.\n*NOTE: “But” plays the role of both\n“Conjunction” and “Preposition”.\nVerb is also followed by the pronoun\nof Objective case.\nExamples:-\nLet him do that work. [“Let” acts as a\nverb here]\nThey agreed to let us live there rent-\nfree. [“Let” acts as a verb here]\nSome more examples:-\nRam as well as he is going to the party.\n[Correct]\nThere is good friendship between you and\nhim. [Correct]\nIt is to be noted that in the first sentence, “as\nwell as” is not used as a preposition, so the\nsubjective case “he” is correctly used.\nIn the second sentence, “between” is a\npreposition so objective case is used after it."
  },
  {
    "title": "Rule 42: (1) In case of pronouns as the Subject, when all the three persons are used as the Subject of the sentence and are connected by ‘and’, the sequence of 231 of the Pronouns is followed if they give a Positive Sense to the sentence and a plural verb is used.",
    "desc": "We use 2nd person, then 3rd person is\nused and finally 1st person is used.\n1 Speaker I\nFirst Person\n2 Listener You\nSecond\nPerson\n3 Non Active He\nThird\nPerson",
    "example": "Examples:-\nYou, he and I are good friends. [the sequence\nof 231 of the pronouns]\n(2) In case of pronouns as the Subject, when\nonly two persons are used as the Subject of\nthe sentence and are connected by ‘and’, the\nsequence of (2,3); (2,1); (3,1) of the Pronouns\nis followed if they give a Positive Sense to the\nsentence and a plural verb is used.\nExamples:-\nYou and she are good friends. [the sequence\nof (2,3) of the pronouns]\nYou and I are playing chess. [the sequence\nof (2,1) of the pronouns]\nHe and I were watching T.V. [the sequence\nof (3,1) of the pronouns]\n(3) In case of pronouns as the Subject,\nwhen all the three persons are used as the\nSubject of the sentence and are connected\nby ‘and’, the sequence of 123 of the\nPronouns is followed if they give a Negative\nSense to the sentence and a plural verb is\nused.They generally talk about some\nmistake,blame or guilt.\nExamples:-\nI, you and he are guilty. [the sequence of 123\nof the pronouns]\nI, you and he are robbers. [the sequence\nof 123 of the pronouns]\n(4) In case of pronouns as the Subject, when\nonly two persons are used as the Subject of\nthe sentence and are connected by ‘and’, the\nsequence of (1,2); (2,3); (1,3) of the Pronouns\nis followed if they give a Negative Sense to\nthe sentence and a plural verb is used.\nExamples:-\nI and you have committed a crime. [the\nsequence of (1,2) of the pronouns]\nYou and he are sinners. [the sequence of\n(2,3) of the pronouns]\nI and he were guilty. [the sequence of (1,3) of\nthe pronouns]\nIf all the pronouns are plural , we use\nthe order 123 in all cases.\nWe, you and they are going to watch a movie."
  },
  {
    "title": "Rule 43: Some Superfluousness Errors:",
    "desc": "Superfluousness means that more than\nrequired is given in the sentence. It\nmeans extra.\nConsider these examples:-\n(I)India broke all previous records in\ntoday’s match. [Incorrect]\nThe above sentence is Superfluous as\n“records” always specifies “previous”. Using\nthem together makes the statement\nsuperfluous. It should be rewritten as –\nIndia broke all records in today’s\nmatch. [Correct]\n(II)I want wet water. [Incorrect]\nWater is already wet and we all know it.\nHence this sentence contains extra words and\nsuperfluousness error is there.\nI want water. [Correct]\nIn the above example, “water” is always\n“wet”, so we cannot use these two words\ntogether as it will give us the superfluous\nmeaning.\n(III) Suppose if you won the Oscar, what\nwould you do? [Incorrect]\nSuppose you won the Oscar, what would you\ndo? [Correct]\nIn the above example, the usage of 'if' with\n'suppose' is superfluous. Hence, either\n'suppose' or 'if' should be used.\n*NOTE: Use of “supposing if”: “If” is not\nneeded with “supposing”. It's a wrong\nusage. Use only “supposing”.\n(IV) The army retreated back from the\nconflict zone in Kashmir. [Incorrect]\nThe army retreated from the conflict zone in\nKashmir. [Correct]\nAgain in the above example, 'back' won't be\nused here. 'Retreat' itself means – to\nwithdraw, retire etc. We use only “retreat”.\n(V) The sage was reborn again in\nVijayanagara. [Incorrect]\nThe sage was reborn in\nVijayanagara. [Correct]\n*NOTE: Never use 'again' after verbs like –\nRebirth/Reborn/rebuild/regain/reiterate/recast\netc.\n(VI) Manu is equally as good as Sharma.\n[Incorrect]\nManu and Sharma are equally good.\n[Correct]\nManu is as good as Sharma. [Correct]\nIn the above example, the usage of 'as'\nshould strictly be discarded. Use only\n'equally' or 'as good as' separately.\n(VII) The manager and the chairman decided\non a mutual agreement on profit. [Incorrect]\nThe manager and the chairman decided\non an agreement on profit. [Correct]\nIn this case the usage of 'mutual' is wrong.\nHence, use only 'agreement'.\n“Agreement” is always mutual.\n*NOTE: 'Mutual friend' is wrong to say.\nInstead we can say 'common friend'.\nLikewise, we should say – 'common\ninterest' instead 'mutual interest'.\n(VIII) She forbade me not to leave her alone.\n[Incorrect]\nShe forbade me to leave her alone. [Correct]\nIn the above example, ‘Not' is never used\nafter\nuntil/unless/forbid/prohibit/prevent/dissuade/d\neny/refuse/lest.\n(IX) He's a coward man/person. [Incorrect]\nHe is a coward. [Correct]\nThe usage of 'coward man' is wrong because\n‘coward’ itself means a person who lacks\ncourage. Hence, the use of 'man' is illogical.\n(X) She left the house with bag and baggage.\n[Incorrect]\nShe left the house, bag and baggage. [Correct]\n'Bag and baggage' is an idiom which means\n'with all belongings'. Hence, using ‘with’\nwith the idiom is wrong.\n(XI) Passing marks are thirty three.\n[Incorrect]\nPass marks are thirty three. [Correct]\nThe usage of 'passing marks'/'linking\nlanguage'/'linking network'/'dressing sense’ is\nwrong. Instead, we should use 'pass\nmarks'/'link language'/'link network'/'dress\nsense'.\n(XII) I suddenly came across him on the\ntrain. [Incorrect]\nI came across him on the train. [Correct]\nIn the above example, Omit 'suddenly' as\n'come across' means to meet suddenly.\nSome more superfluous errors:\n(1)final destination. [Destination is\nalways final]\n(2)rough estimate. [Estimate is always rough]\n(3)rough approximation. [Approximation\nis always rough; not exact]\n(4)past history. [History is always past]\n(5)return back. [Return itself means\ncome back]\n(6)coming future. [Future is always coming]\n(7)reason because. [Reason itself means cause\nso]\n(8)consensus opinion. [Consensus itself\nmeans collective opinion or agreement]\n(9)final conclusion. [Conclusion is\nalways final]\n(10)Funeral service. [Funeral itself a\nceremony and service]\n*NOTE: “enter into” is also an example of\nsuperfluous error. However, when “enter into”\nis used as a phrasal verb, it means\n“investigation”.",
    "example": ""
  },
  {
    "title": "Rule 44: Use of Apostrophe (‘s):",
    "desc": "Apostrophe (‘s) is not used with non-living\nthings.",
    "example": "Examples:-\nTable’s legs. [Incorrect]\nDoor’s bolt. [Incorrect]\nPen’s ink. [Incorrect]\nBook’s page. [Incorrect]\nChair’s legs. [Incorrect]\nThese can be rewritten as:\nLegs of the table. [Correct]\nBolt of the door. [Correct]\nInk of the pen. [Correct]\nPage of the book. [Correct]\nLegs of the chair. [Correct]\n*NOTE: There are some exceptions to this\nrule. When we talk about time,\nweight,distance,place, idiom, unit,\npersonification, or heavenly body, we can\nuse Apostrophe (‘s) with them.\nExamples:-\nOne week’s vacation. [Correct]\nFour dollars’ worth. [Correct]\nToday's date. [Correct]\nThe ship's bells. [Correct]\nThe city's parks. [Correct]\nMalaysia's land. [Correct]\nNature’s call [Correct]\nAt stone’s throw[ Correct]\n*NOTE: The following pronouns are already\npossessive and do not require apostrophes:\nyours, ours, its, theirs, his, hers, and whose."
  },
  {
    "title": "Rule 45: Whenever a point of time in the past is mentioned in the sentence (i.e.",
    "desc": "yesterday, 10 days ago, etc.), we always use\n“Simple Past” tense.",
    "example": "Examples:-\nI have gone to the market yesterday to\npurchase a car. [Incorrect]\nI went to the market yesterday to purchase a\ncar. [Correct]\nThe company's shares have dived by 90p\nto 165p on the stock market last week.\n[Incorrect]\nThe company's shares dived by 90p to 165p\non the stock market last week. [Correct]"
  },
  {
    "title": "Rule 46: There are certain words like “unique, excellent, perfect, ideal, entire, complete, etc.” which are never used with “most”.",
    "desc": "The table is as follows\nchief round uniqu total whole singul\ne ar\nRecta squar excelle Spher extre annua\nngula e nt ical me l\nr\ngolde deaf blind right Empt circul\nn y ar\nWron impos perfec Entire extern ideal\ng sible t al\nsolar Perfec Comp\nt lete",
    "example": "Examples:-\nHe is the most excellent student. [Incorrect]\nHe is an excellent student. [Correct]\nThis is the most unique product of\nour company. [Incorrect]\nThis is a unique product of our\ncompany. [Correct]\nHe is completely perfect. [Incorrect]\nHe is perfect. [Correct]\nI think you’re the most perfect person I’ve\never met. [Correct]"
  },
  {
    "title": "Rule 47: Words like “Quite” and “all” are never used together in a sentence.",
    "desc": "",
    "example": "Examples:-\nHe is quite all well. [Incorrect]\nHe is quite well. [Correct]\nHe has done quite all the work. [Incorrect]\nHe has done all the work. [Correct]\n*NOTE: Do not get confused with the similar\nsounding words like “Quiet” and “Quite”.\nQuiet is a Noun which means the state\nof being silent.\nQuite is an Adverb which means completely."
  },
  {
    "title": "Rule 48: Determination of tense based on words like “ago” and “before”:",
    "desc": "We generally use Simple Past Tense when the\nword “ago” is mentioned in the sentence.\nIn the case of “before”, we use Past\nPerfect Tense.",
    "example": "Examples:-\nHe had gone two seconds ago. [Incorrect]\nHe went two seconds ago. [Correct]\nShe had submitted the work five hours\nago. [Incorrect]\nShe submitted the work five hours ago.\n[Correct]\nThe patient died before the doctor came.\n[Incorrect]\nThe patient had died before the doctor\ncame. [Correct]\nIn the last sentence, two actions have\nhappened in the past, so for the earlier\naction we use “had + V3” and for the latter\naction we use “V2”."
  },
  {
    "title": "Rule 49: Use of Possessive sign:",
    "desc": "(1)Common Possession: When two nouns are\nclosely connected or implying the common\npossession, the possessive sign is put to\nthe latter(last one).",
    "example": "Examples:-\n1.Ram and Shyam’s car is being decorated\nfor Balram’s marriage. [Correct]\n2.Ram and Shyam’s cars are being\ndecorated for Balram’s\nmarriage. [Correct]\nBoth the sentences are correct\nIn the first sentence, there is one car which\nbelongs to both Ram and Shyam\n[Common Possession]\nIn the second sentence, there is more than\none car which belongs to both Ram and\nShyam [Common Possession]\n(2)Split Possession: Each of two or more\nconnected nouns implying separate\npossession must take the possessive sign.\nExamples:-\nRam’s and Shyam’s car is being decorated for\nBalram’s marriage. [Incorrect]\nRam’s and Shyam’s cars are being\ndecorated for Balram’s marriage. [Correct]\nIn the above examples, the possessive sign\nwith each subject denotes that at least two\ncars are being decorated one of Ram and\nother of Shyam (i.e. Ram’s car and Shyam’s\ncar), so a plural noun “cars” is used and it\nwill take a plural verb."
  },
  {
    "title": "Rule 50: Some common errors of Possession:",
    "desc": "We often make mistake by using “it’s” in\nplace of “its”. Both these terms have separate\nmeanings.\n“It’s” denotes “It is”, while “its”\ndenotes possession.",
    "example": "Examples:-\nThe child is carrying it’s book. [Incorrect]\nThe child is carrying its book. [Correct]\nIts called a miracle. [Incorrect]\nIt’s called a miracle. [Correct]"
  },
  {
    "title": "Rule 51: Rule for using “A number of” and “The number of”:",
    "desc": "We use the following structures with these\ntwo:\n“A number of + Plural Noun + Plural Verb”\n“The number of + Plural Noun + Singular\nVerb”\nSimilar rule is there for “A variety of”\nand “The variety of”",
    "example": "Examples:-\nA number of students are waiting here.\nThe number of students is fifty.\nA number of tickets were sold almost\nimmediately.\nThe number of employees taking legal action\nover work-related disease is increasing."
  },
  {
    "title": "Rule 52: Use of the phrase “It is time” , “It is high time” or “It is about time”:",
    "desc": "With the phrases like “It is time” and “It is\nhigh time”, we follow either of the two\nconditions:\n(1)The phrase should be followed by “to +\nV1” if there is no Subject attached to it.",
    "example": "Examples:-\nIt is time to work hard.\nIt is time to ask for a raise.\n(2)If the phrase is directly followed by a\nSubject, we use the verb form “V2” (past\ntense) after the subject.\nExamples:-\nIt is time he worked hard. [followed by the\nsubject “he”]\nGosh! It’s almost midnight. It is time we\nwent home. [followed by the subject “we”]\n*NOTE: We use the expression “it’s time +\nsubject + past verb form” to refer to the present\nmoment."
  },
  {
    "title": "Rule 53: Use of preposition with the word “Angry”:",
    "desc": "(1)We use the preposition “with” with\n“angry” whenever we refer a person or living\nthing for the purpose.",
    "example": "Examples:-\nI got really angry with her.\nI am angry with Shyam because he did not go\nto the class.\n(2)We use the preposition “at” with\n“angry” whenever we refer something other\nthan person or living thing.\nExamples:-\nThe local residents were angry at the lack of\nparking spaces.\nThey are angry at the way they have been\ntreated.\n*NOTE: We follow the same rule with word\n“Annoy”."
  },
  {
    "title": "Rule 54: Whenever the word “know” is used in a sentence, it is not directly followed by the infinitive “to”. We use the words like “how, when, why, where, etc.” to make the sentence grammatically feasible.",
    "desc": "",
    "example": "Examples:-\nI do not know what all the fuss is about.\nI do not know how to make tea; hence\nyou should help me out.\nI don't know to make tea [Incorrect]\nDo you know where the Post Office is?"
  },
  {
    "title": "Rule 55: The adverb “else” is always followed by “but” while the adverbs “other, and rather” are always followed by “than”.",
    "desc": "",
    "example": "Examples:-\nIt is nothing else but mere foolishness.\nEverybody else has agreed but you.\nHe met no other person than Ram.\nI think I would rather stay at home\nthis evening than go out."
  },
  {
    "title": "Rule 56: The words like “sort, type, kind, etc.” are always followed by a Singular verb.",
    "desc": "",
    "example": "Examples:-\nThis type of articles is sold in the market.\nThis sort of camera is very expensive.\nAny kind of racism is abhorrent to me."
  },
  {
    "title": "Rule 57: Use of the prepositions “in”, “Inside” and “into”:",
    "desc": "(1)The preposition “inside” implies\n“movement”. Whenever we move from\noutside to inside, we use “inside”.",
    "example": "Examples:-\nI came inside the class.\nHe tried to get inside her mind.\n*NOTE: “Inside out” is completely different\nfrom “In” and “Inside”. It means if something\nis inside out, it has the usual inside part on the\noutside and the usual outside part on the\ninside.\nThere is one more meaning of “Inside out”\nwhich is “completely”\nExamples:-\nI know my husband inside out. [completely]\nShe had her sweater on inside out.\n(2)The preposition “in” implies “static”.\nWhenever something referred is\nalready inside, we use “in”.\nExamples:-\nI am in the class.\nThe chlorine in the pool makes my eyes sore.\n(3)The preposition “into” implies “coming\ntoward something”. Whenever we move to a\nposition in or inside something, we use “into”.\nIt is also used to show a change in state.\nExamples:-\nCome into the house.\nHe threw the letter into the fire.\nCan you translate this passage into German?\nThe fruit can be made into jam.\nHe jumped into the well.\nShe wove her ideas into a story."
  },
  {
    "title": "Rule 58: Use of the prepositions “with” and “by”.",
    "desc": "(1)We use “with” when we refer non-living\nthings.",
    "example": "Examples:-\nWe write with a pen. [Pen being a non-\nliving thing]\nShe wiped her lipstick off with a tissue.\n[Tissue being a non-living thing]\nHe hit the dog with a stick. [Stick being a non-\nliving thing]\n(2) We use “by” when we refer living things.\nExamples:-\nThe motorcycle was driven by a tiny\nbald man.\nThe book was translated by a well-known\nauthor.\nAny painting by Van Gogh is worth a fortune.\n*NOTE: Whenever we talk about “watch”,\nwe use “by”.\nWhat is the time by your watch? [ In your\nwatch in incorrect]\nExamples:-\nShe had promised to be back by five o'clock.\n[referring time]\nI have got to be home by seven. [referring\ntime]"
  },
  {
    "title": "Rule 59: We do not use the preposition “from” with the word “start”.",
    "desc": "",
    "example": "Examples:-\nMy exams start from Monday. [Incorrect]\nMy exams start on Monday. [Correct]\nIn the first sentence, the preposition “from”\ngives the meaning that my exams will start on\nMonday, it will again start on Tuesday and it\nwill continue doing so. Thus, an event started\nonce cannot start again and again. To avoid\nthis error, we use the correct preposition\n“on” which implies that event has started on\nMonday only.\nSome more examples:-\nHe will start his preparation from Monday.\n[Incorrect]\nHe will start his preparation on\nMonday. [Correct]\nHowever, we can rewrite this sentence\nusing “from” this way:-\nHe will prepare for the exams from Monday.\n[Correct]\n*NOTE: “from” implies continuation."
  },
  {
    "title": "Rule 60: In a general case of infinitive we always use the form “To + V1”. But in certain special cases, we use the form “To + V1+ing”.",
    "desc": "There are certain words which always follow\n“To + V1+ing” form:-\n(1)be + used + to + V1+ing\n(2)accustomed to + V1+ing\n(3)addicted to + V1+ing\n(4)with a view to + V1+ing\n(5)look forward to + V1+ing\n(6)given to + V1+ing\n(7)prone to + V1+ing\n(8)devoted to + V1+ing\n(9)in addition to + V1+ing\n(10)confess to\n(11)disposed to\n(12)come to",
    "example": "Examples:-\nShe was given to staying in bed till lunchtime.\nThese measures have been taken with a view\nto increasing the company's profits.\nI look forward to hearing from you.\nHe is rather prone to making tactless\nremarks.\nShe has devoted herself to getting justice for\nher son.\nI am not accustomed to being treated like this.\n*NOTE: When we use the form “V1+ing” as\na noun, it is called Gerund."
  },
  {
    "title": "Rule 61: The choice between the two indefinite articles – ‘a’ & ‘an’ – is determined by sound. Words beginning with consonant sounds are preceded by ‘a’ and words beginning with vowel sounds are preceded by ‘an’.",
    "desc": "Vowels – a, e, i, o, and u\nConsonants – b, c, d, f, … z",
    "example": "Examples:-\nAn NCC cadet. [Vowel sounding word]\nA UNICEF participating nation.\n[Consonant sounding word]\nAn umbrella. [Vowel sounding word]\nAn M. Tech. graduate. [Vowel\nsounding word]\nA utensil. [Consonant sounding word]\nA university. [Consonant sounding word]\nA unicorn. [Consonant sounding word]\nA year. [exception][With every word that\nstarts with “y” and “w” we use article “a”]\nA European university\nA Universit\ny A Uniform\nA one-rupee note\nA Union\nA one-eyed girl\nA unanimous decision."
  },
  {
    "title": "Rule 62: Usage of definite ARTICLE “The”:",
    "desc": "(1)Series of Mountains, Bays/Gulfs,Group of\nislands, Canals, Aeroplanes, Ships, Planes,\nReligious books, Government branches,\nArmed forces, Names of Deserts,Political\nparties, Musical instrument, Rivers, Oceans,\nSeas, and things which are “unique” in\nthemselves: These nouns are always preceded\nby a definite article “The”.",
    "example": "Examples:-\nThe Sahara. [Name of Desert]\nThe Pacific. [Name of Ocean]\nThe Nile. [Name of river]\nThe Coral sea. [Name of sea]\nThe Himalayas. [Name of mountain range]\nThe Guitar [Musical Instrument]\nOne important point to note is that\nNames of mountain ranges are preceded by\narticle “THE” but mountains peaks are never\npreceded by article “the”\nThe Himalayas is correct but the Mount\nEverest is wrong. We only use “Everest”\n(2)Names of Newspaper: These nouns are\nalways preceded by a definite article “The”.\nExamples:-\nThe Times of India.\nThe Hindu.\nThe Indian Express.\n(3)Names of Countries (Only the ones which\nare written in Abbreviated forms): These\nnouns are always preceded by a definite\narticle “The”.\nExamples:-\nThe USA.\nThe UK.\nThe UAE.\nThe USSR.\n(4)Superlative Degree: The nouns of\nsuperlative degree are always preceded by a\ndefinite article “The”.\nExamples:-\nThe best book.\nThe darkest cloud.\n(5)Comparative Case: “The” is used in two\ncases:\nCASE 1: The higher you go, the cooler it is.\nThe faster you walk, the sooner you reach.\nThe more sugar you put in the\ndish, the sweeter it is.\nCASE2: He is the better of the two.\nShe is the poorer of the two women\nHe is the better candidate of the two for the job\n(6)Metaphor: Sometimes “the” is used before\na metaphor.\nIn case of a metaphor one thing is treated\nas another thing.\nExamples:-\nHe is the Mahatma Gandhi of our class.\nDelhi is the Paris of India.\n(7) For a phrase which is combination of\na common and proper noun, the’ is used.\nExamples:-\nThe river Nile,\nThe Muslim League Party,\nThe New York City,\n(8) ‘The’ is mandatory before a thing which is\nonly one of a kind in the universe.\nExamples:-\nThe moon is shining tonight.\nThe earth is moving around the sun.\n(9) For the names of the government\norganizations, ‘the’ is used.\nExamples:-\nThe Society for the protection of Child’s\nRights\nThe judiciary is composed of a supreme court\nof seven members, a court of chancery, a\ncounty court in each county, a probate court\nin each probate district, and justices of the\npeace."
  },
  {
    "title": "Rule 63: Omission of Article “The”: We do not use any article before following nouns:",
    "desc": "(1)Names of Cities: Los Angeles, Alaska,\nSydney, etc.\n(2)Names of Countries: (except names of\ncountries with abbreviated form) Australia,\nBolivia, England, France, Spain, etc.\n(3)Names of continents: Asia, Europe,\nAustralia, Africa, South America, North\nAmerica, Antarctica.\n(4)Names of streets: George Street,\nAlbion Street, New town Street, etc.\n(5)Names of singular lakes and bays: Lake\nCarey, Lake Eyre, Lake Hillier, Shark\nBay, etc.\n(6)Names of Mountain Peaks: Mount\nEverest, Mount Solitary, Mount Bindo,\nMount Fuji, etc.\n(7) Names of single islands: Easter Island,\nBare Island, Bird Island, Fatima Island, etc.\n(8)Names of languages: Spanish, Russian,\nEnglish (When ‘the’ precedes these nouns,\nthey refer to the population of\nthose languages.)\n(9)Names of sports: cricket,\nfootball, basketball, etc.\n(10)In normal cases, we do not use any\narticle before these words – season, language,\ndrinks, meals, God, life, money, etc.\nHowever, when we use these words to\nparticularize the information, we use the\narticle “the”.",
    "example": "Examples:-\nBreakfast should be light but the breakfast\nI had this morning was heavy. [The second\ntime “breakfast” is used , The article is used\nbefore it as it refers to a particular breakfast]"
  },
  {
    "title": "Rule 64: Use of “the + Adjective”:",
    "desc": "Whenever the article “the” is used before an\nadjective, it determines the whole group.",
    "example": "Examples:-\nThe poor – poor people\nThe needy – needy people\nThe brave-- brave people\nThe rich--- Rich people\nThe honest are respected. [‘The’+ ‘adjectives’\n= Plural noun]It means Honest people\nThe poor are not always dishonest. [‘The’+\n‘adjectives’ = Plural noun] It means poor\npeople"
  },
  {
    "title": "Rule 65: Whenever same nouns are connected by preposition, in that case we use both the nouns in singular form.",
    "desc": "",
    "example": "Examples:-\nVillages after villages were destroyed by\nthe terrorists. [Incorrect]\nVillage after village were destroyed by\nthe terrorists. [Correct]\nBooks after books had been read by him.\n[Incorrect]\nBook after book had been read by\nhim. [Correct]\nCity after city was set on fire.\nPage after page was reviewed multiple times."
  },
  {
    "title": "Rule 66: Certain nouns whose plurals should be known:",
    "desc": "Singular Plural Singular Plural\nDormouse Dormice Man Men\nFoot Feet Mouse Mice\nGoose Geese Tooth Teeth\nLouse Lice Woman Women\nSingular Plural\nDaughter-in-law Daughters-in-law\nHanger-on Hangers-on\nCommander-in-chief Commanders-in-chief\nSister-in-law Sisters-in-law\nPasser-by Passers-by\nLooker-on Lookers-on\nBrother-in-law Brothers-in-law\nExamples where the second word forms\nthe plural :\nSingular Plural\nBook-case Books-case\nClass-fellow Class-fellows\nRace-horse Race-horses\nStep-son Steps-son\nCastaway Castaways\nGrand-father Grand-fathers\nHorse-race Horse races\nMaidservant Maidservants\nExamples where both words make the plural\n:\nSingular Plural\nMan-servant Men-servants\nWoman-servant Women-servants\nLord-justice Lords-justices\nThe plural of some compound nouns\nare below:\nSingular Plural\nSon-in-law Sons-in-law\nBrother-in-law Brothers-in-law\nPasser-by Passers-by\nMajor General Major Generals\nLord-Justice Lord-Justices\nMan-servant Men-servants\n*NOTE: To show possession in case of\nCompound Nouns, we always use apostrophe\n(‘s) at the end.",
    "example": "Examples:-\nSister-in-law’s car. [Possession of\nCompound Noun]"
  },
  {
    "title": "Rule 67: Whenever “male” or “female” is used before a noun, it means that we are describing its characteristics.",
    "desc": "",
    "example": "Examples:-\nFemale watch [means the watches\nspecified for females]\nFemale doctor [means the doctors specified\nfor females]\nMale shoes [means the shoes specified\nfor males]\nBut whenever we use “man” or “woman”\nis used before a noun, it means that we are\ndescribing the profession or post of that\nnoun.\nExamples:-\nMan soldier [means the soldier is a man]\nWoman student [means the student is woman]\nWoman doctor [means the doctor is woman]\nSome more examples:-\nShe went to a female doctor. [Correct]\nRaj went to a female doctor to get himself\ntreated. [Incorrect]\nRaj went to a woman doctor to get himself\ntreated. [Correct]"
  },
  {
    "title": "Rule 68: Antecedent Rule:",
    "desc": "The noun or pronoun that comes just before\na Relative pronoun is called an Antecedent.",
    "example": "Examples:-\nRam met him who they say has helped us.\n[“him” in this case is an Antecedent]\nHe saw her whom everyone admires.\n[“her” in this case is an Antecedent]\n*NOTE: When there is no antecedent in a\nsentence, we use “whoever, whomever, etc.” as\nrelative pronouns.\nExamples:-\nRam met whoever they has helped us.\n[No Antecedent in the sentence]\nHe saw whomever everyone admires.\n[No Antecedent in the sentence]"
  },
  {
    "title": "Rule 69: Rule of Question tags:",
    "desc": "A small question is added at the end of a\nstatement. This is called Question Tag.\nA question tag for a positive statement\nis always negative and vice-versa.",
    "example": "Examples:-\nHe has worked very hard on this project,\nhasn’t he? [Negative question tag for a\npositive statement]\nHe has not worked hard on this project, has\nhe? [Positive question tag for a negative\nstatement]"
  },
  {
    "title": "Rule 70: Some typical errors related to the above rule.",
    "desc": "",
    "example": "Examples:-\nI am working very hard for my\nstudents, amn’t I? [Incorrect]\nI am working very hard for my\nstudents, aren’t I? [Correct]\nI am getting better at this, aren't I? [Correct]\nThe first sentence is incorrect because there is\nno such word “amn’t”. It should be written as\n“aren’t I” which means “am I not”."
  },
  {
    "title": "Rule 71: Certain words like “Seldom, barely, hardly, scarcely, never” often define a negative meaning to the statement, thus these should be followed by a positive question tag.",
    "desc": "",
    "example": "Examples:-\nHe seldom comes to my house, does he?\n[Positive question tag for a negative\nstatement]\nThey have barely enough to pay the rent this\nmonth, have they? [Positive question tag for a\nnegative statement]\nI never realized you knew my brother, did I?\n[Positive question tag for a negative\nstatement]\nWe hardly ever go to concerts, do\nwe? [Positive question tag for a\nnegative statement]\nI seldom drive my car into the city, do\nI? [Positive question tag for a negative\nstatement]\nI scarcely registered the fact that he was\nthere, did I? [Positive question tag for a\nnegative statement]"
  },
  {
    "title": "Rule 72: It is important to note that question tag statement must be in same tense as the main statement.",
    "desc": "",
    "example": "Examples:-\nI am doing the work which you gave\nme, don’t I? [Incorrect]\nI am doing the work which you gave\nme, aren’t I? [Correct]\nThe first statement is incorrect as the\nmain statement is in Present Continuous\nTense which the question tag statement\ndoesn’t follow."
  },
  {
    "title": "Rule 73: When we use “Each or Every” in a sentence, a singular noun or pronoun is followed which is further followed by a singular verb. But in the case of question tag, noun (or, pronoun) following “Each or Every” is considered plural and thus we use plural verb in question tag statement.",
    "desc": "",
    "example": "Examples:-\nEvery girl is very talented, isn’t she?\n[Incorrect]\nEvery girl is very talented, aren’t they?\n[Correct]\nEach one has to work hard to make\nboth ends meet, hasn’t he? [Incorrect]\nEach one has to work hard to make\nboth ends meet, haven’t they? [Correct]"
  },
  {
    "title": "Rule 74: When a collective noun is used in the main statement and depicting all its units are working together on the same thing or all are behaving similarly, we consider everything to be singular.",
    "desc": "However, if all the units are working on\ndifferent things, we consider everything to be\nplural.",
    "example": "Examples:-\nThe jury has taken the decision, hasn’t it?\n[Only one decision is taken]\nThe audience took the seats, didn’t they?\n[Audience took their respective seats]\nThe army changed the uniforms, didn’t they?\n[Army changed their respective uniforms]"
  },
  {
    "title": "Rule 75: When we talk about Imperative Sentences and that also when we talk about proposals, in that case we always use “shall we” in question tag statement.",
    "desc": "",
    "example": "Examples:-\nLet us go for a walk, don’t we? [Incorrect]\nLet us go for a walk, shall we? [Correct]\nLet us consider all the possibilities, shall we?\n[Correct]\nLet us hear from Sue at our travel desk, shall\nwe? [Correct]\nLet us go out to dinner, shall we? [Correct]"
  },
  {
    "title": "Rule 76: Use of the Prepositions “in, on, and at”:",
    "desc": "‘In’ refers to town, cities, and countries in a\nwider sense while [ In Delhi, in Dubai, in\nSaudi Arabia ]\n‘At’ is used for speaking of comparatively\nsmaller place. [ at Rohini in Delhi, at\nLaxminagar ]\nCONCEPT:-\nPreposition “in” implies Area/Volume.\nPreposition “on” implies Surface.\nPreposition “at” implies Point.\nBased on the above concept, we use these\nprepositions in following order:\nPoint of time < day < month <\nyear At < on < in < in\nThe above order can be understood by\nthis way as well:\nSince “point” is smaller than “surface” which\nin turn is smaller than “volume”, we follow\nthe order of these prepositions in the same\nmanner.",
    "example": "Examples:-\nAt 4 pm.\nOn Sunday.\nIn 1947.\nOn 15\nth\nAugust.\nIn April.\nAt night.\nIn the morning.\nThere's a meeting at 2.30 this afternoon.\nAre you free at lunchtime?\nHair salons don't usually open on Sundays.\nMy birthday is on 30 May.\nI started working here in 2009.\nWe are going to Italy in April.\nBye, see you in the morning.\n*NOTE: There are certain words before\nwhich we don’t use any preposition like “last\nMonday, coming Monday, today, tomorrow,\nyesterday, etc.”\nExamples:-\nI am having dinner with Rachel tomorrow\nnight.\nI saw her yesterday afternoon.\nI have a checklist of things that I must\ndo today.\nThe weather forecast said it would be\nfine and dry coming Monday."
  },
  {
    "title": "Rule 77: The conjunction “Both” is always followed by “and” and not “as well as”.",
    "desc": "",
    "example": "Examples:-\nBoth Ram as well as Shyam are good at\nEnglish. [Incorrect]\nBoth Ram and Shyam are good at\nEnglish. [Correct]\nBoth men as well as women have complained\nabout the advertisement. [Incorrect]\nBoth men and women have complained\nabout the advertisement. [Correct]\nI felt both happy as well as sad at the\nsame time. [Incorrect]\nI felt both happy and sad at the same\ntime. [Correct]\n*NOTE: The word “good” is always followed\nby the preposition “at”.\nExamples:-\nShe is very good at geography.\nRohan is good at football."
  },
  {
    "title": "Rule 78: Use of the conjunction “Lest”:",
    "desc": "Lest means otherwise.\nThe conjunction “lest” is always followed\neither by the verb “should” or no helping\nverb at all.",
    "example": "Examples:-\nWork hard, lest you would fail. [Incorrect]\nWork hard, lest you fail. [Correct]\nWork hard, lest you should fail. [Correct]\nHe cut the remark out of the final program\nlest it should offend listeners. [Correct]"
  },
  {
    "title": "Rule 79: Use of “Until” and “Unless”:",
    "desc": "CONCEPT:-\nUntil – Time Oriented\nUnless – Action Oriented",
    "example": "Examples:-\nWait for me until sunset. [referring Time]\nUnless the government reduces the tax, the\ntax-payer base will not increase. [referring\nAction]\nI was up until three o'clock trying to get it\nfinished! [referring Time]\nUnless you call me to say you're not coming, I\nwill see you at the theatre. [referring Action]\n*NOTE: There is no difference in meaning\nbetween “till” and “until” as both mean “up to\n(the time that)”. However, we cannot use “till”\nat the beginning of the sentence which is not\nthere with the case of “until”.\nExamples:-\nUntil your next birthday, you will have to\nwait for a new bike.\nWe did not eat till past midnight."
  },
  {
    "title": "Rule 80: Error of Parallelism:",
    "desc": "The rule of Parallelism explains that sentence\nelements that are alike in function should\nalso be alike in construction. These elements\nshould be in the same grammatical form so\nthat they are parallel.\nHere are some examples of parallel elements:\n(I)Words: thinking, running, etc.\n(II)Infinitives: to see, to understand, etc.\n(III)Prepositional phrases: at the time, in the\nhouse, etc.\n(IV)Subordinate clauses: because I care, after\nthey met, etc.\n(V)Linking words: not only…but also…,\neither…or…, neither…or…, if…then…, etc.\n(VI)Nouns: honesty, originality,\ngoodness, etc.\n(VII)Adjectives: charming,\ncourteous, beautiful, etc.",
    "example": "Examples:-\nI like singing, dancing, and to walk.\n[Incorrect]\nI like singing, dancing, and walking. [Correct]\nHe asked his mother to cook, to rest and\nprepare the dish. [Incorrect]\nHe asked his mother to cook, to rest and\nto prepare the dish. [Correct]\nMy friends never judged me by my words\nor what I did. [Incorrect]\nMy friends never judged me by my words\nor my actions. [Correct]\nThe teacher not only wants his students to\nkeep quiet but also to do the task. [Incorrect]\nThe teacher wants his students not only to\nkeep quiet but also to do the task. [Correct]\nI like to read books over watching\nmovies. [Incorrect]\nI like reading books over watching movies.\n[Correct]\nI would rather pay for my education\nthan financial aid. [Incorrect]\nI would rather pay for my education\nthan receive financial aid. [Correct]\nTom is known for his honesty and\noriginal ideas. [Incorrect]\nTom is known for his honesty and originality.\n[Correct]\nTo learn is understanding the world.\n[Incorrect]\nTo learn is to understand the world. [Correct]\nThis task can be done individually, in pairs,\nor can be done in groups of four. [Incorrect]\nThis task can be done individually, in\npairs, or in groups of four. [Correct]"
  },
  {
    "title": "Rule 81: Use of proper Prepositions:",
    "desc": "It is important to use exact prepositions after\nthe words.",
    "example": "Examples:-\nHe is superior to and older than me.\nThis book is different from and better\nthan that book.\nIn the first example, the word “superior” is\nfollowed by the preposition “to” and\n“older” is followed by “than”.\nSimilarly, in the second case, the word\n“different” is followed by “from” and\n“better” is followed by “than”.\nSome more examples:-\nNobody seems to have responsibility for\nthe budget.\nWhat’s the reason for your unhappiness?\nChanges in society have meant that\nyoung people leave home earlier.\nThere’s been a steady increase in the value\nof the euro.\nGo to our website to get the address of your\nnearest branch.\nMy reaction to it all was to try to forget it.\nHer response to the criticism was very strong.\n18 is the age at which you are allowed to vote.\nFisk is making his third attempt at the world\nrecord.\nThe police inquiry into the theft continues.\nShe did some research into the causes of\nback pain.\nThis is an example of international\ncollaboration.\nWe need to find another way of doing things.\nHer response to the criticism was very strong.\nI saw an advertisement for a teaching job\nin Malawi which looked interesting.\nThere is a growing awareness of the impact of\nclimate change among the young.\nCongratulations on your new job!\nI’d like to do a course in computer\nprogramming if I could find a good one.\nDo you have any previous experience of\nworking with children?\nHe seems to have less interest in everything\nthese days.\nCan you give us some information on/about\nbus tours, please?\nThe invitation to the reception at the embassy\narrived the next day.\nHe has an amazing knowledge of European\nhistory.\nCan anyone become a member of your book\nclub?\nI was a newcomer to windsurfing so I\nwas very nervous.\nI’d love to show you some of the nice places in\nmy hometown.\nThe visit to the temple was the high point\nof the holiday.\nI need some lessons in how to set up\na website.\nChanges in our diet have meant that more\nand more people suffer heart disease.\n[Changes that happen]\nThe director of studies must be informed of\nany changes to the timetable. [Changes that\npeople purposely make]"
  },
  {
    "title": "Rule 82: Use of “too much” and “much too”:",
    "desc": "We use “much” and “too” together in two\nways:\n(1)too much – we use “too much” as\nan Adjective.\n(2)much too – we use “much too” as\nan Adverb.\n“MUCH” indicates a big quantity of an\nuncountable substance or element (one that\nyou can't count).\nIf the quantity becomes too big, much is\npreceded by “TOO”: TOO MUCH +\nuncountable noun = an excessive quantity.\nAnother construction describing an excessive\nquantity is less frequent and is built with an\nadjective: = MUCH TOO + ADJECTIVE\nIn this construction, ‘MUCH’ has played\nthe function of ‘increasing’, amplifying the\nadverb ‘too'; it is equivalent to ‘far too\nheavy’.",
    "example": "Examples:-\nHe is too much strong. [Incorrect]\nHe is much too strong. [Correct]\nThere is much too sugar. [Incorrect]\nThere is too much sugar. [Correct]\nIn the above examples, it is to be noted that\n“strong” is an Adjective and “sugar” is a\nNoun. Thus, we use the Adjective “too\nmuch” with the noun.\nSome more examples:-\nHe drank too much alcohol last night,\nand this morning he feels ill. [Too much\nis an adjective here ]\nToo much work and not enough play make\nJack a dull boy. [Too much is an adjective\nhere]\nThis car is much too expensive for me\nto buy[Much too is an adverb here]\nThis case is much too heavy; you can't carry\nit![Much too is an adverb here]"
  },
  {
    "title": "Rule 83: Possessive Case is always followed by a Noun.",
    "desc": "",
    "example": "Examples:-\nHis belongings were lost. [Correct]\nHis earnings are not enough. [Correct]\nHis surroundings are not clean. [Correct]\nIn the above examples, all three word\nfollowing the possessive case “his” -\n“belongings, earnings, and surroundings” are\nnouns\nSome more examples of nouns which are\nalways plural are\nRiches ,premises, spectacles, Bowels,\nValuables, Proceeds, Alms, Billiards,\nMovables, Wages, Thanks, Annals, Measles,\nTrousers, Goods, Socks, Fetters, Shorts,\nPantaloons, Tidings, Mumps, Eatables,\nScissors, Stockings,\nSurroundings,Breeches, Arms, Tongs”\n*NOTE: Some Verbs play the role of\nNouns, just by adding ‘s’ at the end.\nExamples:-\nVERB NOUN\nBelong Belongings\nEarning Earnings\nSurrounding Surroundings\nSome more examples:-\nAll his goods were sold at throw away prices.\nSpectacles have been broken\nKindly give me a pair of scissors."
  },
  {
    "title": "Rule 84: Use of the word “Politics”:",
    "desc": "When the word “Politics” is considered as\na field or a subject, it is used as singular.\nWhen the word “Politics” is considered as\na set of political beliefs, it is used as plural.",
    "example": "Examples:-\nPolitics is a very dirty game.\nHis politics are different from mine.\nIn the first example, “politics” is used as a\nwhole field, so it requires a singular verb. In\nthe second example, “politics” is used as\npolitical beliefs, thus it requires a plural verb.\nSome more examples:-\nHer politics have become more liberal over\nthe past few years.\nHis politics are generally considered to be\nright of centre.\nPolitics is the main subject at Leicester\nUniversity.\nJoe is very active in left-wing politics."
  },
  {
    "title": "Rule 85: Usage of “Mathematics” and “Statistics”:",
    "desc": "When these two words are used as a field or a\nsubject, we consider them uncountable nouns\nand thus a singular verb is used.\nHowever, when the meaning of the word\n“Mathematics” is “Calculation” and\n“Statistics” is “Data”, we use plural verb in\nboth the cases.",
    "example": "Examples:-\nMathematics is an interesting subject. [Used\nas a subject]\nMathematics are telling that he has made a lot\nof money. [Here it means “calculations”]\nStatistics is difficult to understand. [Used as a\nsubject]\nStatistics tell us that it will rain today. [Here it\nmeans “data”]\n*NOTE: The word “Data” is plural. The\nsingular form of “Data” is “Datum”.\nExamples:-\nData warns us and we will have to change\nour strategy. [Incorrect]\nData warn us and we will have to change\nour strategy. [Correct]\n*NOTE: The word “Summons” is a singular\nnoun but “Summon” is a verb. The plural\nform of “Summons” is “Summonses”.\nExamples:-\nTwo summons were issued. [Incorrect]\nTwo summonses were issued. [Correct]"
  },
  {
    "title": "Rule 86: We use the article “A” when we mean “One of many” and the article “The” when we mean “only one”. Moreover, we use the article “A” with the possessive case and “The” with the objective case.",
    "desc": "",
    "example": "Examples:-\nThe brother of me is a scientist. [Objective\ncase]\nA brother of mine is a scientist. [Possessive\ncase]\nIn the first sentence, “The brother of me”\nsuggests that there is only one brother. In the\nsecond example, “A brother of mine”\nsuggests that there are many brothers.\nSome more examples:-\nA servant of theirs lives in Delhi.\nThe servant of them lives in Delhi.\n*NOTE: We can rewrite these phrases:\nMy car – The car of me\nMy brother – The brother of me\nOne of my brothers – A brother of mine"
  },
  {
    "title": "Rule 87: Usage of “too”, “as well” and “also”:",
    "desc": "When we have to denote some extra thing in\na sentence, we use these three words. It is to\nbe noted that “also” cannot be used at the\nend of the sentence. However, “too” and “as\nwell as” can be used at the end of the\nsentence.",
    "example": "Examples:-\nI have brought a bag too. [Correct]\nI have brought a bag as well. [Correct]\nI have brought a bag also. {Incorrect]\nI have also brought a bag. [Correct]\n*NOTE: In normal cases, “too” and “so” are\nused to give negative sense to the sentence.\nWhen we use “too” with the meaning of\n“addition”, we can use it at the end. However,\nwhen we use “too” with the meaning of “high\nintensity”, we cannot use it alone.\nShe is too beautiful. [Incorrect because\nthe sentence is incomplete]\nShe is very beautiful. [Correct]\nIt is too hot to go outside. [Correct]\nIt is so hot that I cannot go outside. [Correct]\nThe question was too difficult to solve.\n[Correct]"
  },
  {
    "title": "Rule 88: Optative Sentences:",
    "desc": "The sentence which expresses a prayer, keen\nwish, curse etc. is called an optative\nsentence. This kind of sentence generally\nstarts with ‘may’ and ‘wish’. Sometimes,\n‘may’ remains hidden.\nIn the case of optative sentences, whether the\nsubject is singular or plural, we use the base\nform of the verb (i.e. V1).",
    "example": "Examples:-\nMay God bless you!\nLong live the king.\nMay the almighty help in this tragedy!\nWish you a happy journey together."
  },
  {
    "title": "Rule 89: Pseudo Subjects:",
    "desc": "When in a sentence, irrespective of the\npresence of main subject, we have to talk\nabout something which is not related to the\nmain subject, in that case we use “pseudo\nsubject”.",
    "example": "Examples:-\nBeing a rainy day, I did not go to school.\n[Incorrect]\nIt being a rainy day, I did not go to\nschool. [Correct]\nIn the above example, there is no Subject of\n“rainy day”, “I” is the main Subject and has\nno relation with “rainy day”. So to add a\nSubject, we use “It” as a Pseudo Subject.\nBeing ill, he did not come to class. [Correct]\nIn the above example, there is no need of\npseudo subject as “ill” in the first part\nrefers to the main subject “he”.\nBeing vacant, I did not enter the room.\n[Incorrect]\nIt being vacant, I did not enter the room.\n[Correct]\nIn the above example, there is no subject of\n“vacant” which has no relation with the\nmain subject “I”, thus we need a Pseudo\nsubject “It” to make the sentence\ngrammatically correct."
  },
  {
    "title": "Rule 90: Whenever infinitive (to + V1) in a sentence talks about a noun, it is always followed by a preposition.",
    "desc": "",
    "example": "Examples:-\nThe child has no bed to sleep in. [Infinitive is\nused to talk about the noun “bed”]\nI have a pen to write with. [Infinitive is used\nto talk about the noun “pen”]\nThe child wanted a toy to play with.\n[Infinitive is used to talk about the\nnoun “toy”]"
  },
  {
    "title": "Rule 91: When two different helping verbs are required in a sentence, we always use the main verb in both the cases.",
    "desc": "",
    "example": "Examples:-\nI have never and will never watch this movie.\n[Incorrect]\nI have never watched and will never\nwatch this movie. [Correct]"
  },
  {
    "title": "Rule 92: Certain words like “belongings, savings, congratulations, scissors, proceeds, surroundings, regards, pliers, tongs, jeans, pyjamas, pantaloons, shorts, contents, outskirts, glasses, clothes, thanks, goggles, premises, surroundings, belongings, earnings, earrings, tidings etc.” are considered Plural, so they always take plural verbs.",
    "desc": "",
    "example": "Examples:-\nHis regards were conveyed to his parents.\nAll proceeds from the auction are donated to\ncharity.\nHis belongings were lost.\nThese scissors are for cutting paper.\nYour clothes are dirty.\nHave you seen my glasses? I want to read the\nnewspaper.\nThe table of contents should not contain\nany pictures.\nI live on the outskirts of the city.\nMy trousers are dirty. I need to wash them.\nHer thanks were clearly sincere.\nIf your clothes are wet you can dry them\nupstairs.\nAre those your belongings?\nI would like two glasses of orange juice\nplease.\nPass me that pair of pliers, please.\nYou can get rid of that old pair\nof headphones.\nMy spectacles have been broken.\nKindly give me a pair of scissors.\nRiches have wings ."
  },
  {
    "title": "Rule 93: Certain words like “Mathematics, Physics, Statistics, News, Economics, Innings, Politics, Athletics, Gymnastics, Gallows, Mechanics, Summons, Classics etc.” are always considered Singular and thus they always require singular verbs.",
    "desc": "(a) Mathematics are difficult\nsubject. [Incorrect]\nMathematics is a difficult subject. [Correct]\n(b) Politics are a game of\ncompromise. [Incorrect]\nPolitics is a game of compromise. [Correct]\n(c)These news were broadcast from All India\nRadio only yesterday. [Incorrect]\nThis news was broadcast from All\nIndia Radio only yesterday [Correct]\nNote\nExceptions of Mathematics, Statistics and\nPolitics have been studied earlier.",
    "example": ""
  },
  {
    "title": "Rule 94: Certain words like “equipment, furniture, jewellery, luggage, machinery, poetry, scenery, information, advice, baggage, hair, etc.” do not exist in their plural forms because they all are uncountable nouns.",
    "desc": "His luggages was booked. [Incorrect]\nHis luggage was booked. [Correct]\nFurniture sets off the beauty of a house.\n[Incorrect]\nFurniture set off the beauty of a\nhouse. [Correct]\nHe has given me good information.\n[Incorrect]\nHe has given me a good\ninformation. [Correct]\nThe poetries Society was founded\nin 1909. [Incorrect]\nThe Poetry Society was founded in\n1909. [Correct]\nHere is a list of stationeries. [Incorrect]\nHere is the list of stationary. [Correct]",
    "example": ""
  },
  {
    "title": "Rule 95: Rules of Conditional Sentences:",
    "desc": "Types of Conditional Sentences:\nCONDITION RESULT\nSimple Present will-future or\n(Modal + infinitive)\nor,\nshall/can/may/must\n+ V1\nSimple Past would + V1 or,\ncould/might/should\n+ V1\nPast Perfect would + have + past\nparticiple (V3) or,\ncould/might/should\n+ have + past\nparticiple (V3)",
    "example": "Examples:-\nAs soon as he comes, I will ask him this\nquestion.\nWhen he comes, I will ask him this question.\nHad he come earlier, I would have asked him\nthis question.\nIf he studied, he would pass the exam."
  },
  {
    "title": "Rule 96: Use of Possessive case in a sentence:",
    "desc": "Possessive case is used after “all” and “both”.\nConsider these examples:-\nMy all students are very talented. [Incorrect]\nAll my students are very talented. [Correct]\nMy both friends are very talented.\n[Incorrect]\nBoth my friends are very talented. [Correct]\nIn the above examples, the possessive case\n“my” should be placed after “all” and\n“both” respectively.",
    "example": ""
  },
  {
    "title": "Rule 97: Superfluous Sentences:",
    "desc": "(1) “As soon as” is not followed by\n“than”. “than” is used after “No sooner”",
    "example": "Examples:-\nAs soon as I complete the work than I will\ngo to his house. [Incorrect]\nAs soon as I complete the work I will go to\nhis house. [Correct]\nNo sooner had I started mowing the lawn\nthan it started raining. [Correct]\n(2) “As” is not used with “so”.\nExamples:-\nAs he was unwell, so he didn’t come to\nthe class. [Incorrect]\nAs he was unwell, he didn’t come to the\nclass. [Correct]\n(3) “Due to” is not used with “the reason”\nand vice versa.\nExamples:-\nDue to the reason that he is not well, he did\nnot come to the class. [Incorrect]\nHe did not come to the class due to sickness.\n[Correct]"
  },
  {
    "title": "Rule 98: Usage of the word “quantity”:",
    "desc": "When the word “quantity” is used in the\nsentence, we cannot use “little”, “few”, etc.\nwith it. We can only use “small” with it.",
    "example": "Examples:-\nLittle quantity of food was wasted. [Incorrect]\nFew quantity of food was wasted. [Incorrect]\nSmall quantity of food was wasted. [Correct]"
  },
  {
    "title": "Rule 99: Different forms of some confusing Verbs:",
    "desc": "V1 V2 V3\nFly Flew Flown\nFlow Flowed Flowed\nFind Found Found\nFound Founded Founded\nHang(Priso Hanged Hanged\nner) Hung Hung\nHang(Othe\nr things)",
    "example": "Examples:-\nThe water overflown from the\nbanks. [Incorrect]\nThe water overflowed from the banks.\n[Correct]\nThe secretary has found this organization.\n[Incorrect]\nThe secretary has founded this\norganization. [Correct]\nThe prisoner was hanged till death. [Correct]\nThe clock was hung on the wall. [Correct]\nIn the fourth sentence, it is to be noted that\nwe use the word “founded” when\nsomething is established or discovered.\nIn the second last sentence, we use the word\n“hanged” whenever we talk about the\nprisoner. But when we talk about the clock,\nwe use “hung” i.e. V2 form of the verb as can\nbe seen in the last sentence."
  },
  {
    "title": "Rule 100: Different forms of the verb “Lie”:",
    "desc": "S. V1 V2 V3\nNo.\n1. Lie Lied Lied\n2. Lay Laid Laid\n3. Lie Lay Lain\n(1) We use this “Lie” to say or write\nsomething that is not true in order to deceive\nsomeone.\n(2) We use “Lay” to put something in\nespecially a flat or horizontal position,\nusually carefully or for a particular purpose.\n(3) We use this “Lie” to be in or move into a\nhorizontal position on a surface.",
    "example": "Examples:-\n(1) I suspect he lies about his age. [V1]\nShe lied to her parents about her new\ncar. [V2]\nHe has never lied to me before, so I have\nno reason to doubt his word. [V3]\n(2)He lays the old man on the table. [V1]\nShe laid the baby on the bed. [V2]\nHe has laid his bag on the ground. [V3]\n(3) He lies awake at night, worrying. [V1]\nA pen lay on the desk. [V2]\nWomen have lain down their\nlives throughout history. [V3]"
  },
  {
    "title": "Rule 101: Use of preposition with the word “Die”:",
    "desc": "We use either the preposition “of” or “from”\nwith the word “Die”.\nWe use “Die of” whenever it is talked about a\ndisease.\nWe use “Die from” whenever it is talked\nabout the reason.",
    "example": "Examples:-\nShe died from overwork. [Reason]\nHe died of cancer. [Disease]\nHe died of tuberculosis. [Disease]\nTrees are dying from acid rain. [Reason]"
  },
  {
    "title": "Rule 102: Difference between “Beside” and “Besides”:",
    "desc": "Beside is a preposition, which means at\nthe side of, next to.\nBesides is a linking adverb, which means\nin addition to; also.",
    "example": "Examples:-\nCome and sit here beside me.\nShe knelt down beside the child.\nDo you play any other sports\nbesides basketball?\nBesides being a doctor, he is also an actor."
  },
  {
    "title": "Rule 103: Certain words like “friendly, miserly, cowardly, monthly, yearly, weekly, manly, orderly, etc.” are adjectives and can only be used as an adjective. We cannot use them as adverb.",
    "desc": "",
    "example": "Examples:-\nHe behaved friendly. [Incorrect]\nHe behaved in a friendly manner. [Correct]\nIn the first example, “friendly” is used as\nan adverb, which is incorrect. It should be\nrewritten as the second statement where\n“friendly” is used as an adjective.\nThis was a particularly brutal and cowardly\nattack. [Adjective]\nThe workers are paid a miserly $2 a day.\n[Adjective]\nShe put the letters in three orderly piles.\n[Adjective]\nThere was a weekly dance on Wednesdays.\n[Adjective]\nOne quality she especially likes to reward is\nthus held to be manly courage. [Adjective]\nNewspapers are constrained by a yearly\nlicense required from the Home Ministry.\n[Adjective]\nOther than the monthly meeting, not much\nis going on at the association. [Adjective]"
  },
  {
    "title": "Rule 104: Position of Adverbs:",
    "desc": "We place an adverb generally at three\ndifferent positions in a sentence:\n(a)Starting of Sentence\n(b)Between helping verb and main verb\n(c)At the end\n*NOTE: An adverb can never be\nplaced between main verb and object.",
    "example": "Examples:-\nHe comes often to my house. [Incorrect]\nHe often comes to my house. [Correct]\nIn the first sentence, “comes” is the main\nverb and “often” is an adverb. So we cannot\nplace adverb between the main verb and the\nobject.\nThe second sentence is the correct order of\nthe sentence structure.\nHe tells always the truth. [Incorrect]\nHe always tells the truth. [Correct]\nIn the above example, “always” is an adverb\nand “tells” is the main verb. So “always”\nshould be placed before the main verb.\nSuddenly the phone rang. [Correct]\nHe was probably late for the interview.\n[Correct]\nThey ate dinner quietly. [Correct]\nThere are few exceptions to this rule.\nAdverbs like too, even , only can be\nplaced anywhere in a sentence."
  },
  {
    "title": "Rule 105: Whenever we place multiple adverbs in a sentence, in that case we follow a particular order:",
    "desc": "Adverb of Manner ---> Adverb of Place ---\n> Adverb of Time [MPT order]",
    "example": "Examples:-\nI walked yesterday slowly. [Incorrect order]\nI walked slowly yesterday. [Correct order]\nI have to run quickly (manner) down the street\n(place) each morning (frequency) after\nbreakfast (time). [Correct order]\nImpatiently (manner), I waited by the\nbank (place) yesterday (time) for my\nfather to arrive. [Correct order]"
  },
  {
    "title": "Rule 106: Usage of “very” and “much”:",
    "desc": "In a sentence, both these terms are used\ndifferently.\n“Very” is preceded by Adjective’s positive\ndegree. Very emphasizes the exact identity of\na particular person or thing.\n“Much” means ‘large in amount or extent’.\nIt is preceded by comparative degree and\npast participle.",
    "example": "Examples:-\nIt is very interesting.\nHe is much weaker than Shyam.\nThe girl is very beautiful.\nThe weather changes very quickly.\nI am much better now.\nThey both talk too much.\nHe is much interested in the project.\nThank you so much for your help.\n*NOTE: We do not usually use very to modify\nsuperlative adjectives. Instead, we use much or\nby far. But note that very can be used to\nemphasize superlatives. It is also used with\nfirst, next and last.\nExamples:-\nThis is the very best wine I have tasted in my\nlife.\nThis is your very last chance."
  },
  {
    "title": "Rule 107: “Between” is always followed by “and” and not “to”.",
    "desc": "",
    "example": "Examples:-\nHe will distribute these sweets between 4\npm to 5 pm. [Incorrect]\nHe will distribute these sweets between 4\npm and 5 pm. [Correct]\nHe will distribute these sweets from 4 pm to 5\npm. [Correct]"
  },
  {
    "title": "Rule 108: Generally, Uncountable nouns cannot be converted into their plural.",
    "desc": "However, there are certain uncountable\nnouns which are found with “s” or “es”\nadded to the end. These nouns do not form\ntheir plurals, rather they give a different\nmeaning to the word.",
    "example": "Examples:-\nAdvice means suggestion.\nAdvices means information.\nAir means the mixture of gases\nthat surrounds the earth.\nAirs means arrogance\nWood means timber.\nWoods means forest.\nIron means a chemical element.\nIrons means fetters, chain.\nThe Noun Its The noun Its\nSingular meaning in plural meaning(\nin (two) Only one)\nAbuse i) Wrong Abuses Wrong\nuse practices(\nii) Evils)\nReproach\nForce i) Forces Troops\nStrength\nii) Body of\narmed\nmen\nIssue i) Result Issues Results\nii)\nOffspring\nWood i) Timber Woods Forests\nii) Forest\nLight i) Lamp Lights Lamps\nii)\nBrilliance\nGain i) Profit Gains Profits\nii)\nAcquisitio\nn of\nwealth\nPeople i) Persons Peoples Nations\nii) Nations\nExamples:-\nWood is used in almost all wooden\nhouses. (Timber)\nHe lives in a wood. (Forest)\nWoods are fast disappearing from\nindia. (Forests)\nForce should be met with force.(Strength)\nA force of ten persons attacked him .(Body\nof armed men)\nThe Indian Forces are known for their\nbravery and loyalty. (troops)\nExamples:-\nHe caught the old man by the arm.\nHe was standing with his arms cigarette\nbetween his lips.\nPakistan is buying arms from USA.\nEvery letter of a language expresses a\nparticular sound.\nPlease write your telegram in capital letters.\nHe is a man of letters.\nThe spectacle was horrible.\nMy spectacles have broken.\nThe Noun Its The noun Its\nis meanings in plural Meaning\nSingular (Only (two)\nOne)\nArm Upper Arms i)\nlimb(Part Weapons\nof the ii) Upper\nbody) limbs\nPain Ache Pains i)\nTroubles\nii) Care\nManner Method Manners i)\nMethods\nii)\nbehaviour\nCustom Habit Customs i) Habits\nii) Duties\non goods\nLetter Alphabet Letters i)\nAlphabet\nii)\nLearning\nSpectacle Sight Spectacles i) Sights\nii) Eye-\nglasses\nColour Hue Colours i) Hues\nii) Flags\nMinute A unit of Minutes i) Units of\ntime time\nii) The\nproceedin\ngs of a\nmeeting\nMoral Lesson Morals i) Moral\nLesson\nConduct\nii)\nConduct\nExamples :-\nIt is shameful for a man to use force with a\nwoman . (Strength)\nThe forces on the border have been\nalerted. (Army)\nI shall return within three hours. (Come\nback)\nIron is useful metal. (Metal)\nThe judge ordered that the irons of the\nunder trial should be removed. (Chains)\nNouns in Their Nouns in Their\nSingular meaning Plural meaning\nAdvice Counsel Advices Informati\non\nAir Atmosphe Airs Proud\nre Behaviour\nAuthority Comman Authoritie Persons in\nd s Power\nGood Nice Goods Property(\nthings)\nIron Metal Irons Fetters,\nchains\nForce Strength Forces Army\nContent Satisfactio Contents Things\nn Contained\nRespects Regards Respects Complime\nnts\nWork job Works Compositi\non\nfactories\nExamples :-\nIron is a useful metal.\nThe judge ordered that the irons of the\nunder trial should be removed.\nIt is shameful for a man to use force with\na woman.\nI shall return within three hours.\nExamples :-\n(a) He is my younger brother. ( Brother\n- a singular Noun )\nWe are four brothers. (Brothers- sons of\nsame parents)\nWe are brethren of the same profession\n.(Brethren- person engaged in the same\nprofession)\n(b) The cloth from Ahmedabad is\nsold everywhere in India. (Cloth-\nkind of cloth)\nA man needs many clothes.\n(Clothes-garment)\n(c) It is not possible to master of mathematics\nwithout learning formulae that govern it.\n(Formulae- the rules of mathematics)\nA number of formulas were offered.\n(Modes of Application)\nThe Plural Its Plural Its\nNoun of the meanin of the meaning\nSingular Noun I g Noun II\nBrothers Brother Sons of Brethre Members\ns the n of a\nsame community\nparents or society\nCloth Cloths Kind or clothes Garments\npieces\nof a\ncloth\nDie Dies Stamps Dice Small\nfor cubes for\nCoining playing\nGenius Geniuse Talente Dice Small\ns d cubes for\nPersons playing\nIndex Indexes Table Indices Signs of\nof Algebra\ncontent\ns\nShot Shots Balls of Shots Firing\nIron from the\nthrow, gun\nstroke\nor hit in\ncertain\ngames.\nFish Fish Conside Fishes Considere\nred d\ncollecti separately\nvely\nPenny Pennies Separat Pence A\ne coins collective\nnoun\nNouns (in Their Examples\npairs) proper use\n1. Habit It belongs Mohan is a victim\nCustom to of many bad habits.\nindividuals The Nigerains have\nIt belongs strange customs.\nto a society\nor country\n2. House It is a This house is made\nHome building to of brick and stone.\nlive in You should go\nIt is a home now.\nparticular\nhouse in\nwhich one\nis living\n3. Cause ‘Cause’ The scientists have\nproduces a not been able to tell\nReason result the cause of an\nearthquake .\n‘Reason’ You have good\nexplains or reason for going to\njustifies a the court .\ncause\n4. Air ‘Air’ is Water and air\nWind what we sustain life.\nbreathe Everyone longs for\n‘Wind’ is a cool wind in\nwhat makes summer.\nthe leaves\nof the trees\nmove.\n5. Men The plural Only men of\nof man. It is character can make\nused in a nation great.\nPeople ordinary\nsense Most of the people\npersons\nare superstitious\n6. Man Used in The man in the red\nGentlema ordinary dress is my cousin\nn sense Mr. sohanlal is a\nMan of gentleman\ncharacter\n7. Cost Amount The cost of\npaid by the production in every\nPrice\nshopkeeper field have gone up.\nAmount What is the price of\npaid by the this pen ?\ncustomer.\n8. Customer A buyer of Gandhi used to say\ngoods that a customer is\nClient like a God for a\nOne who shopkeeper.\navails That lawyer has\noneself of plenty of clients.\nservices ?\n9. Shade A place The peepal tree\nsheltered makes a nice\nfrom the shadow.\nShadow sun.\nThe shadow The lion saw its\nof a distinct shadow in the water\nform or and roared at it.\nobject .\n10. Ground It is outside The ground was\nFloor the house. slippery.\nIt is a part I saw my books\nof the lying on the floor.\nroom."
  },
  {
    "title": "Rule 109: Consider these errors:",
    "desc": "I am an English teacher. [Incorrect]\nHe is a Mathematics teacher. [Incorrect]\nAll his family members were going to\nthe temple. [Incorrect]\nIn the first example, “English teacher”\ndenotes “teacher from England”. In the\nsecond case, “Mathematics teacher” denotes\n“teacher made up of Mathematics” and in the\nthird example, “family members” denotes\n“members made up of family”. Thus, all these\nsentences are not meaningful.\nTo correct them, we may rewrite these\nsentences in the following ways:\nI am a teacher of English. [Correct]\nHe is a teacher of Mathematics. [Correct]\nAll the members of his family were going\nto the temple. [Correct]\n*NOTE: There is no such words “pick-\npocketer, cousin brother, cousin sister, etc.”\nWe use “pick-pocket” and “cousin” to mean\nthe same.\nSome important points\n●Brother or sister never follows cousin.\n●Boarding is wrong use. It should\nbe boarding house.\n●Poor people is slang use. It should be\nthe poor.\n●Signature should be used in place of\nthe abbreviation sign.\n●Food taken once is meal and not meals.\nMeals means both lunch and dinner\nand we cannot take them together .\n●‘Alphabet’ is generally used in the\nsingular sense. But it can also be used\nin the plural sense. When different\nlanguages are referred to at the same\ntime.\n●‘Inning’ is no word. The actual word is\n‘Innings’ and is always used in the\nsingular sense.\n●‘English teacher’ is slang .It should\nbe ‘the teacher of English’.\n●‘Agendum’ is not used in Enlgish.\nAgenda (Programme-of a meeting) is\ntreated as singular in English.\n●‘Mankind’ is not used in the plural sense.\n●‘Room’ in a compartment or on a\nbench, etc. means ‘unoccupied seat’.\n●‘Witness’ means knowledge brought in\nproof. ‘Evidence’ denotes means of\nproving an unknown or disputed fact.\n●‘Family members’ is a slang use. The\ncorrect form is ‘members of the family’.\n● ‘Goodnight’ is a parting salutation,\nbut ‘Good evening’ is a meeting\nsalutation from evening till midnight.\n●‘Wage’ when used in the singular form\nmeans ‘punishment’ but when used in the\nplural sense it means charges for the\n‘labor’.\n●The use of double possessive should be\navoided. It is better to write the ‘son of\nmy uncle’s friend’ than ‘my uncle’s\nfriend’s son’.",
    "example": ""
  },
  {
    "title": "Rule 110: Use of ‘Possessive Adjectives:",
    "desc": "Possessive adjectives refer to words\nwhich modify a noun by showing a form\nof possession or a sense of belonging to a\nparticular person or thing.\nTable of Possessive Adjectives and Possessive\nPronouns",
    "example": "Examples:-\nEveryone should do one’s duty. [Incorrect]\nEveryone should do his duty. [Correct]\nOne should do his duty. [Incorrect]\nOne should do one’s duty. [Correct]\nIn the above examples, it is to be noted that\nwords like “one’s” and “his” are not used\nas possessive pronouns. These are\npossessive adjectives as they are describing\nthe noun “duty” respectively.\nWe use “one’s” only when the Subject is\n“One” and if the subject is “Every, each,\netc.”, we use “his”or “her” accordingly.\nEvery girl should do her duty.\nIn the above example “gender” is clearly\nmentioned. In such cases, we use “her” and\nwhen gender is not clear we give the priority\nto “his”."
  },
  {
    "title": "Rule 111: Use of “fewer” and “less”:",
    "desc": "“Fewer” is used with Countable subjects.\n“Less” is used with Uncountable subjects.",
    "example": "Examples:-\nNo less than 50 students completed the\nwork. [Incorrect]\nNo fewer than 50 students completed\nthe work. [Correct]\nThere is no fewer than five liters of water in\nthe vessel. [Incorrect]\nThere is no less than five liters of water in\nthe vessel. [Correct]"
  },
  {
    "title": "Rule 112: Difference between “Elder” and “Older”:",
    "desc": "In a sentence, “elder” is used for someone\nwho is in our family.\n“older” is used for someone who is not\nin family.",
    "example": "Examples:-\nA friend of mine in my company is elder than\nme. [Incorrect]\nA friend of mine in my company is older\nthan me. [Correct]\nThe elder son of King John, Henry was\nnine when his father died. [Correct]\n*NOTE: Difference between “Later” and\n“Latter”:\nWe use later when referring to time while we\nuse latter when referring to the second of\ntwo persons or things mentioned previously.\nExamples:-\nBran said that he would call me later.\nThere are two kinds of worries: those you can\ndo something about and those you can’t.\nDon’t spend any time on the latter.\nDifference between “Farther” and\n“Further”:-\nIn a sentence, “farther” is used for more\ndistant object . “further” is used for extra\nor additional distance\nExamples:-\nVillagers saw a temple on the farther side of\nthe river.\nSuman has appealed in the high court\nfor further judgement.\nDifference between “Nearest” and “Next”:-\nIn a sentence, “Nearest” is used for space\nor distance .“Next” is used for in order or\nposition\nExamples :-\nDelhi railway station is nearest to my house.\nMr. gupta lives in the next house.\nDifference between “Latest” and “Last”:-\nIn a sentence, “Latest” is used word opposite\nto Earliest, it denotes time . “Last” is word\nopposite to first and it denotes order or\nposition.\nExamples:-\nShe is the last girl to stay in the office\nWhat is the latest news today ?\nDifference between “Less” and “Fewer”:-\nIn a sentence, “Less ” is used to denote\nquantity and is used as Singular Uncountable\nNoun .“Fewer” is used to denote number and\nis used as Plural Countable Noun.\nExamples:-\nHe has less money than I . [Correct]\nHe has fewer money than I . [Incorrect]\nMoney is an Uncountable noun. Notes and\ncoins are countable nouns.\nDifference between “Less” and “Lesser”:-\nIn a sentence, “Less” is used to denote\nsomething smaller in size,\nmeasurement, duration, number etc.\n“Lesser” is used to denote something not so\ngreat as the other one.\nExamples:-\nMaths is less difficult than Enlgish.\nShe agreed to plead guilty to a lesser charge."
  },
  {
    "title": "Rule 113: While making comparisons, it is necessary to look at the things being compared:",
    "desc": "",
    "example": "Examples:-\nThe weather of Delhi is far better than\nMumbai. [Incorrect]\nThe weather of Delhi is far better than the\nweather of Mumbai. [Correct]\nThe weather of Delhi is far better than that of\nMumbai. [Correct]\nIn the above examples, the first sentence is\nincorrect as we are comparing “the weather\nof Delhi” with “Mumbai”. The comparisons\nshould be made on common grounds. In this\ncase, it should be compared with “the weather\nof Mumbai” instead of “Mumbai”.\nThe apples of Shimla are tastier than\nOoty. [Incorrect]\nThe apples of Shimla are tastier than those of\nOoty. [Correct]"
  },
  {
    "title": "Rule 114: The words “One of the, either of, neither of, and each of” are always followed by plural nouns.",
    "desc": "",
    "example": "Examples:-\nOne of the student was selected to\nvisit NASA. [Incorrect]\nOne of the students was selected to visit\nNASA. [Correct]\nA person can turn on either of the light\nbulb. [Incorrect]\nA person can turn on either of the light\nbulbs. [Correct]\nDo you go to each of the meetings? [Correct]"
  },
  {
    "title": "Rule 115: When “but, except, or between” are used as preposition, it must followed by the objective case of pronoun (me, him, her, you, us, them, etc.) and not the subjective case (I, he, she, you, we, they, etc.).",
    "desc": "",
    "example": "Examples:-\nThere is friendship between you and I.\n[Incorrect]\nThere is friendship between you and me.\n[Correct]\nAll but he are going to the party. [Incorrect]\nAll but him are going to the party. [Correct]\nLet he do the work. [Incorrect]// Let is a\nverb and we use objective case after a verb\nLet him do the work. [Correct]\nAll except him are going to the\nparty. [Correct]"
  },
  {
    "title": "Rule 116: Whenever we use the pseudo subject in a sentence, the pronoun following the pseudo subject should always be in subjective case and not in objective case.",
    "desc": "",
    "example": "Examples:-\nIt is him who should be blamed. [Incorrect]\nIt is he who should be blamed. [Correct]\n*NOTE: Pseudo subject takes the place of\nsubject but cannot perform the role of subject.\nA subject is the combination of syntax (study\nof structure) and semantics (study of\nmeaning). Pseudo subject can only fulfill the\nrequirement of syntax. As Pseudo subject\nsemantically fails, it is called Pseudo subject.\nExamples:-\nIt is a lovely day. [Correct]\nIt is us who have defeated the champion.\n[Incorrect]\nIt is we who have defeated the champion .\n[Correct]\nIt is me who am guilty. [Incorrect]\nIt is I who am guilty. [Correct]\nHere subject is day. So, ‘it’ which works as\nan introductory subject, is a Pseudo subject."
  },
  {
    "title": "Rule 117: When we use the word “such” as a determiner, we will only use “as” as its connector.",
    "desc": "‘Else’ should be followed by ‘but’\n‘Other’ and ‘otherwise’ are followed by\n‘than’\nHe is such a person that you\nmentioned. [Incorrect]\nHe is such a person as you\nmentioned. [Correct]\nSuch a book as this is referred by a teacher.\n[Correct]\nThey want nothing else but to have\ntheir honor and dignity .[Correct]\nIt was nothing else but sheer madness\n[Correct]",
    "example": ""
  },
  {
    "title": "Rule 118: While showing possession with a plural noun, we should make sure that we do not put apostrophe (‘s) in such a way that it creates a hissing sound. In English, words creating a hissing sound are avoided.",
    "desc": "Exception:- “else’s” is grammatically correct\nin spite of the hissing sound.",
    "example": "Examples:-\nGovernment girls’s school. [Incorrect]\nGovernment girls’ school. [Correct]\nIn the first case, “girls’s” is incorrect as it\ncreates the hissing sound. It should be\nrewritten as “girls’”.\nSome more examples:-\nJesus’ sake\nFor peace’ sake\nResidents’ Welfare Association\nPythagoras’ theorem\nFor goodness’ sake\nFor justice’ sake"
  },
  {
    "title": "Rule 119: We never use apostrophe (‘s) with pronouns to show possession. It is only used with nouns.",
    "desc": "",
    "example": "Examples:-\nYour’s friendly. [Incorrect]\nYours friendly. [Correct]\nThe kids are yours and mine. [Correct]\nWe shall finally have what is rightfully\nours. [Correct]\nThe ring is hers. [Correct]\nThe bag is theirs. [Correct]\nTheir mother gets along well with\nyours. [Correct]"
  },
  {
    "title": "Rule 120: There are certain words which are never followed by Noun. These are “afraid, asleep, due, ready, unable, alike, aware, glad, sorry, well, alone, ill, sure, worth. etc.",
    "desc": "",
    "example": "Examples:-\nWe were unable to contact him at the time.\nThe army is said to be ready for action.\nI am glad to know the parcel arrived safely.\nHe likes being alone in the house.\nYour painting has come out really well.\nHe has proved his worth to the team."
  }
];

window.getSafeDateStr = function(d = new Date()) { const y = d.getFullYear(); const m = String(d.getMonth() + 1).padStart(2, '0'); const day = String(d.getDate()).padStart(2, '0'); return `${y}-${m}-${day}`; };

window.appData = { mocks: [], studyLogs: [], attendance: {}, countdowns: [], tasks: {}, dailySessions: {}, vaultFolders: [], vaultNotes: [], quizHistory: [] };

// Current persistent data store. Existing installs migrate once from the previous data key.
const DATA_KEY = 'kkMonitoringV68';
const PREVIOUS_CURRENT_KEY = 'kkMonitoringV53';
window.KK_DATA_STORAGE_KEY = DATA_KEY;

// Stable identities let cloud sync carry deletion tombstones across devices, including
// legacy mock entries that were saved before records had IDs.
window.kkStableMockSignature = function(mock) {
    const m = mock && typeof mock === 'object' ? mock : {};
    return ['date','examType','type','sub','platform','target','totalMarks','eR','eW','qR','qW','rR','rW','createdAt','updatedAt']
        .map(key => `${key}:${String(m[key] ?? '')}`).join('|');
};
window.kkStableMockId = function(mock, occurrence = 0) {
    const input = window.kkStableMockSignature(mock);
    let hash = 2166136261;
    for (let i = 0; i < input.length; i++) { hash ^= input.charCodeAt(i); hash = Math.imul(hash, 16777619); }
    return `legacy-${(hash >>> 0).toString(36)}-${Math.max(0, Number(occurrence) || 0)}`;
};

function quizRecordId(record){
    const r = record && typeof record === 'object' ? record : {};
    if(r.id !== undefined && r.id !== null && String(r.id) !== '') return String(r.id);
    const ts = Number(r.timestamp) || 0;
    const date = String(r.date || '');
    const score = Number(r.score) || 0;
    const taken = Number(r.timeTakenMs) || 0;
    const correct = Number(r.correct) || 0;
    const wrong = Number(r.wrong) || 0;
    return `quiz-${date}-${ts}-${score}-${taken}-${correct}-${wrong}`;
}

function dedupeQuizHistory(list){
    const input = Array.isArray(list) ? list : [];
    const seen = new Map();
    const out = [];
    for(const raw of input){
        if(!raw || typeof raw !== 'object') continue;
        const item = {...raw, id: quizRecordId(raw)};
        const key = item.id;
        if(!seen.has(key)){ seen.set(key, true); out.push(item); }
    }
    return out;
}

function ensureDataShape(){
    if(!window.appData || typeof window.appData!=='object' || Array.isArray(window.appData)) window.appData={};
    if(!Array.isArray(window.appData.countdowns)) window.appData.countdowns=[];
    if(!Array.isArray(window.appData.mocks)) window.appData.mocks=[];
    if(!Array.isArray(window.appData.studyLogs)) window.appData.studyLogs=[];
    if(!Array.isArray(window.appData.quizHistory)) window.appData.quizHistory=[];
    window.appData.quizHistory = dedupeQuizHistory(window.appData.quizHistory);
    if(!window.appData.tasks||typeof window.appData.tasks!=='object'||Array.isArray(window.appData.tasks)) window.appData.tasks={};
    if(!Array.isArray(window.appData.vaultFolders)) window.appData.vaultFolders=[];
    if(!Array.isArray(window.appData.vaultNotes)) window.appData.vaultNotes=[];
    if(!window.appData.attendance||Array.isArray(window.appData.attendance)) window.appData.attendance={};
    if(!window.appData.dailySessions||typeof window.appData.dailySessions!=='object'||Array.isArray(window.appData.dailySessions)) window.appData.dailySessions={};
    if(!window.appData.xp||typeof window.appData.xp!=='object'||Array.isArray(window.appData.xp)) window.appData.xp={total:0,daily:{}};
    if(!window.appData.xp.daily||typeof window.appData.xp.daily!=='object'||Array.isArray(window.appData.xp.daily)) window.appData.xp.daily={};
    if(!window.appData.vocabProgress||typeof window.appData.vocabProgress!=='object'||Array.isArray(window.appData.vocabProgress)) window.appData.vocabProgress={};
    if(!window.appData.grammarProgress||typeof window.appData.grammarProgress!=='object'||Array.isArray(window.appData.grammarProgress)) window.appData.grammarProgress={};
}

function loadLocalData(){
    try{
        let raw=localStorage.getItem(DATA_KEY);
        // One-time migration from the previous base. The active app uses only DATA_KEY.
        if(!raw){
            const previous=localStorage.getItem(PREVIOUS_CURRENT_KEY);
            if(previous){
                raw=previous;
                try{ localStorage.setItem(DATA_KEY, previous); localStorage.removeItem(PREVIOUS_CURRENT_KEY); }catch(_){}
            }
        }
        if(raw){
            const parsed=JSON.parse(raw);
            if(parsed&&typeof parsed==='object'&&!Array.isArray(parsed)) window.appData={...window.appData,...parsed};
        }
        ensureDataShape();
    }catch(e){console.error('Local data load:',e);ensureDataShape();}
}

function saveDataLocally(reason='save'){
    try{
        ensureDataShape();
        localStorage.setItem(DATA_KEY,JSON.stringify(window.appData));
        window.dispatchEvent(new CustomEvent('kk:data-saved',{detail:{source:'local',reason}}));
    }catch(e){console.warn('Local save failed:',e);}
}
window.saveDataLocally=saveDataLocally;
window.kkQuizRecordId=quizRecordId; window.kkDedupeQuizHistory=dedupeQuizHistory;

function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function safeJSString(value) { return JSON.stringify(String(value ?? '')); }

let __kkToastTimer = null;
window.hideToast = function() {
    try {
        if (__kkToastTimer) { clearTimeout(__kkToastTimer); __kkToastTimer = null; }
        const toast = document.getElementById('toast');
        if (toast) toast.classList.remove('show');
    } catch(e){}
};
window.showToast = function(msg, isError = false) {
    try {
        const toast = document.getElementById('toast'); const icon = document.getElementById('toastIcon'); const msgEl = document.getElementById('toastMsg');
        if (!toast || !msgEl) return; msgEl.innerText = msg;
        icon.className = isError ? "ph-fill ph-warning-circle text-danger" : "ph-fill ph-check-circle text-emerald";
        toast.style.borderColor = isError ? "var(--danger)" : "var(--neon-emerald)";
        if (__kkToastTimer) clearTimeout(__kkToastTimer);
        toast.classList.add('show');
        __kkToastTimer = setTimeout(() => { toast.classList.remove('show'); __kkToastTimer = null; }, 3800);
    } catch(e){}
};


// --- FLASHCARD AUTO-LOADER ---
let flashcardAttempt = 0;
function tryLoadFlashcards() {
    try {
        let gL = false; let vL = false;
        if(typeof grammarData !== 'undefined' && document.getElementById('gRuleTitle')) { window.renderGrammarRule(); gL = true; }
        if(typeof vocabData !== 'undefined' && document.getElementById('vWord')) { window.renderVocabWord(); vL = true; }
        if((!gL || !vL) && flashcardAttempt < 20) { flashcardAttempt++; setTimeout(tryLoadFlashcards, 100); } 
    } catch(e){}
}

// --- CORE INIT ---
let __dashboardInitPromise=null;
window.initDashboard = function() {
    if(__dashboardInitPromise) return __dashboardInitPromise;
    __dashboardInitPromise=(async()=>{ try { 
        loadLocalData(); bindLearnHubControls(); 
        tryLoadFlashcards(); 
        updateDashboardKPIs();
        renderCountdowns(); 
        renderDailySchedule(); 
        renderCalendar(); 
        updateMockUI(); 
        renderTracker(); 
        updateDailyCountdown(); 
        renderDashboardStickyNotes();
        // FORCE RENDER ROOT FOLDERS ON INIT
        renderVaultFolders(null);
    } catch(e){ console.error(e); } })();
    return __dashboardInitPromise;
};

function bindCoreNavigationAndInit() {
    // The single-bundle boot coordinator calls initDashboard after every module is ready.
    if (window.__kkAllModulesReady && sessionStorage.getItem('kkUnlocked_v65') === 'true') initDashboard();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindCoreNavigationAndInit, {once:true});
else bindCoreNavigationAndInit();

// --- DASHBOARD STICKY NOTES WALL ---
window.renderDashboardStickyNotes = function() {
    try {
        const grid = document.getElementById('dashboardStickyNotes');
        if(!grid) return;
        grid.innerHTML = '';
        let pinnedNotes = (window.appData.vaultNotes || []).filter(n => n.pinned === true);

        if(pinnedNotes.length === 0) {
            grid.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem; grid-column: 1 / -1;">No notes pinned yet. Go to Study Room & Vault, create a note, and click the Pin 📌 icon.</p>`;
            return;
        }

        const stickyColors = ['#fef08a', '#bbf7d0', '#bae6fd', '#fbcfe8'];
        pinnedNotes.forEach((n, idx) => {
            let color = stickyColors[idx % stickyColors.length];
            let contentHtml = n.type === 'text' ? `<div style="flex:1; margin:8px 0; font-size: 0.8rem; line-height: 1.4; font-weight:600; white-space: pre-wrap; word-wrap: break-word; color:#222; overflow-y:auto;">${escapeHTML(n.content)}</div>` : `<div style="flex:1; margin:8px 0; text-align:center; color:#222;"><i class="ph-duotone ph-image" style="font-size:2.5rem; opacity:0.8;"></i><p style="font-size:0.8rem; font-weight:bold;">Attachment</p></div>`;
            grid.innerHTML += `<div class="hover-lift" style="background: ${color}; border-radius: 2px 15px 15px 15px; padding: 12px; position:relative; box-shadow: 2px 4px 10px rgba(0,0,0,0.3); min-height: 120px; max-height: 180px; display:flex; flex-direction:column;">
                <div style="position:absolute; top:-5px; left:50%; transform:translateX(-50%); width:30px; height:12px; background:rgba(255,255,255,0.7); box-shadow: 0 1px 2px rgba(0,0,0,0.1);"></div>
                <div style="text-align:right; margin-bottom:5px;"><i class="ph-fill ph-push-pin" style="color:#ea580c; cursor:pointer; font-size:1.1rem;" onclick="togglePinNote(${n.id})" title="Unpin Note"></i></div>
                ${contentHtml}
                ${n.type !== 'text' ? `<button style="margin-top:auto; width:100%; font-size:0.75rem; padding:4px; border-radius:6px; background:rgba(0,0,0,0.8); color:#fff; border:none; cursor:pointer;" onclick="previewFile('${n.id}')">View</button>` : ''}
            </div>`;
        });
    } catch(e) { console.error(e); }
};

// --- CIRCULAR COUNTDOWN TIMER (6AM-9PM) ---
function updateDailyCountdown() {
    try {
        const now = new Date(); const h = now.getHours(); let target = new Date(now); let label = ""; let totalSecs = 15*3600; let remSecs = 0;
        if (h >= 6 && h < 21) { target.setHours(21, 0, 0, 0); label = "Study Window Closes:"; remSecs = Math.floor((target - now) / 1000); } 
        else { if (h >= 21) target.setDate(target.getDate() + 1); target.setHours(6, 0, 0, 0); label = "Next Window Starts:"; totalSecs = 9*3600; remSecs = Math.floor((target - now) / 1000); }
        
        document.querySelectorAll('.daily-timer-label').forEach(el => el.innerText = label);
        document.querySelectorAll('.daily-timer-value').forEach(el => el.innerText = `${String(Math.floor(remSecs/3600)).padStart(2,'0')}:${String(Math.floor((remSecs%3600)/60)).padStart(2,'0')}:${String(remSecs%60).padStart(2,'0')}`);
        
        const circle = document.getElementById('studyTimerRing');
        if(circle) { const circ = circle.r.baseVal.value * 2 * Math.PI; circle.style.strokeDasharray = `${circ} ${circ}`; circle.style.strokeDashoffset = circ - (remSecs/totalSecs) * circ; }
        const el = document.getElementById('liveDateTime'); if (el) el.innerText = now.toLocaleString('en-US', { hour12: true, dateStyle: 'short', timeStyle: 'medium' });
    } catch(e){}
}
let dailyCountdownTimer=null; const startDailyCountdownTimer=()=>{if(!dailyCountdownTimer)dailyCountdownTimer=setInterval(updateDailyCountdown,1000)}; if(sessionStorage.getItem('kkUnlocked_v65')==='true')startDailyCountdownTimer(); else window.addEventListener('kk:unlocked',startDailyCountdownTimer,{once:true});

// --- GRAMMAR & VOCAB ---
let currentRuleIndex = 0;
let currentVocabIndex = 0;
const __kkLastRandomIndex = { grammar: -1, vocab: -1 };
function getRandIdx(list, key = 'default') {
    if (!Array.isArray(list) || list.length === 0) return 0;
    if (list.length === 1) { __kkLastRandomIndex[key] = 0; return 0; }
    let next = Math.floor(Math.random() * list.length);
    const previous = __kkLastRandomIndex[key];
    if (next === previous) next = (next + 1 + Math.floor(Math.random() * (list.length - 1))) % list.length;
    __kkLastRandomIndex[key] = next;
    return next;
}
window.getRandIdx = getRandIdx;

// Auto-change Grammar Rule every 5 minutes (300,000 milliseconds).
const startGrammarAutoTimer=()=>{
    if(window.__kkGrammarAutoTimer) return;
    window.__kkGrammarAutoTimer=setInterval(()=>{
        try{if(typeof grammarData!=='undefined')window.nextGrammarRule();}catch(e){}
    },300000);
};
if(sessionStorage.getItem('kkUnlocked_v65')==='true') startGrammarAutoTimer();
else window.addEventListener('kk:unlocked',startGrammarAutoTimer,{once:true});

// --- LEARN HUB REPAIR ---
// The original Learn Hub renderer wrote only to hidden compatibility nodes.
// These renderers update the real Learn Hub UI and keep the legacy nodes in sync.
function setTextIfPresent(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value == null ? '' : String(value);
}
function renderLearnRuleUI(idx) {
    if (typeof grammarData === 'undefined' || !Array.isArray(grammarData) || !grammarData.length) return;
    currentRuleIndex = idx === undefined
        ? getRandIdx(grammarData, 'grammar')
        : ((Number(idx) % grammarData.length) + grammarData.length) % grammarData.length;
    const rule = grammarData[currentRuleIndex];
    setTextIfPresent('learnRuleTitle', rule.title);
    setTextIfPresent('learnRuleText', rule.desc);
    setTextIfPresent('learnRuleExample', rule.example);
    setTextIfPresent('gRuleTitle', rule.title);
    setTextIfPresent('gRuleText', rule.desc);
    setTextIfPresent('gRuleExample', rule.example);
    localStorage.setItem('kk_grammar_idx', String(currentRuleIndex));
}
function renderLearnVocabUI(idx) {
    if (typeof vocabData === 'undefined' || !Array.isArray(vocabData) || !vocabData.length) return;
    currentVocabIndex = idx === undefined
        ? getRandIdx(vocabData, 'vocab')
        : ((Number(idx) % vocabData.length) + vocabData.length) % vocabData.length;
    const v = vocabData[currentVocabIndex];
    const hindi = window.sanitizeVocabDisplay ? window.sanitizeVocabDisplay(v) : (v.hindi || '');
    setTextIfPresent('learnWord', v.word);
    setTextIfPresent('learnPos', v.pos || 'Word');
    setTextIfPresent('learnHindi', hindi);
    setTextIfPresent('learnMeaning', v.meaning);
    setTextIfPresent('learnVExample', v.example ? `"${v.example}"` : '');
    setTextIfPresent('vWord', v.word);
    setTextIfPresent('vPos', v.pos || 'Word');
    setTextIfPresent('vHindi', hindi);
    setTextIfPresent('vMeaning', v.meaning);
    setTextIfPresent('vExample', v.example ? `"${v.example}"` : '');
    localStorage.setItem('kk_vocab_idx', String(currentVocabIndex));
}
window.renderGrammarRule = renderLearnRuleUI;
window.nextGrammarRule = () => renderLearnRuleUI(currentRuleIndex + 1);
window.prevGrammarRule = () => renderLearnRuleUI(currentRuleIndex - 1);
window.renderVocabWord = renderLearnVocabUI;
window.nextVocab = () => renderLearnVocabUI(currentVocabIndex + 1);
window.prevVocab = () => renderLearnVocabUI(currentVocabIndex - 1);

function bindLearnHubControls() {
    if (window.__kkLearnHubBound) return;
    window.__kkLearnHubBound = true;
    document.getElementById('learnRulePrev')?.addEventListener('click', () => window.prevGrammarRule());
    document.getElementById('learnRuleNext')?.addEventListener('click', () => window.nextGrammarRule());
    document.getElementById('learnVPrev')?.addEventListener('click', () => window.prevVocab());
    document.getElementById('learnVNext')?.addEventListener('click', () => window.nextVocab());
    document.getElementById('learnRuleGo')?.addEventListener('click', () => {
        window.markGrammarLearned?.();
        window.showToast?.('Grammar rule marked for revision.');
    });
    document.getElementById('learnOnlineBtn')?.addEventListener('click', async () => {
        const result = document.getElementById('learnOnlineResult');
        const word = vocabData?.[currentVocabIndex]?.word;
        if (!result || !word) return;
        result.hidden = false;
        result.textContent = 'Looking up meaning…';
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
            if (!response.ok) throw new Error('lookup failed');
            const data = await response.json();
            const meanings = (data[0]?.meanings || []).slice(0, 2);
            result.innerHTML = meanings.map(m => {
                const defs = (m.definitions || []).slice(0, 2).map(d => escapeHTML(d.definition)).join('<br>');
                return `<b>${escapeHTML(m.partOfSpeech || 'Meaning')}</b><br>${defs}`;
            }).join('<hr>') || 'No online definition found.';
        } catch (_) {
            result.textContent = 'Online lookup is unavailable right now. Use the saved meaning above.';
        }
    });
    renderLearnRuleUI();
    renderLearnVocabUI();
}
window.bindLearnHubControls = bindLearnHubControls;


window.addCountdown = function() {
    try { const name = document.getElementById('cdName').value; const dateStr = document.getElementById('cdDate').value; if (!name || !dateStr) return showToast("Enter Name and Date!", true); window.appData.countdowns.push({ id: Date.now(), name, targetTime: new Date(dateStr).getTime() }); saveDataLocally(); renderCountdowns(); document.getElementById('cdForm').classList.add('hidden'); showToast("Added!"); } catch(e){}
};
window.deleteCountdown = function(id) { try { window.appData.countdowns = window.appData.countdowns.filter(c => String(c.id) !== String(id)); saveDataLocally('delete'); renderCountdowns(); window.kkCloudReplaceNow?.(); } catch(e){} };
function renderCountdowns() {
    try { const container = document.getElementById('activeCountdowns'); if (!container) return; container.innerHTML = ''; (window.appData.countdowns || []).forEach(cd => { const diff = cd.targetTime - new Date().getTime(); let dStr = "Passed!"; if (diff > 0) dStr = `${Math.floor(diff/86400000)}d ${Math.floor((diff%86400000)/3600000)}h ${Math.floor((diff%3600000)/60000)}m ${Math.floor((diff%60000)/1000)}s`; container.innerHTML += `<div class="cd-card"><i class="ph-bold ph-x cd-del" onclick="deleteCountdown(${cd.id})"></i><h4>${cd.name}</h4><p>${dStr}</p></div>`; }); } catch(e){}
}
let countdownTimer=null; const startCountdownTimer=()=>{ if(countdownTimer) return; countdownTimer=true; }; if(sessionStorage.getItem('kkUnlocked_v65')==='true')startCountdownTimer(); else window.addEventListener('kk:unlocked',startCountdownTimer,{once:true});

// --- DAILY TO-DO PLAN ---
// One deterministic random plan per calendar day.
// Each of the 4 sections contributes exactly one item from Part A and one from Part B.
// The seed changes every day, so the selection stays stable during the day but changes tomorrow.
const DAILY_PLAN_SECTIONS = [
  {
    key: 'english', label: 'English', icon: '📘',
    parts: [
      [
        { title: 'Editorial Lecture', minutes: 90 },
        { title: 'Perfection Lecture by Nimish Bansal', minutes: 90 }
      ],
      [
        { title: '120 Rules of Grammar', minutes: 30 },
        { title: 'Black Book', minutes: 30 },
        { title: 'Random Rules and Lecture', minutes: 30 },
        { title: 'Topic to be Read', minutes: 30 }
      ]
    ]
  },
  {
    key: 'quants', label: 'Quants', icon: '🔢',
    parts: [
      [
        { title: 'Lecture by Aashis Sir', minutes: 90 },
        { title: 'Lecture by Harshal Agrawal', minutes: 90 }
      ],
      [
        { title: 'Learn Table, Cubes, Percentage and Formula', minutes: 30 },
        { title: 'Solve Checklist', minutes: 30 },
        { title: 'Solve PDF & Book', minutes: 30 }
      ]
    ]
  },
  {
    key: 'reasoning', label: 'Reasoning', icon: '🧠',
    parts: [
      [
        { title: 'Lecture by Rahul Garg', minutes: 90 },
        { title: 'Lecture by Ankush Lamba', minutes: 90 }
      ],
      [
        { title: 'Checklist', minutes: 30 },
        { title: 'Sectional', minutes: 30 }
      ]
    ]
  },
  {
    key: 'mock', label: 'Mock & Analysis', icon: '📝',
    parts: [
      [
        { title: 'Mock', minutes: 60 },
        { title: 'Analysis', minutes: 120 }
      ],
      [
        { title: 'Sectional', minutes: 30 }
      ]
    ]
  }
];

function dailyPlanSeed(dateStr) {
  let h = 2166136261;
  for (let i = 0; i < dateStr.length; i++) {
    h ^= dateStr.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function seededPick(list, state) {
  state.value = (Math.imul(state.value ^ (state.value >>> 16), 2246822519) + 3266489917) >>> 0;
  return list[state.value % list.length];
}
function minutesToClock(total) {
  const h = Math.floor(total / 60), m = total % 60;
  const ampm = h >= 12 ? 'PM' : 'AM', hh = h % 12 || 12;
  return `${String(hh).padStart(2,'0')}:${String(m).padStart(2,'0')} ${ampm}`;
}
function generateDailySchedule(dateOverride) {
  const dateStr = dateOverride || getSafeDateStr();
  const rng = { value: dailyPlanSeed(dateStr) };
  const selected = [];
  DAILY_PLAN_SECTIONS.forEach(section => {
    section.parts.forEach((part, partIndex) => {
      const item = seededPick(part, rng);
      selected.push({
        ...item,
        section: section.key,
        sectionLabel: section.label,
        sectionIcon: section.icon,
        part: partIndex + 1
      });
    });
  });

  // Fixed study window: 08:00–20:30, with the requested lunch and walk breaks.
  // The selected items are placed in a stable daily order; remaining time becomes
  // intentional "flex revision" rather than an accidental empty gap.
  const breakWindows = [
    { start: 13 * 60, end: 15 * 60, title: '🍱 Lunch Break', id: 'break-lunch' },
    { start: 18 * 60, end: 18 * 60 + 30, title: '🚶 Walk Break', id: 'break-walk' }
  ];
  const workItems = selected.slice();
  for (let i = workItems.length - 1; i > 0; i--) {
    const j = seededPick(Array.from({length: i + 1}, (_, n) => n), rng);
    [workItems[i], workItems[j]] = [workItems[j], workItems[i]];
  }

  const result = [];
  let cursor = 8 * 60;
  let index = 0;
  const pushBreaksUntil = (nextWorkEnd) => {
    for (const b of breakWindows) {
      if (cursor < b.start && nextWorkEnd > b.start) return false;
    }
    return true;
  };
  while (index < workItems.length) {
    const item = workItems[index];
    // Never cross a fixed break; insert the break first when needed.
    const nextEnd = cursor + item.minutes;
    const crossing = breakWindows.find(b => cursor < b.start && nextEnd > b.start);
    if (crossing) {
      result.push({ id: crossing.id, time: `${minutesToClock(crossing.start)} - ${minutesToClock(crossing.end)}`, title: crossing.title, isBreak: true });
      cursor = crossing.end;
      continue;
    }
    if (breakWindows.some(b => cursor >= b.start && cursor < b.end)) {
      const b = breakWindows.find(b => cursor >= b.start && cursor < b.end);
      result.push({ id: b.id, time: `${minutesToClock(b.start)} - ${minutesToClock(b.end)}`, title: b.title, isBreak: true });
      cursor = b.end;
      continue;
    }
    const id = `plan-${dateStr}-${item.section}-${item.part}`;
    result.push({
      id,
      time: `${minutesToClock(cursor)} - ${minutesToClock(nextEnd)}`,
      title: `${item.sectionIcon} ${item.sectionLabel} · ${item.title}`,
      taskTitle: item.title,
      section: item.section,
      sectionLabel: item.sectionLabel,
      part: item.part,
      duration: item.minutes,
      isBreak: false
    });
    cursor = nextEnd;
    index++;
  }
  // Insert fixed breaks that occur after the last selected item only if needed.
  breakWindows.forEach(b => {
    if (cursor <= b.start && !result.some(x => x.id === b.id)) {
      result.push({ id: b.id, time: `${minutesToClock(b.start)} - ${minutesToClock(b.end)}`, title: b.title, isBreak: true });
    }
  });
  result.sort((a,b) => {
    const toMin = s => {
      const m = String(s).match(/(\d+):(\d+) (AM|PM)/); if (!m) return 0;
      let h = Number(m[1]) % 12; if (m[3] === 'PM') h += 12;
      return h * 60 + Number(m[2]);
    };
    return toMin(a.time.split(' - ')[0]) - toMin(b.time.split(' - ')[0]);
  });

  // Keep the full window visible without inventing extra study tasks.
  // Any unused time is shown as a light flex/revision block.
  const final = [];
  let previousEnd = 8 * 60;
  result.forEach(item => {
    const start = (() => {
      const m = item.time.split(' - ')[0].match(/(\d+):(\d+) (AM|PM)/);
      let h = Number(m[1]) % 12; if (m[3] === 'PM') h += 12;
      return h * 60 + Number(m[2]);
    })();
    if (start > previousEnd) {
      const gap = start - previousEnd;
      if (gap >= 30) final.push({
        id: `flex-${dateStr}-${previousEnd}`,
        time: `${minutesToClock(previousEnd)} - ${minutesToClock(start)}`,
        title: '↻ Flex Revision / Backlog Buffer',
        isBreak: false,
        sectionLabel: 'Flex'
      });
    }
    final.push(item);
    const end = (() => {
      const m = item.time.split(' - ')[1].match(/(\d+):(\d+) (AM|PM)/);
      let h = Number(m[1]) % 12; if (m[3] === 'PM') h += 12;
      return h * 60 + Number(m[2]);
    })();
    previousEnd = Math.max(previousEnd, end);
  });
  if (previousEnd < 20 * 60 + 30) {
    final.push({
      id: `flex-${dateStr}-end`,
      time: `${minutesToClock(previousEnd)} - 08:30 PM`,
      title: '↻ Flex Revision / Backlog Buffer',
      isBreak: false,
      sectionLabel: 'Flex'
    });
  }
  return final;
}
function renderDailySchedule() {
  try {
    const container = document.getElementById('todoListContainer'); if (!container) return;
    const day = new Date(`${getSafeDateStr()}T12:00:00`);
    const cycleEl = document.getElementById('cycleDay'); if (cycleEl) cycleEl.innerText = `${((Math.floor(day.getTime() / 86400000) % 40) + 1)}`;
    const tStr = getSafeDateStr();
    if (!window.appData.tasks) window.appData.tasks = {};
    if (!window.appData.tasks[tStr]) window.appData.tasks[tStr] = {};
    const tState = window.appData.tasks[tStr];
    const plan = generateDailySchedule();
    container.innerHTML = plan.map(item => {
      const safeId = String(item.id).replace(/'/g, "\\'");
      const checked = !!tState[item.id];
      return `<label class="checkbox-container todo-item ${item.isBreak ? 'break' : ''}" data-plan-section="${escapeHTML(item.sectionLabel || 'Flex')}">
        <div class="todo-main"><span class="todo-time">${escapeHTML(item.time)}</span><span class="todo-task ${item.isBreak ? 'text-orange' : ''}">${escapeHTML(item.title)}</span></div>
        ${item.isBreak ? '<span class="todo-break-label">BREAK</span>' : `<input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleTask('${safeId}', this.checked)"><span class="checkmark"></span>`}
      </label>`;
    }).join('');
    updateTaskSummaryAndStreak();
    window.commandRenderMission?.();
  } catch(e) { console.error('Daily plan render:', e); }
}

window.toggleTask = function(tId, checked) { try{ const tStr = getSafeDateStr(); if (!window.appData.tasks[tStr]) window.appData.tasks[tStr] = {}; window.appData.tasks[tStr][tId] = checked; saveDataLocally(); updateTaskSummaryAndStreak(); } catch(e){} };
function updateTaskSummaryAndStreak() {
    try {
        let streak = 0; const curr = new Date();
        while (streak < 366) {
            const dStr = getSafeDateStr(curr);
            const state = window.appData.tasks[dStr] || {};
            const taskIds = generateDailySchedule(dStr).filter(x => !x.isBreak).map(x => x.id);
            const completed = taskIds.filter(tid => !!state[tid]).length;
            if (!completed) break;
            streak++; curr.setDate(curr.getDate() - 1);
        }
        const el=document.getElementById('taskStreak'); if(el)el.innerText = streak;
    } catch(e){}
}

// --- BANKING EXAM SPEED MATHS QUIZ ---
let quizQs = []; let currentQ = 0; let quizScore = 0; let quizInterval = null; let quizStartTime = 0;
let quizDurationMs = 300000; let quizTimeTaken = 0; let quizCorrect = 0; let quizWrong = 0; let quizLog = []; let quizFinished = false;
const quizRand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const quizPick = list => list[quizRand(0, list.length - 1)];
const quizShuffle = list => list.map(value => ({ value, sort: Math.random() })).sort((a,b) => a.sort-b.sort).map(x => x.value);
function quizOptionSet(answer, category) {
    const a = Number(Number(answer).toFixed(2));
    const steps = Math.max(1, Math.abs(a) * 0.08);
    const candidates = [a + 1, a - 1, a + 2, a - 2, a + 5, a - 5, a + steps, a - steps, a * 1.1, a * 0.9, a + 10, a - 10];
    const values = [a];
    for (const raw of candidates) {
        const candidate = Number(Number(raw).toFixed(2));
        if (candidate >= 0 && !values.some(x => Math.abs(x-candidate) < 0.001)) values.push(candidate);
        if (values.length === 4) break;
    }
    // Very small answers can otherwise create fewer than four unique distractors.
    let bump = 3;
    while (values.length < 4) { const candidate = Number((a + bump++).toFixed(2)); if (!values.includes(candidate)) values.push(candidate); }
    return quizShuffle(values);
}
function buildBankingQuizQuestion() {
    const factories = [
        () => { const a=quizRand(18,75), b=quizRand(12,45), c=quizRand(2,9); return {q:`${a} × ${b} ÷ ${c} = ?`,ans:a*b/c,category:'Multiplication & Division'}; },
        () => { const n=quizRand(12,45); return {q:`${n}² = ?`,ans:n*n,category:'Squares'}; },
        () => { const n=quizRand(3,15); return {q:`${n}³ = ?`,ans:n*n*n,category:'Cubes'}; },
        () => { const p=quizPick([5,10,12,15,20,25,30,35,40,45,60,75]), n=quizRand(4,40)*20; return {q:`${p}% of ${n} = ?`,ans:p*n/100,category:'Percentage'}; },
        () => { const base=quizRand(8,30)*10, p=quizPick([10,12,15,20,25]); return {q:`A value ${p}% increases from ${base}. What is the new value?`,ans:base*(1+p/100),category:'Percentage Change'}; },
        () => { const a=quizRand(2,8), b=quizRand(2,9), total=(a+b)*quizRand(8,20); return {q:`Divide ₹${total} in the ratio ${a}:${b}. What is the first share?`,ans:total*a/(a+b),category:'Ratio & Proportion'}; },
        () => { const nums=Array.from({length:5},()=>quizRand(12,90)); const sum=nums.reduce((x,y)=>x+y,0); return {q:`Find the average of ${nums.join(', ')}.`,ans:sum/5,category:'Average'}; },
        () => { const cp=quizRand(20,100)*10, p=quizPick([5,10,12,15,20,25]); return {q:`An item costs ₹${cp}. Find its selling price at ${p}% profit.`,ans:cp*(1+p/100),category:'Profit & Loss'}; },
        () => { const mp=quizRand(20,100)*10, d=quizPick([5,10,15,20,25,30]); return {q:`Marked price is ₹${mp}. What is the price after ${d}% discount?`,ans:mp*(1-d/100),category:'Discount'}; },
        () => { const p=quizRand(10,80)*100, r=quizPick([5,6,8,10,12]), t=quizRand(1,4); return {q:`Find simple interest on ₹${p} at ${r}% p.a. for ${t} year(s).`,ans:p*r*t/100,category:'Simple Interest'}; },
        () => { const p=quizRand(10,50)*100, r=quizPick([5,10,20]), t=2; return {q:`Find compound interest on ₹${p} at ${r}% p.a. for 2 years (annual compounding).`,ans:p*Math.pow(1+r/100,t)-p,category:'Compound Interest'}; },
        () => { const a=quizPick([6,8,10,12,15,18,20]), b=quizPick([8,10,12,15,16,20,24]); return {q:`A completes a job in ${a} days and B in ${b} days. How long together?`,ans:1/(1/a+1/b),category:'Time & Work'}; },
        () => { const speed=quizRand(30,90), time=quizPick([1,1.5,2,2.5,3,4]); return {q:`A car travels at ${speed} km/h for ${time} hour(s). Find the distance.`,ans:speed*time,category:'Speed, Time & Distance'}; },
        () => { const start=quizRand(2,20), d=quizRand(3,12); return {q:`Find the next number: ${start}, ${start+d}, ${start+2*d}, ${start+3*d}, ?`,ans:start+4*d,category:'Number Series'}; },
        () => { const a=quizRand(100,600), b=quizRand(10,90), c=quizPick([2,3,4,5,6]); return {q:`Simplify: ${a} + ${b} × ${c} − ${b}.`,ans:a+b*c-b,category:'Simplification'}; },
        () => { const a=quizRand(3,12), b=quizRand(2,9), n=(a+b)*quizRand(3,12); return {q:`If ${a} : ${b} = x : ${n}, find x.`,ans:a*n/b,category:'Ratio & Proportion'}; },
        () => { const a=quizRand(12,50), p=quizPick([10,20,25,50]); return {q:`${p}% of a number is ${a*p/100}. Find the number.`,ans:a,category:'Percentage'}; },
        () => { const n=quizRand(15,60), m=quizRand(4,15); return {q:`A train moves at ${n*5} km/h. How many metres does it cover in ${m} seconds?`,ans:n*5*1000/3600*m,category:'Speed, Time & Distance'}; },
        () => { const a=quizRand(12,35), b=quizRand(12,35), c=quizRand(12,35); return {q:`The average of ${a}, ${b} and ${c} is?`,ans:(a+b+c)/3,category:'Average'}; },
        () => { const p=quizPick([10,12,15,20,25]), n=quizRand(20,80)*10; return {q:`A number is reduced by ${p}%. If it was ${n}, what is the reduced value?`,ans:n*(1-p/100),category:'Percentage Change'}; }
    ];
    const item=quizPick(factories)();
    item.ans=Number(Number(item.ans).toFixed(2));
    item.opts=quizOptionSet(item.ans,item.category);
    return item;
}
window.startSpeedQuiz = function() {
    try {
        if (quizInterval) clearInterval(quizInterval);
        quizQs = Array.from({length:20}, buildBankingQuizQuestion);
        quizScore=0; currentQ=0; quizTimeTaken=0; quizCorrect=0; quizWrong=0; quizLog=[]; quizFinished=false;
        quizStartTime=Date.now(); quizInterval=setInterval(updateQuizTimer,30); renderQuizQ();
    } catch(e) { console.error('Speed quiz start failed:',e); window.showToast?.('Could not start the quiz. Please try again.',true); }
};
function updateQuizTimer() {
    try {
        if(quizFinished)return;
        let left=quizDurationMs-(Date.now()-quizStartTime);
        if(left<=0){left=0;finishQuiz();}
        const el=document.getElementById('quizTimerDisplay');
        if(el)el.innerText=`${String(Math.floor(left/60000)).padStart(2,'0')}:${String(Math.floor((left%60000)/1000)).padStart(2,'0')}:${String(Math.floor((left%1000)/10)).padStart(2,'0')}`;
    } catch(e){}
}
function renderQuizQ() {
    try {
        if(quizFinished)return;
        if(currentQ>=20){finishQuiz();return;}
        const scoreEl=document.getElementById('quizScore'); if(scoreEl)scoreEl.innerText=quizScore;
        const qData=quizQs[currentQ];
        const options=qData.opts.map((opt,idx)=>`<button class="btn-secondary hover-lift quiz-opt-btn" id="qBtn${idx}" onclick="checkQuiz(${opt}, ${qData.ans}, 'qBtn${idx}')">${opt}</button>`).join('');
        const box=document.getElementById('quizContainer');
        if(box)box.innerHTML=`<div class="quiz-question-meta">QUESTION ${currentQ+1}/20 · ${qData.category}</div><h2 style="margin-bottom:25px;font-size:clamp(1.5rem,3vw,2.5rem);font-weight:800;color:var(--text-main);">${currentQ+1}. ${qData.q}</h2><div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px;" id="quizOpts">${options}</div>`;
    } catch(e) { console.error('Question render failed:',e); }
}
window.checkQuiz = function(sel, ans, btnId) {
    try {
        if(quizFinished || quizLog.some(item=>item.questionIndex===currentQ))return;
        const isRight=Math.abs(Number(sel)-Number(ans))<0.001;
        const btn=document.getElementById(btnId);
        if(isRight){btn?.classList.add('quiz-correct');quizScore++;quizCorrect++;}
        else{btn?.classList.add('quiz-wrong');quizWrong++;}
        quizLog.push({questionIndex:currentQ,q:quizQs[currentQ].q,ans,sel,isRight,category:quizQs[currentQ].category});
        document.querySelectorAll('.quiz-opt-btn').forEach(button=>button.disabled=true);
        setTimeout(()=>{if(!quizFinished){currentQ++;renderQuizQ();}},450);
    } catch(e) { console.error('Quiz answer failed:',e); }
};
function finishQuiz() {
    if(quizFinished)return;
    quizFinished=true;
    try {
        if(quizInterval)clearInterval(quizInterval);quizInterval=null;
        const timeTakenMs=Math.min(quizDurationMs,Math.max(0,Date.now()-quizStartTime));
        const container=document.getElementById('quizContainer');
        if(container)container.innerHTML=`<h3 class="text-emerald mb-3">Quiz Finished!</h3><p>${quizLog.length}/20 questions attempted · ${quizScore} correct.</p><button class="btn-primary" onclick="startSpeedQuiz()">Restart Quiz</button>`;
        let sumHtml=`<div style="display:flex;justify-content:space-around;margin-bottom:15px;font-size:1.1rem;border-bottom:1px solid var(--border-glass);padding-bottom:10px;"><span class="text-emerald">Score: ${quizScore}/20</span><span>Time: ${String(Math.floor(timeTakenMs/60000)).padStart(2,'0')}:${String(Math.floor((timeTakenMs%60000)/1000)).padStart(2,'0')}</span></div>`;
        quizLog.forEach((item,index)=>{
            const bg=item.isRight?'rgba(16,185,129,.1)':'rgba(239,68,68,.1)',border=item.isRight?'var(--neon-emerald)':'var(--danger)',icon=item.isRight?'✅':'❌';
            sumHtml+=`<div style="background:${bg};border:1px solid ${border};border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:5px;"><div style="display:flex;justify-content:space-between;font-weight:bold;font-size:1.05rem;"><span>Q${index+1}: ${item.q}</span><span>${icon}</span></div><small>${item.category}</small><div style="font-size:.95rem;color:var(--text-muted);">Correct answer: <b class="text-emerald">${item.ans}</b> · Your answer: <b>${item.sel}</b></div></div>`;
        });
        const summaryList=document.getElementById('quizSummaryList'),summaryModal=document.getElementById('quizSummaryModal');
        if(summaryList)summaryList.innerHTML=sumHtml;if(summaryModal)summaryModal.classList.add('show');
        if(!Array.isArray(window.appData.quizHistory))window.appData.quizHistory=[];
        const finishedAt=Date.now(),questionTypes={};
        quizLog.forEach(item=>{const key=item.category||'Other';questionTypes[key]??={attempted:0,wrong:0};questionTypes[key].attempted++;if(!item.isRight)questionTypes[key].wrong++;});
        window.appData.quizHistory.push({id:`quiz-${finishedAt}-${quizScore}-${quizCorrect}-${quizWrong}`,date:getSafeDateStr(),score:quizScore,timeTakenMs,correct:quizCorrect,wrong:quizWrong,attempted:quizLog.length,questionTypes,timestamp:finishedAt});
        window.appData.quizHistory=dedupeQuizHistory(window.appData.quizHistory);
        saveDataLocally('quiz-save');renderTracker();
        if(document.getElementById('view-analytics')?.classList.contains('active'))window.renderCharts?.();
    } catch(e) { console.error('Quiz finish failed:',e); }
}

// --- STUDY ROOM TIMERS ---
let sessionInterval = null, sessionSecs = 0, sessionStartedAt = null;
let focusInterval = null, focusSecs = 0, focusStartedAt = null;
let wasteInterval = null, wasteSecs = 0, wasteStartedAt = null;
function formatHMS(s) { if(isNaN(s) || s < 0) s = 0; return `${String(Math.floor(s/3600)).padStart(2,'0')}:${String(Math.floor((s%3600)/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`; }
function elapsedFrom(start, base){ return Math.max(0, Math.floor((Date.now() - start) / 1000) + (base || 0)); }

window.resetSessionTimer = function() {
    try {
        if (sessionInterval) clearInterval(sessionInterval);
        sessionInterval = null; sessionStartedAt = null; sessionSecs = 0;
        const el = document.getElementById('sessionTimeDisplay'); if (el) el.innerText = '00:00:00';
        const startBtn = document.getElementById('btnSessionStart'); if (startBtn) startBtn.disabled = false;
        const endBtn = document.getElementById('btnSessionEnd'); if (endBtn) endBtn.disabled = true;
        showToast('Session timer reset.');
    } catch(e) {}
};

window.startSession = function() { try { if (!sessionInterval) { if (isNaN(sessionSecs)) sessionSecs = 0; sessionStartedAt = Date.now(); sessionInterval = setInterval(() => { sessionSecs = elapsedFrom(sessionStartedAt, 0); const el=document.getElementById('sessionTimeDisplay'); if(el) el.innerText = formatHMS(sessionSecs); }, 1000); document.getElementById('btnSessionStart').disabled = true; document.getElementById('btnSessionEnd').disabled = false; showToast("Study Session Started!"); } } catch(e){} };
window.endSession = function() { try { if (sessionInterval) { sessionSecs = elapsedFrom(sessionStartedAt, 0); clearInterval(sessionInterval); sessionInterval = null; sessionStartedAt = null; } document.getElementById('btnSessionStart').disabled = false; document.getElementById('btnSessionEnd').disabled = true; const todayStr = getSafeDateStr(); if (isNaN(sessionSecs)) sessionSecs = 0; window.appData.dailySessions[todayStr] = (window.appData.dailySessions[todayStr] || 0) + sessionSecs; if(!window.appData.attendance) window.appData.attendance = {}; if(!window.appData.attendance[todayStr]) window.appData.attendance[todayStr] = { status: 'present', hours: 0 }; window.appData.attendance[todayStr].status = 'present'; window.appData.attendance[todayStr].hours = ((window.appData.attendance[todayStr].hours || 0) + (sessionSecs/3600)); saveDataLocally(); renderDailySummaryTable(); renderCalendar(); showToast(`Session Ended. Total Sitting: ${formatHMS(sessionSecs)}`); sessionSecs = 0; document.getElementById('sessionTimeDisplay').innerText = "00:00:00"; } catch(e){} };
window.resetFocusTimer = function() {
    try {
        if (focusInterval) clearInterval(focusInterval);
        focusInterval = null; focusStartedAt = null; focusSecs = 0;
        const el = document.getElementById('focusTimerDisplay'); if (el) el.innerText = '00:00:00';
        const btn = document.getElementById('btnFocus');
        if (btn) {
            btn.innerHTML = '<i class="ph-fill ph-play"></i> Start';
            btn.classList.remove('btn-danger'); btn.classList.add('btn-primary');
        }
        showToast('Focus timer reset.');
    } catch(e) {}
};

window.toggleFocusTimer = function() { try { const btn = document.getElementById('btnFocus'); if (focusInterval) { focusSecs = elapsedFrom(focusStartedAt, 0); clearInterval(focusInterval); focusInterval = null; focusStartedAt = null; btn.innerHTML = '<i class="ph-fill ph-play"></i> Resume'; btn.classList.replace('btn-danger', 'btn-primary'); } else { if (isNaN(focusSecs)) focusSecs = 0; focusStartedAt = Date.now() - (focusSecs * 1000); focusInterval = setInterval(() => { focusSecs = elapsedFrom(focusStartedAt, 0); const el=document.getElementById('focusTimerDisplay'); if(el) el.innerText = formatHMS(focusSecs); }, 1000); btn.innerHTML = '<i class="ph-fill ph-pause"></i> Pause'; btn.classList.replace('btn-primary', 'btn-danger'); } } catch(e){} };
window.submitFocusTimer = function() { try { if (focusInterval) { focusSecs = elapsedFrom(focusStartedAt, 0); clearInterval(focusInterval); focusInterval = null; focusStartedAt = null; } const btn = document.getElementById('btnFocus'); btn.innerHTML = '<i class="ph-fill ph-play"></i> Start'; btn.classList.replace('btn-danger', 'btn-primary'); if (isNaN(focusSecs)) focusSecs = 0; if (focusSecs > 0) { const subjEl = document.getElementById('focusSubject'); window.appData.studyLogs.unshift({ id: Date.now(), date: getSafeDateStr(), type: 'Focus', subject: subjEl ? subjEl.value : 'Study', duration: focusSecs, durationStr: formatHMS(focusSecs) }); saveDataLocally(); renderDailySummaryTable(); showToast("Focus Time Logged!"); } else { showToast("Timer is 0!", true); } focusSecs = 0; document.getElementById('focusTimerDisplay').innerText = "00:00:00"; } catch(e){} };
window.resetWasteTimer = function() {
    try {
        if (wasteInterval) clearInterval(wasteInterval);
        wasteInterval = null; wasteStartedAt = null; wasteSecs = 0;
        const el = document.getElementById('wasteTimerDisplay'); if (el) el.innerText = '00:00:00';
        const btn = document.getElementById('btnWaste');
        if (btn) {
            btn.innerHTML = '<i class="ph-fill ph-play"></i> Start';
            btn.classList.remove('btn-secondary'); btn.classList.add('btn-danger');
        }
        showToast('Waste timer reset.');
    } catch(e) {}
};

window.toggleWasteTimer = function() { try { const btn = document.getElementById('btnWaste'); if (wasteInterval) { wasteSecs = elapsedFrom(wasteStartedAt, 0); clearInterval(wasteInterval); wasteInterval = null; wasteStartedAt = null; btn.innerHTML = '<i class="ph-fill ph-play"></i> Resume'; btn.classList.replace('btn-secondary', 'btn-danger'); } else { if (isNaN(wasteSecs)) wasteSecs = 0; wasteStartedAt = Date.now() - (wasteSecs * 1000); wasteInterval = setInterval(() => { wasteSecs = elapsedFrom(wasteStartedAt, 0); const el=document.getElementById('wasteTimerDisplay'); if(el) el.innerText = formatHMS(wasteSecs); }, 1000); btn.innerHTML = '<i class="ph-fill ph-pause"></i> Pause'; btn.classList.replace('btn-danger', 'btn-secondary'); } } catch(e){} };
window.submitWasteTimer = function() { try { if (wasteInterval) { wasteSecs = elapsedFrom(wasteStartedAt, 0); clearInterval(wasteInterval); wasteInterval = null; wasteStartedAt = null; } const btn = document.getElementById('btnWaste'); btn.innerHTML = '<i class="ph-fill ph-play"></i> Start'; btn.classList.replace('btn-secondary', 'btn-danger'); const noteEl = document.getElementById('wasteNote'); const note = noteEl ? noteEl.value : 'Time Wasted'; if (isNaN(wasteSecs)) wasteSecs = 0; if (wasteSecs > 0) { window.appData.studyLogs.unshift({ id: Date.now(), date: getSafeDateStr(), type: 'Waste', subject: note, duration: wasteSecs, durationStr: formatHMS(wasteSecs) }); saveDataLocally(); renderDailySummaryTable(); showToast("Time Waste Logged!"); } wasteSecs = 0; document.getElementById('wasteTimerDisplay').innerText = "00:00:00"; if(noteEl) noteEl.value = ''; } catch(e){} };

// --- SCHOOL ATTENDANCE ---
window.markAttendance = function() { try { const today = getSafeDateStr(); if (!window.appData.attendance) window.appData.attendance = {}; if (!window.appData.attendance[today]) { window.appData.attendance[today] = { status: 'present', hours: 0 }; saveDataLocally(); renderCalendar(); updateTaskSummaryAndStreak(); showToast("Attendance Marked Present!"); } else { showToast("Already Marked Today!", true); } } catch(e){} };
function renderCalendar() {
    try {
        const grid = document.getElementById('calendarGrid'); if (!grid) return; grid.innerHTML = '';
        const tbody = document.getElementById('attendanceRegisterBody'); if (tbody) tbody.innerHTML = '';
        if(!window.appData.attendance || Array.isArray(window.appData.attendance)) window.appData.attendance = {}; 

        const now = new Date(); const year = now.getFullYear(); const month = now.getMonth(); const todayDate = now.getDate();
        const daysInMonth = new Date(year, month + 1, 0).getDate(); const firstDay = new Date(year, month, 1).getDay();
        
        for (let i = 0; i < firstDay; i++) { grid.innerHTML += `<div class="cal-day" style="opacity:0;"></div>`; }
        const todayStr = getSafeDateStr();
        let mPres = 0, mAbs = 0, yPres = 0, yAbs = 0;

        for(let yM = 0; yM <= month; yM++) {
            let maxD = (yM === month) ? todayDate : new Date(year, yM + 1, 0).getDate();
            for(let d = 1; d <= maxD; d++) {
                let loopD = new Date(year, yM, d); let lStr = getSafeDateStr(loopD);
                let isP = window.appData.attendance[lStr] && window.appData.attendance[lStr].status === 'present';
                if(isP) yPres++; else if(loopD < now && lStr !== todayStr) yAbs++;
            }
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const loopD = new Date(year, month, day); const loopStr = getSafeDateStr(loopD); const isToday = loopStr === todayStr; const isPast = loopD < new Date(now.getFullYear(), now.getMonth(), todayDate);
            let attObj = window.appData.attendance[loopStr]; let isPresent = attObj && attObj.status === 'present';
            let statusClass = 'cal-future'; 
            
            if (isPresent) { statusClass = 'cal-present'; mPres++; } else if (isPast && !isToday) { statusClass = 'cal-absent'; mAbs++; }
            if (isToday) statusClass += ' cal-today'; 
            grid.innerHTML += `<div class="cal-day ${statusClass}">${day}</div>`;

            if (tbody && (isPresent || isPast)) { 
                let statusText = isPresent ? 'Present' : 'Absent'; let hrs = attObj && attObj.hours ? attObj.hours.toFixed(1) + ' hrs' : '-';
                tbody.innerHTML = `<tr><td>${loopStr}</td><td>${loopD.toLocaleDateString('en-US', {weekday:'short'})}</td><td class="att-${statusClass.split(' ')[0]}">${statusText}</td><td>${hrs}</td></tr>` + tbody.innerHTML; 
            }
        }
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val; };
        setTxt('monthPresent', mPres); setTxt('monthAbsent', mAbs); setTxt('yearPresent', yPres); setTxt('yearAbsent', yAbs);
    } catch(e) { console.error("Calendar Error:", e); }
}

// --- SMART VAULT (FIXED: SHOWS ALL FOLDERS EVEN WITHOUT PARENT ID) ---
let currentFolderParent = null; 
function renderVaultFolders(parentId = null) {
    try {
        currentFolderParent = parentId; const grid = document.getElementById('vaultFolders'); if(!grid) return; grid.innerHTML = ''; const bread = document.getElementById('vaultBreadcrumb');
        if(parentId) { bread.style.display = 'block'; let f = window.appData.vaultFolders.find(x => x.id === parentId); bread.innerHTML = `<i class="ph-bold ph-arrow-left"></i> Back (Current: ${escapeHTML(f ? f.name : '')})`; } else { bread.style.display = 'none'; }
        
        // DEEP FOLDER RECOVERY: If parentId is null (at the main page), fetch any folder that doesn't have a parentId or parentId is explicitly null.
        const folders = (window.appData.vaultFolders || []).filter(f => {
            if (!parentId) return !f.parentId; 
            return f.parentId === parentId; 
        });

        folders.forEach(f => { grid.innerHTML += `<div class="folder-card"><div style="cursor:pointer;" onclick="renderVaultFolders(${f.id})"><i class="ph-fill ph-folder" style="font-size:3rem; color:var(--neon-blue);"></i> <h4 style="margin-top:10px;">${escapeHTML(f.name)}</h4></div><div class="folder-actions"><button class="btn-secondary" style="padding:2px 6px;" onclick="renameFolder(${f.id})">✏️</button><button class="btn-danger" style="padding:2px 6px;" onclick="deleteFolder(${f.id})">🗑️</button></div><div style="margin-top:10px;"><button class="btn-primary" style="font-size:0.7rem; padding:4px 8px;" onclick='openFolderModal(${f.id}, ${safeJSString(f.name)})'>View Notes/Files</button></div></div>`; });
    } catch(e){}
}
window.createNewFolder = function() { try{ let name = prompt("Enter Folder Name:"); if(name) { window.appData.vaultFolders.push({id: Date.now(), name, parentId: currentFolderParent}); saveDataLocally(); renderVaultFolders(currentFolderParent); showToast("Folder Created!"); } } catch(e){} };
window.renameFolder = function(id) { try{ let folder = window.appData.vaultFolders.find(f => f.id === id); if(!folder) return; let newName = prompt("Rename folder:", folder.name); if(newName) { folder.name = newName; saveDataLocally(); renderVaultFolders(currentFolderParent); } } catch(e){} }

let currentOpenFolderId = null;
window.openFolderModal = function(id, name) { try{ currentOpenFolderId = id; document.getElementById('currentFolderName').innerText = name; renderNotesGrid(); document.getElementById('folderModal').classList.add('show'); } catch(e){} };
window.createSubFolder = function() { try{ let name = prompt("Enter Sub-Folder Name:"); if(name) { window.appData.vaultFolders.push({id: Date.now(), name, parentId: currentOpenFolderId}); saveDataLocally(); showToast("Sub-folder Created!"); closeModal('folderModal'); renderVaultFolders(currentOpenFolderId); } } catch(e){} }

window.togglePinNote = function(id) {
    try { let note = window.appData.vaultNotes.find(n => n.id === id); if(note) { note.pinned = !note.pinned; saveDataLocally(); renderNotesGrid(); renderDashboardStickyNotes(); } } catch(e){}
};

function renderNotesGrid() {
    try {
        const grid = document.getElementById('notesGrid'); grid.innerHTML = ''; 
        grid.style.display = 'grid'; grid.style.gridTemplateColumns = 'repeat(4, 1fr)'; grid.style.gap = '15px'; grid.style.alignItems = 'start';
        
        let notes = (window.appData.vaultNotes || []).filter(n => n.folderId === currentOpenFolderId);
        notes.sort((a, b) => { if (a.pinned === b.pinned) return b.id - a.id; return a.pinned ? -1 : 1; });

        if(notes.length === 0) grid.innerHTML = `<p style="color:var(--text-muted); grid-column: 1 / -1;">No notes/files here yet.</p>`;
        
        const stickyColors = ['#fef08a', '#bbf7d0', '#bae6fd', '#fbcfe8']; 

        notes.forEach((n, idx) => { 
            let color = stickyColors[idx % stickyColors.length];
            let pinIcon = n.pinned ? 'ph-fill ph-push-pin' : 'ph ph-push-pin';
            let pinStyle = n.pinned ? 'color: #ea580c;' : 'color: rgba(0,0,0,0.5);';

            let contentHtml = '';
            if(n.type === 'text') {
                contentHtml = `<div style="flex:1; margin:8px 0; font-size: 0.85rem; line-height: 1.4; font-weight:600; white-space: pre-wrap; word-wrap: break-word; color:#222; overflow-y:auto;">${escapeHTML(n.content)}</div>`;
            } else {
                let fileCount = Array.isArray(n.content) ? n.content.length : 1;
                contentHtml = `<div style="flex:1; margin:8px 0; text-align:center; color:#222;"><i class="ph-duotone ph-image" style="font-size:2.5rem; opacity:0.8;"></i><p style="font-size:0.8rem; margin-top:5px; font-weight:bold;">${fileCount} File(s)</p><button style="margin-top:10px; width:100%; font-size:0.8rem; padding:6px; border-radius:6px; background:rgba(0,0,0,0.8); color:#fff; border:none; cursor:pointer;" onclick="previewFile('${n.id}')">View Preview</button></div>`;
            }

            grid.innerHTML += `
            <div class="hover-lift" style="background: ${color}; border-radius: 2px 15px 15px 15px; padding: 12px; position:relative; box-shadow: 2px 4px 10px rgba(0,0,0,0.3); min-height: 160px; max-height: 220px; display:flex; flex-direction:column;">
                <div style="position:absolute; top:-5px; left:50%; transform:translateX(-50%); width:30px; height:12px; background:rgba(255,255,255,0.7); box-shadow: 0 1px 2px rgba(0,0,0,0.1);"></div>
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(0,0,0,0.1); padding-bottom:5px; margin-bottom:5px; margin-top:5px;">
                    <b style="color:#444; font-size:0.75rem; cursor:pointer;" onclick="editNoteDate(${n.id})" title="Edit Date">${n.date}</b>
                    <i class="${pinIcon}" style="font-size:1.1rem; cursor:pointer; ${pinStyle}" onclick="togglePinNote(${n.id})" title="Pin/Unpin Note"></i>
                </div>
                ${contentHtml}
                <div style="display:flex; justify-content:space-between; margin-top:auto; border-top:1px solid rgba(0,0,0,0.1); padding-top:6px;">
                    ${n.type === 'text' ? `<button onclick="editNoteContent(${n.id})" style="background:transparent; border:none; font-size:0.75rem; font-weight:800; cursor:pointer; color:#111;">Edit</button>` : '<div></div>'}
                    <button onclick="deleteNote(${n.id})" style="background:transparent; border:none; font-size:0.75rem; font-weight:800; cursor:pointer; color:#dc2626;">Delete</button>
                </div>
            </div>`; 
        });
    } catch(e){}
}

window.addNoteToFolder = function() { try{ let content = prompt("Type your note here:"); if(content) { window.appData.vaultNotes.push({ id: Date.now(), folderId: currentOpenFolderId, type: 'text', content, date: getSafeDateStr(), pinned: false }); saveDataLocally(); renderNotesGrid(); } } catch(e){} };
window.editNoteContent = function(id) { try{ let note = window.appData.vaultNotes.find(n => n.id === id); if(note) { let newContent = prompt("Edit note:", note.content); if(newContent) { note.content = newContent; saveDataLocally(); renderNotesGrid(); renderDashboardStickyNotes(); } } } catch(e){} };
window.editNoteDate = function(id) { try{ let note = window.appData.vaultNotes.find(n => n.id === id); if(note) { let newDate = prompt("Edit Date (YYYY-MM-DD):", note.date); if(newDate) { note.date = newDate; saveDataLocally(); renderNotesGrid(); renderDashboardStickyNotes(); } } } catch(e){} };


let currentPreviewFiles = []; let currentPreviewIndex = 0;

window.renderCurrentPreview = function() {
    let container = document.getElementById('previewContainer'); let controls = document.getElementById('previewControls'); let counter = document.getElementById('previewCounter');
    if(currentPreviewFiles.length > 1) { controls.style.display = 'flex'; if(counter) counter.innerText = `(${currentPreviewIndex + 1} / ${currentPreviewFiles.length})`; } else { controls.style.display = 'none'; if(counter) counter.innerText = ''; }
    let fileObj = currentPreviewFiles[currentPreviewIndex];
    if(fileObj.type && fileObj.type.includes("pdf")) { container.innerHTML = `<iframe src="${fileObj.data}" width="100%" height="100%" style="border:none; border-radius:10px;"></iframe>`; } 
    else { container.innerHTML = `<img src="${fileObj.data}" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:10px;">`; }
};
window.prevPreviewFile = function() { if(currentPreviewIndex > 0) { currentPreviewIndex--; window.renderCurrentPreview(); } };
window.nextPreviewFile = function() { if(currentPreviewIndex < currentPreviewFiles.length - 1) { currentPreviewIndex++; window.renderCurrentPreview(); } };
function renderDailySummaryTable() {
    try {
        const tbody = document.getElementById('dailySummaryBody'); if (!tbody) return; tbody.innerHTML = ''; const datesMap = {};
        (window.appData.studyLogs || []).forEach(log => { if (!datesMap[log.date]) datesMap[log.date] = { focusSecs: 0, wasteSecs: 0, subjects: {}, wasteReasons: [] }; if (log.type === 'Focus') { datesMap[log.date].focusSecs += log.duration; datesMap[log.date].subjects[log.subject] = (datesMap[log.date].subjects[log.subject] || 0) + log.duration; } else { datesMap[log.date].wasteSecs += log.duration; datesMap[log.date].wasteReasons.push(log.subject); } });
        Object.keys(window.appData.dailySessions || {}).forEach(d => { if (!datesMap[d]) datesMap[d] = { focusSecs: 0, wasteSecs: 0, subjects: {}, wasteReasons: [] }; });
        const sortedDates = Object.keys(datesMap).sort((a,b) => new Date(b) - new Date(a));
        sortedDates.forEach(date => { const item = datesMap[date]; const subStr = Object.keys(item.subjects).map(s => `${s}: ${formatHMS(item.subjects[s])}`).join(', ') || 'N/A'; const wasteStr = item.wasteReasons.join('; ') || 'None'; const sessSecs = window.appData.dailySessions[date] || 0; tbody.innerHTML += `<tr><td class="font-bold" data-label="Date">${date}</td><td class="text-emerald font-bold" data-label="Focus Time">${formatHMS(item.focusSecs)}</td><td data-label="Subjects Breakdown">${subStr}</td><td class="text-danger font-bold" data-label="Waste Time">${formatHMS(item.wasteSecs)}</td><td data-label="Waste Reason"><div class="waste-reason-cell">${wasteStr}</div></td><td class="text-blue font-bold" data-label="Total Sitting">${formatHMS(sessSecs)}</td></tr>`; });
    } catch(e){}
}
function renderQuizHistoryTable() {
    try {
        const tbody = document.getElementById('quizLogBody'); if (!tbody) return; tbody.innerHTML = ''; const sorted = [...(window.appData.quizHistory || [])].sort((a,b) => b.timestamp - a.timestamp);
        sorted.forEach(q => { let m = Math.floor(q.timeTakenMs / 60000); let s = Math.floor((q.timeTakenMs % 60000) / 1000); tbody.innerHTML += `<tr><td>${q.date}</td><td>${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}</td><td class="text-emerald">${q.correct}</td><td class="text-danger">${q.wrong}</td><td class="font-bold text-blue">${q.score}</td></tr>`; });
    } catch(e){}
}
let charts = {};
function renderBaseCharts() {
    try {
        if (typeof Chart === 'undefined') { if (window.__kkEnsureChart) window.__kkEnsureChart().then(ok => { if (ok) window.renderCharts?.(); }); return; }
        const filter = document.getElementById('analyticsFilter').value; const typeFilter = document.getElementById('analyticsTypeFilter').value;
        let data = window.appData.mocks || []; if (filter !== 'All') data = data.filter(m => m.examType === filter); if (typeFilter !== 'All') data = data.filter(m => m.type === typeFilter); 
        data = data.slice(0, 20).reverse(); let labels = data.map(m => m.date ? m.date.substring(5) : ''); if(labels.length === 0) labels = ['No Data'];
        const safeMap = (arr, mapper) => arr.length ? arr.map(mapper) : [0];

        Object.keys(charts).forEach(k => { if (charts[k]) charts[k].destroy(); });

        try {
            const c1 = document.getElementById('chartTargetActual');
            if (c1) { charts.target = new Chart(c1, { type: 'line', data: { labels: labels.length ? labels : ['No Data'], datasets: [ { label: 'Actual Score', data: safeMap(data, m => parseFloat(m.totalMarks)||0), borderColor: '#38bdf8', backgroundColor: 'rgba(56, 189, 248, 0.1)', fill: true, tension: 0.4 }, { label: 'Target', data: safeMap(data, m => parseFloat(m.target)||0), borderColor: '#fb923c', borderDash: [5, 5], tension: 0 } ] }, options: { responsive: true, maintainAspectRatio: false } }); }
        } catch(e){}
        try {
            const c2 = document.getElementById('chartRadarSubjects');
            if (c2) {
                let avgE=0, avgQ=0, avgR=0;
                if(data.length > 0) {
                    let noRrbData = data.filter(m => !m.examType.includes("RRB") && m.eMarks !== '-'); 
                    avgE = noRrbData.length > 0 ? (noRrbData.reduce((s, m) => s + parseFloat(m.eMarks||0), 0) / noRrbData.length) : 0; 
                    avgQ = data.reduce((s, m) => s + parseFloat(m.qMarks||0), 0) / data.length; avgR = data.reduce((s, m) => s + parseFloat(m.rMarks||0), 0) / data.length;
                }
                charts.radar = new Chart(c2, { type: 'radar', data: { labels: ['English (No RRB)', 'Quants', 'Reasoning'], datasets: [{ label: 'Avg Score', data: [avgE.toFixed(1), avgQ.toFixed(1), avgR.toFixed(1)], backgroundColor: 'rgba(167, 139, 250, 0.2)', borderColor: '#a78bfa', pointBackgroundColor: '#38bdf8' }] }, options: { responsive: true, maintainAspectRatio: false, scales: { r: { beginAtZero: true } } } });
            }
        } catch(e){}
        try {
            const c3 = document.getElementById('chartQuizProgress');
            if(c3) {
                let qHist = window.appData.quizHistory || []; let qLabels = ['No Data'], qScores = [0], qTimes = [0];
                if(qHist.length > 0) {
                    let qData = qHist.slice(-20); qLabels = qData.map(q => q.date ? q.date.substring(5) : ''); qScores = qData.map(q => q.score || 0); qTimes = qData.map(q => (q.timeTakenMs||0)/1000);
                    document.getElementById('kpiQuizTotal').innerText = qHist.length; let avgS = qHist.reduce((s, q) => s + (q.score||0), 0) / qHist.length; document.getElementById('kpiQuizAvgScore').innerText = avgS.toFixed(1);
                    let avgT = qHist.reduce((s, q) => s + (q.timeTakenMs||0), 0) / qHist.length; document.getElementById('kpiQuizAvgTime').innerText = `${Math.floor(avgT/60000)}m ${Math.floor((avgT%60000)/1000)}s`; document.getElementById('kpiQuizTotalWrong').innerText = qHist.reduce((s, q) => s + (q.wrong||0), 0);
                }
                charts.quiz = new Chart(c3, { type: 'line', data: { labels: qLabels, datasets: [{ label: 'Score (/20)', yAxisID: 'y', data: qScores, borderColor: '#34d399', backgroundColor: 'rgba(52, 211, 153, 0.2)', fill: true, tension:0.3 }, { label: 'Time (Sec)', yAxisID: 'y1', data: qTimes, borderColor: '#fb923c', borderDash: [5,5], tension:0.3 }] }, options: { responsive:true, maintainAspectRatio:false, scales: { y: { type: 'linear', position: 'left', min: 0, max: 20 }, y1: { type: 'linear', position: 'right', min: 0 } } } });
            }
        } catch(e){}
        try {
            const c4 = document.getElementById('chartSessionDuration');
            if (c4) {
                let sessDates = Object.keys(window.appData.dailySessions||{}).sort((a,b)=> new Date(a)-new Date(b)).slice(-10);
                let sessLabels = sessDates.length ? sessDates.map(d => d.substring(5)) : ['No Data']; let sessHours = sessDates.length ? sessDates.map(d => (window.appData.dailySessions[d] / 3600).toFixed(2)) : [0];
                charts.session = new Chart(c4, { type: 'bar', data: { labels: sessLabels, datasets: [{ label: 'Sitting Duration (Hrs)', data: sessHours, backgroundColor: '#38bdf8', borderRadius: 8 }] }, options: { responsive: true, maintainAspectRatio: false } });
            }
        } catch(e){}
        try {
            const c5 = document.getElementById('chartPercentileTrend');
            if (c5) { charts.percentile = new Chart(c5, { type: 'line', data: { labels: labels.length ? labels : ['No Data'], datasets: [{ label: 'Percentile (%ile)', data: safeMap(data, m => parseFloat(m.percentile) || 0), borderColor: '#a78bfa', backgroundColor: 'rgba(167, 139, 250, 0.1)', fill: true, tension: 0.3 }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 100 } } } }); }
        } catch(e){}
        try {
            const ca = document.getElementById('chartAccuracyTrend');
            if (ca) { charts.accuracy = new Chart(ca, { type: 'line', data: { labels: labels.length ? labels : ['No Data'], datasets: [{ label: 'Overall Accuracy %', data: safeMap(data, m => parseFloat(m.totalAcc) || 0), borderColor: '#f43f5e', backgroundColor: 'rgba(244, 63, 94, 0.1)', fill: true, tension: 0.3 }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 100 } } } }); }
        } catch(e){}
        try {
            const c6 = document.getElementById('chartSubjectRightWrong');
            if (c6) {
                let eR=0, eW=0, qR=0, qW=0, rR=0, rW=0;
                if(data.length > 0) {
                    let noRrbData = data.filter(m => !m.examType.includes("RRB") && m.eMarks !== '-');
                    eR = noRrbData.reduce((s, m) => s + parseInt(m.eR||0), 0); eW = noRrbData.reduce((s, m) => s + parseInt(m.eW||0), 0); 
                    qR = data.reduce((s, m) => s + parseInt(m.qR||0), 0); qW = data.reduce((s, m) => s + parseInt(m.qW||0), 0); 
                    rR = data.reduce((s, m) => s + parseInt(m.rR||0), 0); rW = data.reduce((s, m) => s + parseInt(m.rW||0), 0);
                }
                charts.rightWrong = new Chart(c6, { type: 'bar', data: { labels: ['English (No RRB)', 'Quants', 'Reasoning'], datasets: [ { label: 'Right Answers', data: [eR, qR, rR], backgroundColor: '#34d399' }, { label: 'Wrong Answers', data: [eW, qW, rW], backgroundColor: '#f87171' } ] }, options: { responsive: true, maintainAspectRatio: false } });
            }
        } catch(e){}
    } catch(e) { console.error("Global Chart Error", e); }
};
// ============================================================
// V29.1 FUNCTIONALITY PATCH — MODALS, CHEAT SHEET & CALCULATORS
// ============================================================

window.closeModal = function(id) {
    try {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.remove('show');
        if (id === 'quizSummaryModal') {
            const list = document.getElementById('quizSummaryList');
            if (list) list.scrollTop = 0;
        }
        if (id === 'filePreviewModal') {
            try { (currentPreviewFiles || []).forEach(f => { if (f?.objectUrl) URL.revokeObjectURL(f.objectUrl); }); } catch (_) {}
            const c = document.getElementById('previewContainer');
            if (c) c.innerHTML = '';
            currentPreviewFiles = [];
        }
    } catch (e) { console.error('closeModal error', e); }
};

// Allow clicking the dark backdrop to close a modal, but not the modal card itself.
document.addEventListener('click', function(e) {
    try {
        if (e.target && e.target.classList && e.target.classList.contains('modal-overlay')) {
            if (e.target.id !== 'authOverlay') window.closeModal(e.target.id);
        }
    } catch (_) {}
});

// ---------- Cheat Sheet ----------
const CHEAT_SHEET = {
    quant: {
        'Percentage': [
            ['Percentage', 'Percentage = (Part / Whole) × 100', 'Used for marks, population, expenditure and comparison.'],
            ['Percentage Change', 'Change% = (Change / Original) × 100', 'For increase/decrease questions.'],
            ['Successive Change', 'Net % = a + b + (ab/100)', 'Use signs: increase positive, decrease negative.']
        ],
        'Profit, Loss & Discount': [
            ['Profit', 'Profit = SP − CP', 'Profit% = Profit/CP × 100.'],
            ['Loss', 'Loss = CP − SP', 'Loss% = Loss/CP × 100.'],
            ['Discount', 'Discount = MP − SP', 'Discount% = Discount/MP × 100.'],
            ['Selling Price', 'SP = CP × (100 + Profit%)/100', 'For profit. For loss use 100 − Loss%.']
        ],
        'Ratio & Proportion': [
            ['Ratio', 'a:b = a/b', 'Multiply/divide both terms by the same non-zero number.'],
            ['Proportion', 'a:b = c:d  ⇒  ad = bc', 'Cross multiplication.'],
            ['Divide a Total', 'A share = Total × a/(a+b)', 'For a:b division.']
        ],
        'Simple & Compound Interest': [
            ['Simple Interest', 'SI = PRT/100', 'P = principal, R = annual rate, T = years.'],
            ['Amount (SI)', 'A = P + SI', 'Amount after simple interest.'],
            ['Compound Amount', 'A = P(1 + R/100)^T', 'For annual compounding.'],
            ['Compound Interest', 'CI = A − P', 'For annual compounding.'],
            ['2-Year Difference', 'CI − SI = P(R/100)^2', 'Useful shortcut for 2 years, annual compounding.']
        ],
        'Average': [
            ['Average', 'Average = Sum / Number of items', 'Basic average formula.'],
            ['Combined Average', 'Avg = (n₁a₁ + n₂a₂)/(n₁+n₂)', 'For two groups.'],
            ['New Average', 'New sum = old sum ± change', 'Useful when one value is replaced.']
        ],
        'Time, Speed & Distance': [
            ['Speed', 'Speed = Distance / Time', 'Keep units consistent.'],
            ['Distance', 'Distance = Speed × Time', 'Convert hours/minutes when required.'],
            ['Time', 'Time = Distance / Speed', 'Basic relation.'],
            ['km/h to m/s', '× 5/18', 'Multiply km/h by 5/18.'],
            ['m/s to km/h', '× 18/5', 'Multiply m/s by 18/5.'],
            ['Relative Speed', 'Same direction: |u−v|; Opposite: u+v', 'Used in trains and races.']
        ],
        'Boats & Streams': [
            ['Downstream', 'D = B + S', 'B = boat speed in still water, S = stream speed.'],
            ['Upstream', 'U = B − S', 'Speed against stream.'],
            ['Boat Speed', 'B = (D + U)/2', 'Average of downstream and upstream speeds.'],
            ['Stream Speed', 'S = (D − U)/2', 'Half the difference.']
        ],
        'Time & Work / Pipes': [
            ['One-Day Work', 'If A finishes in x days, rate = 1/x', 'Add work rates for people working together.'],
            ['Together', '1/T = 1/A + 1/B', 'For two people/pipes working together.'],
            ['Efficiency', 'Efficiency ∝ 1/Time', 'Higher efficiency means less time.'],
            ['Work', 'Work = Efficiency × Time', 'Keep efficiency units consistent.']
        ],
        'Mixture & Alligation': [
            ['Weighted Average', 'Average = Total value / Total quantity', 'For mixtures of different prices/values.'],
            ['Alligation', 'Cheaper : Dearer = (Dearer−Mean):(Mean−Cheaper)', 'Classic mixture shortcut.']
        ],
        'Ages': [
            ['Age after n years', 'Present age + n', 'For future age.'],
            ['Age n years ago', 'Present age − n', 'For past age.'],
            ['Age Ratio', 'a:b remains based on actual ages', 'Difference in ages stays constant.']
        ],
        'Trains': [
            ['Train crossing pole', 'Time = Train length / Speed', 'Use metres and m/s.'],
            ['Two trains opposite', 'Relative speed = u + v', 'Time = total lengths / relative speed.'],
            ['Two trains same direction', 'Relative speed = |u−v|', 'Time = total lengths / relative speed.']
        ],
        'Number System / HCF / LCM': [
            ['Two Numbers', 'HCF × LCM = Product of the two numbers', 'Valid for two positive integers.'],
            ['Divisibility by 3', 'Digit sum divisible by 3', 'Same for 9 with digit sum divisible by 9.'],
            ['Divisibility by 11', 'Difference of alternating digit sums is 0 or multiple of 11', 'Useful shortcut.']
        ],
        'Mensuration': [
            ['Rectangle', 'Area = l×b; Perimeter = 2(l+b)', 'Basic 2D formula.'],
            ['Square', 'Area = a²; Perimeter = 4a', 'Diagonal = a√2.'],
            ['Circle', 'Area = πr²; Circumference = 2πr', 'Use π = 22/7 or 3.14 as required.'],
            ['Cylinder', 'Volume = πr²h', 'Curved surface area = 2πrh.']
        ]
    },
    reasoning: {
        'Syllogism': [
            ['Some A are B', 'A ∩ B exists', 'Do not assume all A are B.'],
            ['No A is B', 'A ∩ B = ∅', 'A and B are mutually exclusive.'],
            ['Some A are not B', 'At least one A lies outside B', 'It does not mean no A is B.']
        ],
        'Inequality': [
            ['Transitivity', 'A > B and B > C ⇒ A > C', 'Same-direction signs can be chained.'],
            ['Opposite signs', 'A > B and C < B', 'A and C cannot be directly compared.']
        ],
        'Direction Sense': [
            ['Cardinal directions', 'North ↑, South ↓, East →, West ←', 'Draw a small coordinate sketch.'],
            ['Right turn', 'N→E→S→W', 'Each right turn rotates 90°.'],
            ['Left turn', 'N→W→S→E', 'Each left turn rotates 90°.']
        ],
        'Coding-Decoding': [
            ['Alphabet positions', 'A=1, B=2, … Z=26', 'Memorize common positions.'],
            ['Opposite positions', 'A↔Z, B↔Y, …', 'Position pair sums to 27.']
        ],
        'Blood Relations': [
            ['Generation method', 'Draw a family tree', 'Do not solve long chains mentally.'],
            ['Maternal/Paternal', 'Mother side = maternal; father side = paternal', 'Use a simple tree.']
        ],
        'Seating Arrangement': [
            ['Linear', 'Fix a reference person/seat first', 'Track left/right carefully.'],
            ['Circular', 'Facing centre: left = clockwise; right = anticlockwise', 'Reverse when facing outside.']
        ],
        'Ranking & Order': [
            ['Total persons', 'Total = rank from top + rank from bottom − 1', 'Standard ranking formula.']
        ],
        'Calendar & Clock': [
            ['Leap year', 'Divisible by 4; century years must be divisible by 400', 'Example: 2000 leap, 1900 not.'],
            ['Clock angle', 'Angle = |30H − 5.5M|', 'H = hour, M = minutes.']
        ]
    },
    english: {
        'Subject-Verb Agreement': [
            ['Either / Neither', 'Usually takes a singular verb when used alone.', 'Either of the answers is correct.'],
            ['As well as', 'Verb agrees with the main subject before it.', 'The manager, as well as his staff, is present.'],
            ['Each / Every', 'Takes a singular verb.', 'Each student is ready.']
        ],
        'Articles': [
            ['A / An', 'Use a before consonant sound, an before vowel sound.', 'an hour, a university.'],
            ['The', 'Used for a specific/known noun and unique references.', 'the sun, the book on the table.']
        ],
        'Prepositions': [
            ['Senior / Junior', 'Use “to”, not “than”.', 'senior to me.'],
            ['Good at', 'Use “at” for ability/performance.', 'good at English.'],
            ['Different from', '“Different from” is the standard exam-safe form.', 'different from the original.']
        ],
        'Conjunctions & Pairs': [
            ['No sooner', 'No sooner … than …', 'No sooner did he arrive than it rained.'],
            ['Scarcely / Hardly', 'Scarcely/Hardly … when …', 'Hardly had I reached when it started.'],
            ['Lest', 'Often followed by should; avoid “not” after should.', 'Work hard lest you should fail.']
        ],
        'Tenses': [
            ['Since / For', 'Since = starting point; for = duration.', 'since Monday; for two days.'],
            ['Past Perfect', 'Earlier of two past actions takes had + V3.', 'He had left before I arrived.']
        ],
        'Pronouns': [
            ['Between you and me', 'After a preposition, use objective case.', 'between you and me.'],
            ['One', 'Maintain one/one’s consistently in formal usage.', 'One should do one’s duty.']
        ],
        'Common Error Rules': [
            ['Discuss', 'Do not use “discuss about” in standard exam usage.', 'We discussed the issue.'],
            ['Return', 'Avoid “return back”.', 'He returned home.'],
            ['Comprise', 'Whole comprises parts; “is comprised of” is often avoided in strict grammar tests.', 'The team comprises five members.']
        ]
    },
    banking: {
        'Banking Basics': [
            ['CRR', 'Cash Reserve Ratio = cash reserve maintained with RBI as a % of NDTL', 'Higher CRR generally reduces lendable funds.'],
            ['SLR', 'Statutory Liquidity Ratio = prescribed liquid assets as a % of NDTL', 'Used as a liquidity requirement.'],
            ['Repo Rate', 'Rate at which RBI lends short-term funds to banks against eligible securities', 'Policy-rate concept for exams.'],
            ['Reverse Repo', 'Rate at which RBI absorbs liquidity from banks', 'Conceptual banking awareness.']
        ],
        'Banking Numericals': [
            ['Simple Interest', 'SI = PRT/100', 'Common in banking arithmetic.'],
            ['Compound Interest', 'A = P(1+R/100)^T; CI=A−P', 'For annual compounding unless specified otherwise.'],
            ['EMI concept', 'EMI depends on principal, rate and tenure', 'Use the exact formula only when a question requires it; bank exams often test approximation/concepts.']
        ],
        'Economy Terms': [
            ['Inflation', 'General rise in price level', 'Reduces purchasing power when incomes do not rise proportionately.'],
            ['GDP', 'Market value of final goods and services produced within an economy', 'Know nominal vs real GDP conceptually.'],
            ['Fiscal Deficit', 'Total expenditure − total receipts excluding borrowings', 'Common economy awareness term.']
        ]
    }
};

window.openCheatSheet = function() {
    try {
        document.getElementById('cheatSheetModal').classList.add('show');
        window.switchCheatTab('maths');
    } catch (e) { console.error('openCheatSheet error', e); }
};
window.switchCheatTab = function(tab) {
    try {
        const maths = document.getElementById('cheatMathsTab'), formulas = document.getElementById('cheatFormulasTab');
        const b1 = document.querySelector("#cheatSheetModal button[onclick=\"switchCheatTab('maths')\"]");
        const b2 = document.querySelector("#cheatSheetModal button[onclick=\"switchCheatTab('formulas')\"]");
        if (tab === 'formulas') {
            if (maths) maths.style.display='none'; if (formulas) formulas.style.display='block';
            if (b1) b1.className='btn-secondary'; if (b2) b2.className='btn-primary';
            window.renderCheatFormulas('quant');
        } else {
            if (maths) maths.style.display='block'; if (formulas) formulas.style.display='none';
            if (b1) b1.className='btn-primary'; if (b2) b2.className='btn-secondary';
            window.renderCheatMaths();
        }
    } catch (e) { console.error('switchCheatTab error', e); }
};
window.renderCheatMaths = function() {
    try {
        const t=document.getElementById('csTables'), s=document.getElementById('csSquares'), c=document.getElementById('csCubes');
        if(t){t.innerHTML=''; for(let n=12;n<=30;n++){let col='<div class="cheat-col"><b>'+n+' Table</b><br>'; for(let i=1;i<=10;i++) col+=`${n} × ${i} = ${n*i}<br>`; col+='</div>'; t.innerHTML+=col;}}
        if(s){s.innerHTML=''; for(let i=2;i<=50;i++) s.innerHTML+=`${i}² = ${i*i}<br>`;}
        if(c){c.innerHTML=''; for(let i=1;i<=30;i++) c.innerHTML+=`${i}³ = ${i*i*i}<br>`;}
    } catch(e){console.error(e);}
};
window.renderCheatFormulas = function(subject='quant', chapter) {
    try {
        const data=CHEAT_SHEET[subject]||CHEAT_SHEET.quant;
        const sel=document.getElementById('cheatChapterSelect'); const current=document.getElementById('cheatCurrentSubject'); const content=document.getElementById('cheatFormulaContent');
        if(current) current.value=subject;
        document.querySelectorAll('#cheatFormulasTab .cheat-filter-row button').forEach(b=>b.className='btn-secondary');
        const active=document.getElementById('cheatSub'+subject.charAt(0).toUpperCase()+subject.slice(1)); if(active) active.className='btn-primary';
        if(sel){ const keys=Object.keys(data); sel.innerHTML=keys.map(k=>`<option value="${k.replace(/"/g,'&quot;')}">${k}</option>`).join(''); const chosen=chapter&&data[chapter]?chapter:keys[0]; sel.value=chosen; chapter=chosen; }
        const items=data[chapter]||data[Object.keys(data)[0]]||[];
        if(content) content.innerHTML=items.map(x=>`<div class="cheat-formula-card"><h4>${x[0]}</h4><div class="formula">${x[1]}</div><p>${x[2]}</p></div>`).join('');
    } catch(e){console.error('renderCheatFormulas error',e);}
};

// ---------- Smart Calculator ----------
window.openCalculator = function(){
    try { document.getElementById('calculatorModal').classList.add('show'); window.switchCalcTool('basic'); } catch(e){console.error(e);}
};
window.switchCalc = function(type){ window.switchCalcTool(type==='quad'?'quadratic':type); };
window.switchCalcTool = function(tool){
    try{
        document.querySelectorAll('#calculatorModal .calc-panel').forEach(p=>p.classList.remove('active'));
        const panel=document.getElementById('calcTool'+tool.charAt(0).toUpperCase()+tool.slice(1)+'Panel'); if(panel) panel.classList.add('active');
        document.querySelectorAll('#calculatorModal .calc-tool-grid > button').forEach(b=>b.className='btn-secondary');
        const btn=document.getElementById('calcTool'+(tool==='quadratic'?'Quad':tool.charAt(0).toUpperCase()+tool.slice(1))); if(btn) btn.className='btn-primary';
    }catch(e){console.error(e);}
};
let calcExpression='';
window.calcPress=function(v){ try{ calcExpression+=String(v); const d=document.getElementById('calcDisplay'); if(d)d.value=calcExpression; }catch(e){} };
window.calcClear=function(){calcExpression='';const d=document.getElementById('calcDisplay');if(d)d.value='';};
window.calcEval=function(){
    try{ if(!calcExpression)return; if(!/^[0-9+\-*/().\s]+$/.test(calcExpression))throw new Error('Invalid expression'); const result=Function('"use strict"; return ('+calcExpression+')')(); if(!Number.isFinite(result))throw new Error('Invalid calculation'); calcExpression=String(Number(result.toFixed(10))); document.getElementById('calcDisplay').value=calcExpression; }
    catch(e){ document.getElementById('calcDisplay').value='Error'; calcExpression=''; }
};
const num=id=>parseFloat(document.getElementById(id)?.value);
const out=(id,html)=>{const e=document.getElementById(id);if(e)e.innerHTML=html;};
const fmt=n=>Number.isFinite(n)?Number(n.toFixed(6)).toString():'—';
window.solveQuadratic=function(){
    const a=num('quadA'),b=num('quadB'),c=num('quadC');
    if(!Number.isFinite(a)||!Number.isFinite(b)||!Number.isFinite(c)||a===0){out('quadResult','Enter valid coefficients with <b>a ≠ 0</b>.');return;}
    const d=b*b-4*a*c;
    if(d>0){const r1=(-b+Math.sqrt(d))/(2*a),r2=(-b-Math.sqrt(d))/(2*a);out('quadResult',`<b>Discriminant:</b> ${fmt(d)}<div class="root-card"><div class="root-value">x₁ = ${fmt(r1)}</div><div class="root-value">x₂ = ${fmt(r2)}</div></div>`);}
    else if(d===0){const r=-b/(2*a);out('quadResult',`<b>Equal real roots</b><div class="root-card"><div class="root-value">x₁ = ${fmt(r)}</div><div class="root-value">x₂ = ${fmt(r)}</div></div>`);}
    else {const real=-b/(2*a), imag=Math.sqrt(-d)/(2*a);out('quadResult',`<b>Complex roots</b><div class="root-card"><div class="root-value">x₁ = ${fmt(real)} + ${fmt(Math.abs(imag))}i</div><div class="root-value">x₂ = ${fmt(real)} − ${fmt(Math.abs(imag))}i</div></div>`);}
};
window.calcPercentage=function(){const a=num('pctPart'),b=num('pctTotal');out('pctResult',Number.isFinite(a)&&Number.isFinite(b)&&b!==0?`Percentage = <b>${fmt(a/b*100)}%</b>`:'Enter valid Part and Total.');};
window.calcProfitLoss=function(){const cp=num('plCP'),sp=num('plSP');if(!Number.isFinite(cp)||!Number.isFinite(sp)||cp<=0){out('plResult','Enter valid prices.');return;}const diff=sp-cp,p=Math.abs(diff)/cp*100;out('plResult',diff>=0?`Profit = <b>${fmt(diff)}</b><br>Profit% = <b>${fmt(p)}%</b>`:`Loss = <b>${fmt(-diff)}</b><br>Loss% = <b>${fmt(p)}%</b>`);};
window.calcSI=function(){const p=num('siP'),r=num('siR'),t=num('siT');const si=p*r*t/100;out('siResult',Number.isFinite(si)?`SI = <b>${fmt(si)}</b><br>Amount = <b>${fmt(p+si)}</b>`:'Enter valid values.');};
window.calcCI=function(){const p=num('ciP'),r=num('ciR'),t=num('ciT');if(!Number.isFinite(p)||!Number.isFinite(r)||!Number.isFinite(t)){out('ciResult','Enter valid values.');return;}const a=p*Math.pow(1+r/100,t);out('ciResult',`Amount = <b>${fmt(a)}</b><br>CI = <b>${fmt(a-p)}</b>`);};
window.calcDST=function(){const f=document.getElementById('dstFind').value,a=num('dstA'),b=num('dstB'),c=num('dstC');if(f==='distance'){out('dstResult',Number.isFinite(b)&&Number.isFinite(c)?`Distance = <b>${fmt(b*c)} km</b>`:'Enter speed and time.');}else if(f==='speed'){out('dstResult',Number.isFinite(a)&&Number.isFinite(c)&&c!==0?`Speed = <b>${fmt(a/c)} km/h</b>`:'Enter distance and time.');}else{out('dstResult',Number.isFinite(a)&&Number.isFinite(b)&&b!==0?`Time = <b>${fmt(a/b)} hours</b>`:'Enter distance and speed.');}};
window.calcBoat=function(){const d=num('boatDown'),u=num('boatUp');out('boatResult',Number.isFinite(d)&&Number.isFinite(u)&&d>=u?`Boat speed = <b>${fmt((d+u)/2)}</b><br>Stream speed = <b>${fmt((d-u)/2)}</b>`:'Enter valid speeds (downstream ≥ upstream).');};
window.calcAverage=function(){const arr=(document.getElementById('avgNums')?.value||'').split(',').map(Number).filter(Number.isFinite);out('avgResult',arr.length?`Sum = <b>${fmt(arr.reduce((a,b)=>a+b,0))}</b><br>Average = <b>${fmt(arr.reduce((a,b)=>a+b,0)/arr.length)}</b>`:'Enter comma-separated numbers.');};
window.calcRatio=function(){const a=num('ratioA'),b=num('ratioB'),t=num('ratioTotal');if(!Number.isFinite(a)||!Number.isFinite(b)||a<=0||b<=0){out('ratioResult','Enter positive ratio terms.');return;}const g=Math.abs(gcdInt(Math.round(a),Math.round(b)));let html=`Simplified Ratio = <b>${fmt(a/g)} : ${fmt(b/g)}</b>`;if(Number.isFinite(t))html+=`<br>A share = <b>${fmt(t*a/(a+b))}</b><br>B share = <b>${fmt(t*b/(a+b))}</b>`;out('ratioResult',html);};
function gcdInt(a,b){a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b];}return a||1;}
window.calcTimeWork=function(){const a=num('twA'),b=num('twB');out('twResult',Number.isFinite(a)&&Number.isFinite(b)&&a>0&&b>0?`Together = <b>${fmt(1/(1/a+1/b))} days</b>`:'Enter valid days.');};
window.calcTrain=function(){const len=num('trLen'),speed=num('trSpeed'),time=num('trTime');if(Number.isFinite(len)&&Number.isFinite(speed)&&Number.isFinite(time)){const required=(len/(speed*5/18));out('trResult',`Time to cross a pole = <b>${fmt(required)} sec</b><br>Distance covered in given time = <b>${fmt(speed*5/18*time)} m</b>`);}else if(Number.isFinite(len)&&Number.isFinite(speed)){out('trResult',`Time to cross a pole = <b>${fmt(len/(speed*5/18))} sec</b>`);}else{out('trResult','Enter train length and speed.');}};
window.calcAge=function(){const a=num('ageNowA'),b=num('ageNowB'),y=num('ageYears');out('ageResult',Number.isFinite(a)&&Number.isFinite(b)&&Number.isFinite(y)?`A's age = <b>${fmt(a+y)}</b><br>B's age = <b>${fmt(b+y)}</b><br>Age difference = <b>${fmt(Math.abs(a-b))}</b>`:'Enter valid ages and years.');};
window.calcMixture=function(){const q1=num('mixQ1'),p1=num('mixP1'),q2=num('mixQ2'),p2=num('mixP2');out('mixResult',Number.isFinite(q1)&&Number.isFinite(p1)&&Number.isFinite(q2)&&Number.isFinite(p2)&&q1+q2>0?`Average price = <b>${fmt((q1*p1+q2*p2)/(q1+q2))}</b>`:'Enter valid quantities and prices.');};
window.calcPartnership=function(){const ca=num('partCA'),ma=num('partMA'),cb=num('partCB'),mb=num('partMB');if(![ca,ma,cb,mb].every(Number.isFinite)){out('partResult','Enter all values.');return;}const a=ca*ma,b=cb*mb;const g=gcdInt(Math.round(a),Math.round(b));out('partResult',`Profit ratio = <b>${fmt(a/g)} : ${fmt(b/g)}</b>`);};
window.calcHcfLcm=function(){const arr=(document.getElementById('hcfLcmNums')?.value||'').split(',').map(Number).filter(Number.isFinite).map(Math.abs);if(!arr.length){out('hcfLcmResult','Enter comma-separated positive integers.');return;}const h=arr.reduce((x,y)=>gcdInt(x,y));const l=arr.reduce((x,y)=>Math.abs(x/gcdInt(x,y)*y));out('hcfLcmResult',`HCF = <b>${h}</b><br>LCM = <b>${l}</b>`);};

window.calcWorkPipes=function(){
    const a=num('wpA'),b=num('wpB'),c=num('wpC'),hasC=String(document.getElementById('wpC')?.value||'').trim()!=='';
    if(!Number.isFinite(a)||!Number.isFinite(b)||a<=0||b<=0||(hasC&&(!Number.isFinite(c)||c<=0))){out('wpResult','Enter positive working days for each person/pipe.');return;}
    const rate=1/a+1/b+(hasC?1/c:0),days=1/rate;
    out('wpResult',`Combined rate = <b>${fmt(rate)} of the work/day</b><br>Time together = <b>${fmt(days)} days</b>`);
};
window.calcProbability=function(){
    const favourable=num('probFavour'),total=num('probTotal');
    if(!Number.isInteger(favourable)||!Number.isInteger(total)||total<=0||favourable<0||favourable>total){out('probResult','Enter whole numbers with 0 ≤ favourable outcomes ≤ total outcomes.');return;}
    const g=gcdInt(favourable,total);
    out('probResult',`Probability = <b>${favourable/g}/${total/g}</b><br>Percentage = <b>${fmt(favourable/total*100)}%</b>`);
};
window.calcPC=function(mode='npr'){
    const n=num('pcN'),r=num('pcR');
    if(!Number.isInteger(n)||!Number.isInteger(r)||n<0||r<0||r>n||n>170){out('pcResult','Enter whole numbers with 0 ≤ r ≤ n ≤ 170.');return;}
    let result=1;
    if(mode==='ncr'){const k=Math.min(r,n-r);for(let i=1;i<=k;i++)result=result*(n-k+i)/i;}
    else{for(let i=n-r+1;i<=n;i++)result*=i;}
    out('pcResult',`${mode==='ncr'?'Combination (nCr)':'Permutation (nPr)'} = <b>${Number.isFinite(result)?fmt(result):result.toExponential(4)}</b>`);
};
window.calcMensuration=function(){
    const shape=document.getElementById('mensShape')?.value||'rectangle',a=num('mensA'),b=num('mensB');
    if(!Number.isFinite(a)||a<=0){out('mensResult','Enter a positive length, side or radius.');return;}
    if(shape==='rectangle'){
        if(!Number.isFinite(b)||b<=0){out('mensResult','Enter a positive breadth.');return;}
        out('mensResult',`Area = <b>${fmt(a*b)} square units</b><br>Perimeter = <b>${fmt(2*(a+b))} units</b>`);
    }else if(shape==='square')out('mensResult',`Area = <b>${fmt(a*a)} square units</b><br>Perimeter = <b>${fmt(4*a)} units</b>`);
    else if(shape==='circle')out('mensResult',`Area = <b>${fmt(Math.PI*a*a)} square units</b><br>Circumference = <b>${fmt(2*Math.PI*a)} units</b>`);
    else if(shape==='cylinder'){
        if(!Number.isFinite(b)||b<=0){out('mensResult','Enter a positive cylinder height.');return;}
        out('mensResult',`Volume = <b>${fmt(Math.PI*a*a*b)} cubic units</b><br>Curved surface area = <b>${fmt(2*Math.PI*a*b)} square units</b><br>Total surface area = <b>${fmt(2*Math.PI*a*(a+b))} square units</b>`);
    }
};
window.calcRace=function(){
    const distance=num('raceA'),lead=num('raceB'),time=num('raceTime'),hasTime=String(document.getElementById('raceTime')?.value||'').trim()!=='';
    if(!Number.isInteger(distance)||!Number.isInteger(lead)||distance<=0||lead<0||lead>=distance||(hasTime&&(!Number.isFinite(time)||time<=0))){out('raceResult','Enter a race distance greater than the winning lead. Time is optional.');return;}
    const secondDistance=distance-lead,ratio=distance/secondDistance;
    let html=`Speed ratio (winner : runner-up) = <b>${fmt(distance/Math.max(1,gcdInt(Math.round(distance),Math.round(secondDistance))))} : ${fmt(secondDistance/Math.max(1,gcdInt(Math.round(distance),Math.round(secondDistance))))}</b><br>Runner-up covers <b>${fmt(secondDistance)} m</b> when winner completes ${fmt(distance)} m.`;
    if(hasTime)html+=`<br>Winner speed = <b>${fmt(distance/time)} m/s</b> · Runner-up speed = <b>${fmt(secondDistance/time)} m/s</b>`;
    out('raceResult',html);
};


// Remove the accidental generic Hindi placeholder from older/generated vocabulary data.
window.sanitizeVocabDisplay = function(v){
    const bad='प्रतियोगी परीक्षा में उपयोगी शब्द';
    return v && v.hindi && v.hindi.trim()===bad ? '' : (v?.hindi || '');
};

// Keyboard support for the basic calculator.
document.addEventListener('keydown',function(e){
    try{
        const modal=document.getElementById('calculatorModal'); if(!modal||!modal.classList.contains('show'))return;
        if(!document.getElementById('calcToolBasicPanel')?.classList.contains('active'))return;
        if(/[0-9+\-*/().]/.test(e.key)){e.preventDefault();calcPress(e.key);}
        else if(e.key==='Enter'){e.preventDefault();calcEval();}
        else if(e.key==='Escape'){e.preventDefault();closeModal('calculatorModal');}
        else if(e.key==='Backspace'){e.preventDefault();calcExpression=calcExpression.slice(0,-1);document.getElementById('calcDisplay').value=calcExpression;}
    }catch(_){ }
});

// Current-folder aliases used by the Vault modal buttons.
window.renameCurrentFolder = function(){
    try{
        if(!currentOpenFolderId) return showToast('Root folder cannot be renamed here.', true);
        window.renameFolder(currentOpenFolderId);
        const f=window.appData.vaultFolders.find(x=>x.id===currentOpenFolderId);
        if(f){const h=document.getElementById('currentFolderName'); if(h)h.innerText=f.name; renderNotesGrid();}
    }catch(e){console.error(e);}
};
// ============================================================
// V29.2 FINAL ENHANCEMENT PATCH
// Approved A-F + Smart Coach + full exam-aware analytics,
// validation, revision, backup, RRB timer, security and mobile.
// ============================================================
(function(){
'use strict';

function ensureData(){
  if(!window.appData) window.appData={};
  const d=window.appData;
  d.mocks=Array.isArray(d.mocks)?d.mocks:[];
  d.studyLogs=Array.isArray(d.studyLogs)?d.studyLogs:[];
  d.quizHistory=Array.isArray(d.quizHistory)?d.quizHistory:[];
  d.tasks=d.tasks&&typeof d.tasks==='object'&&!Array.isArray(d.tasks)?d.tasks:{};
  d.dailySessions=d.dailySessions&&typeof d.dailySessions==='object'&&!Array.isArray(d.dailySessions)?d.dailySessions:{};
  d.vocabProgress=d.vocabProgress&&typeof d.vocabProgress==='object'&&!Array.isArray(d.vocabProgress)?d.vocabProgress:{};
  d.grammarProgress=d.grammarProgress&&typeof d.grammarProgress==='object'&&!Array.isArray(d.grammarProgress)?d.grammarProgress:{};
}
ensureData();

function save(){ if(typeof saveDataLocally==='function') saveDataLocally(); }
// ---------- Revision Due ----------
function today(){return getSafeDateStr();}
function dueDate(days){const d=new Date();d.setDate(d.getDate()+days);return getSafeDateStr(d);}
function progressFor(store,key){ensureData();return window.appData[store][key]||(window.appData[store][key]={status:'new',interval:0,nextReview:null,updatedAt:null,correct:0,wrong:0});}
function markReview(store,key,status){
  const p=progressFor(store,key);const intervals=[1,3,7,15,30];
  if(status==='difficult'){p.status='difficult';p.interval=0;p.nextReview=dueDate(1);p.wrong=(p.wrong||0)+1;}
  else if(status==='learned'){p.status='learned';p.interval=Math.min((p.interval||0)+1,intervals.length);const days=intervals[Math.max(0,p.interval-1)];p.nextReview=dueDate(days);p.correct=(p.correct||0)+1;}
  p.updatedAt=Date.now();save();renderRevisionDue();
}
window.markVocabLearned=()=>{if(typeof vocabData!=='undefined')markReview('vocabProgress',String(vocabData[currentVocabIndex]?.word||currentVocabIndex),'learned');};
window.markVocabDifficult=()=>{if(typeof vocabData!=='undefined')markReview('vocabProgress',String(vocabData[currentVocabIndex]?.word||currentVocabIndex),'difficult');};
window.markGrammarLearned=()=>{if(typeof grammarData!=='undefined')markReview('grammarProgress',String(currentRuleIndex),'learned');};
window.markGrammarDifficult=()=>{if(typeof grammarData!=='undefined')markReview('grammarProgress',String(currentRuleIndex),'difficult');};
function dueItems(store){const data=window.appData[store]||{},now=today();return Object.entries(data).filter(([,p])=>p&&p.nextReview&&p.nextReview<=now).map(([k])=>k);}
window.reviewDue=function(type){
  const arr=dueItems(type==='vocab'?'vocabProgress':'grammarProgress');
  if(!arr.length){showToast(`No ${type==='vocab'?'vocabulary':'grammar'} revision due today.`);return;}
  document.querySelectorAll('.nav-links li').forEach(l=>l.classList.remove('active'));document.querySelector('[data-tab="view-dashboard"]')?.classList.add('active');document.querySelectorAll('.view-section').forEach(s=>s.classList.remove('active'));document.getElementById('view-dashboard')?.classList.add('active');
  if(type==='vocab'&&typeof vocabData!=='undefined'){const i=vocabData.findIndex(v=>String(v.word)===arr[0]);if(i>=0)renderVocabWord(i);}
  if(type==='grammar'&&typeof grammarData!=='undefined'){const i=parseInt(arr[0]);if(Number.isFinite(i))renderGrammarRule(i);}
};

})();


// ============================================================
// V29.3 — LOCAL-FIRST VAULT (IndexedDB), SETTINGS & ANALYTICS
// ============================================================
(function(){
'use strict';

const IDB_NAME='KKMonitoringFilesDB';
const IDB_VERSION=1;
const IDB_STORE='vaultFiles';
let idbPromise=null;
window.vaultFileCache=window.vaultFileCache||new Map();

function openVaultDB(){
  if(idbPromise) return idbPromise;
  idbPromise=new Promise((resolve,reject)=>{
    if(!('indexedDB' in window)){reject(new Error('IndexedDB is not supported in this browser.'));return;}
    const req=indexedDB.open(IDB_NAME,IDB_VERSION);
    req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(IDB_STORE))db.createObjectStore(IDB_STORE,{keyPath:'id'});};
    req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error||new Error('IndexedDB open failed'));
  });
  return idbPromise;
}
function idbPut(record){return openVaultDB().then(db=>new Promise((res,rej)=>{const tx=db.transaction(IDB_STORE,'readwrite');tx.objectStore(IDB_STORE).put(record);tx.oncomplete=()=>res(true);tx.onerror=()=>rej(tx.error);}));}
function idbGet(id){return openVaultDB().then(db=>new Promise((res,rej)=>{const tx=db.transaction(IDB_STORE,'readonly');const r=tx.objectStore(IDB_STORE).get(id);r.onsuccess=()=>res(r.result||null);r.onerror=()=>rej(r.error);}));}
function idbDelete(id){return openVaultDB().then(db=>new Promise((res,rej)=>{const tx=db.transaction(IDB_STORE,'readwrite');tx.objectStore(IDB_STORE).delete(id);tx.oncomplete=()=>res(true);tx.onerror=()=>rej(tx.error);}));}
function idbGetAll(){return openVaultDB().then(db=>new Promise((res,rej)=>{const tx=db.transaction(IDB_STORE,'readonly');const r=tx.objectStore(IDB_STORE).getAll();r.onsuccess=()=>res(r.result||[]);r.onerror=()=>rej(r.error);}));}

function dataUrlToBlob(dataUrl){
  const parts=String(dataUrl||'').split(',');
  if(parts.length<2) throw new Error('Invalid data URL');
  const meta=parts[0], raw=atob(parts[1]);let mime='application/octet-stream';
  const m=meta.match(/data:([^;]+)/i);if(m)mime=m[1];
  const bytes=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);
  return new Blob([bytes],{type:mime});
}
function blobToDataURL(blob){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=()=>rej(r.error);r.readAsDataURL(blob);});}

async function migrateLegacyVaultFiles(){
  try{
    const notes=Array.isArray(window.appData?.vaultNotes)?window.appData.vaultNotes:[];
    let changed=false;
    for(const note of notes){
      if(note.type!=='file') continue;
      if(Array.isArray(note.fileRefs)&&note.fileRefs.length) continue;
      const legacy=Array.isArray(note.content)?note.content:[];
      if(!legacy.length) continue;
      const refs=[];
      for(const item of legacy){
        if(!item?.data) continue;
        const fileId='vf_'+Date.now()+'_'+Math.random().toString(36).slice(2,10);
        const blob=dataUrlToBlob(item.data);
        await idbPut({id:fileId,blob,type:item.type||blob.type||'application/octet-stream',name:item.name||'Vault File',size:blob.size,createdAt:Date.now()});
        refs.push({id:fileId,type:item.type||blob.type||'application/octet-stream',name:item.name||'Vault File',size:blob.size});
      }
      note.fileRefs=refs;delete note.content;changed=true;
    }
    if(changed) saveDataLocally();
  }catch(e){console.warn('Vault migration skipped/failed:',e);}
}

async function hydrateVaultCache(){
  try{
    const all=await idbGetAll();
    window.vaultFileCache.clear();
    all.forEach(r=>window.vaultFileCache.set(r.id,r));
    renderVaultFolders?.(currentFolderParent||null);
    if(typeof renderDashboardStickyNotes==='function')renderDashboardStickyNotes();
  }catch(e){console.warn('Vault hydration:',e);}
}
try{ loadLocalData(); }catch(_){}
let vaultStoragePromise=null;
window.ensureVaultStorageReady=function(){
  if(vaultStoragePromise)return vaultStoragePromise;
  vaultStoragePromise=(async()=>{await migrateLegacyVaultFiles();await hydrateVaultCache();return true;})().catch(e=>{console.warn('Vault storage startup:',e);return false;});
  window.vaultStorageReady=vaultStoragePromise;
  return vaultStoragePromise;
};
window.vaultStorageReady=Promise.resolve(true);
function scheduleVaultStartup(){
  const start=()=>window.ensureVaultStorageReady?.();
  if('requestIdleCallback' in window) requestIdleCallback(start,{timeout:2500});
  else setTimeout(start,1200);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',scheduleVaultStartup,{once:true});
else scheduleVaultStartup();

// Replace file upload: binary data goes to IndexedDB, only lightweight refs stay in appData/localStorage.
window.addFileToFolder=async function(e){
  try{
    const files=Array.from(e?.target?.files||[]);if(!files.length)return;
    if(!('indexedDB' in window)){showToast('IndexedDB is unavailable in this browser.',true);return;}
    const refs=[];
    for(const file of files){
      const fileId='vf_'+Date.now()+'_'+Math.random().toString(36).slice(2,10);
      await idbPut({id:fileId,blob:file,type:file.type||'application/octet-stream',name:file.name,size:file.size,createdAt:Date.now()});
      refs.push({id:fileId,type:file.type||'application/octet-stream',name:file.name,size:file.size});
    }
    window.appData.vaultNotes.push({id:Date.now(),folderId:currentOpenFolderId,type:'file',fileRefs:refs,date:getSafeDateStr(),pinned:false});
    saveDataLocally();
    await hydrateVaultCache();renderNotesGrid();showToast(`${files.length} File(s) Saved to IndexedDB!`);
    e.target.value='';
  }catch(err){console.error(err);showToast('Could not save file(s).',true);}
};

// Replace preview: fetch binary blobs from IndexedDB and create temporary object URLs.
window.previewFile=async function(id){
  try{
    const note=window.appData.vaultNotes.find(n=>n.id===parseInt(id));if(!note)return;
    if(note.type!=='file')return;
    const refs=Array.isArray(note.fileRefs)?note.fileRefs:[];
    if(!refs.length && Array.isArray(note.content)){
      // Legacy fallback if migration has not completed yet.
      currentPreviewFiles=note.content;currentPreviewIndex=0;window.renderCurrentPreview();document.getElementById('filePreviewModal')?.classList.add('show');return;
    }
    currentPreviewFiles=[];
    for(const ref of refs){
      let rec=window.vaultFileCache.get(ref.id)||await idbGet(ref.id);
      if(!rec?.blob)continue;
      const url=URL.createObjectURL(rec.blob);window.vaultFileCache.set(ref.id,rec);
      currentPreviewFiles.push({type:rec.type||ref.type,data:url,objectUrl:url,name:rec.name||ref.name});
    }
    currentPreviewIndex=0;if(!currentPreviewFiles.length){showToast('File not found in IndexedDB.',true);return;}
    window.renderCurrentPreview();document.getElementById('filePreviewModal')?.classList.add('show');
  }catch(err){console.error(err);showToast('Could not preview file.',true);}
};


window.deleteNote=async function(id){
  try{
    const note=window.appData.vaultNotes.find(n=>n.id===id);if(!note)return;
    if(!confirm('Delete this?'))return;
    if(note.type==='file'){
      for(const ref of (note.fileRefs||[])){try{await idbDelete(ref.id);}catch(_){}window.vaultFileCache.delete(ref.id);}
    }
    window.appData.vaultNotes=window.appData.vaultNotes.filter(n=>n.id!==id);saveDataLocally('delete');renderNotesGrid();renderDashboardStickyNotes();window.kkCloudReplaceNow?.();
  }catch(e){showToast('Could not delete item.',true);}
};


// ---------- SETTINGS ----------
function getStoredTheme(){return localStorage.getItem('kkMonitoringTheme')||'dark';}
window.setTheme=function(mode){
  const root=document.body;
  if(mode==='light'){root.classList.add('light-theme');root.classList.remove('dark-theme');}
  else if(mode==='dark'){root.classList.remove('light-theme');root.classList.add('dark-theme');}
  else {const dark=window.matchMedia?.('(prefers-color-scheme: dark)').matches;root.classList.toggle('light-theme',!dark);root.classList.toggle('dark-theme',dark);}
  localStorage.setItem('kkMonitoringTheme',mode);updateThemeStatus();
};
window.toggleTheme=function(){const cur=getStoredTheme();setTheme(cur==='light'?'dark':'light');};
window.updateThemeStatus=function(){const el=document.getElementById('themeStatus');if(el){const t=getStoredTheme();el.innerText=`Current theme: ${t==='system'?'System preference':t.charAt(0).toUpperCase()+t.slice(1)+' Mode'}`;}};

window.changeAppPin=function(){
  const cur=document.getElementById('currentPinSetting')?.value||'',nw=document.getElementById('newPinSetting')?.value||'',cf=document.getElementById('confirmPinSetting')?.value||'';
  const stored=localStorage.getItem('kkMonitoringPin')||'1204';
  if(cur!==stored)return showToast('Current PIN is incorrect.',true);
  if(!/^\d{4}$/.test(nw))return showToast('New PIN must be exactly 4 digits.',true);
  if(nw!==cf)return showToast('New PIN and confirmation do not match.',true);
  localStorage.setItem('kkMonitoringPin',nw);['currentPinSetting','newPinSetting','confirmPinSetting'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});showToast('PIN changed successfully.');
};
window.lockSystem=function(){try{sessionStorage.removeItem('kkUnlocked_v65');}catch(_){}location.reload();};
window.clearAllAppData=function(){
  if(!confirm('This will permanently clear local study data and Vault files on this device. Continue?'))return;
  if(!confirm('Final confirmation: erase ALL KK Monitoring data, including cloud-synced study records?'))return;
  Promise.resolve().then(async()=>{
    try{
      const mocks=Array.isArray(window.appData?.mocks)?window.appData.mocks:[];
      mocks.forEach(mock=>{if(mock?.id!==undefined&&mock?.id!==null)window.kkRememberMockDeletion?.(mock.id);});
      const all=await idbGetAll();for(const record of all)await idbDelete(record.id);
    }catch(error){console.warn('Vault cleanup during reset:',error);}
    window.appData={mocks:[],studyLogs:[],attendance:{},countdowns:[],tasks:{},dailySessions:{},vaultFolders:[],vaultNotes:[],quizHistory:[],xp:{total:0,daily:{},logs:[]},mentalLoad:{events:[]},vocabProgress:{},grammarProgress:{}};
    ensureDataShape();
    try{localStorage.setItem(DATA_KEY,JSON.stringify(window.appData));localStorage.removeItem(PREVIOUS_CURRENT_KEY);}catch(error){console.warn('Local reset:',error);}
    try{if(typeof window.kkCloudQueueReplace==='function')await window.kkCloudQueueReplace();else await window.kkCloudReplaceNow?.();}catch(error){console.warn('Cloud reset queued:',error);}
    showToast('All local data cleared. Cloud replacement will complete when connected.');
    setTimeout(()=>location.reload(),900);
  });
};
window.refreshStorageStatus=async function(){
  const el=document.getElementById('storageStatus');if(!el)return;
  try{
    const all=await idbGetAll();const bytes=all.reduce((s,r)=>s+(r.size||r.blob?.size||0),0);const mb=(bytes/1048576).toFixed(2);let quota='';
    if(navigator.storage?.estimate){const est=await navigator.storage.estimate();quota=` • Browser quota: ${((est.quota||0)/1073741824).toFixed(2)} GB`}
    el.innerText=`IndexedDB files: ${all.length} • Vault size: ${mb} MB${quota}`;
  }catch(e){el.innerText='IndexedDB storage information unavailable.';}
};

// ---------- Improved unlock PIN compatibility ----------
window.getAppPin=()=>localStorage.getItem('kkMonitoringPin')||'1204';

// ---------- Additional Deep Analytics ----------
const oldRenderCharts=renderBaseCharts;
function makeChart(id,type,data,options,key){
  const c=document.getElementById(id);if(!c||typeof Chart==='undefined')return;
  if(charts[key])charts[key].destroy();charts[key]=new Chart(c,{type,data,options:Object.assign({responsive:true,maintainAspectRatio:false},options||{})});
}
window.renderCharts=function(){
  try{window.renderLifetimeMockSummary?.();}catch(e){console.warn('Lifetime mock summary:',e)}
  try{if(oldRenderCharts)oldRenderCharts();}catch(e){console.warn('Base analytics:',e)}
  try{
    const filter=document.getElementById('analyticsFilter')?.value||'All',tf=document.getElementById('analyticsTypeFilter')?.value||'All';
    let data=(window.appData.mocks||[]).filter(m=>(filter==='All'||m.examType===filter)&&(tf==='All'||m.type===tf)).slice(0,30).reverse();
    const labels=data.length?data.map(m=>m.date?.substring(5)||'Mock'):['No Data'];const vals=a=>data.length?data.map(a):[0];
    makeChart('chartScorePct','line',{labels,datasets:[{label:'Score %',data:vals(m=>{const max=Number(m.maxScore)||100;return max?(Number(m.totalMarks)||0)/max*100:0}),fill:true,tension:.3}]},{scales:{y:{min:0,max:100}}},'scorePct');
    let eR=0,eA=0,qR=0,qA=0,rR=0,rA=0;eR=data.reduce((s,m)=>s+Number(m.eR||0),0);eA=data.filter(m=>m.eMarks!=='-').reduce((s,m)=>s+Number(m.eR||0)+Number(m.eW||0),0);qR=data.reduce((s,m)=>s+Number(m.qR||0),0);qA=data.reduce((s,m)=>s+Number(m.qR||0)+Number(m.qW||0),0);rR=data.reduce((s,m)=>s+Number(m.rR||0),0);rA=data.reduce((s,m)=>s+Number(m.rR||0)+Number(m.rW||0),0);
    makeChart('chartSubjectAccuracy','bar',{labels:['English','Quants','Reasoning'],datasets:[{label:'Accuracy %',data:[eA?eR/eA*100:0,qA?qR/qA*100:0,rA?rR/rA*100:0]}]},{scales:{y:{min:0,max:100}}},'subAcc');
    makeChart('chartAttemptsAccuracy','scatter',{datasets:[{label:'Mocks',data:data.map((m,i)=>({x:Number(m.totalAtt)||0,y:Number(m.totalAcc)||0})),pointRadius:5}]},{scales:{x:{title:{display:true,text:'Attempts'}},y:{title:{display:true,text:'Accuracy %'},min:0,max:100}}},'attemptAcc');
    const subjectSec={};(window.appData.studyLogs||[]).forEach(x=>{if(String(x.type||'')!=='Focus')return;const k=x.subject||'Other';subjectSec[k]=(subjectSec[k]||0)+(Number(x.duration)||0);});
    makeChart('chartStudySubjects','doughnut',{labels:Object.keys(subjectSec).length?Object.keys(subjectSec):['No Data'],datasets:[{label:'Minutes',data:Object.keys(subjectSec).length?Object.values(subjectSec).map(v=>v/60):[0]}]}, {},'studySubjects');
    const examCounts={};(window.appData.mocks||[]).forEach(m=>examCounts[m.examType]=(examCounts[m.examType]||0)+1);
    makeChart('chartMocksByExam','bar',{labels:Object.keys(examCounts).length?Object.keys(examCounts):['No Data'],datasets:[{label:'Mocks',data:Object.keys(examCounts).length?Object.values(examCounts):[0]}]},{indexAxis:'y'},'mocksExam');
    makeChart('chartWrongUnattempted','bar',{labels:labels,datasets:[{label:'Wrong',data:vals(m=>Number(m.eW||0)+Number(m.qW||0)+Number(m.rW||0))},{label:'Unattempted',data:vals(m=>Math.max(0,(Number(m.maxScore)||100)-((Number(m.eR||0)+Number(m.eW||0))+(Number(m.qR||0)+Number(m.qW||0))+(Number(m.rR||0)+Number(m.rW||0)))))}]},{scales:{y:{beginAtZero:true}}},'wrongUnattempted');
  }catch(e){console.warn('Extended analytics:',e)}
};

// Initial theme and storage status.
setTheme(getStoredTheme());
setTimeout(()=>{updateThemeStatus();refreshStorageStatus();},200);

})();


/* ===== Command layout and navigation ===== */
/* Command navigation, live header clock and lightweight dashboard updates. */
(() => {
  'use strict';
  if (window.__kkCommandCoreLoaded) return;
  window.__kkCommandCoreLoaded = true;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const today = () => window.getSafeDateStr ? window.getSafeDateStr() : new Date().toISOString().slice(0,10);
  let booted = false, navBound = false, clockTimer = null, schedulerTimer = null;

  function switchTab(tab) {
    const target = document.getElementById(tab);
    if (!target) return false;
    $$('.nav-links li[data-tab]').forEach(li => li.classList.toggle('active', li.dataset.tab === tab));
    $$('.view-section').forEach(view => view.classList.remove('active'));
    target.classList.add('active');
    try {
      if (tab === 'view-dashboard') {
        window.renderDashboardStickyNotes?.();
        window.updateDashboardKPIs?.();
        window.renderDailySchedule?.();
      } else if (tab === 'view-daily-tasks') {
        window.renderDailySchedule?.();
      } else if (tab === 'view-tracker') {
        window.renderTracker?.();
      } else if (tab === 'view-analytics') {
        window.renderCharts?.();
      } else if (tab === 'view-add-data') {
        window.updateMockUI?.();
      } else if (tab === 'view-study-room') {
        window.renderVaultFolders?.(null);
      } else if (tab === 'view-learn') {
        window.bindLearnHubControls?.();
        window.renderGrammarRule?.();
        window.renderVocabWord?.();
      } else if (tab === 'view-settings') {
        window.refreshStorageStatus?.();
        window.updateThemeStatus?.();
      }
    } catch (e) { console.warn('Tab refresh:', e); }
    window.scrollTo?.({ top: 0, behavior: 'smooth' });
    return true;
  }

  function bindNavigation() {
    if (navBound) return;
    navBound = true;
    document.addEventListener('click', event => {
      const tabEl = event.target.closest?.('.nav-links li[data-tab], [data-tab].cc-link');
      if (tabEl?.dataset?.tab) {
        event.preventDefault();
        switchTab(tabEl.dataset.tab);
        if (window.innerWidth < 760) $('.sidebar')?.classList.remove('mobile-open');
        return;
      }
    });
  }

  function renderClock() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const date = now.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    for (const id of ['v42LiveTime', 'ccBigClock']) {
      const el = document.getElementById(id);
      if (el) el.textContent = time;
    }
    for (const id of ['v42LiveDate', 'ccBigDate']) {
      const el = document.getElementById(id);
      if (el) el.textContent = date;
    }
  }

  function renderCloudStatus() {
    const user = (() => {
      try { return window.firebase?.auth?.().currentUser || null; } catch (_) { return null; }
    })();
    const online = !!user && navigator.onLine;
    const text = online ? 'Cloud online' : user ? 'Cloud offline' : 'Sign in required';
    const pill = document.getElementById('v42Cloud');
    if (pill) {
      pill.classList.toggle('online', online);
      pill.classList.toggle('offline', !online);
      const b = pill.querySelector('b'); if (b) b.textContent = text;
      pill.title = 'Cloud account — click to sign in or restore';
      pill.style.cursor = 'pointer';
    }
    const status = document.getElementById('ccCloudStatus');
    if (status) {
      status.innerHTML = `<i></i> ${text}`;
      status.classList.toggle('online', online);
      status.title = 'Cloud account — click to sign in or restore';
      status.style.cursor = 'pointer';
    }
    const hint = document.getElementById('ccCloudHint');
    if (hint) hint.textContent = text;
  }

  function refreshLightweightCommand() {
    try {
      window.commandRenderMission?.();
      renderCloudStatus();
    } catch (e) { console.warn('Command refresh:', e); }
  }

  function startTimers() {
    if (!clockTimer) {
      renderClock();
      clockTimer = setInterval(renderClock, 1000);
    }
    if (!schedulerTimer) {
      refreshLightweightCommand();
      schedulerTimer = setInterval(refreshLightweightCommand, 5000);
    }
  }

  function bindCloudClicks() {
    for (const id of ['v42Cloud', 'ccCloudStatus', 'ccCloudHint']) {
      const el = document.getElementById(id);
      if (!el || el.dataset.kkCloudClickBound) continue;
      el.dataset.kkCloudClickBound = '1';
      el.addEventListener('click', event => {
        event.preventDefault();
        const open = window.kkCloudOpenAuth;
        if (typeof open === 'function') open();
        else window.dispatchEvent(new Event('kk:cloud-open-request'));
      });
    }
  }

  function bindActions() {
    $('#ccStartFocus')?.addEventListener('click', () => { switchTab('view-study-room'); setTimeout(() => $('#btnFocus')?.click(), 150); });
    $('#ccNextBtn')?.addEventListener('click', () => switchTab('view-daily-tasks'));
    $('#v42ThemeBtn')?.addEventListener('click', () => window.toggleTheme?.());
  }

  function init() {
    if (booted) return;
    booted = true;
    bindNavigation();
    bindActions();
    bindCloudClicks();
    startTimers();
    renderClock();
    window.renderDashboardStickyNotes?.();
  }

  window.v42SwitchTab = switchTab;
  window.switchTab = switchTab;
  window.v42Init = init;
  window.v42RenderDashboard = refreshLightweightCommand;
  window.v42RefreshCloudStatus = renderCloudStatus;
})();

/* ===== Command enhancements ===== */
/* KK Monitoring: consolidated feature layer for the Command Center. */
(function () {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const today = () => window.getSafeDateStr ? window.getSafeDateStr() : new Date().toISOString().slice(0, 10);
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const schedule = () => typeof window.generateDailySchedule === 'function' ? window.generateDailySchedule() : [];
  const tasks = () => schedule().filter(item => !item.isBreak);
  const fmt = seconds => {
    seconds = Math.max(0, Math.floor(seconds));
    const h = Math.floor(seconds / 3600), m = Math.floor(seconds / 60) % 60, s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };
  const dateKey = date => window.getSafeDateStr ? window.getSafeDateStr(date) : date.toISOString().slice(0, 10);

  function taskProgress(key = today()) {
    const isSunday = new Date(`${key}T12:00:00`).getDay() === 0;
    const ids = isSunday ? [] : tasks().map(item => item.id);
    const state = window.appData?.tasks?.[key] || {};
    const done = ids.filter(id => state[id] === true).length;
    return { ids, state, done, total: ids.length, percent: ids.length ? Math.round(done / ids.length * 100) : 0 };
  }

  function renderMission() {
    const progress = taskProgress();
    const setText = (id, text) => { const element = document.getElementById(id); if (element) element.textContent = text; };
    setText('ccTaskPct', `${progress.percent}%`);
    setText('ccTaskMeta', `${progress.done} / ${progress.total} tasks`);
    const bar = $('#ccTaskBar'); if (bar) bar.style.width = `${progress.percent}%`;
    const isSunday = new Date(`${today()}T12:00:00`).getDay() === 0;
    setText('ccTaskRemain', isSunday ? 'Sunday rest day — recharge for Monday.' : progress.total ? `${progress.total - progress.done} task${progress.total - progress.done === 1 ? '' : 's'} remaining` : 'Daily plan is loading');
    const next = isSunday ? null : tasks().find(item => !progress.state[item.id]);
    setText('ccNextAction', isSunday ? 'Rest & reset' : next ? next.title.replace(/^Shift \d+:\s*/, '') : 'Daily plan complete');
    setText('ccNextSub', isSunday ? 'No scheduled study block today. Keep it light or take a complete break.' : next ? `${next.time} · Your next planned work block.` : 'Excellent consistency. Use Focus or review a mock.');
  }
  window.commandRenderMission = renderMission;

  function formatExamRemaining(ms) {
    if (ms <= 0) return 'Passed';
    let sec = Math.floor(ms / 1000);
    const d = Math.floor(sec / 86400); sec %= 86400;
    const h = Math.floor(sec / 3600); sec %= 3600;
    const m = Math.floor(sec / 60); const s = sec % 60;
    return `${d}d ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`;
  }
  function sortedExams() { return (window.appData?.countdowns || []).slice().sort((a,b)=>Number(a.targetTime)-Number(b.targetTime)); }
  function renderExamCountdownPanel() {
    const box = $('#todayExamCountdowns');
    if (!box) return;
    const list = sortedExams();
    if (!list.length) {
      box.innerHTML = '<div class="exam-empty">No exam countdowns yet. Add your first exam above.</div>';
      return;
    }
    box.innerHTML = list.map((item,index)=>{
      const id = String(item.id);
      const when = new Date(Number(item.targetTime));
      return `<article class="today-exam-item" data-exam-id="${escapeHTML(id)}"><div class="today-exam-rank">#${index+1}</div><div class="today-exam-main"><strong title="${escapeHTML(item.name||'Exam')}">${escapeHTML(item.name||'Exam')}</strong><span>${when.toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'})} · ${when.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</span></div><b class="today-exam-time" data-exam-time="${escapeHTML(id)}">--d --:--:--</b><button class="today-exam-delete" type="button" data-delete-exam="${escapeHTML(id)}" aria-label="Delete ${escapeHTML(item.name||'Exam')}">×</button></article>`;
    }).join('');
    updateExamCountdownTimes();
  }
  function updateExamCountdownTimes() {
    const now = Date.now();
    sortedExams().forEach(item=>{
      const el = document.querySelector(`[data-exam-time="${CSS.escape(String(item.id))}"]`);
      if (el) el.textContent = formatExamRemaining(Number(item.targetTime)-now);
    });
    const active = document.getElementById('activeCountdowns');
    if (active) {
      const list=sortedExams();
      active.innerHTML=list.map(cd=>`<div class="cd-card"><i class="ph-bold ph-x cd-del" onclick="deleteCountdown('${String(cd.id).replace(/'/g,"\\'")}')"></i><h4>${escapeHTML(cd.name||'Exam')}</h4><p>${formatExamRemaining(Number(cd.targetTime)-now)}</p></div>`).join('');
    }
  }
  window.commandRenderCountdowns = renderExamCountdownPanel;
  window.kkRenderExamCountdowns = renderExamCountdownPanel;
  window.kkUpdateExamCountdownTimes = updateExamCountdownTimes;


  function installCompactExamStyle(){
    if(document.getElementById('kkCompactExamStyle')) return;
    const st=document.createElement('style'); st.id='kkCompactExamStyle'; st.textContent=`.today-exam-card{padding:14px 16px!important}.today-exam-card .cc-card-head{margin-bottom:8px!important}.today-exam-card h3{font-size:1rem!important;margin:0}.today-exam-sub{font-size:.72rem!important;margin:.2rem 0!important}.today-exam-list{display:grid;gap:6px!important}.today-exam-item{display:grid!important;grid-template-columns:24px minmax(0,1fr) auto 28px!important;align-items:center;gap:8px!important;padding:7px 9px!important;border-radius:10px!important}.today-exam-main strong{font-size:.82rem!important}.today-exam-main span{font-size:.68rem!important}.today-exam-time{font-size:.78rem!important;white-space:nowrap}.today-exam-delete{width:26px!important;height:26px!important;font-size:1rem!important}.today-exam-card #todayAddExam{padding:7px 10px!important;font-size:.78rem!important}`; document.head.appendChild(st);
  }
  function installCountdownForm() {
    const dashboard = document.getElementById('view-dashboard');
    if (!dashboard || document.getElementById('todayExamCard')) return;
    const card = document.createElement('section');
    card.id='todayExamCard'; card.className='cc-card today-exam-card';
    card.innerHTML=`<div class="cc-card-head"><div><div class="cc-label">EXAM COUNTDOWN</div><h3>How much time is left?</h3><p class="today-exam-sub">Add multiple exams. Each one keeps its own live countdown.</p></div><button id="todayAddExam" class="cc-primary small" type="button">+ Add Exam</button></div><form id="todayExamForm" class="today-exam-form" hidden><input id="todayExamName" class="modern-input" maxlength="80" required placeholder="Exam name, e.g. SBI PO Prelims"><input id="todayExamDate" class="modern-input" type="datetime-local" required><button class="cc-primary small" type="submit">Save Exam</button></form><div id="todayExamCountdowns" class="today-exam-list"></div>`;
    const anchor=dashboard.querySelector('.cc-grid-top');
    anchor?.insertAdjacentElement('afterend',card);
    const form=document.getElementById('todayExamForm'), add=document.getElementById('todayAddExam');
    add?.addEventListener('click',()=>{ form.hidden=!form.hidden; if(!form.hidden) document.getElementById('todayExamName')?.focus(); });
    form?.addEventListener('submit',event=>{
      event.preventDefault();
      const name=document.getElementById('todayExamName').value.trim();
      const value=document.getElementById('todayExamDate').value;
      const targetTime=new Date(value).getTime();
      if(!name || Number.isNaN(targetTime)){ window.showToast?.('Enter a valid exam name and date/time.',true); return; }
      const id=`exam-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
      window.appData.countdowns=Array.isArray(window.appData.countdowns)?window.appData.countdowns:[];
      window.appData.countdowns.push({id,name,targetTime});
      window.saveDataLocally?.(); form.reset(); form.hidden=true; renderExamCountdownPanel(); window.showToast?.('Exam countdown added.');
    });
    card.addEventListener('click',event=>{
      const btn=event.target.closest('[data-delete-exam]'); if(!btn) return;
      const id=btn.dataset.deleteExam;
      window.appData.countdowns=(window.appData.countdowns||[]).filter(item=>String(item.id)!==String(id));
      window.saveDataLocally?.('delete'); renderExamCountdownPanel(); window.kkCloudReplaceNow?.(); window.showToast?.('Exam countdown removed.');
    });
    renderExamCountdownPanel();
  }

  function installDayWindow() {
    const card = $('.clock-card');
    if (!card || card.dataset.commandDay) return;
    card.dataset.commandDay = '1';
    card.classList.add('cmd-day-card');
    card.innerHTML = `<div class="cc-label">TODAY'S WORK WINDOW</div><strong class="cmd-day-count" id="commandDayClock">--:--:--</strong><p id="commandDayStatus">Calculating your 8 AM–8:30 PM planned window…</p><div class="cmd-sun-track"><i id="commandDayBar"></i></div><div class="cmd-day-meta"><span>8:00 AM</span><span id="commandDayPercent">0% left</span><span>8:30 PM</span></div><span class="legacy-clock" id="ccBigClock"></span><span class="legacy-clock" id="ccBigDate"></span>`;
    const update = () => {
      const now = new Date(); const start = new Date(now); start.setHours(8, 0, 0, 0); const end = new Date(now); end.setHours(20, 30, 0, 0);
      const total = (12.5 * 3600 * 1000); let remaining, label;
      if (now < start) { remaining = start - now; label = 'Your planned study window starts at 8:00 AM.'; }
      else if (now >= end) { remaining = 0; label = 'Today’s work window is complete. Plan tomorrow calmly.'; }
      else { remaining = end - now; label = 'Time left for today’s planned work.'; }
      const percent = Math.max(0, Math.min(100, Math.round(remaining / total * 100)));
      $('#commandDayClock').textContent = fmt(remaining / 1000); $('#commandDayStatus').textContent = label; $('#commandDayPercent').textContent = `${percent}% left`; $('#commandDayBar').style.width = `${percent}%`;
    };
    update();
    window.kkUpdateDayWindow = update;
  }

  function installSettings() {
    const grid = $('#view-settings .settings-grid'); if (!grid || $('#commandAppearance')) return;
    const card = document.createElement('section'); card.id = 'commandAppearance'; card.className = 'glass-panel settings-card command-settings-card';
    card.innerHTML = `<h3>🌄 Wallpapers & Focus Effects</h3><p>Choose one calm background and one subtle effect. Your preference stays on this device.</p><div class="command-wallpaper-grid"><button class="command-wallpaper-option" data-wallpaper="mountain"><b>Zen Mountain</b><small>Cool focus ambience</small></button><button class="command-wallpaper-option" data-wallpaper="sunrise"><b>Golden Sunrise</b><small>Warm early energy</small></button><button class="command-wallpaper-option" data-wallpaper="ocean"><b>Deep Ocean</b><small>Calm blue flow</small></button><button class="command-wallpaper-option" data-wallpaper="forest"><b>Quiet Forest</b><small>Natural green calm</small></button><button class="command-wallpaper-option" data-wallpaper="night"><b>Night Focus</b><small>Deep-purple study mode</small></button><button class="command-wallpaper-option" data-wallpaper="minimal"><b>Minimal</b><small>Low-distraction canvas</small></button></div><div class="command-effect-row"><button class="command-effect" data-effect="aurora">Aurora glow</button><button class="command-effect" data-effect="stars">Star field</button><button class="command-effect" data-effect="grid">Focus grid</button><button class="command-effect" data-effect="none">No effect</button></div><label class="command-quote-toggle"><input type="checkbox" id="commandQuoteToggle"> Show rotating motivational quote on background</label>`;
    grid.insertBefore(card, grid.firstElementChild); card.addEventListener('click', event => {
      const wallpaper = event.target.closest('[data-wallpaper]'); const effect = event.target.closest('[data-effect]');
      if (wallpaper) setAppearance(wallpaper.dataset.wallpaper, null); if (effect) setAppearance(null, effect.dataset.effect);
    });
    $('#commandQuoteToggle').addEventListener('change', event => { localStorage.setItem('commandQuoteVisible', event.target.checked ? '1' : '0'); renderAppearance(); });
    renderAppearance();
  }

  function setAppearance(wallpaper, effect) { if (wallpaper) localStorage.setItem('commandWallpaper', wallpaper); if (effect) localStorage.setItem('commandEffect', effect); renderAppearance(); }
  function renderAppearance() {
    const wallpaper = localStorage.getItem('commandWallpaper') || 'mountain', effect = localStorage.getItem('commandEffect') || 'aurora', quotes = localStorage.getItem('commandQuoteVisible') !== '0';
    document.body.dataset.cmdWallpaper = wallpaper; document.body.dataset.cmdEffect = effect;
    $$('[data-wallpaper]').forEach(button => button.classList.toggle('active', button.dataset.wallpaper === wallpaper)); $$('[data-effect]').forEach(button => button.classList.toggle('active', button.dataset.effect === effect)); const check = $('#commandQuoteToggle'); if (check) check.checked = quotes; const quote = $('.cmd-wallpaper-quote'); if (quote) quote.style.display = quotes ? '' : 'none';
  }

  function installWallpaper() {
    if (!$('#commandWallpaper')) { const wallpaper = document.createElement('div'); wallpaper.id = 'commandWallpaper'; wallpaper.innerHTML = '<div class="cmd-wallpaper-quote"><span></span><small>KK MONITORING · KEEP GOING</small></div>'; document.body.prepend(wallpaper); }
    const quotes = ['Small progress is still progress.', 'Accuracy first. Speed follows.', 'You only need the next focused block.', 'Discipline is a quiet superpower.', 'One mock analysed well beats three rushed mocks.', 'Consistency is your competitive advantage.']; let index = 0;
    const rotate = () => { const text = $('.cmd-wallpaper-quote span'); if (text) text.textContent = `“${quotes[index++ % quotes.length]}”`; };
    rotate(); setInterval(rotate, 7000); renderAppearance();
  }

  function installTrackerPaging() {
    const original = window.renderTracker; if (typeof original !== 'function' || original.__commandPager) return;
    let page = 1, perPage = 15, lastSortedSignature = '';
    window.renderTracker = function () {
      const result = original.apply(this, arguments);
      const body = $('#trackerBody');
      const signature = body ? [...body.querySelectorAll('tr[data-mock-id]')].map(row => row.dataset.mockId).join('|') : '';
      if (lastSortedSignature && signature !== lastSortedSignature) page = 1;
      lastSortedSignature = signature;
      setTimeout(() => drawPager(), 0);
      return result;
    };
    window.renderTracker.__commandPager = true;
    function drawPager() {
      const body = $('#trackerBody'); if (!body) return; const rows = [...body.querySelectorAll('tr')]; const pages = Math.max(1, Math.ceil(rows.length / perPage)); page = Math.min(page, pages);
      rows.forEach((row, index) => { row.style.display = index >= (page - 1) * perPage && index < page * perPage ? '' : 'none'; });
      let holder = $('#commandTrackerPager'); if (!holder) { holder = document.createElement('div'); holder.id = 'commandTrackerPager'; holder.className = 'command-tracker-pager'; body.closest('.table-responsive')?.insertAdjacentElement('afterend', holder); }
      holder.innerHTML = rows.length > perPage ? (()=>{ const buttons=Array.from({length:pages},(_,i)=>{const p=i+1;return `<button class="btn-secondary ${p===page?'active':''}" type="button" data-page="${p}">${p}</button>`;}).join(''); return `<span>Showing ${(page - 1) * perPage + 1}–${Math.min(page * perPage, rows.length)} of ${rows.length} mock entries</span><div class="command-pager-actions"><button class="btn-secondary" type="button" data-page="prev" ${page === 1 ? 'disabled' : ''}>← Prev</button>${buttons}<button class="btn-secondary" type="button" data-page="next" ${page === pages ? 'disabled' : ''}>Next →</button></div>`; })() : `<span>${rows.length} mock entr${rows.length === 1 ? 'y' : 'ies'}</span>`;
      holder.onclick = event => {
        const button = event.target.closest('[data-page]'); if (!button) return;
        const target = button.dataset.page;
        if (target === 'next') page += 1;
        else if (target === 'prev') page -= 1;
        else { const requested = Number(target); if (Number.isInteger(requested)) page = requested; }
        page = Math.max(1, Math.min(page, pages));
        drawPager();
      };
    }
  }

  function showAchievement(title, detail) {
    $('.command-achievement')?.remove(); const toast = document.createElement('aside'); toast.className = 'command-achievement'; toast.innerHTML = `<b>🏆 ${escapeHTML(title)}</b><span>${escapeHTML(detail)}</span>`; document.body.appendChild(toast); setTimeout(() => toast.remove(), 4400);
  }

  function levelData(total) { const safe=Math.max(0,Number(total)||0), level=Math.floor(safe/100)+1, next=level*100; return { level, next, remaining: Math.max(0,next-safe) }; }
  function renderXP() { renderConsistencyPreview(); }
  function patchXPAchievements() {
    const original = window.submitFocusTimer; if (typeof original !== 'function' || original.__commandAchievement) return;
    window.submitFocusTimer = function () { const before = Number(window.appData?.xp?.total) || 0, oldLevel = levelData(before).level; const result = original.apply(this, arguments); setTimeout(() => { const after = Number(window.appData?.xp?.total) || 0; if (after > before) { showAchievement(`+${after - before} Study XP`, 'Focus logged. Keep the momentum going.'); const newLevel = levelData(after).level; if (newLevel > oldLevel) showAchievement(`Level ${newLevel} unlocked!`, `You reached ${after} XP. Your next milestone is waiting.`); } renderXP(); }, 20); return result; };
    window.submitFocusTimer.__commandAchievement = true;
  }

  /* ---------- MENTAL LOAD + CONSISTENCY ENGINE ---------- */
  const COOL_DOWN_ACTIONS = [
    { id:'water', icon:'💧', title:'Drink Water', detail:'2–3 minutes · hydrate + reset', reduction:10 },
    { id:'walk', icon:'🚶', title:'Walk Break', detail:'5–10 minutes · move your body', reduction:16 },
    { id:'breathe', icon:'🌬️', title:'Breathing Reset', detail:'3 minutes · slow breathing', reduction:12 },
    { id:'screen', icon:'👀', title:'Screen Break', detail:'5 minutes · eyes off screen', reduction:14 },
    { id:'stretch', icon:'🧘', title:'Stretch & Reset', detail:'4 minutes · release tension', reduction:11 }
  ];
  const xpRules = [
    { label:'Focused Study', rule:'1 XP per completed 5 minutes', cap:'60 XP / day' },
    { label:'Daily Task', rule:'1 XP per completed 10 planned minutes', cap:'No separate cap' },
    { label:'Brain Gym', rule:'2 XP per correct answer', cap:'As recorded by Brain Gym' },
    { label:'Cooldown', rule:'0 XP · protects your consistency score without rewarding burnout', cap:'Unlimited' }
  ];
  const parseClock = text => {
    const m = String(text||'').match(/(\d+):(\d+)\s*(AM|PM)/i); if(!m) return 0;
    let h=Number(m[1])%12; if(m[3].toUpperCase()==='PM') h+=12; return h*60+Number(m[2]);
  };
  const planFor = key => {
    try { return typeof window.generateDailySchedule==='function' ? window.generateDailySchedule(key) : tasks(); } catch(_) { return tasks(); }
  };
  const ensureFeatureData = () => {
    const a=window.appData || (window.appData={});
    if(!a.xp || typeof a.xp!=='object' || Array.isArray(a.xp)) a.xp={total:0,daily:{}};
    if(!a.xp.daily || typeof a.xp.daily!=='object' || Array.isArray(a.xp.daily)) a.xp.daily={};
    if(!Array.isArray(a.xp.logs)) a.xp.logs=[];
    if(!a.mentalLoad || typeof a.mentalLoad!=='object' || Array.isArray(a.mentalLoad)) a.mentalLoad={events:[]};
    if(!Array.isArray(a.mentalLoad.events)) a.mentalLoad.events=[];
    return a;
  };
  const addXPLog = (amount, reason, meta={}) => {
    amount=Math.max(0,Math.floor(Number(amount)||0)); if(!amount) return false;
    const a=ensureFeatureData(), d=today(), id=String(meta.id || `xp-${d}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`);
    a.xp.total=(Number(a.xp.total)||0)+amount;
    a.xp.daily[d]=(Number(a.xp.daily[d])||0)+amount;
    a.xp.logs.unshift({id,date:d,timestamp:Date.now(),amount,reason,...meta});
    if(a.xp.logs.length>1000) a.xp.logs.length=1000;
    window.saveDataLocally?.(); return true;
  };
  const removeXPLog = id => {
    const a=ensureFeatureData(), index=a.xp.logs.findIndex(x=>String(x.id)===String(id)); if(index<0)return false;
    const item=a.xp.logs[index], amount=Math.max(0,Number(item.amount)||0), d=item.date||today();
    a.xp.total=Math.max(0,(Number(a.xp.total)||0)-amount);
    a.xp.daily[d]=Math.max(0,(Number(a.xp.daily[d])||0)-amount);
    if(a.xp.daily[d]===0) delete a.xp.daily[d];
    a.xp.logs.splice(index,1); window.saveDataLocally?.(); return true;
  };
  const taskXP = minutes => Math.max(0,Math.floor((Number(minutes)||0)/10));
  const findTaskById = id => tasks().find(t=>String(t.id)===String(id));
  function patchTaskXP() {
    if(window.__kkConsistencyTaskXP) return;
    const original=window.toggleTask; if(typeof original!=='function') return;
    window.__kkConsistencyTaskXP=true;
    window.toggleTask=function(tId, checked){
      const d=today(), a=ensureFeatureData(), task=findTaskById(tId);
      const existingId=`taskxp-${d}-${tId}`;
      const existing=a.xp.logs.find(x=>String(x.id)===existingId);
      original.apply(this,arguments);
      if(checked && !existing && task && !String(task.id).startsWith('flex-')) {
        const gain=taskXP(task.duration); addXPLog(gain, `Completed: ${task.taskTitle||task.title}`, {id:existingId,type:'task',taskId:String(tId),duration:Number(task.duration)||0});
      } else if(!checked && existing) {
        removeXPLog(existingId);
      }
      renderMission(); renderMentalLoad(); renderConsistencyPreview();
    };
  }
  function mentalLoadSnapshot(key=today()) {
    const a=ensureFeatureData(), logs=Array.isArray(a.studyLogs)?a.studyLogs:[], focus=logs.filter(x=>x.date===key&&x.type==='Focus').reduce((n,x)=>n+(Number(x.duration)||0),0), waste=logs.filter(x=>x.date===key&&x.type==='Waste').reduce((n,x)=>n+(Number(x.duration)||0),0);
    const plan=planFor(key).filter(x=>!x.isBreak && !String(x.id).startsWith('flex-')), state=a.tasks?.[key]||{}, done=plan.filter(x=>state[x.id]).length;
    const mocks=logs.filter(x=>x.date===key && /mock/i.test(String(x.subject||''))).length;
    const mockRecords=(a.mocks||[]).filter(x=>x.date===key || x.testDate===key).length;
    const raw=Math.round(Math.min(46,focus/60/5*46) + Math.min(22,waste/60*11) + Math.min(16,done*2.5) + Math.min(10,(mocks+mockRecords)*3));
    const cooldown=(a.mentalLoad.events||[]).filter(x=>x.date===key).reduce((n,x)=>n+(Number(x.reduction)||0),0);
    const score=Math.max(0,Math.min(100,raw-cooldown));
    const stateLabel=score<35?'LOW':score<65?'MODERATE':score<80?'HIGH':'VERY HIGH';
    const guidance=score<35?'You are relatively fresh. Use the next block for high-focus work.':score<65?'Load is balanced. Keep one task at a time and use short resets.':score<80?'You are carrying a meaningful load. A cooldown before the next hard block will help.':'Your load is high. Cool down first, then choose only the lightest useful task.';
    return {key,score,state:stateLabel,guidance,focus,waste,done,total:plan.length,cooldown,mocks:Math.max(mocks,mockRecords)};
  }
  function renderMentalLoad() {
    const snap=mentalLoadSnapshot(), state=$('#ccLoadState'), score=$('#ccLoadScore'), bar=$('#ccLoadBar'), text=$('#ccLoadText');
    if(state) state.textContent=snap.state; if(score) score.textContent=snap.score; if(bar) bar.style.width=`${snap.score}%`; if(text) text.textContent=snap.guidance;
    const card=$('.load-card'); if(card){ card.dataset.loadState=snap.state.toLowerCase().replace(/\s+/g,'-'); card.setAttribute('aria-label',`Mental Load ${snap.score} out of 100. Click to cool down.`); }
    return snap;
  }
  function renderConsistencyPreview(){
    const a=ensureFeatureData(), total=Number(a.xp.total)||0, daily=Number(a.xp.daily[today()])||0, level=Math.floor(total/100)+1, progress=total%100;
    const label=$('#ccLevel'), xp=$('#ccXP'), todayEl=$('#ccTodayXP'), bar=$('#ccXPBar'), hint=$('#ccXPNext');
    if(label) label.textContent=`LEVEL ${level}`; if(xp) xp.textContent=`${total} XP`; if(todayEl) todayEl.textContent=`+${daily} today`; if(bar) bar.style.width=`${progress}%`; if(hint) hint.textContent=`${100-progress} XP to Level ${level+1}`;
  }
  function cooldownEvent(action){
    const a=ensureFeatureData(), d=today();
    a.mentalLoad.events.unshift({id:`cool-${d}-${action.id}-${Date.now()}`,date:d,timestamp:Date.now(),action:action.id,title:action.title,reduction:action.reduction});
    if(a.mentalLoad.events.length>1000)a.mentalLoad.events.length=1000;
    window.saveDataLocally?.(); renderMentalLoad(); renderConsistencyPreview();
  }
  function openMentalLoad(){
    $('.cmd-modal')?.remove(); const snap=renderMentalLoad();
    const modal=document.createElement('div'); modal.className='cmd-modal kk-mental-modal'; modal.innerHTML=`<div class="cmd-modal-card kk-mental-card" role="dialog" aria-modal="true" aria-labelledby="kkMentalTitle">
      <button class="btn-secondary cmd-modal-close" type="button" aria-label="Close">Close</button>
      <div class="cc-eyebrow">MENTAL LOAD</div><div class="kk-modal-head"><div><h2 id="kkMentalTitle"><span id="kkMentalScore">${snap.score}</span>/100 · ${snap.state}</h2><p id="kkMentalGuidance">${escapeHTML(snap.guidance)}</p></div><div class="kk-cooldown-orb" aria-hidden="true"><span>🧠</span><i></i></div></div>
      <div class="kk-mental-meter"><i id="kkMentalMeter" style="width:${snap.score}%"></i></div>
      <div class="kk-load-stats"><div><b>${Math.round(snap.focus/60)}m</b><span>Focus</span></div><div><b>${Math.round(snap.waste/60)}m</b><span>Waste</span></div><div><b>${snap.done}/${snap.total}</b><span>Tasks</span></div><div><b>−${snap.cooldown}</b><span>Cooldown</span></div></div>
      <div class="kk-cooldown-head"><div><h3>Click to Cool Down</h3><p>Pick one reset. The load meter cools down immediately.</p></div><span class="kk-cooldown-pulse">● LIVE</span></div>
      <div class="kk-cooldown-grid">${COOL_DOWN_ACTIONS.map(x=>`<button type="button" class="kk-cooldown-btn" data-cooldown="${x.id}"><span class="kk-cooldown-icon">${x.icon}</span><span><b>${x.title}</b><small>${x.detail}</small></span><em>−${x.reduction}</em></button>`).join('')}</div>
      <div id="kkCooldownFeedback" class="kk-cooldown-feedback" aria-live="polite">Choose a reset to lower the load.</div>
    </div>`;
    document.body.appendChild(modal);
    const close=()=>modal.remove(); $('.cmd-modal-close',modal).onclick=close; modal.addEventListener('click',e=>{if(e.target===modal)close();});
    $$('.kk-cooldown-btn',modal).forEach(btn=>btn.onclick=()=>{
      const action=COOL_DOWN_ACTIONS.find(x=>x.id===btn.dataset.cooldown); if(!action)return;
      cooldownEvent(action); btn.classList.add('is-done'); setTimeout(()=>btn.classList.remove('is-done'),800);
      const newSnap=mentalLoadSnapshot(); $('#kkMentalScore',modal).textContent=newSnap.score; $('#kkMentalMeter',modal).style.width=`${newSnap.score}%`;
      $('.kk-cooldown-feedback',modal).innerHTML=`<b>✓ Cooldown applied.</b> Mental load reduced by ${action.reduction}.`; modal.querySelector('.kk-cooldown-orb')?.classList.add('cooling'); setTimeout(()=>modal.querySelector('.kk-cooldown-orb')?.classList.remove('cooling'),900);
    });
  }
  function xpDays(count=14){
    const out=[]; const now=new Date(); for(let i=count-1;i>=0;i--){const d=new Date(now);d.setDate(now.getDate()-i);const key=dateKey(d);out.push({key,label:d.toLocaleDateString(undefined,{weekday:'short'}),short:d.toLocaleDateString(undefined,{day:'numeric',month:'short'}),xp:Number(ensureFeatureData().xp.daily[key])||0});} return out;
  }
  function levelFromXP(total){return Math.floor(Math.max(0,Number(total)||0)/100)+1;}
  function consistencyLogs(){
    const a=ensureFeatureData(), rows=[];
    (a.xp.logs||[]).forEach(x=>rows.push({ts:Number(x.timestamp)||0,date:x.date||'',kind:'XP',title:x.reason||'Study XP',detail:`+${Number(x.amount)||0} XP`}));
    (a.studyLogs||[]).forEach(x=>rows.push({ts:Number(x.id)||0,date:x.date||'',kind:x.type||'Study',title:x.subject||x.type||'Study',detail:x.durationStr||`${Math.round((Number(x.duration)||0)/60)} min`}));
    (a.mentalLoad?.events||[]).forEach(x=>rows.push({ts:Number(x.timestamp)||0,date:x.date||'',kind:'Cooldown',title:x.title||'Cooldown',detail:`−${Number(x.reduction)||0} load`}));
    Object.entries(a.tasks||{}).forEach(([d,state])=>Object.entries(state||{}).filter(([,v])=>v).forEach(([id])=>{const task=planFor(d).find(t=>String(t.id)===String(id)); if(task)rows.push({ts:0,date:d,kind:'Task',title:task.taskTitle||task.title,detail:`${Number(task.duration)||0} min complete`});}));
    return rows.sort((a,b)=>b.ts-a.ts || b.date.localeCompare(a.date));
  }
  function openConsistencyEngine(){
    $('.cmd-modal')?.remove(); const a=ensureFeatureData(), total=Number(a.xp.total)||0, level=levelFromXP(total), progress=total%100, days=xpDays(14), logs=consistencyLogs();
    const modal=document.createElement('div'); modal.className='cmd-modal kk-consistency-modal'; modal.innerHTML=`<div class="cmd-modal-card kk-consistency-card" role="dialog" aria-modal="true" aria-labelledby="kkConsistencyTitle">
      <button class="btn-secondary cmd-modal-close" type="button">Close</button><div class="cc-eyebrow">CONSISTENCY ENGINE</div><div class="kk-consistency-hero"><div><h2 id="kkConsistencyTitle">🏆 Study XP Engine</h2><p>Every useful action is logged here. Your dashboard, daily plan and cloud data use the same state.</p></div><div class="kk-level-badge"><small>CURRENT LEVEL</small><b>LEVEL ${level}</b><span>${total} XP total</span></div></div>
      <div class="kk-xp-overview"><div><span>Total XP</span><b>${total}</b></div><div><span>Today</span><b>+${Number(a.xp.daily[today()])||0}</b></div><div><span>Next Level</span><b>${100-progress} XP</b></div><div><span>Logged Events</span><b>${logs.length}</b></div></div>
      <div class="kk-engine-grid"><section><div class="kk-section-head"><div><div class="cc-label">XP RULES</div><h3>How XP is earned</h3></div></div><div class="kk-xp-rules">${xpRules.map(r=>`<div class="kk-xp-rule"><b>${escapeHTML(r.label)}</b><span>${escapeHTML(r.rule)}</span><em>${escapeHTML(r.cap)}</em></div>`).join('')}</div><div class="kk-level-track"><div class="kk-level-track-head"><span>Level ${level} progress</span><b>${progress}/100</b></div><div><i style="width:${progress}%"></i></div></div></section>
      <section><div class="kk-section-head"><div><div class="cc-label">XP EARNED BY DAY</div><h3>Last 14 days</h3></div></div><div class="kk-xp-chart" role="img" aria-label="XP earned by day">${days.map(d=>`<div class="kk-xp-day" title="${d.short}: ${d.xp} XP"><div class="kk-xp-bar-wrap"><i style="height:${Math.min(100,Math.max(4,d.xp/(Math.max(10,...days.map(x=>x.xp))*1.15)*100))}%"></i></div><b>${d.xp}</b><span>${escapeHTML(d.label)}</span></div>`).join('')}</div></section></div>
      <section class="kk-log-section"><div class="kk-section-head"><div><div class="cc-label">ALL LOGS</div><h3>Recent activity</h3></div><span>${logs.length} entries</span></div><div class="kk-log-list">${logs.slice(0,120).map(x=>`<div class="kk-log-row"><time>${escapeHTML(x.date)}</time><span class="kk-log-kind kk-${String(x.kind).toLowerCase().replace(/\s+/g,'-')}">${escapeHTML(x.kind)}</span><strong>${escapeHTML(x.title)}</strong><em>${escapeHTML(x.detail)}</em></div>`).join('') || '<div class="kk-empty-log">No logs yet. Complete a task or focus block to start your history.</div>'}</div></section>
    </div>`;
    document.body.appendChild(modal); $('.cmd-modal-close',modal).onclick=()=>modal.remove(); modal.addEventListener('click',e=>{if(e.target===modal)modal.remove();});
  }


  function openBrainGym() {
    $('#commandBrainModal')?.remove(); const key = `commandBrain_${today()}`, startingUsed = Number(localStorage.getItem(key) || 0); let used = startingUsed, game = null, round = 0, score = 0, interval = null, roundTimer = null, roundEnd = 0; const modal = document.createElement('div'); modal.id = 'commandBrainModal'; modal.className = 'cmd-modal'; modal.innerHTML = `<div class="cmd-modal-card"><button class="btn-secondary cmd-modal-close" type="button">Close</button><div class="command-brain-header"><div><div class="cc-eyebrow">BRAIN GYM</div><h2>10-minute sharpness session</h2><p>Choose a 5-question set. Every question has 30 seconds.</p></div><b class="command-brain-timer" id="commandBrainTimer">10:00</b></div><div class="command-brain-progress"><i id="commandBrainBar"></i></div><div id="commandBrainBody"></div></div>`; document.body.appendChild(modal);
    const body = $('#commandBrainBody', modal), close = () => { clearInterval(interval); clearInterval(roundTimer); localStorage.setItem(key, String(Math.min(600, used))); modal.remove(); };
    $('.cmd-modal-close', modal).onclick = close; modal.addEventListener('click', event => { if (event.target === modal) close(); });
    const update = () => { const remaining = Math.max(0, 600 - used); $('#commandBrainTimer', modal).textContent = fmt(remaining); $('#commandBrainBar', modal).style.width = `${Math.min(100, used / 600 * 100)}%`; if (!remaining) { clearInterval(interval); body.innerHTML = '<div class="command-brain-round"><h3>Daily limit reached</h3><p>Great. Return tomorrow with a fresh mind.</p></div>'; } };
    /* interval moved to active game state */ update();
    const games = { maths: ['Quick Maths', '5 questions · 30 sec each'], word: ['Word Recall', '5 meanings · 30 sec each'], pattern: ['Number Pattern', '5 sequences · 30 sec each'] };
    const lobby = () => { game = null; body.innerHTML = `<div class="command-brain-games">${Object.entries(games).map(([id, value]) => `<button class="command-brain-game" data-brain-game="${id}"><b>${value[0]}</b><span>${value[1]}</span></button>`).join('')}</div>`; $$('[data-brain-game]', body).forEach(button => button.onclick = () => { game = button.dataset.brainGame; round = 0; score = 0; nextRound(); }); };
    const nextRound = () => { clearInterval(roundTimer); if (used >= 600) return update(); round += 1; if (round > 5) { const gain = score * 2; if (gain) { window.appData.xp = window.appData.xp || { total: 0, daily: {} }; window.appData.xp.total = (Number(window.appData.xp.total) || 0) + gain; window.appData.xp.daily = window.appData.xp.daily || {}; window.appData.xp.daily[today()] = (Number(window.appData.xp.daily[today()]) || 0) + gain; window.saveDataLocally?.(); showAchievement('Brain Gym complete', `${score}/5 correct · +${gain} XP earned`); } body.innerHTML = `<div class="command-brain-round"><h3>Set complete: ${score}/5</h3><p>${gain ? `You earned ${gain} XP. ` : ''}Try another set or return to your study plan.</p><button class="cc-primary" type="button" id="commandBrainAgain">Choose another set</button></div>`; $('#commandBrainAgain', body).onclick = lobby; renderXP(); return; }
      let question, answers, actual;
      if (game === 'maths') { const a = Math.floor(Math.random() * 30) + 10, b = Math.floor(Math.random() * 15) + 3; actual = a + b; question = `${a} + ${b} = ?`; answers = [actual, actual + 2, actual - 3, actual + 5].sort(() => Math.random() - .5); }
      else if (game === 'word') { const list = typeof vocabData === 'undefined' ? [] : vocabData; const word = list[Math.floor(Math.random() * list.length)] || { word: 'Prudent', meaning: 'wise and careful' }; actual = word.meaning; question = `Meaning of “${word.word}”`; const defaults = ['wise and careful', 'easy to ignore', 'very noisy', 'impossible to solve']; answers = [actual, ...defaults.filter(item => item !== actual).slice(0, 3)].sort(() => Math.random() - .5); }
      else { const start = Math.floor(Math.random() * 8) + 2, step = Math.floor(Math.random() * 7) + 2; actual = start + step * 3; question = `${start}, ${start + step}, ${start + step * 2}, ?`; answers = [actual, actual + step, actual - step, actual + 2].sort(() => Math.random() - .5); }
      roundEnd = Date.now() + 30000; const draw = () => { const left = Math.max(0, Math.ceil((roundEnd - Date.now()) / 1000)); body.innerHTML = `<div class="command-brain-round"><span>Question ${round}/5 · <b id="commandBrainQuestionTimer">${left}s</b></span><div class="command-brain-question">${escapeHTML(question)}</div><div class="command-brain-options">${answers.map(answer => `<button class="command-brain-option" type="button" data-answer="${escapeHTML(answer)}">${escapeHTML(answer)}</button>`).join('')}</div></div>`; $$('[data-answer]', body).forEach(button => button.onclick = () => { const ok = String(button.dataset.answer) === String(actual); if (ok) score += 1; nextRound(); }); }; draw(); roundTimer = setInterval(() => { const left = Math.max(0, Math.ceil((roundEnd - Date.now()) / 1000)); const timer = $('#commandBrainQuestionTimer', body); if (timer) timer.textContent = `${left}s`; if (!left) nextRound(); }, 250); };
    lobby();
  }

  function wireInteractions() {
    const loadCard=$('.load-card');
    if(loadCard && !loadCard.dataset.mentalBound){ loadCard.dataset.mentalBound='1'; loadCard.setAttribute('role','button'); loadCard.setAttribute('tabindex','0'); loadCard.addEventListener('click',openMentalLoad); loadCard.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openMentalLoad();}}); }
    const xpCard=$('.xp-card');
    if(xpCard && !xpCard.dataset.consistencyBound){ xpCard.dataset.consistencyBound='1'; xpCard.setAttribute('role','button'); xpCard.setAttribute('tabindex','0'); xpCard.addEventListener('click',openConsistencyEngine); xpCard.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openConsistencyEngine();}}); }
    patchTaskXP(); renderMentalLoad(); renderConsistencyPreview();
    if(!window.__kkFeatureSaveRefresh){ window.__kkFeatureSaveRefresh=true; window.addEventListener('kk:data-saved',()=>{ renderMentalLoad(); renderConsistencyPreview(); }); }
    if(!window.__kkBrainGymClickBound){
      window.__kkBrainGymClickBound = true;
      document.addEventListener('click', event => {
        const trigger = event.target.closest?.('#navBrainGym, #ccBrainGym');
        if(!trigger) return;
        event.preventDefault();
        event.stopPropagation();
        openBrainGym();
      });
    }
  }

  function init() {
    if (window.__commandEnhancementBooted) return;
    window.__commandEnhancementBooted = true;
    installWallpaper(); installCompactExamStyle(); installCountdownForm(); installDayWindow(); installSettings(); installTrackerPaging(); patchXPAchievements(); wireInteractions(); renderMission(); renderExamCountdownPanel(); renderXP(); renderMentalLoad(); renderConsistencyPreview();
    // Shared lightweight intervals: existing clocks + low-cost state refresh for Mental Load.
    if (!window.__kkCommandSecondTimer) {
      window.__kkCommandSecondTimer = setInterval(() => { window.kkUpdateExamCountdownTimes?.(); window.kkUpdateDayWindow?.(); }, 1000);
    }
    if (!window.__kkFeatureRefreshTimer) {
      window.__kkFeatureRefreshTimer = setInterval(() => { renderMentalLoad(); renderConsistencyPreview(); }, 5000);
    }
  }
  window.commandEnhancementsInit = init;
})();

/* ===== Cloud synchronization ===== */
/* Cloud account sync — deletion tombstones are shared across devices. */
(() => {
  'use strict';
  if (window.__kkCloudSyncLoaded) return;
  window.__kkCloudSyncLoaded = true;

  const CFG = {
    apiKey: 'AIzaSyCMx9i7ydiEo2O3nNTyhL2AHSVVUEoNpw8',
    authDomain: 'kk-monitoring.firebaseapp.com',
    projectId: 'kk-monitoring',
    storageBucket: 'kk-monitoring.firebasestorage.app',
    messagingSenderId: '776725192537',
    appId: '1:776725192537:web:0c7a3e31e13b9358e8f648'
  };
  const COLLECTION='kkMonitoring';
  const STATUS_IDS=['v42Cloud','ccCloudStatus','ccCloudHint'];
  const DATA_KEY=window.KK_DATA_STORAGE_KEY||'kkMonitoringV68';
  const MOCK_DELETE_KEY='kkMonitoringDeletedMockIdsV68';
  const LEGACY_PENDING_DELETE_KEY='kkMonitoringPendingMockDeletesV65';
  const PENDING_REPLACE_KEY='kkMonitoringPendingCloudReplaceV68';
  let auth=null, db=null, syncing=false, saveTimer=null, firebasePromise=null;
  let pendingReplace=false;
  try{ pendingReplace=localStorage.getItem(PENDING_REPLACE_KEY)==='1'; }catch(_){}
  const pendingMockDeletes=new Set();
  try{
    for(const key of [MOCK_DELETE_KEY,LEGACY_PENDING_DELETE_KEY]){
      const raw=JSON.parse(localStorage.getItem(key)||'[]');
      if(Array.isArray(raw)) raw.forEach(id=>pendingMockDeletes.add(String(id)));
    }
  }catch(_){}
  function persistMockDeletes(){
    try{ localStorage.setItem(MOCK_DELETE_KEY,JSON.stringify([...pendingMockDeletes].slice(-5000))); }catch(_){}
  }
  function rememberMockDeletion(id){
    if(id===undefined||id===null||String(id)==='')return;
    pendingMockDeletes.add(String(id)); persistMockDeletes();
  }
  function setPendingReplace(value){
    pendingReplace=!!value;
    try{ if(pendingReplace)localStorage.setItem(PENDING_REPLACE_KEY,'1'); else localStorage.removeItem(PENDING_REPLACE_KEY); }catch(_){}
  }
  function normalizeMockRecords(list){
    const counts=new Map();
    return (Array.isArray(list)?list:[]).filter(item=>item&&typeof item==='object').map(item=>{
      const signature=window.kkStableMockSignature?.(item)||[item.date,item.examType,item.type,item.sub,item.platform,item.totalMarks,item.eR,item.eW,item.qR,item.qW,item.rR,item.rW].join('|');
      const occurrence=counts.get(signature)||0; counts.set(signature,occurrence+1);
      const id=item.id!==undefined&&item.id!==null&&String(item.id)!==''?item.id:(window.kkStableMockId?.(item,occurrence)||`legacy-${occurrence}`);
      return item.id!==undefined&&item.id!==null&&String(item.id)!==''?item:{...item,id};
    });
  }
  function applyMockTombstones(data){
    if(!data||typeof data!=='object')return data;
    data.mocks=normalizeMockRecords(data.mocks).filter(mock=>!pendingMockDeletes.has(String(mock.id)));
    return data;
  }
  function mergeRemoteTombstones(ids){
    const before=pendingMockDeletes.size;
    (Array.isArray(ids)?ids:[]).forEach(id=>{if(id!==undefined&&id!==null)pendingMockDeletes.add(String(id));});
    if(pendingMockDeletes.size!==before)persistMockDeletes();
  }
  window.kkRememberMockDeletion=rememberMockDeletion;
  window.kkCloudQueueReplace=()=>{setPendingReplace(true);return replaceCloud();};

  const clone = o => JSON.parse(JSON.stringify(o || {}));
  const setStatus = (text, state='offline') => {
    for (const id of STATUS_IDS) {
      const el=document.getElementById(id); if(!el) continue;
      if(id==='v42Cloud'){ el.classList.toggle('online',state==='online'); el.classList.toggle('offline',state!=='online'); const b=el.querySelector('b'); if(b)b.textContent=text; }
      else if(id==='ccCloudHint'){ el.textContent=text; }
      else { el.innerHTML=`<i></i> ${text}`; el.classList.toggle('online',state==='online'); }
    }
  };

  function quizKey(item){
    if(window.kkQuizRecordId) return window.kkQuizRecordId(item);
    if(item?.id!==undefined && item?.id!==null && String(item.id)!=='') return String(item.id);
    return `quiz-${String(item?.date||'')}-${Number(item?.timestamp)||0}-${Number(item?.score)||0}-${Number(item?.timeTakenMs)||0}-${Number(item?.correct)||0}-${Number(item?.wrong)||0}`;
  }
  function mergeArrays(remote, local, kind='generic'){
    const map=new Map();
    const add=(item)=>{
      if(!item || typeof item!=='object') return;
      const key = kind==='quiz' ? quizKey(item) : String(item?.id ?? `${item?.date||''}|${item?.timestamp||''}|${item?.name||''}|${item?.content||''}`);
      if(!map.has(key)) map.set(key,item);
      else {
        // Prefer the latest/local version when a stable id identifies the same record.
        const existing=map.get(key);
        if((Number(item.timestamp)||0) >= (Number(existing?.timestamp)||0)) map.set(key,item);
      }
    };
    for(const item of Array.isArray(remote)?remote:[]) add(item);
    for(const item of Array.isArray(local)?local:[]) add(item);
    return [...map.values()];
  }

  function mergeDayMaps(remote, local){
    const r=remote&&typeof remote==='object'?remote:{}; const l=local&&typeof local==='object'?local:{};
    const out={...r};
    Object.keys(l).forEach(key=>{
      const rv=r[key], lv=l[key];
      if(rv&&typeof rv==='object'&&!Array.isArray(rv)&&lv&&typeof lv==='object'&&!Array.isArray(lv)) out[key]={...rv,...lv};
      else out[key]=lv;
    });
    return out;
  }
  function mergeNumericDayMaps(remote, local, mode='max'){
    const r=remote&&typeof remote==='object'?remote:{}; const l=local&&typeof local==='object'?local:{};
    const out={...r}; const keys=new Set([...Object.keys(r),...Object.keys(l)]);
    keys.forEach(key=>{const a=Number(r[key]);const b=Number(l[key]);if(Number.isFinite(a)&&Number.isFinite(b)) out[key]=mode==='sum'?a+b:Math.max(a,b); else if(key in l) out[key]=l[key];});
    return out;
  }
  function mergeXP(remote, local){
    const r=remote&&typeof remote==='object'?remote:{}; const l=local&&typeof local==='object'?local:{};
    return { ...r, ...l, total:Math.max(Number(r.total)||0,Number(l.total)||0), daily:mergeNumericDayMaps(r.daily,l.daily,'max') };
  }
  function mergeDigitalWellness(remote, local){
    const r = remote && typeof remote === 'object' ? remote : {};
    const l = local && typeof local === 'object' ? local : {};
    const mergeMap = (a,b) => ({ ...(a && typeof a === 'object' ? a : {}), ...(b && typeof b === 'object' ? b : {}) });
    return {
      ...r, ...l,
      dailySnapshots: mergeMap(r.dailySnapshots, l.dailySnapshots),
      categories: mergeMap(r.categories, l.categories),
      appLimits: mergeMap(r.appLimits, l.appLimits),
      blockedPackages: Array.isArray(l.blockedPackages) ? l.blockedPackages : (Array.isArray(r.blockedPackages) ? r.blockedPackages : []),
      settings: mergeMap(r.settings, l.settings)
    };
  }
  function mergeData(remote, local){
    const r=remote&&typeof remote==='object'?remote:{};
    const l=local&&typeof local==='object'?local:{};
    return {
      ...r, ...l,
      mocks:mergeArrays(normalizeMockRecords(r.mocks),normalizeMockRecords(l.mocks),'mock'), studyLogs:mergeArrays(r.studyLogs,l.studyLogs), quizHistory:mergeArrays(r.quizHistory,l.quizHistory,'quiz'),
      vaultFolders:mergeArrays(r.vaultFolders,l.vaultFolders), vaultNotes:mergeArrays(r.vaultNotes,l.vaultNotes), countdowns:mergeArrays(r.countdowns,l.countdowns),
      tasks:mergeDayMaps(r.tasks,l.tasks),
      dailySessions:mergeNumericDayMaps(r.dailySessions,l.dailySessions,'max'),
      attendance:mergeDayMaps(r.attendance,l.attendance),
      xp:mergeXP(r.xp,l.xp),
      vocabProgress:mergeDayMaps(r.vocabProgress,l.vocabProgress),
      grammarProgress:mergeDayMaps(r.grammarProgress,l.grammarProgress),
      digitalWellness:mergeDigitalWellness(r.digitalWellness,l.digitalWellness)
    };
  }
  function hasMeaningfulData(d){
    return !!(d && ((d.mocks||[]).length || (d.studyLogs||[]).length || (d.quizHistory||[]).length || (d.vaultFolders||[]).length || (d.vaultNotes||[]).length || (d.countdowns||[]).length || Object.keys(d.tasks||{}).length || Object.keys(d.dailySessions||{}).length || Object.keys(d.attendance||{}).length || Number(d.xp?.total)>0));
  }
  function updateUI(){
    try{
      window.ensureDataShape?.();
      window.updateDashboardKPIs?.(); window.renderTracker?.(); window.renderCountdowns?.(); window.renderDailySchedule?.(); window.renderCalendar?.();
      window.renderDashboardStickyNotes?.(); window.updateMockUI?.(); window.renderLifetimeMockSummary?.(); window.renderVaultFolders?.(null);
      if(document.getElementById('view-analytics')?.classList.contains('active')) window.renderCharts?.();
    }catch(e){console.warn('Cloud UI refresh:',e);}
  }

  function loadFirebase(){
    if(window.firebase?.auth&&window.firebase?.firestore){return Promise.resolve(true);}
    if(firebasePromise)return firebasePromise;
    const add=(src)=>new Promise(resolve=>{const s=document.createElement('script');s.async=true;s.src=src;s.onload=()=>resolve(true);s.onerror=()=>resolve(false);document.head.appendChild(s);});
    firebasePromise=(async()=>{
      if(!await add('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js')) return false;
      const results=await Promise.all([
        add('https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js'),
        add('https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js')
      ]);
      return results.every(Boolean) && !!window.firebase;
    })();
    return firebasePromise;
  }

  function initFirebase(){
    if(!window.firebase?.auth||!window.firebase?.firestore) return false;
    try{ if(!firebase.apps.length) firebase.initializeApp(CFG); auth=firebase.auth(); db=firebase.firestore(); return true; }
    catch(e){ console.error('Firebase init:',e); return false; }
  }

  async function pullCloud(){
    if(syncing || !auth?.currentUser || !db || !window.appData) return false;
    syncing=true; setStatus('Restoring cloud…','online');
    try{
      const snap=await db.collection(COLLECTION).doc(auth.currentUser.uid).get();
      if(!snap.exists){
        if(pendingMockDeletes.size)setPendingReplace(true);
        setStatus('Cloud connected','online'); return false;
      }
      const doc=snap.data()||{};
      const remote=doc.appData;
      mergeRemoteTombstones(doc.deletedMockIds);
      const remoteTombstones=new Set((Array.isArray(doc.deletedMockIds)?doc.deletedMockIds:[]).map(String));
      if([...pendingMockDeletes].some(id=>!remoteTombstones.has(id)))setPendingReplace(true);
      if(!remote){ setStatus('Cloud connected','online'); return false; }
      const merged=applyMockTombstones(mergeData(remote,window.appData));
      if(window.kkDedupeQuizHistory)merged.quizHistory=window.kkDedupeQuizHistory(merged.quizHistory);
      window.appData=merged;
      localStorage.setItem(DATA_KEY,JSON.stringify(window.appData));
      updateUI();
      window.renderKKDigitalWellness?.();
      setStatus('Cloud restored','online');
      return true;
    }catch(e){console.warn('Cloud pull:',e);setStatus('Cloud offline','offline');return false;}
    finally{
      syncing=false;
      if(pendingReplace && auth?.currentUser)setTimeout(()=>replaceCloud(),0);
    }
  }
  function cloudPayload(){
    applyMockTombstones(window.appData);
    return {appData:clone(window.appData),deletedMockIds:[...pendingMockDeletes],updatedAt:firebase.firestore.FieldValue.serverTimestamp()};
  }
  async function pushCloud(){
    if(syncing || !auth?.currentUser || !db || !window.appData) return false;
    syncing=true;
    try{
      await db.collection(COLLECTION).doc(auth.currentUser.uid).set(cloudPayload(),{merge:true});
      setStatus('Cloud saved','online'); return true;
    }catch(e){console.warn('Cloud push:',e);setStatus('Cloud offline','offline');return false;}
    finally{
      syncing=false;
      if(pendingReplace && auth?.currentUser)setTimeout(()=>replaceCloud(),0);
    }
  }
  async function replaceCloud(){
    setPendingReplace(true);
    if(!auth?.currentUser || !db || !window.appData)return false;
    if(syncing)return false;
    syncing=true;
    try{
      await db.collection(COLLECTION).doc(auth.currentUser.uid).set(cloudPayload());
      setPendingReplace(false);
      setStatus('Cloud updated','online'); return true;
    }catch(e){
      console.warn('Cloud replace:',e);setStatus('Cloud offline','offline');return false;
    }finally{
      syncing=false;
      if(pendingReplace && auth?.currentUser)setTimeout(()=>replaceCloud(),0);
    }
  }
  window.kkCloudReplaceNow=replaceCloud;
  function schedulePush(){clearTimeout(saveTimer);saveTimer=setTimeout(()=>pushCloud(),1200);}

  function authError(e){
    const map={'auth/invalid-email':'Invalid email address.','auth/user-not-found':'No account found for this email.','auth/wrong-password':'Incorrect password.','auth/invalid-credential':'Incorrect email or password.','auth/too-many-requests':'Too many attempts. Try again later.','auth/network-request-failed':'Network connection failed.'};
    return map[e?.code]||e?.message||'Authentication failed.';
  }

  function styleAuth(){
    if(document.getElementById('kkCloudAuthStyle')) return;
    const s=document.createElement('style'); s.id='kkCloudAuthStyle';
    s.textContent=`.kk-cloud-auth{position:fixed;inset:0;z-index:100000;background:rgba(3,7,18,.62);display:flex;align-items:center;justify-content:center;padding:18px;backdrop-filter:blur(10px)}.kk-cloud-auth-card{position:relative;width:min(420px,96vw);padding:28px;border-radius:22px;background:rgba(17,24,39,.95);border:1px solid rgba(255,255,255,.14);box-shadow:0 28px 80px rgba(0,0,0,.45)}.kk-cloud-auth-card h2{margin:0 0 8px}.kk-cloud-auth-card p{color:var(--text-muted);line-height:1.5}.kk-cloud-auth-card label{display:block;margin:14px 0 6px}.kk-cloud-auth-card input{width:100%;box-sizing:border-box}.kk-cloud-auth-actions{display:flex;gap:10px;margin-top:18px}.kk-cloud-auth-actions button{flex:1}.kk-cloud-auth-msg{min-height:22px;margin-top:12px;color:var(--text-muted);font-size:.9rem}`;
    document.head.appendChild(s);
  }

  function showAuth(){
    if(document.getElementById('kkCloudAuth')) return;
    styleAuth();
    const m=document.createElement('div'); m.id='kkCloudAuth'; m.className='kk-cloud-auth';
    m.innerHTML=`<div class="kk-cloud-auth-card" role="dialog" aria-modal="true" aria-labelledby="kkCloudTitle"><button id="kkCloudClose" type="button" aria-label="Close cloud sign in" style="position:absolute;right:14px;top:14px;width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.06);color:inherit;font-size:1.2rem;cursor:pointer">×</button><div style="font-size:2rem">☁️</div><h2 id="kkCloudTitle">Restore Study Data</h2><p>Sign in with your KK Monitoring cloud account. Your local UI stays usable even if cloud sign-in is unavailable.</p><label>Email</label><input id="kkCloudEmail" class="modern-input" type="email" autocomplete="email" placeholder="you@example.com"><label>Password</label><input id="kkCloudPass" class="modern-input" type="password" autocomplete="current-password" placeholder="Your cloud password"><div class="kk-cloud-auth-actions"><button id="kkCloudSignIn" class="btn-primary">Sign In & Restore</button><button id="kkCloudSkip" class="btn-secondary" type="button">Use Local</button></div><button id="kkCloudForgot" class="btn-secondary" style="width:100%;margin-top:10px" type="button">Forgot Password?</button><div id="kkCloudMsg" class="kk-cloud-auth-msg"></div></div>`;
    document.body.appendChild(m);
    const close=()=>m.remove();
    document.getElementById('kkCloudClose').onclick=close;
    m.addEventListener('click',e=>{if(e.target===m)close();});
    const onKey=e=>{if(e.key==='Escape'){close();document.removeEventListener('keydown',onKey);}};
    document.addEventListener('keydown',onKey);
    const msg=t=>{const el=document.getElementById('kkCloudMsg');if(el)el.textContent=t;};
    document.getElementById('kkCloudSkip').onclick=()=>{close();setStatus('Local mode','offline');};
    document.getElementById('kkCloudSignIn').onclick=async()=>{
      const email=document.getElementById('kkCloudEmail').value.trim(), pass=document.getElementById('kkCloudPass').value;
      const b=document.getElementById('kkCloudSignIn'); if(!email||!pass){msg('Enter email and password.');return;} b.disabled=true; msg('Connecting to cloud…');
      try{
        if(!auth){ const ok=await loadFirebase(); if(!ok||!initFirebase()) throw Object.assign(new Error('Cloud service unavailable.'),{code:'auth/network-request-failed'}); }
        await auth.signInWithEmailAndPassword(email,pass); close(); await pullCloud(); if(!hasMeaningfulData(window.appData)) await pushCloud();
      } catch(e){msg(authError(e)); b.disabled=false;}
    };
    document.getElementById('kkCloudForgot').onclick=async()=>{const email=document.getElementById('kkCloudEmail').value.trim();if(!email){msg('Enter your email first.');return;}try{if(!auth){const ok=await loadFirebase();if(!ok||!initFirebase())throw Object.assign(new Error('Cloud service unavailable.'),{code:'auth/network-request-failed'});}await auth.sendPasswordResetEmail(email);msg('Password reset email sent.');}catch(e){msg(authError(e));}};
  }

  window.kkCloudOpenAuth = showAuth;
  window.addEventListener('kk:cloud-open-request', () => showAuth());

  async function boot(){
    setStatus('Connecting cloud…','offline');
    ['v42Cloud','ccCloudStatus','ccCloudHint'].forEach(id=>{const el=document.getElementById(id);if(el&&!el.dataset.kkCloudClickBound){el.dataset.kkCloudClickBound='1';el.addEventListener('click',()=>showAuth());el.style.cursor='pointer';}});
    if(!await loadFirebase()){ setStatus('Local mode','offline'); return; }
    if(!initFirebase()){ setStatus('Local mode','offline'); return; }
    try{ await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL); }catch(_){ }
    auth.onAuthStateChanged(async user=>{
      if(!user){ setStatus('Sign in required','offline'); return; }
      setStatus('Restoring cloud…','online');
      if(pendingReplace){await replaceCloud();updateUI();return;}
      const hadRemote=await pullCloud();
      if(pendingReplace){await replaceCloud();}
      else if(!hadRemote && (hasMeaningfulData(window.appData)||pendingMockDeletes.size)){await replaceCloud();}
      if(hadRemote || pendingReplace)updateUI();
    });
    window.addEventListener('online',()=>{
      if(!auth?.currentUser) return;
      if(pendingReplace)replaceCloud();else pullCloud();
    });
    window.addEventListener('kk:mock-deleted',event=>rememberMockDeletion(event.detail?.id));
    window.addEventListener('kk:data-saved',event=>{
      if(event.detail?.reason==='delete'){clearTimeout(saveTimer);setPendingReplace(true);replaceCloud();}
      else schedulePush();
    });
    document.addEventListener('visibilitychange',()=>{if(!document.hidden&&auth?.currentUser){if(pendingReplace)replaceCloud();else pullCloud();}});
  }

  boot().catch(e=>{console.warn('Cloud boot:',e);setStatus('Local mode','offline');});
  window.kkCloudSignOut=()=>auth?.signOut();
})();

/* ===== UI refinements ===== */
/* Workspace layout, XP recovery and analytics support. */
(() => {
  'use strict';

  if (window.__kkWorkspaceSupportLoaded) return;
  window.__kkWorkspaceSupportLoaded = true;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const SUBJECTS = ['English', 'Quants', 'Reasoning', 'Mock & Analysis'];
  const STORAGE = {
    compact: 'kkSidebarCompact_v62',
    locked: 'kkSidebarLocked_v62'
  };
  const todayKey = () => window.getSafeDateStr ? window.getSafeDateStr() : new Date().toISOString().slice(0,10);

  /* ---------- 1) GLOBAL SIDEBAR COMPACT / LOCK MODE ---------- */
  function injectWorkspaceCSS() {
    if ($('#kkV62WorkspaceCSS')) return;
    const style = document.createElement('style');
    style.id = 'kkV62WorkspaceCSS';
    style.textContent = `
      .kk-sidebar-controls{display:flex;gap:6px;align-items:center}
      .kk-sidebar-btn{border:1px solid var(--cc-border,#24404a);background:rgba(255,255,255,.04);color:var(--text-main,#eaf6f8);border-radius:11px;width:35px;height:35px;display:inline-grid;place-items:center;cursor:pointer;transition:transform .18s ease,background .18s ease,border-color .18s ease}
      .kk-sidebar-btn:hover{transform:translateY(-1px);background:rgba(56,189,248,.08);border-color:rgba(56,189,248,.3)}
      .kk-sidebar-btn.is-active{background:rgba(56,189,248,.12);border-color:rgba(56,189,248,.38)}
      .kk-sidebar-btn.is-locked{background:rgba(34,197,94,.10);border-color:rgba(34,197,94,.34)}
      .kk-sidebar-btn i{font-size:1.05rem}
      body.kk-sidebar-compact .app-container{grid-template-columns:76px minmax(0,1fr)!important}
      body.kk-sidebar-compact .sidebar{width:76px!important;padding-left:10px!important;padding-right:10px!important}
      body.kk-sidebar-compact .sidebar .logo{justify-content:center}
      body.kk-sidebar-compact .sidebar .logo h2,
      body.kk-sidebar-compact .sidebar .nav-section-label,
      body.kk-sidebar-compact .sidebar .nav-links li span,
      body.kk-sidebar-compact .sidebar .nav-links li b,
      body.kk-sidebar-compact .sidebar-footer{display:none!important}
      body.kk-sidebar-compact .sidebar .nav-links li{justify-content:center;padding:11px 7px}
      body.kk-sidebar-compact .sidebar .nav-links li i{width:auto;font-size:1.22rem}
      body.kk-sidebar-compact .sidebar .nav-links li:hover{transform:none}
      .top-header .kk-sidebar-controls{margin-right:1px}
      .tracker-focus-mode .kk-sidebar-btn[data-sidebar-action="compact"]{box-shadow:0 0 0 1px rgba(56,189,248,.12)}
      @media (max-width:760px){
        .kk-sidebar-controls{display:none!important}
        body.kk-sidebar-compact .sidebar{width:58px!important}
        body.kk-sidebar-compact .main-content{padding-left:64px!important}
      }

      /* Reliable native charts: no dependency on Chart.js for these two requested graphs. */
      .kk-native-graph{position:relative;width:100%;height:320px;min-height:260px}
      .kk-native-graph canvas{display:block;width:100%!important;height:100%!important}
      .kk-native-graph .kk-graph-empty{position:absolute;inset:0;display:grid;place-items:center;color:var(--text-muted,#78909a);font-size:.82rem;pointer-events:none}
      @media (max-width:760px){.kk-native-graph{height:260px;min-height:220px}}

      /* Study timers: keep both cards balanced and all three actions aligned. */
      #view-study-room .study-timer-grid{align-items:stretch}
      #view-study-room .timer-box{min-height:340px!important;box-sizing:border-box}
      #view-study-room .timer-box>h3{min-height:2.6em;display:flex;align-items:center;justify-content:center;text-align:center;margin:0}
      #view-study-room .timer-box>.modern-input{width:100%;max-width:360px;box-sizing:border-box}
      #view-study-room .timer-box .timer-text{min-height:58px;display:flex;align-items:center;justify-content:center;margin:12px 0 4px}
      #view-study-room .timer-actions{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px!important;width:100%;max-width:420px;margin-top:15px!important}
      #view-study-room .timer-actions button{width:100%;min-width:0;white-space:nowrap}
      #view-study-room .study-session-header{align-items:flex-start!important}
      #view-study-room .study-session-controls{justify-content:flex-end;flex-wrap:wrap}
      #view-study-room .study-session-controls #sessionTimeDisplay{margin:0;min-width:150px}
      #view-study-room .study-session-controls button{min-width:112px}
      #view-learn #learnRuleText,#view-learn #learnRuleExample{white-space:pre-wrap;overflow:auto;overflow-wrap:anywhere}
      #view-learn #learnRuleText{max-height:250px}
      #view-learn #learnRuleExample{max-height:430px}
      @media(max-width:900px){
        #view-study-room .study-timer-grid{grid-template-columns:1fr!important}
        #view-study-room .study-session-controls{justify-content:flex-end}
      }
      @media(max-width:620px){
        #view-study-room .study-session-controls{justify-content:stretch}
        #view-study-room .study-session-controls #sessionTimeDisplay{width:100%;min-width:0;text-align:center}
        #view-study-room .study-session-controls button{flex:1 1 120px}
        #view-study-room .timer-actions{max-width:none}
      }

      /* Keep the two requested analytics boxes from collapsing after tab switches. */
      #view-analytics .chart-box:has(#chartStudySubjects),
      #view-analytics .chart-box:has(#chartWasteTime){min-height:360px}
      #view-analytics .canvas-container:has(#chartStudySubjects),
      #view-analytics .canvas-container:has(#chartWasteTime){height:300px!important;min-height:300px!important}

      /* Consistency totals stay visibly numeric even in legacy/corrupt records. */
      .kk-xp-total-recovered{animation:kkXpPulse .38s ease}
      @keyframes kkXpPulse{0%{transform:scale(.98);opacity:.65}100%{transform:scale(1);opacity:1}}
    `;
    document.head.appendChild(style);
  }

  function readBool(key, fallback=false) {
    try { return localStorage.getItem(key) === '1' ? true : localStorage.getItem(key) === '0' ? false : fallback; }
    catch (_) { return fallback; }
  }
  function writeBool(key, value) { try { localStorage.setItem(key, value ? '1' : '0'); } catch (_) {} }

  function ensureSidebarControls() {
    const dock = $('#kkSidebarDock');
    if (!dock) return;
    const wrap = dock;
    wrap.id = 'kkSidebarControls';
    wrap.classList.add('kk-sidebar-controls', 'kk-sidebar-dock');
    const compactBtn = $('[data-sidebar-action="compact"]', wrap);
    const lockBtn = $('[data-sidebar-action="lock"]', wrap);
    const themeBtn = $('#v42ThemeBtn');
    if (themeBtn && themeBtn.parentElement !== wrap) wrap.appendChild(themeBtn);
    if (wrap.dataset.kkBound === '1') return;
    wrap.dataset.kkBound = '1';
    wrap.addEventListener('click', event => {
      const btn = event.target.closest('[data-sidebar-action]');
      if (!btn) return;
      const action = btn.dataset.sidebarAction;
      if (action === 'compact') {
        setCompactMode(!document.body.classList.contains('kk-sidebar-compact'), false);
      } else if (action === 'lock') {
        const next = !readBool(STORAGE.locked, false);
        writeBool(STORAGE.locked, next);
        syncSidebarControls();
        window.showToast?.(next ? 'Menu layout locked.' : 'Menu layout unlocked.');
      }
    });
  }

  function setCompactMode(compact, persist=true) {
    document.body.classList.toggle('kk-sidebar-compact', !!compact);
    if (persist) writeBool(STORAGE.compact, !!compact);
    syncSidebarControls();
  }

  function syncSidebarControls() {
    const compact = document.body.classList.contains('kk-sidebar-compact');
    const locked = readBool(STORAGE.locked, false);
    const compactBtn = $('[data-sidebar-action="compact"]');
    const lockBtn = $('[data-sidebar-action="lock"]');
    if (compactBtn) {
      compactBtn.classList.toggle('is-active', compact);
      compactBtn.setAttribute('aria-pressed', String(compact));
      compactBtn.title = compact ? 'Expand menu' : 'Compact menu';
      compactBtn.innerHTML = `<i class="ph ${compact ? 'ph-sidebar' : 'ph-sidebar-simple'}"></i>`;
    }
    if (lockBtn) {
      lockBtn.classList.toggle('is-locked', locked);
      lockBtn.setAttribute('aria-pressed', String(locked));
      lockBtn.title = locked ? 'Unlock menu layout' : 'Lock current menu layout';
      lockBtn.innerHTML = `<i class="ph ${locked ? 'ph-lock-key' : 'ph-lock-open'}"></i>`;
    }
  }

  function trackerAwareNavigation() {
    const locked = () => readBool(STORAGE.locked, false);
    const applyForTab = tab => {
      if (!tab) return;
      if (!locked()) {
        setCompactMode(tab === 'view-tracker', true);
      }
      document.body.classList.toggle('tracker-focus-mode', tab === 'view-tracker');
      $('#view-tracker')?.classList.toggle('tracker-focus-mode', tab === 'view-tracker');
    };

    document.addEventListener('click', event => {
      const trigger = event.target.closest?.('.nav-links li[data-tab], [data-tab].cc-link');
      if (!trigger?.dataset?.tab) return;
      applyForTab(trigger.dataset.tab);
    }, true);

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !locked()) setCompactMode(false, true);
    });

    const active = $('.nav-links li.active[data-tab]')?.dataset?.tab;
    const startupCompact = readBool(STORAGE.compact, active === 'view-tracker');
    setCompactMode(startupCompact, false);
    document.body.classList.toggle('tracker-focus-mode', active === 'view-tracker');
  }

  /* ---------- 2) XP NORMALIZATION / LEGACY RECOVERY ---------- */
  function normalizeXP() {
    const app = window.appData || (window.appData = {});
    if (!app.xp || typeof app.xp !== 'object' || Array.isArray(app.xp)) app.xp = {};
    if (!app.xp.daily || typeof app.xp.daily !== 'object' || Array.isArray(app.xp.daily)) app.xp.daily = {};
    if (!Array.isArray(app.xp.logs)) app.xp.logs = [];

    const stored = Math.max(0, Math.floor(Number(app.xp.total) || 0));
    const dailySum = Object.values(app.xp.daily).reduce((n, v) => n + Math.max(0, Math.floor(Number(v) || 0)), 0);
    const logSum = app.xp.logs.reduce((n, x) => n + Math.max(0, Math.floor(Number(x?.amount) || 0)), 0);

    // Legacy V41 stored total/daily, newer V57+ also stores explicit logs.
    // Preserve the largest trustworthy aggregate and backfill total when legacy total was zero.
    const recovered = Math.max(stored, dailySum, logSum);
    if (recovered !== stored) {
      app.xp.total = recovered;
      try { window.saveDataLocally?.(); } catch (_) {}
    } else {
      app.xp.total = stored;
    }
    return app.xp;
  }

  function renderXPRecovery() {
    const xp = normalizeXP();
    const total = Math.max(0, Math.floor(Number(xp.total) || 0));
    const daily = Math.max(0, Math.floor(Number(xp.daily?.[todayKey()]) || 0));
    const level = Math.floor(total / 100) + 1;
    const progress = total % 100;
    const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
    set('ccLevel', `LEVEL ${level}`);
    set('ccXP', `${total} XP`);
    set('ccTodayXP', `+${daily} today`);
    const bar = $('#ccXPBar'); if (bar) bar.style.width = `${progress}%`;
    set('ccXPNext', `${progress} / 100 to next level`);
    const card = $('.xp-card');
    if (card) card.classList.add('kk-xp-total-recovered');
    return { xp, total, daily, level, progress };
  }

  function bindXPSafety() {
    const xpCard = $('.xp-card');
    if (!xpCard || xpCard.dataset.kkV62Xp) return;
    xpCard.dataset.kkV62Xp = '1';

    // Run before the existing bubble listener opens the Consistency modal.
    xpCard.addEventListener('click', () => renderXPRecovery(), true);
    xpCard.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') renderXPRecovery();
    }, true);
  }

  /* ---------- 3) RELIABLE STUDY / WASTE GRAPHS ---------- */
  function prepareNativeCanvas(id) {
    const canvas = document.getElementById(id);
    if (!canvas) return null;
    const holder = canvas.closest('.canvas-container');
    if (!holder) return null;

    holder.classList.add('kk-native-graph');
    const existing = holder.querySelector('.kk-graph-empty');
    if (existing) existing.remove();

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const rect = holder.getBoundingClientRect();
    const width = Math.max(320, Math.round(rect.width || holder.clientWidth || 640));
    const height = Math.max(240, Math.round(rect.height || holder.clientHeight || 300));
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { canvas, holder, ctx, width, height };
  }

  function cssVar(name, fallback) {
    const value = getComputedStyle(document.body).getPropertyValue(name).trim();
    return value || fallback;
  }

  function roundRect(ctx, x, y, w, h, r) {
    const rr = Math.min(r, w/2, h/2);
    ctx.beginPath();
    ctx.moveTo(x+rr,y);
    ctx.arcTo(x+w,y,x+w,y+h,rr);
    ctx.arcTo(x+w,y+h,x,y+h,rr);
    ctx.arcTo(x,y+h,x,y,rr);
    ctx.arcTo(x,y,x+w,y,rr);
    ctx.closePath();
  }

  function drawBarChart(canvasId, labels, values, title, unit='hrs') {
    const prepared = prepareNativeCanvas(canvasId);
    if (!prepared) return;
    const {ctx, width, height, holder} = prepared;
    const text = cssVar('--text-main', '#dcecf2');
    const muted = cssVar('--text-muted', '#7d929b');
    const border = cssVar('--cc-border', '#29444e');
    const bar = cssVar('--cc-blue', '#38bdf8');

    ctx.clearRect(0,0,width,height);
    const pad = {l:48,r:18,t:20,b:52};
    const plotW = width-pad.l-pad.r, plotH = height-pad.t-pad.b;
    const safeValues = values.map(v => Math.max(0, Number(v)||0));
    const max = Math.max(1, ...safeValues);
    const count = Math.max(1, labels.length);
    const slot = plotW / count;
    const bw = Math.max(14, Math.min(54, slot * .58));

    ctx.font = '700 11px system-ui, sans-serif';
    ctx.fillStyle = muted;
    ctx.textAlign = 'right';
    for (let i=0;i<=4;i++) {
      const v=max*i/4, y=pad.t+plotH-(plotH*i/4);
      ctx.strokeStyle = border;
      ctx.globalAlpha = 0.55;
      ctx.beginPath(); ctx.moveTo(pad.l,y); ctx.lineTo(pad.l+plotW,y); ctx.stroke();
      ctx.globalAlpha=1;
      ctx.fillText(v.toFixed(1), pad.l-7, y+4);
    }

    labels.forEach((label, i) => {
      const value=safeValues[i]||0;
      const h=(value/max)*plotH;
      const x=pad.l + slot*i + (slot-bw)/2;
      const y=pad.t + plotH - h;
      ctx.fillStyle=bar;
      roundRect(ctx,x,y,bw,Math.max(3,h),Math.min(8,bw/4));
      ctx.fill();
      ctx.fillStyle=text;
      ctx.textAlign='center';
      ctx.font='700 10px system-ui, sans-serif';
      ctx.fillText(value.toFixed(2), x+bw/2, Math.max(pad.t+12,y-6));
      ctx.fillStyle=muted;
      ctx.font='600 10px system-ui, sans-serif';
      const short = String(label).length>12 ? String(label).slice(0,11)+'…' : String(label);
      ctx.fillText(short, x+bw/2, height-pad.b+22);
    });

    ctx.fillStyle=text;
    ctx.font='800 12px system-ui, sans-serif';
    ctx.textAlign='left';
    ctx.fillText(title, pad.l, 13);
    ctx.fillStyle=muted;
    ctx.font='600 10px system-ui, sans-serif';
    ctx.fillText(unit, pad.l+Math.min(160, title.length*7+8), 13);

    if (!safeValues.some(v => v > 0)) {
      const empty = document.createElement('div');
      empty.className='kk-graph-empty';
      empty.textContent='No data recorded yet';
      holder.appendChild(empty);
    }
  }

  function getStudyHours() {
    const totals = Object.fromEntries(SUBJECTS.map(s => [s,0]));
    const logs = Array.isArray(window.appData?.studyLogs) ? window.appData.studyLogs : [];
    logs.forEach(log => {
      if (String(log.type||'') !== 'Focus') return;
      const subject = String(log.subject||'').trim();
      if (!Object.prototype.hasOwnProperty.call(totals, subject)) return;
      totals[subject] += Math.max(0, Number(log.duration)||0);
    });
    return SUBJECTS.map(s => +(totals[s]/3600).toFixed(2));
  }

  function getWasteHours() {
    const dayMap = {};
    const logs = Array.isArray(window.appData?.studyLogs) ? window.appData.studyLogs : [];
    logs.forEach(log => {
      if (String(log.type||'') !== 'Waste') return;
      const d = String(log.date||'');
      if (!d) return;
      dayMap[d]=(dayMap[d]||0)+Math.max(0,Number(log.duration)||0);
    });
    const keys=Object.keys(dayMap).sort();
    const last=keys.slice(-14);
    return {
      labels:last.length ? last.map(d=>d.slice(5)) : ['No Data'],
      values:last.length ? last.map(d=>+(dayMap[d]/3600).toFixed(2)) : [0]
    };
  }

  function renderRequestedCharts() {
    const waste=getWasteHours();
    drawBarChart('chartWasteTime', waste.labels, waste.values, 'Time Waste by Day', 'hours');
  }

  function ensureWasteCard() {
    const studyCanvas=$('#chartStudySubjects');
    const wrapper=studyCanvas?.closest('.charts-wrapper');
    if (!wrapper || $('#chartWasteTimeBox')) return;

    const card=document.createElement('div');
    card.className='chart-box glass-panel hover-lift';
    card.id='chartWasteTimeBox';
    card.innerHTML='<h3>⏳ Time Waste by Day</h3><div class="canvas-container"><canvas id="chartWasteTime" aria-label="Time Waste by Day"></canvas></div>';
    const studyBox=studyCanvas.closest('.chart-box');
    (studyBox ? studyBox.insertAdjacentElement('afterend', card) : wrapper.appendChild(card));
  }

  function bindAnalyticsReliably() {
    ensureWasteCard();

    document.addEventListener('click', event => {
      const tab=event.target.closest?.('[data-tab="view-analytics"]');
      if (!tab) return;
      ensureWasteCard();
      setTimeout(renderRequestedCharts, 50);
    }, true);

    const analytics=$('#view-analytics');
    if (analytics && !analytics.dataset.kkV62Observed) {
      analytics.dataset.kkV62Observed='1';
      const observer=new MutationObserver(() => {
        if (analytics.classList.contains('active')) {
          ensureWasteCard();
          requestAnimationFrame(renderRequestedCharts);
        }
      });
      observer.observe(analytics,{attributes:true,attributeFilter:['class']});
    }

    window.addEventListener('resize', () => {
      if ($('#view-analytics')?.classList.contains('active')) renderRequestedCharts();
    }, {passive:true});
  }

  /* ---------- 4) MENTAL BRIEF REFRESH ---------- */
  function renderMentalBrief() {
    const card=$('.load-card');
    if (!card) return;
    let brief=$('#kkMentalBrief',card);
    if (!brief) {
      brief=document.createElement('div');
      brief.id='kkMentalBrief';
      brief.className='kk-mental-brief';
      card.appendChild(brief);
    }
    const logs=window.appData?.studyLogs||[];
    const key=todayKey();
    const focus=logs.filter(x=>x.date===key&&x.type==='Focus').reduce((n,x)=>n+(Number(x.duration)||0),0);
    const waste=logs.filter(x=>x.date===key&&x.type==='Waste').reduce((n,x)=>n+(Number(x.duration)||0),0);
    const sitting=Number(window.appData?.dailySessions?.[key])||0;
    const hms=sec=>{
      const h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60);
      return h?`${h}h ${m}m`:`${m}m`;
    };
    brief.innerHTML=`<span><b>Focus</b>${hms(focus)}</span><span><b>Waste</b>${hms(waste)}</span><span><b>Sitting</b>${hms(sitting)}</span>`;
  }

  function applyTrackerFit() {
    const view=$('#view-tracker');
    if (!view) return;
    view.querySelectorAll('.table-responsive').forEach(el=>el.classList.add('tracker-fit-table'));
  }

  function init() {
    injectWorkspaceCSS();
    ensureSidebarControls();
    syncSidebarControls();
    trackerAwareNavigation();
    bindXPSafety();
    renderXPRecovery();
    renderMentalBrief();
    ensureWasteCard();
    bindAnalyticsReliably();
    applyTrackerFit();

    window.addEventListener('kk:core-ready', () => {
      ensureSidebarControls();
      syncSidebarControls();
      bindXPSafety();
      renderXPRecovery();
      renderMentalBrief();
      ensureWasteCard();
      bindAnalyticsReliably();
      applyTrackerFit();
      setTimeout(renderRequestedCharts, 120);
    }, { once:true });

    if (!window.__kkV62LightRefresh) {
      window.__kkV62LightRefresh=true;
      setInterval(() => {
        renderXPRecovery();
        renderMentalBrief();
      }, 5000);
    }
  }

  window.kkWorkspaceSupportInit=init;
  init();
})();

/* ===== System integrations ===== */
/* System maintenance, Vault integrity, revision radar, weekly review and backup tools. */
(() => {
  'use strict';
  if (window.__kkSystemEnhancementsLoaded) return;
  window.__kkSystemEnhancementsLoaded = true;

  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const today = () => typeof window.getSafeDateStr === 'function' ? window.getSafeDateStr() : new Date().toISOString().slice(0,10);
  const escape = v => typeof window.escapeHTML === 'function' ? window.escapeHTML(v) : String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const save = reason => { try { window.saveDataLocally?.(reason); } catch (_) {} };
  const toast = (msg, err=false) => { try { window.showToast?.(msg, err); } catch (_) {} };

  function ensureAppData() {
    window.appData = window.appData && typeof window.appData === 'object' ? window.appData : {};
    const d = window.appData;
    d.tasks = d.tasks && typeof d.tasks === 'object' && !Array.isArray(d.tasks) ? d.tasks : {};
    d.dailySessions = d.dailySessions && typeof d.dailySessions === 'object' && !Array.isArray(d.dailySessions) ? d.dailySessions : {};
    d.attendance = d.attendance && typeof d.attendance === 'object' && !Array.isArray(d.attendance) ? d.attendance : {};
    d.vaultFolders = Array.isArray(d.vaultFolders) ? d.vaultFolders : [];
    d.vaultNotes = Array.isArray(d.vaultNotes) ? d.vaultNotes : [];
    d.vocabProgress = d.vocabProgress && typeof d.vocabProgress === 'object' ? d.vocabProgress : {};
    d.grammarProgress = d.grammarProgress && typeof d.grammarProgress === 'object' ? d.grammarProgress : {};
    d.studyLogs = Array.isArray(d.studyLogs) ? d.studyLogs : [];
    d.mocks = Array.isArray(d.mocks) ? d.mocks : [];
    d.quizHistory = Array.isArray(d.quizHistory) ? d.quizHistory : [];
    return d;
  }

  // ---------- Daily streak: use date-specific schedules for each day ----------
  function refreshTaskStreak() {
    try {
      const d = ensureAppData();
      let streak = 0;
      const curr = new Date();
      while (streak < 366) {
        const key = typeof window.getSafeDateStr === 'function' ? window.getSafeDateStr(curr) : curr.toISOString().slice(0,10);
        const state = d.tasks[key] || {};
        const plan = typeof window.generateDailySchedule === 'function' ? window.generateDailySchedule(key) : [];
        const taskIds = plan.filter(x => !x.isBreak).map(x => x.id);
        const completed = taskIds.filter(id => !!state[id]).length;
        if (!completed) break;
        streak += 1;
        curr.setDate(curr.getDate() - 1);
      }
      const el = $('#taskStreak');
      if (el) el.textContent = String(streak);
      return streak;
    } catch (e) { console.warn('Streak refresh:', e); return 0; }
  }

  // ---------- IndexedDB helpers for safe Vault cleanup ----------
  const DB_NAME = 'KKMonitoringFilesDB';
  const DB_VERSION = 1;
  const STORE = 'vaultFiles';
  function openDB() {
    return new Promise((resolve, reject) => {
      if (!('indexedDB' in window)) return reject(new Error('IndexedDB unavailable'));
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => { const db=req.result; if(!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE,{keyPath:'id'}); };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error || new Error('IndexedDB open failed'));
    });
  }
  async function allVaultRecords() {
    const db = await openDB();
    return new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readonly');
      const req=tx.objectStore(STORE).getAll();
      req.onsuccess=()=>resolve(req.result||[]);
      req.onerror=()=>reject(req.error||new Error('Vault read failed'));
    });
  }
  async function deleteVaultIds(ids) {
    const list=[...new Set((ids||[]).filter(Boolean))];
    if(!list.length) return;
    const db=await openDB();
    return new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readwrite'), store=tx.objectStore(STORE);
      list.forEach(id=>store.delete(id));
      tx.oncomplete=()=>resolve(true); tx.onerror=()=>reject(tx.error||new Error('Vault delete failed'));
    });
  }
  async function clearVaultStore() {
    const db=await openDB();
    return new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readwrite'); tx.objectStore(STORE).clear();
      tx.oncomplete=()=>resolve(true); tx.onerror=()=>reject(tx.error||new Error('Vault clear failed'));
    });
  }
  async function putVaultRecords(records) {
    if(!records?.length) return;
    const db=await openDB();
    return new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readwrite'), store=tx.objectStore(STORE);
      records.forEach(r=>store.put(r));
      tx.oncomplete=()=>resolve(true); tx.onerror=()=>reject(tx.error||new Error('Vault restore failed'));
    });
  }
  function descendantIds(rootId) {
    const d=ensureAppData(), ids=new Set([String(rootId)]), folders=d.vaultFolders||[];
    let changed=true;
    while(changed){ changed=false; for(const f of folders){ if(f.parentId!=null && ids.has(String(f.parentId)) && !ids.has(String(f.id))){ids.add(String(f.id));changed=true;} } }
    return ids;
  }
  function noteFileIds(notes) {
    const ids=[]; (notes||[]).forEach(n => (n.fileRefs||[]).forEach(ref => ref?.id && ids.push(ref.id)));
    return ids;
  }

  async function deleteFolderCascade(id, ask=true) {
    try {
      const d=ensureAppData();
      if(ask && !confirm('Delete this folder and all nested folders, notes and files?')) return false;
      const ids=descendantIds(id);
      const doomedNotes=d.vaultNotes.filter(n=>ids.has(String(n.folderId)));
      const doomedFiles=noteFileIds(doomedNotes);
      try { await deleteVaultIds(doomedFiles); } catch (e) { console.warn('Vault file cleanup:', e); }
      d.vaultFolders=d.vaultFolders.filter(f=>!ids.has(String(f.id)));
      d.vaultNotes=d.vaultNotes.filter(n=>!ids.has(String(n.folderId)));
      doomedNotes.forEach(n => (n.fileRefs||[]).forEach(ref=>window.vaultFileCache?.delete(ref.id)));
      save('delete');
      window.kkCloudReplaceNow?.();
      window.renderVaultFolders?.(null);
      window.renderDashboardStickyNotes?.();
      $('#folderModal')?.classList.remove('show');
      toast('Folder and all nested data deleted.');
      refreshStorageHealth();
      return true;
    } catch(e) { console.error('Folder delete:',e); toast('Could not delete folder completely.',true); return false; }
  }
  window.deleteFolder = id => deleteFolderCascade(id, true);

  const previousOpenFolderModal=window.openFolderModal;
  window.openFolderModal=function(id,name){
    window.__kkCurrentFolderId=Number(id);
    return typeof previousOpenFolderModal==='function' ? previousOpenFolderModal.apply(this,arguments) : undefined;
  };
  window.deleteCurrentFolder=async function(){
    const id=window.__kkCurrentFolderId;
    if(!id) return toast('Cannot delete the root view.',true);
    await deleteFolderCascade(id,true);
    window.__kkCurrentFolderId=null;
  };

  // ---------- Revision Radar ----------
  function dueItems(store) {
    const d=ensureAppData(), now=today(), src=d[store]||{};
    return Object.entries(src).filter(([,p])=>p&&p.nextReview&&p.nextReview<=now).map(([key,p])=>({key, nextReview:p.nextReview, status:p.status||'new'}));
  }
  function openRevision(type){
    const store=type==='vocab'?'vocabProgress':'grammarProgress';
    const due=dueItems(store);
    if(!due.length) return toast(`No ${type==='vocab'?'vocabulary':'grammar'} revision due today.`);
    document.querySelector('[data-tab="view-learn"]')?.click();
    const first=due[0].key;
    setTimeout(()=>{
      if(type==='vocab' && typeof vocabData!=='undefined'){
        const idx=vocabData.findIndex(v=>String(v.word)===String(first)); if(idx>=0) window.renderVocabWord?.(idx);
      } else if(type==='grammar' && typeof grammarData!=='undefined'){
        const idx=Number(first); if(Number.isFinite(idx)) window.renderGrammarRule?.(idx);
      }
    },40);
  }
  window.renderRevisionDue=function(){
    try{
      const dash=$('#view-dashboard'); if(!dash) return;
      let row=$('#v65RevisionRadar');
      if(!row){
        row=document.createElement('section'); row.id='v65RevisionRadar'; row.className='v65-smart-row';
        dash.appendChild(row);
      }
      const vocab=dueItems('vocabProgress'), grammar=dueItems('grammarProgress');
      const overdue=[...vocab,...grammar].filter(x=>x.nextReview<today()).length;
      const total=vocab.length+grammar.length;
      row.innerHTML=`<article class="cc-card v65-radar-card"><div class="cc-card-head"><div><div class="cc-label">REVISION RADAR</div><h3>${total} Due Today</h3></div><span class="v65-radar-count ${overdue?'hot':''}">${overdue} overdue</span></div><div class="v65-radar-list"><button type="button" data-revision="vocab"><b>Vocabulary</b><span>${vocab.length} due</span><em>Review →</em></button><button type="button" data-revision="grammar"><b>Grammar Rules</b><span>${grammar.length} due</span><em>Review →</em></button></div><div class="v65-radar-footer"><span>Next review intervals: 1d · 3d · 7d · 15d · 30d</span><button type="button" class="cc-link" data-revision="all">Open Learn Hub →</button></div></article>`;
      row.querySelectorAll('[data-revision]').forEach(btn=>btn.addEventListener('click',()=>{
        const type=btn.dataset.revision;
        if(type==='all') document.querySelector('[data-tab="view-learn"]')?.click();
        else openRevision(type);
      }));
    } catch(e) { console.warn('Revision radar:',e); }
  };

  // ---------- Weekly Review ----------
  function dateKeyOffset(n){ const d=new Date(); d.setDate(d.getDate()+n); return typeof window.getSafeDateStr==='function'?window.getSafeDateStr(d):d.toISOString().slice(0,10); }
  function weeklyStats(){
    const d=ensureAppData(), days=[]; let focus=0,waste=0,done=0,total=0;
    for(let i=-6;i<=0;i++){
      const key=dateKeyOffset(i), plan=typeof window.generateDailySchedule==='function'?window.generateDailySchedule(key):[], state=d.tasks[key]||{};
      const ids=plan.filter(x=>!x.isBreak).map(x=>x.id); total+=ids.length; done+=ids.filter(id=>state[id]).length;
      focus+=d.studyLogs.filter(x=>x.date===key&&x.type==='Focus').reduce((s,x)=>s+(Number(x.duration)||0),0);
      waste+=d.studyLogs.filter(x=>x.date===key&&x.type==='Waste').reduce((s,x)=>s+(Number(x.duration)||0),0);
      days.push(key);
    }
    const mocks=d.mocks.filter(m=>days.includes(m.date));
    const avg=mocks.length?mocks.reduce((s,m)=>{const max=Number(m.maxScore)||100; return s+(Number(m.totalMarks)||0)/max*100;},0)/mocks.length:0;
    return {focus,waste,done,total,completion:total?done/total*100:0,mocks:mocks.length,avgMock:avg};
  }
  function hms(sec){const h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60);return h?`${h}h ${m}m`:`${m}m`;}
  window.renderWeeklyReview=function(){
    try{
      const dash=$('#view-dashboard'); if(!dash) return;
      let row=$('#v65WeeklyReview'); if(!row){row=document.createElement('section');row.id='v65WeeklyReview';row.className='v65-smart-row';dash.appendChild(row);}
      const s=weeklyStats();
      row.innerHTML=`<article class="cc-card v65-week-card"><div class="cc-card-head"><div><div class="cc-label">WEEKLY REVIEW</div><h3>Last 7 days</h3></div><button type="button" class="cc-secondary small" id="v65RefreshWeek">Refresh</button></div><div class="v65-week-grid"><div><b>${hms(s.focus)}</b><span>Focus time</span></div><div><b>${hms(s.waste)}</b><span>Waste time</span></div><div><b>${Math.round(s.completion)}%</b><span>Plan completion</span></div><div><b>${s.mocks?Math.round(s.avgMock)+'%':'—'}</b><span>Mock average</span></div></div><div class="v65-week-note">${s.completion>=80?'Strong plan consistency. Protect the routine and keep quality high.':s.completion>=50?'Good base. Use the replanner when a block slips.':'The week has several unfinished plan blocks. Rebalance the next 2–3 days instead of cramming.'}</div></article>`;
      $('#v65RefreshWeek')?.addEventListener('click',()=>window.renderWeeklyReview());
    } catch(e){ console.warn('Weekly review:',e); }
  };

  // ---------- Smart Replanner ----------
  function round15(min){return Math.ceil(min/15)*15;}
  function minToClock(m){const h=Math.floor(m/60)%24,mm=String(m%60).padStart(2,'0'),ap=h>=12?'PM':'AM',hh=h%12||12;return `${hh}:${mm} ${ap}`;}
  function replanItems(){
    const d=ensureAppData(), key=today(), state=d.tasks[key]||{}, plan=typeof window.generateDailySchedule==='function'?window.generateDailySchedule(key):[];
    return plan.filter(x=>!x.isBreak&&!state[x.id]).map(x=>({id:x.id,title:x.title,duration:Number(x.duration)||30,sectionLabel:x.sectionLabel||'Flex'}));
  }
  window.openSmartReplanner=function(){
    $('#v65ReplanModal')?.remove();
    const modal=document.createElement('div'); modal.id='v65ReplanModal'; modal.className='cmd-modal';
    const remaining=replanItems(); let now=new Date(); let start=now.getHours()*60+now.getMinutes(); start=Math.max(8*60,round15(start)); const end=20*60+30;
    if(start>=end){ modal.innerHTML='<div class="cmd-modal-card"><button class="btn-secondary cmd-modal-close">Close</button><div class="cc-eyebrow">SMART REPLANNER</div><h2>No study window left today</h2><p class="v65-muted">Your planned window has ended. Keep the remaining blocks for tomorrow instead of forcing a late catch-up.</p></div>'; document.body.appendChild(modal); $('.cmd-modal-close',modal).onclick=()=>modal.remove(); return; }
    const rows=[]; let cursor=start; const scheduledIds=new Set();
    const breaks=[{start:13*60,end:15*60,title:'Lunch Break'},{start:18*60,end:18*60+30,title:'Walk Break'}];
    for(const item of remaining){
      if(cursor>=end) break;
      if(breaks.some(b=>cursor>=b.start&&cursor<b.end)){const b=breaks.find(b=>cursor>=b.start&&cursor<b.end);rows.push({break:true,time:`${minToClock(b.start)} – ${minToClock(b.end)}`,title:`🍱 ${b.title}`});cursor=b.end;}
      if(cursor>=end) break;
      const crossing=breaks.find(b=>cursor<b.start&&cursor+item.duration>b.start);
      if(crossing){rows.push({break:true,time:`${minToClock(crossing.start)} – ${minToClock(crossing.end)}`,title:`🍱 ${crossing.title}`});cursor=crossing.end;}
      if(cursor+item.duration>end) break;
      rows.push({id:item.id,time:`${minToClock(cursor)} – ${minToClock(cursor+item.duration)}`,title:item.title,duration:item.duration});
      scheduledIds.add(item.id); cursor+=item.duration;
    }
    const delayed=remaining.filter(item=>!scheduledIds.has(item.id));
    modal.innerHTML=`<div class="cmd-modal-card v65-replan-card"><button class="btn-secondary cmd-modal-close">Close</button><div class="cc-eyebrow">SMART REPLANNER</div><h2>Preview a better rest-of-day plan</h2><p class="v65-muted">${remaining.length} incomplete blocks detected. The preview keeps lunch/walk breaks and never splits a task across a break or the 8:30 PM cutoff.</p><div class="v65-replan-list">${rows.map(r=>`<div class="v65-replan-row ${r.break?'break':''}"><time>${escape(r.time)}</time><span>${escape(r.title)}</span>${!r.break?`<em>${r.duration}m</em>`:''}</div>`).join('')||'<div class="v65-empty">Nothing left to replan today.</div>'}</div>${delayed.length?`<div class="v65-replan-warning">${delayed.length} block(s) do not fit before 8:30 PM. Keep them in backlog instead of extending the window.</div>`:''}<div class="v65-replan-actions"><button type="button" class="cc-primary" id="v65ReplanOpen">Open Daily Plan</button><button type="button" class="cc-secondary cmd-modal-close">Done</button></div></div>`;
    document.body.appendChild(modal);
    $$('.cmd-modal-close',modal).forEach(b=>b.addEventListener('click',()=>modal.remove()));
    $('#v65ReplanOpen',modal).onclick=()=>{modal.remove();document.querySelector('[data-tab="view-daily-tasks"]')?.click();};
  };

  // Add Smart Replan CTA to the Daily Plan heading exactly once.
  function injectReplanButton(){
    const header=$('#view-daily-tasks .streak-badge'); if(!header || $('#v65ReplanBtn')) return;
    const btn=document.createElement('button'); btn.id='v65ReplanBtn'; btn.type='button'; btn.className='cc-secondary'; btn.innerHTML='↻ Replan Day'; btn.style.marginLeft='8px'; btn.onclick=()=>window.openSmartReplanner();
    header.parentElement?.appendChild(btn);
  }

  // ---------- Backup / Restore: replace the actual local vault atomically ----------
  function normalizeImportedData(incoming){
    const d=JSON.parse(JSON.stringify(incoming||{}));
    d.tasks=d.tasks&&typeof d.tasks==='object'&&!Array.isArray(d.tasks)?d.tasks:{};
    d.dailySessions=d.dailySessions&&typeof d.dailySessions==='object'&&!Array.isArray(d.dailySessions)?d.dailySessions:{};
    d.attendance=d.attendance&&typeof d.attendance==='object'&&!Array.isArray(d.attendance)?d.attendance:{};
    d.vaultFolders=Array.isArray(d.vaultFolders)?d.vaultFolders:[];
    d.vaultNotes=Array.isArray(d.vaultNotes)?d.vaultNotes:[];
    d.mocks=Array.isArray(d.mocks)?d.mocks:[]; d.studyLogs=Array.isArray(d.studyLogs)?d.studyLogs:[]; d.quizHistory=Array.isArray(d.quizHistory)?d.quizHistory:[];
    return d;
  }
  function dataUrlToBlob(dataUrl){
    const [meta,raw]=String(dataUrl||'').split(','); if(!raw) throw new Error('Invalid data URL');
    const mime=(meta.match(/data:([^;]+)/i)||[])[1]||'application/octet-stream'; const bin=atob(raw), bytes=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) bytes[i]=bin.charCodeAt(i); return new Blob([bytes],{type:mime});
  }
  async function blobToDataUrl(blob){
    return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(reader.error||new Error('File read failed'));reader.readAsDataURL(blob);});
  }
  window.exportFullBackup=async function(){
    try{
      ensureAppData(); await window.ensureVaultStorageReady?.();
      const refs=[...new Set(noteFileIds(window.appData.vaultNotes))], records=await allVaultRecords(), byId=new Map(records.map(r=>[r.id,r]));
      const vaultFiles=[]; for(const id of refs){const rec=byId.get(id);if(rec?.blob){vaultFiles.push({id:rec.id,type:rec.type||rec.blob.type,name:rec.name||'Vault File',size:rec.size||rec.blob.size,createdAt:rec.createdAt||Date.now(),data:await blobToDataUrl(rec.blob)});}}
      const payload={app:'KK Monitoring',version:'V68',exportedAt:new Date().toISOString(),data:window.appData,vaultFiles};
      const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');
      a.href=url;a.download=`KK_Monitoring_Full_Backup_${today()}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1200);
      toast(`Full backup exported (${vaultFiles.length} Vault file(s)).`);
    }catch(e){console.error('Backup export:',e);toast('Backup export failed.',true);}
  };

  window.importFullBackup=async function(input){
    const file=input?.files?.[0]; if(!file) return;
    try{
      const parsed=JSON.parse(await file.text()); const incoming=normalizeImportedData(parsed?.data||parsed); if(!Array.isArray(incoming.mocks)) throw new Error('Invalid backup');
      if(!confirm('Import this backup? Current local study data and Vault files will be replaced.')) return;
      const files=[]; for(const f of (Array.isArray(parsed?.vaultFiles)?parsed.vaultFiles:[])){ if(!f?.id||!f?.data) continue; const blob=dataUrlToBlob(f.data); files.push({id:f.id,blob,type:f.type||blob.type,name:f.name||'Vault File',size:blob.size,createdAt:Number(f.createdAt)||Date.now()}); }
      await clearVaultStore(); await putVaultRecords(files);
      window.appData=incoming; save();
      await window.ensureVaultStorageReady?.();
      if(window.vaultStorageReady) await window.vaultStorageReady;
      toast(`Backup imported successfully (${files.length} vault file(s)). Reloading…`);
      setTimeout(()=>location.reload(),600);
    } catch(e){ console.error('Backup import:',e); toast('Invalid or unreadable backup file.',true); }
    finally { if(input) input.value=''; }
  };

  // ---------- Storage Health ----------
  async function refreshStorageHealth(){
    const status=$('#v65StorageHealth'); if(!status) return;
    try{
      const d=ensureAppData(), records=await allVaultRecords();
      const refs=new Set(noteFileIds(d.vaultNotes)); const orphan=records.filter(r=>!refs.has(r.id));
      const missingRefs=[...refs].filter(id=>!records.some(r=>r.id===id));
      status.innerHTML=`<div class="v65-health-grid"><div><b>${d.vaultNotes.length}</b><span>Vault notes</span></div><div><b>${records.length}</b><span>IndexedDB files</span></div><div><b>${orphan.length}</b><span>Orphan files</span></div><div><b>${missingRefs.length}</b><span>Broken refs</span></div></div><div class="v65-health-actions"><button type="button" class="cc-secondary" id="v65CleanOrphans">Clean Orphans</button><button type="button" class="cc-secondary" id="v65RescanHealth">Rescan</button></div>`;
      $('#v65CleanOrphans')?.addEventListener('click', async()=>{ try{await deleteVaultIds(orphan.map(x=>x.id)); toast(orphan.length?`${orphan.length} orphan file(s) removed.`:'No orphan files found.'); await refreshStorageHealth();}catch(e){toast('Could not clean orphan files.',true);} });
      $('#v65RescanHealth')?.addEventListener('click',()=>refreshStorageHealth());
    } catch(e){ status.textContent='Vault health information unavailable.'; }
  }

  function injectHealthCard(){
    const grid=$('#view-settings .settings-grid'); if(!grid || $('#v65HealthCard')) return;
    const card=document.createElement('section'); card.id='v65HealthCard'; card.className='glass-panel settings-card';
    card.innerHTML='<h3>🩺 Data Health</h3><p>Check for unused Vault blobs or broken file references after imports, restores and migrations.</p><div id="v65StorageHealth" class="settings-status">Scanning…</div>';
    grid.appendChild(card); refreshStorageHealth();
  }

  // ---------- Final Dashboard layout / UX ----------
  function renderDashboardEnhancements(){
    injectReplanButton();
    window.renderRevisionDue?.();
    window.renderWeeklyReview?.();
    injectHealthCard();
    refreshTaskStreak();
  }

  // ---------- Weekly Review shortcut ----------
  function injectWeeklyShortcut(){
    const welcome=$('#view-dashboard .cc-actions'); if(!welcome || $('#v65WeekBtn')) return;
    const btn=document.createElement('button'); btn.id='v65WeekBtn'; btn.type='button'; btn.className='cc-secondary'; btn.textContent='Weekly Review'; btn.onclick=()=>window.renderWeeklyReview?.();
    welcome.appendChild(btn);
  }

  // Keep final day-window UI consistent with Daily Plan 08:00–20:30.
  function normalizeDayWindow(){
    const card=$('.cmd-day-card'), bar=$('#commandDayBar'), clock=$('#commandDayClock'), status=$('#commandDayStatus'), pct=$('#commandDayPercent');
    if(!card || !bar || !clock || !status || !pct) return;
    const meta=card.querySelector('.cmd-day-meta'); if(meta){const spans=meta.querySelectorAll('span');if(spans[0])spans[0].textContent='8:00 AM';if(spans[2])spans[2].textContent='8:30 PM';}
    window.kkUpdateDayWindow=function(){
      const now=new Date(), start=new Date(now), end=new Date(now); start.setHours(8,0,0,0); end.setHours(20,30,0,0);
      const total=end-start; let remaining,label;
      if(now<start){remaining=start-now;label='Your planned study window starts at 8:00 AM.';} else if(now>=end){remaining=0;label='Today’s planned study window is complete. Plan tomorrow calmly.';} else {remaining=end-now;label='Time left for today’s planned study.';}
      const percent=Math.max(0,Math.min(100,Math.round(remaining/total*100))); clock.textContent=new Date(remaining).toISOString().slice(11,19); status.textContent=label; pct.textContent=`${percent}% left`; bar.style.width=`${percent}%`;
    };
    window.kkUpdateDayWindow();
  }

  // ---------- Small accessibility/wording cleanup ----------
  function finalizeCopy(){
    const unlock=$('#unlockBtn'); if(unlock) unlock.textContent='Unlock App';
  }

  function boot(){
    ensureAppData();
    setTimeout(()=>{
      try{
        normalizeDayWindow();
        injectWeeklyShortcut();
        renderDashboardEnhancements();
        finalizeCopy();
        window.renderRevisionDue?.();
        window.renderWeeklyReview?.();
        window.renderProgressWidgets?.();
      }catch(e){console.warn('System boot:',e);}
    },80);
    window.addEventListener('kk:data-saved',()=>{refreshTaskStreak();window.renderRevisionDue?.();window.renderWeeklyReview?.();});
    window.addEventListener('kk:core-ready',()=>setTimeout(()=>{normalizeDayWindow();renderDashboardEnhancements();},50),{once:true});
    if(!window.__kkStorageHealthTimer){window.__kkStorageHealthTimer=true;setTimeout(refreshStorageHealth,500);}
  }
  boot();
})();

/* ===== Mock Tracker ===== */
/* Mock Tracker — full/sectional entry, exam limits, tracker rows and analysis. */
(() => {
  'use strict';

  const PATTERNS = window.KK_EXAM_PATTERNS || {};
  const $ = id => document.getElementById(id);
  const SUBJECTS = {
    english: { prefix: 'e', title: 'English', rightId: 'engR', wrongId: 'engW', cardId: 'card-english', maxId: 'engMax', attId: 'engAtt', accId: 'engAcc', marksId: 'engMarks', color: 'green' },
    quant: { prefix: 'q', title: 'Quantitative Aptitude', rightId: 'quaR', wrongId: 'quaW', cardId: 'card-quant', maxId: 'quaMax', attId: 'quaAtt', accId: 'quaAcc', marksId: 'quaMarks', color: 'blue' },
    reasoning: { prefix: 'r', title: 'Reasoning Ability', rightId: 'reaR', wrongId: 'reaW', cardId: 'card-reasoning', maxId: 'reaMax', attId: 'reaAtt', accId: 'reaAcc', marksId: 'reaMarks', color: 'orange' }
  };
  const KEYS = Object.keys(SUBJECTS);
  window.currentMockType = 'full';

  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const number = value => Number.isFinite(Number(value)) ? Number(value) : 0;
  const round2 = value => Math.round((number(value) + Number.EPSILON) * 100) / 100;
  const percent = (value, max) => max > 0 ? (value / max) * 100 : 0;
  const format = value => round2(value).toFixed(2);
  const todayLocal = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };
  const getPattern = exam => PATTERNS[exam] || PATTERNS['SBI PO'] || { hasEng: true, eng: 30, qua: 35, rea: 35, max: 100, quaName: 'Quantitative Aptitude' };

  function ensureMockData() {
    if (!window.appData || typeof window.appData !== 'object' || Array.isArray(window.appData)) window.appData = {};
    if (!Array.isArray(window.appData.mocks)) window.appData.mocks = [];
    const occurrences = new Map(); let assigned = false;
    for (const mock of window.appData.mocks) {
      if (!mock || typeof mock !== 'object') continue;
      const signature = window.kkStableMockSignature?.(mock) || [mock.date,mock.examType,mock.type,mock.sub,mock.platform,mock.totalMarks].join('|');
      const occurrence = occurrences.get(signature) || 0; occurrences.set(signature, occurrence + 1);
      if (mock.id === undefined || mock.id === null || String(mock.id) === '') {
        mock.id = window.kkStableMockId?.(mock, occurrence) || `legacy-${Date.now()}-${occurrence}`;
        assigned = true;
      }
    }
    if (assigned) window.saveDataLocally?.('mock-id-repair');
    return window.appData.mocks;
  }

  function activeSubjectsFor(exam, type, sub) {
    const p = getPattern(exam);
    if (type === 'sectional') {
      if (!SUBJECTS[sub] || (sub === 'english' && !p.hasEng)) return [p.hasEng ? 'english' : 'quant'];
      return [sub];
    }
    return (p.hasEng ? ['english'] : []).concat(['quant', 'reasoning']);
  }

  function subjectMax(exam, key) {
    const p = getPattern(exam);
    return key === 'english' ? p.eng : key === 'quant' ? p.qua : p.rea;
  }

  function maxForMock(mock) {
    const p = getPattern(mock.examType);
    if ((mock.type || 'full') === 'sectional') {
      const section = activeSubjectsFor(mock.examType, 'sectional', mock.sub)[0];
      return subjectMax(mock.examType, section);
    }
    return p.max;
  }

  function subjectValues(mock, key) {
    const cfg = SUBJECTS[key];
    const right = Math.max(0, number(mock[`${cfg.prefix}R`]));
    const wrong = Math.max(0, number(mock[`${cfg.prefix}W`]));
    const attempted = Math.max(0, number(mock[`${cfg.prefix}Att`]) || right + wrong);
    const max = subjectMax(mock.examType, key);
    const rawMarks = mock[`${cfg.prefix}Marks`];
    const marks = rawMarks !== undefined && rawMarks !== null && rawMarks !== '' && rawMarks !== '-'
      ? number(rawMarks)
      : right - wrong * 0.25;
    return {
      key, title: key === 'quant' ? (getPattern(mock.examType).quaName || cfg.title) : cfg.title,
      right, wrong, attempted, unanswered: Math.max(0, max - attempted), max,
      marks, accuracy: attempted ? (right / attempted) * 100 : 0,
      coverage: max ? (attempted / max) * 100 : 0
    };
  }

  function metricsFor(mock) {
    const type = mock.type || 'full';
    const active = activeSubjectsFor(mock.examType, type, mock.sub);
    const subjects = active.map(key => subjectValues(mock, key));
    const attempted = subjects.reduce((sum, item) => sum + item.attempted, 0);
    const correct = subjects.reduce((sum, item) => sum + item.right, 0);
    const wrong = subjects.reduce((sum, item) => sum + item.wrong, 0);
    const marks = subjects.reduce((sum, item) => sum + item.marks, 0);
    const max = maxForMock(mock);
    const hasSavedTotal = mock.totalMarks !== undefined && mock.totalMarks !== null && mock.totalMarks !== '';
    const score = hasSavedTotal && Number.isFinite(Number(mock.totalMarks)) ? number(mock.totalMarks) : marks;
    return {
      subjects, attempted, correct, wrong, unanswered: Math.max(0, max - attempted),
      marks: score, max, scorePct: percent(score, max), accuracy: attempted ? percent(correct, attempted) : 0,
      coverage: max ? percent(attempted, max) : 0
    };
  }

  // One-time repair for older saved records. Only exam maximums and invalid RRB English
  // fields are normalized; historical scores and other user-entered values are preserved.
  function normalizeLegacyMocks() {
    const mocks = ensureMockData();
    let changed = false;
    for (const mock of mocks) {
      if (!mock || typeof mock !== 'object') continue;
      if (!mock.type) { mock.type = 'full'; changed = true; }
      const p = getPattern(mock.examType);
      const properMax = maxForMock(mock);
      if (number(mock.maxScore) !== properMax) { mock.maxScore = properMax; changed = true; }
      if (!p.hasEng) {
        if (number(mock.eR) || number(mock.eW) || number(mock.eAtt) || (mock.eMarks !== '-' && number(mock.eMarks))) {
          mock.eR = 0; mock.eW = 0; mock.eAtt = 0; mock.eMarks = '-'; changed = true;
        }
      }
      const sub = mock.type === 'sectional' ? activeSubjectsFor(mock.examType, 'sectional', mock.sub)[0] : null;
      if (mock.type === 'sectional' && sub !== mock.sub) { mock.sub = sub; changed = true; }
      const active = activeSubjectsFor(mock.examType, mock.type, mock.sub);
      if (!Array.isArray(mock.activeSubjects) || mock.activeSubjects.join('|') !== active.join('|')) {
        mock.activeSubjects = active; changed = true;
      }
      // RRB exams have no English section. Rebuild legacy totals from the active
      // Quant/Reasoning fields so old hidden-English marks cannot inflate an /80 score.
      if (!p.hasEng) {
        const aggregate = active.reduce((sum, key) => {
          const cfg = SUBJECTS[key];
          const right = Math.max(0, number(mock[`${cfg.prefix}R`]));
          const wrong = Math.max(0, number(mock[`${cfg.prefix}W`]));
          return { attempted: sum.attempted + right + wrong, correct: sum.correct + right, marks: sum.marks + right - wrong * 0.25 };
        }, { attempted: 0, correct: 0, marks: 0 });
        const marks = round2(aggregate.marks);
        const accuracy = aggregate.attempted ? ((aggregate.correct / aggregate.attempted) * 100).toFixed(1) : '0.0';
        if (number(mock.totalAtt) !== aggregate.attempted) { mock.totalAtt = aggregate.attempted; changed = true; }
        if (String(mock.totalAcc ?? '') !== accuracy) { mock.totalAcc = accuracy; changed = true; }
        if (round2(mock.totalMarks) !== marks) { mock.totalMarks = marks; changed = true; }
      }
    }
    if (changed && typeof window.saveDataLocally === 'function') window.saveDataLocally('mock-normalize');
  }

  function showActiveCard(key, visible) {
    const el = $(SUBJECTS[key].cardId);
    if (el) el.style.display = visible ? 'flex' : 'none';
    const r = $(SUBJECTS[key].rightId), w = $(SUBJECTS[key].wrongId);
    if (r) r.disabled = !visible;
    if (w) w.disabled = !visible;
  }

  window.updateMockInputLimits = function () {
    const exam = $('mockExamType')?.value || 'SBI PO';
    const p = getPattern(exam);
    const secSelect = $('secSubject');
    const englishOption = secSelect ? [...secSelect.options].find(option => option.value === 'english') : null;
    if (englishOption) {
      englishOption.disabled = !p.hasEng;
      englishOption.hidden = !p.hasEng;
    }
    if (!p.hasEng) {
      if (secSelect?.value === 'english') secSelect.value = 'quant';
      // Clear English entries when an exam without English is selected. This prevents
      // stale hidden values from unexpectedly returning if the exam is switched back.
      for (const id of ['engR', 'engW']) if ($(id)) $(id).value = '';
    }

    for (const key of KEYS) {
      const cfg = SUBJECTS[key];
      const max = subjectMax(exam, key);
      for (const id of [cfg.rightId, cfg.wrongId]) {
        const input = $(id);
        if (!input) continue;
        input.min = '0'; input.max = String(max); input.step = '1';
      }
    }
  };

  window.renderMockSubjectsVisibility = function () {
    const examEl = $('mockExamType');
    if (!examEl) return;
    const exam = examEl.value || 'SBI PO';
    const p = getPattern(exam);
    if (!p.hasEng) {
      if ($('secSubject')?.value === 'english') $('secSubject').value = 'quant';
      for (const id of ['engR', 'engW']) if ($(id)) $(id).value = '';
    }
    const type = window.currentMockType || 'full';
    const sectional = type === 'sectional';
    const selected = $('secSubject')?.value || 'quant';
    const active = activeSubjectsFor(exam, type, selected);

    $('sectionalSelector')?.classList.toggle('hidden', !sectional);
    for (const key of KEYS) showActiveCard(key, active.includes(key));

    if ($('engMax')) $('engMax').textContent = String(p.eng);
    if ($('quaMax')) $('quaMax').textContent = String(p.qua);
    if ($('reaMax')) $('reaMax').textContent = String(p.rea);
    if ($('quaName')) $('quaName').textContent = p.quaName || 'Quantitative Aptitude';
    if ($('grandMax')) $('grandMax').textContent = String(sectional ? subjectMax(exam, active[0]) : p.max);

    window.updateMockInputLimits();
    window.calculateLive();
  };
  window.updateMockUI = function () {
    normalizeLegacyMocks();
    window.renderMockSubjectsVisibility();
    window.renderTracker();
    window.updateDashboardKPIs();
    window.renderLifetimeMockSummary?.();
  };
  window.toggleSections = () => window.renderMockSubjectsVisibility();

  window.setMockType = function (type) {
    window.currentMockType = type === 'sectional' ? 'sectional' : 'full';
    const full = $('btnFull'), sectional = $('btnSec');
    if (full) { full.classList.toggle('btn-primary', window.currentMockType === 'full'); full.classList.toggle('btn-secondary', window.currentMockType !== 'full'); full.setAttribute('aria-pressed', String(window.currentMockType === 'full')); }
    if (sectional) { sectional.classList.toggle('btn-primary', window.currentMockType === 'sectional'); sectional.classList.toggle('btn-secondary', window.currentMockType !== 'sectional'); sectional.setAttribute('aria-pressed', String(window.currentMockType === 'sectional')); }
    window.renderMockSubjectsVisibility();
  };

  window.calculateLive = function () {
    const exam = $('mockExamType')?.value || 'SBI PO';
    const type = window.currentMockType || 'full';
    const sub = $('secSubject')?.value || 'quant';
    const active = activeSubjectsFor(exam, type, sub);
    const total = { attempted: 0, correct: 0, marks: 0 };
    for (const key of KEYS) {
      const cfg = SUBJECTS[key];
      const visible = active.includes(key);
      const right = visible ? Math.max(0, number($(cfg.rightId)?.value)) : 0;
      const wrong = visible ? Math.max(0, number($(cfg.wrongId)?.value)) : 0;
      const attempted = right + wrong;
      const marks = right - wrong * 0.25;
      const accuracy = attempted ? (right / attempted) * 100 : 0;
      const max = subjectMax(exam, key);
      const stats = [
        [cfg.attId, String(attempted)], [cfg.accId, `${accuracy.toFixed(1)}%`], [cfg.marksId, marks.toFixed(2)]
      ];
      for (const [id, value] of stats) if ($(id)) $(id).textContent = value;
      const rightInput = $(cfg.rightId), wrongInput = $(cfg.wrongId);
      const invalid = visible && (right + wrong > max || !Number.isInteger(right) || !Number.isInteger(wrong));
      [rightInput, wrongInput].forEach(input => { if (input) input.setAttribute('aria-invalid', String(invalid)); });
      if (visible) {
        total.attempted += attempted; total.correct += right; total.marks += marks;
      }
    }
    const accuracy = total.attempted ? (total.correct / total.attempted) * 100 : 0;
    if ($('totAtt')) $('totAtt').textContent = String(total.attempted);
    if ($('totAcc')) $('totAcc').textContent = `${accuracy.toFixed(1)}%`;
    if ($('totMarks')) $('totMarks').textContent = total.marks.toFixed(2);
  };

  function switchToMockForm() {
    document.querySelectorAll('.nav-links li[data-tab]').forEach(item => item.classList.toggle('active', item.dataset.tab === 'view-add-data'));
    document.querySelectorAll('.view-section').forEach(section => section.classList.toggle('active', section.id === 'view-add-data'));
    $('mockDate')?.focus({ preventScroll: true });
    window.scrollTo?.({ top: 0, behavior: 'smooth' });
  }

  window.editMock = function (id) {
    normalizeLegacyMocks();
    const mock = ensureMockData().find(item => String(item.id) === String(id));
    if (!mock) return;
    const exam = $('mockExamType');
    if (exam) exam.value = mock.examType || 'SBI PO';
    if ($('mockDate')) $('mockDate').value = mock.date || todayLocal();
    if ($('mockPlatform')) $('mockPlatform').value = mock.platform === '-' ? '' : (mock.platform || '');
    if ($('mockPercentile')) $('mockPercentile').value = mock.percentile === '-' ? '' : (mock.percentile ?? '');
    if ($('mockTarget')) $('mockTarget').value = mock.target || '';
    const type = mock.type === 'sectional' ? 'sectional' : 'full';
    const p = getPattern(mock.examType);
    if ($('secSubject')) $('secSubject').value = mock.sub === 'english' && !p.hasEng ? 'quant' : (mock.sub || 'quant');
    for (const [key, cfg] of Object.entries(SUBJECTS)) {
      if ($(cfg.rightId)) $(cfg.rightId).value = mock[`${cfg.prefix}R`] ?? 0;
      if ($(cfg.wrongId)) $(cfg.wrongId).value = mock[`${cfg.prefix}W`] ?? 0;
    }
    if ($('editingMockId')) $('editingMockId').value = mock.id;
    if ($('mockFormTitle')) $('mockFormTitle').textContent = 'Edit Mock Test Performance';
    window.setMockType(type);
    switchToMockForm();
  };

  function resetMockForm() {
    $('mockForm')?.reset();
    if ($('editingMockId')) $('editingMockId').value = '';
    if ($('mockDate')) $('mockDate').value = todayLocal();
    if ($('mockFormTitle')) $('mockFormTitle').textContent = 'Add Mock Test Performance';
    window.currentMockType = 'full';
    if ($('mockExamType')) $('mockExamType').value = 'SBI PO';
    if ($('secSubject')) $('secSubject').value = 'quant';
    window.setMockType('full');
  }

  window.handleMockSubmit = function (event) {
    if (event?.preventDefault) event.preventDefault();
    try {
      ensureMockData();
      const exam = $('mockExamType')?.value || 'SBI PO';
      const p = getPattern(exam);
      const type = window.currentMockType === 'sectional' ? 'sectional' : 'full';
      const selectedSub = $('secSubject')?.value || 'quant';
      const active = activeSubjectsFor(exam, type, selectedSub);
      const date = $('mockDate')?.value || todayLocal();
      const platform = $('mockPlatform')?.value.trim() || 'Self practice';
      const targetRaw = $('mockTarget')?.value;
      const target = targetRaw === '' || targetRaw === undefined ? 0 : Number(targetRaw);
      const percentileRaw = $('mockPercentile')?.value;
      const percentile = percentileRaw === '' || percentileRaw === undefined ? '-' : Number(percentileRaw);

      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) { window.showToast?.('Please select a valid mock date.', true); return false; }
      const maxScore = active.reduce((sum, key) => sum + subjectMax(exam, key), 0);
      if (!Number.isFinite(target) || target < 0 || target > maxScore) { window.showToast?.(`Target must be between 0 and ${maxScore}.`, true); $('mockTarget')?.focus(); return false; }
      if (percentile !== '-' && (!Number.isFinite(percentile) || percentile < 0 || percentile > 100)) { window.showToast?.('Percentile must be between 0 and 100.', true); $('mockPercentile')?.focus(); return false; }

      const values = {};
      for (const key of active) {
        const cfg = SUBJECTS[key];
        const right = number($(cfg.rightId)?.value);
        const wrong = number($(cfg.wrongId)?.value);
        const max = subjectMax(exam, key);
        if (!Number.isInteger(right) || !Number.isInteger(wrong) || right < 0 || wrong < 0) {
          window.showToast?.(`${cfg.title}: enter whole numbers greater than or equal to zero.`, true); return false;
        }
        if (right + wrong > max) {
          window.showToast?.(`${cfg.title}: Right + Wrong cannot exceed ${max}.`, true);
          $(cfg.wrongId)?.focus(); return false;
        }
        values[key] = { right, wrong, attempted: right + wrong, marks: round2(right - wrong * 0.25) };
      }

      const e = values.english || { right: 0, wrong: 0, attempted: 0, marks: 0 };
      const q = values.quant || { right: 0, wrong: 0, attempted: 0, marks: 0 };
      const r = values.reasoning || { right: 0, wrong: 0, attempted: 0, marks: 0 };
      const totalAtt = e.attempted + q.attempted + r.attempted;
      const totalRight = e.right + q.right + r.right;
      const totalMarks = round2(e.marks + q.marks + r.marks);
      const editingId = $('editingMockId')?.value || '';
      const previous = editingId ? ensureMockData().find(item => String(item.id) === String(editingId)) : null;
      const id = editingId ? previous?.id : Date.now() * 100 + Math.floor(Math.random() * 100);
      const mock = {
        id, schemaVersion: 2, date, examType: exam, platform, percentile,
        type, sub: type === 'sectional' ? active[0] : 'All', target,
        eAtt: e.attempted, eR: e.right, eW: e.wrong, eMarks: active.includes('english') ? e.marks.toFixed(2) : '-',
        qAtt: q.attempted, qR: q.right, qW: q.wrong, qMarks: q.marks.toFixed(2),
        rAtt: r.attempted, rR: r.right, rW: r.wrong, rMarks: r.marks.toFixed(2),
        totalAtt, totalAcc: totalAtt ? ((totalRight / totalAtt) * 100).toFixed(1) : '0.0',
        totalMarks, maxScore, activeSubjects: active,
        createdAt: previous?.createdAt || Date.now(), updatedAt: Date.now()
      };

      const all = ensureMockData();
      if (editingId) {
        const index = all.findIndex(item => String(item.id) === String(editingId));
        if (index < 0) { window.showToast?.('This mock no longer exists. Refresh the tracker and try again.', true); return false; }
        all[index] = mock;
      } else {
        all.unshift(mock);
      }

      window.saveDataLocally?.('mock-save');
      resetMockForm();
      window.updateDashboardKPIs();
      window.renderTracker();
      window.renderLifetimeMockSummary?.();
      window.renderCharts?.();
      window.showSmartCoach(mock);
      window.showToast?.(editingId ? 'Mock updated successfully.' : 'Mock saved successfully.');
    } catch (error) {
      console.error('Mock save failed:', error);
      window.showToast?.('Could not save this mock. Please check the entries and try again.', true);
    }
    return false;
  };
  window.saveMockData = window.handleMockSubmit;

  function metricHtml(label, value, tone = '') {
    return `<div class="mock-analysis-metric"><span>${esc(label)}</span><strong class="${tone}">${esc(value)}</strong></div>`;
  }

  function comparisonHistory(mock) {
    const all = ensureMockData().filter(item => item.examType === mock.examType && (item.type || 'full') === (mock.type || 'full') && ((mock.type || 'full') !== 'sectional' || item.sub === mock.sub));
    const key = item => `${item.date || ''}|${number(item.createdAt || item.id)}`;
    all.sort((a, b) => key(a).localeCompare(key(b)));
    const index = all.findIndex(item => String(item.id) === String(mock.id));
    const earlier = index > 0 ? all.slice(0, index) : [];
    return { previous: earlier.at(-1) || null, earlier: earlier.slice(-5), total: all.length };
  }

  function trendSvg(history, current) {
    const points = [...history, current];
    if (points.length < 2) return `<div class="mock-trend-empty">Your next mock will start a trend line for this exam.</div>`;
    const values = points.map(item => metricsFor(item).scorePct);
    const min = Math.max(0, Math.min(...values) - 12), max = Math.min(100, Math.max(...values) + 12);
    const range = Math.max(10, max - min);
    const coords = values.map((value, index) => ({
      x: 28 + (index * 544 / Math.max(1, values.length - 1)),
      y: 126 - ((value - min) / range) * 96
    }));
    const poly = coords.map(point => `${point.x},${point.y}`).join(' ');
    const circles = coords.map((point, index) => `<circle cx="${point.x}" cy="${point.y}" r="4.5" class="${index === coords.length - 1 ? 'is-current' : ''}"><title>${values[index].toFixed(1)}%</title></circle>`).join('');
    const labels = points.map((item, index) => `<text x="${coords[index].x}" y="151" text-anchor="middle">${esc((item.date || 'Mock').slice(5) || 'Mock')}</text>`).join('');
    return `<svg class="mock-trend-svg" viewBox="0 0 600 165" role="img" aria-label="Score percentage trend across previous mocks"><line x1="28" y1="30" x2="572" y2="30"/><line x1="28" y1="78" x2="572" y2="78"/><line x1="28" y1="126" x2="572" y2="126"/><polyline points="${poly}"/>${circles}${labels}</svg>`;
  }

  function subjectCardHtml(item) {
    const tone = item.key === 'english' ? 'green' : item.key === 'quant' ? 'blue' : 'orange';
    return `<article class="mock-analysis-subject ${tone}">
      <div class="mock-analysis-subject-head"><div><span class="mock-analysis-eyebrow">SECTION</span><h3>${esc(item.title)}</h3></div><strong>${format(item.marks)} <small>/ ${item.max}</small></strong></div>
      <div class="mock-analysis-duo"><div><span>Correct</span><b class="good">${item.right}</b></div><div><span>Wrong</span><b class="bad">${item.wrong}</b></div></div>
      <div class="mock-analysis-grid"><div><span>Attempted</span><b>${item.attempted}/${item.max}</b></div><div><span>Unanswered</span><b>${item.unanswered}</b></div><div><span>Accuracy</span><b>${item.accuracy.toFixed(1)}%</b></div><div><span>Coverage</span><b>${item.coverage.toFixed(1)}%</b></div><div class="wide"><span>Net marks</span><b>${format(item.marks)} / ${item.max}</b></div></div>
      <div class="mock-analysis-progress"><i style="width:${Math.max(0, Math.min(100, item.coverage))}%"></i></div>
    </article>`;
  }

  function actionSummary(metrics) {
    if (!metrics.subjects.length) return { strongest: 'No section data', weakest: 'No section data', next: 'Enter a mock with section-wise marks.' };
    const byScore = [...metrics.subjects].sort((a, b) => percent(b.marks, b.max) - percent(a.marks, a.max));
    const strongest = byScore[0], weakest = byScore.at(-1);
    let next = `Improve ${weakest.title} before chasing more attempts.`;
    if (metrics.accuracy < 80) next = `Improve accuracy first; ${weakest.title} is currently the weakest section.`;
    else if (metrics.unanswered > metrics.max * 0.45) next = `Work on coverage while maintaining accuracy, starting with ${weakest.title}.`;
    return {
      strongest: `${strongest.title} · ${percent(strongest.marks, strongest.max).toFixed(1)}% of section marks`,
      weakest: `${weakest.title} · ${percent(weakest.marks, weakest.max).toFixed(1)}% of section marks`, next
    };
  }

  window.showMockAnalysis = function (id) {
    normalizeLegacyMocks();
    const mock = ensureMockData().find(item => String(item.id) === String(id));
    const modal = $('mockDetailModal'), body = $('mockDetailBody');
    if (!mock || !modal || !body) return;
    const metrics = metricsFor(mock);
    const { previous, earlier, total } = comparisonHistory(mock);
    const previousMetrics = previous ? metricsFor(previous) : null;
    const difference = previousMetrics ? metrics.scorePct - previousMetrics.scorePct : null;
    const target = number(mock.target);
    const targetGap = target > 0 ? target - metrics.marks : null;
    const action = actionSummary(metrics);
    const title = $('mockDetailTitle');
    if (title) title.textContent = mock.examType || 'Mock Analysis';
    const previousBlock = previousMetrics ? `
      <div class="mock-compare-grid">
        <div class="mock-compare-card current"><span>Selected mock</span><strong>${format(metrics.marks)} / ${metrics.max}</strong><small>${metrics.scorePct.toFixed(1)}% · ${esc(mock.date || 'Date not set')}</small></div>
        <div class="mock-compare-card"><span>Previous same-exam mock</span><strong>${format(previousMetrics.marks)} / ${previousMetrics.max}</strong><small>${previousMetrics.scorePct.toFixed(1)}% · ${esc(previous.date || 'Date not set')}</small></div>
        <div class="mock-compare-card"><span>Change vs previous</span><strong class="${difference >= 0 ? 'good' : 'bad'}">${difference >= 0 ? '+' : ''}${difference.toFixed(1)} pp</strong><small>${difference >= 0 ? 'Performance improved' : 'Performance dropped'} by score percentage</small></div>
      </div>` : `<div class="mock-no-history">This is the first recorded ${esc(mock.examType)} ${mock.type === 'sectional' ? `${esc(mock.sub)} sectional` : 'full'} mock. Future entries will be compared here.</div>`;

    const sectionSummary = metrics.subjects.map(subjectCardHtml).join('');
    const percentile = mock.percentile !== undefined && mock.percentile !== null && mock.percentile !== '-' && mock.percentile !== '' ? Math.max(0, Math.min(100, number(mock.percentile))) : null;
    const percentileHtml = percentile === null
      ? `<div class="mock-percentile-empty">Percentile was not entered for this mock.</div>`
      : `<div class="mock-percentile-number">${percentile.toFixed(2)}<small>%ile</small></div><div class="mock-percentile-track"><i style="left:${percentile}%"></i></div><div class="mock-percentile-labels"><span>0 · Below average</span><span>50 · Average</span><span>75 · Above average</span><span>100 · Excellent</span></div>`;

    body.innerHTML = `
      <section class="mock-analysis-hero">
        <div><span class="mock-analysis-eyebrow">MOCK PERFORMANCE ANALYSIS</span><h2>${esc(mock.examType || 'Mock Test')}</h2><p>${mock.type === 'sectional' ? `Sectional · ${esc(mock.sub || '')}` : 'Full Mock'} · ${esc(mock.date || 'Date not set')} · ${esc(mock.platform || 'Self practice')}</p></div>
        <div class="mock-analysis-score"><span>SCORE</span><strong>${format(metrics.marks)}</strong><small>/ ${metrics.max}</small></div>
      </section>
      <section class="mock-analysis-kpis">
        ${metricHtml('Score %', `${metrics.scorePct.toFixed(1)}%`)}
        ${metricHtml('Accuracy', `${metrics.accuracy.toFixed(1)}%`)}
        ${metricHtml('Percentile', percentile === null ? 'Not entered' : `${percentile.toFixed(2)}%ile`)}
        ${metricHtml('Target', target > 0 ? (targetGap > 0 ? `Gap ${format(targetGap)}` : `Met by ${format(Math.abs(targetGap))}`) : 'Not set', target > 0 ? (targetGap > 0 ? 'bad' : 'good') : '')}
      </section>
      <section class="mock-analysis-panel">
        <div class="mock-analysis-panel-head"><div><span class="mock-analysis-eyebrow">SAME EXAM COMPARISON</span><h3>Selected mock vs your previous performance</h3></div><span class="mock-analysis-muted">${total} matching mock${total === 1 ? '' : 's'} recorded</span></div>
        ${previousBlock}
      </section>
      <section class="mock-analysis-two-col">
        <div class="mock-analysis-panel"><div class="mock-analysis-panel-head"><div><span class="mock-analysis-eyebrow">MARK PERFORMANCE</span><h3>Score trend for this exam</h3></div></div>${trendSvg(earlier, mock)}</div>
        <div class="mock-analysis-panel"><div class="mock-analysis-panel-head"><div><span class="mock-analysis-eyebrow">PERCENTILE POSITION</span><h3>${percentile === null ? 'No percentile data' : `${percentile.toFixed(2)}%ile`}</h3></div></div>${percentileHtml}</div>
      </section>
      <section class="mock-analysis-panel"><div class="mock-analysis-panel-head"><div><span class="mock-analysis-eyebrow">SECTION WISE SUMMARY</span><h3>Performance from your entered data</h3></div><span class="mock-analysis-muted">${metrics.attempted}/${metrics.max} attempted</span></div>
        <div class="mock-analysis-subjects">${sectionSummary}</div>
        <div class="mock-analysis-total-row">
          <div><span>Correct</span><b class="good">${metrics.correct}</b></div>
          <div><span>Wrong</span><b class="bad">${metrics.wrong}</b></div>
          <div><span>Unanswered</span><b>${metrics.unanswered}</b></div>
          <div><span>Attempt coverage</span><b>${metrics.coverage.toFixed(1)}%</b></div>
          <div><span>Target status</span><b class="${target > 0 ? (targetGap > 0 ? 'bad' : 'good') : ''}">${target > 0 ? (targetGap > 0 ? `Gap ${format(targetGap)}` : 'Target met') : 'Not set'}</b></div>
        </div>
      </section>
      <section class="mock-analysis-insights">
        <article><span>STRONGEST SECTION</span><b>${esc(action.strongest)}</b></article>
        <article><span>IMPROVEMENT AREA</span><b>${esc(action.weakest)}</b></article>
        <article><span>NEXT ACTION</span><b>${esc(action.next)}</b></article>
      </section>
      <div class="mock-analysis-footer"><span>Compared only with ${esc(mock.examType)} ${mock.type === 'sectional' ? `${esc(mock.sub)} sectional` : 'full'} mocks saved in this tracker.</span><button type="button" class="btn-secondary" data-mock-edit="${esc(mock.id)}">Edit this mock</button></div>`;

    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('show');
    document.body.classList.add('modal-open');
  };

  window.closeMockAnalysis = function () {
    const modal = $('mockDetailModal');
    if (modal) { modal.classList.remove('show'); modal.hidden = true; modal.setAttribute('aria-hidden', 'true'); }
    document.body.classList.remove('modal-open');
  };

  window.showSmartCoach = function (mock) {
    const body = $('aiModalBody'), modal = $('aiModal');
    if (!body || !modal || !mock) return;
    const m = metricsFor(mock);
    const action = actionSummary(m);
    const target = number(mock.target);
    const { previous } = comparisonHistory(mock);
    const previousPct = previous ? metricsFor(previous).scorePct : null;
    const change = previousPct === null ? null : m.scorePct - previousPct;
    const targetText = target > 0 ? `${format(target)} / ${m.max}${m.marks >= target ? ' · Target met' : ` · Gap ${format(target - m.marks)}`}` : 'Not set';
    const trendText = change === null ? 'First matching mock' : `${change >= 0 ? '+' : ''}${change.toFixed(1)} percentage points vs previous`;
    body.innerHTML = `<div class="mock-coach-summary"><div><span>Score</span><b>${format(m.marks)} / ${m.max} (${m.scorePct.toFixed(1)}%)</b></div><div><span>Accuracy</span><b>${m.accuracy.toFixed(1)}%</b></div><div><span>Target</span><b>${esc(targetText)}</b></div><div><span>Attempts · Wrong</span><b>${m.attempted} · ${m.wrong}</b></div><div><span>Trend</span><b>${esc(trendText)}</b></div></div><p><b>Strongest section:</b> ${esc(action.strongest)}</p><p><b>Improvement area:</b> ${esc(action.weakest)}</p><p><b>Next action:</b> ${esc(action.next)}</p>`;
    const heading = modal.querySelector('h2');
    if (heading) heading.innerHTML = '<i class="ph-fill ph-chart-line-up"></i> Mock saved · Quick review';
    modal.classList.add('show');
  };

  const MOCK_SORT_STORAGE_KEY = 'kkMockTrackerSort';
  const MOCK_SORT_LABELS = {
    'date-desc': 'Latest date first', 'date-asc': 'Oldest date first',
    'added-desc': 'Recently added', 'score-desc': 'Highest score (%)',
    'score-asc': 'Lowest score (%)', 'accuracy-desc': 'Highest accuracy',
    'accuracy-asc': 'Lowest accuracy', 'exam-asc': 'Exam name (A–Z)',
    'type-asc': 'Mock type'
  };

  function mockDateValue(value) {
    const raw = String(value ?? '').trim();
    if (!raw) return null;
    let match = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (match) return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    match = raw.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/);
    if (match) return Date.UTC(Number(match[3]), Number(match[1]) - 1, Number(match[2]));
    const parsed = Date.parse(raw);
    return Number.isFinite(parsed) ? parsed : null;
  }

  function mockCreatedValue(mock) {
    const created = Number(mock?.createdAt);
    if (Number.isFinite(created) && created > 0) return created;
    const id = Number(mock?.id);
    if (Number.isFinite(id) && id > 0) return id;
    return 0;
  }

  function compareMockId(a, b) {
    return String(a?.id ?? '').localeCompare(String(b?.id ?? ''), undefined, { numeric: true, sensitivity: 'base' });
  }

  function compareMockDate(a, b, direction = 'desc') {
    const av = mockDateValue(a.date), bv = mockDateValue(b.date);
    if (av === null && bv !== null) return 1;
    if (bv === null && av !== null) return -1;
    if (av !== null && bv !== null && av !== bv) return direction === 'asc' ? av - bv : bv - av;
    const createdDiff = mockCreatedValue(b) - mockCreatedValue(a);
    return createdDiff || compareMockId(a, b);
  }

  function sortedMockRecords(records, sortBy) {
    const decorated = records.map(mock => ({ mock, metrics: metricsFor(mock) }));
    decorated.sort((left, right) => {
      const a = left.mock, b = right.mock;
      let result = 0;
      switch (sortBy) {
        case 'date-asc': result = compareMockDate(a, b, 'asc'); break;
        case 'added-desc': result = mockCreatedValue(b) - mockCreatedValue(a) || compareMockId(a, b); break;
        case 'score-desc': result = right.metrics.scorePct - left.metrics.scorePct; break;
        case 'score-asc': result = left.metrics.scorePct - right.metrics.scorePct; break;
        case 'accuracy-desc': result = right.metrics.accuracy - left.metrics.accuracy; break;
        case 'accuracy-asc': result = left.metrics.accuracy - right.metrics.accuracy; break;
        case 'exam-asc': result = String(a.examType || '').localeCompare(String(b.examType || ''), undefined, { numeric: true, sensitivity: 'base' }); break;
        case 'type-asc': result = (a.type === 'sectional' ? 1 : 0) - (b.type === 'sectional' ? 1 : 0); break;
        case 'date-desc':
        default: result = compareMockDate(a, b, 'desc'); break;
      }
      // A deterministic date/creation/ID tie-breaker prevents rows from jumping
      // when cloud records arrive in a different array order.
      return result || compareMockDate(a, b, 'desc') || compareMockId(a, b);
    });
    return decorated.map(item => item.mock);
  }

  function restoreMockSortPreference() {
    const control = $('trackerSort');
    if (!control) return;
    try {
      const saved = localStorage.getItem(MOCK_SORT_STORAGE_KEY);
      if (saved && MOCK_SORT_LABELS[saved]) control.value = saved;
    } catch (error) { console.warn('Mock sort preference unavailable:', error); }
  }

  window.renderTracker = function () {
    const tbody = $('trackerBody');
    if (!tbody) return;
    normalizeLegacyMocks();
    const filter = $('trackerFilter')?.value || 'All';
    const typeFilter = $('trackerTypeFilter')?.value || 'all';
    const sortBy = $('trackerSort')?.value || 'date-desc';
    try { if (MOCK_SORT_LABELS[sortBy]) localStorage.setItem(MOCK_SORT_STORAGE_KEY, sortBy); } catch (error) { /* Sorting still works without storage access. */ }
    const filtered = ensureMockData().filter(mock =>
      (filter === 'All' || mock.examType === filter) &&
      (typeFilter === 'all' || (mock.type || 'full') === typeFilter)
    );
    const mocks = sortedMockRecords(filtered, sortBy);
    const status = $('trackerSortStatus');
    if (status) status.textContent = `${mocks.length} mock${mocks.length === 1 ? '' : 's'} · ${MOCK_SORT_LABELS[sortBy] || MOCK_SORT_LABELS['date-desc']}`;
    tbody.innerHTML = '';
    if (!mocks.length) {
      tbody.innerHTML = `<tr class="mock-empty-row"><td colspan="25">No mock tests match these filters. Change the exam or mock type, or add a new mock.</td></tr>`;
    } else {
      mocks.forEach((mock, index) => {
        const hasEnglish = getPattern(mock.examType).hasEng && activeSubjectsFor(mock.examType, mock.type || 'full', mock.sub).includes('english');
        const m = metricsFor(mock);
        const e = hasEnglish ? subjectValues(mock, 'english') : null;
        const q = activeSubjectsFor(mock.examType, mock.type || 'full', mock.sub).includes('quant') ? subjectValues(mock, 'quant') : null;
        const r = activeSubjectsFor(mock.examType, mock.type || 'full', mock.sub).includes('reasoning') ? subjectValues(mock, 'reasoning') : null;
        const cell = (value, cls = '') => `<td class="${cls}">${value}</td>`;
        const row = document.createElement('tr');
        row.className = 'mock-tracker-row'; row.dataset.mockId = String(mock.id); row.tabIndex = 0; row.setAttribute('role', 'button');
        row.setAttribute('aria-label', `Open analysis for ${mock.examType} mock dated ${mock.date || 'unknown date'}`);
        row.innerHTML = [
          cell(index + 1), cell(mock.type === 'sectional' ? `Sectional (${esc(mock.sub)})` : 'Full'), cell(esc(mock.date || '-')), cell(esc(mock.examType || '-')), cell(mock.target ? esc(mock.target) : '-'), cell(esc(mock.platform || '-')),
          cell(e ? e.attempted : '-'), cell(e ? e.right : '-', 'text-emerald'), cell(e ? e.wrong : '-', 'text-danger'), cell(e ? format(e.marks) : '-', 'font-bold'),
          cell(q ? q.attempted : '-'), cell(q ? q.right : '-', 'text-emerald'), cell(q ? q.wrong : '-', 'text-danger'), cell(q ? format(q.marks) : '-', 'font-bold'),
          cell(r ? r.attempted : '-'), cell(r ? r.right : '-', 'text-emerald'), cell(r ? r.wrong : '-', 'text-danger'), cell(r ? format(r.marks) : '-', 'font-bold'),
          cell(m.attempted), cell(m.correct, 'text-emerald'), cell(m.wrong, 'text-danger'), cell(`${m.accuracy.toFixed(1)}%`, m.accuracy >= 85 ? 'acc-high' : 'acc-low'),
          cell(mock.percentile === '-' || mock.percentile === '' || mock.percentile == null ? '-' : esc(mock.percentile), 'text-purple'),
          cell(`${format(m.marks)}/${m.max}`, 'font-bold mock-total-marks'),
          `<td class="mock-row-actions"><button type="button" class="btn-secondary" data-mock-action="edit" data-mock-id="${esc(mock.id)}">Edit</button><button type="button" class="btn-danger" data-mock-action="delete" data-mock-id="${esc(mock.id)}">Del</button></td>`
        ].join('');
        tbody.appendChild(row);
      });
    }
    try { if (typeof renderDailySummaryTable === 'function') renderDailySummaryTable(); } catch (error) { console.warn('Daily summary refresh:', error); }
    try { if (typeof renderQuizHistoryTable === 'function') renderQuizHistoryTable(); } catch (error) { console.warn('Quiz history refresh:', error); }
  };
  window.updateTracker = () => window.renderTracker();

  window.updateDashboardKPIs = function () {
    const mocks = ensureMockData();
    const total = $('kpiTotal'), bestEl = $('kpiBest'), avgEl = $('kpiAvg'), accEl = $('kpiAcc');
    if (total) total.textContent = String(mocks.length);
    if (!mocks.length) {
      if (bestEl) bestEl.textContent = '0%';
      if (avgEl) avgEl.textContent = '0%';
      if (accEl) accEl.textContent = '0%';
    } else {
      const scores = mocks.map(mock => metricsFor(mock));
      const best = Math.max(...scores.map(m => m.scorePct));
      const average = scores.reduce((sum, m) => sum + m.scorePct, 0) / scores.length;
      const avgAccuracy = scores.reduce((sum, m) => sum + m.accuracy, 0) / scores.length;
      if (bestEl) bestEl.textContent = `${best.toFixed(1)}%`;
      if (avgEl) avgEl.textContent = `${average.toFixed(1)}%`;
      if (accEl) accEl.textContent = `${avgAccuracy.toFixed(1)}%`;
    }
    const labels = document.querySelectorAll('#view-dashboard .kpi-card p');
    if (labels[1]) labels[1].textContent = 'Highest Performance';
    if (labels[3]) labels[3].textContent = 'Average Performance';
  };

  window.deleteMock = function (id) {
    const all = ensureMockData();
    const exists = all.some(mock => String(mock.id) === String(id));
    if (!exists || !window.confirm('Delete this mock data permanently?')) return;
    window.appData.mocks = all.filter(mock => String(mock.id) !== String(id));
    window.kkRememberMockDeletion?.(id);
    window.dispatchEvent(new CustomEvent('kk:mock-deleted', { detail: { id: String(id) } }));
    window.saveDataLocally?.('delete');
    window.renderTracker();
    window.updateDashboardKPIs();
    window.renderLifetimeMockSummary?.();
    window.renderCharts?.();
    window.showToast?.('Mock deleted.');
  };

  window.exportCSV = function () {
    try {
      const rows = [['Date', 'Exam', 'Type', 'Platform', 'Target', 'Attempted', 'Correct', 'Wrong', 'Accuracy %', 'Marks', 'Maximum Marks', 'Percentile']];
      ensureMockData().forEach(mock => {
        const m = metricsFor(mock);
        rows.push([mock.date || '', mock.examType || '', mock.type || 'full', mock.platform || '', mock.target || '', m.attempted, m.correct, m.wrong, m.accuracy.toFixed(1), format(m.marks), m.max, mock.percentile ?? '']);
      });
      const csv = rows.map(row => row.map(value => `"${String(value ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
      const url = URL.createObjectURL(blob), anchor = document.createElement('a');
      anchor.href = url; anchor.download = 'KK_Monitoring_Mock_Tracker.csv'; document.body.appendChild(anchor); anchor.click(); anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) { console.error('CSV export failed:', error); window.showToast?.('Could not export mock data.', true); }
  };

  const LIFETIME_SUBJECTS = {
    english: { label: 'English', ids: ['lifeEnglishAttempted','lifeEnglishCorrect','lifeEnglishWrong','lifeEnglishAccuracy'] },
    quant: { label: 'Quantitative Aptitude', ids: ['lifeQuantAttempted','lifeQuantCorrect','lifeQuantWrong','lifeQuantAccuracy'] },
    reasoning: { label: 'Reasoning Ability', ids: ['lifeReasoningAttempted','lifeReasoningCorrect','lifeReasoningWrong','lifeReasoningAccuracy'] }
  };
  window.renderLifetimeMockSummary = function () {
    const mocks = ensureMockData();
    const totals = { english:{attempted:0,correct:0,wrong:0}, quant:{attempted:0,correct:0,wrong:0}, reasoning:{attempted:0,correct:0,wrong:0} };
    let scorePctSum = 0, validScores = 0;
    for (const mock of mocks) {
      if (!mock || typeof mock !== 'object') continue;
      const active = activeSubjectsFor(mock.examType, mock.type || 'full', mock.sub);
      for (const key of active) {
        const values = subjectValues(mock, key), target = totals[key];
        target.attempted += values.attempted; target.correct += values.right; target.wrong += values.wrong;
      }
      const metrics = metricsFor(mock);
      if (Number.isFinite(metrics.scorePct)) { scorePctSum += metrics.scorePct; validScores++; }
    }
    const allAttempted = Object.values(totals).reduce((sum, item) => sum + item.attempted, 0);
    const allCorrect = Object.values(totals).reduce((sum, item) => sum + item.correct, 0);
    const allWrong = Object.values(totals).reduce((sum, item) => sum + item.wrong, 0);
    const accuracy = allAttempted ? allCorrect / allAttempted * 100 : 0;
    const avgScore = validScores ? scorePctSum / validScores : 0;
    const set = (id, value) => { const el = $(id); if (el) el.textContent = String(value); };
    set('lifeMocksTotal', mocks.length);
    set('lifeQuestionsAttempted', allAttempted);
    set('lifeAvgScore', `${avgScore.toFixed(1)}%`);
    set('lifeOverallAccuracy', `${accuracy.toFixed(1)}%`);
    for (const [key, cfg] of Object.entries(LIFETIME_SUBJECTS)) {
      const data = totals[key], acc = data.attempted ? data.correct / data.attempted * 100 : 0;
      set(cfg.ids[0], data.attempted); set(cfg.ids[1], data.correct); set(cfg.ids[2], data.wrong); set(cfg.ids[3], `${acc.toFixed(1)}%`);
    }
    const weakest = Object.entries(totals).filter(([,item]) => item.wrong > 0).sort((a,b)=>b[1].wrong-a[1].wrong)[0];
    set('lifeMostWrongSubject', weakest ? `${LIFETIME_SUBJECTS[weakest[0]].label} · ${weakest[1].wrong} wrong` : 'No wrong answers recorded');
    set('lifeTotalWrong', allWrong);

    const typeTotals = new Map();
    for (const quiz of (window.appData?.quizHistory || [])) {
      const breakdown = quiz?.questionTypes;
      if (!breakdown || typeof breakdown !== 'object') continue;
      for (const [type, stat] of Object.entries(breakdown)) {
        const wrong = Math.max(0, number(stat?.wrong));
        if (!wrong) continue;
        typeTotals.set(type, (typeTotals.get(type) || 0) + wrong);
      }
    }
    const topType = [...typeTotals.entries()].sort((a,b)=>b[1]-a[1])[0];
    set('lifeQuizMistakeType', topType ? `${topType[0]} · ${topType[1]} wrong` : 'New quiz data will build this insight');
    return { mockCount:mocks.length, attempted:allAttempted, correct:allCorrect, wrong:allWrong, averageScore:avgScore, accuracy, subjects:totals, mostWrongSubject:weakest?.[0] || null, mostMissedQuizType:topType?.[0] || null };
  };

  function bindTrackerEvents() {
    const tbody = $('trackerBody');
    if (tbody && !tbody.dataset.mockEventsBound) {
      tbody.dataset.mockEventsBound = '1';
      tbody.addEventListener('click', event => {
        const action = event.target.closest('[data-mock-action]');
        if (action) {
          event.stopPropagation();
          const id = action.dataset.mockId;
          if (action.dataset.mockAction === 'edit') window.editMock(id);
          if (action.dataset.mockAction === 'delete') window.deleteMock(id);
          return;
        }
        const row = event.target.closest('tr[data-mock-id]');
        if (row) window.showMockAnalysis(row.dataset.mockId);
      });
      tbody.addEventListener('keydown', event => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        if (event.target.closest('button, a, input, select, textarea')) return;
        const row = event.target.closest('tr[data-mock-id]');
        if (!row) return;
        event.preventDefault(); window.showMockAnalysis(row.dataset.mockId);
      });
    }
    const modal = $('mockDetailModal');
    if (modal && !modal.dataset.mockEventsBound) {
      modal.dataset.mockEventsBound = '1';
      modal.addEventListener('click', event => {
        if (event.target === modal || event.target.closest('[data-mock-close]')) window.closeMockAnalysis();
        const edit = event.target.closest('[data-mock-edit]');
        if (edit) { const id = edit.dataset.mockEdit; window.closeMockAnalysis(); window.editMock(id); }
      });
    }
    if (!document.body.dataset.mockEscapeBound) {
      document.body.dataset.mockEscapeBound = '1';
      document.addEventListener('keydown', event => { if (event.key === 'Escape' && $('mockDetailModal')?.classList.contains('show')) window.closeMockAnalysis(); });
    }
  }

  function init() {
    ensureMockData();
    restoreMockSortPreference();
    bindTrackerEvents();
    if ($('mockDate') && !$('mockDate').value) $('mockDate').value = todayLocal();
    if ($('mockExamType')) $('mockExamType').addEventListener('change', () => window.renderMockSubjectsVisibility());
    if ($('secSubject')) $('secSubject').addEventListener('change', () => window.renderMockSubjectsVisibility());
    if ($('mockForm')) {
      $('mockForm').addEventListener('input', event => {
        if (event.target.matches('#engR, #engW, #quaR, #quaW, #reaR, #reaW')) window.calculateLive();
      });
      $('mockForm').addEventListener('reset', () => setTimeout(() => window.renderMockSubjectsVisibility(), 0));
    }
    window.setMockType('full');
  }

  init();
  window.addEventListener('kk:core-ready', () => {
    window.updateMockUI();
    window.renderLifetimeMockSummary?.();
    bindTrackerEvents();
  });
})();
