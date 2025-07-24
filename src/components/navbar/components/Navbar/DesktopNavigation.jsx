import NavItem from "./NavItem";

const DesktopNavigation = ({ items, activeDropdown, setActiveDropdown }) => (
  <div className="hidden lg:flex items-center space-x-1">
    {items.map((item) => (
      <NavItem
        key={item.name}
        item={item}
        isActive={activeDropdown === item.name}
        onToggle={setActiveDropdown}
      />
    ))}
  </div>
);

export default DesktopNavigation;
