import type { NextPage } from "next";
import { useOnIntersect } from "./Intersect";
import styles from "../../styles/About.module.scss";
import AboutPhotos from "./AboutPhotos";

const About: NextPage = () => {
    const [hiddenRef, isIntersecting] = useOnIntersect();
    const textList: Array<string> = [
        'I\'m a Full Stack Software Engineer, with a knack for piecing together solutions like my favorite pastime - puzzle-making. Originally walking a path towards medicine, influenced by my Iranian-American heritage, my journey took an unexpected turn during the height of COVID-19. Inspired by this experience, I traded my future stethoscope for coding syntax at Hack Reactor.',
        'Today, I aim to create software solutions as diverse and intricate as the personalities of my cherished pets, a playful dog and a quirky bearded dragon. My focus? Building user-centric and sustainable software that brings meaningful change and boosts efficiency, one line of code at a time.'
    ];

    return (
        <div ref={hiddenRef} id="About" className={`${styles.aboutOuter} ${isIntersecting ? "fadeIn" : "hidden"}`}>
            <div className={styles.divider}>
                <hr className={styles.line}/>
                <h1 className={styles.aboutText}>About</h1>
                <hr className={styles.line}/>
            </div>
            <div className={styles.aboutOuterText}>
            {textList.map((text, i) => {
                return(
                    <p key={i} className={styles.aboutText}>{text}</p>
                )
            })}
            </div>
            <AboutPhotos />    
        </div>
    )
}

export default About;