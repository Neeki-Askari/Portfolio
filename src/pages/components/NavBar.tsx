import type { NextPage } from "next";
import Link from 'next/link';
import {useState} from "react";
import {Navbar, Burger, useMantineTheme, Drawer, Image} from "@mantine/core"
import styles from "../../styles/Home.module.scss";


const NavBar: NextPage = () => {
    const theme = useMantineTheme();
    const [opened, setOpen]= useState<boolean>(false);

    const menuItems = ["Home", "About", "Projects", "Contact"]

    return (
        <div>
            <Navbar 
            p={10} 
            height={85} 
            className={styles.navbar}
            zIndex={3}
            >        
                <div className={styles.navbarContents}>
                <div className={styles.navbarLogo}>
                    <h1>Neeki</h1>
                </div>
                <Burger
                    opened={opened}
                    onClick={() => setOpen((o) => !o)}
                    size="lg"
                    color={theme.colors.gray[6]}
                    mr="xl"
                    sx={{margin: "0.5rem"}}
                />

                </div>
            </Navbar>
            <Drawer 
            opened={opened} 
            onClose={() => setOpen((o) => !o)} 
            position="right"
            size="sm"
            padding="lg"
            shadow="md"
            zIndex={2}
            sx={{
                ".mantine-Drawer-content": {
                    backgroundImage: "linear-gradient(#2d1850 , indigo)"
                }}}
            >
            {menuItems.map((item, i) => {
               return (
                <div key={i} className={styles.link}>
                    <Link 
                    href={`#${item}`}
                    onClick={() => setOpen((o) => !o)} 
                    className={styles.linkText}
                    >
                        {item} 
                    </Link>
                </div>
               )
            })}
            </Drawer>
        </div>
    );
};

export default NavBar;