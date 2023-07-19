import type { NextPage } from "next";
import { useOnIntersect } from "../../Intersect";
import {useState} from "react";
import styles from "../../styles/About.module.scss";
import {Image, SimpleGrid, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const AboutPhotos: NextPage = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [hiddenRef, isIntersecting] = useOnIntersect();
    interface ImageObject {
        image: string,
        caption: string, 
        alt: string
    }
    const images: ImageObject[] = [
        {image: "/images/about/puzzle.webp", 
        caption: "1000 piece jigsaw puzzle. I use a sealer like Mod Podge to preserve and hang my creactions on the wall.",
        alt: "1000-piece-puzzle"},
        {image: "/images/about/hiking.webp", 
        caption: "My favorite form of exercise is walking and hiking. Here is a beautiful hiking trail in Connecticut during fall.",
        alt: "neeki-hiking"},
        {image: "/images/about/koa.webp", 
        caption: "My dog Koa. She is an Alaskan Klee Kai and loves to talk",
        alt: "dog"},
        {image: "/images/about/bella.webp", 
        caption: "Bella is a bearded dragon and could fit in my hand when I rescued her. Now she is 2 feet long!",
        alt: "bearded-dragon"},
    ];

    const [main, setMain] = useState<ImageObject>(images[0]);
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <div ref={hiddenRef} className={`${styles.aboutPhotosOuter} ${isIntersecting ? "fadeIn" : "hidden"}`}>
            <div className={styles.aboutPhotosHeader}>
                <h2>Get to know me</h2>
            </div>

            <div className={styles.aboutMainPhoto}>
                <Image 
                src={main.image}
                alt={main.alt} 
                height="16rem"
                width="100%"
                fit="contain"
                onClick={() => {
                    setShowModal(true);
                    open()
                }}
                />
                <p className={styles.caption}>{main.caption}</p>
            </div>
            {showModal ? 
                <Modal 
                opened={opened} 
                onClose={close}
                centered={true}
                size="md"
                keepMounted={true}
                sx={{
                    ".mantine-Modal-content": {
                        backgroundColor: "gray",
                        color: "white"
                    },
                    ".mantine-Modal-header": {
                        backgroundColor: "gray",
                        color: "white"
                    },
                    ".mantine-Modal-close": {
                        color: "white",
                    },
                }}
                >
                <Image src={main.image} alt={main.alt} />
                <p style={{fontSize: "1.3rem", textAlign: "center"}}>{main.caption}</p>
                </Modal> 
                : null}
            <div className={styles.grid}>
            <SimpleGrid cols={4} spacing="lg">
            {images.map((image) => (
                <Image 
                    src={image.image} 
                    key={image.image} 
                    alt={image.alt} 
                    radius="md"
                    height="5rem"
                    width="5rem"
                    fit="cover"
                    onClick={() => setMain(image)} 
                    />
            ))}
            </SimpleGrid>
            </div>

        </div>
    )
}

export default AboutPhotos;