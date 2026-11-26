// Vending Machine Pickup Line — One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes exactly one pickup line, spoken by the vending machine itself, to /output/entry.txt.
// The line is kept as a single constant so the program's output is deterministic.
import { mkdirSync, writeFileSync, rmSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My coils only spin for the good stuff, and they've been spinning since you walked by \u2014 press B7, the chocolate's on me.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Clear only the contents of the output directory; never remove the directory itself
// (the grader mounts it root-owned).
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
