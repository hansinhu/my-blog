import React from 'react';
import styles from './index.module.scss'

function PageContainer({ children, style }: { children: any, style?: any }) {
  return (
    <div className={styles.page} style={style}>
      {
        children
      }
    </div>
  );
}

export default PageContainer;
