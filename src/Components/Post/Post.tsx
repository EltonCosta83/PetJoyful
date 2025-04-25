// src/components/Post/Post.tsx
import React from 'react';
import Image from 'next/image';
import styles from './Post.module.css';

const Post = () => {
  return (
    <div className={`post p-3 rounded border ${styles.post}`}>
      <div className="d-flex align-items-center mb-3">
        <Image
          src="/assets/aatan-logo.jpg"
          className="rounded-circle me-3"
          alt="Profile"
          width={50}
          height={50}
        />
        <div>
          <h4 className="mb-0">AATAN - Sorocaba</h4>
          <p className="text-muted small mb-0">
            Se você é como nós, os identifica através do olhar. Venha conhecer alguns dos nossos peludinhos.
          </p>
        </div>
      </div>

      <Image
        src="/assets/post-aatan.jpg"
        className="img-fluid rounded mb-3"
        alt="Post"
        width={600}
        height={400}
      />

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="d-flex">
          <button className="btn btn-light me-3 rounded-circle p-2">
            <i className="bi bi-hand-thumbs-up"></i>
          </button>
          <button className="btn btn-light me-3 rounded-circle p-2">
            <i className="bi bi-chat"></i>
          </button>
          <button className="btn btn-light me-3 rounded-circle p-2">
            <i className="bi bi-share"></i>
          </button>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfTHmr82-FcZh-k4kaItDxWcmOOCyXI9bQortWvMkQRwrJIfA/viewform?pli=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-success px-4 rounded-pill">Adotar</button>
        </a>
      </div>
    </div>
  );
};

export default Post;
