const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
}
const breakpointKeys = Object.keys(BREAKPOINTS)
function customMediaQuery(minMax, width) {
  return `@media (${minMax}-width: ${width}px)`
}
export const media = breakpointKeys.reduce((acc, label) => {
  return { ...acc, [label]: customMediaQuery('min', BREAKPOINTS[label]) }
}, {})
