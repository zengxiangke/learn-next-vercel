'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('/api/one');
  });
  return <h1>hello next on vercel</h1>;
}
