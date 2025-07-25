// refactored Navbar that holds the Navbar logic
// includes layout, state, imports like Brand, DesktopNavigation, etc
import React, { useState } from "react";
import Brand from "./Brand";
import DesktopNavigation from "./DesktopNavigation";
import ActionButtons from "./ActionButtons";
import MobileMenuButton from "./MobileMenuButton";
import MobileNavigation from "./MobileNavigation";
import MobileBackdrop from "./MobileBackdrop";
import NAV_CONFIG  from "../../../../utils/constants";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (name) =>
    setActiveDropdown((prev) => (prev === name ? null : name));
  const closeDropdown = () => setActiveDropdown(null);
  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  const navbarClass = [
    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
    "bg-white/95 backdrop-blur-md",
  ].join(" ");

  return (
    <>
      <MobileBackdrop isOpen={mobileOpen} onClose={closeMobile} />

      <nav className={navbarClass}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Brand brand={NAV_CONFIG.brand} />
            <DesktopNavigation
              items={NAV_CONFIG.items}
              activeDropdown={activeDropdown}
              onDropdownToggle={toggleDropdown}
            />
            <ActionButtons />
            <MobileMenuButton isOpen={mobileOpen} onToggle={toggleMobile} />
          </div>
        </div>
        <MobileNavigation
          isOpen={mobileOpen}
          items={NAV_CONFIG.items}
          onClose={()  => {
            closeDropdown();
            closeMobile();
          }}
        />
      </nav>
    </>
  );
};

export default Navbar;
