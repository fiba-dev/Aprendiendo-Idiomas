import "./index.css";

export function Videos() {
	return (
		<div>
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/g_MPmhPqOX0"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen={true}
				className="videos"
				sameSite={false}
			></iframe>
		</div>
	);
}
