import block from 'bem-cn'
import React from 'react'
import './MainMenu.css'

interface Props {
}

const b = block('main-menu')

export const MainMenu: React.FC<Props> = () => {
  return (

<nav className={b()}>
<h3 className={b('h3')}>Main Menu</h3>
    <ul className={b('ul')}>
    <li className={b('li')}><a className={b('link')} href="/catalog">Catalog</a></li>
    <li className={b('li')}><a className={b('link')} href="/ref">Guide</a></li>
     </ul>
</nav>
  )
}
