import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const response = await client.getEntries({
    content_type: "recipe",
  });

  const paths = response.items.map((item) => ({
    params: {
      slug: item.fields.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });

  return {
    props: { recipe: items[0] },
  };
};

export default function RecipeDetails({ recipe }) {
  console.log(recipe);
  return <div>Recipe Details</div>;
}
