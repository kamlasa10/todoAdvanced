import React from 'react'
import classes from 'classnames'

import {
  CloseBtn,
  CreateFolderBtn,
  CreateFolderDropdown, CreateFolderFormBtn, CreateFolderInput,
  CreateTaskFolderBlock
} from '@/components/sidebar/createTaskFolder/style';
import CrossIcon from '@/assets/img/cross-icon.svg'
import ColorsSelect from '@/components/sidebar/createTaskFolder/colorsSelect';
import {black, blue, green, lightBlue, lightGreen, lightRed, lightViolet, metalicGrey} from '@/common/viewStyles';

const avaliableColors = [metalicGrey, green, lightBlue, blue, lightGreen, lightViolet, black, lightRed]

const CreateTaskFolder = ({onCreateFolderTask}) => {
  const [showCreateTask, setShowCreateTask] = React.useState('')
  const [folderNameTask, setFolderNameTask] = React.useState('')
  const [selectedColor, setSelectedColor] = React.useState(avaliableColors[0])

  const ref = React.useRef()
  const InputRef = React.useRef()

  const onCreateFolderBtnClickHanlder = (e) => {
    e.stopPropagation()

    setShowCreateTask(value => value ? '' : 'show')
    InputRef.current.focus()
  }

  const onBtnCloseClickHandler = () => {
    setShowCreateTask('')
  }

  const onSelectColorClickHandler = (color) => {
    setSelectedColor(color)
  }

  const onChangeCreateFolderInputHanlder = (e) => {
    const value = e.target.value
    setFolderNameTask(value)
  }

  const onSubmitFormHandler = (e) => {
    e.preventDefault()
    onCreateFolderTask({title: folderNameTask, selectedColor})
    setShowCreateTask('')
    setFolderNameTask('')
  }

  return (
    <CreateTaskFolderBlock>
      <CreateFolderBtn onClick={onCreateFolderBtnClickHanlder}>
        <CrossIcon/>
        Добавить папку
      </CreateFolderBtn>
      <CreateFolderDropdown ref={ref}
                            className={classes('active', showCreateTask)}
                            onSubmit={onSubmitFormHandler}
      >
        <CloseBtn onClick={onBtnCloseClickHandler}>
          <CrossIcon/>
        </CloseBtn>
        <CreateFolderInput onChange={onChangeCreateFolderInputHanlder}
                           value={folderNameTask}
                           placeholder='Название папки'
                           ref={InputRef}
        />
        <ColorsSelect colors={avaliableColors}
                      selectedColor={selectedColor}
                      onSelectColorClickHandler={onSelectColorClickHandler}
        />
        <CreateFolderFormBtn bgColor="#4DD599">
          Добавить
        </CreateFolderFormBtn>
      </CreateFolderDropdown>
    </CreateTaskFolderBlock>
  )
}

export default CreateTaskFolder
