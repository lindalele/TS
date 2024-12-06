type Item={
    count:number,
    time:string
}
const KEY='ts-key'
function getList():Item[]{
    // getItem获取到的永远是字符串类型,如果没有值，那么获取到的就是null,null不能交给JSON.parse方法
    return JSON.parse(localStorage.getItem(KEY) || '[]') 
}
function setList(list:Item[]){
    localStorage.setItem(KEY,JSON.stringify(list))
}
function getFormatTime(){
    const _time=new Date()
    const h=_time.getHours()
    const m=_time.getMinutes()
    const s=_time.getSeconds()
    return `${h}:${m}:${s}`
}
function render(list:Item[]){
const strArr=list.map(item=>{
    return `刷新次数为${itemcount},刷新时间为${item.time}`
})
const app=document.getElementById('app') as HTMLDivElement
app.innerHTML=strArr.join('<br/>')
}

function updateData(){
    // 1.获取最新列表，取到最后一项
    const list=getList()
    const lastItem=list[list.length-1]
    // 2.在上一条记录的基础上,count+1,配合当前时间添加到列表的尾部
    list.push({
        count:lastItem?lastItem.count+1:1,
        time:new Date().getTime()
    })
    // 渲染到页面
    render(list)
    4.最新列表存入本地
    setList(list)
}