import Maintenance from "@/src/components/maintenance";
import Terminal from "@/src/components/terminal";

export default function Home() {
  return (
    <div className="w-full h-screen bg-primary flex flex-row items-center justify-center">
      {/* <Maintenance /> */}
      <Terminal />
    </div>
  );
}
