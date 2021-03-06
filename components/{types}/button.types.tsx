export type PropTypes = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  customStyles?: {
    textColor: string;
    backgroundColor: string;
    isFill: boolean;
    containerColor?: string;
  };
};
