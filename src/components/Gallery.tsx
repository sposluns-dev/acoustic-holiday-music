import { photos } from "../content";
import ResponsiveImage from "./ResponsiveImage";

export default function Gallery() {
    return (
        <section className="gallery" id="gallery">
            <div className="wrap">
                <div className="eyebrow">Gallery</div>
                <h2>On stage</h2>
                <hr className="rule" />
                <div className="grid">
                    <figure className="wide">
                        <ResponsiveImage photo={photos.full} sizes="(min-width: 700px) 66vw, 100vw" />
                    </figure>
                    <figure>
                        <ResponsiveImage photo={photos.shoppers} sizes="(min-width: 700px) 33vw, 100vw" />
                    </figure>
                    <figure className="wide">
                        <ResponsiveImage photo={photos.live} sizes="(min-width: 700px) 66vw, 100vw" />
                    </figure>
                </div>
            </div>
        </section>
    );
}
