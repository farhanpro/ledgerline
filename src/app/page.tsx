"use client";

import { useState } from "react";

export default function Home() {
  const [cards] = useState(["Accounts","Beneficaries","Transfer"]);
  return (
   <div className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="text-4xl font-bold">Personal Transfer Ledger</h1>
      {cards.map((card) => (
        <div key={card} className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">{card}</h2>
        </div>
      ))}
   </div>
  );
}
