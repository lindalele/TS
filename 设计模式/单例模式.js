// 单例模式：在使用这个模式时，单例对象整个系统需要保证只有一个存在
// 单例方法：
// 1.自己实现
// 2.vant中的toast和notify组件

// 单例思想
// 1.vue2中的use方法
// 2.vue3中的use方法,保证方法只注册一次

// 需求：调用方法获取单例对象，重复调用获取的是相同对象
// 实现单例方法：1.定义类
// 2.添加私有属性
// 3.添加静态方法，返回私有属性
// 4.判断并返回对象
class SingleTon {
    constructor(name) {
        this.name = name;
    }
    static getInstance(name) {
        if (!this.instance) {
            this.instance = new Single(name);
        }
        return this.instance;
    }
}
