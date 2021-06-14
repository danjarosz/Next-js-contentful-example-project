import Link from "next/link";

const RecipieCard = ({ recipe }) => {
  const { title, slug, cookingTIme, thumbnail } = recipe.fields;

  return (
    <div className="card">
      <div className="featured"></div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTIme} mins to make</p>
        </div>
        <div className="actions">
          <Link href={`/recipes/${slug}`}>
            <a>Cook this</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipieCard;
