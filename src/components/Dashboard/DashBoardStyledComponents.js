import styled from "styled-components";
import {Link} from "react-router-dom"
import {IoHomeOutline} from "react-icons/io5"
import {RxUpdate} from 'react-icons/rx'
import {TbReportSearch} from 'react-icons/tb'
import {MdOutlineCoPresent} from 'react-icons/md'


export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #0d0f7c;
  padding: 10px;
  min-height:60vh;
  width:275px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;


`;

export const NavItem = styled.div`
  cursor: pointer;
  padding: 5px;
  color:white;
  margin-left:16px;
  margin-right:16px;
  font-size:18px;
  border-radius:7px;
  font-weight:600;
  padding-left:20px;
  line-height: 28px;
  height:40px;
  display: flex;
  align-items  :center ;
  

  
  ${({ isActive }) => isActive && 'background-color: #CD9702;'}


`;


export const SubNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius:7px;
  margin-top: 10px;
  margin-left:50px;

  background-color: #8b5cf6

`;

export const SubNavItem = styled.div`
  cursor: pointer;
  padding: 5px;
  color:white;
  display: flex;
  align-items  :center ;
  height:35px;
  padding-left:20px;
 
  border-radius: 7px;
  ${({ isActive }) => isActive && 'background-color: #0000ee;'}
`;

export const LinkItem = styled(Link)`
text-decoration:none;`

export const HomeIcon =  styled(IoHomeOutline)`
height:20px;
width:20px;
margin-left:5px;
margin-top:0px;
margin-right:10px;
`

export const UpdateIcon =  styled(RxUpdate)`
height:20px;
width:20px;
margin-left:5px;
margin-top:0px;
color:white;
margin-right:10px;
border-color:white;
`
export const ReportIcon =  styled(TbReportSearch)`
height:20px;
width:20px;
margin-left:5px;
margin-top:0px;
color:white;
margin-right:10px;
border-color:white;
`
export const AttendanceIcon =  styled(MdOutlineCoPresent)`
height:20px;
width:20px;
margin-left:5px;
margin-top:0px;
color:white;
margin-right:10px;
border-color:white;
`