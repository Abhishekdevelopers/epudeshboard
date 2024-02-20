import Accordion from "./Accordion";
import  "./AccordionData.css";
const accordionData = [
  {
    title: "Alright, but what exactly do you do?",
    content: `
    As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.
    As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.
    As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.
      `,
  },
  {
    title: "I don't need a brand strategist but I need help executing an upcoming campaign",
    content: `
        Aliquam vel libero et tortor sagittis condimentum. Nam id varius turpis, id pharetra eros. Mauris purus tortor, mattis quis eros in, molestie pharetra lorem. Morbi viverra urna purus, nec ornare purus aliquet et. Curabitur tempus nulla id leo eleifend, sit amet lobortis libero interdum. Proin nulla neque, imperdiet nec metus in, volutpat accumsan sem. Curabitur imperdiet et turpis at condimentum. Nunc nec quam fringilla, porta elit nec, pellentesque ligula.`,
  },
  {
    title: "I don't need a brand strategist but I need help executing an upcoming campaign",
    content: `
        Sed lobortis rutrum dui ut consequat. Vestibulum sollicitudin orci eget risus volutpat, quis congue neque pharetra. Nulla sed justo commodo tellus tincidunt lobortis. Nunc tortor augue, consequat eu odio nec, accumsan accumsan lorem. Suspendisse maximus ultricies turpis, consequat mollis diam tempor ut. Fusce a elementum est. Nulla odio elit, malesuada eu leo sit amet, malesuada accumsan magna. Maecenas molestie bibendum lorem, et ullamcorper dui euismod eget. Proin eget dui dapibus lacus fermentum mattis vitae iaculis lectus. Pellentesque in risus in nibh commodo imperdiet. Morbi at tempus dui. Mauris pellentesque mauris id erat blandit, ac ultrices metus efficitur. Donec porttitor neque eget elit volutpat gravida.
      `,
  },
  {
    title: "I don't need a brand strategist but I need help executing an upcoming campaign",
    content: `
        Sed lobortis rutrum dui ut consequat. Vestibulum sollicitudin orci eget risus volutpat, quis congue neque pharetra. Nulla sed justo commodo tellus tincidunt lobortis. Nunc tortor augue, consequat eu odio nec, accumsan accumsan lorem. Suspendisse maximus ultricies turpis, consequat mollis diam tempor ut. Fusce a elementum est. Nulla odio elit, malesuada eu leo sit amet, malesuada accumsan magna. Maecenas molestie bibendum lorem, et ullamcorper dui euismod eget. Proin eget dui dapibus lacus fermentum mattis vitae iaculis lectus. Pellentesque in risus in nibh commodo imperdiet. Morbi at tempus dui. Mauris pellentesque mauris id erat blandit, ac ultrices metus efficitur. Donec porttitor neque eget elit volutpat gravida.
      `,
  },
  {
    title: "I don't need a brand strategist but I need help executing an upcoming campaign",
    content: `
        Sed lobortis rutrum dui ut consequat. Vestibulum sollicitudin orci eget risus volutpat, quis congue neque pharetra. Nulla sed justo commodo tellus tincidunt lobortis. Nunc tortor augue, consequat eu odio nec, accumsan accumsan lorem. Suspendisse maximus ultricies turpis, consequat mollis diam tempor ut. Fusce a elementum est. Nulla odio elit, malesuada eu leo sit amet, malesuada accumsan magna. Maecenas molestie bibendum lorem, et ullamcorper dui euismod eget. Proin eget dui dapibus lacus fermentum mattis vitae iaculis lectus. Pellentesque in risus in nibh commodo imperdiet. Morbi at tempus dui. Mauris pellentesque mauris id erat blandit, ac ultrices metus efficitur. Donec porttitor neque eget elit volutpat gravida.
      `,
  },
];
const AccordionData = () => {
  return (
    <div className="maindiv">
    <div className="container-fluid">
      <h1>FAQ</h1>
      <Accordion sections={accordionData} />
    </div>
    </div>
  );
};

