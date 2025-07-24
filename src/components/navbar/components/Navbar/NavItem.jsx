// components/Navbar/NavItem.jsx
import { ChevronDown } from 'lucide-react';
import { classNames } from '../../../../utils/classNames';
import DropdownMenu from './DropdownMenu';

const NavItem = ({ item, isActive, onToggle }) => {
  return (
    <div>
        <button
            className='flex items-center px-4 py-2 rounded-lg'
            onClick={() => onToggle(item.name)}
        >
            {item.name}
            {item.hasDropdown && (
                <ChevronDown 
                    className={classNames( 
                        'ml-1 h-4 w-4',
                        isActive && 'rotate-180'
                    )}
                />
            )}
        </button>

        <DropdownMenu 
            isOpen={isActive}
            items={item.dropdownIems}
            onItemClick={() => onToggle(null)}
        />

    </div>
  )
};

export default NavItem;
