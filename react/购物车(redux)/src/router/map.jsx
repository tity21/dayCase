import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

class RouteMap extends React.Component {
	render() {
		const { routes } = this.props;
		return <Switch>
			<Route path='/' exact render={() => (
				<Redirect to='/WrapPage/Home' />
			)} />
			{
				routes.length && routes.map((item, index) => {
					return <Route
						path={item.path}
						render={
							() => {
								const ItemComponent = item.component;
								const Childrens = item.children === undefined ? [] : item.children;
								return <ItemComponent routes={Childrens}></ItemComponent>
							}
						}
						key={index}></Route>
				})
			}
		</Switch>
	}
}

export default RouteMap;