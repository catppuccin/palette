export function indent(string: string, indent: string) {
  return string.split("\n").map((line) =>
    line.length > 0 ? `${indent}${line}` : ""
  ).join("\n");
}
