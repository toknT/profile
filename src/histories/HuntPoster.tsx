import { useEffect } from 'react'
import { Box } from '@material-ui/core'
import './HuntPoster.css'
import Img1 from './../images/img1.jpg'
import Img2 from './../images/img2.png'
import Img3 from './../images/img3.jpg'
import UrlQr from './../images/url.png'

const HuntPoster = () => {
  useEffect(() => {
    document.title = '寻猫'
    document.documentElement.lang = 'zh-CN'
  }, [])
  return (
    <Box>
      <h1>寻猫</h1>
      <div className="container">
        <div className="post__container">
          <img src={Img2} className="post__item" />
          <div className="post__item">
            <div>
              特征:理花猫,短腿,<strong>尾巴和狗一样短粗</strong>,鼻子白
            </div>
            <div>体型:中等</div>
            <div>最后地点:鸿泰路鸿泰苑3区北边河边工地</div>
            <div>丢失时间: 2021-02-20 晚上19点</div>
            <div>联系微信: ttttttttkkkkkkk</div>
            <div>现金答谢: 30-300</div>
            <hr />
            <div>
              <div>最新更新时间2021-03-07</div>
              <a href="https://aqueous-cove-68364.herokuapp.com/hunt-poster">
                https://aqueous-cove-68364.herokuapp.com/hunt-poster
              </a>
              <img src={UrlQr} />
              <div>
                <small>打开摄像头扫码打开网站(没配代理,打开速度可能慢)</small>
              </div>
            </div>
          </div>
        </div>
        <div className="post__container">
          <img src={Img1} className="post__item" />
          <img src={Img3} className="post__item" />
        </div>
      </div>
    </Box>
  )
}

export default HuntPoster
