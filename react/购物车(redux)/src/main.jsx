import React from 'react'
import ReactDom from 'react-dom'
import Entry from 'container'
import { Provider } from 'react-redux'
import Store from 'store'
import 'common/icon/iconfont.css'
import 'common/scss/base.css'
import 'common/scss/main.scss'

ReactDom.render(
    <Provider store={Store}>
        <Entry></Entry>
    </Provider>,
    document.getElementById("root")
)
