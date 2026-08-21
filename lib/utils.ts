/**
 * Asset prefix. Empty when the site is served from sriakshara.com.
 * Set NEXT_PUBLIC_BASE_PATH only if you must host under a subpath.
 */
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || ''
}

/**
 * Add base path to an asset URL.
 * Use this for images in inline styles or regular img tags.
 */
export function assetPath(path: string): string {
  const base = getBasePath()

  if (!base) {
    return path.startsWith('/') ? path : `/${path}`
  }

  if (path.startsWith(base)) {
    return path
  }

  if (path.startsWith('/')) {
    return `${base}${path}`
  }

  return `${base}/${path}`
}
