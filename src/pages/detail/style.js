import styled from 'styled-components'

export const DetailWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
  padding: 24px;
  color: #404040;
`
export const DetailTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
  color: #404040;
  margin-bottom: 32px;
`
export const DetailContent = styled.div`
  line-height: 30px;
  font-size: 16px;
  h2{
    font-size: 24px;
    margin-bottom: 16px;
  }
  ul,
  ol {
    list-style-type: disc;
    word-break: break-word;
    margin: 0 0 0 20px;
  }
  li,
  p {
    margin-bottom: 20px;
    word-break: break-word;
  }
`
