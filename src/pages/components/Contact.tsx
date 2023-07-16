import type { NextPage } from "next";
import { useOnIntersect } from "../../Intersect";
import styles from "../../styles/Contact.module.scss"
import { Button } from "@mantine/core";
import { IconSend } from "@tabler/icons-react";
import {ChangeEvent, useState} from "react";
import {sendContactForm}  from "../../lib/api";
import { notifications } from '@mantine/notifications';

const Contact: NextPage = () => {
    const [hiddenRef, isIntersecting] = useOnIntersect();
    interface EmailObject {
        email: string;
        subject: string;
        message: string;
    }
    const initState: EmailObject = {
        email: "",
        subject: "",
        message: ""
    }
    const [emailContent, setEmailContent] = useState<EmailObject>(initState)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setEmailContent((prevEmailContent) => ({
            ...prevEmailContent,
            [name]: value,
        }))
    }
    
    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            sendContactForm(emailContent);
            notifications.show({
                withCloseButton: true,
                autoClose: 5000,
                title: "Sent Message",
                message: "You're message was successfully sent!"
            });
            setEmailContent(initState);
        } catch (error: any) {
            notifications.show({
                withCloseButton: true,
                autoClose: 5000,
                title: "ERROR",
                message: "Could not send message"
            })
            console.error(error);
        }
    }

    return (
    
    <div ref={hiddenRef} id="Contact" className={`${styles.contactOuter} ${isIntersecting ? "fadeIn" : "hidden"}`}>
        <div className={styles.divider}>
            <hr className={styles.line}/>
            <h1 className={styles.aboutText}>Contact</h1>
            <hr className={styles.line}/>
        </div>

        <form className={styles.emailOuter} onSubmit={onSubmit}>
            <label className={styles.label}>Your Email</label>
            <input 
                type="text" 
                name="email"
                value={emailContent.email} 
                className={styles.emailInput} 
                placeholder="name@gmail.com" 
                required
                onChange={handleChange}
            />
            <label className={styles.label}>Subject</label>
            <input 
                type="text" 
                name="subject" 
                value={emailContent.subject} 
                className={styles.subjectInput} 
                placeholder="enter subject here..." 
                required
                onChange={handleChange}
            />
            
            <label className={styles.label}>Message</label>
            <textarea 
                name="message" 
                value={emailContent.message} 
                placeholder="enter message here..." 
                className={styles.messageInput} 
                required 
                onChange={handleChange}
            />
           
            <div style={{display: "flex", justifyContent: "center"}}>
            <Button 
            rightIcon={<IconSend size="2.5rem" />}
            type="submit"
            sx={{
                width: "14rem",
                height: "4rem",
                color: "#fff",
                backgroundColor: "indigo",
                fontSize:"2rem",
                margin: "4rem"
            }}
            >
            Send
            </Button>
            </div>
        </form>
    </div>
    )
}

export default Contact;