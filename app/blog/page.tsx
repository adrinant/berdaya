import { BlogPosts } from '@/app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read our blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Our Blog</h1>
      {/* <p className='mb-4'>
        Sorry, no blog posts available at the moment.
      </p> */}
      <BlogPosts />
    </section>
  )
}