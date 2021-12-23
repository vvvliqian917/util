/*
 * @Author: your name
 * @Date: 2021-12-23 12:39:45
 * @LastEditTime: 2021-12-23 12:58:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /util/src/instanceof.ts
 */
export default function myInstanceof(source:Object,target:any){
  const prototype=target.prototype;
  let proto=Object.getPrototypeOf(source);
  while(true){
    if(!proto){
        return false
    }
    if(prototype===proto){
      return true
    }
    proto=Object.getPrototypeOf(proto)
  }

}