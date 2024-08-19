type IconSwitcherProps = {
  icons: React.ReactNode[];
  selectedIconIndex: 0 | 1;
  onClick: () => void;
};

// todo： 附带图标的switcher组件库， 找&自己做
// 贡献到shadcn

function IconSwitcher({
  icons,
  selectedIconIndex,
  onClick,
}: IconSwitcherProps) {
  return (
    <div
      onClick={onClick}
      className="hover:bg-accent hover:text-accent-foreground w-9 h-9 inline-flex items-center justify-center rounded-md cursor-pointer"
    >
      {icons[selectedIconIndex]}
    </div>
  );
}

export default IconSwitcher;
