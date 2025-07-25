import { Menu, X } from 'lucide-react';
import { classNames } from '../../../../utils/classNames';

const MobileMenuButton = ({ isOpen, onToggle}) => {
    return (
        <button
            onClick={onToggle}
            className='lg:hidden p-2 rounded-lg hover:bg-gray-100/60 transition-colors duration-200'
            aria-label='Toggle mobile menu'
        >
            <div className='relative w-6 h-6'>
                <Menu 
                    className={classNames(
                        'absolute inset-0 h-6 w-6 text-gray-700 transition-all duration-300',
                        isOpen && 'rotate-180 opacity-0'
                    )}
                />

                <X 
                    className={classNames (
                        'absolute inset-0 h-6 w-6 text-gray-700 transition-all duration-300',
                        isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                    )}
                />
            </div>
        </button>
    )
};

export default MobileMenuButton;