import ThemeToggle from "@/components/ThemeToggle";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Kanban Kno</h1>
        <ThemeToggle />
      </header>
      {children}
    </>
  );
}
