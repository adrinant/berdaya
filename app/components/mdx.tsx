import Link, { LinkProps } from 'next/link'
import Image, { ImageProps } from 'next/image'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'

// Define the types for TableData
interface TableData {
  headers: string[];  // Assuming headers are an array of strings
  rows: string[][];   // Assuming rows are a 2D array of strings
}

// Table component
function Table({ data }: { data: TableData }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

// CustomLink component
interface CustomLinkProps extends LinkProps {
  children: React.ReactNode; // Explicitly define children as React.ReactNode
}

function CustomLink({ href, children, ...rest }: CustomLinkProps) {
  // Check if href is a string or UrlObject
  const isStringHref = typeof href === 'string'
  const url = isStringHref ? href : href?.href || ''

  if (isStringHref && url.startsWith('/')) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    )
  }

  if (isStringHref && url.startsWith('#')) {
    return <a {...rest}>{children}</a>
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={url} {...rest}>
      {children}
    </a>
  )
}

// RoundedImage component
interface RoundedImageProps extends ImageProps {
  alt: string; // Ensure alt is always passed
}

function RoundedImage({ alt, ...props }: RoundedImageProps) {
  return <Image className="rounded-lg" alt={alt} {...props} />
}

// Code component
interface CodeProps {
  children: React.ReactNode; // Code should accept children as React.ReactNode
}

function Code({ children, ...props }: CodeProps) {
  const codeHTML = highlight(children as string) // Cast children to string
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

// Slugify function
function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

// Create heading function
function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    const slug = slugify(children as string) // Cast children to string
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

// Define components for MDX
const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

// CustomMDX component
interface CustomMDXProps extends MDXRemoteProps {
  source: string; // Define source type explicitly
}

export function CustomMDX({ source, ...props }: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      source={source}  // Ensure 'source' is passed here
      components={components} // Pass components directly
    />
  )
}