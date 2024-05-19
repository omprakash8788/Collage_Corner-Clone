import "./Programs.css";
import { FaUserGraduate } from "react-icons/fa6";
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img
          src={program_1}
          alt=""
        />
        <div className="caption">
          <FaUserGraduate className="ic" />
          <p>Gradution Programs</p>
        </div>
      </div>

      <div className="program">
        <img
          src={program_2}
          alt=""
        />
        <div className="caption">
          <FaUserGraduate className="ic" />
          <p>Master Programs</p>
        </div>
      </div>

      <div className="program">
        <img
          src={program_3}
          alt=""
        />
        <div className="caption">
          <FaUserGraduate className="ic" />
          <p>MBA Programs</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
