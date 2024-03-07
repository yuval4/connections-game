import React from "react";

import InfoModal from "../modals/InfoModal";

function Header() {
  return (
    <header>
      <h1 className="font-assistant">חיבורים</h1>
      <InfoModal />
    </header>
  );
}

export default Header;
