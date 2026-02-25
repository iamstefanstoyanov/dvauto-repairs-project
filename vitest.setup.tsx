import "@testing-library/jest-dom/vitest";
import React from "react";
import { beforeEach, vi } from "vitest";

beforeEach(() => {
  localStorage.clear();
});

const MockIntersectionObserver = vi.fn(function (this: Record<string, unknown>) {
  this.observe = vi.fn();
  this.unobserve = vi.fn();
  this.disconnect = vi.fn();
});
vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

vi.stubGlobal("scrollTo", vi.fn());

vi.mock("next/image", () => ({
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

vi.mock("keen-slider/react", () => ({
  useKeenSlider: () => [React.createRef(), { current: { prev: vi.fn(), next: vi.fn() } }],
}));

vi.mock("keen-slider/keen-slider.min.css", () => ({}));
