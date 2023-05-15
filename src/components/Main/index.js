import {HomeContainer,UserName,DBHome,ProfileDetails,LogoutText,LogoutIcon,DBProfile,UserImage} from './MainStyledComponents';
import Dashboard from '../Dashboard';
import {Routes, Route } from 'react-router-dom'
import MyUpdates from '../MyUpdates';
import Home from '../Home';
import UpdatePassword from '../UpdatePassword';
import EditMyDetails from '../EditMyDetails';
import LinkMySubject from '../LinkMySubject';
import LinkMyTimeTable from '../LinkMyTimeTable';
import ViewMyTimeTable from "../ViewMyTimeTable";
import DeleteLinkedSubjects from '../DeleteLinkedSubjects';
import Reports from '../Reports';
import StudentsDetails from '../StudentsDetails';
import SectionWiseSubjectList from '../SectionWiseSubList';
import AllStaffDetails from '../AllStaffDetails';
import Attendance from '../Attendance';
import EnterAttendance from '../EnterAttendance';
import DeleteAttendance from '../DeleteAttendance';
import HourWiseAttendance from '../HourWiseAttendance';
import DayWiseAttendance from '../DayWiseAttendance';
import SubWiseAttendance from '../SubWiseAttendance';
import ConsolidatedAttendance from '../ConsolidatedAttendance';
import SearchStudentWithPhoto from '../SearchStudentWithPhoto';

const Main = () => (
        <HomeContainer>
           
            <DBHome>
                <DBProfile>
                <ProfileDetails>
                    <UserImage src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png" alt="User Profile"/>
                    <UserName>Y Venkateswara Rao</UserName>
                    <LogoutText>Logout <LogoutIcon/></LogoutText>
                </ProfileDetails>
                <Dashboard/>
                </DBProfile>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/my-updates" Component={MyUpdates}/>
                    <Route path="/update-password" Component={UpdatePassword}/>
                    <Route path="/edit-my-details" Component={EditMyDetails}/>
                    <Route path="/link-my-subject" Component={LinkMySubject}/>
                    <Route path="/link-my-time-table" Component={LinkMyTimeTable}/>
                    <Route path="/view-my-time-table" Component={ViewMyTimeTable}/>
                    <Route path="/delete-linked-subjects" Component={DeleteLinkedSubjects}/>
                    <Route path="/reports" Component={Reports}/>
                    <Route path="/student-details" Component={StudentsDetails}/>
                    <Route path="/delete-linked-subjects" Component={DeleteLinkedSubjects}/>
                    <Route path="/section-wise-subject-list" Component={SectionWiseSubjectList}/>
                    <Route path="/all-staff-details" Component={AllStaffDetails}/>
                    <Route path="/all-staff-details" Component={AllStaffDetails}/>
                    <Route path="/attendance" Component={Attendance}/>
                    <Route path="/enter-attendance" Component={EnterAttendance}/>
                    <Route path="/delete-attendance" Component={DeleteAttendance}/>
                    <Route path="/hour-wise-attendance" Component={HourWiseAttendance}/>
                    <Route path="/day-wise-attendance" Component={DayWiseAttendance}/>
                    <Route path="/subject-wise-attendance" Component={SubWiseAttendance}/>
                    <Route path="/consolidated-attendance" Component={ConsolidatedAttendance}/>
                    <Route path="/search-student-with-photo" Component={SearchStudentWithPhoto}/>








                </Routes>

            </DBHome>

        </HomeContainer>
    )


export default Main;