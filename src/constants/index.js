import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  eyantra,
  evolutionco,
  hmanadventures,
  hmanadventures1,
  hmanadventures2,
  hmanadventures3,
  hmanadventures4,
  hmanadventures5,
  hmanadventures6,
  autoteller_setup,
  at_render_cloud,
  at_mongo_dashboard,
  at_mongo_storage,
  greetAR,
  greetAR1,
  greetAR2,
  greetAR3,
  threejs,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [
  {
    title: "Skillset",
    icon: web,
    skill_names: [ 
      "eXtended Reality",
      "Game Development",
      "3D Modelling",
      "Web and Mobile Applications", 
      "Artificial Intelligence & Machine Learning",
      "Video Editing",
      "Graphic Design"
    ]
  },
  {
    title: "Programming Languages",
    icon: creator,
    skill_names: [ 
      "Java", 
      "JavaScript",
      "Python",
      "C", 
      "C#", 
      "C++",
      "Dart",
      "HTML",
      "CSS",
      "TypeScript"
    ]
  },
  {
    title: "Technlogical Tools",
    icon: mobile,
    skill_names: [ 
      "Unity 3D", 
      "Unreal Engine",
      "Git", "Node", "React", "Express", "MongoDB", 
      "MySQL", "AWS"
    ]
  },
  {
    title: "Digital Graphic Tools",
    icon: backend,
    skill_names: [ 
      "Blender", "Premiere Pro", "After Effects",
      "Photoshop", "Illustrator", "Pixilart", 
      "Canva", "Figma"
    ]
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  }
];

const experiences = [
  {
    title: "Summer Intern",
    company_name: "e-Yantra, IIT-Bombay",
    icon: eyantra,
    iconBg: "#FFFFFF",
    date: "May 2023 - July 2023",
    points: [
      "Designed and developed a 3D Virtual Museum website",
      "The virtual museum dynamically expands based on the number of artifacts stored in the database",
      "Took a session on \"sense-act-think\" paradigm with 50 Bhutanese school students from Royal Academy of Bhutan.",
      "Presented A Virtual Reality based Virtual Museum at Akhil Bharatiya Shiksha Samagam 2023 inaugurated by the Hon’ble Prime Minister at Bharat Mandapam, Pragati Maidan, New Delhi.",
    ],
    detail: {
      images :[],
      descriptions:[]
    }
  },
  {
    title: "VR Intern",
    company_name: "EvolutionCO",
    icon: evolutionco,
    iconBg: "#FFFFFF",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Worked on a virtual reality experience for a leading German company..",
      "Worked on Unity 3D, Made a virtual reality application working on HTC Vive.",    
    ],
    detail: {
      images :[],
      descriptions:[]
    }
  }
];

