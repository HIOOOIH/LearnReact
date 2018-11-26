// 1. 导入包
// import React,{Component} from 'react';
// class Movie extends Component { }

import React from 'react';
import ReactDOM from 'react-dom';

// 使用 ES6 import 导入需要的组件
// import Hello from '@/components/Hello'

// 导入 class 继承
// import '@/03.class-继承公共方法'


// 如果要使用 class 定义组件，必须 让自己的组件，继承自 React.Component
// 在 class 关键字创建的组件中，如果想使用 外界传过来的 props 参数，不需接收，
// 直接通过 this.props.*** 访问
class Movie extends React.Component {
    // 构造器
    constructor() {
        // 由于 Movie 组件，继承了 React.Component 这个父类，所以，自定义的构造器中，必须 调用 super()
        super()
        // 只有调用了 super() 以后，才能使用 this 关键字
        this.state = {
            // 这个 this.state = { } 相当于 Vue 中的 data() { return { } }
            msg:'大家好，我是 class 创建的 Movie组件'
        } 
    }

    // 在组件内部，必须有 render 函数，是实例方法
    // render 函数的作用，是 渲染 当前组件所对应的虚拟DOM元素
    render(){
        // 注意：不论是 class 或是 function 创建的组件，props都是只读的
        // this.props.name = 'ls'

        // 在 class 创建的组件中，this.state 上的数据，都是可读可写的
        this.state.msg = 'changed by me'

        // render 函数中，必须 返回合法的 JSX 虚拟DOM结构 或 返回 null
        return <div>
            {/* 注意：在 class 组件内部，this 表示 当前组件的实例对象 */}
            这是 Movie 组件 -- {this.props.name} == {this.props.age} -- {this.props.gender}
            <h3>{this.state.msg}</h3>
            </div>
    }
}

const user = {
    name: 'zs',
    age: 22,
    gender: 'male'
}

// 3. 调用 render 函数渲染
ReactDOM.render(
    <div>
        123
        {/* 这里的 Movie 标签，就是 Movie 类的一个实例对象 */}
        {/* <Movie name={user.name} age={user.age}></Movie> */}
        <Movie {...user}></Movie>
    </div>,document.getElementById("app")
);