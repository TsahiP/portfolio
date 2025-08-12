import SectionWrapper from "@/components/section/section-wrapper";
import Hero from "./_components/hero-section/hero";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { userActions } from "@/actions/user-action";
import NavBar from "./_components/nav-bar/nav-bar";
import Experience from "./_components/experience-section/experience";
import { Contact } from "./_components/contact/contact";
export default async function Home() {
  const user = await userActions.getInfo();
  if (!user) {
    throw new Error("User not found");
  }
  return (
    <main className="min-h-dvh">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NavBar />

        <SectionWrapper className="flex flex-col  mt-0 p-0">
          <Hero user={user} />
        </SectionWrapper>
        <SectionWrapper>
          <Experience experience={user.experience} portfolioLink={user.portfolioLink} />
        </SectionWrapper>
        <Contact user={user} />
      </ThemeProvider>
    </main>
  );
}
