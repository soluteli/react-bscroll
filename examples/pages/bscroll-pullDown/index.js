import React, { Component } from 'react'
import Scroll from 'src/scroll'

import './main.css'

const Data = []
let NEWTOPDATAINDEX1 = 1
for (let i = 0; i < 10; i++) {
  Data.push(i)
}
class VerticalScrollPage extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      listData: Data,
      childData: 666
    }
  }

  componentWillMount () {
    NEWTOPDATAINDEX1 = 1
  }

  componentDidMount () {
  }

  pullDownFreshAction = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (Math.random() > 0) {
          // 如果有新数据
          let newPage = []
          for (let i = 0; i < 2; i++) {
            newPage.unshift(`我是顶部新数据${NEWTOPDATAINDEX1++}`)
          }
          this.setState({
            listData: [
              ...newPage,
              ...this.state.listData
            ],
          })
        }

        resolve()
      }, 1000)
    })
  }

  clickItem (item) {
    console.log('clickEvent', item)
  }

  render () {
    return (
      <div>
        <div className="container">
          <Scroll
            pullDownRefresh
            doPullDownFresh={this.pullDownFreshAction}
          >
            <ul className="content">
              {this.state.listData.map((item, index) =>
                (<li className="content-item"
                  key={index}
                  onClick={this.clickItem.bind(this, item)}
                >
                  item:{item}
                </li>),
              )}
            </ul>
          </Scroll>
        </div>
      </div>
    )
  }
}

export default VerticalScrollPage
