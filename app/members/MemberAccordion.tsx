"use client";

import { ChevronDown } from "lucide-react";
import type { MemberGroup } from "./members-data";
import MemberCard from "./MemberCard";

interface MemberAccordionProps {
  group: MemberGroup;
  isOpen: boolean;
  onToggle: () => void;
}

export default function MemberAccordion({
  group,
  isOpen,
  onToggle,
}: MemberAccordionProps) {
  const panelId = `panel-${group.id}`;
  const headerId = `header-${group.id}`;

  return (
    <div className="border-b border-white/10 transition-colors duration-200">
      {/* Accordion Trigger Button */}
      <h3>
        <button
          id={headerId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="group flex min-h-[64px] w-full items-center justify-between py-5 text-left transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ces-glint-blue/60"
        >
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Numeric Index */}
            <span className="font-mono text-sm sm:text-base text-ces-text-muted transition-colors duration-200 group-hover:text-ces-glint-blue">
              {group.index}
            </span>

            {/* Group Title */}
            <span className="text-lg sm:text-2xl font-medium tracking-tight text-ces-text-primary transition-colors duration-200 group-hover:text-white">
              {group.title}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            {/* Dynamic member count */}
            <span className="font-mono text-xs sm:text-sm text-ces-text-muted">
              {group.members.length} members
            </span>

            {/* Rotating Chevron */}
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ces-text-muted transition-transform duration-300 group-hover:border-white/20 group-hover:text-white ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>
        </button>
      </h3>

      {/* Expandable Panel */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="py-6 sm:py-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
