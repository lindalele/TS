// 在TS中对于对象数据的类型注解：，除了使用interface，还可以使用type关键字，两者都可以定义对象类型，

// type和interface相同点：
// 都能描述对象类型
// 都能实现继承，interface使用extends,type使用配合交叉类型&
// 不同点：
// type除了能够描述对象类型，还可以自定义其他类型，比如基本类型、元组、联合类型等
// 同名的interface会自动合并（属性取并集，不能出现类型冲突），而type会报错。
interface Item{
    name:string
}
interface Item{
    age:number
}
let item:Item = {
    name:'张三',
    age:18
}

// 推荐使用type,因为type更加灵活,interface能做的，type也能做
// 嵌套
type Data={
    title:string
    content:string
}
type ResData={
    code:number
    data:Data
}
let res:ResData={
    code:200,
    data:{
        title:'标题',
        content:'内容'
    }
}

// type继承： type+交叉类型模拟继承
// 类型别名配合交叉类型&可以模拟继承，同样可以实现类型复用
// 父接口
type GoodsType = {
    id: string;
    price: number;
}
子接口模拟继承 （交叉类型 &）
type DisGoodsType = GoodsType & {
    disPrice:number
}
let goods: DisGoodsType = {
    // 属性缺一不可
    id: '123',
    price: 100,
    disPrice: 80
}

// type定义函数类型
type CalcFn = (n1: number, n2: number) => number
let calc: CalcFn = (a, b) => {
    return a + b
}
let p: Person = {
    name: '张三',
    age: 18
}

