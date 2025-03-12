// This data component is used to store the content of the blogs that are displayed on the search page. The data is stored in an array of objects. 
import geolocation from "../images/geolocation-api.jpg";
import distanceTwoLoc from "../images/distance-two-locations.jpg";
import svgAdvantages from "../images/svg-advantages-and-disadvantages.jpg";
import jsIcon from "../images/js-icon.png";
import gameIcon from "../images/game-icon.jfif";
import techIcon from "../images/tech-logo.jfif";
import psychIcon from "../images/psych-logo.png";
import techImage from "../images/technology-image.jfif";
import jsImage from "../images/javascript-image.jfif";
import aiImage from "../images/ai-image.jfif";

export const BlogContent = [
  {
    link: "https://saketrobotics910.blogspot.com/",
    img: svgAdvantages,
    icon: techIcon,
    name: "EdTech Blog Center",
    excerpt: `This Blogspot contains all the information regarding latest technological advancements as well some educational tips so as for one to improve in that aspect `,
    category: "Technology",
    date: "15 hours ago"
  },
  {
    link: "https://learnaimldswithsk.hashnode.dev/",
    img: aiImage,
    icon: techIcon,
    name: "Honors of AI/ML/DS",
    excerpt: `A Blogpost for covering concepts related to Artificial Intelligence, Machine Learning, and Data Science. This blogpost is helpful for those who are learning AI/ML/DS. It also contains bonus content such as Generative AI and RAG`,
    category: "Technology",
    date: "2 hours ago"
  },
  {
    link: "https://saketkhopkar567.blogspot.com/",
    img: distanceTwoLoc,
    icon: psychIcon,
    name: "Psych Time",
    excerpt: `This Blogpost contains all about Psychology, thought and thinking one has to go through. Documented as an interest towards the field and willingness to explore it further.`,
    category: "Psychology",
    date: "2 days ago"
  },
  {
    link: "https://saketsk.hashnode.dev/",
    img: techImage,
    icon: techIcon,
    name: "Hashnode Tech Blog",
    excerpt: `A technical blog space on blogging platform named Hashnode, where is write technical blogs on various topics and technologies.`,
    category: "Technology",
    date: "12 days ago",
  },
  {
    link: "https://jsprep.hashnode.dev/",
    img: jsImage,
    icon: jsIcon,
    name: "JavaScript Questions for Interview Preparation",
    excerpt: `A Blogpost where I cover JavaScript questions which are asked in interviews. This blogpost is helpful for those who are preparing for JavaScript interviews.`,
    category: "Coding Interviews",
    date: "6 days ago"
  },
  {
    link: "https://saketskgames.blogspot.com/",
    img: geolocation,
    icon: gameIcon,
    name: "World of E-Sports",
    excerpt: `A Blogpost for E-Sports enhusiasts which focuses on various things about Gaming and its related resources. `,
    category: "Games",
    date: "1 days ago"
  },
];
