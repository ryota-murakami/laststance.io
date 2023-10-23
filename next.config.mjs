import rehypePrism from '@mapbox/rehype-prism'
// import mdxLoader from '@mdx-js/loader'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism],
    remarkPlugins: [remarkGfm],
  },
})

export default withMDX(nextConfig)
