import PropTypes from "prop-types";
const FoodCard = ({ foodCard, handleFoodCard }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = foodCard;
  // console.log(foodCard);

  return (
    <div>
      <div className="container mx-auto">
        <div className="">
          {/* food card */}
          <div className=" ">
            <div className="border-2 max-w-[500px]  bg-base-100 shadow-xl p-6 rounded-2xl">
              <figure className="overflow-hidden">
                <img
                  className="rounded-2xl h-60 w-full hover:scale-110 duration-500"
                  src={recipe_image}
                  alt="food"
                />
              </figure>
              <div className="">
                <h2 className="text-xl font-semibold mt-6 mb-4">
                  {recipe_name}
                </h2>
                <p className="opacity-75 ">{short_description.slice(0, 65)}</p>
                <div className="border-b-2 mt-4 mb-6"></div>
                <h3 className=" mb-4">Ingredients: {ingredients.length}</h3>
                {ingredients.map((item, idx) => (
                  // console.log(item);
                  <ul
                    key={idx}
                    className="opacity-75 grid gap-2 list-disc pl-6"
                  >
                    <li>{item}</li>
                  </ul>
                ))}
                <div className="border-b-2 mt-4 mb-6"></div>
                <div className=" flex gap-4 mb-6">
                  <p>
                    <i className="fa-regular fa-clock mr-2"></i>
                    {preparing_time} minute
                  </p>
                  <p>
                    <i className="fa-solid fa-fire-flame-curved mr-2"></i>
                    {calories}
                    calories
                  </p>
                </div>
                <div className="">
                  <button
                    onClick={() => handleFoodCard(foodCard)}
                    className=" border-none px-9 text-black  py-4 text-xl  font-medium bg-green-400 rounded-full "
                  >
                    Want to Cook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  foodCard: PropTypes.object.isRequired,
  handleFoodCard: PropTypes.func.isRequired,
};
export default FoodCard;
