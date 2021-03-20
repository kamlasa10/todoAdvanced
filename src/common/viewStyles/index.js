import styled from 'styled-components'

export const grey = '#e5e5e5'
export const green = '#42B883'
export const blue = '#FFBBCC'
export const lightGreen = '#B6E6BD'
export const metalicGrey = '#C9D1D3'
export const lightBlack = '#767676';
export const lightViolet = '#C355F5'
export const lightRed = '#FF6464'
export const darkGrey = '#5C5C5C'
export const lightBlue = '#64C4ED';
export const black = '#09011A';
// variables

export const InnerContentWrap = styled.div`
  display: grid;
  grid-template-columns: .9fr 3fr;
  min-height: 75vh;
`

export const Container = styled.div`
  height: 100%;
  max-width: 1200px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const EmptyTasksInfo = styled.div`
  position:absolute;
  top: 35%;
  left: 50%;
  transform: translate(0%, -50%);
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3em;
  color: ${metalicGrey};
`