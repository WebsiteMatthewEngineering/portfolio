


import Image from "next/image";
import Button from "@/components/button";

function Buttons() {
    return (
        <div className="flex flex-row justify-center mt-6 gap-5">
            {/* <Button href="#" className="mx-">View on GitHub</Button> */}
            <Button href="https://orbital.matthewengineering.com/" className="mx-" new_tab={true} >Visit Live Demo</Button>
        </div>
    )
}

export default function OrbitalProject() {
  return (
    <main className="bg-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 pt-20 pb-20 px-5">
        
        <div className="card flex flex-col gap-8 p-8">
            <div className="flex flex-row justify-between items-center mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-text">Orbital Mechanics Simulator</h2>
                <Button href="/" className="!w-fit !px-4">←</Button>
            </div>

            <Buttons />

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">About This Project</h3>
                <p className="text-text text-lg text-justify">
                    This interactive orbital mechanics simulator demonstrates real-world satellite trajectory physics and 
                    energy management principles. Built with Phaser.js, the simulation allows users to control satellite 
                    orbits through precise energy adjustments, providing hands-on experience with fundamental aerospace 
                    engineering concepts.
                </p>
                <p className="text-text text-lg text-justify">
                    I developed this simulation to provide an educational tool for visualizing orbital dynamics and energy 
                    conservation principles. By implementing mathematically accurate orbital mechanics, users can explore how 
                    energy modifications affect satellite trajectories and orbital stability - core concepts in satellite 
                    operations and space mission planning.
                </p>
            </div>

            <div className="max-w-xl mx-auto grid grid-cols-2 gap-4">
                <img alt="Gameplay screenshot" src="/projects/orbital/top.png" className="rounded-lg object-cover w-full h-full col-span-2" />
                <img alt="Satellite orbit view" src="/projects/orbital/left.png" className="rounded-lg object-cover w-full h-full" />
                <img alt="Energy management" src="/projects/orbital/right.png" className="rounded-lg object-cover w-full h-full" />
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Simulation Controls</h3>
                <ul className="text-text text-lg list-disc list-inside space-y-2">
                    <li><strong>Click</strong> on satellites to select them</li>
                    <li><strong>Mouse wheel</strong> or <strong>+/-</strong> keys to modify energy levels</li>
                    <li>Maintain satellites in stable orbital patterns</li>
                    <li>Observe the relationship between energy states and orbital trajectories</li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🚀 Physics-Based Modeling</h4>
                        <p className="text-text">Satellites follow mathematically accurate Newtonian orbital mechanics</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">⚡ Energy State Management</h4>
                        <p className="text-text">Real-time energy transfer with persistent orbital effects</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">✨ Visual Feedback</h4>
                        <p className="text-text">Trajectory visualization with particle effects for clarity</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🎯 Dynamic Parameters</h4>
                        <p className="text-text">Natural energy decay demonstrates long-term orbital evolution</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Technical Implementation</h3>
                <p className="text-text text-lg">
                    Built with <strong>Phaser.js 3.70.0</strong> rendering framework, leveraging HTML5 Canvas for visualization 
                    and ES6+ JavaScript for physics calculations. The simulation implements custom algorithms for orbital 
                    mechanics, real-time particle systems for visual feedback, and a responsive interface for parameter adjustment.
                </p>
            </div>

            <img alt="Game interface" src="/projects/orbital/bottom.png" className="rounded-lg object-cover w-full max-h-[400px]" />

            <Buttons />

        </div>
      </div>
    </main>
  );
}
