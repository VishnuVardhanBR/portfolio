import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Profile() {
	return (
		<div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
			<div className="max-w-2xl mx-auto p-4">
				<h1 className="pointer-events-none relative z-10 text-[30px] sm:text-[50px] bg-clip-text py-1 text-center font-doner font-bold">
					🔧
					<br />
					You&rsquo;re here early
				</h1>
				<div className="pointer-events-none text-neutral-500 max-w-lg mx-auto my-4 text-sm text-center relative z-10">
					The profile section is still
					being built. Meanwhile, enjoy the cool background animation or check <a className="pointer-events-auto underline text-neutral-200" href="https://vishnuvardhanbr.notion.site/B-Vishnu-Vardhan-Reddy-436c02623cd144568780e551acef5acc?pvs=4">this</a> out.
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
				</div>
			</div>
			<BackgroundBeams />
		</div>
	);
}
