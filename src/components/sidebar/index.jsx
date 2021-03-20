import React from 'react'

import {MenuBtn, SidebarBlock} from '@/components/sidebar/style';
import MenuIcon from '../../assets/img/menu-icon.svg'
import Tasks from '@/components/sidebar/tasks';
import CreateTaskFolder from '@/components/sidebar/createTaskFolder';
import {useDispatch, useSelector} from 'react-redux';
import {createFolderForTask, setActiveFolderTask} from '@/redux/actions/foldersWithTask';

const Sidebar = ({InputRef, edit,
                   setEdit}) => {
  const dispatch = useDispatch()
  const {currentFoldersTasks, showCurrentTask} = useSelector(({folderWithTask}) => folderWithTask)

  const onCreateFolderTask = (payload) => {
    dispatch(createFolderForTask({...payload}))
  }

  const setCurrentShowTask = (id) => {
    dispatch(setActiveFolderTask(id))
  }

  return (
    <SidebarBlock>
      {
        Object.keys(currentFoldersTasks)?.length > 0 &&
        <MenuBtn>
        <span>
          <MenuIcon/>
        </span>
          Все задачи
        </MenuBtn>
      }
      <Tasks currentTasks={currentFoldersTasks}
             setCurrentShowTask={setCurrentShowTask}
             showCurrentTask={showCurrentTask}
      />
      <CreateTaskFolder onCreateFolderTask={onCreateFolderTask}
                        InputRef={InputRef}
                        edit={edit}
                        setEdit={setEdit}
      />
    </SidebarBlock>
  )
}

export default Sidebar
