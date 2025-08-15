import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FilterButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      variant="outline"
      className="flex w-full max-w-[160px] cursor-pointer items-center gap-2"
      onClick={onClick}
    >
      <SearchIcon size={16} />
      <p>Buscar artigos</p>
    </Button>
  );
}
