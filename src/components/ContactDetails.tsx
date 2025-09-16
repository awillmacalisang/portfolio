'use client';
import React, { useActionState, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import Image from "next/image"
import { AnimatedCard } from './AnimatedCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBadge } from './AnimatedBadge';
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Dock from './Dock';
import { sendContactForm } from '@/server/actions';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


type Props = {
    testimonialFields: {
        companyName: string;
        fullName: string;
        position: string;
        testimonialContent: string;
    }[] | null;
};

const items = [
    { icon: <FaFacebook size={18} />, label: 'Facebook', onClick: () => window.open('https://facebook.com/awilljaymacalisang', '_blank'), },
    { icon: <FaGithub size={18} />, label: 'Github', onClick: () => window.open('https://github.com/awillmacalisang', '_blank'), },
    { icon: <FaLinkedin size={18} />, label: 'LinkedIn', onClick: () => window.open('https://linkedin.com/in/awill-jay-macalisang-8a2785240', '_blank'), },
    { icon: <FaEnvelope size={18} />, label: 'Email', onClick: () => window.open('mailto:macalisang.awilljay.com'), },
];

export default function ContactDetails({ testimonialFields }: Props) {

    const [state, action, isPending] = useActionState(sendContactForm, {});
     const [open, setOpen] = useState(false);

    useEffect(() => {
        if (state?.message) {
            setOpen(true);
        }
    }, [state?.message]);

    return ( 
        <div>
            <section id="contact" className="py-16 px-[32px] bg-muted/30">
                <div className='flex flex-row gap-x-[24px]'>
                    <AnimatedSection className='form-container container bg-[url(/banner-bg.png)] bg-center rounded-[24px] p-[32px]'>
                        <h2 className='text-[48px] text-primary font-bold text-center'>Get in Touch</h2>
                        <form action={action} className="space-y-6 mt-8">
                            <div>
                                <label htmlFor="your-name" className="block text-base font-semibold text-primary mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="your-name"
                                    name="your-name"
                                    className="block w-full rounded-md border border-gray-300 bg-white/90 px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary text-base"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="your-email" className="block text-base font-semibold text-primary mb-2">Email</label>
                                <input
                                    type="email"
                                    id="your-email"
                                    name="your-email"
                                    className="block w-full rounded-md border border-gray-300 bg-white/90 px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary text-base"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="your-subject" className="block text-base font-semibold text-primary mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="your-subject"
                                    name="your-subject"
                                    className="block w-full rounded-md border border-gray-300 bg-white/90 px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary text-base"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="your-message" className="block text-base font-semibold text-primary mb-2">Message</label>
                                <textarea
                                    id="your-message"
                                    name="your-message"
                                    rows={5}
                                    className="block w-full rounded-md border border-gray-300 bg-white/90 px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary text-base"
                                    required
                                />
                            </div>
                            <Button type="submit" className="h-[56px] w-full mt-2 cursor-pointer text-white p-[16px] font-medium text-[16px]">Submit</Button>
                            <Dialog open={open} onOpenChange={setOpen}>
                            <DialogContent className="max-w-[90vw] sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle className={state.status === 'mail_sent' ? 'text-green-600' : 'text-red-500'}>
                                        {state.status === 'mail_sent' ? 'Success!' : 'Error'}
                                    </DialogTitle>
                                </DialogHeader>
                                <div className="py-2 text-center text-base">
                                    {state?.message}
                                </div>
                                <DialogFooter>
                                    <Button onClick={() => setOpen(false)} className="w-full mt-2">Close</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        </form>
                    </AnimatedSection>
                    <div className='max-w-[60%] flex flex-col gap-y-[24px]'>
                        <AnimatedSection className='testimonial-section h-full flex p-[32px] bg-cover rounded-[24px] justify-center w-full bg-[url(/column.png)]'>
                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                className="w-full h-full"
                            >
                                <CarouselContent className='h-full'>
                                    {testimonialFields?.map((items, index) => {
                                        return (
                                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-full h-full">
                                                <div className="p-1 h-full">
                                                    <Card className='p-0 border-0 shadow-none h-full'>
                                                        <CardContent className="h-full flex flex-col justify-center items-center p-[32px]">
                                                            <h5 className='text-[24px] font-semibold mb-[40px] text-center'>{items.testimonialContent}</h5>
                                                            <h6 className='text-[20px] font-semibold'>{items.fullName}</h6>
                                                            <div className='flex flex-row gap-1'>
                                                                <p className='text-base font-normal'>{items.position},</p>
                                                                <p className='text-base font-normal'>{items.companyName}</p>
                                                            </div>

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

                        </AnimatedSection>
                        <AnimatedSection className='social-container flex flex-row items-center justify-between h-full max-h-[120px] w-full relative p-[34px] rounded-[24px]'>
                            <h3 className='h-full text-[36px] font-bold text-white'>Feel free to reach out!</h3>
                            <Dock
                                items={items}
                                panelHeight={48}
                                baseItemSize={48}
                                magnification={80}
                            />
                        </AnimatedSection>
                    </div>

                </div>

            </section>
        </div>
    );
}

