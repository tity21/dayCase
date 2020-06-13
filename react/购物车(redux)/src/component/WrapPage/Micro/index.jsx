import React, { Component } from 'react'
import BScroll from 'better-scroll'
import { connect } from 'react-redux'
import './index.scss'

export class Micro extends Component {
  componentDidMount() {
    new BScroll(".shopCar-section-section", {
      click: true,
      probeType: 2,
      scrollY: true
    })
  }
  inp = (e) => {
    const { Reducer,seachStore } = this.props
    const filterA = Reducer.dataListAll.filter((item) => {
      if (item.tit.indexOf(e.target.value)) {
        return '';
      }
      return Reducer.searchList.push(item)
    })

    seachStore(filterA)
  }
  render() {
    const { Reducer} = this.props
    return (
      <div className="wt">
        <input className="inp" type="text" onInput={(e) => this.inp(e)}placeholder="请输入搜索的商品" />
        <div className="shopCar-section-section">
          <div className="shopCar-section-section-auto">
            {
									Reducer.searchList.map((item, index) => (
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
									)) 
							}

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
    seachStore(payload){
      console.log(payload);
      dispatch({
        type:"SEACHSTORE",
        payload
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps, undefined, { pure: false })(Micro)