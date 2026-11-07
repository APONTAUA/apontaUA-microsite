import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Diagram.module.css';

export default function Diagram({ src, alt, caption }) {
  const imageUrl = useBaseUrl(src);
  return (
    <figure className={styles.figure}>
      <a className={styles.zoomLink} href={imageUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${alt}`}>
        <img className={styles.image} src={imageUrl} alt={alt} loading="lazy" />
      </a>
      <figcaption>{caption} <span className={styles.hint}>Select the image to open it at full size.</span></figcaption>
    </figure>
  );
}
