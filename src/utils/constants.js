import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";

export const cards = [
  {
    id: 1,
    nameRU: "В погоне за Бенкси",
    duration: 27 * 60,
    image: {
      url: card1,
    },
    saved: false,
  },
  {
    id: 2,
    nameRU: "В погоне за Бенкси",
    duration: 27 * 60,
    image: {
      url: card2,
    },
    saved: false,
  },
  {
    id: 3,
    nameRU: "В погоне за Бенкси",
    duration: 27 * 60,
    image: {
      url: card3,
    },
    saved: true,
  },
  {
    id: 4,
    nameRU: "В погоне за Бенкси",
    duration: 27 * 60,
    image: {
      url: card4,
    },
    saved: true,
  },
  {
    id: 5,
    nameRU: "В погоне за Бенкси",
    duration: 27 * 60,
    image: {
      url: card4,
    },
    saved: false,
  },
  {
    id: 6,
    nameRU: "В погоне за Бенкси",
    duration: 27 * 60,
    image: {
      url: card4,
    },
    saved: false,
  },
  {
    id: 7,
    nameRU: "В погоне за Бенкси",
    duration: 27 * 60,
    image: {
      url: card4,
    },
    saved: true,
  },
  {
    id: 8,
    nameRU: "В погоне за Бенкси",
    duration: 27 * 60,
    image: {
      url: card4,
    },
    saved: false,
  },
  {
    id: 9,
    nameRU: "В погоне за Бенкси",
    duration: 27 * 60,
    image: {
      url: card4,
    },
    saved: false,
  },
  {
    id: 10,
    nameRU: "В погоне за Бенкси",
    duration: 27 * 60,
    image: {
      url: card4,
    },
    saved: false,
  },
  {
    id: 11,
    nameRU: "В погоне за Бенкси",
    duration: 27 * 60,
    image: {
      url: card4,
    },
    saved: false,
  },
];
    /* export const PROPS_PROFILE = {
  inputsList: [
    { name: "name", label: "Имя", type: "text", maxLength: 30 },
    { name: "email", label: "Почта", type: "text" },
  ],
  defaultValues: {
    name: "",
    email: "", 
  },
  validators: {
    name: {
      required: (value) => {
        return {
          valid: !!value,
          message: "Вы пропустили это поле.",
        };
      },
      minLength: (value) => {
        return {
          valid: value && value.length > 1,
          message: `Минимальное количество символов: 2. Длина текста сейчас: ${(value && value.length) || 0} символ.`,
        };
      },
      mask: (value) => {
        return {
          valid: !/[^a-z-\s]/i.test(value),
          message: `Поле может содержать только латиницу, пробел или дефис.`,
        };
      },
    },
    email: {
      required: (value) => {
        return {
          valid: !!value,
          message: "Вы пропустили это поле.",
        };
      },
      minLength: (value) => {
        return {
          valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
          message: `Некорректный e-mail`,
        };
      },
    },
  },
};*/

export const PROPS_LOGIN = {
  inputsList: [
    { name: "email", label: "E-mail", type: "text" },
    { name: "password", label: "Пароль", type: "password" },
  ],
  defaultValues: {
    password: "",
    email: "",
  },
  onlyDifferent: false,
  title: "Рады видеть!",
  name: "login",
  submitText: "Войти",
  footerData: {
    description: "Ещё не зарегистрированы?",
    linkTo: "/signup",
    linkText: "Регистрация",
  },
  validators: {
    email: {
      required: (value) => {
        return {
          valid: !!value,
          message: "Вы пропустили это поле.",
        };
      },
      minLength: (value) => {
        return {
          valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
          message: `Некорректный e-mail`,
        };
      },
    },
    password: {
      required: (value) => {
        return {
          valid: !!value,
          message: "Вы пропустили это поле.",
        };
      },
      minLength: (value) => {
        return {
          valid: value.length > 7,
          message: `Минимальное количество символов: 8. Длина текста сейчас: ${value.length} символ.`,
        };
      },
    },
  },
};

export const PROPS_REGISTRATIONS = {
  inputsList: [
    { name: "name", label: "Имя", type: "text", maxLength: 30 },
    { name: "email", label: "E-mail", type: "text" },
    { name: "password", label: "Пароль", type: "password" },
  ],
  defaultValues: {
    name: "",
    email: "",
    password: "",
  },
  title: "Добро пожаловать!",
  name: "register",
  submitText: "Зарегистрироваться",
  footerData: {
    description: "Уже зарегистрированы?",
    linkTo: "/signin",
    linkText: "Войти",
  },
  validators: {
    name: {
      required: (value) => {
        return {
          valid: !!value,
          message: "Вы пропустили это поле.",
        };
      },
      minLength: (value) => {
        return {
          valid: value.length > 1,
          message: `Минимальное количество символов: 2. Длина текста сейчас: ${value.length} символ.`,
        };
      },
      mask: (value) => {
        return {
          valid: !/[^a-z-\s]/i.test(value),
          message: `Поле может содержать только латиницу, пробел или дефис.`,
        };
      },
    },
    email: {
      required: (value) => {
        return {
          valid: !!value,
          message: "Вы пропустили это поле.",
        };
      },
      minLength: (value) => {
        return {
          valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
          message: `Некорректный e-mail`,
        };
      },
    },
    password: {
      required: (value) => {
        return {
          valid: !!value,
          message: "Вы пропустили это поле.",
        };
      },
      minLength: (value) => {
        return {
          valid: value.length > 7,
          message: `Минимальное количество символов: 8. Длина текста сейчас: ${value.length} символ.`,
        };
      },
    },
  },
};

export const MOVIES_API_SETTINGS = {
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
};

export const MAIN_API_SETTINGS = {
  baseUrl: "https://api.movies-ex.students.nomoredomains.club",
  // baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
};

export const SHORT_MOVIE_MINUTES = 40;
