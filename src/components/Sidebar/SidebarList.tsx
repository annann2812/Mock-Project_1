import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { Fragment, useRef, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const navLinks = [
  {
    name: "Electronics",
    icon: ArrowForwardIcon,
    link: "/home/electronics",
    hasExtra: true,
  },
  {
    name: "Televisions",
    icon: ArrowForwardIcon,
    link: "/home/televisions",
    hasExtra: true,
  },
  {
    name: "Smartphones",
    icon: ArrowForwardIcon,
    link: "/home/smartphones",
    hasExtra: false,
  },
  {
    name: "Cameras",
    icon: ArrowForwardIcon,
    link: "/home/cameras",
    hasExtra: false,
  },
  {
    name: "JBL Speakers",
    icon: ArrowForwardIcon,
    link: "/home/JBLSpeakers",
    hasExtra: false,
  },
];

const SidebarList = () => {
  const Electronics = [
    {
      name: "Office Appliance",
      lists: ["Computers", "Headphones", "Air Conditioner"],
    },
    {
      name: "Kitchen Appliance",
      lists: ["Microwave", "Refrigerator", "Oil Heater"],
    },
    {
      name: "Cameras",
      lists: ["Digital Camera", "Animation Camera", "Action Camera"],
    },
  ];

  const [showExtra, setShowExtra] = useState(-1);
  const extraRef = useRef<HTMLDivElement>(null);

  const atMouseEnter = (index: number) => {
    setShowExtra(index);
  };

  const atMouseLeave = (event: React.MouseEvent, index: number) => {
    const isHoveringExtra = extraRef.current?.contains(event.target as Node);
    if (!isHoveringExtra) {
      setShowExtra(-1);
    } else {
      setShowExtra(index);
    }
  };

  return (
    <Fragment>
      <div className="flex bg-white border-[2px] border-[#ccc] flex-col rounded-md items-center justify-between mr-14">
        <div className="p-3 bg-blue-400 w-full h-full rounded-t-[4px] mb-[1px] text-center text-white">
          <p>SHOP BY CATEGORY</p>
        </div>
        <div className="w-full">
          {navLinks.map((navLink, index) => (
            <div
              key={index}
              className={`flex justify-between relative w-full px-3 py-1 cursor-pointer ${
                index !== navLinks.length - 1 && `border-b-[1px] border-[#ccc]`
              }`}
              onMouseEnter={() => atMouseEnter(index)}
              onMouseLeave={(event) => atMouseLeave(event, index)}
              onClick={() => <Link to={navLink.link} />}
            >
              <div className="flex gap-2 py-2 items-center items-middle">
                <ArrowForwardIcon sx={{ height: "12px", width: "12px" }} />
                <Link
                  to={navLink.link}
                  className="hover:no-underline text-black"
                >
                  {navLink.name}
                </Link>
              </div>
              <div className="flex items-center">
                {navLink.hasExtra ? <ChevronRightIcon /> : ""}
              </div>
              <div
                className={`transition-all border-[1px] border-gray-400 ${
                  index === showExtra && navLink.hasExtra
                    ? `${`absolute z-20 right-0 top-[-1px] translate-x-full transition-all bg-white flex`}`
                    : `hidden`
                }`}
              >
                {Electronics.map((electronic, index) => (
                  <div
                    key={index}
                    className="py-3 px-4 basis-1/3 min-w-[200px]"
                  >
                    <div className="border-b-2 pb-1 border-[#ccc] text-nowrap hover:text-[#0056b3]">
                      {electronic.name}
                    </div>
                    <div>
                      {electronic.lists.map((list, index) => (
                        <Link
                          to={`/`}
                          key={index}
                          className="block py-1 hover:no-underline text-black text-nowrap"
                        >
                          {list}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default SidebarList;
