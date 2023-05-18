import React, { useState } from 'react';

import { NavContainer, Designation,SubNavContainer,ProfileDetails, UserName,RightIcon, DownIcon, UserImage,LogoutText,AttendanceIcon,LogoutIcon, SubNavItem ,ReportIcon,HomeIcon, NavItem, LinkItem,UpdateIcon} from './DashBoardStyledComponents';



const Dashboard = () => {
  const [activeNavItem, setActiveNavItem] = useState('home');
  const [activeSubNavItem, setActiveSubNavItem] = useState(null);
  const [isHomeActive, setHomeActive] = useState(true);
  const [isMyUpdatesActive, setMyUpdatesActive] = useState(false);
  const [isMyReportsActive, setReportsActive] = useState(false);
  const [isMyAttendanceActive, setAttendanceActive] = useState(false);





  

  // const handleNavItemClick = (navItem) => {
  //   setActiveNavItem(navItem);
  //   setActiveSubNavItem(null);
  // };

  const handleSubNavItemClick = (subNavItem) => {
    setActiveSubNavItem(subNavItem);
  };

  const clickedHome = (navItem) => {
    setHomeActive(!isHomeActive);
    setMyUpdatesActive(false)
    setReportsActive(false)
    setAttendanceActive(false)
    setActiveNavItem('home');
    setActiveSubNavItem(null);
  }
  const clickedMyUpdates = () => {
    setHomeActive(false)
    setMyUpdatesActive(!isMyUpdatesActive)
    setReportsActive(false)
    setActiveNavItem('my-updates');


    setAttendanceActive(false)
    setActiveSubNavItem(null);

  }
  const clickedReports= () => {
    setHomeActive(false)
    setMyUpdatesActive(false)
    setReportsActive(!isMyReportsActive)
    setAttendanceActive(false)
    setActiveNavItem('reports');
    setActiveSubNavItem(null);


  }
  const clickedAttendance= () => {
    setHomeActive(false)
    setMyUpdatesActive(false)
    setReportsActive(false)
    setAttendanceActive(!isMyAttendanceActive)
    setActiveNavItem('attendance');
    setActiveSubNavItem(null);


  }


  return (
    <>
      <NavContainer>
      <ProfileDetails>
                    <UserImage src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png" alt="User Profile"/>
                    <div><UserName>Y Venkateswara Rao</UserName>
                    <Designation>HOD</Designation>
         <LogoutText>Logout <LogoutIcon/></LogoutText></div>
                </ProfileDetails>
        <LinkItem to = "/">
         <NavItem
          isActive={activeNavItem==='home'}
          // onClick={() => handleNavItemClick('home')}
          onClick={clickedHome}
        >
        <HomeIcon/>   Home
        </NavItem></LinkItem>
        <LinkItem to="/my-updates">
        <NavItem
          isActive={activeNavItem === 'my-updates'}
          // onClick={() => handleNavItemClick('my-updates')}
          onClick={clickedMyUpdates}
        >
       <UpdateIcon/> My Updates {isMyUpdatesActive ? <DownIcon/> : <RightIcon/>}
        </NavItem></LinkItem>
        {isMyUpdatesActive && (
          <SubNavContainer>
            <LinkItem to="/update-password">
            <SubNavItem
              isActive={activeSubNavItem === 'update-password'}
              onClick={() => handleSubNavItemClick('update-password')}
            >
              Update Password
            </SubNavItem></LinkItem>
            <LinkItem to="edit-my-details">         <SubNavItem
              isActive={activeSubNavItem === 'edit-my-details'}
              onClick={() => handleSubNavItemClick('edit-my-details')}
            >
              Edit My Details
            </SubNavItem></LinkItem>
            <LinkItem to="/link-my-subject">
            <SubNavItem
              isActive={activeSubNavItem === 'link-my-subject'}
              onClick={() => handleSubNavItemClick('link-my-subject')}
            >
              Link My Subject
            </SubNavItem></LinkItem> 
            <LinkItem to="/link-my-time-table">
            <SubNavItem
              isActive={activeSubNavItem === 'link-my-time-table'}
              onClick={() => handleSubNavItemClick('link-my-time-table')}
            >
              Link My Time Table
            </SubNavItem>
            </LinkItem>
            <LinkItem to="/view-my-time-table">
            <SubNavItem
              isActive={activeSubNavItem === 'view-my-time-table'}
              onClick={() => handleSubNavItemClick('view-my-time-table')}
            >
              View My Timetable
            </SubNavItem>
            </LinkItem>
            <LinkItem to="/delete-linked-subjects">
            <SubNavItem
              isActive={activeSubNavItem === 'delete-linked-subjects'}
              onClick={() => handleSubNavItemClick('delete-linked-subjects')}
            >
              Delete Linked Subjects
            </SubNavItem>
            </LinkItem>
          </SubNavContainer>
        )}
        <LinkItem to="reports">
        <NavItem
          isActive={activeNavItem === 'reports'}
          onClick={clickedReports}
        >
        <ReportIcon/>  Reports {isMyReportsActive ? <DownIcon/> : <RightIcon/>}
        </NavItem>
        </LinkItem>
        {isMyReportsActive && (
          <SubNavContainer>
            <LinkItem to="/student-details">            <SubNavItem
              isActive={activeSubNavItem === 'student-details'}
              onClick={() => handleSubNavItemClick('student-details')}
            >
              Student Details
            </SubNavItem>
            </LinkItem>
          <LinkItem to="/section-wise-subject-list">
            <SubNavItem
              isActive={activeSubNavItem === 'section-wise-subject-list'}
              onClick={() => handleSubNavItemClick('section-wise-subject-list')}
              >
              Section Wise Subject List
              </SubNavItem></LinkItem>
              <LinkItem to="/all-staff-details">
              <SubNavItem
              isActive={activeSubNavItem === 'all-staff-details'}
              onClick={() => handleSubNavItemClick('all-staff-details')}
              >
              All Staff Details
              </SubNavItem>
              </LinkItem>
              </SubNavContainer>
              )}
                        <LinkItem to="/attendance">
              <NavItem
              isActive={activeNavItem === 'attendance'}
              onClick={clickedAttendance}
              >
             <AttendanceIcon/> Attendance {isMyAttendanceActive ? <DownIcon/> : <RightIcon/>}
              </NavItem>
              </LinkItem>
              {isMyAttendanceActive && (
              <SubNavContainer>
                          <LinkItem to="/enter-attendance">
              <SubNavItem
              isActive={activeSubNavItem === 'enter-attendance'}
              onClick={() => handleSubNavItemClick('enter-attendance')}
              >
              Enter Attendance
              </SubNavItem>
              </LinkItem>
              <LinkItem to="/delete-attendance">
              <SubNavItem
              isActive={activeSubNavItem === 'delete-attendance'}
              onClick={() => handleSubNavItemClick('delete-attendance')}
              >
              Delete Attendance
              </SubNavItem></LinkItem>
              <LinkItem to="/hour-wise-attendance">
              <SubNavItem
              isActive={activeSubNavItem === 'hour-wise-attendance'}
              onClick={() => handleSubNavItemClick('hour-wise-attendance')}
              >
              Hour Wise Attendance
              </SubNavItem></LinkItem>
              <LinkItem to="/day-wise-attendance">
              <SubNavItem
              isActive={activeSubNavItem === 'day-wise-attendance'}
              onClick={() => handleSubNavItemClick('day-wise-attendance')}
              >
              Day Wise Attendance
              </SubNavItem></LinkItem>
              <LinkItem to="/subject-wise-attendance">
              <SubNavItem
              isActive={activeSubNavItem === 'subject-wise-attendance'}
              onClick={() => handleSubNavItemClick('subject-wise-attendance')}
              >
              Subject Wise Attendance
              </SubNavItem></LinkItem>
              <LinkItem to="/consolidated-attendance">
                
              <SubNavItem
              isActive={activeSubNavItem === 'consolidated-attendance'}
              onClick={() => handleSubNavItemClick('consolidated-attendance')}
              >
              Consolidated Attendance
              </SubNavItem>
              </LinkItem>
              <LinkItem to="/search-student-with-photo">
              <SubNavItem
              isActive={activeSubNavItem === 'search-student-with-photo'}
              onClick={() => handleSubNavItemClick('search-student-with-photo')}
              >
              Search Student With Photo
              </SubNavItem></LinkItem>
              </SubNavContainer>
              )}
              </NavContainer>
              </>
              );
              };
              
              export default Dashboard;
