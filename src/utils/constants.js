const navConfig = {
    brand: {
        name: 'NaviCore',
        logo: 'N'
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