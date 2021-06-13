import { createClient } from "contentful";

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({
    content_type: "recipe",
  });

  return {
    props: {
      recipes: response.items,
    },
  };
};

export default function Recipes({ recipes }) {
  console.log(recipes);
  return <div className="recipe-list">Recipe List</div>;
}
