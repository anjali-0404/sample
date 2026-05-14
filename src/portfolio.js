/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Drashti Gajera",
  title: "Hi all, I'm Drashti",
  subTitle: emoji(
    "Passionate Computer Engineering student focused on Flutter app development, modern web technologies, and creative problem-solving. Experienced in developing responsive applications and eager to build impactful digital solutions with clean UI/UX and scalable architecture."
  ),
  resumeLink: "/resume.pdf", // Link to your local resume
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dsgajera2005",
  linkedin: "https://www.linkedin.com/in/drashti-gajera-509a3137b",
  gmail: "dsgajera2005@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "COMPUTER ENGINEERING STUDENT | FLUTTER DEVELOPER | WEB DEVELOPER",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Building cross-platform mobile applications using Flutter"),
    emoji("⚡ Creating responsive web designs with modern CSS and JavaScript")
  ],

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fab fa-google" // FontAwesome doesn't have a direct flutter icon in older versions, using google or mobile
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Madhuben and Bhanubhai Patel Institute of Technology, Anand",
      logo: "",
      subHeader: "B.Tech in Computer Engineering",
      duration: "2024 – 2027",
      desc: "CGPA: 7.63/10",
      descBullets: []
    },
    {
      schoolName: "Bhagwan Mahavir Polytechnic, Surat",
      logo: "",
      subHeader: "Diploma in Computer Engineering",
      duration: "2021 – 2024",
      desc: "SGPA: 8.81 | CGPA: 7.92",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Flutter Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Web Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming (Python/PHP)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern Developer",
      company: "Opus Technologies",
      companylogo: "",
      date: "Jan 2024 – May 2024",
      desc: "Developed a mobile application using Flutter for organic vegetable and fruit access. Worked on responsive UI and cross-platform development. Used JavaScript and CSS for frontend integration.",
      descBullets: []
    },
    {
      role: "Intern App Developer",
      company: "Techsevin Solution LLP",
      companylogo: "",
      date: "Sep 2022",
      desc: "Assisted in mobile application development tasks. Collaborated on app functionality and UI improvements.",
      descBullets: []
    }
  ]
};

// Big projects section

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: "",
      projectName: "Farmer: The Organic Store",
      projectDesc: "Built a Flutter-based mobile application for customers to access organic fruits and vegetables. Demonstrated adaptability in cross-platform development using Flutter, CSS, and JavaScript.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/dsgajera2005"
        },
        {
          name: "Live Demo",
          url: "#"
        }
      ]
    }
  ],
  display: true
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const achievementSection = {
  display: false
};

const blogSection = {
  display: false
};

const talkSection = {
  display: false
};

const podcastSection = {
  display: false
};

const twitterDetails = {
  userName: "dsgajera2005",
  display: false
};

const resumeSection = {
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "7265987063",
  email_address: "dsgajera2005@gmail.com"
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
