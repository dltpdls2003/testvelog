import React,{useState} from "react";
import styled from 'styled-components'
import {IoMdArrowDropdown} from "react-icons/io";
import {Link} from 'react-router-dom'

function Datechange(){
    const [Datemenu,setDatemenu] = useState<boolean>(false);

    const onClickDatechange = () => {
        if(!Datemenu) return setDatemenu(true);
        setDatemenu(false);
        }
        console.log(Datemenu);
    

    return (
        <S.Wrapper>
            <S.container onClick={onClickDatechange}>
            <DateBox/>
            <S.Datearrow/>
            <S.Datetoggle Datemenu={Datemenu}>
                <div>
                    <li><Link to ={'/test1'}>오늘</Link></li>
                    <li><Link to ={'/test2'}>이번 주</Link></li>
                    <li><Link to ={'/test3'}>이번 달</Link></li>
                    <li><Link to ={'/test4'}>올해</Link></li>
                </div>
            </S.Datetoggle>
            </S.container>
        </S.Wrapper>
    )
}
    export default Datechange

    const Wrapper = styled.div`
    `

    const container = styled.div`
    cursor: pointer;
   display: flex;
   align-items: center;
   position: relative;
    `

    const DateBox = styled.div`
    background: #000;
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    transition: all 0.125s ease-in 0s;
    `
    

    const Datearrow = styled(IoMdArrowDropdown)`
    font-size: 1.5rem;
   margin-left: 0.25rem;
   color: #868E96;
   transition: all 0.125s ease-in 0s;
   margin-right: -0.4375rem;
    `


    const Datetoggle = styled.div<{Datemenu:boolean}>`
    display: ${({Datemenu}) => (Datemenu ? `block` : `none`)};
   position: absolute;
   top: 100%;
   margin-top: 1rem;
   right: 0px;
   background-color : #000;

   & div{
      position: relative;
      z-index: 5;
      width: 12rem;
      background: #FFFFFF;
      box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
   }

   & div li {
      padding: 0.75rem 1rem;
      line-height: 1.5;
   }
   & div li a {
      color:#212529;
      cursor: pointer;
      font-weight: 500;
   }
    `

    const S = {
        Wrapper,
        container,
        Datearrow,
        Datetoggle,
     }