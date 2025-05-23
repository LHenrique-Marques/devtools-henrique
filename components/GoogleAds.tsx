'use client';

import { useEffect } from 'react';
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function GoogleAds() {
    useEffect(() => {
    try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
    } catch (e) {
        console.error(e);
    }
    }, []);


  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-1484005881693287"
      data-ad-slot="1365574016"  // <-- substitui pelo ID do bloco criado no AdSense
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
