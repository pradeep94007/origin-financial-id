import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {

  interface ILink {
    text: string,
    href: string
  }

  interface SocialLink {
    platform: string;
    href: string;
    icon: keyof IconComponents;
    size: number;
    ariaLabel: string;
    target?: 'blank' | 'self';
  }

  interface IconComponents {
    FaFacebook: JSX.Element;
    FaInstagram: JSX.Element;
    FaTwitter: JSX.Element;
  }


  const linkArr = [
    {
      "text": "Home",
      "href": "/"
    },
    {
      "text": "Our mission",
      "href": "/#Our-mission"
    },
    {
      "text": "Services",
      "href": "/#Services"
    },
    {
      "text": "Products",
      "href": "/#Products"
    },
    {
      "text": "Why us",
      "href": "/#Career"
    },
    {
      "text": "Career",
      "href": "/#Career"
    },
    {
      "text": "Testimonials",
      "href": "/#Testimonials"
    },
    {
      "text": "Our team",
      "href": "/our-team"
    },
    {
      "text": "Blogs",
      "href": "/blog"
    },
    {
      "text": "Events",
      "href": "/events"
    }
  ]

  const socialArray: SocialLink[] = [
    {
      platform: "Facebook",
      href: "https://facebook.com",
      icon: "FaFacebook",
      size: 30,
      ariaLabel: "Facebook",
      target:'blank'
    },
    {
      platform: "Instagram",
      href: "https://www.instagram.com/originsfinancial/",
      icon: "FaInstagram",
      size: 30,
      ariaLabel: "Instagram",
      target: "blank"
    },
    {
      platform: "Twitter",
      href: "https://twitter.com",
      icon: "FaTwitter",
      size: 30,
      ariaLabel: "Twitter",
      target:'blank'
    }
  ]

  const iconComponents: IconComponents  = {
    FaFacebook: <FaFacebook size={30} />,
    FaInstagram: <FaInstagram size={30} />,
    FaTwitter: <FaXTwitter size={30} />,
  };



  return (
    <section className="bg-dark p-5">
      <div className="text-white max-screen mx-auto p-4 py-10 flex flex-col gap-10 lg:gap-40 lg:flex-row border-b-2">
        <div>
          <Image
            draggable={false}
            src="/blacklogo.svg"
            priority
            width={200}
            height={150}
            alt="logo"
            className="invert object-contain lg:-mt-10"
          />
          <p className="text-md text-white ">
            Together we empower success
          </p>
        </div>
        <div>
          <div>
            <p className="mb-5 text-xl font-bold">Pages</p>
            <ul className="flex flex-col gap-3 text-light">
              {
                linkArr.map((item: ILink, j) => {
                  return (
                    <li key={j} className="hover:text-white">
                      <Link href={item.href}>{item.text}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div>
          <div>
            <p className="mb-5 text-xl font-bold">Follow Us</p>
            <ul className="flex flex-row gap-4 text-light">
              {socialArray.map((link) => (
                <li key={link.platform} className="hover:text-white">
                  <a href={link.href} target={link.target || "_self"} className="flex gap-2 items-center" aria-label={link.ariaLabel}>
                    <span>
                      {iconComponents[link.icon]}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-white  mx-auto p-4 py-10 pb-16 max-screen">
        <p>Origins Financial © 2024 </p>
      </div>
    </section>
  );
}
