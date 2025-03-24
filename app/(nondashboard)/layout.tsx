import NavBar from "../_components/NavBar";
import { NAVBAR_HEIGHT } from "../_lib/constants";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-full w-full">
			<NavBar />
			<main
				className="h-full w-full flex flex-col"
				style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
			>
				{children}
			</main>
		</div>
	);
}
