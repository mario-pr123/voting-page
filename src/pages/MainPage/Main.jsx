import React, { useEffect, useState } from "react";
import About from "../../components/About/About";
import Info from "../../components/Info/Info";
import Intro from "../../components/Intro/Intro";

export default function Main() {
  const [initial, setInitial] = useState(0);
  useEffect(() => {
    if (initial === 0) {
      setInitial(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [initial]);
  return (
    <div>
      <Intro></Intro>
      <About></About>
      <Info></Info>
    </div>
  );
}
