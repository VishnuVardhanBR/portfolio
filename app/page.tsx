import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
	const words = ["developer", "gamer", "f1fan", "2024grad"];

	return (
		<div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
			<div className="max-w-2xl mx-auto p-4">
				<h1 className="pointer-events-none relative z-10 text-lg md:text-7xl bg-clip-text py-1 text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
					🔧
					<br />
					You&rsquo;re here early
				</h1>
				<p className="pointer-events-none text-neutral-500 max-w-lg mx-auto my-4 text-sm text-center relative z-10">
					This is the portfolio website of B. Vishnu Vardhan Reddy, and is still
					being built. Meanwhile, enjoy the cool background animation.
					<div className="pt-6">
						You can drop me a mail at
						<br />
						<a
							className="pointer-events-auto font-extrabold"
							href="mailto:vv.bheemreddy@gmail.com"
						>
							{" "}
							vv.bheemreddy@gmail.com
						</a>
					</div>
				</p>
			</div>
			<BackgroundBeams />
		</div>
	);
}
