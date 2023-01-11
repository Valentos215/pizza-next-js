export const NAV_MENU = [
  { title: "Pizza", link: "/" },
  { title: "Drinks", link: "/drinks" },
  { title: "Sides", link: "/sides" },
  { title: "Dessert", link: "/dessert" },
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

export const PIZZA_WEIGHT = [550, 760, 810];

export const PIZZA_SIZE_RATE = [1, 1.18, 1.32];

export const PIZZA_CRUST_RATE = [1, 1, 1.18, 1.32];

export enum EApiPath {
  Pizza = "pizza",
}
