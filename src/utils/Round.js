export default function roundToCents(total) {
  total *= 100;
  total = Math.round(total);
  return total / 100;
}