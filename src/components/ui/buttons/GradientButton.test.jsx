import { classNames } from '../../../utils/classNames';

const GradientButton = ({
    children,
    onClick,
    className = '',
    ...props
}) => (
    <button
        className={classNames(
            'flex items-center space-x-2 px-4 py-2 font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md hover:brightness-110',
            className
        )}
        onClick={onClick}
        {...props}
    >
        {children}
    </button>
)

export default GradientButton;