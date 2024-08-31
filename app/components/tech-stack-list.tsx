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
    <div className="p-2">
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
            <TechCard description="Typescript" level={2}></TechCard>
            <TechCard description="React"></TechCard>
            <TechCard description="Next.js"></TechCard>
            <TechCard description="Vue.js" level={1}></TechCard>
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
            <TechCard description="MUI" level={1}></TechCard>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="state-management">
          <AccordionTrigger>State Management</AccordionTrigger>
          <AccordionContent>
            <TechCard description="Zustand"></TechCard>
            <TechCard description="Jotai" level={2}></TechCard>
            <TechCard description="Redux" level={1}></TechCard>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="scaffold-and-build-tools-and-test">
          <AccordionTrigger>Scaffold & Build Tools & Test</AccordionTrigger>
          <AccordionContent>
            <TechCard description="Vite"></TechCard>
            <TechCard description="pnpm"></TechCard>
            <TechCard description="yarn"></TechCard>
            <TechCard description="Husky" level={2}></TechCard>
            <TechCard description="ESLint" level={1}></TechCard>
            <TechCard description="Prettier"></TechCard>
            <TechCard description="Jest" level={1}></TechCard>
            <TechCard description="Vitest" level={1}></TechCard>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="other">
          <AccordionTrigger>Other Frontend Technologies</AccordionTrigger>
          <AccordionContent>
            <TechCard description="ECharts" level={2}></TechCard>
            <TechCard description="D3" level={1}></TechCard>
            <TechCard description="Slate.js" level={2}></TechCard>
            <TechCard description="Docusaurus"></TechCard>
            <TechCard description="Howler.js" level={2}></TechCard>
            <TechCard description="Serwist" level={1}></TechCard>
            <TechCard description="Dnd Kit" level={2}></TechCard>
            <TechCard description="Monaco Editor" level={1}></TechCard>
            <TechCard description="Slidev" level={2}></TechCard>
            <TechCard description="React Router" level={2}></TechCard>
            <TechCard description="Immer" level={2}></TechCard>
            <TechCard description="Puppeteer" level={2}></TechCard>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Heading>Backend Technologies</Heading>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="javascript">
          <AccordionTrigger>Javascript</AccordionTrigger>
          <AccordionContent>
            <TechCard description="Node" level={2}></TechCard>
            <TechCard description="NestJS"></TechCard>
            <TechCard description="Express"></TechCard>
            <TechCard description="Prisma"></TechCard>
            <TechCard description="pm2" level={2}></TechCard>
            <TechCard description="zx" level={2}></TechCard>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="java-and-python">
          <AccordionTrigger>Java & Python</AccordionTrigger>
          <AccordionContent>
            <TechCard description="SpringBoot" level={2}></TechCard>
            <TechCard description="MyBatis/MyBatis-Plus" level={2}></TechCard>
            <TechCard description="JUnit" level={1}></TechCard>
            <TechCard description="Flask" level={2}></TechCard>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="database">
          <AccordionTrigger>Database</AccordionTrigger>
          <AccordionContent>
            <TechCard description="MySQL" level={1}></TechCard>
            <TechCard description="PostgreSQL" level={1}></TechCard>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Heading>Other Technologies</Heading>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="other-languages">
          <AccordionTrigger>Other Languages</AccordionTrigger>
          <AccordionContent>
            <TechCard description="Prolog" level={2}></TechCard>
            <TechCard description="Haskell" level={2}></TechCard>
            <TechCard description="Kotlin" level={1}></TechCard>
            <TechCard description="C" level={1}></TechCard>
            <TechCard description="Alloy" level={1}></TechCard>
            <TechCard description="Ada" level={1}></TechCard>
            <TechCard description="Netlogo" level={1}></TechCard>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="other">
          <AccordionTrigger>Other</AccordionTrigger>
          <AccordionContent>
            <TechCard description="Git"></TechCard>
            <TechCard description="Linux"></TechCard>
            <TechCard description="Nginx"></TechCard>
            <TechCard description="WSL"></TechCard>
            <TechCard description="Docker" level={2}></TechCard>
            <TechCard description="curl" level={2}></TechCard>
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
