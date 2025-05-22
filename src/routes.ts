/**
 * all about auth routes
 * for only unauthorized users
 * @type {string[]}
 */
export const authRoutes = ["/register", "/login", "/forget-password"];

/**
 * public routes
 * can be access without login or with login
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/api/asiaapi",
  "/slots",
  "/promotion",
  "/promotion/1000",
  "/promotion/1001",
  "/promotion/1002",
  "/promotion/1003",
  "/promotion/1004",
  "/promotion/1005",
  "/promotion/1006",
  "/promotion/1007",
];

/**
 * The prefix for api authentication routes
 * @type {string}
 */
export const apiAuthRoutePrefix = "/api";

/**
 * The prefix for provider api endpoints
 * @type {string}
 */
export const providerApiPrefix = "/api/provider";
