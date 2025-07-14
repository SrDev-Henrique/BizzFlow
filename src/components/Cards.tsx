import { Check, CircleSlash } from "lucide-react";
import Image from "next/image";
import { cards, lgCards } from "@/data/card";
import classNames from "classnames";

export function Cards() {
  return (
    <div className="w-[94%] max-w-[1400px] mx-auto flex flex-col gap-[64px]">
      {cards.map((card) => {
        const { title, before, after, image } = card;
        return (
          <div
            key={title}
            className="flex flex-col md:flex-row gap-[16px] p-[32px] md:p-[5%] bg-white rounded-3xl w-full lg:hidden"
          >
            <div className="flex flex-col gap-[16px] lg:hidden">
              <h2 className="text-3xl font-medium font-primary mb-6">
                {title}
              </h2>
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[16px] h-full">
                  <p className="font-secondary font-bold uppercase px-4 py-1 bg-white-dark w-fit rounded-full text-black text-sm">
                    Antes
                  </p>
                  <div className="flex flex-col gap-[16px]">
                    {before.map((item) => {
                      const { content } = item;
                      return (
                        <div
                          key={content}
                          className="flex items-start gap-[8px] px-4 py-2 bg-white-dark w-full rounded-xl"
                        >
                          <CircleSlash className="text-grey opacity-60 min-w-6 min-h-6" />
                          <p className="text-lg text-grey font-secondary font-medium">
                            {content}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                  <p className="font-secondary font-bold uppercase px-4 py-1 bg-yellow-transparent w-fit rounded-full text-black text-sm">
                    Depois
                  </p>
                  <div className="flex flex-col gap-[16px]">
                    {after.map((item) => {
                      const { content } = item;
                      return (
                        <div
                          key={content}
                          className="flex items-start gap-[8px] px-4 py-2 bg-white-dark w-full rounded-xl"
                        >
                          <Check className="bg-yellow-transparent text-white rounded-full min-w-6 min-h-6" />
                          <p className="text-lg text-black font-secondary font-medium">
                            {content}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full h-full mt-[16px] md:mt-0 lg:ml-[16px] lg:my-auto">
              <Image
                src={image}
                alt={title}
                width={1504}
                height={1128}
                className="w-full h-full object-cover object-center rounded-xl"
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
            className="hidden flex-col md:flex-row gap-[16px] p-[32px] md:p-[5%] bg-white rounded-3xl w-full lg:flex lg:h-[95vh]"
          >
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-3xl font-medium font-primary mb-6">
                {title}
              </h2>
              <div className="flex items-center gap-[16px]">
                <div className="flex items-center w-full">
                  <p className="font-secondary font-bold uppercase px-4 py-1 bg-white-dark w-fit rounded-full text-black text-sm">
                    Antes
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <p className="font-secondary font-bold uppercase px-4 py-1 bg-yellow-transparent w-fit rounded-full text-black text-sm">
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
                      className="flex flex-col items-start gap-[8px] px-4 py-2 bg-white-dark w-full rounded-xl"
                    >
                      <item.icon
                        className={classNames(
                          index % 2 !== 0
                            ? "bg-yellow-transparent text-white rounded-full min-w-6 min-h-6"
                            : "text-grey opacity-60 min-w-6 min-h-6"
                        )}
                      />
                      <p
                        className={classNames(
                          "text-lg",
                          index % 2 !== 0
                            ? "text-black font-secondary font-medium"
                            : "text-grey font-secondary font-medium"
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
                      className="flex flex-col items-start gap-[8px] px-4 py-2 bg-white-dark w-full rounded-xl"
                    >
                      <item.icon
                        className={classNames(
                          index % 2 !== 0
                            ? "text-grey opacity-60 min-w-6 min-h-6"
                            : "bg-yellow-transparent text-white rounded-full min-w-6 min-h-6"
                        )}
                      />
                      <p
                        className={classNames(
                          "text-lg",
                          index % 2 !== 0
                            ? "text-grey font-secondary font-medium"
                            : "text-black font-secondary font-medium"
                        )}
                      >
                        {content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex w-full h-full mt-[16px] md:mt-0 lg:ml-[16px]">
              <Image
                src={image}
                alt={title}
                width={1504}
                height={1128}
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
