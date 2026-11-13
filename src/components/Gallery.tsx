import { photos, text } from "../content";
import ResponsiveImage from "./ResponsiveImage";

export default function Gallery() {
    return (
        <section className="gallery" id="gallery">
            <div className="wrap">
                <div className="eyebrow">{text.galleryEyebrow}</div>
                <h2>{text.galleryHeading}</h2>
                <hr className="rule" />
                <div className="grid">
                    <figure className="tall">
                        <ResponsiveImage photo={photos.banjo} sizes="(min-width: 700px) 33vw, 100vw" />
                    </figure>
                    <figure className="wide">
                        <ResponsiveImage photo={photos.shoppers} sizes="(min-width: 700px) 66vw, 100vw" />
                    </figure>
                    <figure className="wide">
                        <ResponsiveImage photo={photos.live} sizes="(min-width: 700px) 66vw, 100vw" />
                    </figure>
                </div>
            </div>
        </section>
    );
}
