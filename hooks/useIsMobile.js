import { useState, useEffect } from 'react';


export function useIsMobile(query) {
  const [matches, setMatches] = useState(false);

  const querySize = query ? `(max-width: ${query}px)` : `(max-width: 767px)`

  useEffect(() => {
    const media = window.matchMedia(querySize);
    if (matches !== media.matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, querySize]);

  return matches;
}