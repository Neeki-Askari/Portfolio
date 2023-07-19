import type { NextPage } from "next";
import { useDisclosure } from '@mantine/hooks';
import { Navbar, Burger } from "@mantine/core"
import styles from "../../styles/Home.module.scss";
import Menu from "./Menu";

const NavBar: NextPage = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';

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
                    onClick={opened ? close : open}
                    size="lg"
                    color="white"
                    mr="xl"
                    aria-label={label}
                    sx={{margin: "0.5rem"}}
                />

                </div>
            </Navbar>
            <Menu opened={opened} close={close} />
        </div>
    );
};

export default NavBar;