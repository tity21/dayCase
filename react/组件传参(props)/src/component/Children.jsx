import React, { Component } from 'react'

export class Children extends Component {

	render() {
		return (
			<div>
				{/* 父组件传过来的数据 */}
				<span>{this.props.goToChildren}</span>
				{/* 数据传向父组件 */}
				<button  onClick={()=>this.props.goToParent("我是子组件传过来的")}>click me</button>
			</div>

		)
	}
}

export default Children
