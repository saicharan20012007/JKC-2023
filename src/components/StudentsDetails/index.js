import {BgContainer,MaintainImage, PageText, OptionsContainer} from './SD'
import {useState, useEffect} from 'react'

const StudentsDetails = () => {
      const [data, setData] = useState([]);
      const [year, setYear] = useState('');
      const [course, setCourse] = useState('');
      const [selectedCourses, setSelectedCourses] = useState([]);
      console.log(selectedCourses)

      const handleYearChange = (event) => {
        setYear(event.target.value);
        setCourse('');
        setSelectedCourses([]);
      };
    
      const handleCourseChange = (event) => {
        setCourse(event.target.value);
        setSelectedCourses([]);
      };
    
      const handleCourseSelection = (event) => {
        const selectedCourse = event.target.value;
        setSelectedCourses((prevSelectedCourses) => [...prevSelectedCourses, selectedCourse]);
      };

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://192.168.0.3/jkc/stulists.php'); // Replace with the actual URL of your PHP server
            const json = await response.json();
            setData(json);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, []);

      console.log(data)


return(
    <BgContainer>
    <OptionsContainer>
        <label htmlFor="year">Select Year:</label>
      <select id="year" value={year} onChange={handleYearChange}>
        <option value="">Select Year</option>
        <option value="1styear">1st Year</option>
        <option value="2ndyear">2nd Year</option>
        <option value="3rdyear">3rd Year</option>
      </select>

      <label htmlFor="course">Select Course:</label>
      <select id="course" value={course} onChange={handleCourseChange}>
        <option value="">Select Course</option>
        <option value="Bsc">B.Sc</option>
        <option value="Bcom">B.Com</option>
        <option value="BBA">BBA</option>
        <option value="BCA">BCA</option>
        <option value="BVoc">B.Voc</option>
      </select>
    </OptionsContainer>
        <MaintainImage src="https://res.cloudinary.com/dlovqnrza/image/upload/v1684135277/maintain_moazzq.webp" alt="Maintaining"/>
            <PageText>Students Details Page</PageText>
            
    </BgContainer>
)
}

export default StudentsDetails;