import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IndexLayout } from '../layouts'
import { Footer } from '../components/Footer'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { media } from '../components/styled'
import { NavArrowRight, NavArrowLeft } from 'iconoir-react'

const query = graphql`
  query PhotoGallery {
    allFile(
      filter: {relativeDirectory: {eq: "photo-gallery"}}
      sort: {fields: name, order: ASC}
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
        thumb: childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 200
          )
        }
      }
    }
  }
`

const FALLBACK_DELAY = 1000
export default function Photos() {
  const containerRef = React.useRef(null)
  const images = useStaticQuery(query).allFile.nodes
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const mainImage = getImage(images[selectedIndex])
  const didMount = React.useRef(false)
  React.useEffect(() => {
    if (containerRef.current && didMount.current) {
      setTimeout(() => {
        containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 500)
    }
  }, [selectedIndex])
  React.useEffect(() => {
    didMount.current = true
  }, [])
  return (
    <IndexLayout title={'Photos'}>
      <MainImageContainer ref={containerRef}>
        <SwitchTransition>
          <CSSTransition
            key={selectedIndex}
            addEndListener={(node, done) => {
              const interval = setTimeout(() => {
                done()
              }, FALLBACK_DELAY)
              node.addEventListener(
                'transitionend',
                () => {
                  clearTimeout(interval)
                  done()
                },
                false,
              )
            }}
            classNames={'fade'}
            appear
          >
            <GatsbyImage
              image={mainImage}
              style={{ objectFit: 'contain' }}
              imgStyle={{ objectFit: 'contain' }}
              alt={''}
              onClick={() => setSelectedIndex(s => s === images.length - 1 ? 0 : s + 1)}
            />
          </CSSTransition>
        </SwitchTransition>
        <ArrowContainer
          style={{ left: 20 }}
          onClick={e => {
            e.preventDefault()
            setSelectedIndex(s => s === 0 ? images.length - 1 : s - 1)
          }}
        >
          <NavArrowLeft />
        </ArrowContainer>
        <ArrowContainer
          style={{ right: 20 }}
          onClick={e => {
            e.preventDefault()
            setSelectedIndex(s => s === images.length - 1 ? 0 : s + 1)
          }}
        >
          <NavArrowRight />
        </ArrowContainer>
      </MainImageContainer>
      <ThumbnailContainer>
        {images.map((image, index) => {
          return (
            <ThumbnailItem className={selectedIndex === index ? 'active' : ''} onClick={() => setSelectedIndex(index)} key={image.relativePath}>
              <GatsbyImage image={image.thumb.gatsbyImageData} alt={''} />
            </ThumbnailItem>
          )
        })}
      </ThumbnailContainer>
      <Footer />
    </IndexLayout>
  )
}

const ThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: var(--size-xxl);
`
const ThumbnailItem = styled.div`
  width: 75px;
  height: 75px;
  flex-shrink: 0;
  margin: var(--size-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: opacity 0.25s linear;
  cursor: pointer;
  &:hover, &.active {
    opacity: 1;
  }
  img {
    max-width: 75px;
    max-height: 75px;
    width: 100%;
    border-radius: var(--border-radius-base);
  }
  ${media.md} {
    width: 150px;
    height: 150px;
    img {
      max-width: 150px;
      max-height: 150px;
    }
  }
`
const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--brown-3);
  color: white;
  font-size: var(--size-m);
  width: var(--size-xl);
  height: var(--size-xl);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.25s linear;
  &:hover {
    opacity: 1;
  }
`
const MainImageContainer = styled.div`
  margin: var(--size-l) auto;
  width: 100%;
  overflow: hidden;
  text-align: center;
  position: relative;
  img {
    height: 800px;
    max-height: 90vh;
    margin: 0 auto;
    display: block;
    cursor: pointer;
  }

  .fade {
    &-enter-active, &-exit-active {
      transition: opacity 0.25s ease-in-out;
    }
    &-enter {
      opacity: 0;
      &-active {
        opacity: 1;
      }
    }
    &-exit {
      opacity: 1;
      &-active {
        opacity: 0;
      }
    }
  }
`
