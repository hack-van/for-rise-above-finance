// https://observablehq.com/@d3/word-cloud

import * as d3 from "d3";
import d3Cloud from "d3-cloud";
import seedrandom from "seedrandom";

export default function WordCloud(
  text: string | string[],
  {
    size = (group: Array<any>) => group.length, // Given a grouping of words, returns the size factor for that word
    color = (d: any) => "currentColor", // Given a word, returns the color for that word
    word = (d: unknown) => d, // Given an item of the data array, returns the word
    marginTop = 0, // top margin, in pixels
    marginRight = 0, // right margin, in pixels
    marginBottom = 0, // bottom margin, in pixels
    marginLeft = 0, // left margin, in pixels
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    maxWords = 250, // maximum number of words to extract from the text
    fontFamily = "sans-serif", // font family
    fontScale = 15, // base font size
    padding = 0, // amount of padding between the words (in pixels)
    rotate = 0, // a constant or function to rotate the words
    invalidation, // when this promise resolves, stop the simulation
  }: any = {}
) {
  const words =
    typeof text === "string" ? text.split(/\W+/g) : Array.from(text);

  const data = d3
    .rollups(words, size, (w) => w)
    .sort(([, a], [, b]) => d3.descending(a as any, b as any))
    .slice(0, maxWords)
    .map(([key, size]) => ({ text: word(key), size, color: color(key) }));

  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("font-family", fontFamily)
    .attr("text-anchor", "middle")
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  const g = svg
    .append("g")
    .attr("transform", `translate(${marginLeft},${marginTop})`);

  const cloud = d3Cloud()
    .random(() => seedrandom("2")())
    .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
    .words(data as any)
    .padding(padding)
    .rotate(rotate)
    .font(fontFamily)
    .fontSize((d: any) => Math.sqrt(d.size) * fontScale)
    .on("word", ({ size, x, y, rotate, text, color }: any) => {
      g.append("text")
        .attr("fill", color)
        .attr("font-size", size)
        .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
        .text(text);
    });

  cloud.start();
  invalidation && invalidation.then(() => cloud.stop());
  return svg.node();
}
