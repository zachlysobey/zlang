import { promises as fs } from "fs";

export async function file_to_string(file_name: string) {
  return fs.readFile(`${__dirname}/${file_name}`, { encoding: "utf-8" });
}
