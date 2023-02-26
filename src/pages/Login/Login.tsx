import styled from "styled-components";
function Login() {
    return(
        <S.Wrapper>
            
        </S.Wrapper>
    )

}
export default Login

const Wrapper = styled.div`
   
   & a {
      display: block;
      width : 250px;
      height: auto;
      & svg {
         border-radius: 10px;
      }
   }
   
`

const S = {
   Wrapper,
}