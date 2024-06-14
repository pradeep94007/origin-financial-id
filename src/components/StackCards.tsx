"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import LearnButton from "./(custom buttons)/learnbutton";
import { DynamicIcon } from "./DynamicIcon";

type WhyChooseUsCardType = {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  redirectTo: string;
};

type StackCardsPropsTypes = {
  content: WhyChooseUsCardType[];
};

const StackCards = ({ content }: StackCardsPropsTypes) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardRef = useRef<HTMLDivElement>(null);

  const startStackingforward = () => {
    // Increase the currentIndex by 1, wrapping around if it exceeds the length of the content array
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, content.length - 1));
  };

  const startstackingbackwards = () => {
    // Decrease the currentIndex by 1, wrapping around if it becomes negative
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Get card length
  const cardLength: number | undefined = cardRef.current?.offsetWidth;

  return (
    <>
      <div className="md:space-y-24 space-y-16" id="Why-us-scroll">
        <div className="md:flex justify-between">
          <div className="flex flex-col justify-between space-y-2">
            <div>
              <h1 className="font-bold md:text-4xl text-3xl ">
                Why choose Origins Financial?
              </h1>
            </div>
            <div>
              <span className="md:ml-2">
                ({`${currentIndex + 1} / ${content.length}`})
              </span>
            </div>
          </div>
          <div className="md:mt-0 mt-5 space-x-3 flex">
            {/* Disable the button if its the first content */}
            <Button
              onClick={() => startstackingbackwards()}
              disabled={currentIndex === 0}
            >
              <ArrowLeft />
            </Button>
            {/* Disable the button if its the last content */}
            <Button
              onClick={() => startStackingforward()}
              disabled={currentIndex === content.length - 1}
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex cards gap-6 ">
          {content.map((card, index) => (
            <div
              key={index}
              ref={cardRef}
              className="group cursor-pointer flex h-auto w-auto"
              // If the card is not the first, select the card with CurrentIndex and  set the margin left of the - card length to give a stacking effect
              style={{
                marginLeft:
                  index === 0
                    ? 0
                    : index <= currentIndex
                    ? `-${cardLength! + 10}px`
                    : 0,
                transitionDuration: "0.5s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Card
                className="md:w-[620px] min-w-[310px] flex p-2 h-auto rounded-2xl relative"
                style={{ background: card.color }}
              >
                <CardContent>
                  <div className="h-full flex flex-col justify-between pt-5 space-y-5">
                    <DynamicIcon iconName={card.icon} size="35" />
                    <h1 className="font-semibold text-3xl">{card.title}</h1>
                    <p className="text-slate-900">{card.description} </p>
                    <div className="mt-auto">
                      <LearnButton
                        text="Learn more"
                        className="group-hover:underline underline-offset-4"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StackCards;
