import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <SectionWrapper
      id="about"
      className="flex flex-col items-center justify-center min-h-screen py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title="About Me"
          desc="Get to know me better"
          className="mb-12 md:mb-16"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={cn(
            "space-y-6 text-base md:text-lg leading-relaxed",
            "bg-background/80 dark:bg-background/60 backdrop-blur-sm",
            "p-6 md:p-8 rounded-2xl border border-border/50",
            "shadow-lg"
          )}
        >
          <p className="text-foreground">
            Hi, I&apos;m <span className="font-bold text-primary">Raihan Harismanzil</span> 👋
          </p>
          
          <p className="text-foreground/90">
            A BCA student from Jain University and probably one of the most active students on campus. 
            If there&apos;s a hackathon, tech fest, or coding event happening, chances are I&apos;ve either 
            participated in it or helped organize it 😄
          </p>
          
          <p className="text-foreground/90">
            I&apos;ve taken part in <span className="font-bold text-primary">10+ hackathons</span> and 
            love building real-world web applications that go beyond just &quot;working code.&quot; I enjoy 
            turning ideas into meaningful digital experiences and constantly pushing myself to build better, 
            faster, and smarter.
          </p>
          
          <p className="text-foreground/90">
            Beyond development, I&apos;ve been actively involved in multiple volunteering initiatives with{" "}
            <span className="font-bold text-primary">Google and AWS</span>, contributing to tech-driven 
            community events. I&apos;m also a participant in the{" "}
            <span className="font-bold text-primary">BIRAC E-YUVA program</span>, where innovation 
            meets entrepreneurship.
          </p>
          
          <p className="text-foreground/90">
            I have a strong passion for <span className="font-bold text-primary">entrepreneurship</span> — 
            I don&apos;t just like writing code, I like building ideas into products. I enjoy thinking about 
            scalability, user experience, and how technology can solve real-world problems.
          </p>
          
          <p className="text-foreground/90">
            <span className="font-bold text-primary">Fun fact:</span> before debugging JavaScript errors, 
            I was winning debates in school. So yes — I can defend my logic both in code and on stage 😂
          </p>
          
          <p className="text-foreground font-medium">
            Currently focused on full-stack development, product thinking, and continuously leveling up my skills.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
