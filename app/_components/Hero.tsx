"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/shadcn/components/ui/input";
import { Button } from "@/shadcn/components/ui/button";
export default function Hero() {
	return (
		<div className="relative h-screen">
			<Image
				src="/landing-splash.webp"
				alt="Rent Hub hero section"
				fill
				className="object-cover object-center"
				priority
			/>
			<div className="absolute inset-0 bg-black bg-opacity-60"></div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="absolute top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
			>
				<div className="max-w-4xl mx-auto px-16 sm:px-12">
					<h1 className="text-5xl font-bold text-white mb-4">
						Start your journey of finding a perfect place to call home
					</h1>
					<p className="text-xl text-white mb-8">
						Explore our wide range of rental properties tailored to fit your
						needs
					</p>
					<div className="flex justify-center">
						<Input
							type="text"
							value="Search"
							onChange={() => {}}
							placeholder="Search our 80000+ property data base"
							className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12 px-2"
						/>
						<Button
							onClick={() => {}}
							className="bg-secondary-600 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-500 h-12 px-4"
						>
							Search
						</Button>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
