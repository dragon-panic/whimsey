'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { defaultLocale } from '../i18n/config';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('whimsey-locale') || defaultLocale;
    router.replace(`/${saved}`);
  }, [router]);

  return null;
}
