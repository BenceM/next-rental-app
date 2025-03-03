import NavBar from "../_components/NavBar";
import { NAVBAR_HEIGHT } from "../_lib/constants";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<NavBar />
			<main className={`h-full w-full flex flex-col pt-[${NAVBAR_HEIGHT}px] `}>
				{children}
			</main>
		</div>
	);
}
