import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterView from 'router'

class Entry extends Component {
	render() {
		const { routes } = this.props
		return (
				<BrowserRouter>
					<RouterView routes={routes} />
				</BrowserRouter>
		)
	}
}

export default Entry
