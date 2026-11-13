import { BAND_NAME, EMAIL, PRESENTS, SHOW_TITLE, photos, text } from "../content";
import ArchedTitle from "./ArchedTitle";
import Logo from "./Logo";
import ResponsiveImage from "./ResponsiveImage";

export default function Hero() {
    return (
        <header className="hero">
            <div className="stage">
                <ResponsiveImage photo={photos.hero} sizes="100vw" priority />
                <div className="wrap title-block">
                    <ArchedTitle text={BAND_NAME} />
                    <Logo className="title-logo" />
                    <div className="presents">{PRESENTS}</div>
                </div>
                <div className="wrap">
                    <h2 className="show">{SHOW_TITLE}</h2>
                    <p>{text.heroTagline}</p>
                    <a className="btn" href={`mailto:${EMAIL}`}>{text.heroButton}</a>
                </div>
            </div>
        </header>
    );
}
