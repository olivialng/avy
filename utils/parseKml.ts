export function parseKml(kmlText: string) {
  const parser = new DOMParser();
  const xml = parser.parseFromString(kmlText, 'text/xml');

  const placemarks = Array.from(xml.getElementsByTagName('Placemark'));

  return placemarks.map(pm => {
    const name = pm.getElementsByTagName('name')[0]?.textContent;
    const coords = pm.getElementsByTagName('coordinates')[0]?.textContent;

    return {
      name,
      coordinates: coords?.trim(),
    };
  });
}
