import "./Programs.css";
import { FaUserGraduate } from "react-icons/fa6";
const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img
          src="https://6600f9448007766cf67c6f48--super-kataifi-85949e.netlify.app/assets/program-1-DA_EvTPy.png"
          alt=""
        />
        <div className="caption">
          <FaUserGraduate className="ic" />
          <p>Gradution Programs</p>
        </div>
      </div>

      <div className="program">
        <img
          src="	https://6600f9448007766cf67c6f48--super-kataifi-85949e.netlify.app/assets/program-2-DRqwF0EM.png"
          alt=""
        />
        <div className="caption">
          <FaUserGraduate className="ic" />
          <p>Master Programs</p>
        </div>
      </div>

      <div className="program">
        <img
          src="	https://6600f9448007766cf67c6f48--super-kataifi-85949e.netlify.app/assets/program-3-C0g4YULi.png"
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
