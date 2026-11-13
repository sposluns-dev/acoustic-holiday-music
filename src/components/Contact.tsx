import { EMAIL, text } from "../content";

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="wrap">
                <h2>{text.contactHeading}</h2>
                <hr className="rule" />
                <p>{text.contactParagraph}</p>
                <a className="btn" href={`mailto:${EMAIL}`}>{text.email}</a>
            </div>
        </section>
    );
}
