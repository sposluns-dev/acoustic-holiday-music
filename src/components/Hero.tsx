import { BAND_NAME, EMAIL, PRESENTS, SHOW_TITLE, photos, text } from "../content";
import ResponsiveImage from "./ResponsiveImage";

export default function Hero() {
    return (
        <header className="hero">
            <div className="wrap">
                <h1 className="sign">{BAND_NAME}</h1>
                <div className="presents">{PRESENTS}</div>
            </div>
            <div className="stage">
                <ResponsiveImage photo={photos.hero} sizes="100vw" priority />
                <div className="wrap">
                    <h2 className="show">{SHOW_TITLE}</h2>
                    <p>{text.heroTagline}</p>
                    <a className="btn" href={`mailto:${EMAIL}`}>{text.heroButton}</a>
                </div>
            </div>
        </header>
    );
}
