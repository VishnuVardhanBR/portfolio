import Image from "next/image";
import pfpImage from "@/public/images/pfp.png";
const CircularText = ({
	text,
	children,
}: {
	text: string;
	children: React.ReactNode;
}) => {
	const radius = 23; 
	const letters = text.split(" ");

	return (
		<div className="relative inline-block md:mr-6 ">
			<svg className="w-32 h-32 animate-spin-slow" viewBox="0 0 100 100">
				<defs>
					<path
						id="circle"
						d={`M 50, 50 m -${radius}, 0 a ${radius},${radius} 0 1,1 ${
							radius * 2
						},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
					/>
				</defs>
				<text fill="currentColor">
					<textPath
						xlinkHref="#circle"
						className="text-[0.6rem] font-bold tracking-[0.15em] md:tracking-widest" //shit fix for gap
					>
						{letters.map((letter: string, i: number) => (
							<tspan key={i} dy={i === 0 ? "-6" : "0"} dx={i === 0 ? "0" : "2"}>
								{letter}
							</tspan>
						))}
					</textPath>
				</text>
			</svg>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				{children}
			</div>
		</div>
	);
};

const ProfileLink = () => {
	return (
		<CircularText text="click me--------------------">
			<a href="https://me.vishnuvardhanbr.com" className="block">	
				<Image
					src={pfpImage}
					width={60}
					height={60}
					alt="click me"
					className="hover:cursor-pointer border-solid border-4 border-black-500 rounded-full transform transition duration-300 hover:scale-125"
				/>
			</a>
		</CircularText>
	);
};

export default ProfileLink;
