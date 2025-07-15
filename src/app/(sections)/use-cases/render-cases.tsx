export default function RenderCases({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-yellow-transparent flex w-fit items-start gap-[8px] rounded-2xl p-[16px]">
      {icon}
      <div>
        <h3 className="text-base font-medium md:text-lg">{title}</h3>
        <p className="text-grey font-secondary max-w-[500px] text-sm md:text-base">
          {text}
        </p>
      </div>
    </div>
  );
}
