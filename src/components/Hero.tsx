import { BAND_NAME, photos } from "../content";
import ResponsiveImage from "./ResponsiveImage";

export default function Hero() {
    return (
        <header className="hero">
            <ResponsiveImage photo={photos.hero} sizes="100vw" priority />
            <div className="wrap">
                <div className="eyebrow">Live &amp; Unplugged</div>
                <h1>{BAND_NAME}</h1>
                <p>
                    Fiddle, banjo, guitar, trombone and upright bass — warm, handmade carols and
                    winter favourites for your festive event.
                </p>
                <a className="btn" href="#contact">Book the band</a>
            </div>
        </header>
    );
}
