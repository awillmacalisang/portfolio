"use client"

import { Card } from "@/components/ui/card"
import { MarqueeContent } from "@/components/ui/shadcn-io/marquee"
import { FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaShopify, FaBootstrap, FaReact, FaGithub, FaFigma, FaGoogle, FaRegSquare } from "react-icons/fa";
import { SiWoocommerce, SiTailwindcss, SiNextdotjs, SiTypescript, SiElementor, SiWpengine, SiGodaddy, SiCpanel } from "react-icons/si";

const techIcons = [
	{ icon: FaHtml5, color: "#E34F26", size: "large" },
	{ icon: FaCss3Alt, color: "#1572B6", size: "large" },
	{ icon: FaJs, color: "#F7DF1E", size: "large" },
	{ icon: FaWordpress, color: "#21759B", size: "large" },
	{ icon: FaShopify, color: "#96BF48", size: "large" },
	{ icon: SiWoocommerce, color: "#96588A", size: "large" },
	// { icon: "#C0C0C0", color: "#C0C0C0", size: "large" }, // Ajax (generic)
	{ icon: SiTailwindcss, color: "#38BDF8", size: "large" },
	{ icon: FaBootstrap, color: "#7952B3", size: "large" },
	{ icon: FaReact, color: "#61DAFB", size: "large" },
	{ icon: SiNextdotjs, color: "#000000", size: "large" },
	{ icon: SiGodaddy, color: "#7DB701", size: "large" },
	{ icon: SiCpanel, color: "#FF6C2C", size: "large" },
	{ icon: FaFigma, color: "#F24E1E", size: "large" },
	{ icon: SiTypescript, color: "#3178C6", size: "large" },
	{ icon: FaGithub, color: "#181717", size: "large" },
	{ icon: SiElementor, color: "#92003B", size: "large" },
	{ icon: SiWpengine, color: "#40BAC8", size: "large" },
	{ icon: FaGoogle, color: "#4285F4", size: "large" },
	{ icon: "#FFB900", color: "#FFB900", size: "large" }, // WP Bakery (generic)
	{ icon: "#0A2540", color: "#0A2540", size: "large" }, // Divi Builder (generic)
	{ icon: "#5D3B7B", color: "#5D3B7B", size: "large" }, // Avada Builder (generic)
	{ icon: "#00A0A0", color: "#00A0A0", size: "large" }, // ACF (generic)
	{ icon: "#FF6F00", color: "#FF6F00", size: "large" }, // Beaver Builder (generic)
	// Google Analytics
	{ icon: "#4285F4", color: "#4285F4", size: "large" }, // Google Tag Manager (generic)

	{ icon: "#1A9D49", color: "#1A9D49", size: "large" }, // Siteground (generic)

]

const TechCard = ({ icon: Icon, color, size }: { icon: any; color: string; size: string }) => {
	const sizeClasses = {
		small: "w-16 h-16",
		medium: "w-20 h-20",
		large: "w-60 h-60",
	}

	const iconSizes = {
		small: "w-8 h-8",
		medium: "w-10 h-10",
		large: "w-30 h-30",
	}

	return (
		<Card
			className={`${sizeClasses[size as keyof typeof sizeClasses]} bg-transparent border-1 border-[#020202] flex items-center justify-center`}
		>
			{typeof Icon === "string" ? (
				<FaRegSquare className={`${iconSizes[size as keyof typeof iconSizes]}`} style={{ color }} />
			) : (
				<Icon className={`${iconSizes[size as keyof typeof iconSizes]}`} style={{ color }} />
			)}
		</Card>
	)
}

export function MasonryMarquee() {
	const leftIcons = techIcons.slice(0, 6)
	const middleIcons = techIcons.slice(6, 12)
	const rightIcons = techIcons.slice(12, 18)

	return (
		<div className="w-full flex flex-row items-start gap-x-0 max-w-full">
			<div className="flex-1 relative">
				<div className="marquee-cover"></div>
				<MarqueeContent direction="down" speed={30} autoFill={true}>

					{leftIcons.map((item, index) => (
						<TechCard key={index} {...item} />
					))}
				</MarqueeContent>
				<div className="marquee-cover-bottom"></div>
			</div>
			<div className="flex-1 relative">
				<div className="marquee-cover"></div>
				<MarqueeContent direction="up" speed={30} autoFill={true}>
					{middleIcons.map((item, index) => (
						<TechCard key={index} {...item} />
					))}
				</MarqueeContent>
				<div className="marquee-cover-bottom"></div>
			</div>
			<div className="flex-1 relative">
				<div className="marquee-cover"></div>
				<MarqueeContent direction="down" speed={30} autoFill={true}>
					{rightIcons.map((item, index) => (
						<TechCard key={index} {...item} />
					))}
				</MarqueeContent>
				<div className="marquee-cover-bottom"></div>
			</div>
		</div>
	)
}
