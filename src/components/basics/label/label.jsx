import { Label as UnstyledLabel } from '../../../ui-kit/label'
import { applyBasicStyle } from '../styling-utils'

import s from './label.module.css'

function Label({ applyBase = true, className, ...rest }) {
  const classNames = applyBasicStyle({ applyBase, baseStyle: s.label, className  })
  return (
    <UnstyledLabel className={classNames} {...rest} />
  )
}

export { Label }
