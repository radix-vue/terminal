import "./App.css";
import { Switch } from "@/ui/Switch";

function App() {
	return (
		<>
			<div className="flex items-center flex-col px-5 py-10 min-h-screen">
				<div className="w-full max-w-sm">
					<p className="text-lg font-semibold mt-10 mb-2">Switch</p>
					<div className="flex gap-4 items-end">
						<Switch />
						<Switch size={2} className="" />
					</div>
          <p className="text-lg font-semibold mt-10 mb-2">Switch</p>
					<div className="flex gap-4 items-end">
						<Switch />
						<Switch size={2} className="" />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
