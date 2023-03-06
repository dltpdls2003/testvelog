import styled from "styled-components";
function Maintrend() {
    return(
        <S.Wrapper>
            최신트렌드
        </S.Wrapper>
    )

}
export default Maintrend

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