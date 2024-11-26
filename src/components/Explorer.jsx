import "../styles/explorer.css";
import Folder from "./Folder";

function Explorer(props) {
  return (
    <div className={`explorerContainer ${props.status}`}>
      <div className="explorerHeading">Explorer</div>
      <div className="explorerContent">
        <Folder
          rootName="PORTFOLIOSITE [WSL:UBUNTU]"
          childOne="src"
          childTwo="components"
          childThree="bonus"
        />
      </div>
    </div>
  );
}

export default Explorer;
