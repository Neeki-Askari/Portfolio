import type { NextPage } from "next";
import styles from "../../styles/Home.module.scss";
import Neeki from "../../images/Neeki.jpg";


const Home: NextPage = () => {
    return (

        <div className={styles.photo_and_tech}>
            <img src={Neeki.src} alt="neeki-photo" className={styles.photo}/>
        </div>
    )
}

export default Home;