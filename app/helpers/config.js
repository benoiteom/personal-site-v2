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
    company: "CharterUP",
    title: "Full Stack Web Developer",
    date: "Present",
    data: [
      {
        title: "AWS Certified",
        subTitle: "AWS Certified Cloud Practitioner - Associate",
      },
    ],
    details: "I currently hold a leading role with responsibility working on frontend, backend, infrastructure, task management, contributing to designs, managing other developers, and resolving customer feedback. I've recently expanded into AI-powered enhancements and developer productivity tooling.",
  },
  {
    company: "TATA Consultancy Services",
    title: "Junior Software Engineer",
    date: "Feb 2022",
    details: "Allocated to a client to monitor and support an internal Java application.",
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
    desc: "An AI-powered travel assistant that helps users choose a destination, plan their itinerary, and manage their trips. Uses the Gemini API for fast, accurate responses.",
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
    link: "https://blog.benoiteom.com/view/1544840e-4da0-4f50-b5ec-2cfdf7ea51fe/en/Blog",
    colors: ["#26D8D6", "#3591DC", "#5D65B4", "#D52828", "#000000"],
    desc: "A blogging website for anyone to create a simple blog. I use it for my photography, project ideas, providing life updates to family, and my thoughts on AI and tech.",
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
    desc: "A Wordle clone I made during the pandemic for the French side of my family. It features a list of 365 french words and full Wordle functionality including stats and sharing.",
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
    desc: "A startup I cofounded in my junior year of college, we'd rent you the best sneakers for a weekend. I held the roles of CTO, designer, frontend developer, and engineering manager.",
    type: "Startup",
    status: "Closed",
    dates: "NOV 2019 - JUN 2021",
    tech: [
      "Next.js",
      "MySQL",
      "AWS",
      "Stripe",
      "Node.js",
    ],
    images: [
      "/teneez-1.png",
      "/teneez-2.png",
    ],
  }
];

export const aboutMe = [
  "I pride myself in hard work, a constant desire to learn, and a broad skill set. I have experience working across the entire pipeline, from ideation to release, with projects to back it up. Lately, my choice of stack is Next.js with Tailwind, a Node.js backend, and PostgreSQL. I'm also getting back into mobile app development a bit with React Native. If you'd like to know where I stand on AI, check out my blog!",
  "Don't worry, I'm not all work. I love throwing myself into new hobbies and expanding on old ones. Some longer lasting interests include photography, fitness, and traveling. You might find me running, listening to an audiobook, or out walking with my camera.",
  "Hope you like my website :)",
];

export const aboutStats = {
  favoriteFood: "Chocolate torte",
  coffeeOrTea: "Tea (or matcha)",
  musicType: "Indie",
  birthday: "Feb 1",
  languages: ["English", "French"],
};
