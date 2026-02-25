import { siteConfig } from "@/config/site";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TopBar from "../TopBar";

describe("TopBar", () => {
  it("renders the email link", () => {
    render(<TopBar />);
    const emailLink = screen.getByRole("link", { name: new RegExp(siteConfig.email) });
    expect(emailLink).toHaveAttribute("href", `mailto:${siteConfig.email}`);
  });

  it("renders the phone link", () => {
    render(<TopBar />);
    const phoneLink = screen.getByRole("link", { name: new RegExp(siteConfig.phone) });
    expect(phoneLink).toHaveAttribute("href", `tel:${siteConfig.phone}`);
  });

  it("renders the Facebook social link", () => {
    render(<TopBar />);
    const fbLink = screen.getByRole("link", { name: /facebook/i });
    expect(fbLink).toHaveAttribute("href", siteConfig.socials.facebook);
    expect(fbLink).toHaveAttribute("target", "_blank");
  });

  it("renders the Instagram social link", () => {
    render(<TopBar />);
    const igLink = screen.getByRole("link", { name: /instagram/i });
    expect(igLink).toHaveAttribute("href", siteConfig.socials.instagram);
    expect(igLink).toHaveAttribute("target", "_blank");
  });
});
