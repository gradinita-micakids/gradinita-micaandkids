"use client";

import { useState } from "react";

const schedule = [
  {
    time: "07:00 - 08:30",
    title: "Primirea copiilor",
    desc: "Primirea copiilor de către cadrele didactice",
  },
  {
    time: "09:00 - 09:30",
    title: "Micul dejun",
    desc: "Servirea micului dejun",
  },
  {
    time: "09:30 - 10:30",
    title: "Activități liber alese",
    desc: "Activități liber alese pe arii de stimulare (jocuri de construcție, jocuri de creație, jocuri de rol etc.) și activități educative conform curriculumului",
  },
  {
    time: "10:30 - 11:00",
    title: "Gustare de fructe",
    desc: "Servirea gustării de fructe",
  },
  {
    time: "11:00 - 13:00",
    title: "Activități optionale",
    desc: "Activități optionale adecvate vârstei copiilor, conform opțiunilor părinților: Limba Engleză prin muzică și joc, pictură și modelaj (art & craft), activități sportive (tenis, karate, gimnastică, balet), șah, pian, chitară, cursuri de dezvoltare personală, sedințe de logopedie. Participarea nu este obligatorie — copiii care nu participă desfășoară alte activități incluse în procesul instructiv-educativ.",
  },
  {
    time: "12:30 - 13:30",
    title: "Prânz",
    desc: "Masa de prânz",
  },
  {
    time: "14:00 - 16:00",
    title: "Somnul de după-amiază",
    desc: "Somnul de după-amiază",
  },
  {
    time: "16:00 - 16:30",
    title: "Gustare",
    desc: "Servirea gustării",
  },
  {
    time: "16:30 - 18:00",
    title: "Activități outdoor & relaxare",
    desc: "Activități de tip outdoor în funcție de condițiile meteo, activități optionale, vizionarea unor spectacole de teatru, jocuri sportive și de relaxare în curtea grădiniței / locul de joacă special amenajat",
  },
  {
    time: "18:00 - 18:30",
    title: "Plecarea copiilor",
    desc: "Plecarea copiilor acasă",
  },
  {
    time: "18:00 - 19:00",
    title: "Program extins",
    desc: "Program extins la solicitarea părinților",
  },
];

export default function DailySchedule() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col gap-3">
        {schedule.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-soft overflow-hidden border border-green-light/10"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-cream/50"
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-sm md:text-base font-bold text-orange-dark whitespace-nowrap">
                  {item.time}
                </span>
                <span className="font-display text-sm md:text-base font-bold text-green-dark">
                  {item.title}
                </span>
              </div>
              <span
                className={`text-green-dark text-xl transition-transform duration-300 ${
                  open === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                open === i ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="px-6 pb-4 text-sm text-foreground/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
