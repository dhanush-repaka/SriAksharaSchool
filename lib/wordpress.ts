import { GraphQLClient } from 'graphql-request'

// WordPress GraphQL endpoint
const WORDPRESS_API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  'https://your-wordpress-site.com/graphql'

export const client = new GraphQLClient(WORDPRESS_API_URL, {
  headers: {
    authorization: process.env.WORDPRESS_AUTH_TOKEN
      ? `Bearer ${process.env.WORDPRESS_AUTH_TOKEN}`
      : '',
  },
})

// GraphQL Queries
export const GET_PAGES = `
  query GetPages {
    pages {
      nodes {
        id
        title
        slug
        content
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: String!) {
    pageBy(uri: $slug) {
      id
      title
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`

export const GET_POSTS = `
  query GetPosts($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

export const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      content
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
`

// Helper functions
export async function fetchPages() {
  try {
    const data = await client.request(GET_PAGES)
    return data.pages.nodes
  } catch (error) {
    console.error('Error fetching pages:', error)
    return []
  }
}

export async function fetchPageBySlug(slug: string) {
  try {
    const data = await client.request(GET_PAGE_BY_SLUG, { slug })
    return data.pageBy
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

export async function fetchPosts(first: number = 10, after?: string) {
  try {
    const data = await client.request(GET_POSTS, { first, after })
    return {
      posts: data.posts.nodes,
      pageInfo: data.posts.pageInfo,
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
    return { posts: [], pageInfo: null }
  }
}

export async function fetchPostBySlug(slug: string) {
  try {
    const data = await client.request(GET_POST_BY_SLUG, { slug })
    return data.postBy
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

