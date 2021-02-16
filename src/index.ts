type g = 'girl'|'boy'
type U = {
    name:string
    age:number
    gender:g
}

function getName(name:U):U{
    return name
}
console.log(getName({
    name:'faf',
    age:12,
    gender:"boy"
}))
type arg = hs[]
type hs = {
    name:string
    age:number
}
function createArg(arg):arg
/** 

@param arg
 arg类型name和age
  **/




function createArg(arg:arg){
    // for(let i=0;i<10;i++){
    //    arg.push({
    //         name:'XXX',
    //         age:Math.floor(Math.random()*30)
    //    })
    // }
   return arg
}
console.log(createArg([]))