import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TechCard from "./tech-card";
import { ReactNode } from "react";
function TechStackList() {
  return (
    <div className="w-5/6 md:w-3/4 mx-auto">
      <Heading>Frontend Technologies</Heading>
      {/* TODO */}
      {/* 关键技术在上面显示图标和文字，点击跳转展开accordion */}
      {/* 引导，当滚动到About Me的时候触发引导，告诉可以把鼠标放上去查看对这个的了解程度，也就是做过什么 */}
      {/* 右侧一个小的能量条一样的东西，金色？,代表熟悉程度,有三段,只有一段代表只是了解,三段代表做过很多东西 */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="basic-technologies">
          <AccordionTrigger>Basic Technologies and Framework</AccordionTrigger>
          <AccordionContent>
            <TechCard description="HTML"></TechCard>
            <TechCard description="CSS"></TechCard>
            <TechCard description="Javascript"></TechCard>
            <TechCard description="Typescript"></TechCard>
            <TechCard description="React"></TechCard>
            <TechCard description="Next.js"></TechCard>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="css">
          <AccordionTrigger>CSS</AccordionTrigger>
          <AccordionContent>
            <TechCard description="Tailwind"></TechCard>
            <TechCard description="Less"></TechCard>
            <TechCard description="SCSS"></TechCard>
            <TechCard description="CSS Module"></TechCard>
            <TechCard description="Styled Components"></TechCard>
            <TechCard description="Emotion"></TechCard>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="ui-library">
          <AccordionTrigger>UI Libraries and Components</AccordionTrigger>
          <AccordionContent>
            <TechCard description="Shadcn"></TechCard>
            <TechCard description="Ant Design / Ant Design Pro"></TechCard>
            <TechCard description="MUI"></TechCard>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="state-management">
          <AccordionTrigger>State Management</AccordionTrigger>
          <AccordionContent>
            <TechCard description="Zustand"></TechCard>
            <TechCard description="Jotai"></TechCard>
            <TechCard description="Redux"></TechCard>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="scaffold-and-build-tools-and-test">
          <AccordionTrigger>Scaffold & Build Tools & Test</AccordionTrigger>
          <AccordionContent>
            <TechCard description="Vite"></TechCard>
            <TechCard description="pnpm"></TechCard>
            <TechCard description="Husky"></TechCard>
            <TechCard description="ESLint"></TechCard>
            <TechCard description="Prettier"></TechCard>
            <TechCard description="Jest"></TechCard>
            <TechCard description="Vitest"></TechCard>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="other">
          <AccordionTrigger>Other Frontend Technologies</AccordionTrigger>
          <AccordionContent>
            <TechCard description="ECharts"></TechCard>
            <TechCard description="D3"></TechCard>
            <TechCard description="Slate.js"></TechCard>
            <TechCard description="Docusaurus"></TechCard>
            <TechCard description="Howler.js"></TechCard>
            <TechCard description="Serwist"></TechCard>
            <TechCard description="Dnd Kit"></TechCard>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Heading>Backend Technologies</Heading>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="javascript">
          <AccordionTrigger>Javascript</AccordionTrigger>
          <AccordionContent>
            <TechCard description="Node"></TechCard>
            <TechCard description="NestJS"></TechCard>
            <TechCard description="Express"></TechCard>
            <TechCard description="Prisma"></TechCard>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="java-and-python">
          <AccordionTrigger>Java & Python</AccordionTrigger>
          <AccordionContent>
            <TechCard description="SpringBoot"></TechCard>
            <TechCard description="MyBatis/MyBatis-Plus"></TechCard>
            <TechCard description="Flask"></TechCard>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Heading>Other Technologies</Heading>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="other">
          <AccordionTrigger>Other</AccordionTrigger>
          <AccordionContent>
            <TechCard description="Git"></TechCard>
            <TechCard description="Linux"></TechCard>
            <TechCard description="Nginx"></TechCard>
            <TechCard description="WSL"></TechCard>
            <TechCard description="Docker"></TechCard>
            <TechCard description="Curl"></TechCard>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

const Heading = ({ children }: { children: ReactNode }) => (
  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-9">
    {children}
  </h3>
);

export default TechStackList;
