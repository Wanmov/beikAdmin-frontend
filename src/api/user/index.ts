import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { LoginData, LoginResult, UserInfo } from "./types";

export function reqPostUserLogin(data: LoginData): AxiosPromise<LoginResult> {
  return request({
    url: "/api/v1/auth/login",
    method: "post",
    data,
  });
}

export function reqGetUserInfo(): AxiosPromise<UserInfo> {
  return request({
    url: "/api/v1/users/me",
    method: "get",
  });
}

export function reqDelUserLogout() {
  return request({
    url: "/api/v1/auth/logout",
    method: "delete",
  });
}
