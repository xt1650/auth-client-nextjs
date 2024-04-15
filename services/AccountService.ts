// SERVICES
import { HttpService } from "@/services";
import { AxiosError } from "axios";
const http = new HttpService();
const accountService = {
  async register(username: string, password: string) {
    const response = await http
      .service()
      .push(`/account/register`, {
        email: username,
        password: password,
      })
      .then((res) => {
        console.log(res)
        return res;
      })
      .catch((error: AxiosError) => {
        console.log(error);
        return error.response;
      });

    return response;
  },
};

export { accountService };
