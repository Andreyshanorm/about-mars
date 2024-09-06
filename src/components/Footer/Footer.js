import React from 'react';
import { useState, useEffect } from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import * as styles from './Footer.module.css';

export default function Footer() {
  const [currentTime, changeCurrentTime] = useState(new Date().toLocaleTimeString());

  // setInterval(() => changeCurrentTime(new Date().toLocaleTimeString()), 1000)

  return (
    <footer className={styles.footer}>
      <div className={styles.icon_block}>
        <a href="#">
          <TelegramIcon />
        </a>
        <a href="https://github.com/Andreyshanorm" target='_blank'>
          <GitHubIcon />
        </a>
        <a href="#">
          <ConnectWithoutContactIcon />
        </a>
        <a href="#">
          <ThumbUpAltIcon />
        </a>
      </div>
      <p className={styles.copy_block}>
        INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh
      </p>
    </footer>
  );
}
