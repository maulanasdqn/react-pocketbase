import { useMutation } from "@tanstack/react-query";
import IngridientService from "../services/ingridient.service";

export default () =>
  useMutation({
    mutationKey: ["create-ingridient"],
    mutationFn: async (payload) => IngridientService.CreateIngridient(payload),
  });
