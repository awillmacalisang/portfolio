
'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { AnimatedBadge } from './AnimatedBadge';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa"; // FontAwesome icons for GitHub and LinkedIn
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
    CarouselDots
} from "./ui/carousel"
import { Card, CardContent } from './ui/card';




type Props = {
    aboutmainHeading: string | null;
    aboutsubHeading: string | null;
    aboutContent: string | null;
    strengthItems: { strengthLabel: string }[] | null;
    aboutRightImage: {
        mediaItemUrl: string;
        altText: string;
    } | null;
    aboutLeftImage?: {
        mediaItemUrl: string;
        altText: string;
    } | null; // Optional left image
    aboutCompanyDetails: {
        companyYears: string | null;
        companyName: string | null;
        companyPosition: string | null;
        companyJobDescription: string | null;
    }[] | null;

};


const items = [
    { icon: <FaFacebook  size={18} />, label: 'Facebook', onClick: () => window.open('https://facebook.com/awilljaymacalisang', '_blank'), },
    { icon: <FaGithub  size={18} />, label: 'Github', onClick: () => window.open('https://github.com/awillmacalisang', '_blank'), },
    { icon: <FaLinkedin size={18} />, label: 'LinkedIn', onClick: () => window.open('https://linkedin.com/in/awill-jay-macalisang-8a2785240', '_blank'), },
    { icon: <FaEnvelope size={18} />, label: 'Email', onClick: () => window.open('mailto:macalisang.awilljay.com'), },
];

export default function AboutDetails({ aboutmainHeading, aboutsubHeading, aboutContent, strengthItems, aboutRightImage, aboutLeftImage, aboutCompanyDetails }: Props) {

    return (
        <div className='mt-[-200px] relative shadow-[0px_100px_80px_0px_rgba(0,0,0,0.06)]'>
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

                        <motion.div className='mt-10 flex justify-center w-full' initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.1, delay: 0.5 }}>
                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {aboutCompanyDetails?.map((items, index) => {
                                        return (
                                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                                <div className="p-1">
                                                    <Card className='p-0'>
                                                        <CardContent className="flex flex-col justify-center p-[32px]">
                                                            <h3 className='text-xl font-semibold'>{items.companyName}</h3>
                                                            <div className='flex flex-row gap-1 mb-[24px]'>
                                                                <p className='text-base font-normal'>{items.companyPosition},</p>
                                                                <p className='text-base font-normal'>{items.companyYears}</p>
                                                            </div>
                                                            <p className='text-base font-normal'>{items.companyJobDescription}</p>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </CarouselItem>
                                        );
                                    })}
                                    {/* {Array.from({ length: 5 }).map((_, index) => (
                                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))} */}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                                <CarouselDots />
                            </Carousel>

                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}  