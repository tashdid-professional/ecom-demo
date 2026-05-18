import { serviceStats } from "@/public/datas/homepage";

export default function ServiceStats() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-10 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
          {serviceStats.map((stat) => (
            <div key={stat.id} className="flex flex-row items-center justify-center gap-4 md:gap-6">
              {/* Number with script font */}
              <span className="font-tuesday-night text-6xl md:text-7xl lg:text-8xl text-[#eee] leading-none select-none flex-shrink-0">
                {stat.number}
              </span>
              
              {/* Content */}
              <div className="space-y-2 text-left">
                <h3 className="font-lato text-sm tracking-[0.2em] font-bold text-black uppercase">
                  {stat.title}
                </h3>
                <p className="font-cormorant italic text-[#999] text-base leading-relaxed max-w-[200px] md:max-w-[240px]">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
