import "../styles/explorer.css";
import Folder from "./Folder";

function Explorer({ status }: { status: boolean }) {
  return (
    <div className={`explorerContainer ${status}`}>
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
