export interface Token {
  type: string;
  value: string;
}

export const tokenValues = {
  i: "identifier",
  ":": "assignment",
  "|": "composition",
  ";": "params",
};
