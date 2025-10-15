import { Building2, Mail, School, Phone } from "lucide-react";
import "./StudentCard.css";
import { PRIMARY_COLOR, LIGHT_COLOR } from "../configs/app";
import imgGirl from "./woman.png";
import imgBoy from "./boy.png";

function StudentCard({ name, email, city, gender, course, phone }) {
  return (
    <div
      className="student-card"
      style={{ borderColor: PRIMARY_COLOR, backgroundColor: LIGHT_COLOR }}
    >
      <h1 className="student-name">{name}</h1>
      <p className="student-info">
        <Mail className="student-info-icon" />
        {email}
      </p>
      <p className="student-info">
        <Building2 className="student-info-icon" />
        {city}
      </p>
      <p className="student-course">
        <School className="student-course-icon" />
        {course}
      </p>
      <p className="student-phone">
        <Phone className="student-phone-icon" />
        {phone}
      </p>
      <img
        src={gender === "female" ? imgGirl : imgBoy}
        alt={gender === "female" ? "Female student" : "Male student"}
        className="student-gender"
      />
    </div>
  );
}

export default StudentCard;