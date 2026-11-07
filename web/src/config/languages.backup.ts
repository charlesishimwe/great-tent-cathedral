export type Language = {
  name: string;
  nativeName: string;
  handle: string | null;
  status: "active" | "coming-soon";
};

export const languages: Language[] = [
  { name: "English", nativeName: "English", handle: "@lgccenglish", status: "active" },
  { name: "Portuguese", nativeName: "Português", handle: "@lgccportuguese", status: "active" },
  { name: "Haitian Creole", nativeName: "Kreyòl", handle: "@lgccKreyol", status: "active" },
  { name: "Kinyarwanda", nativeName: "Ikinyarwanda", handle: "@lgcckinyarwanda", status: "active" },
  { name: "French", nativeName: "Français", handle: "@lgccfrances", status: "active" },
  { name: "Luganda", nativeName: "Luganda", handle: "@lgccLuganda", status: "active" },
  { name: "Swahili", nativeName: "Kiswahili", handle: null, status: "coming-soon" },
  { name: "Kirundi", nativeName: "Kirundi", handle: null, status: "coming-soon" },
  { name: "Spanish", nativeName: "Español", handle: null, status: "coming-soon" },
];
