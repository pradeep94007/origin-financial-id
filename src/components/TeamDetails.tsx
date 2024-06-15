import LoadingSkeleton from "@/app/loading";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog"

import Image from "next/image";
import { ReactNode, Suspense, useRef } from "react";
import Testimonials from "./(testimonials)/Testimonials";
import FeedbackForm from "./FeedbackForm";
import { X } from "lucide-react"
// import { Button } from "./button"
import { Button } from "./ui/button";
import MagneticButton from "./MagneticButton";
// import MagneticButton from "../MagneticButton"


type props = {
  team: {
    id: string;
    fullName: string;
    expert: string;
    bannerImage: string;
    professionalQualifications: string[];
    certificationQualification: string[];
    hobbies: string[];
    description: string;
    meansToYou: string;
    role: string;
    testimonials: any[];
  };
  onClose: () => void;
  children: ReactNode;
};

export default function TeamDeatils({ team, onClose, children }: props) {
  const capsName =
    team?.fullName.charAt(0).toUpperCase() + team?.fullName.slice(1);
  console.log("TEAM CALL", team);

  return (
    <>
      <Sheet open={team !== null}>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetClose ></SheetClose>
        <SheetContent className="overflow-y-auto overflow-x-hidden">
          <section >
            <div>
              <Suspense fallback={<LoadingSkeleton />}>
                <Image
                  draggable={false}
                  src={team?.bannerImage || "/Assets/Team-Image/team1.png"}
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
            {/* <FeedbackForm animate={true} name={capsName} teamId={team?.id} /> */}
          </div>
          <SheetPrimitive.Close title="Close" className="fixed z-50 top-4 right-8 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <MagneticButton>

              <Button onClick={onClose} title="Close" className="w-16 h-16 flex shadow-none rounded-full justify-center items-center">
                <X />
              </Button>

            </MagneticButton>
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        </SheetContent>
      </Sheet>
    </>
  );
}
