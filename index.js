import React from 'react'
import ReactDOM from 'react-dom'
import { createStore , compose ,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Link } from 'react-router'
import examApp from './reducers/exam'
import ExamApp from './containers/ExamApp'
import Home from './components/Home'

let store = createStore(examApp,{
		questions:[
		       {
	          "title": "在TCP/IP参考模型中，传输层的主要作用是在互联网络的源主机与目的主机对等实体之间建立用于会话的",
	          "type": "101",
	          "options": [
	              "点－点连接",
	              "操作连接",
	              "端－端连接",
	              "控制连接"
	          ],
	          "num": 1
	      },{
	          "title": "计算机网络的基本分类方法主要有两种：一种是根据网络所使用的传输技术；另一种是根据",
	          "type": "102",
	          "options": [
	              "网络协议",
	              "网络操作系统类型",
	              "覆盖范围与规模",
	              "网络服务器类型与规模"
	          ],
	          "num": 2
	      }]
		},
		window.devToolsExtension ? window.devToolsExtension() : undefined
  );

let unsubscribe = store.subscribe(() =>
  console.log()
);


const rootEl = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path="/" component={Home} />
				<Route path="exam" component={ExamApp} />
		</Router>
  </Provider>,
  rootEl
)