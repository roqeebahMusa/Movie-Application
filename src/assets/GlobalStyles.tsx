import { Global, css } from "@emotion/react"

const GlobalStyles = () => {
  return (
    <Global styles= {css`
        body {
            background-color: #383838;
            min-height: 100vh;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            color: #010101;
            margin: 0;
            padding: 0;
        }
    `} />
  )
}

export default GlobalStyles