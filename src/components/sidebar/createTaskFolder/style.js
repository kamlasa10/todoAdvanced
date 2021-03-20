import styled from 'styled-components'
import {resetBtn} from '@/common/viewStyles/resetDefaultStyle';
import {darkGrey, lightBlue} from '@/common/viewStyles';

export const CreateTaskFolderBlock = styled.div`
  position: relative;
`

export const CreateFolderBtn = styled(resetBtn)`
  font-weight: 700;
  font-size: 14px;
  color: #767676;
  display:flex;
  align-items: center;
  cursor: pointer;
  
  svg {
    margin-right: 10px;
    width: 10px;
    height: 10px;
    transform: rotate(-45deg);
    transition: all .4s;
    fill: #868686;
  }
  
  &:hover {
    svg {
      transform: rotate(0deg);
    }
  }
`

export const CloseBtn = styled(resetBtn).attrs(() => ({
  type: 'button'
}))`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${darkGrey};
  position:absolute;
  top: -11px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .4s;
  
  svg {
    width: 10px;
    height: 10px;
    fill: #fff;
    transition: all .4s;
  }
  
  &:hover {
    transform: scale(1.1);
  }
`

export const CreateFolderInput = styled.input.attrs(({value, placeholder}) => ({
  type: 'input',
  placeholder,
  value
}))`
  border-radius: 4px;
  background-color: #fff;
  border: 2px solid #EFEFEF;
  padding: 8px 11px;
  width: 100%;
  display:block;
  margin-bottom: 13px;
  color: #C7C7C7;
  outline: none;
  transition: all .4s;
  
  &::-webkit-input-placeholder {color: #C7C7C7;}
  &:-moz-placeholder           {color: #C7C7C7;}
  &::-moz-placeholder          {color: #C7C7C7;}
  &:-ms-input-placeholder      {color: #C7C7C7;}  
  
  &:focus {
    border-radius: 0px;
  }
`

export const CreateFolderFormBtn = styled(resetBtn)`
  background-color: ${({bgColor}) => bgColor || '#EFEFEF'};
  width: 100%;
  border-radius: 4px;
  padding: 10px;
  display:flex;
  align-items: center;
  justify-content: center;
  color: ${({color}) => color || '#fff'};
  font-weight: 500;
  
  &:hover {
    background-color: darken(#4DD599, 7%);
  }
  
  .task-form__block & {
    margin-right: 10px;
    display: inline-flex;
    width: auto;
  }
`

export const CreateFolderDropdown = styled.form.attrs(({classNames}) => ({
  className: classNames
}))`
  position:absolute;
  padding: 17px;
  width: 235px;
  top: 32px;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  opacity: 0;
  z-index: -1;
  transform: translateX(10px);
  transition: all .4s;
    
  &.show {
    z-index: 10;
    opacity: 1;
    transform: translateX(0);
  }
`

export const ColorsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 13px;
`

export const ColorItem = styled.li.attrs(({activeClass}) => ({
  className: activeClass
}))`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({fill}) => fill ? fill : lightBlue};
  margin-right: 5px;
  border: 2px solid transparent;
  transition: all .4s;
  cursor: pointer;
  
  &:last-child {
    margin-right: 0;
  }
  
  &:hover {
  opacity: .8;
  }
  
  &.selected {
    border: 2px solid #525252;
  }
`
