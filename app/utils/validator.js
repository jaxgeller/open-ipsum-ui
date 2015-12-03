export function notBlank(...props) {
  return props.every(p => p.trim().length > 0);
}

export function betweenLength(min, max, ...props) {
  return props.every(p => p.trim().length >= min && p.trim().length <= max);
}

