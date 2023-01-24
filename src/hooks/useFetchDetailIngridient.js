import { useQuery } from "@tanstack/react-query";
import IngridientService from "../services/ingridient.service";

export default (id) =>
  useQuery({
    queryKey: ["fetch-detail-ingridient", id],
    queryFn: async () => await IngridientService.GetDetailIngridient(id),
  });
