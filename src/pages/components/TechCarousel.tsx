import type { NextPage } from "next";
import { Carousel } from '@mantine/carousel';
import styles from "../../styles/Home.module.scss";

const TechCarousel: NextPage = () => {
    const logos: {image: string, alt: string, marginLeft: string}[] = [
        {image: "/images/javascript.svg", alt: "javasctipt-logo", marginLeft: "5%"},
        {image: "/images/typescript.svg", alt: "typescript-logo", marginLeft: "10%"},
        {image: "/images/html.svg", alt: "html-logo", marginLeft: "none"},
        {image: "/images/css.svg", alt: "css-logo", marginLeft: "none"}, 
        {image: "/images/jquery.svg", alt: "jquery-logo", marginLeft: "none"}, 
        {image: "/images/react.svg", alt: "react-logo", marginLeft: "none"}, 
        {image: "/images/nextjs.svg", alt: "react-logo", marginLeft: "none"}, 
        {image: "/images/mui.svg", alt: "mui-logo", marginLeft: "none"}, 
        {image: "/images/sass.svg", alt: "sass-logo", marginLeft: "none"}, 
        {image: "/images/tailwind.svg", alt: "tailwind-logo", marginLeft: "none"}, 
        {image: "/images/mantine.svg", alt: "mantine-logo", marginLeft: "none"}, 
        {image: "/images/express.svg", alt: "express-logo", marginLeft: "none"}, 
        {image: "/images/mysql.svg", alt: "mysql-logo", marginLeft: "none"}, 
        {image: "/images/postgres.svg", alt: "postgres-logo", marginLeft: "none"},
        {image: "/images/mongo.svg", alt: "mongo-logo", marginLeft: "none"},
        {image: "/images/jest.svg", alt: "jest-logo", marginLeft: "none"},
        {image: "/images/mocha.svg", alt: "mocha-logo", marginLeft: "none"},
        {image: "/images/chai.svg", alt: "chai-logo", marginLeft: "none"},
    ]

    return (
        <Carousel 
        slideSize="45%" 
        height={200} 
        slideGap="xs" 
        loop
        sx={{
            width: "70%",
            marginTop: "5%"
        }}
        >
            {logos.map((logo, i) => {
                return (
                    <Carousel.Slide key={i}>
                        <img src={logo.image} alt={logo.alt} className={styles.logoImage} style={{marginLeft: logo.marginLeft}}/>
                    </Carousel.Slide>
                )
            })}
        </Carousel>
    )
};

export default TechCarousel;