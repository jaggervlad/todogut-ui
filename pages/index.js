import React from 'react';
import SignIn from '@/components/auth/SignIn';
import { ME } from '@/graphql/auth';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

export default function Home() {
  const { data, loading, error } = useQuery(ME);
  const router = useRouter();
  const viewer = data?.obtenerUsuario || !loading || !error;

  React.useEffect(() => {
    if (viewer) {
      router.push('/profile');
    }
  }, [viewer]);

  return <SignIn />;
}
