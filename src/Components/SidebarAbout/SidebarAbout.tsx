// src/components/SidebarAbout/SidebarAbout.tsx
import React from 'react';
import styles from './SidebarAbout.module.css';

const SidebarAbout = () => {
  return (
    <div className={`sidebar ${styles.sidebar}`}>
      <h3>Sobre</h3>
      <p>
        A AATAN é uma associação fundada com o objetivo de oferecer abrigo, proteção e uma vida digna a animais em situação de abandono ou vítimas de maus tratos.
      </p>
      <p>
        O abrigo conta atualmente com cerca de 300 animais, sendo aproximadamente 200 cães e 100 gatos. Muitos deles necessitam de tratamento e cuidados específicos, outros, são portadores de moléstias permanentes. Por fim, de todo esse grupo poucos despertam interesse em adotantes...
      </p>
    </div>
  );
};

export default SidebarAbout;
