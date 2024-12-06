// 创建测试TS环境的环境
// npm create vite@latest ts-pro --template vanilla-ts
// npm install
// npm run dev


// 常用类型注解：
// js已有类型：number、string、boolean、null、undefined
// 复杂类型：数组、函数
// TS新增类型：
// 联合类型：类型别名、接口(interface)、字面量类型、泛型、枚举(enum)、void、any等

// 简单类型注解完全按照js的类型 全小写的格式来书写
// 必捷投屏 不能用 金投屏不能用
let nullVar: null = null;
let undefinedVar: undefined = undefined;

// 数组语法1：
let arr:number[] = [1,2,3,4];
// 数组写法2泛型写法
let arr2:Array<number> = [1,2,3,4]; 

let arrLianhe: (number | string)[] = [1,2,3,4,'hello'];

// 为了不用每一个变量都写一长串就有了 类型别名：type
type arrType = (number | string)[];
let arr3:arrType = [1,2,3,4,'hello'];

// 函数注解：
// 函数注解语法：
// 函数声明：
function add(a:number,b:number):number{
    return a + b;
}

// 函数表达式箭头函数：
// 写法1：参数和返回值分开注解：
const fn = (a:number,b:number):number => {
    return a + b;
}

// 函数整体注解，只针对函数表达式，适用于库文件
// 参数和类型整体都定义好 区别在于返回值，一个是冒号，一个是=>
// 可选参数：?代表可传可不传
type fnType = (a:number,b?:number) => number;
const fn2:fnType = (a,b) => {
    return a + b;
}
// 函数无返回值 : void
// js中函数没有返回值，默认返回undefined,TS如果指定返回undefined，那么函数必须写明undefined

// ------interface接口------
// 在TS中，使用interface接口来定义对象类型，常用于给对象的属性和方法添加类型约束

// 一旦注解接口类型之后对象的属性和方法类型都满足要求，属性不能多也不能少
// interface常用于接口数据类型的约束

// 通过?对属性进行可选标注，表示该属性可以不存在，如果存在就要符合要求
// 接口的很多属性是可以类型复用的，使用extends实现接口继承，实现类型复用
// 父接口
interface GoodsType {
    id:string
    price:number
}
// 子接口继承父接口 解决接口复用问题
interface DisGoodsType extends GoodsType{
    // 子接口自己的类型
    disPrice:number
    size?:string
}
let goods:DisGoodsType = {
    id:'123',
    price:100,
    disPrice:180
}
// --------
// 嵌套interface类型
interface Data{
    title:string
    content:string
}
interface ResData{
    code:number
    data:Data
}
let res:ResData = {
    code:200,
    data:{
        title:'hello',
        content:'world'
    }
}
interface Person {
    name: string;
    age: number;
    gender: string;
    sayHi(): void;
}

const person: Person = {
    name: '张三',
    age: 18,
    gender: '男',
    sayHi() {
        console.log('hi');
    }
}

