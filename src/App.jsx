import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Banner from "./Components/Banner/Banner";

import FoodCards from "./Components/Cards/FoodCards";
import Cart from "./Components/Cart/Cart";
import Carts from "./Components/Carts/Carts";
import Cooking from "./Components/Cooking/Cooking";
import Navbar from "./Components/navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
//hi
function App() {
  const [foodCards, setFoodCards] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((date) => setFoodCards(date));
    // console.log(foodCards);
  }, []);

  const [addCarts, setAddCarts] = useState([]);
  const handleFoodCard = (data) => {
    const isExist = addCarts.find((p) => p.recipe_id == data.recipe_id);
    // console.log(data.recipe_id);
    if (!isExist) {
      setAddCarts([...addCarts, data]);
      toast.success("Successfully added", {
        position: "top-center",
      });
    } else {
      toast.error("This item already exist !", {
        position: "top-center",
      });
    }
  };

  const [cooking, setCooking] = useState([]);
  const [time, setTiem] = useState(0);
  const [calories, setCalories] = useState(0);
  const handlePreparing = (cook) => {
    toast.success("Cooking !", {
      position: "top-center",
    });
    const remainingCart = addCarts.filter(
      (item) => item.recipe_id != cook.recipe_id
    );
    setAddCarts(remainingCart);
    setCooking([...cooking, cook]);

    // set cooking time
    const cookTime = parseInt(cook.preparing_time);
    setTiem(time + cookTime);

    // set calories
    const calorie = parseInt(cook.calories);
    setCalories(calories + calorie);

    console.log(cookTime);
  };
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Banner></Banner>
        <div className=" lg:w-2/3 mx-auto">
          <h3 className="text-[40px] font-semibold text-center">Our Recipes</h3>
          <p className="opacity-75 mt-7 mb-12 text-center">
            Explore Our Recipes, your culinary companion for delicious dishes.
            Discover diverse flavors, simple recipes, and culinary inspiration
            for every occasion.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row  gap-6 container mx-auto">
          <ToastContainer />
          <FoodCards
            foodCards={foodCards}
            handleFoodCard={handleFoodCard}
            className=""
          ></FoodCards>

          <div className="flex-1 border-2 rounded-xl">
            <Carts addCarts={addCarts}></Carts>
            <Cart addCarts={addCarts} handlePreparing={handlePreparing}></Cart>
            <div className="text-center mt-8">
              <h3 className="text-2xl font-semibold">
                Currenty cooking: {cooking.length}
              </h3>
              <div className="border-b-2 mt-4 mb-6"></div>
            </div>
            <Cooking
              cooking={cooking}
              time={time}
              calories={calories}
            ></Cooking>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
