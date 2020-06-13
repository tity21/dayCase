import React, { Component } from 'react'
import BScroll from 'better-scroll'
import { connect } from 'react-redux'
import './index.scss'

export class News extends Component {
  componentDidMount() {
    new BScroll(".shopCar-section-section", {
      click: true,
      probeType: 2,
      scrollY: true
    })
  }
  priceSort = () => {
    const { Reducer, sortStore } = this.props
    var i, j, tempPrice;
    for (i = 0; i < Reducer.dataListAll.length; i++) {
      for (j = 0; j < Reducer.dataListAll.length - i - 1; j++) {
        if (+Reducer.dataListAll[j].press < +Reducer.dataListAll[j + 1].press) {
          tempPrice = Reducer.dataListAll[j]
          Reducer.dataListAll[j] = Reducer.dataListAll[j + 1]
          Reducer.dataListAll[j + 1] = tempPrice
        }
      }
    }
    sortStore(Reducer.dataListAll)
  }
  idSort = () => {
    const { Reducer, sortStore } = this.props
    var n,k,tempId;
    for (var n = 0; n < Reducer.dataListAll.length; n++) {
      for (var k = 0; k < Reducer.dataListAll.length - n - 1; k++) {
        if (+Reducer.dataListAll[k].id < +Reducer.dataListAll[k + 1].id) {
          tempId=Reducer.dataListAll[k]
          Reducer.dataListAll[k]=Reducer.dataListAll[k+1]
          Reducer.dataListAll[k+1]=tempId
        }
      }
    }
    sortStore(Reducer.dataListAll)
  }
  render() {
    const { Reducer } = this.props
    return (
      <div className="sort">
        <p>
          <label onClick={() => this.priceSort()}>价格排序</label>
          <label onClick={() => this.idSort()}>ID排序</label>
        </p>
        <div className="shopCar-section-section">
          <div className="shopCar-section-section-auto">
            {
              Reducer.dataListAll.map((item, index) => (
                <dl key={item.id}>
                  <dd>
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
    sortStore(payload) {
      dispatch({
        type: "SORTSTORE",
        payload
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps, undefined, { pure: false })(News)
