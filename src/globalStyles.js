import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
 *, *::before,
*, *::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.2em;
  font-weight: 400;
  color: #000;
  background-color: #fff;
  box-sizing: border-box;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

h1, h2, h3,
h4, h5, h6 {
  margin: 0;
}

.wrapper {
  height: 100%;
  overflow: hidden;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
}

.row {
  display: grid;
}

p {
  margin: 0;
}
`

export default GlobalStyles