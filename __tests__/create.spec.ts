/*
 * @Author: your name
 * @Date: 2021-12-23 09:38:15
 * @LastEditTime: 2021-12-23 16:08:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /util/__tests__/compose.spec.ts
 */
import { create } from "../src";

describe("create", () => {
    test("create", () => {
       
        expect(create({name:'li'}).name).toEqual('li');
    });
});
