import useActiveSection from "@/hooks/useActiveSection";
import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("useActiveSection", () => {
  it("returns 'home' as the default active section", () => {
    const { result } = renderHook(() => useActiveSection());
    expect(result.current).toBe("home");
  });

  it("creates an IntersectionObserver on mount", () => {
    renderHook(() => useActiveSection());
    expect(IntersectionObserver).toHaveBeenCalled();
  });

  it("observes all expected section elements", () => {
    const sectionIds = ["home", "what-we-do", "why-us", "reviews", "contact"];
    const elements: HTMLElement[] = [];

    sectionIds.forEach((id) => {
      const el = document.createElement("section");
      el.id = id;
      document.body.appendChild(el);
      elements.push(el);
    });

    const observeMock = vi.fn();
    vi.mocked(IntersectionObserver).mockImplementation(function (this: Record<string, unknown>) {
      this.observe = observeMock;
      this.unobserve = vi.fn();
      this.disconnect = vi.fn();
      return this as unknown as IntersectionObserver;
    } as unknown as typeof IntersectionObserver);

    renderHook(() => useActiveSection());
    expect(observeMock).toHaveBeenCalledTimes(5);

    elements.forEach((el) => el.remove());
  });

  it("disconnects the observer on unmount", () => {
    const disconnectMock = vi.fn();
    vi.mocked(IntersectionObserver).mockImplementation(function (this: Record<string, unknown>) {
      this.observe = vi.fn();
      this.unobserve = vi.fn();
      this.disconnect = disconnectMock;
      return this as unknown as IntersectionObserver;
    } as unknown as typeof IntersectionObserver);

    const { unmount } = renderHook(() => useActiveSection());
    unmount();
    expect(disconnectMock).toHaveBeenCalled();
  });
});
