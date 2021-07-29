import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useLocation } from '@reach/router'
import { Helmet } from 'react-helmet'

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        titleTemplate
        keywords
        siteUrl
      }
    }
  }
`

export function SEO({ title, description }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage
  } = site.siteMetadata
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`
  }
  return (
    <Helmet defer={false} title={seo.title} titleTemplate={title ? titleTemplate : undefined}>
      <meta name={'description'} content={seo.description} />
      <meta name={'image'} content={seo.image} />
      <meta property={'og:url'} content={seo.url} />
      <meta property={'og:title'} content={seo.title} />
      <meta property={'og:description'} content={seo.description} />
      <meta property={'og:image'} content={seo.image} />
      <meta name={'twitter:card'} content={'summary_large_image'} />
      <meta name={'twitter:title'} content={seo.title} />
      <meta name={'twitter:description'} content={seo.description} />
      <meta name={'twitter:image'} content={seo.image} />
    </Helmet>
  )
}
