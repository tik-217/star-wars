import { ApiResultWrapper, People } from "@/shared/api/people/types";
import axios from "axios";

export async function getPeople({ pageParam }: { pageParam: string }) {
  return await axios<ApiResultWrapper<People[]>>(pageParam)
    .then(({ data }) => data)
    .catch((err) => {
      console.log(err);

      return null;
    });
}
