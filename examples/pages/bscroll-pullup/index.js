import React, { Component } from 'react'
import Scroll from 'src/scroll'

import './main.css'

const Data = []
let NEWDATAINDEX = 1
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
    NEWDATAINDEX = 1
  }

  componentDidMount () {
  }

  loadMoreData = () => {
    // 更新数据
    return new Promise( resolve => {
      console.log('pulling up and load data')
      setTimeout(() => {
        if (Math.random() > 0) {
          // 如果有新数据
          let newPage = []
          for (let i = 0; i < 2; i++) {
            newPage.push(`我是新数据${NEWDATAINDEX++}`)
          }
          this.setState({
            listData: [
              ...this.state.listData,
              ...newPage
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
            pullUpLoad
            pullUpLoadMoreData={this.loadMoreData}
            isPullUpTipHide={ false }
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
