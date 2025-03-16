import { cn } from "@/lib/utils";
import { Button } from "@/components/Button"
import colours from "@/colours";

function Home() {
  return (
    <div className={cn("h-screen w-screen flex items-center justify-center", `bg-[${colours.normal}]`)}>
      <Button colour="informative">test</Button>
    </div>
  );
}

export default Home;
