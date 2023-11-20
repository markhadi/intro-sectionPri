import { useState } from "react";
import logo from "../assets/images/logo.svg";
import iconArrowDown from "../assets/images/icon-arrow-down.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-close-menu.svg";
import iconTodo from "../assets/images/icon-todo.svg";
import iconCalendar from "../assets/images/icon-calendar.svg";
import iconReminders from "../assets/images/icon-reminders.svg";
import iconPlanning from "../assets/images/icon-planning.svg";

const Navbar = () => {
  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "features") {
      setFeaturesDropdown(!featuresDropdown);
      setCompanyDropdown(false);
    } else if (dropdown === "company") {
      setCompanyDropdown(!companyDropdown);
      setFeaturesDropdown(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <nav>
      <div className="flex gap-16 items-center w-full transition-all duration-300 max-lg:gap-6 max-md:justify-between">
        <a href="#" className="w-max">
          <img src={logo} alt="Company Logo" />
        </a>
        <ul className="flex gap-9 h-max max-md:hidden">
          {renderDropdownItem(
            "Features",
            [
              { text: "Todo List", icon: iconTodo },
              { text: "Calendar", icon: iconCalendar },
              { text: "Reminders", icon: iconReminders },
              { text: "Planning", icon: iconPlanning },
            ],
            featuresDropdown,
            () => toggleDropdown("features")
          )}
          {renderDropdownItem(
            "Company",
            [{ text: "History" }, { text: "Our Team" }, { text: "Blog" }],
            companyDropdown,
            () => toggleDropdown("company")
          )}
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <img
          src={iconMenu}
          alt="Menu Icon"
          className="hidden cursor-pointer max-md:block"
          onClick={toggleMobileMenu}
        />
      </div>

      <div className="flex gap-10 items-center max-md:hidden">
        <a href="#">Login</a>
        <a
          href="#"
          className="border border-[#696969] py-3 px-5 rounded-2xl hover:border-[#141414]"
        >
          Register
        </a>
      </div>

      <div
        className={`hidden max-md:block ${
          mobileMenuVisible ? "w-screen bg-black/50" : "w-0 delay-300"
        } fixed h-screen top-0 right-0 overflow-hidden transition-all duration-300`}
      >
        <div
          className={`absolute right-0 h-full w-max px-6 bg-[#FAFAFA] transition-all duration-300 ${
            mobileMenuVisible ? "slide-left" : "slide-right"
          } `}
        >
          <div className="py-5 flex justify-end">
            <img
              src={iconClose}
              alt="Close Icon"
              className="cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>
          <ul className="flex flex-col gap-7 h-max py-4">
            {renderDropdownItem(
              "Features",
              [
                { text: "Todo List", icon: iconTodo },
                { text: "Calendar", icon: iconCalendar },
                { text: "Reminders", icon: iconReminders },
                { text: "Planning", icon: iconPlanning },
              ],
              featuresDropdown,
              () => toggleDropdown("features")
            )}
            {renderDropdownItem(
              "Company",
              [{ text: "History" }, { text: "Our Team" }, { text: "Blog" }],
              companyDropdown,
              () => toggleDropdown("company")
            )}
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <div className="flex flex-col gap-4 py-6 items-center text-[14px]">
            <a href="#">Login</a>
            <a
              href="#"
              className="border border-[#696969] py-3 px-16 rounded-2xl hover:border-[#141414] w-full"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const renderDropdownItem = (label, items = [], isOpen, onClick) => (
  <li key={label} className="relative">
    <a href="#" className="flex items-center gap-2" onClick={onClick}>
      {label}
      <img
        src={iconArrowDown}
        alt="Dropdown Arrow"
        className={`h-max transition-all ${isOpen ? "rotate-180" : "rotate-0"}`}
      />
    </a>

    <ul
      className={`absolute max-md:relative shadow-2xl max-md:shadow-none flex flex-col gap-4 p-6 bg-[#FAFAFA] rounded-lg w-max top-6 max-md:top-0 transition-all duration-300 overflow-hidden ${
        label === "Features" ? "right-0" : "left-0"
      } ${
        isOpen
          ? "opacity-100 translate-y-0 max-md:h-max max-md:pb-0"
          : "opacity-0 -translate-y-2 max-md:translate-y-0 max-md:h-0 max-md:py-0"
      }`}
    >
      {items.map((item) => (
        <li key={item.text}>
          <a href="#" className="flex items-center gap-4">
            {item.icon && (
              <img
                src={item.icon}
                alt={`${item.text} Icon`}
                className="h-max"
              />
            )}
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </li>
);

export default Navbar;
