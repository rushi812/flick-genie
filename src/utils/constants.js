export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/0e916f82-036f-468a-a098-52592391d3a8/null/IN-en-20240902-POP_SIGNUP_TWO_WEEKS-perspective_a8d5d4ae-15d5-4414-b272-b12d2fce75cd_medium.jpg";

export const DEFAULT_USER_AVATAR =
  "https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABb81BxMNuz7x4Bt4RAxNIgMh7pbVFbyz41I_IQECtHpk_kZPBAdycxiJOgjo6l2lWKtPJrL4MsjQkrwg4oH4QcMYhE38863oceg0.png?r=cad";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hin", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
];

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
export const API_ACCESS_TOKEN = process.env.REACT_APP_API_ACCESS_TOKEN;
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
  },
};
