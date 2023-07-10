import type { NextPage } from "next";
import styles from "../../styles/Projects.module.scss"
import { SimpleGrid } from '@mantine/core';

const Projects: NextPage = () => {

    interface ProjectObject {
        name: string;
        summary: string;
        tech: Array<string>;
    }

    const projects: ProjectObject[] = [
        {name: "BeFriends", 
        summary: "A full stack web application where users can connect with others in their area and find friends based on their interests and hobbies",
        tech: ["jacascript", "node", "tailwind", "vite", "express", "axios", "postgres"]}
    ]

    return (
        <div className={styles.projectsOuter}>
            <div className={styles.divider}>
                <hr className={styles.line}/>
                <h1 className={styles.header}>Projects</h1>
                <hr className={styles.line}/>
            </div>

            <div className={styles.project}>
                <h2 className={styles.projectHeader}>BeFriends</h2>

                <div className={styles.projectDescription}>
                    <p className={styles.projectSummary}>
                        A full stack web application where users can connect with others in their area and find friends based on their interests and hobbies
                    </p>
                    <span className={styles.githubLink}>Link to Github</span>
                </div>
                <div className={styles.tech}>
                    <div className={styles.logo}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;