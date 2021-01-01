// Don't forget to import 'react'
import React from 'react';

// Export Props type/interface for better code suggestion on test file
export interface ComponentToTestProps {
  id?: string;
}

const ComponentToTest: React.FC<ComponentToTestProps> = ({ id }) => {
  return (
    <div id={id}>
      This is test component
    </div>
  );
};

export default ComponentToTest;
