import "../styles/footer.css";
import Remote from "../assets/bwicons/remote.svg?react";
import Branch from "../assets/bwicons/branch.svg?react";

function Footer() {
  return (
    <div className="footer">
      <div className="leftPart">
        <Remote className="footerIcon" /> WSL Ubuntu
      </div>
      <div className="middlePart">
        <Branch className="footerIcon" /> Main
      </div>
      <div className="rightPart">{`{ } JavaScript JSX`}</div>
    </div>
  );
}

export default Footer;
