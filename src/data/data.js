import {
  cough,
  fever,
  headache,
  safety,
  tracing,
  vaccine,
  virus,
} from "../img";

var Data = {
  navbar: {
    item1: "Emergency",
    item2: "Author",
    item3: "Dark",
  },
  info: {
    title: "Informații esențiale despre COVID",
    description:
      "COVID-19 este o boală contagioasă cauzată de sindromul respirator acut sever (SARS-CoV-2). Primul caz cunoscut a fost identificat în Wuhan, China, în decembrie 2019. De atunci, boala s-a răspândit în întreaga lume, ducând la o pandemie în curs de desfășurare.",
    image: tracing,
  },
  virusData: {
    title: "Date actualizate zilnic despre COVID",
    description:
      "Toate datele furnizate provin din API-ul disease.sh și sunt actualizate automat în fiecare zi. Pentru mai multe informații, faceți clic pe ",
    image: virus,
  },
  dataAll: {
    cases: "",
    recovered: "",
    deaths: "",
  },
  dataToday: {
    cases: "",
    recovered: "",
    deaths: "",
  },
  symptoms: {
    symptom1: {
      name: "Tuse",
      image: cough,
    },
    symptom2: {
      name: "Febră",
      image: fever,
    },
    symptom3: {
      name: "Durere",
      image: headache,
    },
  },
  vax: {
    title: "De ce să te vaccinezi?",
    description:
      "Vaccinarea împotriva COVID-19 vă poate reduce riscul de a obține și de a răspândi virusul care cauzează COVID-19. Vaccinurile pot ajuta, de asemenea, la prevenirea bolilor grave și a decesului.",
    image: vaccine,
    button1: "Programare",
    button2: "Informații",
  },
  vaxData: {
    title:
      "As of today, 123,456,78 doses of vaccine has been given in Romania. Help us to reach more people.",
    image: safety,
  },
  footer: {
    copyright: "©2022. Toate drepturile rezervate.",
  },
};

export default Data;
