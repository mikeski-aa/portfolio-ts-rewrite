import "../styles/contactme.css";
import contact from "../utils/contactData";
import ContactBox from "./ContactBox";
import ExportLine from "./ExportLine";
import CodeComponent from "./CodeComponent";

function ContactMe() {
  return (
    <div className="contactMeComponent">
      <CodeComponent
        firstImport="ContactBox"
        firstImportLocation={`"./ContactBox"`}
        styleImportLink={`"../styles/contactme.css"`}
        functionName="Contact_me"
        rLine="177"
      />
      <div className="contactMeTitle">
        <h2>Contact_me</h2>
      </div>
      <div className="contactMeBlurb">
        <div className="innerContactDiv">
          <div className="contactBlurb lone">
            <span className="fcnStyle">Are you</span> interested in
            collaborating together or have any questions about this or any other
            of my projects?
          </div>
          <div className="contactBlurb ltwo">
            Don't hesitate! <span className="brackStyle">Get in touch</span>{" "}
            with me via any of the following:
          </div>
        </div>
      </div>
      <div className="contactMeDiv">
        {contact.map((item, index) => (
          <ContactBox key={index} name={item.name} />
        ))}
      </div>

      <ExportLine text="Contact_me" top="255" mid="256" bot="257" />
      {window.innerWidth <= 963 ? (
        <div className="mobileContainer">
          <div className="mobileMessage">
            It looks like you are viewing this page on a mobile device! Not all
            the features are available on mobile, try the{" "}
            <span className="brackStyle">desktop</span> site to get access to
            all of the features!
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ContactMe;
