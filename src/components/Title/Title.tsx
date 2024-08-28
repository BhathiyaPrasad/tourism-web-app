import React from "react";
import { Heading } from '@chakra-ui/react'
import styles from './title.module.css'

const Title = ({title}) => {

return(

    <Heading className={styles.title}>{title}</Heading>
)



}


export default Title;