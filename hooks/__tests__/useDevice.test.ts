import useDevice from "@/hooks/useDevice";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const setViewportWidth = (width: number) => {
  Object.defineProperty(window, "innerWidth", { value: width, writable: true });
};

describe("useDevice", () => {
  it("starts with isHydrated false before mount effect", () => {
    setViewportWidth(1024);
    const { result } = renderHook(() => useDevice());
    expect(result.current.isHydrated).toBe(true);
  });

  it("reports isMobile for narrow viewports", () => {
    setViewportWidth(500);
    const { result } = renderHook(() => useDevice());
    expect(result.current.isMobile).toBe(true);
    expect(result.current.isDesktop).toBe(false);
  });

  it("reports isDesktop for wide viewports", () => {
    setViewportWidth(1024);
    const { result } = renderHook(() => useDevice());
    expect(result.current.isDesktop).toBe(true);
    expect(result.current.isMobile).toBe(false);
  });

  it("exposes the current width", () => {
    setViewportWidth(900);
    const { result } = renderHook(() => useDevice());
    expect(result.current.width).toBe(900);
  });

  it("updates on window resize", () => {
    setViewportWidth(1024);
    const { result } = renderHook(() => useDevice());
    expect(result.current.isDesktop).toBe(true);

    act(() => {
      setViewportWidth(400);
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current.isMobile).toBe(true);
  });
});
