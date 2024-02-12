/**
 * 登录用户信息
 */
export interface UserInfo {
  userId?: number;
  username?: string;
  nickname?: string;
  avatar?: string;
  roles: string[];
  perms: string[];
}

/**
 * 登录请求参数
 */
export interface LoginData {
  username: string;
  password: string;
  captchaKey?: string; //验证码缓存key
  captchaCode?: string; //验证码
}

export interface LoginResult {
  accessToken?: string;
  expires?: number;
  refreshToken?: string; //刷新token
  tokenType?: string;
}
