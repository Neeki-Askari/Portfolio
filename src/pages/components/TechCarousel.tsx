import type { NextPage } from "next";
import { Carousel } from '@mantine/carousel';
import styles from "../../styles/Home.module.scss";
import {Image } from '@mantine/core';

const TechCarousel: NextPage = () => {
    interface LogoObject {
        image: string, 
        alt: string,
        marginLeft: string
    }
    const logos: LogoObject[] = [
        {image: "/images/logos/javascript.svg", alt: "javasctipt-logo", marginLeft: "5%"},
        {image: "/images/logos/typescript.svg", alt: "typescript-logo", marginLeft: "10%"},
        {image: "/images/logos/nodejs.svg", alt: "node-logo", marginLeft: "10%"},
        {image: "/images/logos/html.svg", alt: "html-logo", marginLeft: "none"},
        {image: "/images/logos/css.svg", alt: "css-logo", marginLeft: "-10%"}, 
        {image: "/images/logos/jquery.svg", alt: "jquery-logo", marginLeft: "-10%"}, 
        {image: "/images/logos/react.svg", alt: "react-logo", marginLeft: "none"}, 
        {image: "/images/logos/nextjs.svg", alt: "nextjs-logo", marginLeft: "10%"}, 
        {image: "/images/logos/mui.svg", alt: "mui-logo", marginLeft: "15%"}, 
        {image: "/images/logos/sass.svg", alt: "sass-logo", marginLeft: "20%"}, 
        {image: "/images/logos/tailwind.svg", alt: "tailwind-logo", marginLeft: "20%"}, 
        {image: "/images/logos/mantine.svg", alt: "mantine-logo", marginLeft: "20%"}, 
        {image: "/images/logos/express.svg", alt: "express-logo", marginLeft: "25%"}, 
        {image: "/images/logos/axios.svg", alt: "axios-logo", marginLeft: "25%"}, 
        {image: "/images/logos/vite.svg", alt: "vite-logo", marginLeft: "none"}, 
        {image: "/images/logos/webpack.svg", alt: "webpack-logo", marginLeft: "none"}, 
        {image: "/images/logos/mysql.svg", alt: "mysql-logo", marginLeft: "none"}, 
        {image: "/images/logos/postgres.svg", alt: "postgres-logo", marginLeft: "none"},
        {image: "/images/logos/mongo.svg", alt: "mongo-logo", marginLeft: "none"},
        {image: "/images/logos/jest.svg", alt: "jest-logo", marginLeft: "none"},
        {image: "/images/logos/mocha.svg", alt: "mocha-logo", marginLeft: "none"},
        {image: "/images/logos/chai.svg", alt: "chai-logo", marginLeft: "none"},
    ]

    return (
            
            <div className={styles.carousel}>
            <h2 className={styles.tech_header}>Explore my tech stack: </h2>
            <Carousel 
            slideSize="45" 
            height={200} 
            slideGap="md" 
            loop
            >
                {logos.map((logo, i) => {
                    return (
                        <Carousel.Slide key={i}>
                            <div className={styles.logoOuter}>
                                <Image 
                                src={logo.image}
                                alt={logo.alt} 
                                height="10rem"
                                width="100%"
                                fit="contain"
                                />
                        </div>
                        </Carousel.Slide>
                    )
                })}
            </Carousel>
            </div>
    )
};

export default TechCarousel;