const DropdownMenu = ({ isOpen, items, onItemClick }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200/20 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
      {items.map((item) => (
        <a
          key={item}
          href="#"
          className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50/60 transition-colors duration-150 font-medium"
          onClick={onItemClick}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default DropdownMenu;