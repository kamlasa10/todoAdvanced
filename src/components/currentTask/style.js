import styled from 'styled-components'

export const CurrentTaskBlock = styled.div`
  width: 200px;
  height: 50px;
`

export const CurrentTaskTitle = styled.h2`
  margin-bottom: 30px;
  padding-bottom: 20px;
  cursor: pointer;
  font-weight: 700;
  display: flex;
  align-items: center;
  font-size: 32px;
  line-height: 1.4em;
  color: ${({selectedColor}) => selectedColor};
  border-bottom: 1px solid #F2F2F2;
  transition: all .4s;
  
  svg {
    margin-left: 15px;
    margin-top: -5px;
    width: 15px;
    height: 15px;
    fill: #DFDFDF;
    transition: all .4s;
  }
  
  &:hover {
    opacity: .8;
    
    svg {
      transform: translateX(3px);
    }
  }
`

export const Content = styled.div`
  position:relative;
  padding-top: 56px;
  padding-left: 56px;
  padding-right: 56px;
  background-color: #fff;
`

export const TaskList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export const TaskItem = styled.li`
  display: flex;
  margin-bottom: 20px;
`

export const TaskInfo = styled.span.attrs(({done}) => ({
  classNames: done
}))`

  display: block;
  padding-left: 35px;
  font-size: 16px;
  font-weight: 500;
  position:relative;
  width: 90%;
  cursor: pointer;
  
  &:hover {
    span {
      background-color: #F2F2F2;
      border-color: transparent;
    }
    
    svg {
      opacity: 1;
      fill: #E3E3E3;
    }
  }
  
 & > svg {
    transition: all .4s;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
 
`

export const CustomCheckbox = styled.span`
  position:absolute;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #E8E8E8;
  background-color: #fff;
  transition: all .4s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  svg {
    transition: all .4s;
    opacity: 0;
    stroke: #B3B3B3;
    stroke-width: 2px;
  }
  
  .done & {
    border-color: transparent;
    background-color: #4DD599;
    
    svg {
      opacity: 1;
      stroke: #fff;
    }
  }
`

export const DeleteTaskBtn = styled

export const TaskForm =  styled.form`
  
`

export const TaskTextarea = styled.textarea.attrs((props) => ({
  ...props
}))`
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
  width: 100%;
  min-height: 38px;
  padding: 9px 15px;
  border-radius: 4px;
  resize: none;
  margin-bottom: 16px;
  
  &:focus {
    outline: none;
  }
`
