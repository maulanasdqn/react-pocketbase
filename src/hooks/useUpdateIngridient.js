import { useMutation } from "@tanstack/react-query";
import IngridientService from "../services/ingridient.service";

export default () =>
  useMutation({
    mutationKey: ["update-ingridient"],
    mutationFn: async (payload) =>
      await IngridientService.UpdateIngridient(payload),
  });
