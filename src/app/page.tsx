import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Capabilities } from "@/components/sections/Capabilities";
import { Approach } from "@/components/sections/Approach";
import { Credibility } from "@/components/sections/Credibility";
import { ContactCta } from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <SelectedWork />
      <Capabilities />
      <Approach />
      <Credibility />
      <ContactCta />
    </>
  );
}
