import { classNames } from "../../../../utils/classNames";
import { Search, Bell, Settings, User } from 'lucide-react';
import IconButton from "../../../ui/buttons/IconButton.test";
import GradientButton from "../../../ui/buttons/GradientButton.test";

const MobileNavigation = ({ isOpen, items, onClose }) => {
  return (
    <div
      className={classNames(
        'lg:hidden overflow-hidden transition-all duration-500 ease-out',
        isOpen && 'max-h-screen opacity-100',
        !isOpen && 'max-h-0 opacity-0'
      )}
    >
      <div className="px-4 py-4 bg-white/95 backdrop-blur-md border-t border-gray-200/20">
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.name}>
              <a
                href={item.href}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100/60 transition-all duration-200 font-medium"
                onClick={onClose}
              >
                {item.name}
              </a>
              {item.hasDropdown && (
                <div className="pl-4 space-y-1">
                  {item.dropdownItems.map((dropItem) => (
                    <a
                      key={dropItem}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50/60 rounded-lg transition-colors duration-150"
                      onClick={onClose}
                    >
                      {dropItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200/30 flex items-center justify-between">
          <div className="flex space-x-3">
            <IconButton icon={Search} ariaLabel="Search" />
            <IconButton icon={Bell} ariaLabel="Notifications" badge />
            <IconButton icon={Settings} ariaLabel="Settings" />
          </div>
          <GradientButton>
            <User className="h-4 w-4" />
            <span>Sign In</span>
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
