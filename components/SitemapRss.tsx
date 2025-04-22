import Link from "next/link";

const SitemapRss = () => {
  return (
    <div className="flex justify-center gap-8 py-4 text-sm text-gray-500">
      <Link 
        href="/sitemap.xml" 
        className="hover:text-gray-700 hover:underline transition-colors"
      >
        Sitemap
      </Link>
      <Link 
        href="/rss.xml" 
        className="hover:text-gray-700 hover:underline transition-colors"
      >
        RSS Feed
      </Link>
    </div>
  );
};

export default SitemapRss; 