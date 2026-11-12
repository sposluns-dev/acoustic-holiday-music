import { songs } from "../content";

export default function Repertoire() {
    return (
        <section id="music">
            <div className="wrap">
                <div className="eyebrow">Repertoire</div>
                <h2>A taste of the setlist</h2>
                <hr className="rule" />
                <ul className="songs">
                    {songs.map((s) => <li key={s}>{s}</li>)}
                </ul>
            </div>
        </section>
    );
}
