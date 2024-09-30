import React from 'react'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptionsFile';
import { redirect } from 'next/navigation';


const editPackage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    // If no session, redirect to login
    redirect('/auth/login');
  }

  return (
    <div>
      this is package edit 
    </div>
  )
}

export default editPackage