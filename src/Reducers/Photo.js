function reducer(state = { photos: {} }, action) {
  switch (action.type) {
    case "photos_fetch":
      return {
        isLoading: true,
        error: {},
        total_pages: 0,
        totalImages: 0,
      };
    case "photos_success":
      return {
        photos: action.value.photos.results,
        isLoading: false,
        total_pages: action.value.photos.total_pages,
        totalImages: action.value.photos.total,
        error: {},
      };
    case "photos_failure":
      return {
        isLoading: false,
        error: action.value.error,
        total_pages: 0,
        totalImages: 0,
      };
    default:
      return [];
  }
}

export default reducer;
