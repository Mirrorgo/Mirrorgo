import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ReactNode } from "react";

type FamiliarityLevel = 1 | 2 | 3;

// Define the props type for TechCard, including children
type TechCardProps = {
  children?: ReactNode; // Make children optional
  description: string;
  familiarityLevel?: FamiliarityLevel;
};

// FamiliarityMeter Component
const FamiliarityMeter = ({ level }: { level: FamiliarityLevel }) => {
  const totalSegments = 3;
  const filledSegments = level;

  // Generate meter segments
  const segments = Array.from({ length: totalSegments }).map((_, index) => (
    <div
      key={index}
      className={`h-1 w-0.5 mr-1 ${
        index < filledSegments ? "bg-yellow-400" : "bg-background"
      } rounded-full`}
    />
  ));

  return (
    <div className="flex flex-col-reverse gap-0.5 items-center ml-1.5">
      {segments}
    </div>
  );
};

function TechCard({
  children,
  description,
  familiarityLevel = 3,
}: TechCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          {description}
          <FamiliarityMeter level={familiarityLevel} />
        </Button>
      </HoverCardTrigger>
      {/* Conditionally render HoverCardContent based on children */}
      {children && <HoverCardContent>{children}</HoverCardContent>}
    </HoverCard>
  );
}

export default TechCard;
