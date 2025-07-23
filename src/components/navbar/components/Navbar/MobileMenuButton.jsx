import { Menu, X } from 'lucide-react';
import { classNames } from '../../../../utils/classNames';

cosnt MobileMenuButton = ({ isOpen, onToggle}) => {
    return (
        <button
            onClick={onToggle}
            className='lg:hidden p-2 rounded-lg'
            aria-label='Toggle mobile menu'
        >
            <div>
                <Menu 
                    className={classNames(
                        'absolute inset-0 h-6 w-6 text-gray-700',
                        isOpen && 'rotate-180 opacity-0'
                    )}
                />

                <X 
                    className={classNames (
                        'absolute inset-0 h-6 w-6 text-gray-700',
                        isOpen ? 'rotate-0 opacity-180' : '-rotate-180 opacity-0'
                    )}
                />
            </div>
        </button>
    )
};

export default MobileMenuButton;