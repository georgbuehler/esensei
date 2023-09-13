export interface ISettings {
  audioPath: string;
  defaultSeconds: number;
}

const Settings: ISettings = {
  audioPath: "/audio/",
  defaultSeconds: 15,
};

export default Settings;
