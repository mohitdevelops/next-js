"use client";

import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
	const [imagepicked, setImagepicked] = useState();
	const inputRef = useRef();

	function handlePickImage() {
		inputRef.current.click();
	}
	function handleImage(event) {
		const file = event.target.files[0];

		if (!file) {
			setImagepicked(null);
			return;
		}

		const image = new FileReader();
		image.onload = () => {
			setImagepicked(image.result);
		};

		image.readAsDataURL(file);
	}

	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!imagepicked && <p>No image</p>}
					{imagepicked && <Image src={imagepicked} fill alt={name} />}
				</div>
				<input
					className={classes.input}
					type="file"
					id={name}
					accept="image"
					name={name}
					ref={inputRef}
					onChange={handleImage}
					required
				/>
				<button
					className={classes.button}
					onClick={handlePickImage}
					type="button"
				>
					Pick Image
				</button>
			</div>
		</div>
	);
}
