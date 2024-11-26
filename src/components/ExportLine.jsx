function ExportLine(props) {
  return (
    <div className="exportLine">
      <div className="line">
        {" "}
        <span className="lineWhite withPadding moveMe">{props.top}</span>
        &nbsp;&nbsp;&nbsp;{`)`}
        <span className="lineWhite">;</span>
      </div>
      <div className="brackStyle">
        <span className="lineWhite withPadding moveMe">{props.mid}</span>
        {`}`}
        <span className="lineWhite">;</span>
      </div>
      <div className="line">
        <span className="lineWhite withPadding moveMe">{props.bot}</span>
        export default{" "}
        <span className="nameStyle">
          {props.text}
          <span className="lineWhite">;</span>
        </span>
      </div>
    </div>
  );
}

export default ExportLine;
