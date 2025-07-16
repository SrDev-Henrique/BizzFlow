import { Check, CircleSlash } from "lucide-react";
import Image from "next/image";
import { cards, lgCards } from "@/data/card";
import classNames from "classnames";

export function Cards() {
  return (
    <div className="mx-auto flex w-[94%] max-w-[1400px] flex-col gap-[64px] sm:gap-[96px] md:gap-[128px]">
      {cards.map((card) => {
        const { title, before, after, image } = card;
        return (
          <div
            key={title}
            className="flex w-full flex-col gap-[16px] rounded-3xl bg-white p-[32px] md:flex-row md:p-[5%] lg:hidden"
          >
            <div className="flex flex-col gap-[16px] lg:hidden">
              <h2 className="font-primary mb-6 text-3xl font-medium">
                {title}
              </h2>
              <div className="flex flex-col gap-[16px]">
                <div className="flex h-full flex-col gap-[16px]">
                  <p className="font-secondary bg-white-dark w-fit rounded-full px-4 py-1 text-xs font-bold text-black uppercase">
                    Antes
                  </p>
                  <div className="flex flex-col gap-[16px]">
                    {before.map((item) => {
                      const { content } = item;
                      return (
                        <div
                          key={content}
                          className="bg-white-dark flex w-full items-start gap-[8px] rounded-xl px-4 py-2"
                        >
                          <CircleSlash className="text-grey min-h-5.5 min-w-5.5 opacity-60" />
                          <p className="text-grey font-secondary text-base font-medium">
                            {content}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                  <p className="font-secondary bg-yellow w-fit rounded-full px-4 py-1 text-xs font-bold text-black uppercase">
                    Depois
                  </p>
                  <div className="flex flex-col gap-[16px]">
                    {after.map((item) => {
                      const { content } = item;
                      return (
                        <div
                          key={content}
                          className="bg-white-dark flex w-full items-start gap-[8px] rounded-xl px-4 py-2"
                        >
                          <Check className="bg-yellow min-h-5.5 min-w-5.5 rounded-full text-white" />
                          <p className="font-secondary text-base font-medium text-black">
                            {content}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[16px] flex h-full w-full md:mt-0 lg:my-auto lg:ml-[16px]">
              <Image
                src={image}
                alt={title}
                width={1504}
                height={1128}
                className="h-full w-full rounded-xl object-cover object-center"
              />
            </div>
          </div>
        );
      })}
      {lgCards.map((card) => {
        const { title, before, after, image } = card;
        return (
          <div
            key={title}
            className="hidden max-h-[800px] w-full flex-col gap-[16px] rounded-3xl bg-white p-[32px] md:flex-row md:p-[5%] lg:flex lg:h-[95vh]"
          >
            <div className="flex flex-col gap-[16px]">
              <h2 className="font-primary mb-6 text-4xl font-medium">
                {title}
              </h2>
              <div className="flex items-center gap-[16px]">
                <div className="flex w-full items-center">
                  <p className="font-secondary bg-white-dark w-fit rounded-full px-4 py-1 text-xs font-bold text-black uppercase">
                    Antes
                  </p>
                </div>
                <div className="flex w-full items-center">
                  <p className="font-secondary bg-yellow w-fit rounded-full px-4 py-1 text-xs font-bold text-black uppercase">
                    Depois
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-3 gap-[16px]">
                {before.map((item, index) => {
                  const { content } = item;
                  return (
                    <div
                      key={content}
                      className="bg-white-dark flex w-full flex-col items-start gap-[8px] rounded-xl px-4 py-2"
                    >
                      <item.icon
                        className={classNames(
                          "h-6 w-6",
                          index % 2 !== 0
                            ? "bg-yellow rounded-full text-white"
                            : "text-grey opacity-60",
                        )}
                      />
                      <p
                        className={classNames(
                          "text-base",
                          index % 2 !== 0
                            ? "font-secondary font-medium text-black"
                            : "text-grey font-secondary font-medium",
                        )}
                      >
                        {content}
                      </p>
                    </div>
                  );
                })}
                {after.map((item, index) => {
                  const { content } = item;
                  return (
                    <div
                      key={content}
                      className="bg-white-dark flex w-full flex-col items-start gap-[8px] rounded-xl px-4 py-2"
                    >
                      <item.icon
                        className={classNames(
                          "h-6 w-6",
                          index % 2 !== 0
                            ? "text-grey opacity-60"
                            : "bg-yellow-transparent rounded-full text-white",
                        )}
                      />
                      <p
                        className={classNames(
                          "text-base",
                          index % 2 !== 0
                            ? "text-grey font-secondary font-medium"
                            : "font-secondary font-medium text-black",
                        )}
                      >
                        {content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-[16px] flex h-full w-full md:mt-0 lg:ml-[16px]">
              <Image
                src={image}
                alt={title}
                width={1504}
                height={1128}
                className="h-full w-full rounded-xl object-cover object-center"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
