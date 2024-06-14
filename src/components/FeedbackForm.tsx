"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { SlideInFromLeft } from "./animations/animations";
import { Button } from "./ui/button";
import { postData } from "@/lib/postData";

type props = {
  name: string;
  teamId: string;
  animate: boolean;
};

export default function FeedbackForm({ name, teamId }: props) {
  const formRef = useRef(null);
  const [starState, setStarState] = useState<number>();
  const [message, setMessage] = useState<any>({});
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  function handleStarClick(e: React.MouseEvent<SVGElement>): void {
    const index = parseInt(e.currentTarget.dataset.index || "0", 10);
    if (index + 1 == starState) return;
    setStarState(index + 1);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage({});
    }, 1500);

    return () => clearTimeout(timeout);
  }, [message]);

  const handleFormSubmit = async (formData: any) => {
    const data = {
      name: formData.get("name"),
      role: formData.get("role"),
      rating: starState,
      description: formData.get("description"),
      ourTeamId: teamId,
    };
    for (let field in data) {
      // @ts-ignore
      if (!data[field]) {
        return setMessage({ error: `${field} is required!` });
      }
    }
    if (!acceptPrivacy) {
      return setMessage({ error: "Accept the privacy policy!" });
    }
    try {
      await postData({ data, section: "teamtestimonial" });
      setMessage({ success: "Feedback posted successfully!" });
      setStarState(0);
      setAcceptPrivacy(false);
      // @ts-ignore
      formRef.current.reset();
    } catch (error: any) {
      console.log(error);
      setMessage({ error: error.message });
    }
  };

  const capsName = name?.charAt(0).toUpperCase() + name?.slice(1);

  return (
    <section className="lg:max-w-[50vw] lg:m-10 m-5 px-3 py-11 mt-10">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12">
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="font-semibold lg:text-3xl text-xl">
            Say something about {capsName}
          </h2>
        </div>
        <SlideInFromLeft animate={true} className=" py-4  rounded-3xl">
          <form action={handleFormSubmit} autoFocus={false} ref={formRef}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col mb-5 ">
                  <label
                    htmlFor="name"
                    className="text-base lg:text-lg font-medium mb-2"
                  >
                    Your name
                  </label>
                  <input
                    autoFocus={false}
                    tabIndex={-1}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John"
                    className="p-2 px-5 text-base lg:text-lg border bg-yellow border-gray-200"
                  />
                </div>
                <div className="flex flex-col mb-5 ">
                  <label
                    htmlFor="name"
                    className="text-base lg:text-lg font-medium mb-2"
                  >
                    Your role
                  </label>
                  <input
                    autoFocus={false}
                    tabIndex={-1}
                    type="text"
                    id="name"
                    name="role"
                    placeholder="John"
                    className="p-2 px-5 text-base lg:text-lg border bg-yellow border-gray-200"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6"></div>
              <div>
                <h1 className="text-base lg:text-lg font-medium mb-2">
                  Rate {capsName} services
                </h1>
                <div className="flex gap-2 text-3xl text-gray-300">
                  {[...new Array(5)].map((_, index) => (
                    <FaStar
                      className={`cursor-pointer ${
                        starState && index < starState && "text-purple"
                      }`}
                      key={index}
                      onClick={handleStarClick}
                      data-index={index}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col mt-10">
                <label
                  htmlFor="feedback"
                  className="text-base lg:text-lg font-medium mb-2"
                >
                  Additional feedback
                </label>
                <textarea
                  autoFocus={false}
                  tabIndex={-1}
                  name="description"
                  id="feedback"
                  cols={30}
                  rows={8}
                  placeholder="If you have any additional feedback, please type it in here..."
                  className="border outline-1 max-w-[600px] resize-none focus:outline-slate-400 p-2 bg-yellow"
                ></textarea>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="privacy-policy"
                  id="privacy"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAcceptPrivacy(true);
                    } else {
                      setAcceptPrivacy(false);
                    }
                  }}
                  className="border-gray-300  h-4 w-4 mb-1"
                  style={{ accentColor: "green" }}
                />
                <label htmlFor="privacy" className="">
                  I have read and accept the{" "}
                  <Link href="/" className="text-purple underline">
                    Prvacy Policy
                  </Link>
                </label>
              </div>
              {message && (
                <div>
                  {message.error && (
                    <p className="text-red-400">{message.error}</p>
                  )}
                  {message.success && (
                    <p className="text-lime-400">{message.success}</p>
                  )}
                </div>
              )}
              <div>
                <Button>Submit feedback </Button>
              </div>
            </div>
          </form>
        </SlideInFromLeft>
      </div>
    </section>
  );
}
