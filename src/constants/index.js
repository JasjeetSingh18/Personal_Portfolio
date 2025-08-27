import {
  c,
  python,
  java,
  javascript,
  html,
  css,
  reactjs,
  git,
  Kumon,
  MBA,
  AMACSS,
  StemRise,
  GradeCalc,
  MazeGame,
  Codle,
  SafeApp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Code Instructor",
    company_name: "Stem Rise",
    icon: StemRise,
    iconBg: "#161329",
    date: "Aug 2025 - Present",
    points: [
      "Established and led a student-run Basketball Founders Club—developing program curricula, coordinating facility bookings, and recruiting a 20-member roster to foster skill development and team cohesion.",
      "Leveraged attendance logs and game statistics to analyze player performance, design targeted training drills, and deliver personalized feedback that drove measurable improvements on and off the court.",
    ],
  },
  {
    title: "Director of Technology",
    company_name:
      "The Association of Mathematical and Computer Science Students (AMACSS)",
    icon: AMACSS,
    iconBg: "#161329",
    date: "Aug 2025 - Present",
    points: [
      "Established and led a student-run Basketball Founders Club—developing program curricula, coordinating facility bookings, and recruiting a 20-member roster to foster skill development and team cohesion.",
      "Leveraged attendance logs and game statistics to analyze player performance, design targeted training drills, and deliver personalized feedback that drove measurable improvements on and off the court.",
    ],
  },
  {
    title: "Teaching Assistant/Grader",
    company_name: "Kumon Math and Reading",
    icon: Kumon,
    iconBg: "#161329",
    date: "Oct 2023 - Feb 2024",
    points: [
      "Acquired hands-on experience with the Kumon Method, delivering structured, incremental lessons in mathematics and reading while adapting pacing to each student’s learning style.",
      "Also honed skills in progress monitoring and data-driven coaching, analyzing performance metrics to identify gaps and implement targeted instructional interventions.",
    ],
  },
  {
    title: "Co-Founder of Markham District Basketball Association",
    company_name: "Markham District High School",
    icon: MBA,
    iconBg: "#161329",
    date: "Jan 2023 - June 2024",
    points: [
      "Established and led a student-run Basketball Founders Club—developing program curricula, coordinating facility bookings, and recruiting a 20-member roster to foster skill development and team cohesion.",
      "Leveraged attendance logs and game statistics to analyze player performance, design targeted training drills, and deliver personalized feedback that drove measurable improvements on and off the court.",
    ],
  },
];

export const projects = [
  {
    name: "Safe App",
    description:
      "Safe App is a Android application designed for Victim Services Toronto for clients seeking support and resources. The App provides a range of features including a safe user document storage, resource directory, and safety planning tools for users experiencing abusive relationships.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Android", color: "blue-text-gradient" },
      { name: "Git", color: "green-text-gradient" },
      { name: "Cross-functional Work", color: "pink-text-gradient" },
    ],
    image: SafeApp,
    source_code_link: "https://github.com/Shuayub/safe-plan",
  },
  {
    name: "Codle",
    description:
      "Codle is a web-based puzzle game inspired by Wordle, built with modern web technologies. Players must solve the daily leetCode problem using the given block codes within 3 attempts, showcasing skills in JavaScript, frontend development, and interactive UI design.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Firebase", color: "blue-text-gradient" },
      { name: "Git", color: "green-text-gradient" },
      { name: "Cross-functional Work", color: "pink-text-gradient" },
    ],
    image: Codle,
    source_code_link: "https://codle.pages.dev",
  },
  {
    name: "Grade Calculator",
    description:
      "Web-based platform that allows users to calculate their average in a course or the needed final grade to achieve their targer grade.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: GradeCalc,
    source_code_link: "https://github.com/JasjeetSingh18/Grade-Calculator",
  },
  {
    name: "Mind Maze",
    description:
      "A C-based maze game where players navigate through a randomly generated maze while the computer solves it using the Breadth-First Search algorithm, showcasing skills in linked lists, graph traversal, and memory management.",
    tags: [
      { name: "C", color: "blue-text-gradient" },
      { name: "SDL2", color: "green-text-gradient" },
    ],
    image: MazeGame,
    source_code_link: "https://github.com/JasjeetSingh18/Maze_Game",
  },
];
