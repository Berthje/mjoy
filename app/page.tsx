import Evenementen from "@/components/Evenementen";
import Hero from "@/components/Hero";
import Bistro from "@/components/Bistro";
import Takeaway from "@/components/Takeaway";
import Tearoom from "@/components/Tearoom";
import ZondagsOntbijt from "@/components/ZondagsOntbijt";

export default function Home() {
  return (
    <main>
      <Hero />
      <Bistro />
      <Tearoom />
      <ZondagsOntbijt />
      <Evenementen />
      <Takeaway />
    </main>
  );
}
