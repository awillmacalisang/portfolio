'use client';
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';
import { TypingText } from './typing-text';
import { Button } from './ui/button';
import RunningAlert from './RunningAlert';
import { AnimatedSection } from './AnimatedSection';



// const { scrollToSection, scrollToTop } = useSmoothScroll()

// const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
//     e.preventDefault()
//     scrollToSection(sectionId)
// }

type Props = {
    bannerHeading: string | null;
    bannerContent: string | null;
    bannerImage: {
        mediaItemUrl: string;
        altText: string;
    } | null;
    typingTexts: {
        typingTitle: string;
    }[] | null;
};







export default function BannerDetails({ bannerHeading, bannerContent, bannerImage, typingTexts }: Props) {
    const typingTextData = typingTexts?.map(item => item.typingTitle) || [];

    console.log("Typing Text Data:", typingTextData);
    return (
        <div className='bg-[url(/banner-bg.png)] z-60 relative'>
            <section className="pt-10 pb-10 px-[64px] relative overflow-hidden min-h-150">
                <div className="container mx-auto text-center min-h-200 flex flex-col justify-center">

                    <div className='flex'>
                        <RunningAlert />
                        <div className="flex align-center max-w-2xl flex-col justify-center text-left flex-1">
                            <motion.h1
                                className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                {bannerHeading || "Welcome to My Portfolio"}
                            </motion.h1>

                            <AnimatedSection direction="left" delay={0.2}>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ staggerChildren: 0.2 }}
                                >
                                    <motion.p
                                        className="text-lg text-primary mb-6"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        dangerouslySetInnerHTML={{ __html: bannerContent || '' }}
                                    >
                                    </motion.p>
                                </motion.div>
                            </AnimatedSection>



                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-start"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.9 }}
                            >
                                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                                    <Button size="lg" className="relative overflow-hidden">
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: "100%" }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <span className="relative z-10 text-white">Get In Touch</span>
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant="outline" size="lg">
                                        <span className="relative z-10 text-white">View My Work</span>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                        <div className="flex-1 flex justify-center items-center relative z-10">
                            <motion.div
                                className="mb-8 absolute -top-80 left-0 right-0 bottom-0"
                                initial={{ scale: 0, rotate: 180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            >
                                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                                    <Image
                                        src={bannerImage?.mediaItemUrl || "/placeholder.svg"}
                                        alt={bannerImage?.altText || 'Profile Picture'}
                                        width={477}
                                        height={923}
                                        className="mx-auto mb-6 h-250 w-477 object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                    <div className='w-full border-primary border-2 rounded-lg max-w-md flex items-center justify-center mx-auto mt-15 z-100 relative bg-custombg'>
                        <motion.div
                            className="text-xl md:text-2xl text-primary max-w-md mx-auto h-16 flex items-center justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <TypingText
                                texts={typingTextData}
                                // texts={[item.typingTitle]}
                                className="font-bold"
                                speed={80}
                                deleteSpeed={40}
                                pauseDuration={2000}
                            />


                            {/* {typingTexts?.map((item, index) => {

                                    return (
                                        
                                    );
                                })} */}

                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
