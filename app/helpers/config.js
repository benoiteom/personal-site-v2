export const config = {
  SIM_RESOLUTION: 128,
  DYE_RESOLUTION: 1024,
  CAPTURE_RESOLUTION: 512,
  DENSITY_DISSIPATION: 6,
  VELOCITY_DISSIPATION: 0.6,
  PRESSURE: 0.8,
  PRESSURE_ITERATIONS: 20,
  CURL: 0,
  SPLAT_RADIUS: 0.004,
  SPLAT_FORCE: 20000,
  SHADING: true,
  COLORFUL: false,
  COLOR_UPDATE_SPEED: 10,
  PAUSED: false,
  BACK_COLOR: { r: 255, g: 255, b: 255 },
  TRANSPARENT: true,
  BLOOM: false,
  BLOOM_ITERATIONS: 6,
  BLOOM_RESOLUTION: 256,
  BLOOM_INTENSITY: 0.05,
  BLOOM_THRESHOLD: 0.8,
  BLOOM_SOFT_KNEE: 0.7,
  SUNRAYS: true,
  SUNRAYS_RESOLUTION: 196,
  SUNRAYS_WEIGHT: 1.0,
};

export const experience = [
  {
    company: "Busify",
    title: "Full Stack Web Developer",
    date: "Present",
    data: [
      {
        title: "AWS Certified",
        subTitle: "AWS Certified Cloud Practitioner - Associate",
      },
      { subTitle: "Promoted Nov 2022" },
    ],
    details: "I currently hold a leading role here with responsibility working on frontend, backend, infrastructure, task management, contributing to designs, managing other developers, and resolving customer feedback.",
  },
  {
    company: "TATA Consultancy Services",
    title: "Junior Software Engineer",
    date: "Feb 2022",
    details: "Allocated to Boeing to monitor and support an internal Java application.",
  },
  {
    company: "University of Illinois Urbana-Champaign",
    title: "B.S. Computer Engineering",
    date: "May 2021",
    data: [
      { title: "Software Engineer", subTitle: "Oculo.AI", details: "Built an internal Python tool to accelerate the product's pipeline and improve ease of use." },
      { title: "Frontend Developer", subTitle: "All-Time Yachting", details: "Took on various tasks as a frontend developer to help the team." },
      { title: "Frontend Developer", subTitle: "MUS-ROVER", details: "Contributed to a machine learning research project." },
      { title: "IT Intern", subTitle: "John Deere", details: "Handled DevOps requests for all repositories and assisted in developing tests." },
    ],
  },
];

export const projects = [
  {
    title: ["Wayfinder.AI"],
    link: "https://wayfinder.benoiteom.com",
    colors: ["#72EFF1", "#25E0CD", "#EC52CA", "#FF3D60", "#7416EC"],
    desc: "An AI-powered travel assistant that helps users choose a destination, plan their itinerary, and manage their trips.",
    type: "Website",
    status: "In development",
    dates: "MAY 2025 - PRESENT",
    tech: [
      "Gemini API",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Supabase",
      "Vercel",
      "Maps & Weather API",
    ],
    images: [
      "/wayfinder-1.png",
      "/wayfinder-2.png",
    ],
  },
  {
    title: ["Black & White"],
    link: "https://blog.benoiteom.com",
    colors: ["#26D8D6", "#3591DC", "#5D65B4", "#D52828", "#000000"],
    desc: "A blogging website for my photography, project ideas, and anything else that comes to mind. Built with Next.js, Tailwind, and PostgreSQL.",
    type: "Website",
    status: "Completed",
    dates: "JAN 2025 - FEB 2025",
    tech: ["Next.js", "Tailwind", "PostgreSQL"],
    images: [
      "/b&w-1.png",
      "/b&w-2.png",
    ],
  },
  {
    title: ["Wordle", "FR"],
    link: "https://wordle.benoiteom.com",
    colors: ["#629F5B", "#C2AA52", "#FFFFFF", "#000000"],
    desc: "A Wordle clone for the French side of my family, it features a list of 365 french words and full Wordle functionality.",
    type: "Website",
    status: "Completed",
    dates: "JAN 2022",
    tech: ["Next.js", "JavaScript", "CSS"],
    images: [
      "/wordle-1.png",
      "/wordle-2.png",
    ],
  },
  {
    title: ["Teneez"],
    link: "https://teneez.com",
    colors: ["#F2B822", "#FFFFFF", "#000000"],
    desc: "A startup that gives users a place to rent the most exclusive sneakers. Cofounded by myself and a friend in my junior year of college, I was CTO and designer / frontend developer.",
    type: "Startup",
    status: "Closed",
    dates: "NOV 2019 - JUN 2021",
    tech: [
      "React",
      "Next.js",
      "React Native",
      "JavaScript",
      "MySQL",
      "Node.js",
      "AWS",
      "Stripe",
    ],
    images: [
      "/teneez-1.png",
      "/teneez-2.png",
    ],
  }
];

export const aboutMe = [
  "I pride myself in AI-enhanced hard work, a constant desire to learn, and a broad skill set. I have experience working across the entire pipeline, from idea to release, with projects to back it up. Lately, my choice of stack is Next.js with Tailwind, a Node.js backend, and PostgreSQL. I'm also trying to get back into mobile app development with React Native.",
  "Don't worry, I'm not all work. I love throwing myself into new hobbies and expanding on old ones. Some longer lasting interests include photography, fitness, and traveling. You might find me running, listening to an audiobook, or perfecting my homemade kombucha!",
  "Hope you like my website :)",
];

export const photos = [
  {
    location: "California",
    date: "2024",
    images: [
      "/DSCF2743.webp",
      "/DSCF2775.webp",
      "/DSCF2857.webp",
      "/DSCF2896.webp",
    ],
  },
  {
    location: "Portugal",
    date: "2024",
    images: [
      "/DSCF2557.webp",
      "/DSCF2624.webp",
      "/DSCF2655.webp",
      "/DSCF2690.webp",
    ],
  },
]
