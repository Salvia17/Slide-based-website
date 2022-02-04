const natureNames = [
  "Nature",
  "Beach",
  "Desert",
  "Forest",
  "Meadow",
  "Mountains",
  "Ocean",
  "Snow"
]

new fullpage("#fullpage", {
  navigation: true,
  navigationPosition: "right",
  showActiveTooltip: true,
  navigationTooltips: natureNames,
})