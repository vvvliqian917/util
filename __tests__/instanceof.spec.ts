
import { instanceof as myInstance } from "../src";
describe("myInstance", () => {
    test("myInstance", () => {
        expect(myInstance({},Object)).toEqual(true)
    });
});