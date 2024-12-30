export function getOptimizedVideoUrl (url)  {
    if (!url?.includes('cloudinary.com')) return url;
    
    const [baseUrl, videoParams] = url.split('/upload/');
    // Adding our optimization parameters while preserving any existing ones
    return `${baseUrl}/upload/q_auto,f_auto,br_auto/${videoParams}`;
  };