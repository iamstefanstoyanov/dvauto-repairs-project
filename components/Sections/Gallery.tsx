"use client";

import Chevron from "@/components/ui/Icons/Chevron";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import useTranslation from "@/hooks/useTranslation";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const IMAGES = ["/gallery/image1.jpg", "/gallery/image2.jpg", "/gallery/image3.jpg"];

const GalleryCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      className="h-64 w-full object-cover md:h-72 lg:h-80"
      quality={90}
      priority={false}
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

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {IMAGES.map((src, i) => (
              <div key={i} className="keen-slider__slide">
                <GalleryCard src={src} alt={`Gallery image ${i + 1}`} />
              </div>
            ))}
          </div>

          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute -left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 md:-left-5 md:h-10 md:w-10"
            aria-label="Previous image"
          >
            <Chevron direction="left" className="h-5 w-5 text-gray-700" />
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute -right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 md:-right-5 md:h-10 md:w-10"
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
