const FOOTER_DATA = {};

const language = {
  value: "",
  languages: [
    { key: "en", value: "English" },
    { key: "fr", value: "French" },
  ],
  onChange: (language) => {},
};

const menus = [
  {
    title: "",
    items: [
      {
        title: "",
        href: "",
      },
    ],
  },
];
const content = {
  heading: "" || <span></span>,
  body: "" || <span></span>,
  copyText: "",
};

const utilityMenu = {
  items: [
    {
      title: "",
      href: "",
    },
  ],
  socials: [
    {
      href: "",
      src: "",
      alt: "", // for accessibility
    },
  ],
};

const Demo = () => {
  return (
    <Footer
      language={language}
      menus={menus}
      content={content}
      utilityMenu={utilityMenu}
    />
  );
};

//  im considering if the order should be handled by the user
const Footer = () => {
  return (
    <>
      <NavLanguages />
      {/* <Divider /> */}
      <FooterMenus data={[]} />
      {/* <Divider /> */}
      <FooterContent data={{}} />
      {/* <Divider /> */}
      <FooterUtilityMenu data={{}} />
    </>
  );
};

const FooterMenus = ({ data, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <FooterMenuColumn>
        <FooterMenuItem href="">Label</FooterMenuItem>
      </FooterMenuColumn>
      <FooterMenuColumn data={[]} />
    </Wrapper>
  );
};

const FooterContent = ({ data }) => {
  return (
    <>
      <Heading children="" />
      <Content children="" />
      <CopyText children="" />
    </>
  );
};

const FooterUtilityMenu = ({ data }) => {
  return (
    <>
      <UtilityItems data={[]} />
      <Socails data={[]} />
    </>
  );
};

// // DESTRUCTURED APPROACH

// const SampleFooter = () => {
//   return (
//     <Footer>
//       <NavLanguages />
//       <FooterMenus>
//         <FooterMenuColumn>
//           <FooterMenuItem href="">Label</FooterMenuItem>
//         </FooterMenuColumn>
//         <FooterMenuColumn>
//           <FooterMenuItem href="">Label</FooterMenuItem>
//         </FooterMenuColumn>
//       </FooterMenus>
//       <FooterContent>
//         <Heading>Some content</Heading>
//         <Content>Some content</Heading>
//         <CopyText>Some content</Heading>
//       </FooterContent>
//       <FooterUtilityMenu data={[]}/>
//     </Footer>
//   );
// };
