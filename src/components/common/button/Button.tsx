'use client'

import Styles from './button.module.css';
import React from 'react';
import { useRouter } from 'next/navigation';

const Button = ({name}) => {
const router  =  useRouter();
const handleClick = () => {
    router.push('/packages');
}

return (
    <div className={Styles.container}>
    <button className={Styles.buttonView} onClick={handleClick}>{name}</button>
    </div>

)

}

export default Button;