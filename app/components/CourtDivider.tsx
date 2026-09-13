/**
 * CourtDivider — gold boccia court band placed between homepage sections.
 * Echoes the footer's court motif: throwing-box grid, V-line sweep,
 * boundary lines and a glowing jack. Pure CSS, zero runtime cost.
 */
export default function CourtDivider({ label }: { label?: string }) {
  return (
    <div className="court-divider" role="separator" aria-hidden={!label ? true : undefined}>
      {label && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent px-4 text-[10px] font-black tracking-[0.35em] uppercase text-[#8B6914]/80 select-none">
          {label}
        </span>
      )}
    </div>
  );
}
