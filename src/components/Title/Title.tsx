import React from "react";
import { Heading } from '@chakra-ui/react'
import styles from './title.module.css'

interface TitleProps {
    title?: string;
}

const Title: React.FC<TitleProps> = ({title}) => {

return(

    <Heading className={styles.title}>{title}</Heading>
)



}


export default Title;