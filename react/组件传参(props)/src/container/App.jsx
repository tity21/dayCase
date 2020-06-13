import React, { Component } from 'react'
import Children from 'component/Children.jsx'
import './App.scss'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "我是数据"
        }
    }
    goToParent = (a) => {
        console.log(a);
        // 我是子组件传过来的
    }
    render() {
        return (
            <div id="App">
                <div className="top">
                    {/* 父传子 通过挂载到子组件上传递*↓↓↓/}   {/* ↓↓↓子组件传来的数据需要在本身上挂载一下定义的名字  然后以触发事件的形式写出*/}
                    <Children goToChildren={this.state.msg} goToParent={this.goToParent}></Children>
                </div>
            </div>
        )
    }
}

export default App
