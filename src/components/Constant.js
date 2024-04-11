//Sensical Import
import sensicalOverLay from '../assets/img/sensical-home.png';
import sensical1 from '../assets/img/sensical-home-1.png';
import sensical2 from '../assets/img/sensical-home-2.png';
import sensical3 from '../assets/img/sensical-home-3.png';
import sensical4 from '../assets/img/sensical-home-4.png';
import sensical5 from '../assets/img/sensical-home-5.png';

//Wijs Import
import wijsOverLay from '../assets/img/wijsMain.png';
import wijs1 from '../assets/img/wijs1.png';
import wijs2 from '../assets/img/wijs2.png';
import wijs3 from '../assets/img/wijs3.png';
import wijs4 from '../assets/img/wijs4.png';
import wijs5 from '../assets/img/wijs5.png';
import wijs6 from '../assets/img/wijs6.png';

//Karl Import
import karlOverLay from '../assets/img/karlMain.png';
import karl1 from '../assets/img/karl1.png';
import karl2 from '../assets/img/karl2.png';
import karl3 from '../assets/img/karl3.png';

// Skills import
import html_icon from '../assets/img/html_icon.png';
import css_icon from '../assets/img/css_icon.png';
import react_icon from '../assets/img/react_icon.png';
import agile_logo from '../assets/img/agile-logo.jpg';
import jira_logo from '../assets/img/jira_logo.png';
import github from '../assets/img/github.png';
import wordpress from '../assets/img/wordpress.svg';
import problem_solving from '../assets/img/problem-solving.png';
import rest_api_icon from '../assets/img/rest-api-icon.png';
import figma_icon from '../assets/img/figma_icon.png';
import nodeJS_logo from '../assets/img/nodeJS_logo.svg';
import javascript_logo from '../assets/img/javascript_logo.png';
import vue_logo from '../assets/img/vue.png';
import laravel_logo from '../assets/img/laravel.png';

//Living Luscious images
import LL1 from '../assets/img/LL1.png';
import LL2 from '../assets/img/LL2.png';
import LL3 from '../assets/img/LL3.png';
import LL4 from '../assets/img/LL4.png';
import LL5 from '../assets/img/LL5.png';

//zigmyster magnets images
import zig1 from '../assets/img/zig1.png';
import zig2 from '../assets/img/zig2.png';
import zig3 from '../assets/img/zig3.png';
import zig4 from '../assets/img/zig4.png';
import zig5 from '../assets/img/zig5.png';

export const PROJECTS = [
  {
    imgUrls: [wijs3, wijs5, wijs2, wijs4, wijs1, wijs6, wijsOverLay],
    title: 'Wijs',
    subtitle: 'Power your work with health & safety intelligence',
    overlayDes: 'lead Dev, Develop, Front-End & Design',
    overlayUrl: wijsOverLay,
    description:
      'CONNECT YOUR H&S WITH SMART INTEGRATION: Your business wasn`t built with silos and your health & safety shouldn`t be either. Unlike other software systems, Wijs talks directly to all parts of your H&S management, removing bottlenecks, information gaps and delays.',
    visitUrl: 'https://wijs.ca/',
  },
  {
    imgUrls: [sensical3, sensical5, sensical2, sensical4, sensical1, sensicalOverLay],
    title: 'Sensical Tv',
    subtitle: 'Kids Streaming Platform',
    overlayDes: 'Web, Mobile and Tv lead Developer',
    overlayUrl: sensicalOverLay,
    description: "A free kid-focused streaming service offering thousands of entertaining, age-appropriate short-form videos and podcasts for ages 2–12 that support kids' social, emotional, and cognitive development.",
    visitUrl: 'https://sensical.tv/',
  },
  {
    imgUrls: [karl1, karl2, karl3, karlOverLay],
    title: 'Karl-Yann Assah',
    subtitle: 'Karl-Yann Assah Personal portfolio',
    overlayDes: 'Full Management, Design and Development',
    overlayUrl: karlOverLay,
    description:
      'Meet Karl Yann Assah, a dynamic and accomplished young professional whose talents span a multitude of industries. Karl has left an indelible mark in fields as diverse as Management Consulting, Technology, Finance, Fashion, Non-profit, and Startups.',
    visitUrl: 'https://karlyannassah.com/',
  },
  {
    imgUrls: [LL1, LL2, LL3, LL4, LL5],
    title: 'Living Luscious',
    subtitle: 'See The Treasure Hidden Inside Our Baskets',
    overlayDes: 'Design & Develop',
    overlayUrl: LL1,
    description: 'Living Luscious is an online store specializing in gift baskets and custom gifts. From Thoughtful Gift Baskets to Standalone Treasures: Unforgettable Gifts to Surprise and Delight',
    visitUrl: 'https://geekpowertech.com/living-luscious/',
  },
  {
    imgUrls: [zig1, zig2, zig3, zig4, zig5],
    title: 'Zigmyster Magnets',
    subtitle: 'We Supply Magnets of all Kinds',
    overlayDes: 'Develop & Design',
    overlayUrl: zig1,
    description:
      'Zigmyster Magnets (Canada) manufactures and supplies standard, custom and OEM-quality magnetic assemblies and Rare Earth magnets. They provide customers with quality magnetic products and service the best magnets in Canada. They also offer top-quality precision machining of steel plastic, aluminum, brass, and flexible magnetic materials.',
    visitUrl: 'https://zigmystermagnets.com/',
  },
];

