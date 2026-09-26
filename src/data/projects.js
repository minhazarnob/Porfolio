
import project3 from "../assets/images/projects/project3.jpeg";
import project5 from "../assets/images/projects/project5.jpg";
import project6 from "../assets/images/projects/project6.jpg";
import project4 from "../assets/images/projects/project4.jpg";
import project8 from "../assets/images/projects/project8.avif";

export const projects = [
    {
        id: 1,
        title: "Ecommerce Platform",
        description: "A fullstack Ecommerce platform for browsing, ordering, and delivering fresh dairy and milk products with ease",
        image: project3,
        category: "Backend project",
        technologies: ["React","Django","MySQL","BootstrapCSS"],
        demoUrl: "https://timetoprogrma.com/projects",
        githubUrl:"https://github.com/minhazarnob/Django_Ecommerce"

    },
    {
        id: 2,
        title: "Student Study Portal",
        description: "A full-stack web platform that lets students access courses, track progress, manage assignments, and collaborate",
        image: project5,
        category: "Backend project",
        technologies: ["React","Django","MySql","BootstrapCSS"],
        demoUrl: "https://timetoprogrma.com/projects",
        githubUrl:"https://github.com/minhazarnob/Student_Study_Portal"
    },
    {
        id: 3,
        title: "Weather Application",
        description: "A weather application that delivers real-time forecasts and interactive climate data through a clean, responsive interface",
        image: project6,
        category: "Frontend project",
        technologies: ["React","JavaScript","BootstrapCSS"],
        demoUrl: "https://timetoprogrma.com/projects",
        githubUrl:"https://github.com/minhazarnob/Weather-App"

    },
    {
        id: 4,
        title: "Collab Research",
        description: "A research platform for discovering, organizing,citing academic papers,track ongoing studies, and collaborate with peers",
        image: project4,
        category: "Frontend project",
        technologies: ["React","JavaScript","BootstrapCSS"],
        demoUrl: "https://timetoprogrma.com/projects",
        githubUrl:"https://github.com"

    },
    {
        id: 5,
        title: "AI-chatbot",
        description: "An AI-powered chatbot that delivers instant, intelligent conversations and smart assistance for everyday queries.",
        image: project8,
        category: "Fullstack project",
        technologies: ["React","Django","MongoDB","Stripe"],
        demoUrl: "https://timetoprogrma.com/projects",
        githubUrl:"https://github.com"

    },
];
export const categories = ["All","Fullstack project","Frontend project","Backend project"];