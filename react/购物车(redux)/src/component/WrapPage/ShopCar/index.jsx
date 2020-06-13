import React, { Component } from 'react'
import BScroll from 'better-scroll'
import { connect } from 'react-redux'
import './index.scss'

export class ShopCar extends Component {
	constructor() {
		super()
		this.state = {
			price: 0,
			piece: 0
		}
	}
	componentDidMount() {
		new BScroll(".shopCar-section-section", {
			click: true,
			probeType: 2,
			scrollY: true
		})
		this.dataChenge()
	}
	//加
	plus = (index) => {
		const { Reducer, plusStore } = this.props
		Reducer.addShopCarList[index].num++;
		this.dataChenge()
		plusStore(Reducer.addShopCarList)
	}
	// 减
	minus = (index) => {
		const { Reducer, minusStore } = this.props
		Reducer.addShopCarList[index].num--
		if (Reducer.addShopCarList[index].num <= 1) {
			Reducer.addShopCarList[index].num = 1
		}
		this.dataChenge()
		minusStore(Reducer.addShopCarList)

	}
	// 单选
	checkOne = (e, index) => {
		const { Reducer, checkOneStore } = this.props
		Reducer.addShopCarList[index].isCheck = e.target.checked;
		this.dataChenge()
		checkOneStore(Reducer.addShopCarList)
	}
	// 全选
	checkAll = (e) => {
		const { Reducer, checkAllStore } = this.props
		Reducer.addShopCarList.forEach((item) => {
			item.isCheck = e.target.checked
		})
		this.dataChenge()
		checkAllStore(Reducer.addShopCarList)
	}
	// 删除
	del = (e) => {
		// 没有做完 不会
		// const { Reducer, checkAllStore } = this.props
		// const del=Reducer.addShopCarList.filter((item) => {
		// 	if (item.isCheck===true) {
		// 		console.log();
		// 	}else{
		// 		console.log(item.length);
		// 	}
			
		// })
		// console.log(del);
		// this.dataChenge()
		// checkAllStore(Reducer.addShopCarList)
	}
	// 总数
	dataChenge = () => {
		let priceAll = 0,
			pieceAll = 0;
		const { Reducer } = this.props
		Reducer.addShopCarList.forEach(element => {
			if (element.isCheck === true) {
				priceAll += element.num * element.press
				pieceAll += element.num
			}
		});
		this.setState({
			price: priceAll,
			piece: pieceAll
		})

	}
	render() {
		const { Reducer } = this.props

		return (
			<div className="shopCar">
				<div className="shopCar-header">购物车</div>
				<div className="shopCar-section">
					<div className="shopCar-section-header">
						<input type="checkbox" onClick={(e) => this.checkAll(e)} name="" id="qxTop" />
						<label htmlFor="qxTop">全选</label>
					</div>
					<div className="shopCar-section-section">
						<div className="shopCar-section-section-auto">
							{
								Array.isArray(Reducer.addShopCarList) &&
									Reducer.addShopCarList.length ?
									Reducer.addShopCarList.map((item, index) => (
										<dl key={item.id}>
											<dd>
												<input type="checkbox"
													checked={item.isCheck === true ? true : false}
													onChange={() => { }}
													onClick={(e) => this.checkOne(e, index)}
													name="" id=""
												/>
												<img src={item.picUrl} alt="" />
											</dd>
											<dt>
												<h1 className="single-line">{item.tit}</h1>
												<div>
													<b>商城价￥{item.press}</b>
													<p>
														<span onClick={() => this.minus(index)}>-</span>
														<strong>{item.num}</strong>
														<span onClick={() => this.plus(index)}>+</span>
													</p>
												</div>
											</dt>
										</dl>
									)) : "数据需要时数组"
							}

						</div>
					</div>

					<div className="shopCar-section-footer">
						<div>
							<p>
								<input type="checkbox" name="" id="" onClick={(e) => this.del(e)} />删除
							</p>
							<b>合计:￥{this.state.price}</b>
							<span>件数:{this.state.piece}件</span>
						</div>
						<button>去结算</button>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return state
}
const mapDispatchToProps = (dispatch) => {
	return {
		minusStore(payload) {
			dispatch({
				type: "MINUS",
				payload: payload
			})
		},
		plusStore(payload) {
			dispatch({
				type: "PLUS",
				payload: payload
			})
		},
		checkOneStore(payload) {
			dispatch({
				type: "CHECKONE",
				payload: payload
			})
		},
		checkAllStore(payload) {
			dispatch({
				type: "CHECKALL",
				payload: payload
			})
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps, undefined, { pure: false })(ShopCar)
