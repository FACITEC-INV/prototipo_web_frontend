const sizes = {
  exSmall: 'loading-xs',
  small: 'loading-sm',
  medium: 'loading-md',
  large: 'loading-lg',
  exLarge: 'loading-xl'
}

/**
 * Spinner para acciones asíncronas
 * Propiedades:
 * - size: Tamaño del spinner (small, medium, large, extraLarge)
 */
const Spinner = ({ size }) => {
  return (
    <span className={`loading loading-dots ${sizes[size] || 'loading-md'}`}></span>
  )
}

export default Spinner
