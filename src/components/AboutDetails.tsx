
'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { AnimatedBadge } from './AnimatedBadge';
import { Mail, MapPin, Phone, ExternalLink, Code, Database, Globe, Smartphone } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"; // FontAwesome icons for GitHub and LinkedIn
import { Button } from './ui/button';
import Link from "next/link"
import React from 'react';
import { link } from 'fs';
import Image from 'next/image';
import Dock from './Dock';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import { Card, CardContent } from './ui/card';




type Props = {
    aboutmainHeading: string | null;
    aboutsubHeading: string | null;
    aboutContent: string | null;
    strengthItems: { strengthLabel: string }[] | null;
    aboutContactDetails: { detailIcon: string, detailName: string }[] | null;
    socialInformationDetails: { socialLink: string, socialIcon: string }[] | null;
    aboutRightImage: {
        mediaItemUrl: string;
        altText: string;
    } | null;
    aboutLeftImage?: {
        mediaItemUrl: string;
        altText: string;
    } | null; // Optional left image

};

const iconMap: { [key: string]: React.ElementType } = {
    Mail,
    Phone,
    MapPin,
    // Add all expected icons here
};

const socialIconMap: { [key: string]: React.ElementType } = {
    github: FaGithub,     // lowercase keys to match your example
    linkedin: FaLinkedin,
    // Add other icons as needed
};

const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
];

export default function AboutDetails({ aboutmainHeading, aboutsubHeading, aboutContent, strengthItems, aboutContactDetails, socialInformationDetails, aboutRightImage, aboutLeftImage }: Props) {

    return (
        <div className='mt-[-200px] relative'>
            <section id="about" className="py-16 px-[64px] relative bg-white">
                <div className="container mx-auto z-200 relative">
                    <div className="mx-auto">

                        <div className="flex flex-row gap-[64px] items-start">

                            <AnimatedSection direction="left" delay={0.2} className='w-[624px]'>

                                <Image
                                    src={aboutLeftImage?.mediaItemUrl || "/placeholder.svg"}
                                    alt={aboutLeftImage?.altText || 'Profile Picture'}
                                    width={624}
                                    height={616}
                                    className="mb-[80px] h-[320px] w-[320px] object-cover rounded-[8px]"
                                />
                                <div className='pl-[62px] w-full max-w-2xl'>
                                    <h5 className="text-base md:text-base font-medium text-left text-primary mb-[16px]">{aboutsubHeading}</h5>

                                    <h2 className="text-3xl md:text-4xl text-primary font-bold text-left mb-[24px]">{aboutmainHeading}</h2>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ staggerChildren: 0.2 }}
                                    >
                                        <motion.p
                                            className="text-lg text-muted-foreground mb-6"
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.1 }}
                                            dangerouslySetInnerHTML={{ __html: aboutContent || '' }}
                                        >
                                        </motion.p>


                                    </motion.div>
                                </div>

                            </AnimatedSection>

                            <AnimatedSection direction="right" delay={0.4} className='w-[624px]'>
                                <div className='flex flex-col items-center justify-center h-10 w-full relative'>
                                    <Dock
                                        items={items}
                                        panelHeight={40}
                                        baseItemSize={30}
                                        magnification={50}
                                    />
                                </div>


                                <Image
                                    src={aboutRightImage?.mediaItemUrl || "/placeholder.svg"}
                                    alt={aboutRightImage?.altText || 'Profile Picture'}
                                    width={624}
                                    height={616}
                                    className="mx-auto mb-6 h-[616px] w-full object-cover rounded-[8px]"
                                />
                                <motion.div
                                    className="space-y-4"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {aboutContactDetails?.map((item, index) => {
                                        const Icon = iconMap[item.detailIcon]; // Look up the component

                                        return (
                                            <motion.div
                                                key={item.detailName}
                                                className="flex items-center gap-3 text-primary"
                                                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                                            >
                                                {Icon && <Icon className="h-5 w-5 text-primary" />} {/* Render only if found */}
                                                <span>{item.detailName}</span>
                                            </motion.div>
                                        );
                                    })}



                                    <motion.div className="flex gap-4 pt-4">

                                        {socialInformationDetails?.map((items, index) => {
                                            const Icons = socialIconMap[items.socialIcon]; // normalize key 

                                            console.log('Icons:', Icons, 'items.socialIcon:', items.socialIcon); // Debugging line

                                            return (
                                                <motion.div key={index} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                                                    <Button variant="outline" size="icon" asChild>
                                                        <Link href={items.socialLink} target="_blank">
                                                            {Icons && <Icons className="h-4 w-4 text-primary" />}
                                                        </Link>
                                                    </Button>
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>

                                    <motion.div
                                        className="flex flex-wrap gap-2"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ staggerChildren: 0.1, delay: 0.5 }}
                                    >
                                        {strengthItems?.map((item, index) => (
                                            <AnimatedBadge className='cursor-default' key={item.strengthLabel} delay={index * 0.1} variant="secondary">
                                                {item.strengthLabel}
                                            </AnimatedBadge>
                                        ))}

                                    </motion.div>
                                </motion.div>
                            </AnimatedSection>
                        </div>

                        <div className='mt-10 flex justify-center w-full'>
                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}  