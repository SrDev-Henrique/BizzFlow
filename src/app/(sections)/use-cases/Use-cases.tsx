import { useCasesData } from "./data";
import RenderCases from "./render-cases";

export default function UseCases() {
  return (
    <div className="relative mx-auto mt-[96px] flex w-[98%] max-w-[1400px] flex-col items-start justify-between gap-[48px] rounded-3xl bg-white p-[32px] px-3 md:mt-[128px] md:p-[5%] lg:mt-[160px] lg:flex-row">
      <div className="flex flex-col gap-[16px] lg:sticky lg:top-[100px]">
        <h2 className="w-[90%] text-2xl font-bold md:text-3xl lg:text-4xl">
          Como a BizzFlow Transforma o RH da Sua Empresa
        </h2>
        <p className="text-grey font-secondary w-[80%] text-sm sm:w-[70%] lg:text-base">
          Cinco cenários práticos onde nossa plataforma agiliza processos,
          garante conformidade e entrega insights valiosos — para você focar no
          que importa: seu time.
        </p>
      </div>
      <div className="flex h-full w-fit min-w-[45%] flex-col items-start justify-between gap-[48px]">
        {useCasesData.map((useCase) => {
          const {icon: Icon, title, text} = useCase;
          return (
            <RenderCases
              key={title}
              icon={
                <Icon className="min-h-[48px] min-w-[48px] md:min-h-[64px] md:min-w-[64px]" />
              }
              title={title}
              text={text}
            />
          );
        })}
      </div>
    </div>
  );
}
