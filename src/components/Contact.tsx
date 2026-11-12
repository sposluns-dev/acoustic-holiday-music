import { EMAIL } from "../content";

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="wrap">
                <h2>Make your event merry</h2>
                <hr className="rule" />
                <p>Tell us the date, place and vibe and we’ll bring the music.</p>
                <a className="btn" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
        </section>
    );
}
