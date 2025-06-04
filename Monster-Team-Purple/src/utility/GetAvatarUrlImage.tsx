// Av Sanias logik för att matcha user id med med url så har ja gjort en liten utility funktion.
// Som används i båda filerna för att få samma bild på user samt att
//  filerna är mer dynamiska efter ändrad id på user eller ny user så får båda kompunenterna samma bild.
export function getAvatarUrl(userId: string) {
  return `https://i.pravatar.cc/150?u=${userId}`;
}
