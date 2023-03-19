import React from 'react';
import styles from './styles.module.scss';

const Button: React.FC<{ title: string }> = props => <h2 className={styles.button}>{props.title}</h2>;

export default Button;
