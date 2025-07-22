import navConfig from '../../../utils/constants'

const Brand = () => {
    const brand = navConfig.brand;

    return (
        <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 b rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>
                    {brand.logo}
                </span>
            </div>
            <span>
                {brand.name}
            </span>
        </div>
    )
}

export default Brand;