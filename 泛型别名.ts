// 泛型别名：
// 使用泛型别名改写ResData案例
就是用type改写interface，type的用法和interface基本一致，注意等号。 type除了能够描述对象类型，还可以自定义其他类型，比如基本类型、元组、联合类型等
// 定义泛型：
// interface ResData<T>{
//     msg:string
//     code:string
//     data:T //可变部分
// }

// // 使用泛型
// const user:ResData<User> = {
//     msg:'请求成功',
//     code:'200',
//     data:{
//         name:'张三',
//         age:18
//     }
// }

// const goods:ResData<Goods> = {
//     msg:'请求成功',
//     code:'200',
//     data:{
//       id:1001,
//       goodsName:'苹果'
//     }
// }
// 改造
type ResData<T>={
    msg:string
    code:string
    data:T //可变部分
}
type User ={
  name: string;
  age: number;
}

type Goods={
    id:number
    goodsName:string
}

// 使用泛型
const user:ResData<User> = {
    msg:'请求成功',
    code:'200',
    data:{
        name:'张三',
        age:18
    }
}

const goods:ResData<Goods> = {
    msg:'请求成功',
    code:'200',
    data:{
      id:1001,
      goodsName:'苹果'
    }
}
