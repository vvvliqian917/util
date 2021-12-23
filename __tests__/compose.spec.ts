/*
 * @Author: your name
 * @Date: 2021-12-23 09:38:15
 * @LastEditTime: 2021-12-23 10:24:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /util/__tests__/compose.spec.ts
 */
import { compose } from "../src";

describe("compose", () => {
    test("compose", () => {
        function a(str:string){
          return str.toUpperCase()
        }
        function b(name:string,sex:string){
          return `hello ${name} ${sex}`
        }
        expect(compose(a,b)('lily','女')).toEqual('HELLO LILY 女');
    });
});