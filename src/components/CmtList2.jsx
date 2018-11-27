import React from 'react'

import CmtItems from '@/components/CmtItems2'

// 导入列表需要的样式表
// Q1: 这个样式表是只在 List 组件中生效吗？
// A1: 直接导入 css 样式表，默认是在全局上，这个项目都生效的
// Q2: Vue 组件中的样式表，有没有冲突的问题？
// A2: 也有同样的问题，但是可以使用 <style scoped></style>
// Q3: React 中，有没有类似于 scoped 这样的指令呢？
// A3: 没有，因为在 React 中，没有指令的概念
import cssobj from '@/css/cmtlist.css'
console.log(cssobj)

// 使用 class 关键字，定义父组件
export default class CmtList extends React.Component {
    constructor() {
        super()
        this.state = {
            CommentList:[ // 评论列表数据
                { id: 1, user: '张三', content: '哈哈，沙发' },
                { id: 2, user: '李四', content: '哈哈，板凳' },
                { id: 3, user: '王五', content: '哈哈，凉席' },
                { id: 4, user: '赵六', content: '哈哈，砖头' },
                { id: 5, user: '田七', content: '哈哈，楼下山炮' }
            ]
        }
    }

    render() {
        return <div>
            <h1 className={cssobj.title}>这是评论列表组件</h1>
            {this.state.CommentList.map(item => <CmtItems {...item} key={item.id}></CmtItems>)}
        </div>
    }
}