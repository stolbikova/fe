export function generateLocationsNearAmsterdam() {
  const baseLatitude = 52.3676;
  const baseLongitude = 4.9041;
  const locations = [];

  for (let i = 0; i < 10; i++) {
    const randomLat = baseLatitude + (Math.random() - 0.5) * 0.1; // Variation by 0.1 degree
    const randomLng = baseLongitude + (Math.random() - 0.5) * 0.1; // Variation by 0.1 degree

    const locationObject = {
      latitude: randomLat,
      longitude: randomLng,
    };

    locations.push(locationObject);
  }

  return locations;
}
