import { CqesAndAns } from "@/app/Constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFetchDataOnClient } from "../../utils/useFetchDataOnClient";


export default function QueAnsAccord() {
  const faqs = useFetchDataOnClient("faqs")
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-3 w-full"
      >
        {faqs.map((qa: any) => (
          <AccordionItem value={qa.id} key={qa.id} className="border-2 rounded border-dark px-3">
            <AccordionTrigger className="text-xl text-start font-semibold text-dark ">
              {qa.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-500 text-lg">
              {qa.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

