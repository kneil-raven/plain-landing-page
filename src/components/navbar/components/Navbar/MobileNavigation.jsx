import { classNames } from "../../../../utils/classNames";
import { Search, Bell, Settings, User } from 'lucide-react';
import IconButton from "../../../ui/buttons/IconButton.test";
import GradientButton from "../../../ui/buttons/GradientButton.test";

const MobileNavigation = ({ isOpen, items, isClose }) => {
    return (
        <div
            className={classNames(
                'lg:hidden overflow-hidden transition-all duration-500 ease-our',
                isOpen && 'max-h-screen opacity-100',
                !isOpen && 'max-h-0 opacity-0'
            )}
        >
            <div className="px-4 py-4 ">

            </div>

        </div>
        
    )
}

export default MobileNavigation;