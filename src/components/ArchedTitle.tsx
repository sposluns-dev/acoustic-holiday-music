/**
 * Band name set on an upward arc, with the same layered red drop shadow as the other title text.
 *
 * The arc is ~918 units long. The text is forced to an exact length (textLength) and placed by a
 * fixed startOffset, so it always fits on the arc: phone browsers measure fonts differently, and
 * text longer than its path gets its first/last letters dropped (and Safari ignores text-anchor
 * on textPath).
 */
const ARC = "M60 255 A 900 900 0 0 1 940 255";
const ARC_LENGTH = 917.6;
const TEXT_LENGTH = 830;

function Line({ text, dx, dy, fill }: { text: string; dx: number; dy: number; fill: string }) {
    return (
        <text fill={fill} fontSize="94" transform={`translate(${dx} ${dy})`}>
            <textPath
                href="#title-arc"
                startOffset={(ARC_LENGTH - TEXT_LENGTH) / 2}
                textLength={TEXT_LENGTH}
                lengthAdjust="spacingAndGlyphs"
            >
                {text}
            </textPath>
        </text>
    );
}

export default function ArchedTitle({ text }: { text: string }) {
    return (
        <h1 className="arched" aria-label={text}>
            <svg viewBox="-70 20 1140 245" aria-hidden="true">
                <defs><path id="title-arc" d={ARC} /></defs>
                <Line text={text} dx={10} dy={10} fill="rgba(120,20,28,.6)" />
                <Line text={text} dx={5} dy={5} fill="#d6303a" />
                <Line text={text} dx={0} dy={0} fill="#fff" />
            </svg>
        </h1>
    );
}
