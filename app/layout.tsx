"use client";
import React from "react";
import Header from "./components/Header";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './emotionCache';
import './globals.css';

const clientSideEmotionCache = createEmotionCache();


export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
