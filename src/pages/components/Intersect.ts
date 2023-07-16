import { useRef, useEffect, useState, RefObject } from "react";

export function useOnIntersect(): [RefObject<HTMLDivElement>, boolean] {
    const hiddenRef = useRef<HTMLDivElement>(null);
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsIntersecting(entry.isIntersecting);
        });
        if(hiddenRef.current) {
            observer.observe(hiddenRef.current);
        }
    }, [hiddenRef]);

    return [hiddenRef, isIntersecting];
}
