import { useLoaderData } from '@remix-run/react'
import { getPosts } from "~/models/posts.server"
import { getPost } from '~/models/posts.server'
import styles from '~/styles/blog.css'
import Post from '~/components/post'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

export function meta() {
  return {
    title: 'GuitarLA - Nuestro Blog',
    description: 'GuitarLA, blog de música y venta de guitarras'
  }
}

function Blog() {
  const posts = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>

      {posts?.length && (
        <div className='blog'>
          {posts.map(post => (
            <Post
              key={post?.id}
              post={post?.attributes}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Blog
