import React from "react";
import WordCloud_d3 from "../dirty/WordCloud";

const WordCloud: React.FC<{
  words: { text: string; value: number }[];
  style?: React.CSSProperties;

  options?: {
    fontFamily: string;
    fontSizes: [number, number];
    padding: number;
  };
}> = ({ words, style, options }) => {
  const id = React.useId();

  React.useEffect(() => {
    if (words.length === 0) return;

    const wc = WordCloud_d3(
      words.flatMap((d) => Array(d.value).fill(d.text)),
      {
        width: style?.width || 300,
        height: style?.height || 200,
        fontFamily: options?.fontFamily || "serif",
        fontScale: options
          ? (size: number) =>
              options.fontSizes[0] +
              (options.fontSizes[1] - options.fontSizes[0]) * size
          : 15,
        padding: options?.padding || 1,
      }
    );

    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = "";
      if (wc) element.appendChild(wc);
    }

    return () => {
      if (element) {
        element.innerHTML = "";
      }
    };
  }, [words, style, options, id]);

  return <div id={id}></div>;
};

export default WordCloud;
