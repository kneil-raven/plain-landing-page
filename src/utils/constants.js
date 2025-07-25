const NAV_CONFIG = {
    brand: {
        name: 'KneilRaven',
        logo: 'KR'
    },
    items: [
        { name: 'Home', href: '#', hasDropdown: false },
        { name: 'Products', href: '#', hasDropdown: true, 
            dropdownItems: ['Web Apps', 'Mobile Apps', 'Enterprise']
         },
         { name: 'Services', href: '#', hasDropdown: true, 
            dropdownItems: [ 'Development', 'Design', 'Support' ]
          },
          { name: 'About', href: '#', hasDropdown: false },
          { name: 'Contact', href: '#', hasDropdown: false ,}
    ]
};

export default NAV_CONFIG;