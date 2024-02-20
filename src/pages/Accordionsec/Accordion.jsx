import React, { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
const accordionStyles = {
  maxWidth: "100%",
};

const accordionTitleStyles = {
  display: "flex",
  justifyContent: "space-between",
  coursor: "pointer",
  padding: "20px",
  background: "#21aeca",
};

const accordionContentStyles = {
  padding: "15px",
  background: "#39b9d2",
};

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const togegleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div>
      <div style={accordionTitleStyles} onClick={togegleSection}>
        <div>{section.title}</div>
        <div>{isActiveSection ? <RxCrossCircled size={20} color="#ffffff"/> : <GoPlusCircle size={20} color="#ffffff"/>}</div>
      </div>
      {isActiveSection && (
        <div style={accordionContentStyles}>{section.content}</div>
      )}
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div style={accordionStyles}>
        {sections.map((section, index) => (
          <AccordionSection
            section={section}
            key={index}
            isActiveSection={index === activeIndex}
            setActiveIndex={setActiveIndex}
            sectionIndex={index}
          />
        ))}
      </div>
    </>
  );
};
export default Accordion;
// import React, { useState } from "react";
// import { GoPlusCircle } from "react-icons/go";

// const accordionStyles = {
//   maxWidth: "100%",
// };

// const accordionTitleStyles = {
//   display: "flex",
//   justifyContent: "space-between",
//   coursor: "pointer",
//   padding: "25px",
//   background: "#21aeca",
// };

// const accordionContentStyles = {
//   padding: "25px",
//   background: "#39b9d2",
// };

// const AccordionSection = ({
//   section,
//   isActiveSection,
//   setActiveIndex,
//   sectionIndex,
// }) => {
//   const togegleSection = () => {
//     const nextIndex = isActiveSection ? null : sectionIndex;
//     setActiveIndex(nextIndex);
//   };
//   return (
//     <div>
//       <div style={accordionTitleStyles} onClick={togegleSection}>
//         <div>{section.title}</div>
//         <div>{isActiveSection ? "-" : "+"}</div>
//       </div>
//       {isActiveSection && (
//         <div style={accordionContentStyles}>{section.content}</div>
//       )}
//     </div>
//   );
// };

// const Accordion = ({ sections }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <>
//       <div style={accordionStyles}>
//         {sections.map((section, index) => (
//           <AccordionSection
//             section={section}
//             key={index}
//             isActiveSection={index === activeIndex}
//             setActiveIndex={setActiveIndex}
//             sectionIndex={index}
//           />
//         ))}
//       </div>
//     </>
//   );
// };
// export default Accordion;
