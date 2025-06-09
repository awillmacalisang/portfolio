"use client"
import { motion } from "framer-motion"
import type React from "react"

import { Card } from "@/components/ui/card"

interface AnimatedCardProps {
    children: React.ReactNode
    className?: string
    delay?: number
    hoverScale?: number
}

export function AnimatedCard({ children, className = "", delay = 0, hoverScale = 1.05 }: AnimatedCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            whileHover={{
                scale: hoverScale,
                y: -10,
                transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            className={className}
        >
            <Card className="h-full transition-shadow duration-300 bg-background hover:shadow-xl hover:shadow-primary/10">{children}</Card>
        </motion.div>
    )
}
