interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

const MENUITEMS = [
  { link: "home", icon: "home", menu: "Dashboard" },
  // { link: "/button", icon: "disc", menu: "Buttons" },
  { link: 'haggle', icon: "message-circle", menu: 'Haggle Bot' },
  { link: 'linear', icon: "bar-chart-2", menu: 'Linear Regrassion' },
  // {
  //   link: "/forms",
  //   icon: "layout",
  //   menu: "Forms",
  // },
  // {
  //   link: "/alerts",
  //   icon: "info",
  //   menu: "Alerts",
  // },
  // {
  //   link: "/grid-list",
  //   icon: "file-text",
  //   menu: "Grid List",
  // },
  // {
  //   link: "/menu",
  //   icon: "menu",
  //   menu: "Menus",
  // },
  // {
  //   link: "/table",
  //   icon: "grid",
  //   menu: "Tables",
  // },
  // {
  //   link: "/expansion",
  //   icon: "divide-circle",
  //   menu: "Expansion Panel",
  // },
  // {
  //   link: "/chips",
  //   icon: "award",
  //   menu: "Chips",
  // },
  // {
  //   link: "/tabs",
  //   icon: "list",
  //   menu: "Tabs",
  // },
  // {
  //   link: "/progress",
  //   icon: "bar-chart-2",
  //   menu: "Progress Bar",
  // },
  // {
  //   link: "/toolbar",
  //   icon: "voicemail",
  //   menu: "Toolbar",
  // },
  // {
  //   link: "/progress-snipper",
  //   icon: "loader",
  //   menu: "Progress Snipper",
  // },
  // {
  //   link: "/tooltip",
  //   icon: "bell",
  //   menu: "Tooltip",
  // },
  // {
  //   link: "/snackbar",
  //   icon: "slack",
  //   menu: "Snackbar",
  // },
  // {
  //   link: "/slider",
  //   icon: "sliders",
  //   menu: "Slider",
  // },
  // {
  //   link: "/slide-toggle",
  //   icon: "layers",
  //   menu: "Slide Toggle",
  // },
]

export const MenuItems: sidebarMenu[] = MENUITEMS;
