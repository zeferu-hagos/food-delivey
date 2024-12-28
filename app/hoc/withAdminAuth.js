"use client"

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAdminAuth = (Component) => {
  return function ProtectedRoute(props) {
    const { isAuthenticated } = useSelector((state) => state.adminAuth);
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/auth/login'); // Redirect to login page if not authenticated  dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      }
    }, [isAuthenticated]);

    return isAuthenticated ? <Component {...props} /> : null;
  };
};

export default withAdminAuth;
