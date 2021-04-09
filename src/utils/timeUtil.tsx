const getTimeDifference = (updateAt: string): string => {
  const update = new Date(updateAt);
  const now = new Date();
  const milliseconds = Math.abs(now.getTime() - update.getTime());
  const days = milliseconds / (1000 * 3600 * 24);
  const hour = milliseconds / 1000 / 3600;
  if (hour < 24) return `Updated ${Math.floor(hour)} hours ago`;
  if (days < 30) return `Updated ${Math.floor(days)} days ago`;
  return `Updated on ${update.toISOString().split('T')[0]}`;
};
export default getTimeDifference;
