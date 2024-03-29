import axios from "axios";
import { media } from "libs/styles/media";
import { useState,useEffect } from "react";
import styled from "styled-components"
import MyPageCard from "./MypageCard";

export type MypageData  = {
   id : number,
   title : string,
   content : string,
   taglist : Array<string>,
   img: string
}

function MyPageList() {

   // 맵으로 뿌려질 데이터
   // props로  card 넘길거임

   const [testData,setTestData] = useState<Array<MypageData>>();

   useEffect(() => {
      axios
      .get("https://2432b997-c1de-4c6d-a6a7-36b68e210341.mock.pstmn.io/list")
      .then((res) => {
         setTestData(res.data)
      })
      .catch((err) => {
         console.log(err);
      });
   },[])

   return(
      <S.Wrapper>
         <S.Innerwrap>
            <S.Ul>
            {  testData &&
               testData.map((data,index) => (
                  <MyPageCard key={index} data ={data} />
            ))}
            </S.Ul>
         </S.Innerwrap>
      </S.Wrapper>
   )
}

export default MyPageList

const Wrapper = styled.div`
   background-color: #fff;
   min-height: 100%;
   width: 1728px;
   margin-left: auto;
   margin-right: auto;
   ${media.desktopL} {
      width: 1376px;
   }
   
   ${media.desktopM} {
      width: 1024px;
   }
   
   ${media.tablet} {
      width: calc(100% - 2rem);
   }
`;

const Innerwrap = styled.div`


`

const Ul = styled.ul`
   flex-wrap: wrap;
   display: flex;
   margin: -1rem;

   ${media.tablet} {
      margin: 0;
   }
`;

const S = {
   Wrapper,
   Innerwrap,
   Ul,
};