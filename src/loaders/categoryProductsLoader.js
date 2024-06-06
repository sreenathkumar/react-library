export const categoryProductsLoader = async ({ params }) => {
  const { categoryTitle } = params;

  const response = await fetch(
    `https://api.nytimes.com/svc/books/v3/lists/${categoryTitle}.json?api-key=GaESzDWgFVIjf5U4lLsTKDpm4N6uOI2m`
  );
  const data = await response.json();

  if (data?.num_results !== 0) {
    return data?.results?.books;
  }

  return null;
};
