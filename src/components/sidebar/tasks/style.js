import styled from 'styled-components'

export const TaskList = styled.ul`
  margin-bottom: 48px;
`

export const TaskItem = styled.li.attrs(({activeClass}) => ({
  className: activeClass
}))`
  cursor: pointer;
  position:relative;
  min-width: 180px;
  text-overflow: ellipsis;
  padding: 11px 13px;
  padding-left: 32px;
  padding-right: 35px;
  border-radius: 4px;
  margin-left: -10px;
  transition: all .4s;
  
  &::after {
    content: "";
    position:absolute;
    left: 12px;
    top: 15px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({color}) => color};
  }
  
  svg {
    top: 35%;
    transform: translateY(-50%);
    position:absolute;
    right: 10px;
    width: 10px;
    height: 10px;
    fill: #E3E3E3;
    opacity: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  &:hover {
    background-color: #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  }
  
  &.active {
    background-color: #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  
    svg {
      opacity: 1;
      transform: rotate(180deg);
    }
  }
`
