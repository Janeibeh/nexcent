declare module 'aos' {
    interface AosOptions {
        duration?: number;
        easing?: string;
        once?: boolean;
        mirror?: boolean;
        delay?: number;
        anchorPlacement?: string;
    }

    const AOS: {
        init(options?: AosOptions): void;
        refresh(): void;
        refreshHard(): void;
    };

    export default AOS;
}





// this is a necessary file to use aos library on typescript




