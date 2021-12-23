/*
 * @Author: your name
 * @Date: 2021-12-23 15:57:16
 * @LastEditTime: 2021-12-23 16:05:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /util/src/create.ts
 */
export default function create(obj:any){
  function F (){

  }
  F.prototype=obj;
  // @ts-ignore
  return new F()
}