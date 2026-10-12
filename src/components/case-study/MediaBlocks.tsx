import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import type { ProjectImage, ProjectVideo } from "@/data/projects";

function Caption({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mt-3 text-base text-muted">{children}</p>;
}

export function LargeImage({ image }: { image: ProjectImage }) {
  return (
    <Reveal className="container-content py-12 md:py-20">
      <figure>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-tint">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1440px) 90vw, 1320px"
            className={image.fit === "contain" ? "object-contain" : "object-cover"}
          />
        </div>
        <Caption>{image.caption}</Caption>
      </figure>
    </Reveal>
  );
}

export function ImageGrid({ images }: { images: ProjectImage[] }) {
  return (
    <div className="container-content grid gap-8 py-12 md:grid-cols-2 md:py-20">
      {images.map((image, index) => (
        <Reveal key={`${image.src}-${index}`} delay={index * 0.05}>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-tint">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className={image.fit === "contain" ? "object-contain" : "object-cover"}
              />
            </div>
            <Caption>{image.caption}</Caption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export function FullWidthVisual({ image, video }: { image?: ProjectImage; video?: ProjectVideo }) {
  if (!image && !video) return null;
  return (
    <Reveal className="py-12 md:py-20">
      <figure>
        {image ? (
          <div className="relative aspect-[16/8] w-full bg-tint">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className={image.fit === "contain" ? "object-contain" : "object-cover"}
            />
          </div>
        ) : (
          <video controls playsInline poster={video?.poster} className="aspect-video w-full bg-ink">
            <source src={video?.src} />
          </video>
        )}
        <div className="container-content">
          <Caption>{image?.caption ?? video?.caption}</Caption>
        </div>
      </figure>
    </Reveal>
  );
}

export function CaptionedArtefact({ image, description }: { image: ProjectImage; description?: string }) {
  return (
    <Reveal className="container-content py-12 md:py-20">
      <figure className="grid gap-6 md:grid-cols-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-tint md:col-span-9">
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 90vw, 70vw" className="object-contain" />
        </div>
        <figcaption className="text-base text-muted md:col-span-3">
          {description ?? image.caption}
        </figcaption>
      </figure>
    </Reveal>
  );
}
