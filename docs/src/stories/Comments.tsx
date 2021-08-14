import React from 'react'
import './page.css'
import { Comments as CommentsComponents } from '../../../core/src'
interface PageProps {
  user?: {}
  onLogin: () => void
  onLogout: () => void
  onCreateAccount: () => void
}

export const Comments = ({
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
    <article>
      {/* <Header
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      /> */}

      <section>
        <CommentsComponents data={data} />
      </section>
    </article>
  )
}
