// 1. 导入包
// import React,{Component} from 'react';
// class Movie extends Component { }

import React from 'react';
import ReactDOM from 'react-dom';

// import CmtList from '@/components/CmtList2'

 import BindEvent from '@/components/BindEvent'


// 3. 调用 render 函数渲染
ReactDOM.render(
    <div>
        <BindEvent></BindEvent>
    </div>,document.getElementById("app")
);