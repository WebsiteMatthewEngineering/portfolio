import Image from "next/image";
import Button from "@/components/button";

function Buttons() {
    return (
        <div className="flex flex-row justify-center mt-6 gap-5">
            <Button href="https://github.com/MatthewEngineering/trame" className="mx-" new_tab={true}>View on GitHub</Button>
            <Button href="https://bike-simulation.matthewengineering.com/index.html" className="mx-" new_tab={true}>Visit Live Demo</Button>
        </div>
    )
}

export default function BikeSimulationProject() {
  return (
    <main className="bg-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 pt-20 pb-20 px-5">
        
        <div className="card flex flex-col gap-8 p-8">
            <div className="flex flex-row justify-between items-center mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-text">Bike Simulation</h2>
                <Button href="/" className="!w-fit !px-4">←</Button>
            </div>

            <Buttons />

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">About This Project</h3>
                <p className="text-text text-lg text-justify">
                    This interactive bike simulation demonstrates physics-based bicycle dynamics and control mechanics. 
                    Built with modern web technologies, the simulation provides a realistic cycling experience where 
                    users can control a bicycle through various terrains and conditions, experiencing the challenges 
                    of balance, momentum, and physics-based movement.
                </p>
                <p className="text-text text-lg text-justify">
                    I developed this simulation to explore the complexities of bicycle physics and create an engaging 
                    interactive experience. The project implements realistic mechanics including balance dynamics, 
                    momentum transfer, and terrain interaction, providing both an educational tool and an entertaining 
                    game experience.
                </p>
            </div>

            <div className="max-w-xl mx-auto grid grid-cols-2 gap-4">
                <img alt="Bike simulation screenshot" src="/projects/bike-simulation/main.png" className="rounded-lg object-cover w-full h-full col-span-2" />
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Simulation Controls</h3>
                <ul className="text-text text-lg list-disc list-inside space-y-2">
                    <li><strong>Arrow keys</strong> to control the bike's movement and balance</li>
                    <li>Maintain balance while navigating through the environment</li>
                    <li>Experience realistic physics-based bike dynamics</li>
                    <li>Navigate various terrains and obstacles</li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🚴 Realistic Physics</h4>
                        <p className="text-text">Bike follows authentic physics-based movement and balance mechanics</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">⚖️ Dynamic Balance</h4>
                        <p className="text-text">Real-time balance system requiring active player control</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🎮 Intuitive Controls</h4>
                        <p className="text-text">Responsive keyboard controls for natural bike handling</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🌍 Interactive Environment</h4>
                        <p className="text-text">Engaging terrain with physics-based interactions</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Technical Implementation</h3>
                <p className="text-text text-lg">
                    Built with modern web technologies and physics engines, implementing custom algorithms for 
                    bicycle dynamics, balance systems, and terrain interaction. The simulation uses canvas-based 
                    rendering for smooth performance and responsive gameplay.
                </p>
            </div>

            <Buttons />

        </div>
      </div>
    </main>
  );
}
