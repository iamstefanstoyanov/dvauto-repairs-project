const Phone = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-.65 1.548l-.344.227a.25.25 0 0 0-.1.249c.21.99.792 2.295 1.726 3.229.934.934 2.24 1.516 3.229 1.726a.25.25 0 0 0 .249-.1l.227-.344a1.5 1.5 0 0 1 1.548-.65l3.223.716A1.5 1.5 0 0 1 18 14.352v1.148A1.5 1.5 0 0 1 16.5 17h-1C7.768 17 1 10.232 1 3.5V3.5Z" clipRule="evenodd" />
    </svg>
  );
};

export default Phone;
