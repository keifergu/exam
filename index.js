import React from 'react'
import ReactDOM from 'react-dom'
import { createStore , compose ,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, Link ,hashHistory} from 'react-router'
import examApp from './reducers/exam'
import ExamApp from './containers/ExamApp'
import ExamList from './containers/ExamList'
import Home from './containers/Home'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

let store = createStoreWithMiddleware(examApp,
		window.devToolsExtension ? window.devToolsExtension() : undefined
)

let unsubscribe = store.subscribe(() =>
  console.log()
);


const rootEl = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Home} />
				<Route path="exam" component={ExamApp} />
		</Router>
  </Provider>,
  rootEl
)
