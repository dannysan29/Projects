export async function fetchSpaceNews() {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=5&ordering=-published_at");
  
      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }
  
      const data = await response.json();
  
      // Return only what we need
      return data.results.map(article => ({
        title: article.title,
        summary: article.summary,
        url: article.url,
        imageUrl: article.image_url,
        publishedAt: article.published_at
      }));
    } catch (error) {
      console.error("Error fetching space news:", error);
      return [];
    }
  }