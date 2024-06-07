export const searchResultLoader = async ({ params, request }) => {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("query");

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
  );
  const data = await response.json();

  return data?.items || [];
};
