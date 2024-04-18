export const formatTimeAgo = (dateString: string) => {
  const now = new Date();
  const date = new Date(dateString);
  const datePast = (now.getTime() - date.getTime()) / 1000;

  if (datePast < 60) return `${Math.floor(datePast)}s ago`;
  if (datePast < 3600) return `${Math.floor(datePast / 60)}m ago`;
  if (datePast <= 8640) return `${Math.floor(datePast / 3600)}h ago`;
  if (datePast > 8640) {
    const dayCount = Math.floor(datePast / 8640);
    return dayCount === 1 ? `${dayCount} day ago` : `${dayCount} days ago`;
  }
};
