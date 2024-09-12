'use client';

import Styles from './button.module.css';
import React from 'react';
import { useRouter } from 'next/navigation';

interface ButtonProps {
  name?: string;
  url: string;
}

const Button: React.FC<ButtonProps> = ({ name, url }) => {
  const router = useRouter();

  // No destructuring needed here, just use url directly
  const handleClick = (url: string) => {
    router.push(url);
  };

  return (
    <div className={Styles.container}>
      <button className={Styles.buttonView} onClick={() => handleClick(url)}>
        {name}
      </button>
    </div>
  );
};

export default Button;
