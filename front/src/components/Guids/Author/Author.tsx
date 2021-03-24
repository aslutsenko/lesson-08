import block from 'bem-cn'
import React from 'react'
import './Author.css'

interface Props {
}

const b = block('author')

export const Author: React.FC<Props> = () => {
  return<div className={b()}>
  Authors
</div>

}
