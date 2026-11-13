// Edit this file to change the site's text and photos.
export const BAND_NAME = "The Kitchen Sink";
export const EMAIL = "simonposlunsmusic@gmail.com";
export const PRESENTS = "presents";
export const SHOW_TITLE = "Acoustic Holiday Classics";

export const text = {
    heroEyebrow: "Text 1",
    heroTagline: "",
    heroButton: "Contact",

    aboutEyebrow: "",
    aboutHeading: "About",
    aboutParagraphs: [
        "An eclectic ensemble based out of Toronto, *The Kitchen Sink* lives up to its name by incorporating a wide array of related genres into their sets: Swing, Country, Jazz, Celtic, Old-Time, and Bluegrass to name a few.",
        "Drawing inspiration from artists such as David Grisman, John Reischman, and Béla Fleck, *The Kitchen Sink* fuses these sonic landscapes through meticulous orchestrations of traditional and contemporary pieces.",
        "Instrumentation: Trombone, Upright bass, Mandolin, Guitar, Banjo, Violin, Lap steel guitar."
    ],

    galleryEyebrow: "",
    galleryHeading: "",

    contactHeading: "Includes Everything (Yes, even the kitchen sink)",
    contactParagraph: "Book for your next Holiday Event",
    email: "Contact",
};

// Recordings live in /public/audio
export const tracks = [
    { title: "It Came Upon a Midnight Clear", file: "it-came-upon-a-midnight-clear.mp3" },
    { title: "I'll Be Home For Christmas", file: "ill-be-home-for-christmas.mp3" },
    { title: "Let It Snow!", file: "let-it-snow.mp3" },
    { title: "What Are You Doing New Year's Eve?", file: "what-are-you-doing-new-years-eve.mp3" },
    { title: "Have Yourself a Merry Little Christmas", file: "have-yourself-a-merry-little-christmas.mp3" },
];

export type Photo = {
    name: string; // file stem in /public/images
    width: number;
    height: number;
    alt: string;
};

export const photos: Record<string, Photo> = {
    hero: { name: "hero", width: 2400, height: 1597, alt: "Band members in Santa hats playing trombone, fiddle and guitars at a holiday market" },
    banjo: { name: "band-47", width: 1597, height: 2400, alt: "Band member in a Santa hat playing banjo" },
    portrait: { name: "band-4", width: 2400, height: 1597, alt: "The full band playing in a brick-walled market hall" },
    shoppers: { name: "band-17", width: 2400, height: 1597, alt: "Band performing for holiday shoppers" },
    live: { name: "band-24", width: 2400, height: 1597, alt: "Band playing live at a holiday event" },
};
