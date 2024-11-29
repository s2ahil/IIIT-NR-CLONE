import { baseUrl } from "@/constants/base-url";

export default async function sitemap() {
  // Define your static routes
  const staticRoutes = [
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(), // ISO format for compatibility
    },
    {
      url: `${baseUrl}/curriculum`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/tnp`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/patents`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
    },
  ];

  // Example: Adding dynamic routes (e.g., blog posts)
  const dynamicRoutes = await fetch(`${baseUrl}/api/posts`)
    .then((res) => res.json())
    .then((posts) =>
      posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt || new Date().toISOString(),
      }))
    )
    .catch(() => []); // Fallback to empty array in case of API failure

  // Combine static and dynamic routes
  return [...staticRoutes, ...dynamicRoutes];
}
