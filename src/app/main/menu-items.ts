interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

const MENUITEMS = [
  { link: "home", icon: "home", menu: "Dashboard" },
  { link: 'haggle', icon: "message-circle", menu: 'Haggle Bot' },
  { link: 'linear', icon: "bar-chart-2", menu: 'Linear Regrassion' },
]

export const MenuItems: sidebarMenu[] = MENUITEMS;
