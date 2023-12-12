export const getCurrentDate = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  return currentDate;
};

export const getYesterdayDate = () => {
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
    .toISOString()
    .split('T')[0];
  return yesterday;
};

export const millisToMinutesAndSeconds = millis => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

export const applyColorPalette = selectedPalette => {
  const colorPalettes = {
    dark: {
      '--primary-bg-color': '#000000',
      '--secondary-bg-color': '#1C1D1F',
      '--tertiary-bg-color': '#4a4d53',
      '--primary-text-color': '#F0F2F1',
      '--primary-accent-color': '#F0F2F1',
      '--secondary-accent-color': '#6F6F6F',
      /* Add more variables as needed */
    },
    light: {
      '--primary-bg-color': '#4a4d53',
      '--secondary-bg-color': '#E7E9E8',
      '--tertiary-bg-color': '#F0F2F1',
      '--primary-text-color': '#1C1D1F',
      '--primary-accent-color': '#1C1D1F',
      '--secondary-accent-color': '#6F6F6F',
      /* Add more variables as needed */
    },
    teal: {
      '--primary-bg-color': '#181C21',
      '--secondary-bg-color': '#2C2F34',
      '--tertiary-bg-color': '#019399',
      '--primary-text-color': '#DEECEC',
      '--primary-accent-color': '#DEECEC',
      '--secondary-accent-color': '#1ECFD6',   
    },
    earth: {
      '--primary-bg-color': '#332929',
      '--secondary-bg-color': '#4D3E3E',
      '--tertiary-bg-color': '#755555',
      '--primary-text-color': '#EAE0E0',
      '--primary-accent-color': '#EAE0E0',
      '--secondary-accent-color': '#D28787',   
    },
    // Add more color palettes as needed
  };

  const root = document.documentElement;
  const selectedPaletteVariables = colorPalettes[selectedPalette];

  // Apply the selected color palette variables to the root element
  for (const [property, value] of Object.entries(selectedPaletteVariables)) {
    root.style.setProperty(property, value);
  }
};
