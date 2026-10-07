import React, { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export const PageSEO: React.FC<PageSEOProps> = ({ title, description, canonicalPath = '/' }) => {
  useEffect(() => {
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // Update og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    // Update og:description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    // Update canonical if available
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
    canonical.setAttribute('href', `${currentOrigin}${canonicalPath}`);

    // Scroll to top on page transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, canonicalPath]);

  return null;
};
