import { cn } from "@/lib/utils";
import { Button } from "@/components/Button";
import colors from "@/colors";

function Home() {
  return (
    <div
      className={cn(
        "h-screen w-screen flex items-center justify-center",
        colors.normal
      )}
    >
      <Button size="lg" color="informative" className="text-xl">
        Log In
      </Button>
    </div>
  );
}

export default Home;
