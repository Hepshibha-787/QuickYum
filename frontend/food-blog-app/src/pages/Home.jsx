import React, { useState } from "react";
import christmas from "../assets/christmas.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import RecipeItems from "../components/RecipeItems";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import InputForm from "../components/InputForm";

export default function Home() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const addRecipe = () => {
    let token = localStorage.getItem("token");
    if (token) navigate("/addRecipe");
    else {
      setIsOpen(true);
    }
  };
  return (
    <>
      <section className="home">
        <div className="left">
          <h1>QuickYum</h1>
          <h5>
            This is an user-friendly recipe sharing platform where users can
            collaborate, write,edit,share and make any recipe as their
            favorites.. and this is a cool application{" "}
          </h5>
          <button onClick={addRecipe}>Share your recipe</button>
        </div>
        <div className="right">
          <img src={christmas} width="320px" height="300px"></img>
        </div>
      </section>
      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d4f6e8"
            fillOpacity="1"
            d="M0,128L34.3,112C68.6,96,137,64,206,58.7C274.3,53,343,75,411,101.3C480,128,549,160,617,149.3C685.7,139,754,85,823,85.3C891.4,85,960,139,1029,170.7C1097.1,203,1166,213,1234,186.7C1302.9,160,1371,96,1406,64L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={() => setIsOpen(false)} />
        </Modal>
      )}

      <div className="recipe">
        <RecipeItems />
      </div>
    </>
  );
}
