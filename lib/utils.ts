/**
 * Get the base path for assets (required for GitHub Pages)
 * This matches the basePath in next.config.js
 */
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '/SriAksharaSchool'
}

/**
 * Add base path to an asset URL
 * Use this for images in inline styles or regular img tags
 */
export function assetPath(path: string): string {
  // If path already starts with basePath, return as-is
  if (path.startsWith(getBasePath())) {
    return path
  }
  
  // If path starts with /, add basePath
  if (path.startsWith('/')) {
    return `${getBasePath()}${path}`
  }
  
  // Otherwise, add basePath and /
  return `${getBasePath()}/${path}`
}

