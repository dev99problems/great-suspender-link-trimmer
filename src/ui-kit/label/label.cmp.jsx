function Label({
  forId,
  className,
  onClick,
  children,
}) {
  return (
    <label for={forId} onClick={onClick} className={className}>{children}</label>
  )
}

export { Label }
