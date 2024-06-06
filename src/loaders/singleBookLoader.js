export const singleBookLoader = async ({ params, request }) => {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("id");

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=+isbn:${searchQuery}`
  );
  const data = await response.json();

  if (data?.totalItems !== 0) {
    return data.items[0];
  }

  return null;
};
