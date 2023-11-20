import styled from 'styled-components'

export default function Overlay (){

    return(
        <>
         <Menu>
        
        <div>
        <img src='./Marvel.png' height="70px" width="180px"/>
        </div>
      </Menu>
        </>
    )
}

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2em;
  margin:0;


  > div {
    text-align: center;
    font-size: 3rem;
    width: 100px;
    font-weight: bold;
    font-family: Spiderman
  }
  

  @media only screen and (max-width: 1200px) {
    padding: 2em;
  }

  @media only screen and (max-width: 600px) {
   padding: 1em;
  }
`