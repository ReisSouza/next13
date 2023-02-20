import React, { ReactNode } from 'react'
type ILayoutAuth = {
  children: ReactNode
}
const layout: React.FC<ILayoutAuth> = ({ children }) => {
  return (
    <div>
      <h1>Layout Auth</h1>
      {children}
    </div>
  )
}

export default layout
