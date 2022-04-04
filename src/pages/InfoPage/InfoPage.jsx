import React, { useEffect, useState } from "react";
import InfoPageTop from "../../components/InfoPageTop/InfoPageTop";
import Sponsors from "../../components/Sponsors/Sponsors";

export default function InfoPage() {
  const [initial, setInitial] = useState(0);
  useEffect(() => {
    if (initial === 0) {
      setInitial(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [initial]);
  return (
    <div>
      <InfoPageTop />
      <Sponsors />
    </div>
  );
}
