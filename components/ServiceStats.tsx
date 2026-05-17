import { serviceStats } from "@/public/datas/homepage";

export default function ServiceStats() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {serviceStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 md:gap-6">
              {/* Number with script font */}
              <span className="font-tuesday-night text-6xl md:text-7xl text-[#eee] leading-none select-none">
                {stat.number}
              </span>
              
              {/* Content */}
              <div className="space-y-2 md:mt-2">
                <h3 className="font-lato text-sm tracking-[0.2em] font-bold text-black uppercase">
                  {stat.title}
                </h3>
                <p className="font-cormorant italic text-[#999] text-base leading-relaxed max-w-[280px]">
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
