/**
 * Append class attribute strings to a root class attribute string.
 * @param root Root class string
 * @param suffix Class string or array of class strings to be appended
 * @returns CSS class string
 */
const appendClassStr = (root = '', suffix?: string | string[]) => {
  let result = root

  if (Array.isArray(suffix)) {
    const s = suffix.join(' ')

    if (!s) return result

    if (result) {
      result += ' '
    }
    result += s
    return result
  }

  if (suffix) {
    if (result) {
      result += ' '
    }
    result += suffix
    return result
  }

  return result
}

/**
 * Generate a translate string for the transform attribute.
 * @param x x parameter for the translate string
 * @param y y parameter for the translate string
 * @returns Translate string for the transform attribute
 */
const genTranslateStr = (x?: number, y?: number) => {
  if (x || y) {
    const coordX = x || 0
    const coordY = y || 0
    return `translate(${coordX},${coordY})`
  }
  return undefined
}

export { appendClassStr, genTranslateStr }
