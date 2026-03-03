"use client";

import Chevron from "@/components/ui/Icons/Chevron";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import useTranslation from "@/hooks/useTranslation";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlN2ViIi8+PC9zdmc+";

const IMAGES = [
  { src: "/gallery/image1.png", alt: "Image" },
  { src: "/gallery/image2.png", alt: "Image" },
  { src: "/gallery/image3.png", alt: "Image" },
];

const GalleryCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      className="h-64 w-full object-cover md:h-72 lg:h-80"
      quality={90}
      placeholder="blur"
      blurDataURL={BLUR_PLACEHOLDER}
    />
  </div>
);

const Gallery = () => {
  const t = useTranslation();

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  return (
    <section id="gallery" className="border border-gray-300 bg-gray-100/90 px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title={t.sections.gallery.title || "Gallery"}
          subtitle={t.sections.gallery.subtitle || "Check out our photos"}
        />

        <div className="relative px-5 md:px-7">
          <div ref={sliderRef} className="keen-slider">
            {IMAGES.map((image, i) => (
              <div key={i} className="keen-slider__slide">
                <GalleryCard src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>

          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 md:h-10 md:w-10"
            aria-label="Previous image"
          >
            <Chevron direction="left" className="h-5 w-5 text-gray-700" />
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 md:h-10 md:w-10"
            aria-label="Next image"
          >
            <Chevron direction="right" className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
