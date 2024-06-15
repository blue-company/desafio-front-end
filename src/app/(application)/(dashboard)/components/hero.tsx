'use client';

import { FirstSection } from './firstSection';
import { SecondSection } from './secondSection';

export function Hero() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-8">
        <FirstSection />
      </div>
      <div className="flex gap-8">
        <SecondSection />
      </div>
    </div>
  );
}
