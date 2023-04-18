function Button({ type = 'button', className, onClick, children }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export { Button }
