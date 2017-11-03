import React, { Component } from 'react';
import BScroll from 'better-scroll'

import './sample.css'

const Data = []

for (let i = 0; i < 30; i++) {
  Data.push(i)
}

class Sample extends Component {
  constructor () {
    super()

    this.scroll = null

    this.pullUpload = {
      threshold: 0,
      txt: {
        more: '加载更多',
        nomore: '加载结束',
      },
    }
    this.isPullUpLoad = false

    this.state = {
      listData: Data,
      pullUpload: this.pullUpload,
      isPullUpLoad: this.isPullUpLoad,
    }
  }

  componentDidMount () {
    this.initScroll()
  }

  initScroll () {
    let wrapper = document.querySelector('.b-wrapper')

    let options = {
      probeType: 0, // https://ustbhuangyi.github.io/better-scroll/doc/options.html#probetype
      click:  true, // https://ustbhuangyi.github.io/better-scroll/doc/options.html#tap
      scrollY: true,
      scrollX: false,
      freeScroll: false,
      scrollbar: true,
      pullUpLoad: this.state.pullUpload,
    }

    this.scroll = new BScroll(wrapper, options)

    if (options.pullUpLoad) {
      this._initPullUpLoad()
    }
  }

  clickItem (item) {
    console.log('clickEvent item', item)
  }

  _initPullUpLoad () {
    console.log('_initPullUpLoad')
    this.scroll.on('pullingUp', () => {
      this.setState({
        isPullUpLoad: true,
      })
      console.log('pullingUp...')
      this.pullLoadMoreData()
    })
  }

  pullLoadMoreData () {
    // 更新数据
    console.log('pulling up and load data')
    setTimeout(() => {
      if (Math.random() > .5) {
        // 如果有新数据
        let newPage = []
        for (let i = 0; i < 10; i++) {
          newPage.push(`我是新数据${i}`)
        }
        this.setState({
          listData: [
            ...this.state.listData,
            ...newPage
          ],
          isPullUpLoad: false,
        })
      } else {
        this.setState({
          isPullUpLoad: false,
        })
      }
      this.forceUpdate()
    }, 1000)
  }

  forceUpdate () {
    console.log('force update')
    this.scroll.finishPullUp()
    this.scroll && this.scroll.refresh();
  }

  renderPullUpLoad () {
    if (this.state.pullUpload && this.state.isPullUpLoad) {
      return (
        <div className="b-pullup-wrapper">
          <div className="after-trigger">
            loading...
          </div>
        </div>
      )
    }
    if (this.state.pullUpload && !this.state.isPullUpLoad) {
      return (
        <div className="b-pullup-wrapper">
          <div className="before-trigger">
            <span>加载完成</span>
          </div>
        </div>
      )

    }
  }

  render () {
    return (
      <div className="container">
        <div className="b-wrapper">
          <div className="b-scroll-content">
            <ul className="b-content">
              {this.state.listData.map((item, index) =>
                (<li className="b-content-item"
                  key={index}
                  onClick={this.clickItem.bind(this, item)}
                >
                  item:{item}
                  <div onClick={e => {e.stopPropagation(); console.log('inner')}}>inner stopPropagation</div>
                </li>),
              )}
            </ul>
            {this.renderPullUpLoad()}
          </div>

        </div>
      </div>

    )
  }
}

export default Sample
