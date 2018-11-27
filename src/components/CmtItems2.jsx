import React from 'react'

import cssobj from '@/css/cmtitem.css'

// 使用 function 构造函数，定义普通的无状态组件
export default function CmtItems(props) {
    return <div className={cssobj.cmtbox}>
    <h1 className={cssobj.title}>评论人：{props.user}</h1>
    <p className={cssobj.content}>评论内容：{props.content}</p>
</div>
}