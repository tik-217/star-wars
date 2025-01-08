import { BrowserRouter, Route, Routes } from "react-router";
import { Main } from "@/pages/Main";
import { Root } from "@/pages/Root";
import { People } from "@/pages/People";
import { DetailsCard } from "@/pages/DetailsCard";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="root">
          <Route index element={<Root />} />
          <Route path="people" element={<People />} />
          <Route path="people/:id" element={<DetailsCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
