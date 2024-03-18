async function multiply1(x){
    return  x*2;
}
function multiply2(x){
     let rr = x*4;
    return  Promise.resolve(rr);
}
function add1(x, fn ){
     sum = x+10;
    return fn(sum);
}
// const ee = add1(4, multiply1).then((res, err)=>{
//     console.log(res,"---u")
// console.log(err,"---w")
// })
const ee = add1(4, multiply2).then(function(res){
   console.log(res+2)
}, function(err){
   console.log(err)
})