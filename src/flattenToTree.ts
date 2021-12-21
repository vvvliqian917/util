/*
 * @Author: your name
 * @Date: 2021-12-21 09:47:00
 * @LastEditTime: 2021-12-21 10:43:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /util/src/flattenToTree.ts
 */
//
type Source=Array<{[key:string]:any}>
type Result=Array<{[key:string]:any}&{children:Array<any>}>

const flattenTree=function (arr:Source):Result{
  var res:Result=[];
  function iter(index:number,res:Source){
    if(index<=arr.length-1){
      arr[index].children=[]
      res.push(arr[index]);
      iter(index+1,arr[index].children)
    }
  }
  iter(0,res);
  return res
}
export default  flattenTree



