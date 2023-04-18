import { 
  TextInput as UnstyledTextInput,
  TextInputWithRef as UnsyledTextInputWithRef 
} from '../../../ui-kit/text-input'
import { ClearIcon } from '../../icons'
import { useRef } from '../../../frm'
import { applyBasicStyle } from '../styling-utils'

import s from './text-input.module.css'

function TextInput({ applyBase = true, className, ...rest }) {
  const classNames = applyBasicStyle({ applyBase, baseStyle: s.input, className })
  return (
    <UnstyledTextInput className={classNames} {...rest} />
  )
}

function TextInputClearable({ applyBase = true, className, onChange, value, ...rest }) {
  const inputRef = useRef(null)
  const classNames = applyBasicStyle({
    applyBase,
    baseStyle: `w-100 ${s.input} ${s['input-clearable']}`,
    className
  })

  const clearInput = (e) => {
    onChange(e, '')
    inputRef.current.focus()
  }

  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      clearInput(e)
    }
  }

  return (
    <div className="relative w-100">
      <UnsyledTextInputWithRef ref={inputRef} className={classNames} onChange={onChange} value={value} {...rest} />
      {!!value?.length &&
        <ClearIcon className={s['clear-icon']} onClick={clearInput} onKeyPress={onKeyPress} tabindex="0" />
      }
    </div>
  )
}

export { TextInput, TextInputClearable }
