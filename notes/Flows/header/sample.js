export const LocalNavMenu = [
  {
    id: 10,
    title: "Title",
    subTitle: "Some title",
    link: "",
    isMega: false,
    menuItems: [
      {
        id: 1,
        title: "About",
        link: "/about",
        group: "",
      },
      {
        id: 2,
        title: "Menu item",
        link: "/some-url",
      },
    ],
  },

  {
    id: 12,
    title: "Events",
    link: "/events",
    isMega: false,
    menuItems: [],
  },
];

const userNavComponent = ({ data }) => {
  const navbarNewData = [
    {
      id: 0,
      title: "Title",
      subTitle: "Subtitle",
      link: "",
      isMega: false,
      menuItems: parseData(fetchFromAPI(), ""),
    },
    {
      id: 1,
      title: "Title",
      subTitle: "Subtitle",
      link: "",
      isMega: false,
      menuItems: parseData(fetchFromAnotherAPI()),
    },

    ...LocalNavMenu,
  ];

  return <Header data={navbarNewData} />;
};

const Header = ({ data: [] }) => {
  Return(<>{/* ...component logic */}</>);
};
