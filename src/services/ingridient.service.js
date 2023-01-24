import ApiService from "./api.service";

const IngridientService = {
  GetIngridient: async (props) => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      params: {
        page: props.current,
        perPage: props.pageSize,
        sort: "-created",
      },
      url: "/collections/ingridient/records",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return res.data;
    } catch (error) {
      throw error;
    }
  },

  GetDetailIngridient: async (id) => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      url: "/collections/ingridient/records/" + id,
    };
    try {
      const res = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return res.data;
    } catch (error) {
      throw error;
    }
  },

  CreateIngridient: async (payload) => {
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: payload,
      url: "/collections/ingridient/records",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return res.data;
    } catch (error) {
      throw error;
    }
  },

  UpdateIngridient: async (payload) => {
    const requestData = {
      method: "patch",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: payload,
      url: "/collections/ingridient/records/" + payload.id,
    };
    try {
      const res = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return res.data;
    } catch (error) {
      throw error;
    }
  },

  DeleteIngridient: async (id) => {
    const requestData = {
      method: "delete",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      url: "/collections/ingridient/records/" + id,
    };
    try {
      const res = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};

export default IngridientService;
