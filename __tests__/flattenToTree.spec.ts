/*
 * @Author: your name
 * @Date: 2021-12-21 10:29:33
 * @LastEditTime: 2021-12-21 10:47:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /util/__tests__/flattenToTree.spec.ts
 */
import { flattenToTree } from "../src";

describe("flattenToTree", () => {
    test("flattenToTree", () => {
        expect(flattenToTree([{id:1},{id:2}])).toEqual([{id:1,children:[{id:2,children:[]}]}]);
    });
});
