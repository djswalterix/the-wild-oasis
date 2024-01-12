import { useEffect, useRef } from "react";

export default function useClickOutisde(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        //console.log(`ref`);
        //console.log(ref);
        if (ref.current && !ref.current.contains(e.target)) {
          //console.log("click outside");
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () => document.removeEventListener("click", handleClick);
    },
    [handler, listenCapturing]
  );
  return ref;
}
