/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rubén Pacheco Caldera",
  title: "Hey there, I'm Rubén",
  subTitle: emoji(
    "A passionate Software Engineer 🚀💻 experienced in building APIs with Go / Python / NodeJS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/10Q9HQIh2iyC6pWy7WRE48_o97rTrp3fH3BIZORBGS54/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rubeneezy",
  linkedin: "https://www.linkedin.com/in/ruben-p-c/",
  gmail: "rpachecocaldera@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Curious developer and tinkerer at heart who wants to explore every tech stack",
  skills: [
    emoji(
      "⚡ Design scalable, fault-tolerant architectures"
    ),
    emoji("⚡ Implement solutions for data storage in relational and non-relational DBMS"),
    emoji(
      "⚡ Inspect server code for speed optimization"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "nosql-database",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Google Cloud Platform",
      fontAwesomeClassname: "fab fa-google"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pomona College",
      logo: require("./assets/images/pomonalogo.jpeg"),
      subHeader: "Bachelor of Arts in Computer Science",
      duration: "September 2017 - May 2021",
      desc: "Took courses in:",
      descBullets: ["Machine Learning","Neural Networks", "Data Structures", "Operating Systems", "Databases", "and more"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Uber",
      companylogo: require("./assets/images/uber-logo.png"),
      date: "June 2021 – Present",
      desc: "Backend engineer on the Driver team.",
      descBullets: [
        "Design scalable, fault-tolerant architectures",
        "Design and implement APIs",
        "Implement data management solutions"
      ]
    },
    {
      role: "AI Engineer Intern",
      company: "Yoodli",
      companylogo: require("./assets/images/YoodliLogo.png"),
      date: "February 2021 – May 2021",
      descBullets: [
        "Trained a Recurrent Neural Network (RNN) and Convolutional Neural Network (CNN) to detect disfluencies in speech",
        "Gathered and cleaned real-world data via Amazon Mechanical Turk and other data sources",
        "Developed multiple APIs for mobile clients using the Google Cloud tech stack",
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Uber",
      companylogo: require("./assets/images/uber-logo.png"),
      date: "June 2019 – August 2020",
      descBullets: [
        "Architected and developed backend and database for a new endpoint in a Driver API to waitlist drivers.",
        "Developed the backend service using Golang for an Uber Eats app feature (to be released).",
        "Developed a map visualization web app using HTML/CSS & Javascript which surpassed 60x faster human detection of incorrect machine learning generated data."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Startups and companies I've helped create",
  projects: [
    {
      image: require("./assets/images/YoodliLogo.png"),
      projectName: "Yoodli",
      projectDesc: "Yoodli provides AI-powered feedback on your communication skills to help you ace your upcoming presentation.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.yoodli.ai/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/coambition.jpeg"),
      projectName: "Coambition Co.",
      projectDesc: "Co-founded an online fashion accessories shop",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.facebook.com/CoAmbition/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Daniels Fund Scholar",
      subtitle:
        "Full-ride scholarship to any university in the U.S.",
      image: require("./assets/images/danielsfund.png"),
      footerLink: [
        {
          name: "More details",
          url: "https://www.danielsfund.org/"
        }
      ]
    },
    {
      title: "Stanford Pre-Collegiate Summer Institute",
      subtitle:
        "Selected out of 10,000 applicants",
      image: require("./assets/images/stanfordLogo.png"),
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I learn.",

  blogs: [
    {
      url: "https://www.linkedin.com/pulse/how-make-optimal-decisions-rub%C3%A9n-pacheco-caldera/",
      title: "How to Use Algorithms to Make Optimal Day-to-Day Decisions",
      description:
        "How can mathematics help us take a strategic approach to decision making?"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Conferences",
  subtitle: emoji(
    "I LOVE TO CONNECT WITH OTHERS AT THESE CONFERENCES"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📩"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "rpachecocaldera@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
