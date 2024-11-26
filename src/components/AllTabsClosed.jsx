import "../styles/alltabsclosed.css";
import HowToGif from "../assets/gif/howto.gif";

function AllTabsClosed() {
  return (
    <div className="allTabsClosed">
      <div className="reopenContent">
        <div className="textReopen">
          Looks like you're testing out all of the{" "}
          <span className="fcnStyle">functionality</span>! Nice! Here's how to
          re-open closed tabs:
        </div>
        <img
          src={HowToGif}
          className="gifimg"
          loading="lazy"
          alt="functionality gif"
        ></img>
      </div>
    </div>
  );
}

export default AllTabsClosed;
