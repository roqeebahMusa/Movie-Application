import styled from "@emotion/styled"
import {VscSearch} from "react-icons/vsc"
import {BiUserCircle} from "react-icons/bi"


const Container = styled.div`
    height: 70px;
    width: 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    overflow: hidden;
    /* background-color: #4C86AB; */
    background-color: #477890;
`

const Logo = styled.div`
    margin-left: 40px;
    font-size: 30px;
    color: white;
    font-weight: bolder;
`
const Second = styled.div`
  margin-right: 40px;
  display: flex;
  color: black;
`

const InputHold = styled.div`
  width: 70px;
  height: 20px;
  background-color: white;
  border: 1px solid white;
  display: flex;
  align-items: center;
  color: black;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  margin-right: 20px;
  transition: all 300ms;

  :hover {
    width: 300px;
  }
`

const IconSearch = styled.div`
  font-size: 20px;
`

const Input = styled.input`
background-color: transparent;
flex: 1;
outline: none;
border: 0;
`

const UserHold = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`




const Header = () => {
  return (
    <Container>
        <Logo>ROVIES</Logo>
        <Second>
            <InputHold>
            <IconSearch>
              <VscSearch />
            </IconSearch>
            <Input placeholder="Search.." />
            </InputHold>
            <UserHold>
              <BiUserCircle />
            </UserHold>
        </Second>
    </Container>
  )
}

export default Header