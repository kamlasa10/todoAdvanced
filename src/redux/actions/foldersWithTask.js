import {
  ADD_NEW_TASK_TO_FOLDER,
  CREATE_FOLDER_TASK, REMOVE_TASK_FROM_FOLDER,
  SET_ACTIVE_FOLDER_TASK, SET_DONE_TASK,
  SET_FOLDER_TASK_TITLE,
  SHOW_ALL_FOLDERS_TASK
} from '@/redux/types/folderWithTask';

export const createFolderForTask = ({title, selectedColor}) => ({
  type: CREATE_FOLDER_TASK,
  title,
  selectedColor
})

export const setActiveFolderTask = (id) => ({
  type: SET_ACTIVE_FOLDER_TASK,
  id
})

export const setFolderTitle = (payload) => ({
  type: SET_FOLDER_TASK_TITLE,
  payload
})

export const showAllFolders = () => ({
  type: SHOW_ALL_FOLDERS_TASK
})

export const addNewsTaskToFolder = (payload) => ({
  type: ADD_NEW_TASK_TO_FOLDER,
  ...payload
})

export const removeTaskFromFolder = (payload) => ({
  type: REMOVE_TASK_FROM_FOLDER,
  ...payload
})

export const setDoneToTask = (payload) => ({
  type: SET_DONE_TASK,
  ...payload
})
