'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // This effect runs when the page path changes
    const hash = window.location.hash;
    
    if (hash) {
      const id = hash.substring(1); // remove the '#'
      const element = document.getElementById(id);
      
      if (element) {
        // We use a small timeout to ensure the element is rendered
        // before we try to scroll to it.
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname]); // Re-run this logic every time the page changes

  return null; // This component renders no visible HTML
}
