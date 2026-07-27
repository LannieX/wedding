import { useInView } from "react-intersection-observer";

const Theme = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div ref={ref} className="flex flex-col items-center justify-center gap-5 tracking-widest uppercase bg-gray-100 h-fit w-full pt-5 pb-5">
      <div className={`w-full flex flex-row items-center justify-center gap-1 ${inView ? "animate__animated animate__fadeInDown" : "opacity-0"}`}>
        <div className="bg-[#481024] w-5 h-5 rounded-full" />
        <div className="bg-[#a29d33] w-5 h-5 rounded-full" />
        <div className="bg-[#f2e5b6] w-5 h-5 rounded-full" />
        <div className="bg-[#ca788e] w-5 h-5 rounded-full" />
        <div className="bg-[#94aac8] w-5 h-5 rounded-full" />
      </div>
      <p className="text-[15px] text-[#66261d] font-thai">
        คอลเลกชันธีมงานแต่ง
      </p>
    </div>
  );
};

export default Theme;
