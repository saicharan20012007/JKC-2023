import styled from 'styled-components'
import {HiOutlineLogout} from 'react-icons/hi'

export const HomeContainer = styled.div`
min-height:90vh;
width:95vw;
`



export const DBHome = styled.div`
display:flex;
`
export const ProfileDetails = styled.div`
    min-height:175px;
    display:flex;
    flex-direction:column;
    align-items: center;
    `
export const DBProfile = styled.div`
    display:flex;
    width:275px;
    flex-direction:column;
    padding:0px;
`

export const UserImage = styled.img`
height:100px;
width:100px;`


export const UserName = styled.h2`
font-size:17px;
line-height:24px;
margin-bottom:0px;`

export const LogoutIcon =  styled(HiOutlineLogout)`
height:20px;
width:20px;
margin-left:5px;
margin-top:0px;
`


export const LogoutText = styled.h4`
font-size:20px;
line-height:24px;
font-weight:400;
display: flex;
flex-direction:row;
justify-content:center;
align-items:center;
text-align:right;
align-self:right;`

export const HomeContent = styled.div`
min-height:100vh;
width:100%;`

export const CollegeLogo = styled.img`

align-self:center;`

export const CollegeLogoContainer = styled.div`
width:100%;
`

export const TitleLogoAndContentPage = styled.div`
display: flex;
flex-direction:column;
align-items:center;
margin-left:290px;`
