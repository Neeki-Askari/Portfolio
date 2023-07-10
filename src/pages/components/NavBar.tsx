import type { NextPage } from "next";
import Link from 'next/link';
import {useState} from "react";
import {Navbar, Burger, useMantineTheme, Drawer} from "@mantine/core"
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
                <h2>Neeki</h2>
                <Burger
                    opened={opened}
                    onClick={() => setOpen((o) => !o)}
                    size="lg"
                    color={theme.colors.gray[6]}
                    mr="xl"
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
                    backgroundColor: "#2d1850",
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