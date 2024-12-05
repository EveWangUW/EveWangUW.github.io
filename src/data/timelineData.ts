export interface TimelineItem {
    title: string;
    company: string;
    date: string;
    location: string;
    description?: string;
    skills?: string;
  }
  
  const TimelineData: TimelineItem[] = [
    {
      title: "Software Engineer (Capstone)",
      company: "Boeing · Contract",
      date: "Nov 2024 - Present · 2 mos",
      location: "Seattle, Washington, United States",
      skills: "Amazon Web Services (AWS) · Microsoft Azure · DevSecOps · DataOps",
    },
    {
      title: "Software Development Engineer Intern",
      company: "Amazon Web Services (AWS) · Internship",
      date: "Jun 2024 - Sep 2024 · 4 mos",
      location: "Seattle, Washington, United States · Hybrid",
    },
    {
      title: "Data and Operations Analyst",
      company: "DiDi · Internship",
      date: "Jun 2022 - Sep 2022 · 4 mos",
      location: "Beijing · On-site",
      description:
        "Collaborated with the team following agile principles to analyze past marketing campaign performance and user profiles for better ROI in user loan applications, increasing registration and loan applications by 2%.",
      skills: "SQL · Python",
    },
    {
      title: "Business and Operations Analyst",
      company: "Tencent · Internship",
      date: "Jun 2021 - Sep 2021 · 4 mos",
      location: "Beijing, China · On-site",
      description:
        "Cooperated with the team to analyze trending videos with high view performance to increase user engagement in the video platform, obtaining a 3% increase in overall video view time and clickthroughs.",
      skills: "SQL · Business Analysis Planning & Monitoring",
    },
    {
      title: "Data and Digital Analyst",
      company: "GroupM · Internship",
      date: "Jun 2021 - Jul 2021 · 2 mos",
      location: "Shanghai, China · On-site",
    },
    {
      title: "Research Assistant",
      company: "University of Nottingham",
      date: "Apr 2021 - Jun 2021 · 3 mos",
      location: "On-site",
      skills: "SQL · Stata",
    },
  ];
  
  export default TimelineData;  