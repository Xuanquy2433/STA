export const API = "http://localhost:8082";

export const API_USER_LOGIN = `${API}/login`;

export const API_USER_SIGNUP = `${API}/signup`;

export const API_GET_WALLET = `${API}/wallet/?token=`;

export const API_SEND_STA =`${API}/wallet/send/`;

export const API_BUY_STA =`${API}/wallet/exchange/`;

export const API_GET_PRODUCT = `${API}/product/`;

export const API_POST_PRODUCT = `${API}/product/add`;

export const API_ADD_ORDER = `${API}/order/add?token=`;

export const API_POST_ORDER = `${API}/order/?token=`;

export const API_LOG_USER = `${API}/logs/user?token=`;

export const API_GET_TYPE_MARKET = `${API}/market/`;

export const API_ADD_MARKET = `${API}/market/add?token=`;

export const API_GET_BY_USER_MARKET = `${API}/market/user`;

export const API_PUT_BY_USER_MARKET = `${API}/market/user`;

export const API_PUT_EDIT_AVATAR = `${API}/user/avatar`;

export const API_GET_CATEGORY = `${API}/category/`;

export const API_ADD_REQUEST =`${API}/request/?token=`;

export const API_WITHDRAW_REQUEST =`${API}/request/?token=`;

export const API_UPDATE_REQUEST =`${API}/request/?token=`;

export const API_GET_REQUEST =`${API}/request/all?status=pending`;

export const API_GET_LOGS = `${API}/market/all?status=`