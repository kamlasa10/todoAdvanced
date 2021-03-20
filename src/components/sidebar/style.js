import styled from 'styled-components'
import {resetBtn} from '@/common/viewStyles/resetDefaultStyle';

export const SidebarBlock = styled.aside`
  padding-top: 56px;
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 39px;
  background-color: #F4F6F8;
  font-weight: 500;
  
  span {
    margin-right: 10px;
  }
`

export const MenuBtn = styled(resetBtn)`
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1.2em;
  border: none;
  transition: all .4s;
  cursor: pointer;
  
  svg {
    fill: #7C7C7C;
    transition: all .4s;
  }
  
  &:hover {
  color: lighten(#000, 15%);
    svg {
      transform: rotate(3deg) translateX(-4px);
    }
  }
`