import type { NextPage } from "next";
import Link from 'next/link';
import { Drawer } from "@mantine/core"
import styles from "../../styles/Home.module.scss";

export type MenuProps = {
    opened: boolean;
    close: ()=>void;
};

const Menu: React.FC<MenuProps> = ({opened, close}) => {
    const menuItems: Array<string> = ["Home", "About", "Projects", "Contact"];
    
    const handleMenuClick = (item: string) => {
        const targetElement = document.getElementById(item);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
        close();
    }

    return (
        <Drawer 
                opened={opened} 
                onClose={close} 
                position="right"
                size="md"
                padding="lg"
                shadow="md"
                zIndex={5}
                transitionProps={{ duration: 250, transition: "slide-left" }}
                sx={{
                    ".mantine-Drawer-content": {
                        backgroundImage: "linear-gradient(#2d1850 , indigo)"
                    }}}
            >
            {menuItems.map((item) => {
               return (
                <div key={item} className={styles.link}>
                    <button
                    className={styles.linkText}
                    onClick={()=>handleMenuClick(item)}
                    >
                        {item} 
                    </button>
                </div>
               )
            })}
            </Drawer>
    )
}

export default Menu;