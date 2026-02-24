import { ComponentType, ReactNode } from "react";

type CardVariant = "service" | "feature" | "contact";

type CardProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description?: string;
  variant?: CardVariant;
  children?: ReactNode;
};

const variantStyles: Record<
  CardVariant,
  { wrapper: string; circle: string; icon: string; title: string }
> = {
  service: {
    wrapper: "rounded-lg border border-gray-200 bg-white p-6 shadow-sm",
    circle: "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white",
    icon: "h-6 w-6",
    title: "mb-2 text-base font-semibold",
  },
  feature: {
    wrapper:
      "flex flex-col items-center rounded-lg border border-gray-200 bg-white/90 p-6 text-center shadow-sm",
    circle: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white",
    icon: "h-7 w-7",
    title: "mb-2 text-base font-semibold",
  },
  contact: {
    wrapper:
      "flex flex-col items-center rounded-lg border border-gray-200 bg-white/90 p-6 text-center shadow-sm",
    circle: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white",
    icon: "h-6 w-6",
    title: "mb-2 text-lg font-semibold",
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
