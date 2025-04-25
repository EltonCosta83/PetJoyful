// src/components/CommentList/CommentList.tsx
import React from 'react';
import Image from 'next/image';
import styles from './CommentList.module.css';

const comments = [
  { id: 1, name: 'Elisabeth', text: 'ótima ONG!', img: '/assets/imgPerfilM.png' },
  { id: 2, name: 'Roberto', text: 'Recomendo!', img: '/assets/imgPerfilH.png' },
  { id: 3, name: 'João', text: 'Excelente!', img: '/assets/imgPerfilH.png' },
];

const CommentList = () => {
  return (
    <div className={`comments-section ${styles.comments}`}>
      <h4>Comentários</h4>

      {comments.map(comment => (
        <div key={comment.id} className="d-flex align-items-center mb-3">
          <Image src={comment.img} alt={comment.name} width={40} height={40} />
          <span className="ms-2">
            <strong>{comment.name}</strong> - {comment.text}
          </span>
        </div>
      ))}

      <button className="btn btn-light w-100 mt-3">Ver mais +</button>
    </div>
  );
};

export default CommentList;
