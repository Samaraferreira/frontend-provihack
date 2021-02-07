import React from 'react'

import './styles.css'

type Props = React.SelectHTMLAttributes<HTMLSelectElement>

const Select: React.FC<Props> = ({ children }: Props) => {
  return (
    <select className="primary-select">
      {children}
    </select>
  )
}

export default Select
