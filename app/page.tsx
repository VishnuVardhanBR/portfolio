"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import ProfileLink from "./profilelink";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
export default function Home() {
	return (
		<>
			<div className="flex flex-col min-h-dvh">
				<section className="flex flex-col items-left justify-between h-[100dvh] text-secondary-foreground bg-hero bg-cover">
					<div className="flex flex-col sm:flex-row items-center justify-between text-center">
						<div className="text-[20px] lg:text-left sm:ml-12 text-center my-12 font-doner hover:cursor-pointer">
							✉️ &nbsp; vv.bheemreddy@gmail.com
						</div>
						<ProfileLink />
					</div> 
					<MaskContainer
						revealText={
							<h1 className="select-none pointer-events-none text-[130px] pl-2 md:text-[275px] lg:text-[350px] lg:p-12 md:leading-[16rem] md:p-8 sm:text-[250px] sm:leading-[12rem] font-thunder leading-[8rem] tracking-[-0.01em] ">
								VISHNU <br /> VARDHAN REDDY.
							</h1>
						}
						
					>
						<h1 className=" select-none pointer-events-none text-[130px] pl-2 md:text-[275px] lg:text-[350px] lg:p-12 md:leading-[16rem] md:p-8 sm:text-[250px] sm:leading-[12rem] font-thunder leading-[8rem] tracking-[-0.01em] ">
						THIS EFFECT IS<br /> PRETTY COOL HUH.
						</h1>
					</MaskContainer>
				</section>
				<section className="pt-12 md:pt-24 lg:pt-32 bg-black text-foreground font-doner grid gap-12 max-w-screen">
					<div className="py-12 container px-4 md:px-6 text-center">
						<div className="select-none pointer-events-none max-w-6xl mx-auto space-y-4">
							<p className="text-[25px] md:text-2xl">
								2024 Grad in Computer Science.
								<br />
								<br />
								Passionately dedicated to computer science, persistently
								pursuing new knowledge, proficient in problem-solving.
							</p>
						</div>
					</div>
					<div className="container flex items-center justify-center py-12 gap-8 text-[12px] sm:text-[18px]">
						<a
							className="hover:underline hover:cursor-pointer"
							href="https://firebasestorage.googleapis.com/v0/b/portfolio-bd380.appspot.com/o/20881A0571%20-%20B.%20Vishnu%20Vardhan%20Reddy.pdf?alt=media&token=cce4f42f-da8e-4d78-987a-dcbf12fbacf3"
						>
							Resume
						</a>
						<Separator className="hidden max-w-[70vw] lg:block" />
						<a
							className="hover:underline hover:cursor-pointer"
							href="https://www.github.com/VishnuVardhanBR/"
						>
							Github
						</a>
						<a
							className="hover:underline hover:cursor-pointer"
							href="https://leetcode.com/VishnuVardhanBR/"
						>
							Leetcode
						</a>
						<a
							className="hover:underline hover:cursor-pointer"
							href="https://www.linkedin.com/in/vishnuvardhanbr/"
						>
							LinkedIn
						</a>
					</div>
				</section>
			</div>
		</>
	);
}

//add projects with notion later
