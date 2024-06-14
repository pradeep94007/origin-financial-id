import { ContactForm } from "@/components/ContactForm";
import CTA from "./CTA/CTA";
import Footer from "@/components/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      {children}
      <CTA />
      <ContactForm />
      <Footer />
    </section>
  );
}
