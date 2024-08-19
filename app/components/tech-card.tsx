import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ReactNode } from "react";

// Define the props type for TechCard, including children
type TechCardProps = {
  children?: ReactNode; // Make children optional
  description: string;
};

function TechCard({ children, description }: TechCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">{description}</Button>
      </HoverCardTrigger>
      {/* Conditionally render HoverCardContent based on children */}
      {children && <HoverCardContent>{children}</HoverCardContent>}
    </HoverCard>
  );
}

export default TechCard;
