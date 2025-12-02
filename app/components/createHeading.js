'use client';

export default function CreateHeading({
  parts,
  highlightIndex,
  wrapperClass = 'title text-3xl md:text-7xl/[80px] text-secondary',
  highlightClass = 'text-primary',
}) {
  return (
    <h1 className={wrapperClass}>
      {parts.map((part, i) => {
        if (part === '\n') {
          return <br key={i} />;
        }

        const isHighlighted = i === highlightIndex;

        return isHighlighted ? (
          <span key={i} className={highlightClass}>
            {part}
          </span>
        ) : (
          <span className="mx-2" key={i}>
            {part}
          </span>
        );
      })}
    </h1>
  );
}
