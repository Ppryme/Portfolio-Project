import { useCountUp } from 'react-countup';
import CounterItem from './counter-item';


export default function AboutCounter({ darkMode }) {
	useCountUp({ ref: 'experienceCounter', end: 12, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 20, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 77, duration: 2 });

	return (
		<section
			className={`relative left-[50%] right-[50%]  -mx-[50vw]  w-screen ${
				darkMode ? 'bg-[#1e3851]' : 'bg-[#f7f8fc]'
			} mt-10 sm:mt-20`}
		>
			<div className="max-w-6xl mx-auto text-xl px-4 py-20 flex flex-col sm:flex-row justify-between items-center gap-8">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>
				<CounterItem
					title="Stars on GitHub"
					counter={<span id="githubStarsCounter" />}
					measurement="k+"
				/>
				<CounterItem
					title="Positive feedback"
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>
				<CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="%"
				/>
			</div>
		</section>
	);
}


