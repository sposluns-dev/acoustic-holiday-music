import type { ImgHTMLAttributes } from "react";
import type { Photo } from "../content";

type Props = {
    photo: Photo;
    sizes: string;
    priority?: boolean;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "sizes" | "alt" | "width" | "height">;

/** Serves the 1x "small" WebP to narrow screens and the "large" one to wide/retina screens. */
export default function ResponsiveImage({ photo, sizes, priority = false, ...rest }: Props) {
    const smallW = Math.round(photo.width / 2);
    return (
        <img
            src={`/images/${photo.name}-large.webp`}
            srcSet={`/images/${photo.name}-small.webp ${smallW}w, /images/${photo.name}-large.webp ${photo.width}w`}
            sizes={sizes}
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
            loading={priority ? undefined : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            {...rest}
        />
    );
}
