// 类型断言的基本使用
// 有时候开发者比TS更清楚当前的类型是什么，可以使用断言as让类型更加精确和具体
// 需求：获取页面中的id=link的a元素，尝试通过点语法访问href属性
// cosnt aLink:HTMLElement |null;
// 自动推断，会被推断为HTMLElement | null，是一个宽泛的类型
let aLink = document.getElementById('link') 
// 可以通过断言，给一个更具体的类型HTMLAnchorElement 为a链接元素本身的类型
const aLink2 = document.getElementById('link') as HTMLAnchorElement
aLink2.href = 'https://www.baidu.com'

// 注意：
// 类型断言只能够欺骗TypeScript编译器，无法避免运行时的错误，滥用断言可能会导致运行时错误
