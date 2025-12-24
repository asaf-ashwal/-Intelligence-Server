import { existsSync } from "fs";
import { readFile, writeFile, open } from "fs/promises";
export async function reed_file(path) {
  try {
    const res = await readFile(path, "utf8");
    const data = !res ? [] : await JSON.parse(res);

    return data;
  } catch (error) {
    return false;
  }
}

export async function write_file(data, path) {
  await writeFile(path, JSON.stringify(data), "utf8");
  return true;
}

export async function creatFiles() {
  let files = ["data/agents.json", "data/reports.json", "data/users.json"];
  files.forEach(async (path) => {
    const exists = existsSync(path);
    if (!exists) {
      await writeFile(path, "[]", "utf-8");
    }
  });
}
