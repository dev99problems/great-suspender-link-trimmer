import { forwardRef } from '../../frm'

function TextInput({
  id,
  readonly = false,
  value,
  onChange,
  className,
  placeholder
}) {
  return (
    <input
      id={id}
      type="text"
      readOnly={readonly}
      value={value}
      onInput={onChange}
      placeholder={placeholder}
      className={className}
    />
  )
}

const TextInputWithRef = forwardRef((props, ref) => {
  return (
    <input ref={ref} {...(props || {})} />
  )
}) 

export { TextInput, TextInputWithRef }
