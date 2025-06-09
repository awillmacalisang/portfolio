"use client"
import { motion } from "framer-motion"
import type React from "react"

import { Badge } from "./ui/badge"

interface AnimatedBadgeProps {
  children: React.ReactNode
  delay?: number
  variant?: "default" | "secondary" | "destructive" | "outline"
  className?: string
}

export function AnimatedBadge({ children, delay = 0, variant = "default", className }: AnimatedBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge variant={variant} className={className}>
        {children}
      </Badge>
    </motion.div>
  )
}
