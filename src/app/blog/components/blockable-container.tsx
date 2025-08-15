"use client";

import classNames from "classnames";
import { useGlobalContext } from "@/context/GlobalContext";

export default function BlockableContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isFilterOpen } = useGlobalContext();

  return (
    <div
      data-lenis-prevent={!isFilterOpen}
      className={classNames(
        "relative",
        isFilterOpen && "h-screen overflow-hidden",
      )}
    >
      {children}
    </div>
  );
}
