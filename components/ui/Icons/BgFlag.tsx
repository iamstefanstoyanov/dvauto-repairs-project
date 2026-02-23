export function BgFlag({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5 3"
      className={className}
      aria-hidden="true"
    >
      <rect width="5" height="1" y="0" fill="#fff" />
      <rect width="5" height="1" y="1" fill="#00966E" />
      <rect width="5" height="1" y="2" fill="#D62612" />
    </svg>
  );
}
