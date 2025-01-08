import { People } from "@/shared/api/people/types";
import axios from "axios";

export const getOneHero = async (heroId: string) => {
  return await axios<People>("https://swapi.py4e.com/api/people/" + heroId)
    .then(({ data }) => data)
    .catch((err) => {
      console.log(err);
      return null;
    });
};
