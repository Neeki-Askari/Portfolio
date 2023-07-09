import type { NextPage } from "next";
import { Carousel } from '@mantine/carousel';
import styles from "../../styles/Home.module.scss";

const TechCarousel: NextPage = () => {
    interface LogoObject {
        image: string, 
        alt: string,
        marginLeft: string
    }
    const logos: LogoObject[] = [
        {image: "/images/logos/javascript.svg", alt: "javasctipt-logo", marginLeft: "5%"},
        {image: "/images/logos/typescript.svg", alt: "typescript-logo", marginLeft: "10%"},
        {image: "/images/logos/html.svg", alt: "html-logo", marginLeft: "none"},
        {image: "/images/logos/css.svg", alt: "css-logo", marginLeft: "none"}, 
        {image: "/images/logos/jquery.svg", alt: "jquery-logo", marginLeft: "none"}, 
        {image: "/images/logos/react.svg", alt: "react-logo", marginLeft: "none"}, 
        {image: "/images/logos/nextjs.svg", alt: "react-logo", marginLeft: "none"}, 
        {image: "/images/logos/mui.svg", alt: "mui-logo", marginLeft: "none"}, 
        {image: "/images/logos/sass.svg", alt: "sass-logo", marginLeft: "none"}, 
        {image: "/images/logos/tailwind.svg", alt: "tailwind-logo", marginLeft: "none"}, 
        {image: "/images/logos/mantine.svg", alt: "mantine-logo", marginLeft: "none"}, 
        {image: "/images/logos/express.svg", alt: "express-logo", marginLeft: "none"}, 
        {image: "/images/logos/mysql.svg", alt: "mysql-logo", marginLeft: "none"}, 
        {image: "/images/logos/postgres.svg", alt: "postgres-logo", marginLeft: "none"},
        {image: "/images/logos/mongo.svg", alt: "mongo-logo", marginLeft: "none"},
        {image: "/images/logos/jest.svg", alt: "jest-logo", marginLeft: "none"},
        {image: "/images/logos/mocha.svg", alt: "mocha-logo", marginLeft: "none"},
        {image: "/images/logos/chai.svg", alt: "chai-logo", marginLeft: "none"},
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