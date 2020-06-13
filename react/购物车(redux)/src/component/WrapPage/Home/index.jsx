import React, { Component } from 'react'
import BScroll from 'better-scroll'
import { connect } from 'react-redux'
import './index.scss'

export class Home extends Component {
	componentDidMount() {
		new BScroll('.home-section-section', {
			click: true,
			scrollY: true,
			probeType: 2
		})
	}
	pushShopcar(item) {
		const { Reducer, addShopCar } = this.props
		addShopCar(item, Reducer.addShopCarList)
	}
	render() {
		const { Reducer } = this.props
		return (
			<div className="home">
				<div className="home-header">购物首页</div>
				<div className="home-section">
					<div className="home-section-section">
						<div className="home-section-section-auto">
							{
								Array.isArray(Reducer.dataListAll) &&
									Reducer.dataListAll.length ?
									Reducer.dataListAll.map((item) => (
										<dl key={item.id}>
											<dd>
												<img src={item.picUrl} alt="" />
											</dd>
											<dt>
												<h1 className="single-line">{item.tit}</h1>
												<div>
													<b>商城价￥{item.press}</b>
													<p onClick={() => this.pushShopcar(item)}>+</p>
												</div>
											</dt>
										</dl>
									)) : "数据类型需要数组"
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return state
}
const mapDispatchToProps = (disptch) => {
	return {
		addShopCar(clickItem, addShopCarList) {
			const filterShopCar = addShopCarList.filter((item) => {
				return clickItem.id === item.id
			})
			if (filterShopCar.length < 1) {
				addShopCarList.push({...clickItem,isCheck:true,num:1})
			} else {
				addShopCarList.forEach((item)=>{
					item.num++
				})
			}
			disptch({
				type: "ADDSHOPCAR",
				payload: addShopCarList
			})
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps, undefined, { pure: false })(Home)
