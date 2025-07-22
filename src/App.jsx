import React from 'react';
import IconButton from './components/ui/buttons/IconButton.test';
import { Bell } from 'lucide-react';

import './App.css'

function App() {
  const handleClick = () => {
    alert('Icon button clicked!');
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <IconButton 
        icon={Bell}
        onClick={handleClick}
        ariaLabel="Notifications"
        badge={true}
      />
    </div>
  )
}

export default App
