"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface WebRingMember {
	id: string;
	name: string;
	url: string;
}

interface WebRingData {
	prev: WebRingMember;
	member: WebRingMember;
	next: WebRingMember;
}

export default function UMassWebRing() {
	const [ringData, setRingData] = useState<WebRingData | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchRingData = async () => {
			try {
				const response = await fetch("https://umaring.mkr.cx/vishnuvardhanbr");
				if (response.ok) {
					const data = await response.json();
					setRingData(data);
				}
			} catch (error) {
				console.error("Failed to fetch web ring data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchRingData();
	}, []);

	if (loading) {
		return (
			<div className="flex items-center gap-4">
				<a
					href="https://github.com/umacabal/umaring"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-80 transition-opacity"
				>
					<Image
						src="/images/UMass_Athletics_wordmark.svg"
						alt="UMass Amherst"
						width={120}
						height={40}
						className="h-8 w-auto cursor-pointer"
					/>
				</a>
			</div>
		);
	}

	if (!ringData) {
		return (
			<div className="flex items-center gap-4">
				<a
					href="https://github.com/umacabal/umaring"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-80 transition-opacity"
				>
					<Image
						src="/images/UMass_Athletics_wordmark.svg"
						alt="UMass Amherst"
						width={120}
						height={40}
						className="h-8 w-auto cursor-pointer"
					/>
				</a>
			</div>
		);
	}

	return (
		<div className="flex items-center gap-4">
			{ringData.prev && (
				<a
					href={ringData.prev.url}
					className="hover:underline hover:cursor-pointer"
					target="_blank"
					rel="noopener noreferrer"
				>
					{ringData.prev.name}
				</a>
			)}
			<span>{" < "}</span>
			<a
				href="https://github.com/umacabal/umaring"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:opacity-80 transition-opacity"
			>
				<Image
					src="/images/UMass_Athletics_wordmark.svg"
					alt="UMass Amherst"
					width={120}
					height={40}
					className="h-8 w-auto cursor-pointer"
				/>
			</a>
			<span>{" > "}</span>
			{ringData.next && (
				<a
					href={ringData.next.url}
					className="hover:underline hover:cursor-pointer"
					target="_blank"
					rel="noopener noreferrer"
				>
					{ringData.next.name}
				</a>
			)}
		</div>
	);
}

