// content.js
// Centralized content file for the Google-style portfolio website
// Each entry represents a "search result" with title, link, and snippet

export const Content = [
  // 🧍 ABOUT SECTION
  {
    category: "about",
    link: `${window.location.origin}/about#me`,
    name: "Who is Saket Khopkar?",
    excerpt: `A Node.js and JavaScript developer passionate about creating AI-driven, scalable, and high-performance web solutions. 
    I enjoy blending logical problem-solving with creativity to build applications that are both intelligent and intuitive.`
  },
  {
    category: "about",
    link: `${window.location.origin}/about#skills`,
    name: "Core Skills & Technical Expertise",
    excerpt: `Node.js, Express.js, React, JavaScript (ES6+), Python, REST APIs, MongoDB, MySQL, AI/LLM Integrations, LangChain, CrewAI and Generative AI Applications.`
  },

  // 💼 WORKS SECTION
  {
    category: "works",
    link: "https://github.com/SAKET-SK",
    name: "GitHub - Saket Khopkar",
    excerpt: `My central repository for open-source projects, code experiments, and collaborations. Explore numerous projects and technical write-ups here.`
  },
  {
    category: "works",
    link: `${window.location.origin}`,
    name: "Gfolio - A Google-style Portfolio",
    excerpt: `A personal web project that mimics Google Search. Built with HTML, CSS, and React to combine simplicity with playful interactivity.`
  },
  {
    category: "works",
    link: "https://saket-sk.github.io/",
    name: "Personal Website",
    excerpt: `My classic portfolio — designed and developed from scratch with custom hover effects, unique layouts, and an integrated blog.`
  },
  {
    category: "works",
    link: "https://www.ijrar.org/viewfull.php?&p_id=IJRAR22A2084",
    name: "Research Paper - Predicting Vehicle Health & Driving Characteristics",
    excerpt: `A published research project discussing predictive models for vehicle health assessment and driver behavior analysis.`
  },
  {
    category: "works",
    link: "https://github.com/SAKET-SK/Data-Science-Lab",
    name: "My Ultimate Data Science and AI Repository",
    excerpt: `An extensive self-documented collection of AI/ML concepts, exercises, and real-world examples — created for learners and professionals alike.`
  },
  {
    category: "works",
    link: "https://github.com/SAKET-SK/FULL-STACK-WEBDEV-REPO",
    name: "Full Stack Web Development Repository",
    excerpt: `A comprehensive collection of full-stack web development projects, tutorials, and resources covering both frontend and backend technologies.`
  },
  {
    category: "works",
    link: "https://github.com/SAKET-SK/Programming-Aptitude-Interview-Prep",
    name: "Programming Aptitude & Interview Preperation by Saket",
    excerpt: `A curated collection of programming problems, solutions, and interview prep questions to help developers sharpen their coding skills.`
  },

  // ✍️ WRITING SECTION
  {
    category: "writing",
    link: "https://saketrobotics910.blogspot.com/",
    name: "TechTales - Education & Technology Blog",
    excerpt: `Articles exploring the latest in technology, innovation, and education — written to inspire curiosity and creative learning.`
  },
  {
    category: "writing",
    link: "https://saketkhopkar567.blogspot.com/",
    name: "Psych Time - Exploring Human Thought",
    excerpt: `A collection of writings about psychology, behavior, and emotional intelligence — a deep dive into the human mind.`
  },
  {
    category: "writing",
    link: "https://saketskgames.blogspot.com/",
    name: "World of E-Sports",
    excerpt: `A blog for e-sports enthusiasts — covering gaming trends, competitive insights, and the culture surrounding digital sports.`
  },

  // 🌐 SOCIAL SECTION
  {
    category: "social",
    link: "https://www.linkedin.com/in/saket-khopkar-336684198/",
    name: "LinkedIn - Saket Khopkar",
    excerpt: `Connect with me professionally, explore experiences, or collaborate on future opportunities.`
  }
];
