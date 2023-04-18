import clsx from 'clsx'
import { CopyButton } from '../copy-button'

import s from './code-card.module.css'

function CodeCard({ className, children }) {
  const classNames = clsx(s['code-window'], className)

  return (
    <div className={classNames}>
      <code className={s.code}>
        {children}
      </code>
      <span className={s['copy-button-wrapper']}>
        <CopyButton className={s['copy-button']} value={children} />
      </span>
    </div>
  )
}

export { CodeCard }
