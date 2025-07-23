import { Search, Bell, Settings, User } from 'lucide-react';
import IconButton from '../../../ui/buttons/IconButton.test';
import GradientButton from '../../../ui/buttons/GradientButton.test';


const ActionButtons = () => {
    <div className='hidden lg:flex items-center space-x-3'>
        <IconButton icon={Search} ariaLabel='Search' /> 
        <IconButton icon={Bell} ariaLabel='Notifications' badge /> 
        <IconButton icon={Settings} ariaLabel='Settings' /> 
        <div className='w-px h-6 bg-gray-300' />
        <GradientButton>
            <User className='h-4 w-4' />
            <span>Sign In</span>
        </GradientButton>
    </div>

}

export default ActionButtons;