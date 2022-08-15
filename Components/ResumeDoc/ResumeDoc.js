// Framework Imports
import Link from "next/link";

// CSS Imports
import styles from "./ResumeDoc.module.css";

export default function ResumeDoc() {

  /**
   * Renders Resume component for /resume page.
   * * Contains links to project codebases as well as social media presence.
   */
  return (
    <div className={styles.page}>
      <div className={styles.contact}>
        <div className={styles.contact_details}>
          <h2 id={styles.resume_name}>Connor Mackay</h2>
          <h6>Toronto Web Developer</h6>
          <p className={styles.res_header}>Contact</p>
          <p className={styles.res_contact}>647-393-4597</p>
          <p className={styles.res_contact}>connor.mackay@gmail.com</p>
          <div className={styles.links}>
            <Link
              className={styles.resume_link}
              href="https://github.com/CD-Mackay"
            >
              Github: CD-Mackay
            </Link>
            <Link
              className={styles.resume_link}
              href="https://www.linkedin.com/in/connor-mackay-800992bb/"
            >
              Linkedin: Connor Mackay
            </Link>
          </div>
        </div>
        <div className={styles.projects}>
          <h6>Projects</h6>
          <p className={styles.res_header}>Notes App</p>
          <ul className={styles.project_list}>
            <li>ReactJS</li>
            <li>DraftJS</li>
          </ul>
          <p className={styles.res_header}>Mini-Arcade</p>
          <ul className={styles.project_list}>
            <li>ReactJS</li>
          </ul>
          <p className={styles.res_header}>HelpMeHelpYou</p>
          <ul className={styles.project_list}>
            <li>Ruby on Rails</li>
            <li>ReactJS</li>
          </ul>
          <p className={styles.res_header}>Staffify</p>
          <ul className={styles.project_list}>
            <li>ReactJS</li>
            <li>RouterV6</li>
          </ul>
        </div>
      </div>
      <div className={styles.experience}>
        <div className={styles.resume_section}>
          <h3>Profile</h3>
          <p>
            A graduate from Lighthouse Labs Development program looking to turn
            a passion for technology into a long-term career. I am an
            enthusiastic, fast-learning team player seeking an entry level
            technology role supporting the development, testing and deployment
            of dynamic front-end interfaces for clients.
          </p>
        </div>
        <div className={styles.resume_section}>
          <h3>Skills</h3>
          <div className={styles.skill_section}>
            <p className={styles.res_header}>
              <strong>Languages: </strong>
            </p>
            <p> Javascript, Ruby, HTML, CSS</p>
          </div>
          <div className={styles.skill_section}>
            <p className={styles.res_header}>
              <strong>Libraries & Frameworks:</strong>
            </p>
            <p>
              React, Rails Ajax, Express, Jquery, ActiveRecord, SASS Socket.io,
              NextJS
            </p>
          </div>
          <div className={styles.skill_section}>
            <p className={styles.res_header}>
              <strong>Testing: </strong>
            </p>
            <p> Mocha/Chai, Jest, Cypress</p>
          </div>
          <div className={styles.skill_section}>
            <p className={styles.res_header}>
              <strong>Databases and CMS: </strong>
            </p>
            <p> SQL, PSQL , GraphQL</p>
          </div>
          <div className={styles.skill_section}>
            <p className={styles.res_header}>
            <strong>Source & Project Management:</strong> </p> <p>Github, GitKraken,
            Jira, Jenkins</p>
          </div>
        </div>
        <div className={styles.resume_section}>
          <h3>Education</h3>
          <p className={styles.res_header}>Web Development Diploma</p>
          <p>Lighthouse Labs | 2020-2021</p>
          <p className={styles.res_header}>Bachelor of Arts, Legal Studies</p>
          <p>Carleton University | 2012 - 2016</p>
        </div>
        <div className={styles.resume_section}>
          <h3>Work Experience</h3>
          <p className={styles.res_header}>
            CREATION CRATE INC. | AUGUST 2021 - DECEMBER 2021
          </p>
          <p className={styles.education}>Junior Developer</p>
          <ul className={styles.project_list}>
            <li>
              Assisted with the development and deployment of new product pages
              concerning new product lines and seasonal promotions.
            </li>
          </ul>{" "}
          <p className={styles.res_header}>
            RBC CAPITAL MARKETS | SUMMER 2014 - 2015
          </p>
          <p className={styles.education}>Summer Student</p>
          <ul className={styles.project_list}>
            <li>
              Responsible for maintaining trading documents, communicating and
              explaining changes to stakeholders as well as tracking progress on
              long-term projects.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
