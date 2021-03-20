import {
  ADD_NEW_TASK_TO_FOLDER,
  CREATE_FOLDER_TASK, REMOVE_TASK_FROM_FOLDER,
  SET_ACTIVE_FOLDER_TASK, SET_DONE_TASK,
  SET_FOLDER_TASK_TITLE,
  SHOW_ALL_FOLDERS_TASK
} from '@/redux/types/folderWithTask';
import produce from "immer"

const initialState = {
  currentFoldersTasks: {},
  showCurrentTask: {
    id: null,
    data: null
  },
  isAllShow: false
}

const folderWithTask = produce((draft, action) => {
    switch (action.type) {
      case CREATE_FOLDER_TASK:
        const id = Date.now().toString()

        draft.currentFoldersTasks[id] = {
          title: action.title,
          selectedColor: action.selectedColor
        }

        draft.showCurrentTask = {
          data: draft.currentFoldersTasks[id],
          id
        }

        break
      case SET_ACTIVE_FOLDER_TASK: {
        const {id} = action

        draft.showCurrentTask.data = draft.currentFoldersTasks[id]
        draft.showCurrentTask.id = id

        break
      }
      case SET_FOLDER_TASK_TITLE: {
        const id = draft.showCurrentTask.id

        draft.currentFoldersTasks[id].title = action.payload
        break
      }
      case SHOW_ALL_FOLDERS_TASK:
        draft.isAllShow = true
        break
      case ADD_NEW_TASK_TO_FOLDER: {
        const {id, taskText} = action
        const taskMark = Date.now().toString()

        if(!draft.currentFoldersTasks[id].tasks) {
          draft.currentFoldersTasks[id].tasks = []
        }

        draft.currentFoldersTasks[id].tasks.push({
          id: taskMark,
          value: taskText,
          done: false
        })

        break
      }
      case REMOVE_TASK_FROM_FOLDER: {
        const {folderId, taskId} = action
        draft.currentFoldersTasks[folderId].tasks =  draft.currentFoldersTasks[folderId].tasks.filter(task => task.id !== taskId)
        break
      }

      case SET_DONE_TASK: {
        const {folderId, taskId} = action
        const task = draft.currentFoldersTasks[folderId].tasks.find(task => task.id === taskId)
        console.log(task)

        task.done = !task.done
      }
    }
  }, initialState)

export default folderWithTask
