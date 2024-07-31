import sImage from './assets/images/d.jpeg'; // Adjust the path as necessary
import DImage from './assets/images/d.jpg'
import fImage from './assets/images/f.jfif'
const logotext = "SHRAVANA SHARMA";

const meta = {
    title: "SHRAVAN SHARMA",
    description: "I’m SHRAVAN SHARMA Web Developer _ Full stack developer, MCA Graduate",
};

const introdata = {
    title: "I’m SHRAVAN SHARMA ",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop react apps",
    },
    description: " Passionate full stack developer with experience in developing the web application with proficiency in front-end and back-end development",
    your_img_url: sImage, // Use the imported image here
};

const dataabout = {
    title: "About Myself",
    aboutme: "Passionate full stack developer with experience in developing the web application with proficiency in front-end and back-end development",
};

const Education = [
    {
        Course: "MCA",
        where: "NMAM Institute Of Technology",
        YOP: "2024",
        CGPA:"7.29"
    },
    {
        Course: "BCA",
        where: "SBC Karkala",
        YOP: "2022",
        CGPA:"7.68"
    },
   
];

const skills = [
    {
        name: "Python",
        value: 90,
    },
    {
        name: "Django",
        value: 85,
    },
    {
        name: "JavaScript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "SQL",
        value: 85,
    },
];

const experience = [
    {
        title: "Accolade Tech Solutions - Full stack developer",
        description: "Led development of AgroMart, a full-stack application using React for the frontend, Node.js and Express for thebackend, and MySQL for database management, enabling seamless integration and efficient data handling foragricultural product management..Implemented RESTful APIs to facilitate smooth data communication between the frontend and backend, ensuringoptimal user experience and data integrity in AgroMart.",
    },
   
];

const dataportfolio = [
    {
        img: DImage,
        description: "• Developed a website for a particular Jewellery shop to showcase and manage the Intelligent Jewel Guard Syste.",
       
    },
    {
        img: fImage,
        description: "Developed a job portal application using Android Studio, Firebase platforms to connect job seekers and job providers",
        
    },
    // Add more items as needed
];

const contactConfig = {
    YOUR_EMAIL: "shavanbalaje@gmail.com",
    YOUR_FONE: " 6362939171",
   
    YOUR_SERVICE_ID: "service_skshravan",
    YOUR_TEMPLATE_ID: "template_fg5hh1j",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
   
    instagram: "https://instagram.com",
    linkedin: "https://www.linkedin.com/in/shravan-sharma-u-786184279/",
    
};

export {
    meta,
    dataabout,
    dataportfolio,
   Education,
    skills,
    experience,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
