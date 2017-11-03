import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

// import BScrollSamplePage from './pages/bscroll-sample'
import BScrollVertivalPage from './pages/bscroll-vertical/index'
import BScrollPullupPage from './pages/bscroll-pullup/index'
import BScrollPullDownPage from './pages/bscroll-pullDown/index'

class Home extends Component {
  render () {
    return (
      <dl>
        <dt>
          <h2>Demos</h2>
          <p>如果在pc端预览，请在打开移动调试工具后，先刷新后查看效果</p>
        </dt>

        {/*<dd><Link to="/bscroll-sample">01: 使用原better-scroll</Link></dd>*/}
        <dd><Link to="/bscroll-vertical">01: react-scroll -- 简单案例</Link></dd>
        <dd><Link to="/bscroll-pullup">02: react-scroll -- 上拉加载</Link></dd>
        <dd><Link to="/bscroll-pullDown">03: react-scroll -- 下拉加载</Link></dd>
      </dl>
    )
  }
}

class App extends Component {
  render () {
    return (
      <Router>
        <div className = 'App' >
          {/* 导航 */}
          <Route path="/" component={Home} exact ></Route>

          {/* better-scroll */}
          {/*<Route path="/bscroll-sample" component={BScrollSamplePage}></Route>*/}
          <Route path="/bscroll-vertical" component={BScrollVertivalPage}></Route>
          <Route path="/bscroll-pullup" component={BScrollPullupPage}></Route>
          <Route path="/bscroll-pullDown" component={BScrollPullDownPage}></Route>
        </div>
      </Router>
    )
  }
}

export default App;
