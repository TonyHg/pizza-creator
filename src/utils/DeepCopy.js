export default function deepCopyOf(object) {
  return JSON.parse(JSON.stringify(object));
}