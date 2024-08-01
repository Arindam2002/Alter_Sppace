'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out',
      duration: 800,
      once: true,
      offset: 100,
      delay: 100,
    });
  }, []);

  return null;
};
