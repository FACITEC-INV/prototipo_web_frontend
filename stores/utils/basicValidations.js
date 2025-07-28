export function isRequired(value) {
  if (typeof value === 'string') return value.trim() !== ''
  return value !== null && value !== undefined
}

export function isValidNumber(value) {
  return !isNaN(Number(value))
}

export function isIntegerNumber(value) {
  return Number.isInteger(Number(value))
}

export function hasMinLength(value, min) {
  return typeof value === 'string' && value.length >= min
}

export function hasMaxLength(value, max) {
  return typeof value === 'string' && value.length <= max
}

export function isNumberInRange(value, min, max) {
  const num = Number(value)
  return !isNaN(num) && num >= min && num <= max
}

export function isValidEmail(value) {
  if (typeof value !== 'string') return false
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(value)
}
