import { MenuItem } from "../../models/data";

interface SidebarProps {
  visible: boolean;
  menuItems?: MenuItem[];
  onHide?: () => void;
};

const defaultSidebarProps:SidebarProps = {
  visible: false,
  menuItems: [],
  onHide: () => null,
};

export default SidebarProps;
export { defaultSidebarProps };