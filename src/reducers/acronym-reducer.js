const Acronym = (state=acronymInitialState, action) => {
	switch (action.type) {
        case "ADD_ALL_ACRONYMS": {
            state = {
                Acronyms: action.payload
            };
            break;
        }
		default:
			return state;
	}
	return state;
};

const acronymInitialState = {
  Acronyms: [
 {
   "FIELD1": "ACL",
   "FIELD2": "Access Control List",
   "FIELD3": "A method for limiting the use of a specific database to authorised users in Notes"
 },
 {
   "FIELD1": "ASEAN",
   "FIELD2": "Association of South East Asian Nations.",
   "FIELD3": "IBM region within AP Geo"
 },
 {
   "FIELD1": "AEST",
   "FIELD2": "Australian Eastern Standard Time",
   "FIELD3": "Standard Time Zone measurement for the east coast of Australia ? refer: http://www.worldtimezone.com/time-australia.htm for additional information��"
 },
 {
   "FIELD1": "AH",
   "FIELD2": "After Hours",
   "FIELD3": ""
 },
 {
   "FIELD1": "AHE",
   "FIELD2": "Application Hosting Environment",
   "FIELD3": "The GWA environment is being replaced by the AHE application hosting environment infrastructure"
 },
 {
   "FIELD1": "",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "AID",
   "FIELD2": "Application Information Document",
   "FIELD3": ""
 },
 {
   "FIELD1": "AIX",
   "FIELD2": "Advanced Interactive Executive",
   "FIELD3": ""
 },
 {
   "FIELD1": "AMS",
   "FIELD2": "Application Management Services",
   "FIELD3": "IGS Business Unit IGS sells services for custom applications to customers"
 },
 {
   "FIELD1": "ANZ",
   "FIELD2": "Australia and New Zealand",
   "FIELD3": ""
 },
 {
   "FIELD1": "AO",
   "FIELD2": "Application Owner",
   "FIELD3": ""
 },
 {
   "FIELD1": "AP",
   "FIELD2": "Asia Pacific/Assisted Perform",
   "FIELD3": "Referencing an IBM GEO"
 },
 {
   "FIELD1": "APAR",
   "FIELD2": "Authorised Program Analysis Report",
   "FIELD3": "A request for correction of a defect in a current release of an IBM-supplied program"
 },
 {
   "FIELD1": "API",
   "FIELD2": "Application Programming Interface",
   "FIELD3": "An interface that allows an application program that is written in a high-level language to use specific data or functions of the operating system or another program"
 },
 {
   "FIELD1": "ASCA",
   "FIELD2": "Application Systems Control and Auditability",
   "FIELD3": "A Control that ensures the integrity of the business data. Application system controls are applicable for all internally used application systems regardless of how developed or acquired."
 },
 {
   "FIELD1": "ASCP",
   "FIELD2": "Application Support Control Plan",
   "FIELD3": ""
 },
 {
   "FIELD1": "AT&T Net Client",
   "FIELD2": "American Telephone and Telegraph Network Client",
   "FIELD3": "AT&T Network Client is a remote access tool which can be used for both Narrow and Broad Band access to the IBM network (formerly MTS ? Managed Tunnel Service and AVTS Virtual Tunnel Service)"
 },
 {
   "FIELD1": "AVTS",
   "FIELD2": "AT&T Virtual Tunnel Service",
   "FIELD3": "Refer AT&T Net Client"
 },
 {
   "FIELD1": "AU",
   "FIELD2": "Australia",
   "FIELD3": ""
 },
 {
   "FIELD1": "AWD",
   "FIELD2": "Agile with Discipline",
   "FIELD3": ""
 },
 {
   "FIELD1": "B",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "BAO",
   "FIELD2": "Business Application Owner",
   "FIELD3": ""
 },
 {
   "FIELD1": "BAU",
   "FIELD2": "Business-As-Usual",
   "FIELD3": "Used to describe that things are done the way they usually."
 },
 {
   "FIELD1": "BBN",
   "FIELD2": "Bayesian Belief Network",
   "FIELD3": ""
 },
 {
   "FIELD1": "BCG",
   "FIELD2": "Business Conduct Guidelines",
   "FIELD3": "specify IBM's standards of business ethics, basic values and principles."
 },
 {
   "FIELD1": "BCO",
   "FIELD2": "Basic Client Offering",
   "FIELD3": "A reduced offering/delivery offered to a subset of IBM employees. A reduction of SCO support"
 },
 {
   "FIELD1": "BCP",
   "FIELD2": "Business Continuity Plan",
   "FIELD3": ""
 },
 {
   "FIELD1": "BCS",
   "FIELD2": "Business Consulting Services",
   "FIELD3": "A department/Business Organisation of IBM"
 },
 {
   "FIELD1": "BLOG",
   "FIELD2": "BLOG(Websites containing running personal commentary with the most recent entry at the top.)",
   "FIELD3": "Websites containing running personal commentary with the most recent entry at the top."
 },
 {
   "FIELD1": "BOND",
   "FIELD2": "Buy On Demand",
   "FIELD3": "Procurement Application�"
 },
 {
   "FIELD1": "BP",
   "FIELD2": "BluePages",
   "FIELD3": "Global tool to find contact information for people in IBM"
 },
 {
   "FIELD1": "BRIO",
   "FIELD2": "BRIO(Aka Hyperion. Business Unit application that assists with business intelligence needs)",
   "FIELD3": "Aka Hyperion. Business Unit application that assists with business intelligence needs. More information: BRIO Overview"
 },
 {
   "FIELD1": "BSO",
   "FIELD2": "Boundary Service Offering",
   "FIELD3": "Designed specifically to accommodate the need to subdivide certain areas of the IBM network into designated Demonstration, Test, and Education environments"
 },
 {
   "FIELD1": "BSOD",
   "FIELD2": "Blue Screen of Death",
   "FIELD3": ""
 },
 {
   "FIELD1": "BT / CIO",
   "FIELD2": "Business Transformation/ Chief Information Officer",
   "FIELD3": ""
 },
 {
   "FIELD1": "BTMS",
   "FIELD2": "Business Transformation Management System",
   "FIELD3": "A system used by IBM worldwide to identify, develop, and deploy IBM information technology and infrastructure"
 },
 {
   "FIELD1": "BTMT",
   "FIELD2": "Business Transformation Management Tool",
   "FIELD3": "A workflow tool developed by the BT-CIO to manage development of solutions, projects, and assets through the Solution Development processes of BTMS."
 },
 {
   "FIELD1": "BTO",
   "FIELD2": "Business Transformation Outsourcing",
   "FIELD3": "Part of Business Performance Transformation Services (BPTS) involves partnering with clients to transform their business processes, applications and IT infrastructure, and then operating these processes for the client"
 },
 {
   "FIELD1": "BU",
   "FIELD2": "Business Unit",
   "FIELD3": "An organisational unit within IBM representing a major business area. Examples include: Server and Storage Systems Group, Sales and Distribution, Software Group, IBM Research, Technology Group, Global Services, IBM Global Financing, Corporate Functions, and Personal Computer Division."
 },
 {
   "FIELD1": "BuzzHR",
   "FIELD2": "Buzz Human Resources",
   "FIELD3": "Where IBM employees get help with all HR Applications. See http://w3-6.ibm.com/hr/ap/askaphr.nsf/generaldoc/nobuzz for BuzzHR sites by country in AP"
 },
 {
   "FIELD1": "C",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "C4eB",
   "FIELD2": "Client for eBusiness",
   "FIELD3": "Standard IBM SCO Operating image"
 },
 {
   "FIELD1": "CAAPS",
   "FIELD2": "Common Alternative Accounts Payable System",
   "FIELD3": "Procurement Application ? not supported within the IBM CSC"
 },
 {
   "FIELD1": "CAPA",
   "FIELD2": "Corrective Action Preventive Action",
   "FIELD3": ""
 },
 {
   "FIELD1": "CAPEX",
   "FIELD2": "Capital Expense",
   "FIELD3": ""
 },
 {
   "FIELD1": "CAR",
   "FIELD2": "Casual Analysis and Resolution",
   "FIELD3": ""
 },
 {
   "FIELD1": "CCCS",
   "FIELD2": "Common Customs Classification System",
   "FIELD3": "Global Logistics Tool�"
 },
 {
   "FIELD1": "CCMS",
   "FIELD2": "Central Customer Master System / Customer Care Management System / Customer Contract Management system / Customer Contact Management System",
   "FIELD3": "Web application ? that allows direct search and display access to customer master data. Managed out of EMEA"
 },
 {
   "FIELD1": "",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "CDF",
   "FIELD2": "Complexity Determination Form",
   "FIELD3": ""
 },
 {
   "FIELD1": "CEO",
   "FIELD2": "Chief Executive Officer",
   "FIELD3": "The highest-ranking corporate officer or executive officer of a corporation, company, or agency. In IBM, this position is currently held by Sam Palmisano"
 },
 {
   "FIELD1": "CHQ",
   "FIELD2": "Corporate Headquarters",
   "FIELD3": ""
 },
 {
   "FIELD1": "CIO",
   "FIELD2": "Chief Information Officer",
   "FIELD3": ""
 },
 {
   "FIELD1": "CLAIM",
   "FIELD2": "Common Labour Information Management System",
   "FIELD3": "Employee labour time recording tool ? aka eClaim"
 },
 {
   "FIELD1": "CM",
   "FIELD2": "Change Management / Content Manager",
   "FIELD3": ""
 },
 {
   "FIELD1": "CMI",
   "FIELD2": "Citrix Management Infrastructurem",
   "FIELD3": ""
 },
 {
   "FIELD1": "CMMI",
   "FIELD2": "Capability Maturity Model Integration",
   "FIELD3": ""
 },
 {
   "FIELD1": "COB",
   "FIELD2": "Close of Business",
   "FIELD3": ""
 },
 {
   "FIELD1": "COO",
   "FIELD2": "Country of Origin",
   "FIELD3": ""
 },
 {
   "FIELD1": "CPIF",
   "FIELD2": "Checkpoint Integrity Flex",
   "FIELD3": "Firewall"
 },
 {
   "FIELD1": "CPMA",
   "FIELD2": "Change Problem Management Application�",
   "FIELD3": ""
 },
 {
   "FIELD1": "CRBS",
   "FIELD2": "Conferencing Room Booking System",
   "FIELD3": "CRBS is a series of databases used to reserve a conference room in any IBM office in Australia"
 },
 {
   "FIELD1": "CRM",
   "FIELD2": "Customer Relationship Management",
   "FIELD3": "Business Unit Application primarily used by IBM.COM and sales professionals. More information: See Help@IBM - /CRM+Siebel+tips"
 },
 {
   "FIELD1": "CRS",
   "FIELD2": "Commodity Review Solution",
   "FIELD3": "Business Unit� Application used by Procurement use for reviewing individual parts on Bills-of-Material"
 },
 {
   "FIELD1": "CRU",
   "FIELD2": "Customer Replaceable Unit",
   "FIELD3": "Part of a device (such as a keyboard) that is considered to be replaceable by a customer or end user"
 },
 {
   "FIELD1": "CSC",
   "FIELD2": "Customer Service Centre",
   "FIELD3": "Also known as Helpdesk or CCMC in Australia ? Customer Care Management Centre"
 },
 {
   "FIELD1": "CWA",
   "FIELD2": "Common Web Authentication",
   "FIELD3": "Refer: w3id Profile for Password Management�"
 },
 {
   "FIELD1": "D",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "DASD",
   "FIELD2": "Direct Access Storage Device (aka Disk space)",
   "FIELD3": "Storage on a disk connected to a large Storage on a disk connected to a large mainframe computer, rather than on the hard or soft disks in a Personal Computer."
 },
 {
   "FIELD1": "DB2",
   "FIELD2": "IBM Database 2",
   "FIELD3": "DB2 is IBM's flagship relational database management system."
 },
 {
   "FIELD1": "DB",
   "FIELD2": "Database",
   "FIELD3": ""
 },
 {
   "FIELD1": "D-Bom",
   "FIELD2": "Database-oh-Matic",
   "FIELD3": "IBM Notes Application that allows users to request a new database from one of three GNA-certified templates; Discussion, Document Library, and Teamroom / TeamRoomPlus (TR+)."
 },
 {
   "FIELD1": "DES",
   "FIELD2": "Delivery Execellence Specialist",
   "FIELD3": ""
 },
 {
   "FIELD1": "DOU",
   "FIELD2": "Document Of Understanding",
   "FIELD3": ""
 },
 {
   "FIELD1": "DP",
   "FIELD2": "Defect Prevention",
   "FIELD3": ""
 },
 {
   "FIELD1": "DPE",
   "FIELD2": "Delivery Project Executive�",
   "FIELD3": ""
 },
 {
   "FIELD1": "DR",
   "FIELD2": "Disaster Recovery",
   "FIELD3": ""
 },
 {
   "FIELD1": "DRMS",
   "FIELD2": "Directory Record Management System",
   "FIELD3": "Tool to manage non-IBM employee records/status. Feeds into Bluepages"
 },
 {
   "FIELD1": "DSR",
   "FIELD2": "Deskside Services Representative",
   "FIELD3": ""
 },
 {
   "FIELD1": "DSS",
   "FIELD2": "Deskside Support Services",
   "FIELD3": "Aka DS ( Deskside Support) or DCS (Deskside Client Support)"
 },
 {
   "FIELD1": "E",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "E2E",
   "FIELD2": "End to End",
   "FIELD3": ""
 },
 {
   "FIELD1": "eAMT",
   "FIELD2": "e-Asset Management Tool",
   "FIELD3": "Tool designed to assist employees manage capital assets assigned to them ( including asset return/disposal/transfer)"
 },
 {
   "FIELD1": "eBOD",
   "FIELD2": "eBusiness on Demand",
   "FIELD3": "Note: eBOD should not be used as an acronym for e-business on demand"
 },
 {
   "FIELD1": "EFH",
   "FIELD2": "Employee Focused Help",
   "FIELD3": "Program designed to give power of Self Help back to employees.� Initiatives include ISSF and Help@IBM"
 },
 {
   "FIELD1": "EMEA",
   "FIELD2": "Europe, Middle East & Africa�",
   "FIELD3": "Referencing an IBM GEO"
 },
 {
   "FIELD1": "EOD",
   "FIELD2": "End of Day",
   "FIELD3": ""
 },
 {
   "FIELD1": "EOY",
   "FIELD2": "End of Year",
   "FIELD3": ""
 },
 {
   "FIELD1": "EPP",
   "FIELD2": "Employee Purchase Program",
   "FIELD3": "Web application designed for employees interested in purchasing personal IBM equipment"
 },
 {
   "FIELD1": "ERP",
   "FIELD2": "Enterprise Resource Planning",
   "FIELD3": ""
 },
 {
   "FIELD1": "ESR",
   "FIELD2": "Electronic Submission Request",
   "FIELD3": "SWG web-based tool used to create and track problem reports"
 },
 {
   "FIELD1": "EUA",
   "FIELD2": "End User Assistance",
   "FIELD3": ""
 },
 {
   "FIELD1": "EUS",
   "FIELD2": "End User Services",
   "FIELD3": "A combination of CSC and DSS"
 },
 {
   "FIELD1": "EVA",
   "FIELD2": "Earned Value Analysis",
   "FIELD3": ""
 },
 {
   "FIELD1": "F",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "FAQ",
   "FIELD2": "Frequently Asked Questions",
   "FIELD3": ""
 },
 {
   "FIELD1": "FMEA",
   "FIELD2": "Failure Mode Effect Analysis",
   "FIELD3": ""
 },
 {
   "FIELD1": "FMS",
   "FIELD2": "Field Management System",
   "FIELD3": "Business Unit application used to manage sales incentives and commissions. More information: FMS Overview"
 },
 {
   "FIELD1": "FTE",
   "FIELD2": "Full Time Equivalent",
   "FIELD3": ""
 },
 {
   "FIELD1": "FTP",
   "FIELD2": "File Transfer Protocol",
   "FIELD3": ""
 },
 {
   "FIELD1": "G",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "GARS",
   "FIELD2": "Global Asset Recovery Services",
   "FIELD3": ""
 },
 {
   "FIELD1": "GCG",
   "FIELD2": "Greater China Group",
   "FIELD3": "Incorporating Mainland China, Hong Kong and Taiwan"
 },
 {
   "FIELD1": "GDC",
   "FIELD2": "Global Delivery Center",
   "FIELD3": ""
 },
 {
   "FIELD1": "GDP",
   "FIELD2": "Global Delivery Partner",
   "FIELD3": ""
 },
 {
   "FIELD1": "GEO",
   "FIELD2": "Geography",
   "FIELD3": "In IBM terms, the Geography or 'Geo' refers to a collection of countries/regions in that part of the world. For example, the Geography of Asia Pacific (AP), is made up of Regions and Countries. A Region is a collection of countries (for example, the Region known as A/NZ is made up of two countries, Australia and New Zealand). Hence, the hierarchy is Geo (AP), Region (A/NZ), Country (Australia or New Zealand). Some countries are not grouped into regions. Other GEOs ? LA, NA, & EMEA"
 },
 {
   "FIELD1": "GNA",
   "FIELD2": "Global Network Architecture",
   "FIELD3": "Refers to IBM?s Network standards and Architecture"
 },
 {
   "FIELD1": "GP",
   "FIELD2": "Guided Perform�",
   "FIELD3": ""
 },
 {
   "FIELD1": "GPE",
   "FIELD2": "Global Project Executive�",
   "FIELD3": ""
 },
 {
   "FIELD1": "GPWS",
   "FIELD2": "Global Print Web Site",
   "FIELD3": "Global Print Strategy ? w3.ibm.com/tools/print"
 },
 {
   "FIELD1": "GS",
   "FIELD2": "IBM Global Services",
   "FIELD3": "A division of IBM"
 },
 {
   "FIELD1": "GSA",
   "FIELD2": "Global Storage Architecture",
   "FIELD3": "Remote storage facility"
 },
 {
   "FIELD1": "GSD",
   "FIELD2": "Global Service Delivery",
   "FIELD3": ""
 },
 {
   "FIELD1": "GVI",
   "FIELD2": "Global Voice Infrastructure",
   "FIELD3": ""
 },
 {
   "FIELD1": "GWA",
   "FIELD2": "Global Web Architecture",
   "FIELD3": "Refers to IBM?s Web standards and Architecture�"
 },
 {
   "FIELD1": "H",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "HD",
   "FIELD2": "Help Desk",
   "FIELD3": "Also known as CSC ? Customer Service Centre"
 },
 {
   "FIELD1": "HOST",
   "FIELD2": "Hierarchically Operated String Transcriber",
   "FIELD3": ""
 },
 {
   "FIELD1": "HR",
   "FIELD2": "Human Resource",
   "FIELD3": ""
 },
 {
   "FIELD1": "HTML",
   "FIELD2": "Hypertext Markup Language�",
   "FIELD3": "HTML is the an authoring language that defines the structure and layout of a Web document by using a variety of tags and attributes"
 },
 {
   "FIELD1": "HTTP",
   "FIELD2": "Hypertext Transport Protocol",
   "FIELD3": ""
 },
 {
   "FIELD1": "I",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "IBM",
   "FIELD2": "International Business Machine",
   "FIELD3": "International Business Machines Corporation, the world's largest computer manufacturer. It was incorporated in 1911 as the Computing Tabulating Recording Company as a result of a merger of three companies, one of which had been Hermann Hollerith's Tabulating Machine Company, formed 1896. It adopted its present name in 1924."
 },
 {
   "FIELD1": "ICA",
   "FIELD2": "Inter-company Agreement",
   "FIELD3": "Application for creating Inter-company Agreements and obtaining approval for them"
 },
 {
   "FIELD1": "ICE",
   "FIELD2": "Integrated Customer Experience",
   "FIELD3": "Full replacement of IBM Global Services (IGS) customer-facing websites into one common site and experiences."
 },
 {
   "FIELD1": "ICLA",
   "FIELD2": "Intranet Contract Labor Approval",
   "FIELD3": "Application for IGS contractors to submit time against an internal and external accounts"
 },
 {
   "FIELD1": "ICT",
   "FIELD2": "IBM Community Tools",
   "FIELD3": "Instant Messaging Tool"
 },
 {
   "FIELD1": "IDD",
   "FIELD2": "Intelligent Device Discovery",
   "FIELD3": "IBM developed network scanning� tool used to discover and capture all IP network attached devices"
 },
 {
   "FIELD1": "IDP",
   "FIELD2": "Individual Development Plan",
   "FIELD3": "HR application used by IBM employees to help plan and develop their career"
 },
 {
   "FIELD1": "IE",
   "FIELD2": "Internet Explorer",
   "FIELD3": ""
 },
 {
   "FIELD1": "IEE",
   "FIELD2": "Internal Entitlement Engine",
   "FIELD3": ""
 },
 {
   "FIELD1": "",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "IEE- EP ",
   "FIELD2": "Internal Entitlement Engine - Entitlement Preprocessor",
   "FIELD3": ""
 },
 {
   "FIELD1": "IGA",
   "FIELD2": "IBM Global Account",
   "FIELD3": ""
 },
 {
   "FIELD1": "IGF",
   "FIELD2": "IBM Global Financing",
   "FIELD3": "IBM's financing division provides clients worldwide with smart financing options from simple leases and loans to complex, customised transactions"
 },
 {
   "FIELD1": "IGS",
   "FIELD2": "IBM Global Services",
   "FIELD3": "IBM Services Division"
 },
 {
   "FIELD1": "ILC",
   "FIELD2": "Intranet Labour Claim",
   "FIELD3": "Application for IGS IBM employees submit time against an internal and external accounts"
 },
 {
   "FIELD1": "IMAC",
   "FIELD2": "Install, Move, Add, Change",
   "FIELD3": ""
 },
 {
   "FIELD1": "IP Dial",
   "FIELD2": "Internet Protocol Dialler",
   "FIELD3": "AT&T Network Client for Narrowband access to the IBM network"
 },
 {
   "FIELD1": "IS",
   "FIELD2": "Infrasructure Services",
   "FIELD3": "IBM's Infrastructure Services Division"
 },
 {
   "FIELD1": "ISAM",
   "FIELD2": "IBM Standard Asset Manager",
   "FIELD3": "Inventory tool which collects a wide range of hardware and software information on the workstation"
 },
 {
   "FIELD1": "ISC",
   "FIELD2": "Integrated Supply Chain",
   "FIELD3": "IBM division for manufacturing"
 },
 {
   "FIELD1": "ISDS",
   "FIELD2": "IBM Software Download Service",
   "FIELD3": "IBM?s internal software download solution - Applications available on ISDS are provided \"as is.\"��"
 },
 {
   "FIELD1": "ISSF",
   "FIELD2": "IBM Standard Solution Finder",
   "FIELD3": "Self Help Site for all IBM employees: w3.ibm.com/help/solutions"
 },
 {
   "FIELD1": "ISSI",
   "FIELD2": "IBM Standard Software Site",
   "FIELD3": "Web-based site to download installable packages over the Intranet, includes a wide range of business applications standard across IBM."
 },
 {
   "FIELD1": "IST",
   "FIELD2": "India Service Time",
   "FIELD3": "GMT +6.5"
 },
 {
   "FIELD1": "ITCS300",
   "FIELD2": "Information Technology Corporate Standard 300",
   "FIELD3": "Security and Use Standards for IBM Employees"
 },
 {
   "FIELD1": "ISMA",
   "FIELD2": "IBM's Standard Migration Assistant",
   "FIELD3": "Data Migration Tool available to assist IBM employee?s."
 },
 {
   "FIELD1": "IVR",
   "FIELD2": "Interface Voltage Reference",
   "FIELD3": ""
 },
 {
   "FIELD1": "",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "",
   "FIELD2": "Interactive Voice Response",
   "FIELD3": ""
 },
 {
   "FIELD1": "J",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "JAD",
   "FIELD2": "Joint Application Design",
   "FIELD3": ""
 },
 {
   "FIELD1": "JANET",
   "FIELD2": "Joint Academic Network",
   "FIELD3": ""
 },
 {
   "FIELD1": "JAR",
   "FIELD2": "Java Archive (file format)",
   "FIELD3": ""
 },
 {
   "FIELD1": "JCL",
   "FIELD2": "Job Control Language",
   "FIELD3": ""
 },
 {
   "FIELD1": "JDBC",
   "FIELD2": "Java Database Connectivity",
   "FIELD3": ""
 },
 {
   "FIELD1": "JIPS",
   "FIELD2": "JANET Internet Protocol Service",
   "FIELD3": ""
 },
 {
   "FIELD1": "JMS",
   "FIELD2": "Java Message Service",
   "FIELD3": ""
 },
 {
   "FIELD1": "JPEG",
   "FIELD2": "Joint Photographic Experts Group (graphic file format)",
   "FIELD3": ""
 },
 {
   "FIELD1": "JRE",
   "FIELD2": "Java Runtime Environment",
   "FIELD3": ""
 },
 {
   "FIELD1": "",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "",
   "FIELD2": "Java Runtime Engine",
   "FIELD3": ""
 },
 {
   "FIELD1": "JVM",
   "FIELD2": "Java Virtual Machine",
   "FIELD3": ""
 },
 {
   "FIELD1": "K",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "KT",
   "FIELD2": "Knowledge Transfer",
   "FIELD3": ""
 },
 {
   "FIELD1": "KTM",
   "FIELD2": "Knowledge Transition Manager",
   "FIELD3": ""
 },
 {
   "FIELD1": "K-VIEW",
   "FIELD2": "Knowledge View",
   "FIELD3": "BCS - worldwide knowledge sharing system"
 },
 {
   "FIELD1": "L",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "LA",
   "FIELD2": "Latin America",
   "FIELD3": "Referencing an IBM GEO"
 },
 {
   "FIELD1": "LAM",
   "FIELD2": "Look Ahead Meeting",
   "FIELD3": ""
 },
 {
   "FIELD1": "LAN",
   "FIELD2": "Local Area Network",
   "FIELD3": ""
 },
 {
   "FIELD1": "LCA",
   "FIELD2": "Lower Control Limit",
   "FIELD3": ""
 },
 {
   "FIELD1": "LOB",
   "FIELD2": "Line of Business",
   "FIELD3": "Divisions of a company responsible for the production and creation of the organisation?s products and/or services."
 },
 {
   "FIELD1": "M",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "MFD",
   "FIELD2": "Multi Function Device",
   "FIELD3": "MFD - consolidation of copy, print, fax & scan options onto the one device ? refer MFD fast start guide"
 },
 {
   "FIELD1": "MFS",
   "FIELD2": "Manufacturing Floor System�",
   "FIELD3": "Application used to assist in direction and control of assembly of IBM computers."
 },
 {
   "FIELD1": "MM",
   "FIELD2": "Migration Manager",
   "FIELD3": ""
 },
 {
   "FIELD1": "MN",
   "FIELD2": "ManageNow",
   "FIELD3": ""
 },
 {
   "FIELD1": "MVA",
   "FIELD2": "Manufacturing Value Add",
   "FIELD3": ""
 },
 {
   "FIELD1": "MIB",
   "FIELD2": "Management Information Base",
   "FIELD3": ""
 },
 {
   "FIELD1": "MIB",
   "FIELD2": "Management Information Base",
   "FIELD3": ""
 },
 {
   "FIELD1": "N",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "NA",
   "FIELD2": "North America",
   "FIELD3": "Referencing an IBM GEO"
 },
 {
   "FIELD1": "NAV",
   "FIELD2": "Norton Antivirus",
   "FIELD3": ""
 },
 {
   "FIELD1": "NBE",
   "FIELD2": "Network Boundary Environment",
   "FIELD3": "Firewall"
 },
 {
   "FIELD1": "NCO",
   "FIELD2": "Network Computing Offering�",
   "FIELD3": ""
 },
 {
   "FIELD1": "Netvista",
   "FIELD2": "Netvista",
   "FIELD3": "Part of IBM?s family of Desktop Workstations. For overview: go to http://www.lenovo.com/au/en/ select Support & Downloads"
 },
 {
   "FIELD1": "NS",
   "FIELD2": "Network Service",
   "FIELD3": ""
 },
 {
   "FIELD1": "NWS",
   "FIELD2": "NetWorkStation Management",
   "FIELD3": ""
 },
 {
   "FIELD1": "NFS",
   "FIELD2": "Network File System",
   "FIELD3": ""
 },
 {
   "FIELD1": "NIS",
   "FIELD2": "Network Information Services",
   "FIELD3": ""
 },
 {
   "FIELD1": "NZ",
   "FIELD2": "New Zealand",
   "FIELD3": ""
 },
 {
   "FIELD1": "O",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "ODW",
   "FIELD2": "On Demand Workplace",
   "FIELD3": "The On Demand Workplace is the single portal solution for IBM's intranet"
 },
 {
   "FIELD1": "OEM",
   "FIELD2": "Original Equipment Manufacturer",
   "FIELD3": ""
 },
 {
   "FIELD1": "OOC",
   "FIELD2": "Out of Criteria",
   "FIELD3": ""
 },
 {
   "FIELD1": "OOP",
   "FIELD2": "Out of Profile",
   "FIELD3": "Work performed that is outside of standard delivery"
 },
 {
   "FIELD1": "OOS",
   "FIELD2": "Out of Scope",
   "FIELD3": "Work performed that is not a contractual requirement"
 },
 {
   "FIELD1": "OSM",
   "FIELD2": "Online Storage Management",
   "FIELD3": "Program to monitor Notes user mail file size and alert the user when specific thresholds have been reached.�"
 },
 {
   "FIELD1": "P",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "PBA",
   "FIELD2": "Proposal Baseline Assessment",
   "FIELD3": ""
 },
 {
   "FIELD1": "PBC",
   "FIELD2": "Personal Business Commitments",
   "FIELD3": "HR Application - application used by IBM employees to set annual goals and be evaluated on by performance"
 },
 {
   "FIELD1": "PBS",
   "FIELD2": "Product Breakdown Structure",
   "FIELD3": ""
 },
 {
   "FIELD1": "PC",
   "FIELD2": "Personal Computer",
   "FIELD3": "Meaning Desktop Workstation (ThinkCentre or Netvista)"
 },
 {
   "FIELD1": "PCR",
   "FIELD2": "Project Change Request",
   "FIELD3": ""
 },
 {
   "FIELD1": "PCOMM",
   "FIELD2": "Personal Communications",
   "FIELD3": "Full-function emulator. In addition to host terminal emulation, it provides these useful features: File transfer, Dynamic configuration, An easy-to-use graphical interface, APIs for SNA-based client applications, An API allowing TCP/IP-based applications to communicate over an SNA-based network"
 },
 {
   "FIELD1": "PD",
   "FIELD2": "Problem Determination",
   "FIELD3": ""
 },
 {
   "FIELD1": "PDR",
   "FIELD2": "Project Definition Report",
   "FIELD3": ""
 },
 {
   "FIELD1": "PC",
   "FIELD2": "Personal Computer",
   "FIELD3": "Meaning Desktop Workstation (ThinkCentre or Netvista)"
 },
 {
   "FIELD1": "PDT",
   "FIELD2": "Product Development Team",
   "FIELD3": ""
 },
 {
   "FIELD1": "PDTL",
   "FIELD2": "Product Development Team Leader",
   "FIELD3": ""
 },
 {
   "FIELD1": "PD Tool",
   "FIELD2": "Professional development Tool",
   "FIELD3": "IGS HR Application that provides for for the functions of professional development, career planning and resource management."
 },
 {
   "FIELD1": "PE",
   "FIELD2": "Project Executive",
   "FIELD3": ""
 },
 {
   "FIELD1": "PL",
   "FIELD2": "Project Leader",
   "FIELD3": ""
 },
 {
   "FIELD1": "PM",
   "FIELD2": "Problem Management / Project Manager",
   "FIELD3": ""
 },
 {
   "FIELD1": "PM / COE",
   "FIELD2": "Project Management/ Center of Excellence�",
   "FIELD3": ""
 },
 {
   "FIELD1": "POP",
   "FIELD2": "Power on Password",
   "FIELD3": ""
 },
 {
   "FIELD1": "PP",
   "FIELD2": "Parallel Perform",
   "FIELD3": ""
 },
 {
   "FIELD1": "Q",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "QA",
   "FIELD2": "Quality Assurance",
   "FIELD3": ""
 },
 {
   "FIELD1": "QPM",
   "FIELD2": "Quantitative Project Management",
   "FIELD3": ""
 },
 {
   "FIELD1": "QPPO",
   "FIELD2": "Quality Process Performance Objectives",
   "FIELD3": ""
 },
 {
   "FIELD1": "QMX",
   "FIELD2": "Quality 9000",
   "FIELD3": "Notes database used to store the ISO/Process Control Documentation"
 },
 {
   "FIELD1": "R",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "R/W",
   "FIELD2": "Read/Write",
   "FIELD3": ""
 },
 {
   "FIELD1": "RACF",
   "FIELD2": "Resource Access Control Facility�",
   "FIELD3": ""
 },
 {
   "FIELD1": "RAD",
   "FIELD2": "Rapid Application Development / Rational Application Developer (Tool)",
   "FIELD3": ""
 },
 {
   "FIELD1": "RDD",
   "FIELD2": "Review Defect Density",
   "FIELD3": ""
 },
 {
   "FIELD1": "RAS",
   "FIELD2": "Remote Access Service",
   "FIELD3": ""
 },
 {
   "FIELD1": "RESO",
   "FIELD2": "Real Estate Services Organization",
   "FIELD3": ""
 },
 {
   "FIELD1": "RETAIN",
   "FIELD2": "Remote Technical Assistance Information Network.",
   "FIELD3": ""
 },
 {
   "FIELD1": "RFP",
   "FIELD2": "Request For Proposal",
   "FIELD3": ""
 },
 {
   "FIELD1": "RFS",
   "FIELD2": "Request For Service",
   "FIELD3": ""
 },
 {
   "FIELD1": "RCA",
   "FIELD2": "Root Cause Analysis",
   "FIELD3": ""
 },
 {
   "FIELD1": "RCR",
   "FIELD2": "Review Coverage Rate",
   "FIELD3": ""
 },
 {
   "FIELD1": "ROM",
   "FIELD2": "Rough Order of Magnitude",
   "FIELD3": ""
 },
 {
   "FIELD1": "RTO",
   "FIELD2": "Remote Takeover Tool",
   "FIELD3": "Approved IBM Tool for RTO is IBM RTO formerly known as IBM Ayudame"
 },
 {
   "FIELD1": "RUP",
   "FIELD2": "Rational Unified Process",
   "FIELD3": ""
 },
 {
   "FIELD1": "S",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "SAV",
   "FIELD2": "Symantec Anti-virus",
   "FIELD3": "Approved Antivirus client for Windows to assist in the protection against threats from the internet and other sources.��"
 },
 {
   "FIELD1": "SCO",
   "FIELD2": "Standard Client Offering",
   "FIELD3": "Refers to the standard infrastructure and technology offering delivered to IBM employees"
 },
 {
   "FIELD1": "SD",
   "FIELD2": "Service Delivery",
   "FIELD3": ""
 },
 {
   "FIELD1": "SDC",
   "FIELD2": "Service Delivery Centre",
   "FIELD3": ""
 },
 {
   "FIELD1": "SDLC",
   "FIELD2": "Software Development Life Cycle",
   "FIELD3": ""
 },
 {
   "FIELD1": "SDM",
   "FIELD2": "Service Delivery Manager",
   "FIELD3": ""
 },
 {
   "FIELD1": "SEI",
   "FIELD2": "Software Engineering Institute",
   "FIELD3": ""
 },
 {
   "FIELD1": "SINE",
   "FIELD2": "Secure Inbound Network Environment.",
   "FIELD3": "SINE is a gateway to allow IBM employees working at commercial account sites and remotely gain access to IBM core systems over Broadband Internet Connections and SNI links"
 },
 {
   "FIELD1": "SLA",
   "FIELD2": "Service Level Agreement",
   "FIELD3": "This is part of a business contract signed between organisations, defining organisation obligations and inter-organisation exposures regarding the level of service delivered to a client"
 },
 {
   "FIELD1": "SLO",
   "FIELD2": "Service Level Objective",
   "FIELD3": ""
 },
 {
   "FIELD1": "SME",
   "FIELD2": "Subject Matter Expert",
   "FIELD3": ""
 },
 {
   "FIELD1": "SNA",
   "FIELD2": "Systems Network Architecture�",
   "FIELD3": ""
 },
 {
   "FIELD1": "SNI",
   "FIELD2": "Server Network Interface�",
   "FIELD3": ""
 },
 {
   "FIELD1": "SNMP",
   "FIELD2": "Simple Network Management Protocol�",
   "FIELD3": ""
 },
 {
   "FIELD1": "SOR",
   "FIELD2": "Statement Of Requirements",
   "FIELD3": ""
 },
 {
   "FIELD1": "SOW",
   "FIELD2": "Statement Of Work",
   "FIELD3": ""
 },
 {
   "FIELD1": "SP",
   "FIELD2": "Service Pack",
   "FIELD3": ""
 },
 {
   "FIELD1": "SPOC",
   "FIELD2": "Single Point Of Contact",
   "FIELD3": ""
 },
 {
   "FIELD1": "SRM",
   "FIELD2": "Service Restoration Manager",
   "FIELD3": ""
 },
 {
   "FIELD1": "SRMS",
   "FIELD2": "Service Request Management System",
   "FIELD3": "Infrastructure and Applications Request for Service Tool�"
 },
 {
   "FIELD1": "SM",
   "FIELD2": "Service Management",
   "FIELD3": ""
 },
 {
   "FIELD1": "ST",
   "FIELD2": "SameTime",
   "FIELD3": "Global Instant messaging tool with broadcast suite"
 },
 {
   "FIELD1": "SWG",
   "FIELD2": "IBM Software Group",
   "FIELD3": ""
 },
 {
   "FIELD1": "SysClk",
   "FIELD2": "System Clock",
   "FIELD3": ""
 },
 {
   "FIELD1": "T",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "T&M",
   "FIELD2": "Time and Materials�",
   "FIELD3": ""
 },
 {
   "FIELD1": "TCP/IP",
   "FIELD2": "Transport Control Protocol/Internet Protocol�",
   "FIELD3": ""
 },
 {
   "FIELD1": "TD",
   "FIELD2": "Technology Deployment�",
   "FIELD3": "Refer IT"
 },
 {
   "FIELD1": "TDA",
   "FIELD2": "Technical and delivery Assessment�",
   "FIELD3": ""
 },
 {
   "FIELD1": "TDO",
   "FIELD2": "Technology Deployment Office",
   "FIELD3": "See IT� - part of the CIO organisation"
 },
 {
   "FIELD1": "TEA",
   "FIELD2": "Travel Expense Accounting",
   "FIELD3": ""
 },
 {
   "FIELD1": "TR",
   "FIELD2": "Team Room",
   "FIELD3": ""
 },
 {
   "FIELD1": "TSRM",
   "FIELD2": "IGA IBM Service Management / Tivoli Service Request Manager (IGA ISM/TSRM)",
   "FIELD3": "IGA IBM Service Management / Tivoli Service Request Manager (IGA ISM/TSRM)"
 },
 {
   "FIELD1": "TSO",
   "FIELD2": "Time Sharing Option�",
   "FIELD3": ""
 },
 {
   "FIELD1": "TTM",
   "FIELD2": "Transition and Transformation Methodology�",
   "FIELD3": ""
 },
 {
   "FIELD1": "U",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "UCL",
   "FIELD2": "Upper Control limit",
   "FIELD3": ""
 },
 {
   "FIELD1": "UMA",
   "FIELD2": "Unified Method Architecture",
   "FIELD3": ""
 },
 {
   "FIELD1": "UMF",
   "FIELD2": "Unified Method Framework",
   "FIELD3": ""
 },
 {
   "FIELD1": "UMI",
   "FIELD2": "Universal Management Infrastructure",
   "FIELD3": "An offering from IGS with hardware, software, and management tools for IT infrastructure, this automates a manual world and is driven by a central workflow engine based on standard software products"
 },
 {
   "FIELD1": "UPS",
   "FIELD2": "United Parcel Service",
   "FIELD3": ""
 },
 {
   "FIELD1": "URL",
   "FIELD2": "Universal Resource Locator�",
   "FIELD3": ""
 },
 {
   "FIELD1": "V",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "VM",
   "FIELD2": "Voicemail",
   "FIELD3": ""
 },
 {
   "FIELD1": "VoIP",
   "FIELD2": "Voice Over Internet Protocol",
   "FIELD3": "A technology for transmitting ordinary telephone calls over the Internet using packet linked routes. Also called IP telephony."
 },
 {
   "FIELD1": "VPN",
   "FIELD2": "Virtual Private Network",
   "FIELD3": "Private communications network usually used within a company, or by several different companies or organisations, to communicate over a public network ? eg IBM Connect, AT&T Network Client, SINE"
 },
 {
   "FIELD1": "W",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "WAC",
   "FIELD2": "WAM Asset Centre",
   "FIELD3": "WAC is a web based tool which allows users to view physical and financial information on his/her workstation"
 },
 {
   "FIELD1": "WAM",
   "FIELD2": "Workstation Asset Management",
   "FIELD3": "End to End solution for Asset Management"
 },
 {
   "FIELD1": "W3O",
   "FIELD2": "World Wide Web Organization",
   "FIELD3": ""
 },
 {
   "FIELD1": "w3id Profile for Password Management",
   "FIELD2": "Input/Output Config Register (PowerPC DCR 0xA0)",
   "FIELD3": "Allows Common web authentication. Refer: w3.ibm.com/passwords"
 },
 {
   "FIELD1": "WAN",
   "FIELD2": "Wide Area Network",
   "FIELD3": ""
 },
 {
   "FIELD1": "WAS",
   "FIELD2": "WebSphere Application Server",
   "FIELD3": "IBM's J2EE� Server product. Internal WAS development homepage: https://techlink.austin.ibm.com/content/tlp/websphere.html"
 },
 {
   "FIELD1": "WECM",
   "FIELD2": "WebSphere Everyplace Connection Manager",
   "FIELD3": "IBM Connect utilises the IBM WebSphere Everyplace Connection Manager product to provide secure access to the IBM intranet via existing network connections (home office broadband, public broadband hotspots).�"
 },
 {
   "FIELD1": "WFM",
   "FIELD2": "Working from Home",
   "FIELD3": ""
 },
 {
   "FIELD1": "WLAN",
   "FIELD2": "Wireless Local Area Network",
   "FIELD3": "Wireless LAN technology, also known as WLAN, Wi-Fi and 802.11 Wireless, provides a flexible network environment"
 },
 {
   "FIELD1": "WST",
   "FIELD2": "Workstation Security Tool",
   "FIELD3": "Diagnostic PC tool designed to check for employee compliance with the workstation security requirements in the Security and Use Standards for IBM Employees (ITCS300) and other mandatory security controls."
 },
 {
   "FIELD1": "WW",
   "FIELD2": "World Wide",
   "FIELD3": ""
 },
 {
   "FIELD1": "WWAP",
   "FIELD2": "World Wide Accounts Payable",
   "FIELD3": "A global, run once, image solution for managing paper / electronic invoices and related documents"
 },
 {
   "FIELD1": "WWER",
   "FIELD2": "Worldwide Expense Reporting System",
   "FIELD3": "HR application used to submit business expenses, which include travel and miscellaneous expenses"
 },
 {
   "FIELD1": "WWPMM",
   "FIELD2": "IBM Worldwide Project Management Method",
   "FIELD3": ""
 },
 {
   "FIELD1": "X",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "XP",
   "FIELD2": "Extreme Programming",
   "FIELD3": ""
 },
 {
   "FIELD1": "XT",
   "FIELD2": "Extended Technology",
   "FIELD3": ""
 },
 {
   "FIELD1": "XTP",
   "FIELD2": "Express Transfer Protocol",
   "FIELD3": ""
 },
 {
   "FIELD1": "Y",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "Y2K",
   "FIELD2": "Year 2000",
   "FIELD3": ""
 },
 {
   "FIELD1": "YAHOO",
   "FIELD2": "Yet Another Hierarchical Officious Oracle",
   "FIELD3": ""
 },
 {
   "FIELD1": "Z",
   "FIELD2": "",
   "FIELD3": ""
 },
 {
   "FIELD1": "ZLID",
   "FIELD2": "Zone Labs Integrity Desktop",
   "FIELD3": "Strategic client firewall solution for IBM"
 }
]
};

export default Acronym;