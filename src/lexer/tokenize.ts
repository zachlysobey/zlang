import { Token } from "../token/token";

export function tokenize(zlang_source: string): Token[] {
  return zlang_source.split("\n").map((s) => ({
    type: "token",
    value: s,
  }));
}
