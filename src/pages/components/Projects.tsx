import type { NextPage } from "next";
import styles from "../../styles/Projects.module.scss"
import { SimpleGrid, Image } from '@mantine/core';

const Projects: NextPage = () => {

    interface ProjectObject {
        name: string;
        summary: string;
        tech: Array<string>;
        link: string;
    }

    const projects: ProjectObject[] = [
        {name: "BeFriends", 
        summary: "A full stack web application where users can connect with others in their area and find friends based on their interests and hobbies",
        tech: ["javascript", "nodejs", "react", "tailwind", "vite", "express", "axios", "postgres"],
        link: "BeFriends"},
        {name: "HyperLoop API",
        summary: "An optimized backend system to support the diverse services of a high-traffic web application.",
        tech: ["javascript", "nodejs", "express", "postgres"],
        link: "Hyperloop-API"},
        {name: "WALL-E Mart",
        summary: "A modern storefront front-end application to provide a seamless and engaging shopping experience for users",
        tech: ["javascript", "nodejs", "react", "express", "axios", "jest"],
        link: "Wall-E-Mart"}
    ]

    return (
        <div id="Projects" className={styles.projectsOuter}>
            <div className={styles.divider}>
                <hr className={styles.line}/>
                <h1 className={styles.header}>Projects</h1>
                <hr className={styles.line}/>
            </div>
            {projects.map((project) => {
                return (
                    <div className={styles.project}>
                        <h2 className={styles.projectHeader}>{project.name}</h2>

                        <div className={styles.projectDescription}>
                            <p className={styles.projectSummary}>{project.summary}</p>
                            <a className={styles.githubLink} href={`https://github.com/Neeki-Askari/${project.link}`} target="_blank">Link to Github</a>
                        </div>
                        <div className={styles.tech}>
                                <SimpleGrid cols={project.tech.length}>
                                    {project.tech.map((logo, i) => (
                                        <div className={styles.logo}>
                                            <Image 
                                            src={`/images/logos/${logo}.svg`} 
                                            key={i} 
                                            alt={logo} 
                                            radius="sm"
                                            height="4rem"
                                            width="3.5rem"
                                            fit="contain"
                                            />
                                        </div>
                                    ))}
                                </SimpleGrid>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects;