const navbarSearch = (searchInput, data) => {
  if (searchInput === "") return data;
  return data.filter(
    (video) =>
      video.description.toLowerCase().includes(searchInput.toLowerCase()) ||
      video.categoryName.toLowerCase().includes(searchInput.toLowerCase()) ||
      video.creator.toLowerCase().includes(searchInput.toLowerCase()) ||
      video.title.toLowerCase().includes(searchInput.toLowerCase())
  );
};
export { navbarSearch };
