import PropTypes from "prop-types";
import FoodCard from "../FoodCard/FoodCard";
const FoodCards = ({ handleFoodCard, foodCards }) => {
  return (
    <div className="sm:justify-center grid lg:grid-cols-2 md:grid-cols-2 gap-5">
      {foodCards.map((foodCard, idx) => (
        <FoodCard
          handleFoodCard={handleFoodCard}
          key={idx}
          foodCard={foodCard}
        ></FoodCard>
      ))}
    </div>
  );
};

FoodCards.propTypes = {
  handleFoodCard: PropTypes.func.isRequired,
  foodCards: PropTypes.array.isRequired,
};
export default FoodCards;
