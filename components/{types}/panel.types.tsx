export type PropTypes = {
  selections: object;
  handleChange: (value: object) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  handleReset: () => void;
  setIsModalShareOpen: (value: boolean) => void;
  setIsModalColorsOpen: (value: boolean) => void;
};