const projects = [
  {
    name: "AutoToller",
    description:
      "AutoToller is an IoT infrastructure that uses license plate detection to detect number plates and automatically deduct tolls using an IoT device at the tolling booths.",
    tags: [
      {
        name: "NodeMCU",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
      {
        name: "IoT",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB_Atlas",
        color: "yellow-text-gradient",
      },
    ],
    image: at_mongo_dashboard,
    extra_desc: ["AutoToller uses a NodeMCU device to be placed at the tollgates to remove the need for a manual toll collection system. Each device has its own \"road_id\" that tell where it is being placed, and which entrance of the toll road it is placed at.",
    "We have a NodeMCU as the base IOT device. It has an ultrasonic sensor and a camera. When a vehicle comes near enough, the ultrasonic sensor is used to judge its distance. Once it comes close, the nodeMCU uses the camera to get a photo and read the license plate on the vehicle. It does so by using OpenCV to find the number plate using Canny Edge detection and Contour detection. Then it uses easyocr to perform OCR on the license plate and get this text.",
    "The NodeMCU then sends the road_id data which denotes what road it has been placed on, entry_device on whether its at one entrance or the other, and the license_plate which has the license plate number of the vehicle, to a express JS Web server that is a RESTful API hosted on the Render.com Cloud. This API then sends this data for storage on the MongoDB Atlas Database for storage.","The NodeMCU serves as the main controller unit of our project, using the ultrasonic sensor to detect how far a vehicle is and a camera for the license plate detection. We chose to go with a webcam connected to the laptop that sends the license plate data to the NodeMCU using a websocket.",
    "This was a team project for our IoE mini project. I ideated and created the entire architecture and flow for an automatic tolling system. I designed the entire system, and planned out the work. I also build all the components. My teammates helped with the documentation and reports necessary."
  ],
    more_images: [autoteller_setup,
      at_render_cloud,
      at_mongo_dashboard,
      at_mongo_storage,],
    source_code_link: "https://github.com/",
  },
  {
    name: "ExploAR",
    description:
      "Built an educational app for school students where they can visualize their subjects with the help of AR Technology.",
    tags: [
      {
        name: "Unity 3D",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },
      {
        name: "ARCore",
        color: "pink-text-gradient",
      },
      {
        name: "ARFoundation",
        color: "orange-text-gradient",
      },
    ],
    image: hmanadventures,
    extra_desc:["ExploAR is a work-in-progress AR Education Application that teaches concepts in Augmented Reality. It visualizes the concepts with animations, 3D models and interactions and runs on any android Phone that has ARCore supported"],
    more_images: ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg", "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=sph"],
    source_code_link: "https://github.com/",
  },
  {
    name: "GreetAR - AR Greeting Card",
    description:
      "An AR based application that scans an image target then plays certain animations to wish someone for their birthday.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Vuforia",
        color: "green-text-gradient",
      },
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
      {
        name: "Canva",
        color: "orange-text-gradient",
      },
    ],
    image: greetAR,
    extra_desc: ["GreetAR is an AR greeting card made to be a special gifting option for your loved ones. Greeting cards are one of the most commonly gifted options during birthdays and special occasions. Adding a more personalized touch to it using 3D models and animated options is a good way to add a unique twist on it.",
    "I originally came up with the idea for a friend's birthday. I made 3D models and animations using Blender and Unity and used the Vuforia plugin for adding Augmented Reality quickly. I created the animations and models to show some of our memories and inside jokes.",
    "For a more general purpose application, I added Fireworks using Visual Effects Graph and 3D text from Blender to wish someone a birthday.",
    "I am currently planning and researching on adding more customisation options and maybe a website to create similar Greeting Card experiences, where I can let the users choose 3D options and the texts on the Greeting Card.",
    "I used <b>Unity</b> for the 3D development engineer, Vuforia Plugin for quickly adding Image Target based Augmented Reality and Blender for making 3D models for the application. The Greeting Card was designed in Canva."
  ],
    more_images: [greetAR1, greetAR2, greetAR3],
    source_code_link: "https://github.com/",
  },
  {
    name: "H-man Adventures",
    description:
      "A 2D Platformer made in Unity3D. The game had pixel-art styled graphics. Pixel art was made using Pixilart.",
    tags: [
      {
        name: "Unity",
        color: "blue-t  ext-gradient",
      },
      {
        name: "Pixilart",
        color: "green-text-gradient",
      },
    ],
    image: hmanadventures1,
    more_images: [hmanadventures,
      hmanadventures1,
      hmanadventures2,
      hmanadventures3,
      hmanadventures4,
      hmanadventures5,
      hmanadventures6],
    extra_desc: ["H-Man’s Adventure is a 2D Platformer made in Unity3D. The game had pixel-art styled graphics. Pixel art was made using Pixilart. The player, character and item arts were custom made in pixilart.",
    "I used Unity Engine to design the game. The idea I had in mind was to give the player an end objective to get to and finish the level, but to do this they had to collect a specific item hidden in the level. This specific item would be away from the path the game directs you on, and takes some additional platforming to get to.",
    "This game was originally inspired by a birthday gift for a friend of mine, and then improved upon a little. As someone who loves to work with visual technologies and game development, I made this game as a sort of tribute to one of my closest friends, who helps us out a lot.",
    "The background and level sprites are taken from a <a style=\"color : blue;text-decoration:underline\" href=\"https://free-game-assets.itch.io/free-industrial-zone-tileset-pixel-art\">Free Industrial Zone Tileset pack by CraftPix</a> from itch.io. The beautiful background music is by <a style=\"color : blue;text-decoration:underline\" href=\"https://xdeviruchi.itch.io/8-bit-fantasy-adventure-music-pack\">xdeviruchi's 8-bit-fantasy-adventure-music-pack</a>."
  ],
    source_code_link: "https://github.com/",
  },
];

export { skills, technologies, experiences, projects };