import dashIcon from "../assets/icons/Group.svg";
import compaintsIcon from "../assets/icons/complaints.svg";
import requestsIcon from "../assets/icons/serv-requests.svg";
import bugsIcon from "../assets/icons/bugs.svg";
import enhanceIcon from "../assets/icons/enhancement.svg";
import reportIcon from "../assets/icons/report.svg";
import faqIcon from "../assets/icons/help.svg";

export const menu = [
  {
    id: 1,
    title: "GENERAL",
    listItems: [
      {
        id: 1,
        title: "Dashboard",
        url: "/",
        icon: dashIcon,
      },
      // {
      //   id: 2,
      //   title: "Products",
      //   url: "/products",
      //   icon: "product.svg",
      // },
    ],
  },
  {
    id: 2,
    title: "TASK CATEGORY",
    listItems: [
      {
        id: 1,
        title: "Customer Complaints",
        url: "/customer-complaints",
        icon: compaintsIcon,
      },
      {
        id: 2,
        title: "Service Requests",
        url: "/service-requests",
        icon: requestsIcon,
      },
      {
        id: 3,
        title: "System Bugs & Errors",
        url: "/system-bugs-&-errors",
        icon: bugsIcon,
      },
      {
        id: 4,
        title: "System Enhancements",
        url: "/system-enhancements",
        icon: enhanceIcon,
      },
    ],
  },
  {
    id: 3,
    title: "REPORTS",
    listItems: [
      {
        id: 1,
        title: "My Reports",
        url: "/reports",
        icon: reportIcon,
      },
    ],
  },
  {
    id: 4,
    title: "SUPPORT",
    listItems: [
      {
        id: 1,
        title: "FAQs",
        url: "/",
        icon: faqIcon,
      },
    ],
  },
];

export const CustomerComplaints = [
  {
    id: 1,
    serviceRequest: "S2023_646722",
    classDescription: "ICMS",
    details: "Jane Smith  was unable to reset iCMS password",
    status: "new",
    internalPriority: "05",
    source: "EMAIL",
    summary: "Complaint. Staff was unable to reset password",
  },
  {
    id: 2,
    serviceRequest: "S2023_646722",
    classDescription: "ICMS",
    details: "New User creation",
    status: "Resolved",
    internalPriority: "05",
    source: "EMAIL",
    summary: "Complaint. Stuck at user id generation",
  },
  {
    id: 3,
    serviceRequest: "S2023_646724",
    classDescription: "ICMS",
    details: "John Palaka  was unable to login to iCMS",
    status: "Queued",
    internalPriority: "05",
    source: "EMAIL",
    summary: "Complaint. User was unable to login",
  },
  {
    id: 4,
    serviceRequest: "S2023_646721",
    classDescription: "ICMS",
    details:
      "CSAP000619117TD - Kindly assist by sending reset password link for the above account.",
    status: "new",
    internalPriority: "05",
    source: "EMAIL",
    summary: "Complaint. system is not sending password change link",
  },
  {
    id: 5,
    serviceRequest: "S2023_646723",
    classDescription: "ICMS",
    details: "Jane Smith  was unable to reset iCMS password",
    status: "Queued",
    internalPriority: "05",
    source: "EMAIL",
    summary: "Complaint. Staff was unable to reset password",
  },
];
