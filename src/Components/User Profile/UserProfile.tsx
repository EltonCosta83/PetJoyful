// src/components/UserProfile/UserProfile.tsx
import React from 'react';
import Image from 'next/image';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <div className={`profile-header d-flex align-items-center ${styles.profileHeader}`}>
      <Image src="/assets/aatan-logo.jpg" alt="Logo AATAN" width={80} height={80} />
      <div className="profile-info ms-3">
        <div>
          <h3>
            AATAN - Sorocaba{' '}
            <i className="bi bi-check-circle-fill" style={{ color: 'green' }}></i>
          </h3>
          <div className="stats">
            <div>5 mil - seguidores</div>
            <div>705 - seguindo</div>
          </div>
          <div className="star-rating">★★★★☆</div>
        </div>
        <div className="mt-2">
          <a href="#sobre">
            <button className="btn btn-outline-secondary btn-sm me-2">Sobre</button>
          </a>
          <button className="btn btn-outline-secondary btn-sm me-2">Álbuns</button>
          <a
            href="https://www.aatansorocaba.com.br/fale-conosco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-outline-secondary btn-sm">Contato</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
