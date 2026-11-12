import { instruments, photos } from "../content";
import ResponsiveImage from "./ResponsiveImage";

export default function About() {
    return (
        <section id="about">
            <div className="wrap about">
                <div>
                    <div className="eyebrow">About</div>
                    <h2>Cozy sounds for the season</h2>
                    <hr className="rule" />
                    <p>
                        We’re an acoustic ensemble that brings the sound of the holidays to markets,
                        parties, tree lightings and gatherings of every size. Expect familiar carols,
                        jazzy winter standards and a few folk surprises — all played live, with plenty
                        of Santa hats.
                    </p>
                    <p>Compact, easy to set up, and happy to play in a lobby, a courtyard or a living room.</p>
                    <ul className="band-list">
                        {instruments.map((i) => <li key={i}>{i}</li>)}
                    </ul>
                </div>
                <div className="portrait">
                    <ResponsiveImage photo={photos.portrait} sizes="(min-width: 800px) 40vw, 100vw" />
                </div>
            </div>
        </section>
    );
}
