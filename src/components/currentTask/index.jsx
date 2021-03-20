import React from 'react'
import WriteIcon from '@/assets/img/pen.svg'
import {
  Content,
  CurrentTaskBlock,
  CurrentTaskTitle, CustomCheckbox, TaskForm,
  TaskInfo,
  TaskItem,
  TaskList, TaskTextarea
} from '@/components/currentTask/style';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames'
import {EmptyTasksInfo} from '@/common/viewStyles';
import {CreateFolderFormBtn, CreateFolderInput} from '@/components/sidebar/createTaskFolder/style';
import CrossIcon from '@/assets/img/cross-icon.svg';
import CheckIcon from '@/assets/img/check.svg';
import {addNewsTaskToFolder, removeTaskFromFolder, setDoneToTask} from '@/redux/actions/foldersWithTask';

const CurrentTasks = React.memo(({InputRef, edit,
                                   setEdit, setCurrentTitleText, currentTitleText
}) => {
  const {showCurrentTask, folderTasks} = useSelector(({folderWithTask}) => ({showCurrentTask: folderWithTask.showCurrentTask, folderTasks: folderWithTask.currentFoldersTasks}))
  const dispatch = useDispatch()

  const [textForNewTask, setTextForNewTask] = React.useState('')

  const onChangeTextareaHandler = (e) => {
    setTextForNewTask(e.target.value)
  }

  const onTitleDoubleClickHandler = (e) => {
    e.stopPropagation()
    setEdit(true)
  }

  const onEditableInputChangeHandler = (e) => {
    setCurrentTitleText(e.target.value)
  }

  const onResetClickHandler = (e) => {
    e.preventDefault()
    setTextForNewTask('')
  }

  const onFormSubmitHandler = (e) => {
    e.preventDefault()

    if(!textForNewTask) return

    dispatch(addNewsTaskToFolder({id: showCurrentTask.id, taskText: textForNewTask}))
    setTextForNewTask('')
  }

  const removeTask = (folderId, taskId) => {
    dispatch(removeTaskFromFolder({
      folderId,
      taskId
    }))
  }

  const onTaskClickHandler = (folderId, taskId) => {
    dispatch(setDoneToTask({
      folderId, taskId
    }))
  }

  React.useEffect(() => {
    setCurrentTitleText(showCurrentTask?.data?.title)
  }, [showCurrentTask?.data?.title])

  if(!showCurrentTask.id) {
    return <EmptyTasksInfo>Задачи отсутствуют</EmptyTasksInfo>
  }

  const {title, selectedColor} = showCurrentTask?.data
  const headingTask = !edit &&
    <CurrentTaskTitle selectedColor={selectedColor}
                      onDoubleClick={onTitleDoubleClickHandler}
    >
      {currentTitleText || title}
      <WriteIcon/>
    </CurrentTaskTitle>

  return (
    <Content>
      {
        showCurrentTask.id &&
          <>
            {headingTask}
            <CurrentTaskBlock>
              {
                edit && <CreateFolderInput onChange={onEditableInputChangeHandler}
                                           value={currentTitleText}
                                           ref={InputRef}
                />
              }
            </CurrentTaskBlock>
          </>
      }
      <TaskList>
        {
          folderTasks[showCurrentTask.id]?.tasks?.map(({value, id, done}) => (
            <TaskItem key={id}>
              <TaskInfo className={classNames({
                done: done
              })} onClick={() => onTaskClickHandler(showCurrentTask.id, id)}>
                {value}
                <CustomCheckbox>
                  <CheckIcon/>
                </CustomCheckbox>
                <CrossIcon onClick={() => removeTask(showCurrentTask.id, id)}/>
              </TaskInfo>
            </TaskItem>
          ))
        }
      </TaskList>
      <TaskForm onSubmit={onFormSubmitHandler}>
        <TaskTextarea onChange={onChangeTextareaHandler} value={textForNewTask} placeholder="Текст задачи"/>
        <div className="task-form__block">
          <CreateFolderFormBtn bgColor="#4DD599">Добавить задачу</CreateFolderFormBtn>
          <CreateFolderFormBtn onClick={onResetClickHandler} color="#9C9C9C" bgColor="#F4F6F8">Отмена</CreateFolderFormBtn>
        </div>
      </TaskForm>
    </Content>
  )
})

export default CurrentTasks
