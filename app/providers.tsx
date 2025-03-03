"use client";

import StoreProvider from "./_state/redux";

export default function Providers({ children }: { children: React.ReactNode }) {
	return <StoreProvider>{children}</StoreProvider>;
}
