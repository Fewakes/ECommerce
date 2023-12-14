import { Outlet } from "react-router";

import React from "react";
import Heading from "../features/store/Heading";

function AppLayout() {
  return (
    <div>
      <Heading />

      <Outlet />
    </div>
  );
}

export default AppLayout;
