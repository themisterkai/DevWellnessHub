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
      '--primary-bg-color': '#222831',
      '--secondary-bg-color': '#393E46',
      '--tertiary-bg-color': '#00969D',
      '--primary-text-color': '#EEEEEE',
      '--primary-accent-color': '#EEEEEE',
      '--secondary-accent-color': '#34DBE3',   
    },
    earth: {
      '--primary-bg-color': '#443535',
      '--secondary-bg-color': '#644E4E',
      '--tertiary-bg-color': '#937070',
      '--primary-text-color': '#FFF4DF',
      '--primary-accent-color': '#FFF4DF',
      '--secondary-accent-color': '#D7A8A8',
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
