export interface Level {
  Id: number;
  Name: string;
  EnglishTranslation: string;
}

const levels = [
  { Id: 5, Name: "Gokyu", EnglishTranslation: "Fifth Kyu" },
  { Id: 4, Name: "Yonkyu", EnglishTranslation: "Fourth Kyu" },
  { Id: 3, Name: "Sankyu", EnglishTranslation: "Third Kyu" },
  { Id: 2, Name: "Nikkyu", EnglishTranslation: "Second Kyu" },
  { Id: 1, Name: "Ikkyu", EnglishTranslation: "First Kyu" },
  { Id: 0, Name: "Shodan", EnglishTranslation: "First Dan" },
  { Id: -1, Name: "Nidan", EnglishTranslation: "Second Dan" },
];

export default levels;
