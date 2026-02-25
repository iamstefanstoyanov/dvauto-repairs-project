import { render, type RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactElement } from "react";
import { LanguageProvider } from "@/context/LanguageContext";

const AllProviders = ({ children }: { children: React.ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

export const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => ({
  user: userEvent.setup(),
  ...render(ui, { wrapper: AllProviders, ...options }),
});

export { render, userEvent };
