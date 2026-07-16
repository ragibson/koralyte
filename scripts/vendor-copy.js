const { cp, mkdir, readFile } = require("node:fs/promises");
const { join, dirname } = require("node:path");

const root = join(__dirname, "..");

async function main() {
  const { vendor } = JSON.parse(
    await readFile(join(root, "package.json"), "utf-8"),
  );

  for (const { from, to } of vendor) {
    const dest = join(root, to);
    await mkdir(dirname(dest), { recursive: true });
    await cp(join(root, from), dest, { recursive: true, dereference: true });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
