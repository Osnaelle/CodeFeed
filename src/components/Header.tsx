import styles from './Header.module.css';

import igniteLogo from '../assets/igniteLogo.svg';
import { Code } from 'phosphor-react';

export function Header() {
  return (
    <header className={styles.header}>
      <Code size={32} />
  
  
    </header>
  );
}