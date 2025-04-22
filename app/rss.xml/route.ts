import { NextResponse } from 'next/server';

export async function GET() {
  const domain = 'https://your-domain.com';
  const title = 'Your Portfolio';
  const description = 'Updates from my portfolio and projects';
  
  const date = new Date().toUTCString();
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${title}</title>
    <link>${domain}</link>
    <description>${description}</description>
    <language>en-us</language>
    <lastBuildDate>${date}</lastBuildDate>
    <atom:link href="${domain}/rss.xml" rel="self" type="application/rss+xml" />
    
    <item>
      <title>Portfolio Launch</title>
      <link>${domain}/projects/portfolio-launch</link>
      <pubDate>${date}</pubDate>
      <guid>${domain}/projects/portfolio-launch</guid>
      <description>Launched my new portfolio website built with Next.js and Tailwind CSS.</description>
    </item>
    
    <!-- Add more items as needed -->
  </channel>
</rss>`;
  
  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
} 