'use client';

import { useEffect, useState } from 'react';

export function TimelineCountdown() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date('2027-09-08T00:00:00');
    const today = new Date();
    const days = Math.max(0, Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
    setDaysLeft(days);
  }, []);

  return (
    <div className="bg-paper border-l-4 border-burnt p-6 rounded-r my-7">
      <div className="font-serif text-4xl text-ink leading-none">
        {daysLeft === null ? '—' : `${daysLeft.toLocaleString()} days`}
      </div>
      <div className="text-sm text-body mt-2">
        Days until <strong>Fall 2027 census date</strong> (Sept 8, 2027, approximate). The 12-month clock must have started no later than this date minus 365.
      </div>
    </div>
  );
}