export const Skills = [
  {
    name: 'HTML',
    img: html_icon,
  },
  {
    name: 'CSS',
    img: css_icon,
  },
  {
    name: 'React',
    img: react_icon,
  },
  {
    name: 'Vue',
    img: vue_logo,
  },
  {
    name: 'Wordpress',
    img: wordpress,
  },
  {
    name: 'Javascript',
    img: javascript_logo,
  },
  {
    name: 'Laravel',
    img: laravel_logo,
  },
  {
    name: 'NodeJs',
    img: nodeJS_logo,
  },
  {
    name: 'UX/UI Design',
    img: figma_icon,
  },
  {
    name: 'REST API',
    img: rest_api_icon,
  },
  {
    name: 'Problem Solving',
    img: problem_solving,
  },
  {
    name: 'GitHub',
    img: github,
  },
  {
    name: 'Jira',
    img: jira_logo,
  },
  {
    name: 'Agile',
    img: agile_logo,
  },
];

export const AboutInfo = {
  label: <h2>Who is this guy?</h2>,
  description: (
    <>
      <p>
        I'm a web developer with a passion for crafting engaging and responsive web applications that make a difference. Fueled by a strong foundation in Computer Science (<strong>University of Toronto!</strong>), I've spent the past 3+ years honing my skills
        across diverse platforms – from building seamless mobile experiences to optimizing for Xbox and Smart TV. My expertise lies in React.js, but I also possess a versatile skillset that includes Vue.js, WordPress, and other relevant coding languages,
        allowing me to adapt to your specific project needs.
      </p>
      <p>
        <strong>
          <u>Beyond technical skills</u>
        </strong>
        , I thrive in both collaborative and independent environments. My strong communication skills and problem-solving mindset ensure I can effectively understand client and stakeholder expectations, tackle complex technical challenges, and deliver
        high-quality solutions that exceed their goals.
      </p>
      <p>
        <strong>
          <u>A lifelong learner</u>
        </strong>
        , I'm constantly expanding my skillset and staying up-to-date with the latest web development trends. I'm also an enthusiastic team player who brings a positive and collaborative spirit to every project.
      </p>
      <p>
        <strong>
          <u>Ready to build something amazing together?</u>
        </strong>{' '}
        Connect with me to discuss your project needs or explore potential partnerships.
      </p>
    </>
  ),
  subLabel: (
    <h5>
      <u>Akeem Brisco</u>: Software Developer & Technology Enthusiast!
    </h5>
  ),
};
