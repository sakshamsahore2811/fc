import { useState } from "react";

export default function ProcessFlow() {
  const steps = [
    { title: "Discovery", desc: "We understand your business needs, goals, and audience." },
    { title: "Design", desc: "Our team crafts a clean, conversion-focused UI/UX." },
    { title: "Communication", desc: "We keep you in the loop with regular updates & feedback cycles." },
    { title: "Development", desc: "We build with precision, ensuring speed, security, and scalability." },
    { title: "QA/UAT", desc: "Rigorous testing ensures everything works flawlessly before launch." },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-start relative">
        <br/>
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 relative mb-4"
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Timeline + Arrow */}
          <div className="flex flex-col items-center relative">
            {/* Step dot */}
            <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>

            {/* Arrow line (skip for last step) */}
            {idx < steps.length - 1 && (
              <div className="flex flex-col items-center mt-1">
                <div className="w-[2px] h-10 bg-purple-500"></div>
                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-purple-500"></div>
              </div>
            )}
          </div>

          {/* Step label aligned with bullet */}
          <div className="flex items-center h-4">
            <span className="text-2xl text-white hover:cursor-pointer">
              <u>{step.title}</u>
            </span>
          </div>

          {/* Tooltip / Box */}
          {hovered === idx && (
            <div className="absolute left-60 bg-slate-500 text-white p-4 rounded-lg shadow-lg w-64 z-10">
              {step.desc}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
