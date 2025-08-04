export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary-foreground mx-auto mt-32 mb-16 w-[96%] max-w-7xl space-y-8 rounded-lg px-6 py-12 md:px-12">
      {children}
    </div>
  );
}
