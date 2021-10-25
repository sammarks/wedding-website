import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Separator } from './Separator'
import { media } from './styled'

export function Header() {
  return (
    <HeaderContainer>
      <h1 style={{ lineHeight: 1.2 }}>Merrick &amp; Sam</h1>
      <ToGo>
        June 18, 2022 &middot; Lexington, Kentucky
      </ToGo>
      <Separator />
      <NavigationContainer>
        <NavigationItem to={'/'} activeClassName={'active'}>Home</NavigationItem>
        <NavigationItem to={'/story'} activeClassName={'active'}>Story</NavigationItem>
        <NavigationItem to={'/photos'} activeClassName={'active'}>Photos</NavigationItem>
      </NavigationContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: var(--size-xl);
  h1 { margin-bottom: 0; }
`
const ToGo = styled.div`
  margin-top: var(--size-xs);
  font-size: var(--font-size-default);
  line-height: 1;
`
const NavigationContainer = styled.div`
  margin-top: var(--size-m);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  > * {
    margin: calc(var(--size-xs) / 2) calc(var(--size-m) / 2);
    ${media.lg} {
      margin: 0 calc(var(--size-m) / 2);
    }
  }
`
const NavigationItem = styled(Link)`
  padding: var(--size-xs);
  text-decoration: none;
  border-bottom: solid 2px transparent;
  color: var(--brown-5);
  transition: border-bottom-color 0.25s linear, color 0.25s linear;
  line-height: 1;
  &:hover, &.active {
    color: var(--brown-7);
  }
  &.active {
    border-bottom-color: var(--brown-6);
  }
`
const RSVPItem = styled(Link)`
  padding: var(--size-xs) var(--size-s);
  color: var(--brown-1);
  background: var(--brown-5);
  line-height: 1;
  border-radius: var(--border-radius-base);
  transition: color 0.25s linear, background 0.25s linear;
  text-decoration: none;
  &:hover, &.active {
    background: var(--brown-6);
    color: var(--brown-0);
  }
`
