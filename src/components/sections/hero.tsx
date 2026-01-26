import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p className="md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 font-display sm:text-xl">
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[6px] leading-none font-thin text-transparent text-slate-800 text-left",
                          "text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                          "cursor-default text-edge-outline font-display"
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br />
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>

                <BlurIn delay={1.2}>
                  <p className="md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 font-display sm:text-xl">
                    A Full Stack Web Developer
                  </p>
                </BlurIn>
              </div>

              <div className="mt-8 flex flex-col gap-3 w-fit">
                {/* Resume */}
                <Link
                  href="https://drive.google.com/file/d/1O97WCk2DrO9x6SHOqf7LvRbmHkMgGIb4/view?usp=sharing"
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>

                <div className="md:self-start flex gap-3">
                  {/* Hire Me */}
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href="#contact">
                        <Button variant="outline">Hire Me</Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Social Icons */}
                  <div className="flex items-center gap-2">
                    {config.social.instagram && (
                      <Link href={config.social.instagram} target="_blank">
                        <Button variant="outline">
                          <SiX size={22} />
                        </Button>
                      </Link>
                    )}

                    {config.social.github && (
                      <Link href={config.social.github} target="_blank">
                        <Button variant="outline">
                          <SiGithub size={22} />
                        </Button>
                      </Link>
                    )}

                    {config.social.linkedin && (
                      <Link href={config.social.linkedin} target="_blank">
                        <Button variant="outline">
                          <SiLinkedin size={22} />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid col-span-1" />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
