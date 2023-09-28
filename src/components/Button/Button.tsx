import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  clickHandler: () => void;
}

function Button({ children, clickHandler }: ButtonProps) {
  return (
    <button type="button" onClick={clickHandler} className={styles.btn}>
      {children}
    </button>
  );
}

export default Button;
