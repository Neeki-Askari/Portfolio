import type { NextPage } from "next";
import { Button, Flex} from '@mantine/core';
import { IconFileDownload } from '@tabler/icons-react';
import styles from "../../styles/Home.module.scss";
import TechCarousel from "./TechCarousel";


const HomeContent: NextPage = () => {
    return (
        <div id="Home" className={styles.photo_and_tech}>
            <Flex
            direction="row"
            wrap="wrap"
            justify="center"
            align="center"
            gap="lg"
            >
                <div className={styles.photo_and_tech}>
                    <div className={styles.photo}>
                        <img src="/images/Neeki.jpg" alt="neeki-photo" className={styles.image}/>
                    </div>
                    <Button 
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/images/Resume.pdf"
                        variant="light" 
                        color="violet"
                        radius="md"
                        size="lg"
                        leftIcon={<IconFileDownload size="2rem" />} 
                        sx={{
                            width: "10rem",
                            margin: "5%",
                            color: "#2d1850"
                        }}
                    >
                        Resume
                    </Button>
                </div>
                <div className={styles.intro}>
                    <h2>Hello and Welcome! My name is </h2>
                    <h1>Neeki</h1>
                    <h2>I am a Software Engineer, </h2>
                    <h2>Puzzle Enthusiast, & Animal Lover</h2>
                </div>
            </Flex>
            <h2 className={styles.tech_header}>Explore my tech stack: </h2>
            <TechCarousel />
        </div>
    )
}

export default HomeContent;