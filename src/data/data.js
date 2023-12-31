import dashIcon from "../assets/icons/Group.svg";
import compaintsIcon from "../assets/icons/complaints.svg";
import requestsIcon from "../assets/icons/serv-requests.svg";
import bugsIcon from "../assets/icons/bugs.svg";
import enhanceIcon from "../assets/icons/enhancement.svg";
import reportIcon from "../assets/icons/report.svg";
import faqIcon from "../assets/icons/help.svg";

export const newReqColor = "#FFA559C2";
export const pendReqColor = "#F6635C75";
export const overdueReqColor = "#D713137A";
export const closedReqColor = "#45FFCAF2";
export const totalReqColor = "#62B2FD75";

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
      // {
      //   id: 3,
      //   title: "System Bugs & Errors",
      //   url: "/system-bugs-&-errors",
      //   icon: bugsIcon,
      // },
      {
        id: 3,
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
export const ReportsList = [
  {
    id: 1,
    workOrderNo: "S2023_646722",
    maintenanceType: "Service requests",
    appName: "ICMS",
    month: "July",
    workOrderStatus: "Closed",
    within: "YES",
    unit: "CBC",
  },
  {
    id: 2,
    workOrderNo: "S2023_646722",
    maintenanceType: "Service requests",
    appName: "ICMS",
    month: "June",
    workOrderStatus: "Closed",
    within: "YES",
    unit: "CBC",
  },
  {
    id: 3,
    workOrderNo: "S2023_646724",
    maintenanceType: "Service requests",
    appName: "SIMBA 2005",
    month: "July",
    workOrderStatus: "Closed",
    within: "YES",
    unit: "CBC",
  },
  {
    id: 4,
    workOrderNo: "S2023_646721",
    maintenanceType: "Service requests",
    appName: "ISCAN",
    month: "July",
    workOrderStatus: "Closed",
    within: "YES",
    unit: "CBC",
  },
  {
    id: 5,
    workOrderNo: "S2023_646723",
    maintenanceType: "Service requests",
    appName: "ISCAN",
    month: "July",
    workOrderStatus: "Closed",
    within: "YES",
    unit: "CBC",
  },
];
export const SysBugs = [
  {
    id: 1,
    sir: "124234",
    summary:
      "Upon addition of a new attachment, the system is replacing the previously attached doc with new",
    component: "CLR",
    status: "NEW",
    resolution: "Fixed",
    reporter: "Albert Theus",
    priority: "P2",
  },
  {
    id: 2,
    sir: "124234",
    summary:
      "Upon addition of a new attachment, the system is replacing the previously attached doc with new",
    component: "CLR",
    status: "NEW",
    resolution: "Fixed",
    reporter: "Albert Theus",
    priority: "P2",
  },
  {
    id: 3,
    sir: "124234",
    summary:
      "Upon addition of a new attachment, the system is replacing the previously attached doc with new",
    component: "CLR",
    status: "NEW",
    resolution: "Fixed",
    reporter: "Albert Theus",
    priority: "P2",
  },
  {
    id: 4,
    sir: "124234",
    summary:
      "Upon addition of a new attachment, the system is replacing the previously attached doc with new",
    component: "CLR",
    status: "NEW",
    resolution: "Fixed",
    reporter: "Albert Theus",
    priority: "P2",
  },
  {
    id: 5,
    sir: "124234",
    summary:
      "Upon addition of a new attachment, the system is replacing the previously attached doc with new",
    component: "CLR",
    status: "NEW",
    resolution: "Fixed",
    reporter: "Albert Theus",
    priority: "P2",
  },
];
export const ServiceReqs = [
  {
    id: 1,
    serviceRequest: "S2023_646722",
    classDescription: "ICMS",
    details: "Jane Smith  was unable to reset iCMS password",
    status: "NEW",
    internalPriority: "05",
    source: "EMAIL",
    summary: "Service Request Staff was unable to reset password",
  },
  {
    id: 2,
    serviceRequest: "S2023_646722",
    classDescription: "ICMS",
    details: "New User creation",
    status: "NEW",
    internalPriority: "05",
    source: "EMAIL",
    summary: "Service Request Stuck at user id generation",
  },
  {
    id: 3,
    serviceRequest: "S2023_646724",
    classDescription: "ICMS",
    details: "John Palaka  was unable to login to iCMS",
    status: "NEW",
    internalPriority: "05",
    source: "EMAIL",
    summary: "Service Request User was unable to login",
  },
  {
    id: 4,
    serviceRequest: "S2023_646721",
    classDescription: "ICMS",
    details: "Jane Smith  was unable to reset iCMS password",
    status: "NEW",
    internalPriority: "05",
    source: "EMAIL",
    summary: "Service Request to reset password",
  },
  {
    id: 5,
    serviceRequest: "S2023_646723",
    classDescription: "ICMS",
    details: "Jane Smith  was unable to reset iCMS password",
    status: "NEW",
    internalPriority: "05",
    source: "EMAIL",
    summary: "Service Request to reset password",
  },
];
export const SysEnhancements = [
  {
    id: 1,
    serviceRequest: "S2023_646722",
    classDescription: "ICMS",
    details: "Jane Smith  was unable to reset iCMS password",
    status: "NEW",
    internalPriority: "05",
    source: "EMAIL",
    summary: "System Enhancements Staff was unable to reset password",
  },
  {
    id: 2,
    serviceRequest: "S2023_646722",
    classDescription: "ICMS",
    details: "New User creation",
    status: "NEW",
    internalPriority: "05",
    source: "EMAIL",
    summary: "System Enhancements Stuck at user id generation",
  },
  {
    id: 3,
    serviceRequest: "S2023_646724",
    classDescription: "ICMS",
    details: "John Palaka  was unable to login to iCMS",
    status: "NEW",
    internalPriority: "05",
    source: "EMAIL",
    summary: "System Enhancements User was unable to login",
  },
  {
    id: 4,
    serviceRequest: "S2023_646721",
    classDescription: "ICMS",
    details: "Jane Smith  was unable to reset iCMS password",
    status: "NEW",
    internalPriority: "05",
    source: "EMAIL",
    summary: "System Enhancements to reset password",
  },
  {
    id: 5,
    serviceRequest: "S2023_646723",
    classDescription: "ICMS",
    details: "Jane Smith  was unable to reset iCMS password",
    status: "NEW",
    internalPriority: "05",
    source: "EMAIL",
    summary: "System Enhancements to reset password",
  },
];
