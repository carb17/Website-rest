export const USERS = import.meta.env.VITE_API_USER_URL;

export const MENU = import.meta.env.VITE_API_MENU_URL;

export const ORDERS = import.meta.env.VITE_API_ORDER_URL;

export const INVENTORY = import.meta.env.VITE_API_INVENTORY_URL;

// ========== USERS ==========
export const USERS_ENDPOINT = {
  base: `${USERS}/users/`,
  login: `${USERS}/login`,
  list: `${USERS}/users/`,
  register: `${USERS}/users/`,
};

// ========== PRODUCTS ==========
export const PRODUCTS_ENDPOINT = {
  base: `${MENU}/products/`,
  list: `${MENU}/products/`,
  register: `${MENU}/products/`,
};
