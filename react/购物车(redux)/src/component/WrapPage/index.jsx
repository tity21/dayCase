import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import RouterView from 'router'
import { connect } from 'react-redux'
import './index.scss'

export class WrapPage extends Component {
    componentDidMount() {
        axios.get("/mock/list.json").then((result) => {
            const { dataListAll } = this.props
            dataListAll(result.data)
        })
    }
    render() {
        const { routes } = this.props
        return (
            <div className="wrapper">
                <div className="main">
                    <RouterView routes={routes} />
                </div>
                <div className="footer">
                    <NavLink to="/WrapPage/Home">
                        <span className="iconfont icon-shouye"></span>
                        <span>首页</span>
                    </NavLink>
                    <NavLink to="/WrapPage/Micro">
                        <span className="iconfont icon-shouye"></span>
                        <span>模糊搜索</span>
                    </NavLink>
                    <NavLink to="/WrapPage/News">
                        <span className="iconfont icon-shouye"></span>
                        <span>排序</span>
                    </NavLink>
                    <NavLink to="/WrapPage/ShopCar">
                        <span className="iconfont icon-shouye"></span>
                        <span>购物车</span>
                    </NavLink>
                    <NavLink to="/WrapPage/My">
                        <span className="iconfont icon-shouye"></span>
                        <span>我的</span>
                    </NavLink>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dipatch) => {
    return {
        dataListAll(result) {
            dipatch({
                type: "DATALISTALL",
                payload: result
            })
        }
    }
}
export default connect(undefined, mapDispatchToProps, undefined, { pure: false })(WrapPage)
