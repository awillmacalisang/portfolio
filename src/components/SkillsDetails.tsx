'use client';
import React from 'react'
import { AnimatedSection } from './AnimatedSection'
import { motion } from 'framer-motion';
import { AnimatedCard } from './AnimatedCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBadge } from './AnimatedBadge';
import { Code, Database, Globe, Smartphone } from "lucide-react"
import { MasonryMarquee } from './MasonryMarquee';


type Props = {
    skillsHeading: string | null;
    skillsSubheading: string | null;
    skillsDescription: string | null;
    skillList: {
        skillsetHeading: string;
        skillTitleList: {
            skillsTitle: string;
        }[];
    }[] | null;
};

const iconMap: { [key: string]: React.ElementType } = {
    Code,
    Database,
    Globe,
    Smartphone,
    // Add all expected icons here
};

export default function SkillsDetails({ skillsHeading, skillsSubheading, skillsDescription, skillList }: Props) {
    return (
        <div className="bg-white">
            <section id="skills" className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-start justify-center">

                        <AnimatedSection direction="left" delay={1} className='w-full'>

                            <MasonryMarquee />

                        </AnimatedSection>

                        <AnimatedSection direction="right" delay={0.4} className='w-[718px]'>

                            <div className="max-w-4xl mx-auto">
                                <AnimatedSection>
                                    <h5 className="text-[16px] md:text-[16px] text-primary font-medium text-left mb-[6px]">{skillsSubheading}</h5>
                                </AnimatedSection>
                                <AnimatedSection>
                                    <h2 className="text-[48px] md:text-[48px] text-primary font-bold text-left mb-[24px]">{skillsHeading}</h2>
                                </AnimatedSection>
                                <AnimatedSection>
                                    <p className='text-base font-normal text-[#10141E] mb-[16px]'>{skillsDescription},</p>
                                </AnimatedSection>

                                <motion.div
                                    className="grid md:grid-cols-1 lg:grid-cols-1 gap-[8px] grid-rows-4"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    {skillList?.map((item, index) => {
                                        // const Icon = iconMap[item.skillIcon]; // Look up the component


                                        return (

                                            <motion.div
                                                key={item.skillsetHeading}
                                                className="flex flex-wrap gap-2 items-center"
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                            >
                                                <h4 className="text-xl md:text-xl text-primary font-bold text-left mb-0">{item.skillsetHeading}</h4>
                                                {item.skillTitleList.map((skillObj, skillIndex) => (
                                                    <p className='cursor-default' key={skillObj.skillsTitle}>
                                                        {skillObj.skillsTitle},
                                                    </p>
                                                ))}
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </div>

                        </AnimatedSection>
                    </div>

                </div>
            </section>
        </div>
    );
}