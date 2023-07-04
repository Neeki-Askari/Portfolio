import type { NextPage } from "next";
import { Carousel } from '@mantine/carousel';
import { Button } from '@mantine/core';
import { IconFileDownload } from '@tabler/icons-react';
import styles from "../../styles/Home.module.scss";



const HomeContent: NextPage = () => {

    const logos: {image: string, alt: string}[] = [
        {image: "/images/JavaScript.png", alt: "javasctipt-logo"},
        {image: "/images/HTML.png", alt: "html-logo"},
        {image: "/images/CSS.png", alt: "css-logo"},
    ]

    return (
        <div className={styles.photo_and_tech}>
            <div className={styles.photo}>
                <img src="/images/Neeki.jpg" alt="neeki-photo" className={styles.image}/>
            </div>
            <Button 
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
            <Carousel 
            slideSize="45%" 
            height={200} 
            slideGap="lg" 
            loop
            sx={{
                width: "75%",
                margin: "5%"
            }}
            >
                {logos.map((logo, i) => {
                    return (
                        <Carousel.Slide key ={i}>
                            <img src={logo.image} alt={logo.alt} className={styles.logoImage}/>
                        </Carousel.Slide>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default HomeContent;