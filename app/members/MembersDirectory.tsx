"use client";

import { useState } from "react";
import { memberGroups } from "./members-data";
import MemberAccordion from "./MemberAccordion";

export default function MembersDirectory() {
  // Multi-open accordion state: group 01 ('senior-associates') open by default
  const [openGroupIds, setOpenGroupIds] = useState<Set<string>>(
    () => new Set(["senior-associates"])
  );

  const toggleGroup = (groupId: string) => {
    setOpenGroupIds((prev) => {
      const next = new Set(prev);
      if (next.has(groupId)) {
        next.delete(groupId);
      } else {
        next.add(groupId);
      }
      return next;
    });
  };

  return (
    <section
      id="members-directory"
      className="relative z-10 w-full py-[clamp(3rem,6vh,5rem)]"
      aria-labelledby="directory-heading"
    >
      {/* Section Header / Eyebrow */}
      <div className="mb-6 flex items-center justify-between">
        <h2
          id="directory-heading"
          className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-ces-gold"
        >
          Members Directory
        </h2>
      </div>

      {/* Directory Accordion Rows */}
      <div className="border-t border-white/10">
        {memberGroups.map((group) => (
          <MemberAccordion
            key={group.id}
            group={group}
            isOpen={openGroupIds.has(group.id)}
            onToggle={() => toggleGroup(group.id)}
          />
        ))}
      </div>
    </section>
  );
}
