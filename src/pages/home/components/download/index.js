import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { DownloadWrap, DownloadInfo, DownloadPreview } from '../../style'
import downloadSrc from '../../../../assets/imgs/download.png'

class Download extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <DownloadWrap>
        <img className="download-pic" src={downloadSrc} alt="" />
        <DownloadInfo>
          <div className="title">下载简书手机APP ></div>
          <div className="desc">随时随地发现和创作内容</div>
        </DownloadInfo>
        <DownloadPreview className="download-preview-wrap">
          <img className="download-preview" src={downloadSrc} alt="" />
        </DownloadPreview>
      </DownloadWrap>
    )
  }
}

export default connect()(Download)
