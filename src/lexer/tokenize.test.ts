import { file_to_string } from "../test_fixtures/file_to_string";
import { tokenize } from "./tokenize";

describe("tokenize", () => {
  it("needs tests", async () => {
    const input = await file_to_string("assignment.zl");
    const result = tokenize(input);
    expect(result).toMatchSnapshot();
  });
});
