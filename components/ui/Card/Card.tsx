import { cn } from "@/utils/cn";
import { ComponentType, ReactNode } from "react";

type CardVariant = "service" | "feature" | "contact";

type CardProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description?: string;
  variant?: CardVariant;
  children?: ReactNode;
};

const baseWrapper = "rounded-lg border border-gray-200 p-6 shadow-sm";
const baseCircle = "mb-4 flex items-center justify-center rounded-full bg-red-600 text-white";
const baseTitle = "mb-2 font-semibold";

const centered = "flex flex-col items-center text-center";

const variantStyles: Record<
  CardVariant,
  { wrapper: string; circle: string; icon: string; title: string }
> = {
  service: {
    wrapper: cn(baseWrapper, "bg-white"),
    circle: cn(baseCircle, "h-12 w-12"),
    icon: "h-6 w-6",
    title: cn(baseTitle, "text-base"),
  },
  feature: {
    wrapper: cn(baseWrapper, centered, "bg-white/90"),
    circle: cn(baseCircle, "h-14 w-14"),
    icon: "h-7 w-7",
    title: cn(baseTitle, "text-base"),
  },
  contact: {
    wrapper: cn(baseWrapper, centered, "bg-white/90"),
    circle: cn(baseCircle, "h-14 w-14"),
    icon: "h-6 w-6",
    title: cn(baseTitle, "text-lg"),
  },
};

const Card = ({ icon: Icon, title, description, variant = "service", children }: CardProps) => {
  const styles = variantStyles[variant];

  return (
    <div className={styles.wrapper}>
      <div className={styles.circle}>
        <Icon className={styles.icon} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      {children
        ? children
        : description && <p className="text-sm leading-relaxed text-gray-600">{description}</p>}
    </div>
  );
};

export default Card;
