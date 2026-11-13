import { photos, text } from "../content";
import ResponsiveImage from "./ResponsiveImage";
import Tracks from "./Tracks";

/** Turns *text* into <em>text</em> so content.ts can use simple italics. */
function withItalics(s: string) {
    return s.split(/(\*[^*]+\*)/).map((part, i) =>
        part.startsWith("*") && part.endsWith("*") && part.length > 2
            ? <em key={i}>{part.slice(1, -1)}</em>
            : part
    );
}

export default function About() {
    return (
        <section id="about">
            <div className="wrap about">
                <div>
                    <div className="eyebrow">{text.aboutEyebrow}</div>
                    <h2>{text.aboutHeading}</h2>
                    <hr className="rule" />
                    {text.aboutParagraphs.map((p) => <p key={p}>{withItalics(p)}</p>)}
                </div>
                <div className="portrait">
                    <ResponsiveImage photo={photos.portrait} sizes="(min-width: 800px) 40vw, 100vw" />
                </div>
            </div>
            <div className="wrap music">
                <hr className="divider" />
                <Tracks />
            </div>
        </section>
    );
}
