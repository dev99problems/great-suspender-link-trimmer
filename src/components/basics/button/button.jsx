import { Button as UnstyledButton } from '../../../ui-kit/button'
import { applyBasicStyle } from '../styling-utils'

import s from './button.module.css'

function Button({ applyBase = true, className, ...rest }) {
  const classNames = applyBasicStyle({ applyBase, baseStyle: s.button, className  })
  return (
    <UnstyledButton className={classNames} {...rest} />
  )
}

export { Button }
