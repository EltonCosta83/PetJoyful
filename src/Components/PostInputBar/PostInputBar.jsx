// src/components/PostInputBar/PostInputBar.tsx
import React from 'react';
import styles from './PostInputBar.module.css';

const PostInputBar = () => {
  return (
    <div className={`post-input-bar mb-4 d-flex align-items-center position-relative ${styles.postInput}`}>
      <input
        type="text"
        className="form-control rounded-pill pe-5 flex-grow-1"
        placeholder="Faça uma publicação"
      />
      <div className={`d-flex align-items-center position-absolute top-50 end-0 translate-middle-y me-3 ${styles.icons}`}>
        <i className="bi bi-image fs-4 me-3"></i>
        <i className="bi bi-plus-circle fs-4"></i>
      </div>
    </div>
  );
};

export default PostInputBar;
