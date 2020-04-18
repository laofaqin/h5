let allword = ["年年有余", "新年快乐", "岁岁平安", "辞旧迎新", "恭贺新禧", "心想事成", "美梦成真", "万事如意", "锦绣前程", "鹏程万里", "事事顺利", "生日快乐", "合家欢乐", "春风得意", "前程似锦", "大展鹏图", "马到功成", "工作顺利", "事业有成", "天天开心", "快乐永远", "身体健康", "万事如意", "福如东海", "寿比南山", "心想事成", "财源广进", "恭喜发财", "财源滚滚", "生意兴隆", "日夜红火", "日进斗金", "和气生财", "天伦之乐", "共享天伦", "承欢膝下", "欢聚一堂 ", "幸福美满", "合家欢乐", "身体健康", "万事如意", "平平安安", "团团圆圆", "幸福安康", "蒸蒸日上", "欣欣向荣", "国泰民安", "天下太平 ", "国强民富", "国泰民安", "人寿年丰", "繁荣昌盛", "欣欣向荣", "六畜兴旺", "五谷丰登", "狂吃不胖", '升官发财', '早日暴富', '不再脱发', '头发茂密', '长命百岁', "年少有为", "妻妾成群", '貌美如花', '平步青云', '暴富暴富', '学业进步', '娶妻生子', '五福临门', '捡到钱', '涨工资', '笑口常开', "长命百岁", "猪笼入水", "年年有余", "新年快乐", "岁岁平安", "辞旧迎新", "恭贺新禧", "心想事成", "美梦成真", "万事如意", "锦绣前程", "鹏程万里", "事事顺利", "生日快乐", "合家欢乐", "春风得意", "前程似锦", "大展鹏图", "马到功成", "工作顺利", "事业有成", "天天开心", "快乐永远", "身体健康", "万事如意", "福如东海", "寿比南山", "心想事成", "财源广进", "恭喜发财", "财源滚滚", "生意兴隆", "日夜红火", "日进斗金", "和气生财", "天伦之乐", "共享天伦", "承欢膝下", "欢聚一堂 ", "幸福美满", "合家欢乐", "身体健康", "万事如意", "平平安安", "团团圆圆", "幸福安康", "蒸蒸日上", "欣欣向荣", "国泰民安", "天下太平 ", "国强民富", "国泰民安", "人寿年丰", "繁荣昌盛", "欣欣向荣", "六畜兴旺", "五谷丰登", "狂吃不胖", '升官发财', '早日暴富', '不再脱发', '头发茂密', '长命百岁', "年少有为", "妻妾成群", '貌美如花', '平步青云', '暴富暴富', '学业进步', '娶妻生子', '五福临门', '捡到钱', '涨工资', '笑口常开', "长命百岁", "猪笼入水"]
function radomNum() {
    let a = Math.floor(Math.random() * 18) * 5
    return a + '%'
}
radomNum()
// let bb = `${radomnum()}`
// console.log(bb)
function randomdelay() {
    let b = Math.floor(Math.random() * 12)
    return b + 's'
}
function randomtime() {
    let b = Math.floor(Math.random() * 17) + 7
    return b + 's'
}
function randomcolor() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", 'f']
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += arr[Math.floor(Math.random() * 16)]
    }
    return '#' + color
}
function randomweight() {
    let num = Math.random() * 2
    return num > 1 ? "bold" : ""
}

function begin() {
    let val = ''
    allword.map(item => {
        val += `<li style="left:${radomNum()};animation-delay: ${randomdelay()};animation-duration:${randomtime()};color:${randomcolor()};font-weight:${randomweight()}">${item}</li>`
    })
    let box = document.querySelector("#hopebox")
    // console.log(box)
    box.innerHTML = val
}

function getone() {
    return allword[Math.floor(Math.random() * allword.length)]
}
