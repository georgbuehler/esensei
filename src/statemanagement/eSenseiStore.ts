import { createWithEqualityFn } from "zustand/traditional";
import { devtools, persist } from "zustand/middleware";
import { Technique, getTechniques } from "../assets/Techniques";

export interface eSenseiState {
  testInProgress: boolean;
  setTestInProgress: (inProgress: boolean) => void;
  testLevel: number | undefined;
  setTestLevel: (level: number) => void;
  includeLower: boolean;
  setIncludeLower: (includeLower: boolean) => void;
  currentTechnique: number;
  setCurrentTechnique: (technique: number) => void;
  testTechniques: Technique[];
  setTestTechniques: (techniques: Technique[]) => void;
  testComplete: boolean;
  setTestComplete: (testComplete: boolean) => void;
  timerInterval: number;
  setTimerInterval: (intervalAsString: string, interval: number) => void;
  startTest: () => void;
  stopTest: () => void;
  clearTestComplete: () => void;
  nextTechnique: () => void;
}

const useESenseiStore = createWithEqualityFn<eSenseiState>()(
  devtools(
    persist(
      (set) => ({
        testInProgress: false,
        setTestInProgress: (inProgress) => set({ testInProgress: inProgress }),
        testLevel: undefined,
        setTestLevel: (level) => set({ testLevel: level }),
        includeLower: false,
        setIncludeLower: (includeLower) => set({ includeLower: includeLower }),
        currentTechnique: 0,
        setCurrentTechnique: (currentTechnique) =>
          set({ currentTechnique: currentTechnique }),
        testTechniques: [] as Technique[],
        setTestTechniques: (techniques) => set({ testTechniques: techniques }),
        testComplete: false,
        setTestComplete: (testComplete) => set({ testComplete: testComplete }),
        timerInterval: 60,
        setTimerInterval: (_, interval) => set({ timerInterval: interval }),
        startTest: () =>
          set((state) => ({
            testTechniques: getTechniques(state.testLevel, state.includeLower),
            testInProgress: true,
          })),
        stopTest: () => set({ testInProgress: false }),
        clearTestComplete: () =>
          set({ testInProgress: false, testComplete: false }),
        nextTechnique: () =>
          set((state) => {
            if (state.currentTechnique == state.testTechniques.length - 1)
              return { testComplete: true };
            else return { currentTechnique: state.currentTechnique + 1 };
          }),
      }),

      { name: "eSensei-storage" }
    )
  ),
  Object.is
);

export default useESenseiStore;
