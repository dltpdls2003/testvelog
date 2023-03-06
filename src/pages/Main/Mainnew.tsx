import styled from "styled-components";
function Mainnew() {
    return(
        <S.Wrapper>
            <p>메인뉴</p>
        </S.Wrapper>
    )

}
export default Mainnew

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