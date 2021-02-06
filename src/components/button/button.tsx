import React from 'react'

import './styles.css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<Props> = ({ children }: Props) => {
  return (
    <button className="primary-btn">
      {children}
    </button>
  )
}

export default Button
