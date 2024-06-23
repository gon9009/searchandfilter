import React from "react";
// =======================================
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import useFetchEmoji from "./Hooks/useFetchEmoji";
import { useState } from "react";

const App = () => {
  const { data, error, isLoading } = useFetchEmoji();


  return (
    <>
      <Header />
      <Main data={data} error={error} isLoading={isLoading} />
    </>
  );
};

export default App;
