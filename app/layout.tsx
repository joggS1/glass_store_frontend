/* eslint-disable react/function-component-definition */
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import './globals.css';

import '@mantine/core/styles.css';

export const metadata: Metadata = {
  description: 'uwu',
  title: 'Glasses'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
