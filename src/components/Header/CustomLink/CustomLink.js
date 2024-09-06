import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import * as styles from './CustomLink.module.css'


export default function CustomLink({ children, to, ...props }) {
  const match = useMatch(to);

  return (
    <Link to={to} className={match ? styles.active : ''}>
        {children}
    </Link>

  );
}
