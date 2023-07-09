import { useState, useEffect } from 'react';

import styles from '@/styles/Home.module.css';

export default function Home() {
  const [currentDateTime, setCurrentDateTime] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const dateTime = new Date().toLocaleString();
      setCurrentDateTime(dateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <main>
        <div
          className={styles.center}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <p style={{ fontSize: '2rem', width: '100%' }}>
            <code>Whatever this is, it works!</code>
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridGap: '10px',
            fontSize: '1.5rem',
          }}
        >
          <div
            style={{
              padding: '20px',
            }}
          >
            <h2>🍲</h2>
          </div>
          <div
            style={{
              padding: '20px',
            }}
          >
            <h2>🧑‍💻</h2>
          </div>
          <div
            style={{
              padding: '20px',
            }}
          >
            <h2>🏦</h2>
          </div>
          <div
            style={{
              padding: '20px',
            }}
          >
            <h2>♞</h2>
          </div>
        </div>

        <div
          style={{
            color: '#cacaca',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ margin: '50px' }}></div>
          <code>Yeabsera</code>
          <div style={{ margin: '12px' }}></div>
          <code>domain_name.tld {currentDateTime}</code>
        </div>
      </main>
    </div>
  );
}
