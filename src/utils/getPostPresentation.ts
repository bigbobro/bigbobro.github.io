type PostData = {
  title: string;
  tags: string[];
};

/** Separate the issue label from a weekly headline without changing its source title. */
export function getPostPresentation({ title, tags }: PostData) {
  const isWeekly = tags.includes("weekly-ai-signal");
  const match = isWeekly
    ? title.match(/^(\d{4})-W(\d{1,2})\s+AI\s*信号观察[：:]\s*(.+)$/u)
    : null;

  return {
    title: match?.[3] || title,
    week: match ? `${match[1]} W${match[2].padStart(2, "0")}` : null,
    isWeekly,
  };
}
