import "./Home.css";
import { STUDENT_DATA } from "../components/configs/students";
import StudentCard from "../components/StudentCard/StudentCard";
import { APP_NAME ,APP_DESCRIPTION, BG_COLOR , PRIMARY_COLOR, SECONDARY_COLOR} from "../components/configs/app";



function Home() {
  return (
    <div style={{backgroundColor:BG_COLOR}}
    className="home-container">
        
        <h1 className="app-name" style={{color:PRIMARY_COLOR}}>{APP_NAME}</h1>
        {APP_DESCRIPTION ? (
            <p className="app-description" style={{color:SECONDARY_COLOR}}> {APP_DESCRIPTION}</p>
         ): null}

        <div className="students-container">
            {STUDENT_DATA.map((student) => {
                const{name,email,city,gender,course,phone} = student;
                return (
                    <StudentCard 
                    name={name} 
                    email={email} 
                    city={city} 
                    gender={gender}
                    course={course}
                    phone={phone}
                    key={email}
                    />
                    
                );
            }
            )}


        </div>
        </div>
  )
}


export default Home;


