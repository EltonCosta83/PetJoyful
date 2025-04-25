import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={`py-2 px-3 d-flex justify-content-between align-items-left bg-dark text-white ${styles.header}`}>
      <a href="#" className="fw-bold fs-4">
        <Image src="/assets/logo.png" alt="Logo PetJoyful" width={100} height={40} />
      </a>

      <div className="w-50">
        <input type="text" className="form-control" placeholder="Busca" />
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <a href="/home/home.html" className="text-white text-center me-3">
          <i className="bi bi-house-fill fs-3"></i>
          <span className="d-block small">Início</span>
        </a>
        <a href="/perfil/perfil.html" className="text-white mx-3">
          <i className="bi bi-person-fill fs-3"></i>
        </a>
        <a href="#" className="text-white mx-3">
          <i className="bi bi-chat-fill fs-3"></i>
        </a>
        <a href="#" className="text-white mx-3">
          <i className="bi bi-bell-fill fs-3"></i>
        </a>
        <a href="#" className="text-white mx-3">
          <i className="bi bi-list fs-3"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
