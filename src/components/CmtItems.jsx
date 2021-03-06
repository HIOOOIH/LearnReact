import React from 'react'

// 第一层封装:将 样式对象 和 UI 结构分类
// const itemStyle = { border:'1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'}
// const userStyle = { fontSize: '14px' }
// const contentStyle = { fontSize: '12px' }

// 第二层封装：合并成一个大的样式对象
//const styles = {
//     item: { border:'1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'},
//     user: { fontSize: '14px' },
//     content: { fontSize: '12px' }
// }

// 第三层封装：抽离为单独的样式表模块
import styles from '@/components/styles'

// 使用 function 构造函数，定义普通的无状态组件
export default function CmtItems(props) {
    return <div style={styles.item}>
    <h1 style={styles.user}>评论人：{props.user}</h1>
    <p style={styles.content}>评论内容：{props.content}</p>
</div>
}