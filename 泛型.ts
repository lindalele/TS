// 后端参数返回
interface User {
  name: string;
  age: number;
}

interface UserData {
  code: string;
  msg: string;
  data: User;
}
interface Goods{
    id:number
    goodsName:string
}
// code和msg是固定的，data是动态的，可以把可变的地方抽象成参数，实现复用
interface GoodsData{
    code:string
    msg:string
    data:Goods
}

// 使用泛型优化上面重复的代码

// 泛型接口：在接口类型的名称后面使用<T>即可声明一个泛型参数，接口里的其他成员都能使用该参数的类型
// interface ResData<T>{}
// 通用思路：
// 1.找到可变的类型部分，通过泛型<T>抽象为泛型参数（定义参数）
// 2.在使用泛型的时候，把具体类型传入到泛型参数位置（传参）

定义泛型：
interface ResData<T>{
    msg:string
    code:string
    data:T //可变部分
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