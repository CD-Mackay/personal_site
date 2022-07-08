import Link from "next/link";
import styles from "./ResumeDoc.module.css";

export default function ResumeDoc() {
  return (
    <div className={styles.page}>
      <div className={styles.contact}>
        <div>
          <h2>Connor Mackay</h2>
          <h6>Toronto Web Developer</h6>
          <p>Contact</p>
          <p>647-393-4597</p>
          <p>connor.mackay@gmail.com</p>
          <div className={styles.links}>
            <Link href="">Github: CD-Mackay</Link>
            <Link href="">Linkedin: Connor Mackay</Link>
          </div>
        </div>
        <div className={styles.projects}>
          <h6>Projects</h6>
          <p>Notes App</p>
          <ul>
            <li>ReactJS</li>
            <li>DraftJS</li>
          </ul>
          <p>Mini-Arcade</p>
          <ul>
            <li>ReactJS</li>
          </ul>
          <p>HelpMeHelpYou</p>
          <ul>
            <li>Ruby on Rails</li>
            <li>ReactJS</li>
          </ul>
          <p>Staffify</p>
          <ul>
            <li>ReactJS</li>
            <li>RouterV6</li>
          </ul>
        </div>
      </div>
      <div className={styles.experience}>
        <h3>Profile</h3>
        <p>
          A graduate from Lighthouse Labs Development program looking to turn a
          passion for technology into a long-term career. I am an enthusiastic,
          fast-learning team player seeking an entry level technology role
          supporting the development, testing and deployment of dynamic
          front-end interfaces for clients.
        </p>
        <h3>Skills</h3>
        <p>
          <strong>Languages:</strong> Javascript, Ruby, HTML, CSS
        </p>
        <p>
          <strong>Libraries & Frameworks:</strong> React, Rails Ajax, Express,
          Jquery, ActiveRecord, SASS Socket.io, NextJS
        </p>
        <p>
          <strong>Testing: </strong> Mocha/Chai, Jest, Cypress
        </p>
        <p>
          <strong>Databases and CMS: </strong> SQL, PSQL , GraphQL
        </p>
        <p>
          <strong>Source & Project Management: </strong> Github, GitKraken,
          Jira, Jenkins
        </p>
        <h3>Education</h3>
        <p>Web Development Diploma</p>
        <p>Lighthouse Labs | 2020-2021</p>
        <p>Bachelor of Arts, Legal Studies</p>
        <p>Carleton University | 2012 - 2016</p>
        <h3>Work Experience</h3>
        <p>Junior Developer</p>
        <p>
          C R E A T I O N C R A T E I N C . | A U G U S T 2 0 2 1 - D E C E M B
          E R 2 0 2 1
        </p>
        <ul>
          <li>
            Assisted with the development and deployment of new product pages
            concerning new product lines and seasonal promotions.
          </li>
        </ul>
        <p>Summer Student</p>
        <p>R B C C A P I T A L M A R K E T S | S U M M E R 2 0 1 4 - 2 0 1 5</p>
        <ul>
          <li>
            Responsible for maintaining trading documents, communicating and
            explaining changes to stakeholders as well as tracking progress on
            long-term projects.
          </li>
        </ul>
      </div>
    </div>
  );
}
