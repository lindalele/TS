// redux:是react最常用的状态管理工具，类似于vue中的pinia,可以独立于框架运行
// 作用：集中式管理react应用中多个组件的状态

// 不和任何框架绑定，使用纯redux实现计数器
// 1.定义reducer函数：作用：根据当前想要做的修改返回一个新的状态
// 2. 使用ceateStore创建store实例对象，并传入reducer函数
// 3.使用store实例的subscribe方法订阅数据的变化，（数据一旦变化，可以得到通知）
// 4.使用store实例的dispatch方法触发action，从而修改状态
// 5.使用store实例的getState方法获取最新的状态数据更新到视图中









