import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 20px 0 0 0;
  .main {
    overflow: hidden;
  }
`
export const HomeLeft = styled.div`
  width: 625px;
  float: left;
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`
export const RecommendList = styled.ul`
  margin-bottom: 20px;
  overflow: hidden;
`
export const RecommendItem = styled.li`
  float: left;
  margin: 0 18px 18px 0;
  line-height: 32px;
  font-size: 14px;
  padding-right: 11px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  overflow: hidden;
  .pic {
    width: 32px;
    height: 32px;
    float: left;
    margin-right: 6px;
  }
`
export const RecommendMore = styled.div`
  float: left;
  margin: 0 18px 18px 0;
  line-height: 32px;
  font-size: 14px;
  color: #787878;
`
export const ArticleItem = styled.div`
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .content {
    width: 458px;
    display: inline-block;
    h2 {
      font-size: 18px;
      line-height: 1.5;
      color: #333;
      font-weight: bold;
    }
    .desc {
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }
  }
  .cover {
    width: 150px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    float: right;
  }
`
export const ArticleMeta = styled.div`
  span {
    font-size: 12px;
    color: #b4b4b4;
    margin-right: 10px;
    .iconfont {
      margin-right: 3px;
      font-size: 12px;
    }
  }
`
export const LookMore = styled.div`
  margin: 30px 0 60px 0;
  padding: 10px 0;
  line-height: 20px;
  background: #a5a5a5;
  border-radius: 20px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
`
export const BoardList = styled.div`
  .board-item {
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`
export const DownloadWrap = styled.div`
  padding: 10px 20px;
  margin-bottom: 30px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  position: relative;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  &:hover {
    .download-preview-wrap {
      display: block;
    }
  }
  .download-pic {
    width: 60px;
    height: 60px;
    vertical-align: middle;
  }
`
export const DownloadInfo = styled.div`
  margin-left: 7px;
  display: inline-block;
  vertical-align: middle;
  .title {
    font-size: 15px;
    color: #333;
    line-height: 1.5;
  }
  .desc {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
    line-height: 1.3;
  }
`
export const DownloadPreview = styled.div`
  width: 150px;
  height: 150px;
  padding: 10px;
  position: absolute;
  bottom: 98px;
  left: 50%;
  margin-left: -75px;
  background: #fff;
  border: 1px solid #999;
  border-radius: 6px;
  display: none;
  &:after {
    content: '';
    display: block;
    border: 10px solid transparent;
    border-top-color: #fff;
    position: absolute;
    bottom: -19px;
    left: 50%;
    transform: translateX(-50%);
  }
  .download-preview {
    width: 100%;
  }
`
export const AuthorListWrapper = styled.div`
  .title {
    font-size: 14px;
    color: #969696;
  }
`
export const AuthorChange = styled.div`
  float: right;
  cursor: pointer;
  .refresh {
    display: inline-block;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`
export const AuthorItem = styled.li`
  margin-top: 15px;
  line-height: 20px;
  overflow: hidden;
  a {
    text-decoration: none;
    color: #333;
  }
  .avatar {
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid #ddd;
    float: left;
  }
  .follow {
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }
  .nickname {
    margin-right: 60px;
    margin-top: 5px;
    font-size: 14px;
  }
  .intro {
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 10px;
    color: #969696;
  }
`
export const AuthorMore = styled.div`
  padding: 7px 7px 7px 12px;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  text-align: center;
  line-height: 20px;
  margin-top: 10px;
`
export const BackTop = styled.div`
  position: fixed;
  right: 40px;
  bottom: 50px;
  width: 50px;
  height: 50px;
  border: 1px solid #dcdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
`