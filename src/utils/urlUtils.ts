export const fetchMetaDescription = async (url: string) => {
  try {
    console.log('Fetching meta description for:', url);
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    console.log('Meta description found:', metaDescription);
    return metaDescription;
  } catch (error) {
    console.error('Error fetching meta description:', error);
    return '';
  }
};