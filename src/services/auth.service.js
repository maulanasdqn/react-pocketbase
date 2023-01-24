import ApiService from "./api.service";
import TokenService from "./token.service";

const AuthService = {
  Login: async (payload) => {
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: payload,
      url: "/collections/users/auth-with-password",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      TokenService.saveToken(res.data.token);
      ApiService.setHeader();
    } catch (error) {
      throw error;
    }
  },

  Register: async (payload) => {
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: payload,
      url: "/collections/users/records",
    };
    try {
      await ApiService.customRequest(requestData);
    } catch (error) {
      throw error;
    }
  },

  Logout: () => {
    ApiService.removeHeader();
    TokenService.removeToken();
    TokenService.removeRefreshToken();
    window.location.reload();
  },
};

export default AuthService;
