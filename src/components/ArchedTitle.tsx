/** Band name set on an upward arc, with the same layered red drop shadow as the other title text. */
const ARC = "M60 255 A 900 900 0 0 1 940 255";

function Line({ text, dx, dy, fill }: { text: string; dx: number; dy: number; fill: string }) {
    return (
        <text fill={fill} fontSize="112" transform={`translate(${dx} ${dy})`} textAnchor="middle">
            <textPath href="#title-arc" startOffset="50%">{text}</textPath>
        </text>
    );
}

export default function ArchedTitle({ text }: { text: string }) {
    return (
        <h1 className="arched" aria-label={text}>
            <svg viewBox="0 20 1000 245" aria-hidden="true">
                <defs><path id="title-arc" d={ARC} /></defs>
                <Line text={text} dx={10} dy={10} fill="rgba(120,20,28,.6)" />
                <Line text={text} dx={5} dy={5} fill="#d6303a" />
                <Line text={text} dx={0} dy={0} fill="#fff" />
            </svg>
        </h1>
    );
}
