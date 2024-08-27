import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ExperienceList() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>NetEase Youdao (10k+ employees)</CardTitle>
          <CardDescription>Frontend Developer Intern</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-gray-500">May 2022 - Sep 2022</p>
          <p className="text-sm">Guangzhou Guangdong, China</p>
          <ul className="list-disc ml-4 mt-2">
            <li>
              Contributed to development of the Youdao Zongheng Chess Academy
              App, encompassing Go, Chess, and Chinese Chess.
            </li>
            <li>
              Participated in development of App sections and backend management
              for integrating premium courses into the Chess Academy.
            </li>
            <li>
              Learned and utilized TypeScript during internship, resulting in a
              significant enhancement in code quality.
            </li>
            <li>
              Engaged in understanding business requirements and drove
              resolution of design issues in legacy tracking points, improving
              product functionality.
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <a
            href="https://www.youdao.com/"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Youdao Official Website"
          >
            Youdao Official Website
          </a>
        </CardFooter>
      </Card>

      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Bytedance YouthCamp</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-md font-semibold">Taojin Browser Extension</h3>
          <p className="text-sm italic">
            Team Leader, Lead Developer & Product Designer
          </p>
          <p className="text-xs text-gray-500">Jan 2022 - Feb 2022</p>
          <a
            href="https://github.com/Mirrorgo/taojin-old"
            className="text-blue-500 underline"
          >
            https://github.com/Mirrorgo/taojin-old
          </a>
          <p className="text-sm">
            Taojin is a Chrome extension developed with React, primarily
            designed to assist users in collecting and organizing information
            within the browser. It also serves as a lightweight note-taking
            tool. The extension is specifically optimized for scenarios commonly
            encountered by programmers.
          </p>
          <ul className="list-disc ml-4 mt-2">
            <li>
              Conceived the project idea, designed the product, set up the
              project scaffolding, and led the development.
            </li>
            <li>
              Developed a rich text editor component supporting Markdown, based
              on Slate.js.
            </li>
            <li>
              Ranked 13th in the final evaluation of ByteDance YouthCamp. The
              project idea attracted the interest of the judges, leading to an
              in-depth discussion with ByteDance&apos;s Juejin product managers
              after the evaluation. This was followed by a one-hour video
              meeting to explore the ideas around the Juejin extension and its
              collaborative model.
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <a
            href="https://www.yuque.com/mirrorgo/qvhwgq/gubmkz"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Final Project Evaluation Document and More Detailed Introduction
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ExperienceList;
