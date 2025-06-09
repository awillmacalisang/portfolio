'use client';
import React from 'react'
import { AnimatedSection } from './AnimatedSection'
import { motion } from 'framer-motion';
import { AnimatedCard } from './AnimatedCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBadge } from './AnimatedBadge';
import { Code, Database, Globe, Smartphone } from "lucide-react"

type Props = {
    skillsHeading: string | null;
    skillList: {
        skillIcon: string;
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

export default function SkillsDetails({ skillsHeading, skillList }: Props) {
    return (
        <div>
            <section id="skills" className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl text-primary font-bold text-center mb-12">{skillsHeading}</h2>
                        </AnimatedSection>
                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {skillList?.map((item, index) => {
                                const Icon = iconMap[item.skillIcon]; // Look up the component

                                return (
                                    <AnimatedCard key={item.skillsetHeading} delay={index * 0.1}>
                                        <CardHeader className="text-center">
                                            <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }}>
                                                {Icon && <Icon className="h-12 w-12 mx-auto text-primary mb-2" />}
                                            </motion.div>
                                            <CardTitle className='text-primary'>{item.skillsetHeading}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <motion.div
                                                className="flex flex-wrap gap-2"
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                            >
                                                {item.skillTitleList.map((skillObj, skillIndex) => (
                                                    <AnimatedBadge className='cursor-default' key={skillObj.skillsTitle} delay={skillIndex * 0.05}>
                                                        {skillObj.skillsTitle}
                                                    </AnimatedBadge>
                                                ))}
                                            </motion.div>
                                        </CardContent>
                                    </AnimatedCard>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}