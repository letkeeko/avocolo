export type PropTypes = {
  label: string;
  selections: {
    [key: string]: any;
  };
  handleDropdownClick: (value: string) => void;
  handleChange: (value: object) => void;
  activeDropdown: string[];
  variants: any;
};
