const translations = {
  en: {
    brand: "DVMI LTD",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      ourStaff: "Our Staff",
      contact: "Contact",
    },
    sections: {
      home: {
        title: "Home",
        headline: "We Care about Your Car",
        subtitle: "Reliable, fast, and expert car repair services to keep your vehicle running at its best.",
        description: "From routine maintenance to major fixes, we ensure smooth, safe, and stress-free driving.",
        emergencyCall: "Emergency Call 24/7",
      },
      about: {
        title: "About",
      },
      services: {
        title: "Services",
      },
      ourStaff: {
        title: "Our Staff",
      },
      contact: {
        title: "Contact",
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
      services: "Услуги",
      ourStaff: "Нашият екип",
      contact: "Контакт",
    },
    sections: {
      home: {
        title: "Начало",
        headline: "Грижим се за Вашия автомобил",
        subtitle: "Надеждни, бързи и професионални автосервизни услуги, за да поддържате автомобила си в отлично състояние.",
        description: "От рутинна поддръжка до основни ремонти — осигуряваме гладко, безопасно и безгрижно шофиране.",
        emergencyCall: "Спешно обаждане 24/7",
      },
      about: {
        title: "За нас",
      },
      services: {
        title: "Услуги",
      },
      ourStaff: {
        title: "Нашият екип",
      },
      contact: {
        title: "Контакт",
      },
    },
    footer: {
      rights: "Всички права запазени.",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];

export default translations;
