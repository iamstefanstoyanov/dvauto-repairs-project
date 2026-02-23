interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-2xl font-extrabold uppercase tracking-widest text-gray-900 md:text-3xl">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded bg-red-600" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
