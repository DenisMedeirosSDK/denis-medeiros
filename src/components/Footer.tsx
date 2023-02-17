export function Footer() {
  return (
    <footer className="flex w-full items-center justify-center bg-zinc-100 dark:bg-zinc-800 h-20 mt-20">
      <p className="text-sm dark:text-zinc-100">
        Copyright © {new Date().getFullYear()} Denis Medeiros
      </p>
    </footer>
  );
}
