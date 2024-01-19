// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const RecipeCard = (recipe) => {
  // const naviagteTo = useNavigate();
  // const redirectToEdit = () => {
  //   naviagteTo(`/editRecipe/${recipe.title}`);
  // }
  const maxLength = 100;
  return (
    <div className="recipeCard mx-auto bg-white rounded-xl overflow-hidden shadow-lg" style={{
      background:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
   borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
   boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
    }}>
      <img class="mt-4 relative w-84 mx-4 h-28 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg  bg-white" src={recipe.imageUrl}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-primary">{recipe.title}</div>
        <p className="text-secondary text-base py-5">
          {recipe.description.length > maxLength
            ? `${recipe.description.substring(0, maxLength)}...`
            : recipe.description}
        </p>
      </div>
      <div className="px-6 py-4">
      <Link to={`/editRecipe/title=${encodeURIComponent(recipe.title)}`}>
      <button
            data-ripple-light="true"
            type="button"
            class="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-900/20 transition-all hover:shadow-lg hover:shadow-gray-900/50 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Edit
          </button>
          </Link>
      </div>
    </div>
  );
};

export default RecipeCard;