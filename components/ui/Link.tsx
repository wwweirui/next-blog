import type { LinkProps } from 'next/link'
import NextLink from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface LinkPropsExtended extends LinkProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

const Link: React.FC<LinkPropsExtended> = (props) => {
  const { href, children, ...rest } = props

  const isInternalLink = href?.startsWith('/')
  const isAnchorLink = href?.startsWith('#')

  if (isInternalLink) {
    return (
      <NextLink className="break-words" href={href} {...rest}>
        {children}
      </NextLink>
    )
  }

  if (isAnchorLink) {
    return (
      <a className="break-words" href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a className="break-words" target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  )
}

export default Link
