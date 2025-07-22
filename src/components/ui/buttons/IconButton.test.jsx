import { classNames } from '../../../utils/classNames';

const IconButton = ({
  icon: Icon,
  onClick,
  className = "",
  ariaLabel,
  badge = false,
  ...props
}) => (
  <button
    className={classNames(
      "p-2 rounded-lg hover:bg-gray-100/60 transition-colors duration-200 group relative",
      className
    )}
    onClick={onClick}
    aria-label={ariaLabel}
    {...props}
  >
    {Icon && (
      <Icon className='h-5 w-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-200' />
    )}
    {badge && ( 
        <div className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full-border' />
    )}
  </button>
);

export default IconButton;