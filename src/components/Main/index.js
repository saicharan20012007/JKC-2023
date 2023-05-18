import { HomeContainer, DBHome, DBProfile, CollegeLogoContainer, CollegeLogo, TitleLogoAndContentPage } from './MainStyledComponents';
import { Routes, Route, useLocation} from 'react-router-dom';
import Dashboard from '../Dashboard';
import MyUpdates from '../MyUpdates';
import Home from '../Home';
// import LoginForm from '../Login';
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

const Main = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';

  return (
    <HomeContainer>
      <DBHome>
        {!isLoginRoute && (
          <DBProfile>
            <Dashboard />
          </DBProfile>
        )}
        <TitleLogoAndContentPage>
          <CollegeLogoContainer>
            <CollegeLogo src="https://res.cloudinary.com/dlovqnrza/image/upload/v1684133386/JKC_TITLE_LOGO_jdgrki.jpg" alt="JKC" />
          </CollegeLogoContainer>
            <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<LoginForm />} /> */}
            <Route path="/my-updates" element={<MyUpdates />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="/edit-my-details" element={<EditMyDetails />} />
            <Route path="/link-my-subject" element={<LinkMySubject />} />
            <Route path="/link-my-time-table" element={<LinkMyTimeTable />} />
            <Route path="/view-my-time-table" element={<ViewMyTimeTable />} />
            <Route path="/delete-linked-subjects" element={<DeleteLinkedSubjects />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/student-details" element={<StudentsDetails />} />
            <Route path="/section-wise-subject-list" element={<SectionWiseSubjectList />} />
            <Route path="/all-staff-details" element={<AllStaffDetails />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/enter-attendance" element={<EnterAttendance />} />
            <Route path="/delete-attendance" element={<DeleteAttendance />} />
            <Route path="/hour-wise-attendance" element={<HourWiseAttendance />} />
            <Route path="/day-wise-attendance" element={<DayWiseAttendance />} />
            <Route path="/subject-wise-attendance" element={<SubWiseAttendance />} />
            <Route path="/consolidated-attendance" element={<ConsolidatedAttendance />} />
            <Route path="/search-student-with-photo" element={<SearchStudentWithPhoto />} />
            </Routes>
        </TitleLogoAndContentPage>
      </DBHome>
    </HomeContainer>
  );
};

export default Main;
