import React from "react";
import Header from "../Header";
import Game from "../Game";

import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleDataProvider";
import GameStatusProvider from "../../providers/GameStatusProvider";
import { DirectionProvider } from "@radix-ui/react-direction";

function App() {
  return (
    <DirectionProvider dir="rtl">
      <PuzzleDataProvider>
        <GameStatusProvider>
          <div className="wrapper">
            <Toaster />
            <Header />
            <Game />
          </div>
        </GameStatusProvider>
      </PuzzleDataProvider>
    </DirectionProvider>
  );
}

export default App;
