"use client";

import dynamic from "next/dynamic";

const Kid3D = dynamic(() => import("./Kid3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] md:h-[500px] flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-4 border-green-light/30 border-t-green-light animate-spin" />
    </div>
  ),
});

export default function Kid3DWrapper() {
  return <Kid3D />;
}
