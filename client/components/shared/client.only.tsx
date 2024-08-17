import { PropsWithChildren, useEffect, useState } from 'react';

export function ClientOnly({ children }: PropsWithChildren) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? children : null;
}
