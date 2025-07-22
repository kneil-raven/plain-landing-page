import { classNames } from '../../../utils/classNames';

const GradientButton = ({
    children,
    onClick,
    className = '',
    ...props
}) => (
    <button
        className={classNames(
            'flex items-center space-x-2 px-4 py-2',
            'bg-gradient-to-r from-blue-500 to-purple-600 text-white',
            'rounded-lg hover:from-blue-600 hover:to-purple-700',
            'transition-all duration-300 transform hover:scale-105',
            'shadow-lg shadow-blue-500/25 font-medium',
            className
        )}
        onClick={onClick}
        {...props}
    >
        {children}
    </button>
)

export default GradientButton;
