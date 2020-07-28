import styled from 'styled-components'
import logo from '../../assets/imgs/logo.png'

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  z-index: 10;
  .header-inner {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
    height: 100%;
  }
`
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logo});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 15px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  .iconfont {
    font-size: 30px;
  }
`
export const NavSearchWrapper = styled.div`
  float: left;
  position: relative;
  margin-top: 9px;
  .zoom {
    position: absolute;
    right: 4px;
    top: 50%;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #969696;
    &.focus {
      background: #777;
      color: #fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.slide-enter {
    width: 160px;
  }
  &.slide-enter-active {
    width: 240px;
    transition: width 0.2s ease-in-out;
  }
  &.slide-enter-done {
    width: 240px;
  }
  &.slide-exit {
    width: 240px;
  }
  &.slide-exit-active {
    width: 160px;
    transition: width 0.2s ease-in-out;
  }
  &.slide-exit-done {
    width: 160px;
  }
`
export const SearchInfoWrapper = styled.div`
  position: absolute;
  width: 240px;
  top: 46px;
  left: 0;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`
export const SearchTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchChange = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .refresh {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  display: block;
  padding: 0 5px;
  margin: 0 10px 10px 0;
  font-size: 12px;
  line-height: 20px;
  float: left;
  color: #969696;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Btn = styled.div`
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ea6f5a;
  padding: 0 20px;
  margin-right: 20px;
  font-size: 14px;
  &.reg {
    color: #ea6f5a;
  }
  &.writing {
    color: #fff;
    background: #ea6f5a;
  }
`
