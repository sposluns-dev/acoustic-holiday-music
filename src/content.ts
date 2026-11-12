// Edit this file to change the site's text and photos.
export const BAND_NAME = "Acoustic Holiday Music";
export const EMAIL = "hello@example.com"; // placeholder

export type Photo = {
    name: string; // file stem in /public/images
    width: number;
    height: number;
    alt: string;
};

export const photos: Record<string, Photo> = {
    hero: { name: "hero", width: 2400, height: 1597, alt: "Band members in Santa hats playing trombone, fiddle and guitars at a holiday market" },
    portrait: { name: "band-47", width: 1597, height: 2400, alt: "Band member in a Santa hat playing banjo" },
    full: { name: "band-4", width: 2400, height: 1597, alt: "The full band playing in a brick-walled market hall" },
    shoppers: { name: "band-17", width: 2400, height: 1597, alt: "Band performing for holiday shoppers" },
    live: { name: "band-24", width: 2400, height: 1597, alt: "Band playing live at a holiday event" },
};

export const instruments = ["Fiddle", "Banjo", "Guitar", "Trombone", "Upright bass", "Vocals"];

// Placeholder setlist — replace with the real one.
export const songs = [
    "Jingle Bells", "Deck the Halls", "Silent Night",
    "Winter Wonderland", "God Rest Ye Merry Gentlemen", "Carol of the Bells",
    "Let It Snow", "Good King Wenceslas", "Auld Lang Syne",
];
