
import { addieren } from "./math.js";

test("addiert 2 + 2, ergebnis soll 4 sein", () => {
    expect(addieren(2, 2)).toBe(4);
});
