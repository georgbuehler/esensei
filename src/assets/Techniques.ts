export interface Technique {
  RankNumber: number;
  Rank: string;
  Mode: string;
  Attack: string;
  Defense: string;
  Priority: number;
  ModeAudioURL: string;
  AttackAudioURL: string;
  DefenseAudioURL: string;
}

export const getTechniques = (
  level: number = 5,
  includeLower: boolean = true
): Technique[] => {
  let filteredTechniques: Technique[] = [];
  if (includeLower) {
    filteredTechniques = techniques.filter(
      (technique: Technique) => technique.RankNumber >= level
    );
  } else {
    filteredTechniques = techniques.filter(
      (technique: Technique) => technique.RankNumber == level
    );
  }
  console.log(filteredTechniques);
  return filteredTechniques;
};

const techniques: Technique[] = [
  {
    RankNumber: 3,
    Rank: "Third Kyu",
    Mode: "Tachi waza",
    Attack: "Yokomenuchi",
    Defense: "Iriminage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Yokomenuchi.mp3",
    DefenseAudioURL: "Iriminage.mp3",
  },
  {
    RankNumber: 4,
    Rank: "Fourth Kyu",
    Mode: "Tachi waza",
    Attack: "Yokomenuchi",
    Defense: "Shihonage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Yokomenuchi.mp3",
    DefenseAudioURL: "Shihonage.mp3",
  },
  {
    RankNumber: 2,
    Rank: "Second Kyu",
    Mode: "Tachi waza",
    Attack: "Shomenuchi",
    Defense: "Kaitennage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Kaitennage.mp3",
  },
  {
    RankNumber: 2,
    Rank: "Second Kyu",
    Mode: "Tachi waza",
    Attack: "Ushiro Tekubitori",
    Defense: "Jujinage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "UshiroTekubitori.mp3",
    DefenseAudioURL: "Jujinage.mp3",
  },
  {
    RankNumber: 4,
    Rank: "Fourth Kyu",
    Mode: "Tachi waza",
    Attack: "Tsuki",
    Defense: "Iriminage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Tsuki.mp3",
    DefenseAudioURL: "Iriminage.mp3",
  },
  {
    RankNumber: 1,
    Rank: "First Kyu",
    Mode: "Tachi waza",
    Attack: "(any attack)",
    Defense: "Koshinage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "AnyAttack.mp3",
    DefenseAudioURL: "Koshinage.mp3",
  },
  {
    RankNumber: 5,
    Rank: "Fifth Kyu",
    Mode: "Tachi waza",
    Attack: "Katatatori",
    Defense: "Shihonage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Katatatori.mp3",
    DefenseAudioURL: "Shihonage.mp3",
  },
  {
    RankNumber: 5,
    Rank: "Fifth Kyu",
    Mode: "Tachi waza",
    Attack: "Ushiro Tekubitori",
    Defense: "Kotegaishi",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "UshiroTekubitori.mp3",
    DefenseAudioURL: "Kotegaishi.mp3",
  },
  {
    RankNumber: 2,
    Rank: "Second Kyu",
    Mode: "Tachi waza",
    Attack: "Yokomenuchi",
    Defense: "Gokyo",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Yokomenuchi.mp3",
    DefenseAudioURL: "Gokyo.mp3",
  },
  {
    RankNumber: 1,
    Rank: "First Kyu",
    Mode: "Tachi waza",
    Attack: "Morotetori",
    Defense: "(any defense)",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Morotetori.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: 5,
    Rank: "Fifth Kyu",
    Mode: "Tachi waza",
    Attack: "Tsuki",
    Defense: "Kotegaishi",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Tsuki.mp3",
    DefenseAudioURL: "Kotegaishi.mp3",
  },
  {
    RankNumber: 4,
    Rank: "Fourth Kyu",
    Mode: "Tachi waza",
    Attack: "Shomenuchi",
    Defense: "Nikyo",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Nikyo.mp3",
  },
  {
    RankNumber: 2,
    Rank: "Second Kyu",
    Mode: "Tachi waza",
    Attack: "Morotetori",
    Defense: "Nikyo",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Morotetori.mp3",
    DefenseAudioURL: "Nikyo.mp3",
  },
  {
    RankNumber: 4,
    Rank: "Fourth Kyu",
    Mode: "Tachi waza",
    Attack: "Ushiro Ryokatatori",
    Defense: "Kotegaishi",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "UshiroRyokatatori.mp3",
    DefenseAudioURL: "Kotegaishi.mp3",
  },
  {
    RankNumber: 4,
    Rank: "Fourth Kyu",
    Mode: "Tachi waza",
    Attack: "Ushiro Tekubitori",
    Defense: "Sankyo",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "UshiroTekubitori.mp3",
    DefenseAudioURL: "Sankyo.mp3",
  },
  {
    RankNumber: 1,
    Rank: "First Kyu",
    Mode: "Tachi waza",
    Attack: "Yokomenuchi",
    Defense: "(any defense)",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Yokomenuchi.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: 1,
    Rank: "First Kyu",
    Mode: "Tachi waza",
    Attack: "Tsuki",
    Defense: "(any defense)",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Tsuki.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: 1,
    Rank: "First Kyu",
    Mode: "Tachi waza",
    Attack: "Katatori Menuchi",
    Defense: "(any defense)",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "KatatoriMenuchi.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: 2,
    Rank: "Second Kyu",
    Mode: "Tachi waza",
    Attack: "Shomenuchi",
    Defense: "Shihonage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Shihonage.mp3",
  },
  {
    RankNumber: 2,
    Rank: "Second Kyu",
    Mode: "Tachi waza",
    Attack: "Ushiro Kumishime",
    Defense: "Koshinage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "UshiroKumishime.mp3",
    DefenseAudioURL: "Koshinage.mp3",
  },
  {
    RankNumber: 5,
    Rank: "Fifth Kyu",
    Mode: "Tachi waza",
    Attack: "Morotetori",
    Defense: "Kokyunage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Morotetori.mp3",
    DefenseAudioURL: "Kokyunage.mp3",
  },
  {
    RankNumber: 3,
    Rank: "Third Kyu",
    Mode: "Tachi waza",
    Attack: "Morotetori",
    Defense: "Iriminage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Morotetori.mp3",
    DefenseAudioURL: "Iriminage.mp3",
  },
  {
    RankNumber: 5,
    Rank: "Fifth Kyu",
    Mode: "Tachi waza",
    Attack: "Ryotetori",
    Defense: "Tenchinage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Ryotetori.mp3",
    DefenseAudioURL: "Tenchinage.mp3",
  },
  {
    RankNumber: 3,
    Rank: "Third Kyu",
    Mode: "Tachi waza",
    Attack: "Ushiro Ryokatatori",
    Defense: "Sankyo",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "UshiroRyokatatori.mp3",
    DefenseAudioURL: "Sankyo.mp3",
  },
  {
    RankNumber: 3,
    Rank: "Third Kyu",
    Mode: "Tachi waza",
    Attack: "Tsuki",
    Defense: "Kaitennage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Tsuki.mp3",
    DefenseAudioURL: "Kaitennage.mp3",
  },
  {
    RankNumber: 5,
    Rank: "Fifth Kyu",
    Mode: "Tachi waza",
    Attack: "Shomenuchi",
    Defense: "Iriminage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Iriminage.mp3",
  },
  {
    RankNumber: 5,
    Rank: "Fifth Kyu",
    Mode: "Tachi waza",
    Attack: "Shomenuchi",
    Defense: "Ikkyo",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Ikkyo.mp3",
  },
  {
    RankNumber: 1,
    Rank: "First Kyu",
    Mode: "Tachi waza",
    Attack: "Ryotetori",
    Defense: "(any defense)",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Ryotetori.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: 1,
    Rank: "First Kyu",
    Mode: "Tachi waza",
    Attack: "Shomenuchi",
    Defense: "(any defense)",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: 2,
    Rank: "Second Kyu",
    Mode: "Tachi waza",
    Attack: "Ushiro Tekubitori",
    Defense: "Shihonage",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "UshiroTekubitori.mp3",
    DefenseAudioURL: "Shihonage.mp3",
  },
  {
    RankNumber: 3,
    Rank: "Third Kyu",
    Mode: "Tachi waza",
    Attack: "Shomenuchi",
    Defense: "Sankyo",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Sankyo.mp3",
  },
  {
    RankNumber: 3,
    Rank: "Third Kyu",
    Mode: "Tachi waza",
    Attack: "Yokomenuchi",
    Defense: "Kotegaishi",
    Priority: 1,
    ModeAudioURL: "Tachiwaza.mp3",
    AttackAudioURL: "Yokomenuchi.mp3",
    DefenseAudioURL: "Kotegaishi.mp3",
  },
  {
    RankNumber: 4,
    Rank: "Fourth Kyu",
    Mode: "Suwari waza",
    Attack: "Shomenuchi",
    Defense: "Ikkyo",
    Priority: 2,
    ModeAudioURL: "Suwariwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Ikkyo.mp3",
  },
  {
    RankNumber: 4,
    Rank: "Fourth Kyu",
    Mode: "Suwari waza",
    Attack: "Katatori",
    Defense: "Nikyo",
    Priority: 2,
    ModeAudioURL: "Suwariwaza.mp3",
    AttackAudioURL: "Katatori.mp3",
    DefenseAudioURL: "Nikyo.mp3",
  },
  {
    RankNumber: 0,
    Rank: "First Dan",
    Mode: "Suwari waza",
    Attack: "Shomenuchi",
    Defense: "Sankyo",
    Priority: 2,
    ModeAudioURL: "Suwariwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Sankyo.mp3",
  },
  {
    RankNumber: 3,
    Rank: "Third Kyu",
    Mode: "Suwari waza",
    Attack: "Shomenuchi",
    Defense: "Nikyo",
    Priority: 2,
    ModeAudioURL: "Suwariwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Nikyo.mp3",
  },
  {
    RankNumber: 0,
    Rank: "First Dan",
    Mode: "Suwari waza",
    Attack: "Shomenuchi",
    Defense: "Ikkyo",
    Priority: 2,
    ModeAudioURL: "Suwariwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Ikkyo.mp3",
  },
  {
    RankNumber: 4,
    Rank: "Fourth Kyu",
    Mode: "Suwari waza",
    Attack: "Katatori",
    Defense: "Sankyo",
    Priority: 2,
    ModeAudioURL: "Suwariwaza.mp3",
    AttackAudioURL: "Katatori.mp3",
    DefenseAudioURL: "Sankyo.mp3",
  },
  {
    RankNumber: 3,
    Rank: "Third Kyu",
    Mode: "Suwari waza",
    Attack: "Shomenuchi",
    Defense: "Iriminage",
    Priority: 2,
    ModeAudioURL: "Suwariwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Iriminage.mp3",
  },
  {
    RankNumber: 0,
    Rank: "First Dan",
    Mode: "Suwari waza",
    Attack: "Shomenuchi",
    Defense: "Gokyo",
    Priority: 2,
    ModeAudioURL: "Suwariwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Gokyo.mp3",
  },
  {
    RankNumber: 0,
    Rank: "First Dan",
    Mode: "Suwari waza",
    Attack: "Shomenuchi",
    Defense: "Yankyo",
    Priority: 2,
    ModeAudioURL: "Suwariwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Yankyo.mp3",
  },
  {
    RankNumber: 0,
    Rank: "First Dan",
    Mode: "Suwari waza",
    Attack: "Shomenuchi",
    Defense: "Nikyo",
    Priority: 2,
    ModeAudioURL: "Suwariwaza.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Nikyo.mp3",
  },
  {
    RankNumber: 2,
    Rank: "Second Kyu",
    Mode: "Hanmi handachi",
    Attack: "Yokomenuchi",
    Defense: "Kotegaishi",
    Priority: 3,
    ModeAudioURL: "HanmiHandachi.mp3",
    AttackAudioURL: "Yokomenuchi.mp3",
    DefenseAudioURL: "Kotegaishi.mp3",
  },
  {
    RankNumber: 2,
    Rank: "Second Kyu",
    Mode: "Hanmi handachi",
    Attack: "Katatatori",
    Defense: "Nikyo",
    Priority: 3,
    ModeAudioURL: "HanmiHandachi.mp3",
    AttackAudioURL: "Katatatori.mp3",
    DefenseAudioURL: "Nikyo.mp3",
  },
  {
    RankNumber: 2,
    Rank: "Second Kyu",
    Mode: "Hanmi handachi",
    Attack: "Shomenuchi",
    Defense: "Iriminage",
    Priority: 3,
    ModeAudioURL: "HanmiHandachi.mp3",
    AttackAudioURL: "Shomenuchi.mp3",
    DefenseAudioURL: "Iriminage.mp3",
  },
  {
    RankNumber: 3,
    Rank: "Third Kyu",
    Mode: "Hanmi handachi",
    Attack: "Katatatori",
    Defense: "Shihonage",
    Priority: 3,
    ModeAudioURL: "HanmiHandachi.mp3",
    AttackAudioURL: "Katatatori.mp3",
    DefenseAudioURL: "Shihonage.mp3",
  },
  {
    RankNumber: 3,
    Rank: "Third Kyu",
    Mode: "Hanmi handachi",
    Attack: "Katatatori",
    Defense: "Kaitennage",
    Priority: 3,
    ModeAudioURL: "HanmiHandachi.mp3",
    AttackAudioURL: "Katatatori.mp3",
    DefenseAudioURL: "Kaitennage.mp3",
  },
  {
    RankNumber: 1,
    Rank: "First Kyu",
    Mode: "Hanmi handachi",
    Attack: "Ushiro Ryokatatori",
    Defense: "(any defense)",
    Priority: 3,
    ModeAudioURL: "HanmiHandachi.mp3",
    AttackAudioURL: "UshiroRyokatatori.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: 1,
    Rank: "First Kyu",
    Mode: "Tanto tori",
    Attack: "(any attack)",
    Defense: "(any defense)",
    Priority: 4,
    ModeAudioURL: "Tantotori.mp3",
    AttackAudioURL: "AnyAttack.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: 0,
    Rank: "First Dan",
    Mode: "Jo tori",
    Attack: "(any attack)",
    Defense: "(any defense)",
    Priority: 5,
    ModeAudioURL: "Jotori.mp3",
    AttackAudioURL: "AnyAttack.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: 0,
    Rank: "First Dan",
    Mode: "Tachi tori",
    Attack: "(any attack)",
    Defense: "(any defense)",
    Priority: 6,
    ModeAudioURL: "Tachitori.mp3",
    AttackAudioURL: "AnyAttack.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: 0,
    Rank: "First Dan",
    Mode: "Jo waza",
    Attack: "(any attack)",
    Defense: "(any defense)",
    Priority: 7,
    ModeAudioURL: "Jowaza.mp3",
    AttackAudioURL: "AnyAttack.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: 0,
    Rank: "First Dan",
    Mode: "Henka waza",
    Attack: "(any attack)",
    Defense: "(any defense)",
    Priority: 8,
    ModeAudioURL: "Henkawaza.mp3",
    AttackAudioURL: "AnyAttack.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: -1,
    Rank: "Second Dan",
    Mode: "Kaeshi waza",
    Attack: "(any attack)",
    Defense: "(any defense)",
    Priority: 9,
    ModeAudioURL: "Kaeshiwaza.mp3",
    AttackAudioURL: "AnyAttack.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: -1,
    Rank: "Second Dan",
    Mode: "Tachi tori (2)",
    Attack: "(any attack)",
    Defense: "(any defense)",
    Priority: 10,
    ModeAudioURL: "Tachitori.mp3",
    AttackAudioURL: "AnyAttack.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: 2,
    Rank: "Second Kyu",
    Mode: "Randori (2)",
    Attack: "(any attack)",
    Defense: "(any defense)",
    Priority: 20,
    ModeAudioURL: "Randori.mp3",
    AttackAudioURL: "AnyAttack.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: 1,
    Rank: "First Kyu",
    Mode: "Randori (3)",
    Attack: "(any attack)",
    Defense: "(any defense)",
    Priority: 21,
    ModeAudioURL: "Randori.mp3",
    AttackAudioURL: "AnyAttack.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: 0,
    Rank: "First Dan",
    Mode: "Randori (4)",
    Attack: "(any attack)",
    Defense: "(any defense)",
    Priority: 22,
    ModeAudioURL: "Randori.mp3",
    AttackAudioURL: "AnyAttack.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
  {
    RankNumber: -1,
    Rank: "Second Dan",
    Mode: "Randori (5)",
    Attack: "(any attack)",
    Defense: "(any defense)",
    Priority: 23,
    ModeAudioURL: "Randori.mp3",
    AttackAudioURL: "AnyAttack.mp3",
    DefenseAudioURL: "AnyDefense.mp3",
  },
];

export default techniques;
