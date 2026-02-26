export function getBadgeColor(calories) {
  if (calories < 400) return 'green';
  if (calories <= 800) return 'orange';
  return 'red';
}