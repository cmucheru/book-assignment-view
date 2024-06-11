// src/utils/highlightUtils.js
export const highlightText = (text, highlight) => {
  const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escapedHighlight})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: "yellow" }}>{part}</span>
    ) : (
      part
    )
  );
};
