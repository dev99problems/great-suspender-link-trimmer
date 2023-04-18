import clsx from 'clsx'

function applyBasicStyle({ applyBase, baseStyle, className }) {
  const styles = applyBase ? baseStyle : ''

  const classNames = clsx(styles, className)
  return classNames
}

export { applyBasicStyle }
