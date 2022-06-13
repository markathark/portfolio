import Sweetist from "../../components/images/sweetist/sweetist-web.png";
import MyAdvice from "../../components/images/myadvice/myadvice-web.png";
import PhoXicLo from "../../components/images/phoxiclo/phoxiclo-web.png";
import TheDailyMind from "../../components/images/thedailymind/thedailymind-web.png";
import Whatch from "../../components/images/whatch/whatch-web.png";

const Projects = [
  {
    num: "01",
    title: "Sweetist",
    desc: "Created a website for sweetist which is an online sweets and art ecommerce store and spearheaded the design of the brand.",
    cats: [
      "React",
      "Redux",
      "Mongoose",
      "Express",
      "Node",
      "eCommerce",
      "Heroku",
      "Stripe",
      "Full Stack",
    ],
    flip: true,
    links: [
      "https://sweetist-app.herokuapp.com/",
      "https://github.com/markathark/sweetist",
      "/sweetist",
    ],
    img: Sweetist,
  },
  {
    num: "02",
    title: "MyAdvice",
    desc: "MyAdvice is a blog/post web app, where anyone can share advice but posting, and also read and interact with others.",
    cats: [
      "React",
      "Context",
      "Mongoose",
      "Express",
      "Node",
      "MongoDB",
      "Blog",
      "Full Stack",
    ],
    links: [
      "https://myadvice-app.herokuapp.com/",
      "https://github.com/markathark/myadvice",
      "/myadvice",
    ],
    img: MyAdvice,
  },
  {
    num: "03",
    title: "Pho Xic Lo",
    desc: "Pho Xic Lo is a Vietnamese Restaurant, and I created a website to showcase their menu, and allow customers to order online.",
    cats: [
      "Next.js",
      "Redux",
      "Mongoose",
      "Express",
      "Node.js",
      "PayPal",
      "Vercel",
    ],
    flip: true,
    links: [
      "https://phoxiclo.vercel.app/",
      "https://github.com/markathark/phoxiclo",
      "/phoxiclo",
    ],
    img: PhoXicLo,
  },
  {
    num: "04",
    title: "The Daily Mind",
    desc: "The daily mind is a web app to keep track of and organize the recurring activities and data of our lives.",
    cats: ["React", "Web App", "Heroku"],
    links: [
      "http://thedailymind-app.herokuapp.com/",
      "https://github.com/markathark/thedailymind",
      "/thedailymind",
    ],
    img: TheDailyMind,
  },

  {
    num: "05",
    title: "Whatch",
    desc: "Whatch is a web app utilizing an external movie and tv show api for browsing and seeing what to watch.",
    cats: ["Movie API", "React", "SCSS", "Swiperjs"],
    links: [
      "https://whatch-app.herokuapp.com/",
      "https://github.com/markathark/whatch",
      "/whatch",
    ],
    flip: true,
    img: Whatch,
  },
];

export default Projects;
