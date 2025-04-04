import {
  Landmark,
  Rocket,
  Cat,
  TreesIcon as Plant,
  Calculator,
  Globe,
  Book,
  Dna,
  Music,
  Palette,
  Crown,
  Mountain,
  Utensils,
  Brain,
  Atom,
  Microscope,
  Cloud,
} from "lucide-react"

export const topicData = {
  monuments: [
    {
      question: "What is the tallest monument in the world?",
      answer: "The Burj Khalifa in Dubai, standing at 828 meters (2,717 feet) tall.",
      difficulty: "medium",
    },
    {
      question: "When was the Eiffel Tower completed?",
      answer: "The Eiffel Tower was completed in 1889 for the 1889 World's Fair in Paris.",
      difficulty: "easy",
    },
    {
      question: "Which ancient civilization built the Great Pyramids of Giza?",
      answer: "The Ancient Egyptians built the Great Pyramids of Giza around 2560 BCE.",
      difficulty: "easy",
    },
    {
      question: "What is the Statue of Liberty made of?",
      answer: "The Statue of Liberty is made of copper on the outside and has an iron framework on the inside.",
      difficulty: "medium",
    },
    {
      question: "Which U.S. president is depicted on Mount Rushmore?",
      answer:
        "Four U.S. presidents are depicted: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln.",
      difficulty: "hard",
    },
  ],
  space: [
    {
      question: "What is the closest star to Earth?",
      answer: "The Sun is the closest star to Earth, approximately 93 million miles away.",
      difficulty: "easy",
    },
    {
      question: "What is a light-year?",
      answer: "A light-year is the distance light travels in one year, approximately 5.88 trillion miles.",
      difficulty: "medium",
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter is the largest planet in our solar system.",
      difficulty: "easy",
    },
    {
      question: "What causes the northern lights (aurora borealis)?",
      answer: "The northern lights are caused by solar particles colliding with gases in Earth's atmosphere.",
      difficulty: "medium",
    },
    {
      question: "What is a black hole?",
      answer:
        "A black hole is a region of spacetime where gravity is so strong that nothing can escape from it, not even light.",
      difficulty: "hard",
    },
  ],
  animals: [
    {
      question: "What is the fastest land animal?",
      answer: "The cheetah, which can reach speeds up to 70 mph (113 km/h).",
      difficulty: "easy",
    },
    {
      question: "Which animal has the longest lifespan?",
      answer: "The Greenland shark, which can live for up to 500 years.",
      difficulty: "medium",
    },
    {
      question: "How many hearts does an octopus have?",
      answer: "An octopus has three hearts.",
      difficulty: "medium",
    },
    {
      question: "Which bird can fly backward?",
      answer: "The hummingbird is the only bird that can fly backward.",
      difficulty: "medium",
    },
    {
      question: "What is a group of lions called?",
      answer: "A group of lions is called a pride.",
      difficulty: "hard",
    },
  ],
  plants: [
    {
      question: "What do plants need to make their own food?",
      answer: "Plants need sunlight, water, and carbon dioxide to make their own food through photosynthesis.",
      difficulty: "easy",
    },
    {
      question: "What is the process called when plants release water vapor into the air?",
      answer:
        "Transpiration is the process where plants release water vapor through small openings in their leaves called stomata.",
      difficulty: "medium",
    },
    {
      question: "What are the male parts of a flower called?",
      answer: "The male parts of a flower are called stamens, which consist of an anther and filament.",
      difficulty: "medium",
    },
    {
      question: "What is the largest flower in the world?",
      answer:
        "The Rafflesia arnoldii, which can grow up to 3 feet in diameter and is found in Southeast Asian rainforests.",
      difficulty: "hard",
    },
    {
      question: "How do plants respond to light?",
      answer: "Plants respond to light through phototropism, growing toward light sources to maximize photosynthesis.",
      difficulty: "medium",
    },
  ],
  math: [
    {
      question: "What is the formula for the area of a circle?",
      answer: "The formula for the area of a circle is A = πr², where r is the radius of the circle.",
      difficulty: "medium",
    },
    {
      question: "What is the Pythagorean theorem?",
      answer:
        "The Pythagorean theorem states that in a right triangle, the square of the length of the hypotenuse equals the sum of the squares of the other two sides (a² + b² = c²).",
      difficulty: "hard",
    },
    {
      question: "What is the formula for the perimeter of a rectangle?",
      answer: "The formula for the perimeter of a rectangle is P = 2(length + width) or P = 2l + 2w.",
      difficulty: "easy",
    },
    {
      question: "What is the value of π (pi) rounded to two decimal places?",
      answer: "The value of π (pi) rounded to two decimal places is 3.14.",
      difficulty: "easy",
    },
    {
      question: "What is the formula for the volume of a rectangular prism?",
      answer: "The formula for the volume of a rectangular prism is V = length × width × height or V = lwh.",
      difficulty: "medium",
    },
  ],
  geography: [
    {
      question: "What is the largest ocean on Earth?",
      answer: "The Pacific Ocean is the largest ocean on Earth, covering more than 30% of the Earth's surface.",
      difficulty: "easy",
    },
    {
      question: "What is the longest river in the world?",
      answer: "The Nile River is the longest river in the world, stretching about 6,650 kilometers (4,130 miles).",
      difficulty: "medium",
    },
    {
      question: "What are the seven continents?",
      answer:
        "The seven continents are Africa, Antarctica, Asia, Australia/Oceania, Europe, North America, and South America.",
      difficulty: "easy",
    },
    {
      question: "What is the highest mountain in the world?",
      answer:
        "Mount Everest is the highest mountain in the world, with a peak at 8,848.86 meters (29,031.7 feet) above sea level.",
      difficulty: "easy",
    },
    {
      question: "What is the largest desert in the world?",
      answer:
        "The Antarctic Desert is the largest desert in the world, covering about 14 million square kilometers (5.4 million square miles).",
      difficulty: "hard",
    },
  ],
  literature: [
    {
      question: "Who wrote 'Charlotte's Web'?",
      answer: "E.B. White wrote 'Charlotte's Web', published in 1952.",
      difficulty: "medium",
    },
    {
      question: "What are the four types of sentences?",
      answer:
        "The four types of sentences are declarative (statements), interrogative (questions), imperative (commands), and exclamatory (exclamations).",
      difficulty: "medium",
    },
    {
      question: "What is a metaphor?",
      answer: "A metaphor is a figure of speech that directly compares two things without using 'like' or 'as'.",
      difficulty: "easy",
    },
    {
      question: "Who wrote the Harry Potter series?",
      answer: "J.K. Rowling wrote the Harry Potter series.",
      difficulty: "easy",
    },
    {
      question: "What is the main conflict in a story called?",
      answer: "The main conflict in a story is called the central conflict or main problem.",
      difficulty: "medium",
    },
  ],
  biology: [
    {
      question: "What are the main parts of a cell?",
      answer: "The main parts of a cell include the cell membrane, cytoplasm, and nucleus (in eukaryotic cells).",
      difficulty: "medium",
    },
    {
      question: "What is photosynthesis?",
      answer:
        "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water.",
      difficulty: "medium",
    },
    {
      question: "What are the main systems in the human body?",
      answer:
        "The main systems in the human body include the circulatory, respiratory, digestive, nervous, muscular, skeletal, endocrine, reproductive, and immune systems.",
      difficulty: "hard",
    },
    {
      question: "What is the largest organ in the human body?",
      answer: "The skin is the largest organ in the human body.",
      difficulty: "easy",
    },
    {
      question: "What is the function of red blood cells?",
      answer:
        "Red blood cells (erythrocytes) carry oxygen from the lungs to the body's tissues and transport carbon dioxide back to the lungs.",
      difficulty: "medium",
    },
  ],
  music: [
    {
      question: "What are the names of the lines in the treble clef?",
      answer:
        "The lines in the treble clef, from bottom to top, are E, G, B, D, F (often remembered as 'Every Good Boy Deserves Fudge').",
      difficulty: "medium",
    },
    {
      question: "What is a quarter note?",
      answer: "A quarter note is a musical note that receives one beat in a 4/4 time signature.",
      difficulty: "easy",
    },
    {
      question: "What are the main families of instruments in an orchestra?",
      answer: "The main families of instruments in an orchestra are strings, woodwinds, brass, and percussion.",
      difficulty: "medium",
    },
    {
      question: "What is tempo in music?",
      answer: "Tempo is the speed or pace of a musical piece.",
      difficulty: "easy",
    },
    {
      question: "What does the Italian term 'forte' mean in music?",
      answer: "The Italian term 'forte' means to play loudly in music.",
      difficulty: "medium",
    },
  ],
  art: [
    {
      question: "What are the primary colors?",
      answer: "The primary colors are red, blue, and yellow.",
      difficulty: "easy",
    },
    {
      question: "Who painted the Mona Lisa?",
      answer: "Leonardo da Vinci painted the Mona Lisa.",
      difficulty: "easy",
    },
    {
      question: "What is perspective in art?",
      answer:
        "Perspective in art is a technique used to represent three-dimensional objects on a two-dimensional surface, creating the illusion of depth and space.",
      difficulty: "medium",
    },
    {
      question: "What art movement did Vincent van Gogh belong to?",
      answer: "Vincent van Gogh is associated with Post-Impressionism.",
      difficulty: "hard",
    },
    {
      question: "What is a collage?",
      answer:
        "A collage is an art technique where various materials such as photographs, paper, and fabric are arranged and attached to a backing.",
      difficulty: "medium",
    },
  ],
  history: [
    {
      question: "Who was the first President of the United States?",
      answer: "George Washington was the first President of the United States.",
      difficulty: "easy",
    },
    {
      question: "What was the Renaissance?",
      answer:
        "The Renaissance was a period of European history between the 14th and 17th centuries marked by a renewed interest in art, science, and classical learning.",
      difficulty: "medium",
    },
    {
      question: "When did World War II end?",
      answer: "World War II ended in 1945.",
      difficulty: "easy",
    },
    {
      question: "Who was Cleopatra?",
      answer:
        "Cleopatra was the last active ruler of the Ptolemaic Kingdom of Egypt and is famous for her relationships with Julius Caesar and Mark Antony.",
      difficulty: "medium",
    },
    {
      question: "What was the Industrial Revolution?",
      answer:
        "The Industrial Revolution was a period of major industrialization and innovation that took place during the late 1700s and early 1800s, beginning in Great Britain and spreading to other parts of the world.",
      difficulty: "hard",
    },
  ],
  geology: [
    {
      question: "What are the three main types of rocks?",
      answer: "The three main types of rocks are igneous, sedimentary, and metamorphic.",
      difficulty: "easy",
    },
    {
      question: "What causes earthquakes?",
      answer:
        "Earthquakes are caused by the sudden release of energy in the Earth's crust, typically when tectonic plates slide past one another.",
      difficulty: "medium",
    },
    {
      question: "What is the hardest natural mineral?",
      answer: "Diamond is the hardest natural mineral on Earth.",
      difficulty: "easy",
    },
    {
      question: "What is the Mohs scale used for?",
      answer: "The Mohs scale is used to measure the hardness of minerals, ranging from 1 (talc) to 10 (diamond).",
      difficulty: "medium",
    },
    {
      question: "What is the theory of plate tectonics?",
      answer:
        "The theory of plate tectonics states that Earth's outer shell is divided into large plates that move over the mantle, causing earthquakes, volcanoes, and the formation of mountains and ocean trenches.",
      difficulty: "hard",
    },
  ],
  nutrition: [
    {
      question: "What are the main food groups?",
      answer: "The main food groups are fruits, vegetables, grains, protein foods, and dairy.",
      difficulty: "easy",
    },
    {
      question: "What are vitamins?",
      answer:
        "Vitamins are organic compounds that are essential in small amounts for the proper functioning of the body.",
      difficulty: "medium",
    },
    {
      question: "What is the function of protein in the body?",
      answer:
        "Protein is essential for building and repairing tissues, making enzymes and hormones, and supporting immune function.",
      difficulty: "medium",
    },
    {
      question: "What is fiber and why is it important?",
      answer:
        "Fiber is a type of carbohydrate that the body cannot digest. It helps regulate the body's use of sugars, keeps hunger and blood sugar in check, and helps with bowel movements.",
      difficulty: "medium",
    },
    {
      question: "What is the difference between saturated and unsaturated fats?",
      answer:
        "Saturated fats are typically solid at room temperature and come mainly from animal sources, while unsaturated fats are typically liquid at room temperature and come mainly from plant sources.",
      difficulty: "hard",
    },
  ],
  brain: [
    {
      question: "What are the main parts of the brain?",
      answer: "The main parts of the brain are the cerebrum, cerebellum, and brainstem.",
      difficulty: "medium",
    },
    {
      question: "What is the function of neurons?",
      answer: "Neurons are specialized cells that transmit information to other nerve cells, muscle, or gland cells.",
      difficulty: "medium",
    },
    {
      question: "What is the blood-brain barrier?",
      answer:
        "The blood-brain barrier is a protective boundary that prevents certain substances from entering the brain from the bloodstream.",
      difficulty: "hard",
    },
    {
      question: "Which side of the brain controls language for most people?",
      answer: "For most people, the left side of the brain controls language.",
      difficulty: "medium",
    },
    {
      question: "What happens to the brain during sleep?",
      answer:
        "During sleep, the brain processes information from the day, forms new memories, and removes waste products.",
      difficulty: "medium",
    },
  ],
  physics: [
    {
      question: "What is Newton's First Law of Motion?",
      answer:
        "Newton's First Law of Motion states that an object at rest stays at rest, and an object in motion stays in motion with the same speed and direction, unless acted upon by an external force.",
      difficulty: "medium",
    },
    {
      question: "What is gravity?",
      answer:
        "Gravity is a force that attracts objects toward each other, particularly the force that attracts objects toward the center of the Earth.",
      difficulty: "easy",
    },
    {
      question: "What are the states of matter?",
      answer: "The main states of matter are solid, liquid, gas, and plasma.",
      difficulty: "easy",
    },
    {
      question: "What is the speed of light?",
      answer:
        "The speed of light in a vacuum is approximately 299,792,458 meters per second (about 186,282 miles per second).",
      difficulty: "medium",
    },
    {
      question: "What is the difference between mass and weight?",
      answer:
        "Mass is the amount of matter in an object and remains constant regardless of location, while weight is the force of gravity on an object and can vary depending on location.",
      difficulty: "hard",
    },
  ],
  chemistry: [
    {
      question: "What is an atom?",
      answer: "An atom is the smallest unit of an element that maintains the chemical properties of that element.",
      difficulty: "easy",
    },
    {
      question: "What is the periodic table?",
      answer:
        "The periodic table is a tabular arrangement of chemical elements, organized by their atomic number, electron configuration, and recurring chemical properties.",
      difficulty: "medium",
    },
    {
      question: "What is a chemical reaction?",
      answer:
        "A chemical reaction is a process that leads to the transformation of one set of chemical substances to another.",
      difficulty: "medium",
    },
    {
      question: "What is pH and what does it measure?",
      answer:
        "pH is a scale used to specify the acidity or basicity of an aqueous solution. It measures the concentration of hydrogen ions in a solution.",
      difficulty: "medium",
    },
    {
      question: "What is the difference between an element and a compound?",
      answer:
        "An element is a pure substance made up of only one type of atom, while a compound is a substance made up of two or more different elements chemically combined in a fixed ratio.",
      difficulty: "hard",
    },
  ],
  weather: [
    {
      question: "What causes rain?",
      answer:
        "Rain is caused when water droplets in clouds become too heavy to remain suspended in the air and fall to the ground.",
      difficulty: "easy",
    },
    {
      question: "What is a hurricane?",
      answer:
        "A hurricane is a large, rotating tropical storm with wind speeds of at least 74 miles per hour (119 kilometers per hour).",
      difficulty: "medium",
    },
    {
      question: "What causes lightning?",
      answer:
        "Lightning is caused by the buildup and discharge of electrical energy between positively and negatively charged areas within clouds or between clouds and the ground.",
      difficulty: "medium",
    },
    {
      question: "What is the water cycle?",
      answer:
        "The water cycle is the continuous movement of water on, above, and below the surface of the Earth through processes like evaporation, condensation, and precipitation.",
      difficulty: "easy",
    },
    {
      question: "What causes the seasons?",
      answer:
        "Seasons are caused by the tilt of the Earth's axis as it orbits around the Sun, which changes the angle and duration of sunlight received in different regions throughout the year.",
      difficulty: "hard",
    },
  ],
}

export const topicIcons = {
  monuments: Landmark,
  space: Rocket,
  animals: Cat,
  plants: Plant,
  math: Calculator,
  geography: Globe,
  literature: Book,
  biology: Dna,
  music: Music,
  art: Palette,
  history: Crown,
  geology: Mountain,
  nutrition: Utensils,
  brain: Brain,
  physics: Atom,
  chemistry: Microscope,
  weather: Cloud,
}

