import React, { useRef, useState } from 'react'
import AnimatedPage from '../AnimatedPage'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './contact.css'
import 'animate.css'
import emailjs from '@emailjs/browser'
import PopupForm from './PopupForm';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';

const Contact = () => {

	const form = useRef();

	const [contactMe,] = useState(['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']);
	const [animatedTextClass,] = useState('overview desktop:text-7xl/[4.5rem] laptop:text-6xl/[3.75rem] tablet:text-5xl/[3.5rem] tracking-tight font-bold text-primary-yellow');
	const [inputStyle,] = useState('py-3 px-4 w-full bg-dark-blue focus:outline-none focus:placeholder:opacity-0 focus:shadow-[4px_4px_0px_#ffd700] focus:text-primary-yellow focus:bg-very-dark-blue focus:border-primary-yellow focus:border-[1px] focus:transition focus:duration-200 focus:ease-in placeholder:transition-opacity placeholder:duration-200 placeholder:ease-out');
	const [popupAnimation, setPopupAnumation] = useState({ opacity: 0 });
	const [text, setText] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(
			import.meta.env.VITE_SERVICE_ID,
			import.meta.env.VITE_TEMPLATE_ID,
			form.current,
			import.meta.env.VITE_API_KEY
		).then(result => {
			setText('message sent successfuly');
			setPopupAnumation({
				animationName: 'bounceInUp',
				animationDuration: '1.2s',
				animationFillMode: 'backwards'
			});
			setTimeout(() => {
				setPopupAnumation({
					animationName: 'bounceOutDown',
					animationDuration: '1.2s',
					animationFillMode: 'forwards'
				});
			}, 3000);
			console.log(result.status, " : ", result.text);
		}).catch(error => {
			setText('an error occured !');
			setPopupAnumation({
				animationName: 'bounceInUp',
				animationDuration: '1.2s',
				animationFillMode: 'backwards'
			});
			setTimeout(() => {
				setPopupAnumation({
					animationName: 'bounceOutDown',
					animationDuration: '1.2s',
					animationFillMode: 'forwards'
				});
			}, 3000);
			console.error(error);
		});
	}


	return (
		<AnimatedPage>
			<div className='w-full max-h-[90vh] h-[90vh] ml-4 flex laptop:flex-row tablet:flex-col justify-evenly items-center relative'>
				<div className='contact-form laptop:w-[45%] laptop:pr-6 flex laptop:flex-col tablet:flex-row tablet:w-full tablet:mb-6 laptop:mb-0'>
					<div className='tablet:w-[85%] laptop:w-auto' >
						<span
							className=' block font-LaBelleAurore text-primary-yellow text-xl opacity-75 -ml-4'>&lt;h1&gt;</span>

						<AnimatedLetters
							animatedText={contactMe}
							animatedTextClass={animatedTextClass}
							startingIndex={-5}
						/>

						<span
							className=' font-LaBelleAurore text-primary-yellow text-xl opacity-75 -ml-4'>&lt;/h1&gt;</span>

						<p className='laptop:text-xl tablet:text-lg w-full pr-8 '>
							I'm interested in freelance & job opportunities . If you have any requests or questions please feel
							free to reach me using the form below.
						</p>
					</div>

					<form
						ref={form}
						onSubmit={sendEmail}
						className='w-full mt-8 text-lg'>
						<fieldset className='flex gap-3 mb-4'>
							<input
								type="text"
								placeholder='Name'
								name='from_name'
								className={`flex-1 ${inputStyle}`}
								style={{
									animationDelay: '0s'
								}}
							/>
							<input
								required
								type="email"
								placeholder='Email'
								name='from_email'
								className={`flex-1 ${inputStyle}`}
								style={{
									animationDelay: '.15s'
								}}
							/>
						</fieldset>
						<input
							type="text"
							placeholder='Subject'
							name='subject'
							className={`mb-4 ${inputStyle}`}
							style={{
								animationDelay: '.3s'
							}}
						/>
						<textarea
							required
							placeholder='Message'
							name='message'
							className={`block w-full ${inputStyle}`}
							style={{
								animationDelay: '.45s'
							}}
							cols="30"
							rows="5">
						</textarea>
						<button
							type="submit"
							style={{
								animationDelay: '.6s'
							}}
							className='w-1/2 text-dark-gray text-xl font-bold bg-primary-yellow border-primary-yellow border-2 p-2.5 mt-6 capitalize cursor-pointer transition-all duration-150 ease-in
           				 hover:bg-very-dark-blue hover:shadow-[4px_4px_0px_#ffd700] hover:text-primary-yellow'>Send</button>
					</form>

				</div>

				<div className='map-container laptop:w-[55%] tablet:w-full laptop:h-full h-full tablet:mb-4 relative z-0'>
					<MapContainer className='h-full' center={[36.7210, 3.1377]} zoom={13} scrollWheelZoom={true}>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={[36.7210, 3.1377]} />
					</MapContainer>
				</div>

			</div>
			{/* a popup for when a message is sent */}
			<PopupForm popupAnimation={popupAnimation} messageTXT={text} />

		</AnimatedPage>
	)
}

export default Contact