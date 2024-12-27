import '@styles/app.scss';

import type { PropsWithChildren } from 'react';

const RootLayout = (properties: PropsWithChildren) => {
  const { children } = properties;

  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};

export { metadata, viewport } from './metadata';

export default RootLayout;
