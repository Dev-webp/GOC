export const navItems = [
  { name: "About", link: "#why" },
  { name: "Grid", link: "#about" },
  { name: "Requirements", link: "#test" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Earn points based on your age, education, work experience, language skills, and connections to Germany.",
    description: "Points-Based Visa System",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[80vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "rounded.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "We are very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Job Search Flexibility",
    description: "Points-Based Visa System",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Start your journey to work and live in Germany with our professional support.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Work in Germany and eventually qualify for permanent residency, securing your future in one of Europes strongest economies",
    description: "Pathway to Permanent Residency",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a process together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
    {
      quote: 
        "Working with VJCOverseas Visa and Immigration Consultancy has been an outstanding experience. Their attention to detail, professionalism, and unwavering commitment to helping me secure my student visa were remarkable. VJCOverseas went above and beyond to ensure that every step of the process was smooth and efficient.",
      name: "Thompson",
      title: "Student Visa Applicant"
    },
    {
      quote: 
        "Partnering with VJCOverseas Visa and Immigration Consultancy for my job seeker visa was a transformative experience. Their expertise and dedication made the complex process straightforward and stress-free. From initial consultation to final approval, VJCOverseas demonstrated exceptional professionalism and support.",
      name: "Alex Martinez",
      title: "Job Seeker Visa Applicant"
    },
    {
      quote: 
        "Collaborating with VJCOverseas Visa and Immigration Consultancy for resume marketing was an exceptional experience. Their expertise in crafting standout resumes and personalized approach helped me significantly enhance my job application materials. The team's commitment to excellence and attention to detail were impressive.",
      name: "Emily Clark",
      title: "Resume Marketing Client"
    },
    {
      quote: 
        "My experience with VJCOverseas Visa and Immigration Consultancy for obtaining a tourist visa was exceptional. Their thorough and professional approach made the application process smooth and hassle-free. The team's prompt responses and detailed guidance ensured that every aspect of my application was handled with care.",
      name: "John Smith",
      title: "Tourist Visa Applicant"
    },

];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Age Requirement",
    desc: "Applicants should ideally be under 35 years of age",
    className: "md:col-span-2",
    thumbnail: "/age.png",
  },
  {
    id: 2,
    title: "Educational Qualifications",
    desc: "Hold a recognized academic or vocational qualification",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Professional Experience",
    desc: "At least three years of relevant work experience in your field.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Language Proficiency",
    desc: "Basic knowledge of German (A1 level) or strong English language skills.",
    className: "md:col-span-2",
    thumbnail: "/preview-lan.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/insta.svg",
    link: "https://www.instagram.com/vjc_overseas_bangalore?utm_source=qr&igsh=MXZzNXY3dGV1YXg1bw== ", // Instagram URL
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/VJCOVERSEAS?t=aRM7qjBL9saJzNwyDzuCCg&s=09", // Twitter URL
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/company/vjc-overseas/", // LinkedIn URL
  },
];
