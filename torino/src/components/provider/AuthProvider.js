"use client"

import { useGetUserData } from '@/core/services/query'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function AuthProvider({ children }) {
    const router = useRouter()
    const { isPending, data } = useGetUserData()
    
    useEffect(() => {
        if(!isPending && !data?.data) router.push("/")
    }, [isPending])
    if (isPending) return <h1>Loading...</h1>
    
  return children
}

export default AuthProvider