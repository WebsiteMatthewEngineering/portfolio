import Button from "@/components/button";

function Buttons() {
    return (
        <div className="flex flex-row flex-wrap justify-center mt-6 gap-5">
            <Button href="https://robotfleet.matthewengineering.com" className="mx-" new_tab={true}>Visit Live Demo</Button>
            {/* <Button href="https://github.com/MatthewEngineering/RobotArm" className="mx-" new_tab={true}>View on GitHub</Button> */}
        </div>
    )
}

export default function NasaFleetProject() {
  return (
    <main className="bg-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 pt-20 pb-20 px-5">

        <div className="card flex flex-col gap-8 p-8">
            <div className="flex flex-row justify-between items-center mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-text">NASA Fleet: Otherworldly Robotics</h2>
                <Button href="/" className="!w-fit !px-4">←</Button>
            </div>

            <Buttons />

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">About This Project</h3>
                <p className="text-text text-lg text-justify">
                    NASA Fleet is a browser-based robotics simulator that lets you spawn and pilot a fleet of NASA-inspired
                    robots — including the <a href="https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Ingenuity Mars Helicopter</a> and
                    the Perseverance rover — across lifelike Mars, Earth, and city environments. Everything runs on a real
                    ROS2 + Gazebo stack streamed to the browser, so you can drive, fly, and orchestrate robots without
                    installing a thing.
                </p>
                <p className="text-text text-lg text-justify">
                    I built this project to bridge the gap between professional robotics tooling and the web. Most ROS2
                    work happens in heavyweight Linux environments with RViz and Gazebo running locally; NASA Fleet pulls
                    that whole stack into a containerized service and exposes it through a React frontend that talks to
                    rosbridge over WebSockets.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <img alt="NASA Fleet simulator in action" src="/projects/nasa-fleet/A.png" className="rounded-lg object-cover w-full shadow-lg" />
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Robots in the Fleet</h3>
                <p className="text-text text-lg text-justify">
                    The fleet uses official URDF models from <a href="https://github.com/nasa-jpl/m2020-urdf-models" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">NASA JPL's m2020-urdf-models</a> repository,
                    so the Ingenuity helicopter and Perseverance rover you see in the simulator are the same descriptions
                    JPL uses for the real mission hardware. Each robot is spawned as its own ROS2 node, with topics
                    namespaced per instance so you can run and control many of them at once.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <img alt="NASA JPL M2020 URDF models" src="/projects/nasa-fleet/m20-urdf-banner.png" className="rounded-lg object-cover w-full shadow-lg" />
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🚁 Multi-Robot Fleet</h4>
                        <p className="text-text">Spawn and despawn Ingenuity helicopters and Perseverance rovers at runtime, each as its own ROS2 node</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🌎 Lifelike Scenes</h4>
                        <p className="text-text">Detailed Mars, Earth, and city environments built as Gazebo SDF worlds at real-world scale</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🎮 Browser Controls</h4>
                        <p className="text-text">WASD + Shift/Ctrl flight, Q/E yaw, and an autopilot mode with line, square, and return-to-pad patterns</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">📡 Live ROS Topics</h4>
                        <p className="text-text">Sidebar inspector for subscribed topics, TFs, and joint states, with a publisher panel for sending commands back</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">⚛️ React Frontend</h4>
                        <p className="text-text">Componentized React app using roslibjs and three.js to render URDFs parsed live from <code>/robot_description</code></p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">☁️ Cloud Deployed</h4>
                        <p className="text-text">Single Docker container running ROS2 + rosbridge + Gazebo + Node, deployed to Azure Container Apps via Terraform</p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <img alt="NASA Fleet developer view" src="/projects/nasa-fleet/Dev.png" className="rounded-lg object-cover w-full shadow-lg" />
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">AI Orchestration with NASA JPL's ROSA</h3>
                <p className="text-text text-lg text-justify">
                    The most innovative part of this project isn't the simulator — it's the layer on top of it. NASA Fleet
                    integrates <a href="https://github.com/nasa-jpl/rosa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">NASA JPL's ROSA</a> (the
                    ROS Agent) to drive the fleet with large language models. ROSA is a real tool published by JPL for
                    natural-language control of ROS systems, and here it acts as the "mission commander" sitting between
                    a human operator and dozens of independent robot nodes.
                </p>
                <p className="text-text text-lg text-justify">
                    Instead of clicking buttons to fly one helicopter at a time, you can issue high-level intent — "scout
                    the ridge with three helicopters and have the rover meet at the landing pad" — and an LLM-backed agent
                    decomposes it into per-robot ROS2 commands, publishing namespaced topics to each instance. That
                    orchestration layer is where the ML work lives: prompt design for spatial reasoning, tool-calling
                    schemas for ROS topics and services, and feedback loops that consume live telemetry (TFs, joint
                    states, autopilot status) so the agent can react to what the robots are actually doing.
                </p>
                <p className="text-text text-lg text-justify">
                    Inference is pluggable via <a href="https://huggingface.co/settings/inference-providers/overview" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Hugging Face inference providers</a>,
                    so the same orchestration stack can run against different model backends. The result is a small but
                    real demonstration of multi-robot fleet management driven by LLMs — built on the exact tools NASA JPL
                    publishes for their own mission software.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Technical Stack</h3>
                <p className="text-text text-lg">
                    Built on <strong>ROS2 Humble</strong> with <strong>Gazebo</strong> for physics and rendering,
                    <strong> rosbridge_server</strong> for the WebSocket bridge, and a <strong>React + Vite</strong>{" "}
                    frontend using <strong>roslibjs</strong> and <strong>three.js</strong>. The entire stack — ROS,
                    Gazebo, Xvfb/noVNC, and the Node app — is packaged into a single Docker image and deployed to{" "}
                    <strong>Azure Container Apps</strong> with infrastructure defined in <strong>Terraform</strong>.
                </p>
                <p className="text-text text-lg">
                    The ROS2 nodes themselves are written in <strong>C++</strong> — the same language used for
                    production flight software. The only abstraction in this project is that I bypassed the low-level
                    helicopter controls: incoming commands to the node currently return position changes directly rather
                    than driving simulated motors. There's no reason these nodes couldn't be wired up to real production
                    flight software written in <a href="https://github.com/nasa/fprime" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">F´ (F Prime)</a>,  
                    <a href="https://niccs.cisa.gov/training/catalog/tonex/best-practices-coding-safety-critical-software-misra-cc-and-jsf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">JSF</a>, or
                    another safety-critical C++ standard used for spacecraft and aerial vehicles — the topic interface stays the same,
                    only the control loop underneath changes.
                </p>
                <p className="text-text text-lg">
                    The AI layer is implemented on top of <a href="https://github.com/nasa-jpl/rosa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">NASA JPL's ROSA</a> (installed
                    from PyPI per the <a href="https://github.com/nasa-jpl/rosa/wiki/Developer-Documentation#from-pypi-for-use-in-other-projects" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">developer documentation</a>),
                    with LLM inference routed through <a href="https://huggingface.co/settings/inference-providers/overview" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Hugging Face inference providers</a>.
                    URDF models for Ingenuity and Perseverance come from <a href="https://github.com/nasa-jpl/m2020-urdf-models" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">NASA JPL's m2020-urdf-models</a>.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">References & Inspiration</h3>
                <ul className="text-text text-lg list-disc list-inside space-y-2">
                    <li><a href="https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">NASA — Ingenuity Mars Helicopter mission page</a></li>
                    <li><a href="https://github.com/nasa-jpl/m2020-urdf-models" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">nasa-jpl/m2020-urdf-models — Perseverance & Ingenuity URDFs</a></li>
                    <li><a href="https://github.com/nasa-jpl/rosa/wiki/Developer-Documentation#from-pypi-for-use-in-other-projects" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">nasa-jpl/rosa — ROS Agent developer documentation</a></li>
                    <li><a href="https://huggingface.co/settings/inference-providers/overview" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Hugging Face — Inference providers overview</a></li>
                </ul>
            </div>

            <Buttons />

        </div>
      </div>
    </main>
  );
}
