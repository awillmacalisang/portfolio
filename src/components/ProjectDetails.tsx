'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import Image from "next/image"
import { AnimatedCard } from './AnimatedCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBadge } from './AnimatedBadge';
import { Button } from "@/components/ui/button"
import { ExternalLink} from "lucide-react"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProjectDetails() {
    return (
        <div>
            <section id="projects" className="py-16 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <div className="max-w-6xl mx-auto">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Featured Projects</h2>
                        </AnimatedSection>
                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {[
                                {
                                    title: "E-commerce Platform",
                                    description:
                                        "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
                                    tech: ["Next.js", "Stripe", "PostgreSQL"],
                                    image: "/placeholder.svg?height=200&width=400",
                                },
                                {
                                    title: "Task Management App",
                                    description:
                                        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
                                    tech: ["React", "Socket.io", "MongoDB"],
                                    image: "/placeholder.svg?height=200&width=400",
                                },
                                {
                                    title: "Weather Dashboard",
                                    description:
                                        "A responsive weather dashboard that displays current weather conditions, forecasts, and interactive maps using external APIs.",
                                    tech: ["Vue.js", "Chart.js", "Weather API"],
                                    image: "/placeholder.svg?height=200&width=400",
                                },
                            ].map((project, index) => (
                                <AnimatedCard key={project.title} delay={index * 0.2} hoverScale={1.03}>
                                    <CardHeader>
                                        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                width={400}
                                                height={200}
                                                className="rounded-lg object-cover w-full"
                                            />
                                        </motion.div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle className="mb-2 text-primary">{project.title}</CardTitle>
                                        <CardDescription className="mb-4">{project.description}</CardDescription>
                                        <motion.div
                                            className="flex flex-wrap gap-2 mb-4"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            {project.tech.map((tech, techIndex) => (
                                                <AnimatedBadge className="text-primary" key={tech} delay={techIndex * 0.05} variant="outline">
                                                    {tech}
                                                </AnimatedBadge>
                                            ))}
                                        </motion.div>
                                        <div className="flex gap-2">
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Button variant="outline" size="sm" asChild>
                                                    <Link href="https://github.com" target="_blank" className='text-primary'>
                                                        <FaGithub className="h-4 w-4 mr-2 text-primary" />
                                                        Code
                                                    </Link>
                                                </Button>
                                            </motion.div>
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Button size="sm" asChild>
                                                    <Link href="https://example.com" target="_blank">
                                                        <ExternalLink className="h-4 w-4 mr-2" />
                                                        Live Demo
                                                    </Link>
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </CardContent>
                                </AnimatedCard>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

