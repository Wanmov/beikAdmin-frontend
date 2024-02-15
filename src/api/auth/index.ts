import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { CaptchaResult } from "./types";

export function reqGetMenusList() {
  return request({
    url: "/api/v1/menus/routes",
    method: "get",
  });
}

export function reqGetCaptcha(): AxiosPromise<CaptchaResult> {
  return request({
    url: "/api/v1/auth/captcha",
    method: "get",
  });
}
