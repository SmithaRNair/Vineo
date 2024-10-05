// app/layout.tsx
'use client';
import '/src/styles/global.css'; // Assuming you have global styles

import { Provider } from 'react-redux';
import store from 'src/store'; // Adjust the path to your store configuration

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
