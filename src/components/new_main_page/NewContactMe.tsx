import contact from "../../utils/contactData";
import NewContactBox from "./NewContactBox";
import "../../styles/new_main_design/newcontactme.css";

function NewContactMe() {
  return (
    <div className="newContactContainer">
      <div className="contactMeHeadDiv">
        <div className="contactBlurb new">
          Are you interested in collaborating together or have any questions
          about any of my projects?
        </div>
      </div>
      <div className="contactMeBtnDiv">
        {contact.map((item, index) => (
          <NewContactBox key={index} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default NewContactMe;
