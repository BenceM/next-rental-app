import Link from "next/link";
import { NAVBAR_HEIGHT } from "../_lib/constants";
import Image from "next/image";
import { Button } from "@/shadcn/components/ui/button";

export default function NavBar() {
	return (
		<nav
			className="fixed top-0 left-0 w-full z-50 shadow-xl"
			style={{ height: `${NAVBAR_HEIGHT}px` }}
		>
			<div className="flex justify-between items-center py-3 w-full h-full px-8 bg-primary-700 text-white">
				<div className="flex items-center gap-4 md:gap-6">
					<Link
						href="/"
						className="cursor-pointer hover:!text-primary-300"
						scroll={false}
					>
						<div className="flex items-center gap-3">
							<Image
								src="/logo.svg"
								alt="Rent Hub logo"
								width={24}
								height={24}
								className="size-6"
							/>
							<div className="text-xl font-bold">
								RENT
								<span className="text-secondary-500 font-light hover:!text-primary-300">
									HUB
								</span>
							</div>
						</div>
					</Link>
				</div>
				<p className="text-primary-200 hidden  md:block">
					Discover your perfect apartment with just a click of a button
				</p>
				<div className="flex items-center gap-5">
					<Link href="/signin">
						<Button
							variant="outline"
							className="text-white border-white bg-transparent hover:text-primary-700 hover:bg-white rounded-lg duration-300"
						>
							Sign In
						</Button>
					</Link>
					<Link href="/signup">
						<Button
							variant="outline"
							className="text-white hover:bg-secondary-600 bg-secondary-700 hover:text-white rounded-lg duration-300"
						>
							Sign Up
						</Button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
