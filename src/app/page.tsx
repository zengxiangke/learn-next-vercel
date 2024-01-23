'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [env, setEnv] = useState({});
  useEffect(() => {
    fetch('/api/one')
      .then((res) => res.json())
      .then((data) => {
        setEnv(data);
      });
  }, []);
  return (
    <>
      <h1>hello next on vercel</h1>
      <pre>{JSON.stringify(env, null, 2)}</pre>
    </>
  );
}
