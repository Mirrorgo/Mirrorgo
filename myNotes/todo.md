把这个网站改成monorepo,增加自己的内容
- 改的方法官网有

增加国际化的功能


制作黑暗主题下对应的mirror图标


ico透明背景

把自己在yuque上的文章翻译成英文放在自己的网站上


自己的喜欢的小工具网站图标

支持快速搜索自己的Note

这个site只放正式的打磨过的文章，底部贴一个link指向自己的中文文章

添加一个about me


src/pages/index.js → localhost:3000/
src/pages/foo.md → localhost:3000/foo
src/pages/foo/bar.js → localhost:3000/foo/bar


Create a Markdown file at docs/hello.md:
docs/hello.md
# Hello
This is my **first Docusaurus document**!
A new document is now available at http://localhost:3000/docs/hello.


---
sidebar_label: 'Hi!'
sidebar_position: 3
---
# Hello
This is my **first Docusaurus document**!


Links
Regular Markdown links are supported, using url paths or relative file paths.
Let's see how to [Create a page](/create-a-page).
Let's see how to [Create a page](./create-a-page.md).


Regular Markdown images are supported.
You can use absolute paths to reference images in the static directory (static/img/docusaurus.png):
![Docusaurus logo](/img/docusaurus.png)

![Docusaurus logo](./img/docusaurus.png)


Markdown code blocks are supported with Syntax highlighting.
```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```
src/components/HelloDocusaurus.js
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}


:::tip[My tip]

Use this awesome feature option

:::

:::danger[Take care]

This action is dangerous

:::



MDX and React Components
MDX can make your documentation more interactive and allows using any React components inside Markdown:

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !

This is Docusaurus green !

This is Facebook blue !


官方有doc version的功能