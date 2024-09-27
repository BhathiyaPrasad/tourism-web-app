import React from 'react';
import AdminOrderPage from '../../components/admin/orders';

import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function OrdersPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // If no session, redirect to login
    redirect('/auth/login');
  }

  return (
    <div>
      <h1>Admin Orders Page</h1>
      <AdminOrderPage />
    </div>
  );
}
