export const themes = (color: string) => {
  const theme = localStorage.getItem('theme');
  if (theme === 'default' || !theme) {
    return Colors[color as keyof typeof Colors];
  }
  if (theme === 'elegantNight') {
    return ElegantNight[color as keyof typeof Colors];
  }

  return LightBlue[color as keyof typeof Colors];
};

export enum Colors {
  Primary = 'rgb(89 52 154)',
  PrimaryVariant = 'rgb(115 41 123)',
  Secondary = 'rgb(38 75 158)',
  Background = '#201630',
  GradationFrom = 'rgb(115 41 123)',
  GradationTo = 'rgb(15 31 67 / 90%)',
  Accent = '#ff8900',
  Danger = '#ca285a',
  White = '#fff',
  Gray = '#ddd',
  Dark = '#222',
  Trance = '#ffffff59',
}

export enum LightBlue {
  Primary = '#99d3df',
  PrimaryVariant = '#88bbd6',
  Secondary = '#88d6bb',
  Background = '#ddd',
  GradationFrom = 'rgb(136 187 214)',
  GradationTo = 'rgb(17 132 183 / 90%)',
  Accent = '#b69767',
  Danger = '#d3879f',
  White = '#fff',
  Gray = '#ddd',
  Dark = '#296f95',
  Trance = '#ffffff59',
}

export enum ElegantNight {
  Primary = '#F3E7CD',
  PrimaryVariant = '#957D5B',
  Secondary = '#876400',
  Background = '#2e2e20',
  GradationFrom = '#F3E7CD',
  GradationTo = 'rgb(149 125 91 / 90%)',
  Accent = '#dbac77',
  Danger = '#ba2c59',
  White = '#fff',
  Gray = '#293241',
  Dark = '#111',
  Trance = '#ffffff59',
}

export default themes;
