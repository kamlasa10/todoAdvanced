import {combineReducers, createStore} from 'redux';
import folderWithTask from '@/redux/reducers/foldersWithTask';

const reducers = combineReducers({folderWithTask})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store