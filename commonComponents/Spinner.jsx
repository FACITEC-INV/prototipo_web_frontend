const sizes = {
  xsm: 'loading-xs',
  sm: 'loading-sm',
  md: 'loading-md',
  lg: 'loading-lg',
  xl: 'loading-xl'
}
const tipes = {
  spinner: 'loading-spinner',
  dots: 'loading-dots',
  ring: 'loading-ring',
  ball: 'loading-ball',
  bars: 'loading-bars',
  infinity: 'loading-infinity',
}

/**
 * Spinner para acciones asíncronas
 * Propiedades:
 * - size: Tamaño del spinner (xsm, sm, md, lg, xl)
 * - tipe: Tipo del spinner (spinner, dots, ring, ball, bars, infinity)
 */
const Spinner = ({ size, tipe }) => {
  return (
    <span className={`loading ${tipes[tipe] || 'loading-dots'} ${sizes[size] || 'loading-md'}`}></span>
  )
}

export default Spinner
