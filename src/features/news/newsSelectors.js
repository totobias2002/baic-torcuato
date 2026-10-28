export const selectNews = (state) => state.news.items
export const selectNewsStatus = (state) => state.news.status
export const selectNewsCategories = (state) => {
  const categories = new Set(state.news.items.map((n) => n.category))
  return ['All Posts', ...Array.from(categories)]
}
