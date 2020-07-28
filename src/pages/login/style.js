import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background-color: #f1f1f1;
`
export const LoginBox = styled.div`
  width: 400px;
  margin: 200px auto 0;
  padding: 50px 50px 30px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`
export const LoginInput = styled.input`
  background: hsla(0,0%,71%,.1);
  border-radius: 4px;
  width: 100%;
  padding: 0 10px;
  margin-bottom: 10px;
  height: 50px;
  border: 1px solid #ddd;
  outline: none;
`
export const LoginButton = styled.button`
  width: 100%;
  line-height: 25px;
  padding: 9px 18px;
  border-radius: 25px;
  color: #fff;
  background: #3194d0;
  border: none;
  outline: none;
  cursor: pointer;
`