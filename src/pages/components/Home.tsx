import type { NextPage } from "next";
import { Button, Flex, Image} from '@mantine/core';
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
            rowGap="4rem"
            >
                <div className={styles.photo}>
                    <img src="/images/Neeki.jpg" alt="neeki-photo" className={styles.image}/>
                </div>
                <div className={styles.intro}>
                    <h2>Hello and Welcome! My name is </h2>
                    <h1>NEEKI</h1>
                    <h2>I am a Software Engineer, </h2>
                    <h2>Puzzle Enthusiast, & Animal Lover</h2>
                    <Button 
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/images/Resume.pdf"
                        variant="filled" 
                        radius="md"
                        size="xl"
                        leftIcon={<IconFileDownload size="2rem" />} 
                        sx={{
                            width: "12rem",
                            height: "3.5rem",
                            color: "#fff",
                            backgroundColor: "indigo",
                            fontSize:"1.75rem",
                            margin: "5rem"
                        }}
                    >
                        Resume
                    </Button>
                </div>
            </Flex>
            <TechCarousel />
        </div>
    )
}

export default HomeContent;