// 泛型函数
function createArray<T>(length: number, value: T) {
    let result=[]
    for(let i=0;i<length;i++){
    result[i]=value
    }
    return result
}
createArray<number>(4,100)
createArray<string>(4,'100')

// 泛型约束
interface LengthObj {
    length:number
}
// 限制传进来的参数，必须要有一个length属性
function logLen<T extends LengthObj>(obj:T){
    console.log(obj.length)
}

logLen({length:100})

logLen(['100']) // 数组也有length属性
