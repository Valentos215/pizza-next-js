export const NAV_MENU = [
  { title: "Pizza", link: "/", logo: "/Pizza.svg" },
  { title: "Drinks", link: "/drinks", logo: "/Drinks.svg" },
  { title: "Sides", link: "/sides", logo: "/Sides.svg" },
  { title: "Dessert", link: "/dessert", logo: "/Dessert.svg" },
];

export const ERROR_MES = {
  NameLong: "Name is to long",
  NameShort: "Name is to short",
  NameRequired: "Name is required",
  NameValid: "Please use only latin letters",
  EmailLength: "E-mail is to long",
  EmailRequired: "E-mail is required",
  EmailIncorrect: "Incorrect email",
  PhoneRequired: "Phone number is required",
};

export const NAME_VALIDATION = /^[A-Za-z]+$/;

export const PIZZA_SIZES = ["Standard size", "Large", "New Yorker"];

export const PIZZA_CRUSTS = [
  "Standard crust",
  "Thin",
  "Philadelphia",
  "Hot-Dog Crust",
];

export const PIZZA_SORT_CRITERIA = [
  "Popularity",
  "Price low-high",
  "Price high-low",
];
export const PRODUCTS_SORT_CRITERIA = ["Price low-high", "Price high-low"];

export const PIZZA_WEIGHT = [550, 760, 810];

export const PIZZA_SIZE_RATE = [1, 1.18, 1.32];

export const PIZZA_CRUST_RATE = [1, 1, 1.18, 1.32];

export enum EApiPath {
  Pizza = "pizza",
}
