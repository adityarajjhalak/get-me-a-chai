"use client"
import React, { Component } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '../../components/form'

const Dashboard = () => {
   const { data: session } = useSession()
       if(!session) {
     const router = useRouter()
     router.push('/login')
       }
  return (
    <Form/>
  )
}

export default Dashboard
