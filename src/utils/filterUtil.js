export function filterByCategory(list, category) {
     let result = list.filter(data => data.genres && data.genres.includes(category))
     return result.sort((a, b) => b.rating.average - a.rating.average);
}
