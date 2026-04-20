function createStyles() {
    const style = document.createElement("style");
    style.textContent = `
        body {
            background: #071A2D;
        }
        .hero-section {
            text-align: center;
            padding: 50px;
            background: #0A2E4B;
            color: #fff;
        }
        .about-section, .skills-section, .projects-section, .certifications-section {
            padding: 20px;
            background: #0C3A5A;
            color: #fff;
            margin-bottom: 20px;
        }
        h1, h2 {
            color: #FFD700;
        }
        a {
            color: #FFD700;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        img {
        width: 200px;
        height: auto;
        margin-top: 10px;
        }
        @media (max-width: 600px) {
            .hero-section, .about-section, .skills-section, .projects-section, .certifications-section {
                padding: 10px;
            }
            img {
                width: 100%;
            }

        }
    `;
    document.head.appendChild(style);
}
createStyles();


const content = {
    hero: {
        title: "Welcome",
        subtitle: "I bring ideas to life"
    },

    about: {
        title: "About Me",
        text: "I am a creative junior Developer exploring modern web and python experiences"
    },
    
    skills: { 
        title: "Skills",
        programming: ["python", "HTML, CSS and JS"],
        MSOffice: ["word", "data analysis with Excel", "MS access", "MS publisher"],
        system: ["Command prompt", "bash"]
    },
    projects: {
        title: "Projects",
        list: [
            {
                name: "Js portifolio",
                description: "A simple portifolio website built with JavaScript",
                link: "https://github.com/yourusername/js-portifolio"
            },
            {
                name: "Rock, Paper, Scissors Game ",
                description: "A simple rock, paper, scissors game built with python",
                link: ""
            },
            {
                name: "Comming up: still loading...",
                description: "check my profile projects for more",
                link: "http://sololearn.com/learning/1073"
            }
        ]
    },
    certifications: {
        title: "Certifications",
        list: [
            {
                name: "Introduction to python",
                description: "A comprehensive course on Python programming on sololearn",
                link: "https://files.catbox.moe/vqmfy1.png"
            },
            {
                name: "Web Development",
                description: "A comprehensive course on web development with HTML, CSS and JS on sololearn",
                link: "https://files.catbox.moe/sycyzq.png"
            },
            {
                name: "ML for beginners",
                description: "A comprehensive course on machine learning for everyone on sololearn",
                link: "https://files.catbox.moe/nqz7br.png"
            },
        ]
            }

};


function createHero() {
    const heroSection = document.createElement("section");
    heroSection.className = "hero-section";

    const title = document.createElement("h1");
    title.textContent = content.hero.title;

    const subtitle = document.createElement("p");
    subtitle.textContent = content.hero.subtitle;
    
    heroSection.appendChild(title);
    heroSection.appendChild(subtitle);
    document.body.appendChild(heroSection);
}

function createAbout() {
    const aboutSection = document.createElement("section");
    aboutSection.className = "about-section";
    
    const aboutTitle = document.createElement("h2");
    aboutTitle.textContent = content.about.title;

    const aboutText = document.createElement("p");
    aboutText.textContent = content.about.text;

    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(aboutText);
    document.body.appendChild(aboutSection);
}

function createSkills() {
    const skillsSection = document.createElement("section");
    skillsSection.className = "skills-section";
    
    const skillsTitle = document.createElement("h2");
    skillsTitle.textContent = content.skills.title;
    const programmingSkills = document.createElement("p");
    programmingSkills.textContent = "Programming: " + content.skills.programming.join(", ");
    const officeSkills = document.createElement("p");
    officeSkills.textContent = "MS Office: " + content.skills.MSOffice.join(", ");
    const systemSkills = document.createElement("p");
    systemSkills.textContent = "System: " + content.skills.system.join(", ");
    
    skillsSection.appendChild(skillsTitle);
    skillsSection.appendChild(programmingSkills);
    skillsSection.appendChild(officeSkills);
    skillsSection.appendChild(systemSkills);
    document.body.appendChild(skillsSection);
}

function createProjects() {
    const projectsSection = document.createElement("section");
    projectsSection.className = "projects-section";
    
    const projectsTitle = document.createElement("h2");
    projectsTitle.textContent = content.projects.title;
    projectsSection.appendChild(projectsTitle);

    content.projects.list.forEach(project => {
        const projectName = document.createElement("h3");
        projectName.textContent = project.name;
        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;
        const projectLink = document.createElement("a");    
        projectLink.textContent = "View Project";
        projectLink.href = project.link;
        projectLink.target = "_blank";
        projectsSection.appendChild(projectName);
        projectsSection.appendChild(projectDescription);
        projectsSection.appendChild(projectLink);
    });
    document.body.appendChild(projectsSection);
}

function createCertifications() {
    const certificationsSection = document.createElement("section");
    certificationsSection.className = "certifications-section"; 

    const certificationsTitle = document.createElement("h2");
    certificationsTitle.textContent = content.certifications.title;
    certificationsSection.appendChild(certificationsTitle);

    content.certifications.list.forEach(certification => {
        const certificationName = document.createElement("h3");
        certificationName.textContent = certification.name;
        const certificationDescription = document.createElement("p");
        certificationDescription.textContent = certification.description;
        const certificationLink = document.createElement("img");
        certificationLink.src = certification.link;
        certificationLink.alt = "View Certification";


        certificationsSection.appendChild(certificationName);
        certificationsSection.appendChild(certificationDescription);
        certificationsSection.appendChild(certificationLink);
    });
    document.body.appendChild(certificationsSection);
}

function main() {  
    createHero();
    createAbout();
    createSkills();
    createProjects();
    createCertifications();
}
main();