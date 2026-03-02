"use client";

import Chevron from "@/components/ui/Icons/Chevron";
import Star from "@/components/ui/Icons/Star";
import User from "@/components/ui/Icons/User";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import useTranslation from "@/hooks/useTranslation";
import { cn } from "@/utils/cn";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

interface Review {
  name: string;
  rating: number;
  text: string;
}

const REVIEWS: Review[] = [
  {
    name: "James Mitchell",
    rating: 5,
    text: "Absolutely fantastic service from start to finish. I brought my car in for a full brake replacement and they had it done the same day. The team was professional, transparent about pricing, and even gave me a lift home while I waited. I've been to many garages over the years but this is by far the best experience I've had. The attention to detail is remarkable — they even cleaned the car before handing it back. Will definitely be coming back for all future servicing.",
  },
  {
    name: "Sarah Thompson",
    rating: 5,
    text: "I had an emergency breakdown on a Sunday evening and called their 24/7 line not expecting much. Within 30 minutes someone was on their way to help me. They diagnosed the issue on the spot, towed my car to the garage, and had it ready by Monday afternoon. Incredible response time and genuinely caring staff. Cannot recommend them enough.",
  },
  {
    name: "David Kowalski",
    rating: 4,
    text: "Great garage with honest mechanics. Took my van in for a suspension issue and they fixed it quickly at a fair price. The only reason for 4 stars instead of 5 is the waiting area could use a bit of updating, but the quality of work is top-notch.",
  },
  {
    name: "Emily Richardson",
    rating: 5,
    text: "I've been bringing both my cars here for over two years now and have never been disappointed. From simple oil changes to more complex diagnostics, they always deliver excellent results. The staff remembers your name, explains everything clearly, and never tries to upsell unnecessary work. It's rare to find a garage you can truly trust these days, but DVMI has earned my complete confidence. I've recommended them to all my friends and family and everyone has had the same positive experience.",
  },
  {
    name: "Michael O'Brien",
    rating: 5,
    text: "Had my air conditioning serviced here before summer. Quick turnaround, fair pricing, and the AC is blowing ice cold now. Very happy with the result. The technician even explained what was causing the issue so I could prevent it in the future.",
  },
  {
    name: "Priya Patel",
    rating: 4,
    text: "Reliable and trustworthy garage. They replaced all four tyres and did a wheel alignment for me. Everything was done within a couple of hours and the car drives like new. Pricing was competitive compared to other quotes I got. Will return.",
  },
];

const MAX_CHARS = 150;

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={cn("h-4 w-4", i < rating ? "text-amber-400" : "text-gray-300")} />
    ))}
  </div>
);

const ReviewCard = ({
  review,
  readMoreLabel,
  showLessLabel,
}: {
  review: Review;
  readMoreLabel: string;
  showLessLabel: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > MAX_CHARS;
  const displayText = isLong && !expanded ? review.text.slice(0, MAX_CHARS) + "..." : review.text;

  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white/90 p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
          <User className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{review.name}</p>
          <StarRating rating={review.rating} />
        </div>
      </div>
      <p className="text-sm leading-relaxed text-gray-600">{displayText}</p>
      {isLong && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 self-start text-xs font-medium text-red-600 hover:text-red-700"
        >
          {expanded ? showLessLabel : readMoreLabel}
        </button>
      )}
    </div>
  );
};

const Reviews = () => {
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
    <section id="reviews" className="border border-gray-300 bg-transparent px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={t.sections.reviews.title} subtitle={t.sections.reviews.subtitle} />

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {REVIEWS.map((review, i) => (
              <div key={i} className="keen-slider__slide">
                <ReviewCard
                  review={review}
                  readMoreLabel={t.sections.reviews.readMore}
                  showLessLabel={t.sections.reviews.showLess}
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute -left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 md:-left-5 md:h-10 md:w-10"
            aria-label="Previous review"
          >
            <Chevron direction="left" className="h-5 w-5 text-gray-700" />
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute -right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 md:-right-5 md:h-10 md:w-10"
            aria-label="Next review"
          >
            <Chevron direction="right" className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
