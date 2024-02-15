import { defineStore } from "pinia";
import { LoginData, UserInfo } from "@/api/user/types";
import { useStorage } from "@vueuse/core";
import { reqDelUserLogout, reqGetUserInfo, reqPostUserLogin } from "@/api/user";
import { store } from "@/store";
import { resetRouter } from "@/router";

export const useUserStore = defineStore("user", () => {
  const user: UserInfo = {
    roles: [],
    perms: [],
  };

  const token = useStorage("accessToken", "");

  async function userLogin(params: LoginData) {
    const res = await reqPostUserLogin(params);
    console.log("登录结果", res);
  }

  async function getUserInfo() {
    const res = await reqGetUserInfo();
    console.log("用户信息", res);
  }

  async function userLogout() {
    const res = await reqDelUserLogout();
    console.log("注销结果", res);
  }

  // remove token
  function resetToken() {
    return new Promise<void>((resolve) => {
      token.value = "";
      resetRouter();
      resolve();
    });
  }

  return {
    token,
    user,
    userLogin,
    getUserInfo,
    userLogout,
    resetToken,
  };
});

export function useUserStoreHook() {
  return useUserStore(store);
}
