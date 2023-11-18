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
    title: "Projects",
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
    ]
  }
];

const projects = [
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
    extra_desc:"ExploAR is a work-in-progress AR Education Application that teaches concepts in Augmented Reality. It visualizes the concepts with animations, 3D models and interactions and runs on any android Phone that has ARCore supported",
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
    image: hmanadventures,
    extra_desc: "GreetAR is an AR greeting card made to be a special gifting option for your loved ones. Greeting cards are one of the most commonly gifted options during birthdays and special occasions. Adding a more personalized touch to it using 3D models and animated options is a good way to add a unique twist on it. I originally came up with the idea for a friend’s birthday. I made 3D models and animations using Blender and Unity and used the Vuforia plugin for adding Augmented Reality quickly. I created the animations and models to show some of our memories and inside jokes. For a more general purpose application, I added Fireworks using Visual Effects Graph and 3D text from Blender to wish someone a birthday. I am currently planning and researching on adding more customisation options and maybe a website to create similar Greeting Card experiences, where I can let the users choose 3D options and the texts on the Greeting Card. I used Unity for the 3D development engineer, Vuforia Plugin for quickly adding Image Target based Augmented Reality and Blender for making 3D models for the application. The Greeting Card was designed in Canva.",
    more_images: ["https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0="],
    source_code_link: "https://github.com/",
  },
  {
    name: "H-man’s Adventure",
    description:
      "A 2D Platformer made in Unity3D. The game had pixel-art styled graphics. Pixel art was made using Pixilart.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Pixilart",
        color: "green-text-gradient",
      },
    ],
    image: hmanadventures,
    extra_desc: "GreetAR is an AR greeting card made to be a special gifting option for your loved ones. Greeting cards are one of the most commonly gifted options during birthdays and special occasions. Adding a more personalized touch to it using 3D models and animated options is a good way to add a unique twist on it. I originally came up with the idea for a friend’s birthday. I made 3D models and animations using Blender and Unity and used the Vuforia plugin for adding Augmented Reality quickly. I created the animations and models to show some of our memories and inside jokes. For a more general purpose application, I added Fireworks using Visual Effects Graph and 3D text from Blender to wish someone a birthday. I am currently planning and researching on adding more customisation options and maybe a website to create similar Greeting Card experiences, where I can let the users choose 3D options and the texts on the Greeting Card. I used Unity for the 3D development engineer, Vuforia Plugin for quickly adding Image Target based Augmented Reality and Blender for making 3D models for the application. The Greeting Card was designed in Canva.",
    more_images: [],
    source_code_link: "https://github.com/",
  },
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
    image: hmanadventures,
    extra_desc: "GreetAR is an AR greeting card made to be a special gifting option for your loved ones. Greeting cards are one of the most commonly gifted options during birthdays and special occasions. Adding a more personalized touch to it using 3D models and animated options is a good way to add a unique twist on it. I originally came up with the idea for a friend’s birthday. I made 3D models and animations using Blender and Unity and used the Vuforia plugin for adding Augmented Reality quickly. I created the animations and models to show some of our memories and inside jokes. For a more general purpose application, I added Fireworks using Visual Effects Graph and 3D text from Blender to wish someone a birthday. I am currently planning and researching on adding more customisation options and maybe a website to create similar Greeting Card experiences, where I can let the users choose 3D options and the texts on the Greeting Card. I used Unity for the 3D development engineer, Vuforia Plugin for quickly adding Image Target based Augmented Reality and Blender for making 3D models for the application. The Greeting Card was designed in Canva.",
    more_images: [],
    source_code_link: "https://github.com/",
  },
];

export { skills, technologies, experiences, projects };