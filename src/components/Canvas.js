import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    background: '#ccc',
    overflow: 'auto',
    padding: 10,
  },
  canvas: {
    margin: 'auto',
    border: 'solid 1px #333',
    backgroundColor: '#fcfcfc',
    boxShadow: '0px 0px 20px #333',
  },
});

const Canvas = () => (
  <div className={css(styles.container)}>
    <svg
      className={css(styles.canvas)}
      height="400"
      width="600"
    >
      <rect x="70" y="50" height="70" width="120" fill="#dd8" stroke="black" />
      <rect x="270" y="80" height="70" width="120" fill="#dd8" stroke="black" />
      <rect x="200" y="230" height="70" width="120" fill="#dd8" stroke="black" />
    </svg>
  </div>
);

export default Canvas;