import { useRef } from "react";
import { tracks } from "../content";

export default function Tracks() {
    const players = useRef<HTMLAudioElement[]>([]);

    // Only one track plays at a time.
    const pauseOthers = (current: HTMLAudioElement) => {
        players.current.forEach((a) => a && a !== current && a.pause());
    };

    return (
        <ul className="tracks" id="music">
            {tracks.map((t, i) => (
                <li key={t.file}>
                    <span className="track-title">{t.title}</span>
                    <audio
                        ref={(el) => { if (el) players.current[i] = el; }}
                        controls
                        preload="none"
                        src={`/audio/${t.file}`}
                        onPlay={(e) => pauseOthers(e.currentTarget)}
                    />
                </li>
            ))}
        </ul>
    );
}
