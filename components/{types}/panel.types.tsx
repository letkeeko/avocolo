export type PropTypes = {
  selections: object;
  handleChange: (value: object) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  handleReset: () => void;
  setIsModalShareOpen: (value: boolean) => void;
  setIsModalSelectedColors: (value: boolean) => void;
};
