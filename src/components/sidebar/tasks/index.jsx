import React from 'react'
import classNames from 'classnames'

import {TaskItem, TaskList} from '@/components/sidebar/tasks/style';
import CrossIcon from '@/assets/img/cross-icon.svg'

const Tasks = ({
                 currentTasks, setCurrentShowTask, showCurrentTask
}) => {
  const {id} = showCurrentTask
  const [activeTask, setActiveTask] = React.useState(currentTasks)

  const onTaskClickHandler = (id) => {
    setActiveTask(id)
    setCurrentShowTask(id)
  }

  React.useEffect(() => {
    setActiveTask(id)
  }, [id])

  return (
    <TaskList>
      {
        Object.entries(currentTasks).map(([key, value]) => {
          return (
            <TaskItem key={key}
                      color={value.selectedColor}
                      activeClass={classNames({active: activeTask === key})}
                      onClick={() => onTaskClickHandler(key)}
            >
              {value.title}
              <CrossIcon/>
            </TaskItem>
          )
        })
      }
    </TaskList>
  )
}

export default Tasks
