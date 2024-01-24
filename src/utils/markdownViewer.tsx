import Markdown from "react-markdown";
import fs from "fs";

interface MarkdownViewerI {
  file: string;
}
export default function MarkdownViewer({ file }: MarkdownViewerI) {
  const data = fs.readFileSync(`public/markdown/${file}.md`, "utf8");
  return <Markdown>{data}</Markdown>;
}
