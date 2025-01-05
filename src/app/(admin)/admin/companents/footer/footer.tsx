'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';

const Footer: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const userCookie = getCookie('user');
    if (!userCookie) {
      router.push('/admin/login');
    }
  }, [router]);

  return (
    <div>a</div>
  );
};

export default Footer;
