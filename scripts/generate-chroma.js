const { execSync } = require("node:child_process");
const { mkdir, writeFile } = require("node:fs/promises");
const { join } = require("node:path");

const root = join(__dirname, "..");

function generate(style, wrapper) {
  const raw = execSync(`hugo gen chromastyles --style=${style}`, {
    cwd: root,
    encoding: "utf-8",
  });

  let css = raw
    .replace(/background-color:#f7f7f7/g, "background-color:#fff")
    .replace(/background-color:#dedede/g, "background-color:#e5e5e5")
    .replace(/background-color:#6e7681/g, "background-color:#333")
    .replace(/;-webkit-text-size-adjust:none/g, "");

  css = css
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => `  ${line}`)
    .join("\n");

  return `${wrapper} {\n${css}\n}`;
}

async function main() {
  const dest = join(root, "assets/lib/chroma/chroma.css");
  await mkdir(join(root, "assets/lib/chroma"), { recursive: true });

  const light = generate("github", "html:not(.dark)");
  const dark = generate("github-dark", "html.dark");

  await writeFile(dest, `${light}\n\n${dark}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
