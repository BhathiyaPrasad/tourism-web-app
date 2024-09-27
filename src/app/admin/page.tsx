import React from 'react';
import AdminOrderPage from '../../components/admin/orders';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptionsFile';
import { redirect } from 'next/navigation';

export default async function OrdersPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // If no session, redirect to login
    redirect('/auth/login');
  }

  return (
    <div>
  
      <AdminOrderPage />
    </div>
  );
}
