import React from "react";
import { StatusBar, View } from "react-native";

import Home from "./src/pages/Home";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
