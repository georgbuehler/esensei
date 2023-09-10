export interface ISettings {
  audioPath: string;
  defaultSeconds: number;
}

const Settings: ISettings = {
  audioPath: "/audio/",
  defaultSeconds: 60,
};

export default Settings;
