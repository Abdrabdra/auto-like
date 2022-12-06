import { AxiosResponse } from "axios";
import axios from "axios";
import { ILogin, ILoginResponse } from "@types/ILogin";
import { IRegistration } from "@types/IRegistration";

import { $api, DEV_API } from "../../api";

export class AuthService {
  static async login(creds: ILogin): Promise<AxiosResponse<ILoginResponse>> {
    return $api.post<ILoginResponse>(`auth/login`, creds);
  }

  static async registration(
    creds: IRegistration
  ): Promise<AxiosResponse<string>> {
    return $api.post<string>(`auth/registration`, creds);
  }

  static async refresh(): Promise<AxiosResponse<ILoginResponse>> {
    return axios.get<ILoginResponse>(`${DEV_API}auth/refresh`);
  }

  static async logout(): Promise<AxiosResponse<ILoginResponse>> {
    return axios.get(`${DEV_API}auth/logout`);
  }

  // static async logout(): Promise<AxiosResponse<ILoginResponse>> {
  //   return axios.get(`${DEV_API}auth/logout`, { withCredentials: true });
  // }
}
