const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-[18px] border-b border-border bg-background sticky top-0 z-10">
    <div className="font-display text-xl tracking-tight flex items-center gap-2">
      <span className="w-2 h-2 bg-primary rounded-full inline-block" />
      Paygrade
    </div>
    <ul className="hidden md:flex gap-6 list-none">
      <li><a href="#" className="text-[13px] text-mid no-underline tracking-wide">Explore</a></li>
      <li><a href="#" className="text-[13px] text-mid no-underline tracking-wide">Benchmarks</a></li>
      <li><a href="#" className="text-[13px] text-mid no-underline tracking-wide">Companies</a></li>
      <li>
        <a href="#" className="bg-foreground text-background px-[18px] py-2 rounded-pill text-[13px] font-medium no-underline">
          Sign in
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
