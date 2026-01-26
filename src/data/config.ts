const config = {
  title: "Raihan Harismanzil| Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Raihan, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Raihan, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Raihan",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Raihan Harismanzil",
  email: "raihanharsimanzil@gmail.com",
  site: "https://raihanharismanzil.site",


  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {

    linkedin: "https://in.linkedin.com/in/raihan-harismanzil-8724832ab/",
    instagram: "https://www.instagram.com/offx_ryan_?igsh=OXhuaHdmczV6Z2Jp",
    github: "https://github.com/buildwithraihan",
  },
};
export { config };
