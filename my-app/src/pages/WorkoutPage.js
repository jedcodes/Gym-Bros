import React, { useState } from "react";
import Categlory from "../components/Categlory";
import Header from "../components/Header";
import { Container } from "@chakra-ui/react";

const WorkoutPage = () => {
  const [workoutTermInput, setWorkoutTermInput] = useState("");

  return (
    <div className="WorkoutPage">
      <header>
        <Header setSearchTerm={setWorkoutTermInput} />
      </header>
      <main>
        <section className="Workout__categlory">
          <Container maxW="full">
            <Categlory />
          </Container>
        </section>
      </main>
    </div>
  );
};

export default WorkoutPage;
