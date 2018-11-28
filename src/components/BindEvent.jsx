import React from 'react'

export default class BindEvent extends React.Component {
    constructor(){
        super()
        // 私有数据
        this.state = {}
    }

    render(){
        return <div>
            BindEvent 组件
            <hr/>
            {/* 在 React 中，有一套自己的事件绑定机制；事件名，是小驼峰命名 */}
            {/* <button onClick={function(){ console.log('ok) }}按钮</button> */}
        
            <button onClick={this.myclickHandler}>按钮</button>
        
        </div>
    }

    // 这是一个实例方法
    myclickHandler(){
        console.log('2222')
    }
}