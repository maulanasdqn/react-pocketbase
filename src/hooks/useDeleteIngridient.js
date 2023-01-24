import { useMutation } from "@tanstack/react-query";
import IngridientService from "../services/ingridient.service";

export default () =>
  useMutation({
    mutationKey: ["delete-ingridient"],
    mutationFn: async (id) => IngridientService.DeleteIngridient(id),
  });
