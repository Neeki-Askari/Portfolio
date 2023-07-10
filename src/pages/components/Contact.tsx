import type { NextPage } from "next";
import styles from "../../styles/Contact.module.scss"
import { Textarea, Button } from '@mantine/core';

const Contact: NextPage = () => {
 return (
    <div id="Contact" className={styles.contactOuter}>
        <div className={styles.divider}>
            <hr className={styles.line}/>
            <h1 className={styles.aboutText}>Contact</h1>
            <hr className={styles.line}/>
        </div>
        <div className={styles.emailOuter}>
            <label className={styles.label}>Your Email</label>
            <input className={styles.emailInput} placeholder="name@gmail.com"/>
            <label className={styles.label}>Subject</label>
            <input className={styles.subjectInput} placeholder="enter subject here..."/>
            <label className={styles.label} placeholder="enter message here">Message</label>
            <Textarea size="lg"sx={{marginBottom: "1rem"}}/>
            <div style={{display: "flex", justifyContent: "center"}}>
            <Button sx={{width:"8rem", backgroundColor: "indigo"}}>Submit</Button>
            </div>
        </div>
    </div>
 )
}

export default Contact;