import LoadingSkeleton from "@/app/loading";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { ReactNode, Suspense } from "react";
import Testimonials from "./(testimonials)/Testimonials";
import FeedbackForm from "./FeedbackForm";

type props = {
  team: {
    fullName: string;
    expert: string;
    img: string;
    professional_qualifications: string[];
    Certification_Qulaifications: string[];
    Hobbies: string[];
    about_yourself: string;
    meaning: string;
    role: string;
    testimonials: any[];
  };
  children: ReactNode;
};

export default function TeamDeatils({ team, children }: any) {
  const capsName =
    team?.fullName.charAt(0).toUpperCase() + team?.fullName.slice(1);
  return (
    <>
      <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetClose></SheetClose>
        <SheetContent className="overflow-y-auto overflow-x-hidden">
          <section>
            <div>
              <Suspense fallback={<LoadingSkeleton />}>
                <Image
                  draggable={false}
                  src={team?.bannerImage}
                  priority
                  width={1200}
                  height={500}
                  alt="career-image"
                  className="max-h-[350px] object-cover object-top rounded-t-md w-full"
                />
              </Suspense>
            </div>
            <div className="my-5 lg:p-10 p-5">
              <div className="max-screen">
                <h1 className="text-5xl font-bold">{capsName}</h1>
                <div className="my-2">
                  <span className="italic text-lg text-medium font-semibold">
                    {team?.role}
                  </span>
                </div>
              </div>
              <div className="text-xl my-7">
                <p>{team?.description}</p>
              </div>
              <hr />
              <div className="my-10">
                <h2 className="text-lg font-semibold mb-2">
                  Professional qualification
                </h2>
                {team?.professionalQualifications}
              </div>
              <div className="my-10">
                <h2 className="text-lg font-semibold mb-2">
                  Certification qualifications
                </h2>
                {team?.certificationQualification}
              </div>
              <div className="my-10">
                <h2 className="text-lg font-semibold mb-2">Hobbies</h2>
                {team?.hobbies}
              </div>
              <div className="my-10">
                <h2 className="text-lg font-semibold mb-2">
                  What does Origins Financial means to you?
                </h2>
                <p>{team?.meansToYou}</p>
              </div>
            </div>
          </section>
          <div>
            <Testimonials
              animate={true}
              name={capsName}
              testimonials={team?.testimonials}
            />
          </div>
          <div>
            <FeedbackForm animate={true} name={capsName} teamId={team?.id} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
