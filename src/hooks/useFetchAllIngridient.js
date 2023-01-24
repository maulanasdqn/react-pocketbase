import { useQuery } from "@tanstack/react-query";
import IngridientService from "../services/ingridient.service";

export default (props) => {
  return useQuery({
    queryKey: ["fetch-all-ingriidient", props],
    queryFn: async () => IngridientService.GetIngridient(props),
  });
};
