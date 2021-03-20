import React from 'react'
import { Normalize } from 'styled-normalize'
import GlobalStyles from '@/globalStyles';
import Sidebar from '@/components/sidebar';
import {Container, InnerContentWrap, Wrapper} from '@/common/viewStyles';
import CurrentTask from '@/components/currentTask';
import {setFolderTitle} from '@/redux/actions/foldersWithTask';
import {useDispatch} from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  const [edit, setEdit] = React.useState(false)
  const InputRef = React.useRef()
  const [currentTitleText, setCurrentTitleText] = React.useState('')

  const setNewTitleForTask = () => {
    dispatch(setFolderTitle(currentTitleText))
  }

  const onDomClickHandler = React.useCallback((event) => {
    event.stopImmediatePropagation()
    const path = event.path || (event.composedPath && event.composedPath())

    if(!path.includes(InputRef.current) && edit) {
      setNewTitleForTask()
      setEdit(false)
    }
  }, [edit, currentTitleText])

  React.useEffect(() => {
    document.addEventListener('click', onDomClickHandler)

    return () => {
      document.removeEventListener('click', onDomClickHandler)
    }
  }, [onDomClickHandler])

  return (
    <>
      <Normalize/>
      <GlobalStyles/>
      <Wrapper>
        <Container>
          <InnerContentWrap>
            <Sidebar currentTitleText={currentTitleText}
            />
            <CurrentTask InputRef={InputRef}
                         edit={edit}
                         setEdit={setEdit}
                         setCurrentTitleText={setCurrentTitleText}
                         currentTitleText={currentTitleText}
            />
          </InnerContentWrap>
        </Container>
      </Wrapper>
    </>
  )
}

export default App
