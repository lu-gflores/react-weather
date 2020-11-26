import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
        &::-webkit-scrollbar-track {
        background: white;
    }
    
    }
    body{
        font-family: 'Roboto Slab', serif;
        background-color: '#fcfcfca';
    }
`
export default GlobalStyles