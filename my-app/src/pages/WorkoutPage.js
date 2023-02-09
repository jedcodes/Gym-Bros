import React, { useState } from "react";
import Cards from "../components/Cards";
import Categlory from "../components/Categlory";
import Header from "../components/Header";

const imgSrc =
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";

const workoutInfo = {
  img: imgSrc,
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
};

const WorkoutPage = () => {
  const [workoutTermInput, setWorkoutTermInput] = useState("");

  return (
    <div className="WorkoutPage">
      <header>
        <Header setSearchTerm={setWorkoutTermInput} />
      </header>
      <main>
        <section className="Workout__categlory">
          <Categlory />
        </section>
        <section className="Workout__cardGrid">
          <Cards info={workoutInfo} />
          <Cards info={workoutInfo} />
          <Cards info={workoutInfo} />
          <Cards info={workoutInfo} />
          <Cards info={workoutInfo} />
          <Cards info={workoutInfo} />
        </section>
      </main>
    </div>
  );
};

export default WorkoutPage;
