import markdownIt from "markdown-it";
import katex from "@vscode/markdown-it-katex";

export default function (eleventyConfig) {
  // Markdown with $inline$ and $$display$$ LaTeX, rendered at build time
  const md = markdownIt({ html: true, linkify: true }).use(katex.default ?? katex);
  eleventyConfig.setLibrary("md", md);

  // Copy as-is: images, css, playground toys, KaTeX css + fonts
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/playground");
  eleventyConfig.addPassthroughCopy({
    "node_modules/katex/dist/katex.min.css": "css/katex.min.css",
    "node_modules/katex/dist/fonts": "css/fonts",
  });

  // Playground files are copied raw, never run through templating
  eleventyConfig.ignores.add("src/playground/**");

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md").filter((p) => !p.inputPath.endsWith("index.md"))
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("head", (arr, n) => arr.slice(0, n));

  eleventyConfig.addFilter("dateFmt", (d) =>
    new Date(d).toISOString().slice(0, 10)
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
    markdownTemplateEngine: "njk",
  };
}
