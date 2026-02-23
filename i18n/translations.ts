const translations = {
  en: {
    brand: "DVMI LTD",
    nav: {
      home: "Home",
      about: "About",
      ourWork: "Our Work",
      ourGarage: "Our Garage",
      contact: "Contact Us",
    },
    sections: {
      home: {
        title: "Home",
      },
      about: {
        title: "About",
      },
      ourWork: {
        title: "Our Work",
      },
      ourGarage: {
        title: "Our Garage",
      },
      contact: {
        title: "Contact Us",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  bg: {
    brand: "DVMI LTD",
    nav: {
      home: "Начало",
      about: "За нас",
      ourWork: "Нашата работа",
      ourGarage: "Нашият гараж",
      contact: "Контакти",
    },
    sections: {
      home: {
        title: "Начало",
      },
      about: {
        title: "За нас",
      },
      ourWork: {
        title: "Нашата работа",
      },
      ourGarage: {
        title: "Нашият гараж",
      },
      contact: {
        title: "Контакти",
      },
    },
    footer: {
      rights: "Всички права запазени.",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];

export default translations;
