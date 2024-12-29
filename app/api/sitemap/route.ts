import { NextResponse } from "next/server";

const generateSitemap = (): string => {
  const currentDate = new Date().toISOString().split("T")[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://gopikrishnanvm.com/</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>`;
};

export async function GET() {
  const sitemap = generateSitemap();
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
