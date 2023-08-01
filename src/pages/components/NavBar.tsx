import type { NextPage } from "next";
import { Navbar, Burger } from "@mantine/core"
import styles from "../../styles/Home.module.scss";
import Menu from "./Menu";

export type NavProps = {
    opened: boolean;
    close: ()=>void;
    open: ()=>void;
};

const NavBar: NextPage<NavProps> = ({opened, close, open}) => {

    const label = opened ? 'Close navigation' : 'Open navigation';

    return (
        <div id="navbar">
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
                    onClick={opened ? close : open}
                    size="lg"
                    color="white"
                    mr="xl"
                    aria-label={label}
                    sx={{margin: "0.5rem"}}
                />

                </div>
            </Navbar>
        </div>
    );
};

export default NavBar;