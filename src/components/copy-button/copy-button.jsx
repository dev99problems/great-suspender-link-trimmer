import clsx from 'clsx'
import { useCallback, useState } from '../../frm'
import { CopyIcon } from '../icons/copy.icon'

import s from './copy-button.module.css'

function CopiedBadge() {
  return (
    <span className={clsx(s['copied-badge'])}>Copied ✅</span>
  )
}

function CopyButton({ className, value, ...rest }) {
  const [isCopied, setIsCopied] = useState(false)
  const classNames = clsx('pointer', s['copy-button'], className)
  const onClick = useCallback(() => {
    console.log(`value  = ${value}`)
    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 2500)
    }).catch(() => {
      console.warn('Copying did not succeed')
    })
  })

  return (
    <span className="flex align-center">
      {isCopied
        ? <CopiedBadge />
        : <CopyIcon className={classNames} onClick={onClick} {...rest} />
      }
    </span>
  )
}

export { CopyButton }
