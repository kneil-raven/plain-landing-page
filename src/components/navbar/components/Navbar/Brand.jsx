import navConfig from '../../../../utils/constants';

const Brand = () => {
    const brand = navConfig.brand;

    return (
        <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform hover:scale-120 transition-transform duration-300'>
                <span className='text-white font-bold text-sm'>
                    {brand.logo}
                </span>
            </div>
            <span className='font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent'>
                {brand.name}
            </span>
        </div>
    )
}

export default Brand;