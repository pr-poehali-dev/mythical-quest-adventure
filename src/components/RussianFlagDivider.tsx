export default function RussianFlagDivider() {
  return (
    <div className="w-full flex items-center gap-4 px-8 md:px-16 py-2">
      <div className="flex-1 h-px bg-neutral-200" />
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-300 flex-shrink-0">
        <path d="M16 27 C10 24 5 18 5 12 C5 7 9.5 3 16 3 C22.5 3 27 7 27 12 C27 18 22 24 16 27Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3 C16 3 11 9 11 14" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M16 3 C16 3 21 9 21 14" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M16 10 C14 8 12 9 12 11 C12 14 16 16 16 16 C16 16 20 14 20 11 C20 9 18 8 16 10Z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="27" x2="16" y2="31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <div className="flex-1 h-px bg-neutral-200" />
    </div>
  );
}
