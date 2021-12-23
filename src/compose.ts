export default function compose<T extends Function[]>(...arg:T):Function{
  return function(...r:any[]):any{
    if(!arg||!arg.length){
      return r
    }
    if(arg.length===1){
      return arg[0](...r)
    }
    return arg.reduceRight((pre,cur,index)=>{
      return index===arg.length-1? cur(...pre):cur(pre)
    },r)
  }
}
