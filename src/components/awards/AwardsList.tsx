"use client";

import { awards } from "@/content/awards";
import { AwardZigZag } from "@/components/awards/AwardZigZag";

export function AwardsList() {
  return (
    <div className="mt-6">
      {awards.map((award, index) => (
        <AwardZigZag key={award.id} award={award} index={index} />
      ))}
    </div>
  );
}
