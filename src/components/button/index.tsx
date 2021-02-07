import React from 'react'

import './styles.css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<Props> = ({ children, ...props }: Props) => {
  return (
    <button {...props} className={`primary-btn ${props.className}`}>
      {children}
    </button>
  )
}

export default Button
