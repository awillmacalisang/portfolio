'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import Image from "next/image"
import { AnimatedCard } from './AnimatedCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBadge } from './AnimatedBadge';
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";


type Props = {
    projectHeading: string | null,
    projectDescription: string | null,
    projectDetails: Array<{
        projectLink: string | null,
        projectShortDescription: string | null,
        projectTitle: string | null,
        projectImage: {
            node: {
                altText: string | null,
                slug: string | null,
                mediaItemUrl: string | null,
                title: string | null
            }
        }
    }>
}

export default function ProjectDetails({
    projectHeading,
    projectDescription,
    projectDetails
}: Props) {




    return (
        <div>
            <section id="projects" className="py-16 px-4 bg-muted/30">
                <div className='container mx-auto pt-[24px] pb-[24px] pl-[12px] pr-[12px] border-solid border-[1.5px] border-[#353941] rounded-[24px]'>
                    <div className='flex flex-row items-center justify-start pb-[12px] pt-[0px] gap-x-[12px]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#353941" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#353941" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#353941" />
                        </svg>

                    </div>
                    <div className="container mx-auto pt-[40px] pb-[40px] bg-[#353941] rounded-[18px]">
                        <div className="max-w-full pl-[64px] pr-[64px]">
                            <div className='flex flex-row items-center justify-between mb-[40px]'>
                                <AnimatedSection>
                                    <h2 className="text-[48px] md:text-[48px] font-bold text-white text-center mb-0">{projectHeading}</h2>
                                </AnimatedSection>
                                <AnimatedSection>
                                    <p className='max-w-[480px] text-base font-normal text-left text-white mb-0'>{projectDescription}</p>
                                </AnimatedSection>
                            </div>

                            <AnimatedSection
                                className="flex overflow-x-auto gap-x-[24px] pb-4 scrollbar-thin scrollbar-thumb-[#353941] scrollbar-track-[#23272f]"
                                style={{ scrollSnapType: 'x mandatory' }}
                            >
                                {projectDetails.map((project, index) => (
                                    <div
                                        key={project.projectTitle}
                                        className="min-w-[328px] max-w-[328px] flex-shrink-0 h-full min-h-[563px]"
                                        style={{ scrollSnapAlign: 'start' }}
                                    >
                                        <div className="flex flex-col bg-[#ffff] rounded-[16px] p-[12px] h-full min-h-[563px] justify-between">
                                            <div>
                                                <div className='flex flex-row justify-between items-center mb-[16px]'>
                                                    <CardTitle className="max-w-[208px] mb-0 text-primary text-[24px] font-semibold">{project.projectTitle}</CardTitle>
                                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.5 }}>
                                                        <Button size="sm" asChild className='w-[48px] h-[48px] rounded-[99px]'> 
                                                            <Link href="https://example.com" target="_blank">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 19.5L19.5 4.5M19.5 4.5L8.25 4.5M19.5 4.5V15.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>

                                                            </Link>
                                                        </Button>
                                                    </motion.div>
                                                </div>

                                                <CardDescription className="mb-0 text-primary">{project.projectShortDescription}</CardDescription>

                                            </div>
                                            <div>
                                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                                    <Image
                                                        src={project.projectImage.node.mediaItemUrl || "/placeholder.svg"}
                                                        alt={project.projectImage.node.title || "Project Image"}
                                                        width={400}
                                                        height={200}
                                                        className="rounded-lg object-cover w-full"
                                                    />
                                                </motion.div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </AnimatedSection>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

