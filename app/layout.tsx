import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const thunder = localfont({
	src: [{
		path: "../public/fonts/Thunder-ExtraBoldLC.otf",
		weight: "700",
	}],
	variable: "--font-thunder"
});
const doner = localfont({
	src: [{
		path: "../public/fonts/Doner-RegularDisplay.otf",
		weight: "700",
	}],
	variable: "--font-doner"
});
export const metadata: Metadata = {
	title: "Vishnu Vardhan Reddy",
	description: "My Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					`min-h-screen bg-background ${thunder.variable} ${doner.variable} antialiased dark`,
				)}
			>
				{children}
			</body>
		</html>
	);
}
