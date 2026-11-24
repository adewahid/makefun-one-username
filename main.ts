import { mkdirSync, writeFileSync } from "node:fs";

const text = "adewahid205036";

// The gate only accepts one word, 1-30 characters, exactly the entrant's own
// make.fun username: refuse to write anything out of spec.
if ([...text].length < 1 || [...text].length > 30 || /\s/.test(text)) {
  throw new Error(`entry must be one word of 1-30 characters, got ${[...text].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
