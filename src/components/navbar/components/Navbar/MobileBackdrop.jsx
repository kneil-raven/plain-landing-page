import { classNames } from "../../../../utils/classNames";

const MobileBackdrop = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className={classNames(
        "fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
      )}
      onClick={onClose}
    />
  );
};

export default MobileBackdrop;