export default AccordionData;
// import Accordion from "./Accordion";
// const accordionData = [
//   {
//     title: "Alright, but what exactly do you do?",
//     content: `
//     As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.
//     As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.
//     As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.
//       `,
//   },
//   {
//     title: "I don't need a brand strategist but I need help executing an upcoming campaign",
//     content: `
//         Aliquam vel libero et tortor sagittis condimentum. Nam id varius turpis, id pharetra eros. Mauris purus tortor, mattis quis eros in, molestie pharetra lorem. Morbi viverra urna purus, nec ornare purus aliquet et. Curabitur tempus nulla id leo eleifend, sit amet lobortis libero interdum. Proin nulla neque, imperdiet nec metus in, volutpat accumsan sem. Curabitur imperdiet et turpis at condimentum. Nunc nec quam fringilla, porta elit nec, pellentesque ligula.`,
//   },
//   {
//     title: "I don't need a brand strategist but I need help executing an upcoming campaign",
//     content: `
//         Sed lobortis rutrum dui ut consequat. Vestibulum sollicitudin orci eget risus volutpat, quis congue neque pharetra. Nulla sed justo commodo tellus tincidunt lobortis. Nunc tortor augue, consequat eu odio nec, accumsan accumsan lorem. Suspendisse maximus ultricies turpis, consequat mollis diam tempor ut. Fusce a elementum est. Nulla odio elit, malesuada eu leo sit amet, malesuada accumsan magna. Maecenas molestie bibendum lorem, et ullamcorper dui euismod eget. Proin eget dui dapibus lacus fermentum mattis vitae iaculis lectus. Pellentesque in risus in nibh commodo imperdiet. Morbi at tempus dui. Mauris pellentesque mauris id erat blandit, ac ultrices metus efficitur. Donec porttitor neque eget elit volutpat gravida.
//       `,
//   },
//   {
//     title: "I don't need a brand strategist but I need help executing an upcoming campaign",
//     content: `
//         Sed lobortis rutrum dui ut consequat. Vestibulum sollicitudin orci eget risus volutpat, quis congue neque pharetra. Nulla sed justo commodo tellus tincidunt lobortis. Nunc tortor augue, consequat eu odio nec, accumsan accumsan lorem. Suspendisse maximus ultricies turpis, consequat mollis diam tempor ut. Fusce a elementum est. Nulla odio elit, malesuada eu leo sit amet, malesuada accumsan magna. Maecenas molestie bibendum lorem, et ullamcorper dui euismod eget. Proin eget dui dapibus lacus fermentum mattis vitae iaculis lectus. Pellentesque in risus in nibh commodo imperdiet. Morbi at tempus dui. Mauris pellentesque mauris id erat blandit, ac ultrices metus efficitur. Donec porttitor neque eget elit volutpat gravida.
//       `,
//   },
//   {
//     title: "I don't need a brand strategist but I need help executing an upcoming campaign",
//     content: `
//         Sed lobortis rutrum dui ut consequat. Vestibulum sollicitudin orci eget risus volutpat, quis congue neque pharetra. Nulla sed justo commodo tellus tincidunt lobortis. Nunc tortor augue, consequat eu odio nec, accumsan accumsan lorem. Suspendisse maximus ultricies turpis, consequat mollis diam tempor ut. Fusce a elementum est. Nulla odio elit, malesuada eu leo sit amet, malesuada accumsan magna. Maecenas molestie bibendum lorem, et ullamcorper dui euismod eget. Proin eget dui dapibus lacus fermentum mattis vitae iaculis lectus. Pellentesque in risus in nibh commodo imperdiet. Morbi at tempus dui. Mauris pellentesque mauris id erat blandit, ac ultrices metus efficitur. Donec porttitor neque eget elit volutpat gravida.
//       `,
//   },
// ];
// const AccordionData = () => {
//   return (
//     <div className="container">
//       <h1>FAQ</h1>
//       <Accordion sections={accordionData} />
//     </div>
//   );
// };

// export default AccordionData;
