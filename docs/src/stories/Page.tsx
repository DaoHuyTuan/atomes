import React from 'react'

import { Header } from './Header'
import './page.css'
import { Comments } from '../../../core/src'
interface PageProps {
  user?: {}
  onLogin: () => void
  onLogout: () => void
  onCreateAccount: () => void
}

export const Page = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount
}: PageProps) => {
  const data: Array<any> = [
    {
      contents: 'hello this is first comment'
    },
    {
      contents: 'hello this is second comment'
    }
  ]
  return (
    <>
      {/* <Header
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      /> */}
      
    </>
  )
}
