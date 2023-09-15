import { Global, css } from "@emotion/react"

const GlobalStyles = () => {
  return (
    <Global styles= {css`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,800;0,900;1,100;1,200;1,400;1,700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,500&family=Space+Grotesk:wght@300;400;500;700&display=swap');
        body {
            background-color: #e1dd8f;
            min-height: 100vh;
            font-family: "Montserrat", sans-serif;
            color: #010101;
            margin: 0;
            padding: 0;
        }
    `} />
  )
}

export default GlobalStyles