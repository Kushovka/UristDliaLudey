// header
import navItems_icon1 from "/images/navItems/icon1.svg";
import navItems_icon2 from "/images/navItems/icon2.svg";
import navItems_icon3 from "/images/navItems/icon3.svg";
import navItems_icon4 from "/images/navItems/icon4.svg";
import navItems_icon5 from "/images/navItems/icon5.svg";
import navItems_icon6 from "/images/navItems/icon6.svg";
import navItems_icon7 from "/images/navItems/icon7.svg";

// chat
import chatIcons_icon1 from "/images/chatItems/icon1.svg";
import chatIcons_icon2 from "/images/chatItems/icon2.svg";
import chatIcons_icon3 from "/images/chatItems/icon3.svg";
import chatIcons_icon4 from "/images/chatItems/icon4.svg";

import chatItems_img1 from "/images/chatItems/img1.png";
import chatItems_img2 from "/images/chatItems/img2.png";
import chatItems_img3 from "/images/chatItems/img3.png";
import chatItems_img4 from "/images/chatItems/img4.png";
import chatItems_img5 from "/images/chatItems/img5.png";
import chatItems_img6 from "/images/chatItems/img6.png";
import chatItems_img7 from "/images/chatItems/img7.png";
import chatItems_img8 from "/images/chatItems/img8.png";
import chatItems_img9 from "/images/chatItems/img9.png";
import chatItems_img10 from "/images/chatItems/img10.png";
import chatItems_img11 from "/images/chatItems/img11.png";

// header
const navItems = [
  {
    name: "Обзор",
    imgPath: navItems_icon1,
  },
  {
    name: "Заявки",
    imgPath: navItems_icon2,
  },
  {
    name: "Верификация",
    imgPath: navItems_icon3,
  },
  {
    name: "AML",
    imgPath: navItems_icon4,
  },
  {
    name: "Выплата",
    imgPath: navItems_icon5,
  },
];
const navItems_faq = [
  {
    name: "FAQ",
    imgPath: navItems_icon6,
  },
  {
    name: "Поддержка",
    imgPath: navItems_icon7,
  },
];

// chat
const chatIcons_1 = [
  {
    imgPath: chatIcons_icon1,
  },
  {
    imgPath: chatIcons_icon2,
  },
];
const chatItems = [
  {
    imgPath: chatItems_img1,
  },
  {
    imgPath: chatItems_img2,
  },
  {
    imgPath: chatItems_img3,
  },
  {
    imgPath: chatItems_img4,
  },
  {
    imgPath: chatItems_img5,
  },
  {
    imgPath: chatItems_img6,
  },
  {
    imgPath: chatItems_img7,
  },
  {
    imgPath: chatItems_img8,
  },
  {
    imgPath: chatItems_img9,
  },
  {
    imgPath: chatItems_img10,
  },
  {
    imgPath: chatItems_img11,
  },
];
const chatIcons_2 = [
  {
    imgPath: chatIcons_icon3,
  },
  {
    imgPath: chatIcons_icon4,
  },
];

// hero
const statItems = [
  {
    title: "Всего заявок",
    content: "245",
    progress: "↑ +12% за месяц",
  },
  {
    title: "Верифицировано",
    content: "92%",
    progress: "↑ +5% за неделю",
  },
  {
    title: "Средняя маржа",
    content: "3.4%",
    progress: "↑ +0.2%",
  },
  {
    title: "Среднее время обработки",
    content: "1 ч 22 мин",
    progress: "↓ -15 мин",
  },
];
const applicationItems = [
  {
    id: "CRM-001",
    client: "Дмитрий Соколов",
    startSum: "5",
    dop1Sum: "BTC",
    endSum: "→  460 000",
    dop2Sum: "RUB",
    stat: "ФИКС",
    statColor: "#1E40AF",
    date: "2023-10-01",
    manager: "Менеджер 1",
  },
  {
    id: "CRM-002",
    client: "Сахарова Валерия",
    startSum: "2342",
    dop1Sum: "TRC",
    endSum: "→  480 000",
    dop2Sum: "RUB",
    stat: "AML-OK",
    statColor: "#166534",
    date: "2023-10-01",
    manager: "Менеджер 2",
  },
  {
    id: "CRM-003",
    client: "Кузнецов Владислав",
    startSum: "340 000",
    dop1Sum: "RUB",
    endSum: "→  2 321",
    dop2Sum: "TRC",
    stat: "AML-BAD",
    statColor: "#BE123C",
    date: "2023-10-01",
    manager: "Менеджер 3",
  },
  {
    id: "CRM-004",
    client: "Федоров Сергей",
    startSum: "3 400",
    dop1Sum: "TRC",
    endSum: "→  650 000",
    dop2Sum: "RUB",
    stat: "Верификация",
    statColor: "#A16207",
    date: "2023-10-01",
    manager: "Менеджер 3",
  },
  {
    id: "CRM-005",
    client: "Филатова Арина",
    startSum: "430 000",
    dop1Sum: "RUB",
    endSum: "→  5 043",
    dop2Sum: "ERC",
    stat: "Получить валюту",
    statColor: "#7E22C1",
    date: "2023-10-01",
    manager: "Менеджер 2",
  },
  {
    id: "CRM-006",
    client: "Крылов Павел",
    startSum: "230 000",
    dop1Sum: "RUB",
    endSum: "→  4 043",
    dop2Sum: "ERC",
    stat: "Выплата клиенту",
    statColor: "#0369A1",
    date: "2023-10-01",
    manager: "Менеджер 2",
  },
];
const notifyItems = [
  {
    startText: "Заявка",
    dopText: "CRM-003",
    endText: "требует уточнения данных",
  },
  {
    startText: "AML проверка для",
    dopText: "CRM-004",
    endText: "не пройдена",
  },
  {
    startText: "Выплата по заявке ",
    dopText: "CRM-005",
    endText: "ожидает подтверждения",
  },
  {
    startText: "AML проверка для ",
    dopText: "CRM-004",
    endText: "не пройдена",
  },
  {
    startText: "Выплата по заявке",
    dopText: "CRM-005",
    endText: "ожидает подтверждения",
  },
  {
    startText: "Выплата по заявке",
    dopText: "CRM-005",
    endText: "ожидает подтверждения",
  },
];

export {
  navItems,
  navItems_faq,
  chatIcons_1,
  chatIcons_2,
  chatItems,
  statItems,
  applicationItems,
  notifyItems,
};
