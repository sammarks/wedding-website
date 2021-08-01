import styled from '@emotion/styled'

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

export const Button = styled.button`
  border: none;
  display: block;
  padding: var(--size-s) var(--size-s);
  color: var(--brown-6);
  background: var(--brown-2);
  margin: 0;
  line-height: 1;
  border-radius: var(--border-radius-base);
  transition: color 0.25s linear, background 0.25s linear, opacity 0.25s linear;
  text-decoration: none;
  cursor: pointer;
  opacity: 1;
  outline: none;
  &:not([disabled]) {
    &:hover, &:focus {
      text-decoration: underline;
    }
    &.active {
      background: var(--brown-6);
      color: var(--brown-0);
    }
  }
  &[disabled] {
    opacity: 0.5;
  }
`
export const Input = styled.input`
  background: var(--brown-2);
  color: var(--brown-5);
  padding: var(--size-xs) var(--size-s);
  border-radius: var(--border-radius-base);
  transition: box-shadow 0.25s linear, color 0.25s linear, opacity 0.25s linear;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: 0 0 0 2px transparent;
  &:hover, &:focus, &:active {
    box-shadow: 0 0 0 2px var(--brown-3);
    color: var(--brown-6);
  }
  &[disabled] {
    opacity: 0.5;
  }
`
