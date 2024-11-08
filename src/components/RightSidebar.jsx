import React from "react";

const RightSidebar = () => {
  const experiences = [
    {
      duration: "March 2024 - July 2024",
      title: "Full Stack Developer Intern - Pyramid Developers",
      work: [
        "Developed a structured API for appointment system, enabling users to book their respective slots easily and efficiently.",
        "Implemented real-time user chat and community chat features, enhancing communication and user engagement.",
        "Structured an API system to streamline the selection procedure of the images, enhancing efficiency and user experience.",
      ],
      tech: ["React Native", "JavaScript", "Next.js", "TypeScript", "Firebase"],
    },
    {
      duration: "Oct 2022 - Oct 2022",
      title: "Open Source Contributor - Hacktoberfest",
      work: [
        "Hacktoberfest is a month-long open source contribution challenge held in the month of October every year.",
        "Contributed to projects on GitHub, fixed bugs and added features like light and dark mode in the website.",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const projects = [
    {
      title: "Book Manager",
      description: [
        "Developed an end-to-end system for book management, including features for adding, updating & deleting books, as well as tracking rentals & transactions.",
        "Leveraged MongoDB to handle book and user data efficiently, enabling swift and optimized querying.",
      ],
      liveLink: "https://book-manager-two.vercel.app/",
      repoLink: "https://github.com/theravi04/bookManager",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CORS", "useContext"],
    },
    {
      title: "CodeChef Scraper",
      description: [
        "Developed a web scraper to extract user profile data, including ratings and contest details, from the CodeChef platform.",
        "Enabled users to input any CodeChef username to quickly retrieve specific information in real-time.",
      ],
      liveLink: "https://github.com/theravi04/CodeChef-Scraper",
      repoLink: "https://github.com/theravi04/CodeChef-Scraper",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "Cors",
        "Puppeteer",
      ],
    },
    {
      title: "Appointment System",
      description: [
        "Developed an appointment management system that allows users to explore available time slots, book & manage appointments with ease.",
        "Focused on creating a secure, efficient, and user-friendly interface while ensuring smooth booking operations.",
      ],
      liveLink: "https://github.com/theravi04/appointmentSystem",
      repoLink: "https://github.com/theravi04/appointmentSystem",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "CORS",
        "TailwindCSS",
      ],
    },
  ];

  return (
    <div className=" font-['Inconsolata']">
      <div className="flex flex-col items-center">
        {/* Introduction */}
        <div className=" p-6 md:p-10 mb-10 md:mb-6">
          {/* <div className=" border border-gray-300 rounded-lg p-6 md:p-10 mb-10 md:mb-16 shadow-md"> */}
          <p className="text-lg md:text-xl font-medium mb-4">
            I am Ravi Kumar, currently in my final year of pursuing a B.Tech in
            Electronics and Communication Engineering at Madan Mohan Malaviya
            University of Technology, Gorakhpur, Uttar Pradesh, India.
          </p>
          <p className="text-lg md:text-xl font-medium mb-4">
            I am a passionate web developer with expertise in HTML, CSS,
            JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, and
            MongoDB. I specialize in cross-platform app development using React
            Native, with additional knowledge in AWS, Docker, and GitHub CI/CD.
          </p>
          <p className="text-lg md:text-xl font-medium mb-4">
            I have solid skills in C, C++, and Python and have solved numerous
            DSA questions on platforms like LeetCode and GeeksforGeeks using
            C++.
          </p>
          <p className="text-lg md:text-xl font-medium">
            I have also participated in various contests and hackathons,
            including Smart India Hackathon (SIH) and GeeksforGeeks Job-A-Thon,
            achieving notable placements.
          </p>
        </div>

        {/* Experience Section */}
        <div className="experience  p-6 md:p-10 mb-10 md:mb-6">
          {/* <div className="experience  border border-gray-300 rounded-lg p-6 md:p-10 mb-10 md:mb-16 shadow-md"> */}
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item mb-6">
              <p className="hover:text-[#0093e9] title text-2xl font-semibold">{exp.title}</p>
              <p className="duration mb-2">{exp.duration}</p>
              <div className="work-details">
                {exp.work.map((item, i) => (
                  <p key={i} className="work mb-2">
                    {item}
                  </p>
                ))}
              </div>
              <div className="tech-used flex flex-wrap gap-2">
                {exp.tech.map((item, i) => (
                  <p
                    key={i}
                    className="border hover:border-[#0093e9] px-2 py-1 rounded-md"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="projects  p-6 md:p-10 ">
          {/* <div className="projects  border border-gray-300 rounded-lg p-6 md:p-10 shadow-md"> */}
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="project mb-6">
              <p className="hover:text-[#0093e9] text-2xl font-semibold">
                {project.title}
              </p>
              <div className="work-details">
                {project.description.map((item, i) => (
                  <p key={i} className="work mb-2">
                    {item}
                  </p>
                ))}
              </div>
              <div className="project-links mb-2 flex flex-wrap gap-2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border hover:text-[#0093e9]  px-2 py-1 rounded-md"
                >
                  Live Link
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border hover:text-[#0093e9] px-2 py-1 rounded-md"
                >
                  GitHub Repo
                </a>
              </div>
              <div className="tech-used flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <p
                    key={index}
                    className="border hover:border-[#0093e9] px-2 py-1 rounded-md"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
