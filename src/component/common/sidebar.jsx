import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
export const ABOUT_US               = "https://cash4you.ca/about-us/";
export const CONTACT_US             = "https://cash4you.ca/contact-us/";
export const CARRER_APPLY           = "https://cash4you.ca/career-apply/";
export const INSTALLMENT_LOANS      = "https://cash4you.ca/installment-loans/";
export const PAYDAY_LOANS           = "https://cash4you.ca/payday-loans/";
export const CHEQUE_CASHING         = "https://cash4you.ca/services/cheque-cashing/";
export const WESTERN_UNION          = "https://cash4you.ca/services/western-union/";
export const FIND_A_STORE           = "https://cash4you.ca/company/find-a-store/";
export const PAY_MY_BALLENCE        = "https://cash4you.ca/paymybalance/";
export const FAQ                    = "https://cash4you.ca/faqs/";
export const PRIVICY_POLICY         = "https://cash4you.ca/company/privacy-policy/";
export const TERMS                  = "https://cash4you.ca/company/terms/";
export const ACCESSIBILITY          = "https://cash4you.ca/accessibility/";
export const DEBT_PAYMENT          = "https://secure.cash4you.ca/paymybalance";

 
export const SidebarItem = [
  {
    title: "Get Money",
    path: "/",
    // icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    subMenu: [
      {
        title: "Installment Loans",
        path: "https://cash4you.ca/installment-loans/",
        // icon: <IoIcons.IoIosPaper />,
        cName: "nav-text-heading",
      },
      {
        title: "Payday Loans",
        path: "https://cash4you.ca/payday-loans/",
        // icon: <IoIcons.IoIosPaper />,
        cName: "nav-text-heading"
      },
      {
        title: " Cheque Cashing",
        path: "https://cash4you.ca/services/cheque-cashing/",
        // icon: <IoIcons.IoIosPaper />,
        cName: "nav-text-heading"
      },
    ],
  },
  {
    title: "Manage Money",
    path: "/Profile",
    // icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
    subMenu: [
      {
        title: "Pay My Balance",
        path: "https://cash4you.ca/paymybalance/",
        // icon: <IoIcons.IoIosPaper />,
        cName: "nav-text-heading"
      },
      
    ],
  },
  {
    title: "Send Money",
    path: "/Test",
    // icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
    subMenu: [
      {
        title: "Western Union",
        path: "https://cash4you.ca/services/western-union/",
        // icon: <IoIcons.IoIosPaper />,
        cName: "nav-text-heading"
      },
      
    ],
  },
  {
    title: "Company",
    path: "/Test",
    // icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
    subMenu: [
      {
        title: " About Us",
        path: "https://cash4you.ca/about-us/",
        // icon: <IoIcons.IoIosPaper />,
        cName: "nav-text-heading"
      },
      {
        title: " Contact Us",
        path:  "https://cash4you.ca/contact-us/",
        // icon: <IoIcons.IoIosPaper />,
        cName: "nav-text-heading"
      },
      {
        title: " Careers",
        path: "https://cash4you.ca/career-apply/",
        // icon: <IoIcons.IoIosPaper />,
        cName: "nav-text-heading"
      },
      
    ],
  },
  {
    title: "Help",
    path: "/team",
    // icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
    subMenu: [
      {
        title: "Find a Store",
        path: "https://cash4you.ca/company/find-a-store/",
        // icon: <IoIcons.IoIosPaper />,
        cName: "nav-text-heading"
      },
      {
        title: "Debt Repayment",
        path: "https://secure.cash4you.ca/paymybalance",
        // icon: <IoIcons.IoIosPaper />,
        cName: "nav-text-heading"
      },
      {
        title: "FAQs",
        path:"https://cash4you.ca/faqs/",
        // icon: <IoIcons.IoIosPaper />,
        cName: "nav-text-heading"
      },
      
    ],
  },
];
