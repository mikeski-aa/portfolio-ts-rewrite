function TerminalParagraph(props) {
  return (
    <p className="terminalLine">
      <span className="machine">mike@DESKTOP-551ABR8</span>
      <span className="lineWhite">:</span>
      <span className="lineBlue">~/repos/portfoliosite</span>
      <span className="lineWhite">{`$ ${props.text}`}</span>
    </p>
  );
}

export default TerminalParagraph;
