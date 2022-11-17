import React, { useLayoutEffect, useRef } from "react";
import play from "../utils/play.ts";
import getDelta from "../utils/getDelta.ts";
import { invert } from "../utils/invert.ts";

const useFlipper = (listRef: React.RefObject<HTMLElement>) => {
  const origins = useRef<{ [key: string]: DOMRect }>({});
  let firstRun = useRef(true);

  useLayoutEffect(() => {
    if (listRef.current === null) return;

    const list = listRef.current;
   
    const children: HTMLElement[] = [].slice.call(list.children);

    for (const child of children) {
        const key = child.dataset.key!;
        
      const next = child.getBoundingClientRect();

      if (!firstRun.current) {
        if (key in origins.current) {
          const previous = origins.current[key];
          const delta = getDelta(previous, next);
          if (!isZero(delta)) {
            invert(delta, child);
            requestAnimationFrame(() => {
              play(child);
            });
          }
        }
      }

      origins.current[child.dataset.key!] = next;
    }

    firstRun.current = false;
  }, [listRef]);
};

export type Rect = Pick<DOMRect, "top" | "left">;

const isZero = (delta: Rect) => delta.left === 0 && delta.top === 0;

export default useFlipper;
