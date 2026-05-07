import Button from "@/components/button";

export default function LearnCalculix() {
  return (
    <main className="bg-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 pt-20 pb-20 px-5">

        <div className="card flex flex-col gap-8 p-8">
          <div className="flex flex-row justify-between items-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">Learn CalculiX</h2>
            <Button href="/" className="!w-fit !px-4">←</Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/projects/calculix/parachute.gif" alt="Parachute simulation" className="w-full rounded-lg object-cover" />
            <img src="/projects/calculix/turbine.gif" alt="Turbine simulation" className="w-full rounded-lg object-cover" />
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-text">What is CalculiX?</h3>
            <p className="text-text text-lg text-justify">
              CalculiX is a free, open-source finite element analysis (FEA) program used for structural,
              thermal, and fluid simulations. It uses an input file format compatible with Abaqus, making
              it a powerful tool for engineers who want to run professional-grade simulations without a
              commercial license.
            </p>
            <p className="text-text text-lg text-justify">
              FEA works by dividing a physical object into thousands of small elements (a mesh), then
              solving the governing equations across each element to predict how the part behaves under
              loads — whether that&apos;s stress, deformation, heat flow, or vibration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">🔩 Structural Analysis</h4>
              <p className="text-text">Static and dynamic stress, strain, and deformation under mechanical loads</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">🌡️ Thermal Analysis</h4>
              <p className="text-text">Steady-state and transient heat conduction, convection, and radiation</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">🔄 Modal Analysis</h4>
              <p className="text-text">Natural frequencies and mode shapes for vibration and resonance studies</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-text">Installation</h3>
            <p className="text-text text-lg">CalculiX comes in two programs: <strong>ccx</strong> (the solver) and <strong>cgx</strong> (the pre/post-processor).</p>
            <div className="flex flex-col gap-3">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Linux (Ubuntu/Debian)</h4>
                <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
                  <code>{`sudo apt-get install calculix-ccx calculix-cgx`}</code>
                </pre>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">macOS (Homebrew)</h4>
                <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
                  <code>{`brew install calculix`}</code>
                </pre>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Windows</h4>
                <p className="text-text text-sm">Download pre-compiled binaries from the CalculiX website or use WSL (Windows Subsystem for Linux) with the Linux instructions above.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-text">The FEA Workflow</h3>
            <p className="text-text text-lg">Every CalculiX simulation follows three stages:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-sky-50 border border-sky-200 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-sky-700">1. Pre-Processing</h4>
                <ul className="text-text text-sm space-y-1 list-disc list-inside">
                  <li>Define geometry and mesh</li>
                  <li>Assign material properties</li>
                  <li>Apply boundary conditions</li>
                  <li>Define loads</li>
                </ul>
              </div>
              <div className="bg-sky-50 border border-sky-200 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-sky-700">2. Solving</h4>
                <ul className="text-text text-sm space-y-1 list-disc list-inside">
                  <li>Run <code className="bg-gray-200 px-1 rounded">ccx input_file</code></li>
                  <li>Solver assembles stiffness matrix</li>
                  <li>Linear/nonlinear system solved</li>
                  <li>Results written to .frd file</li>
                </ul>
              </div>
              <div className="bg-sky-50 border border-sky-200 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-sky-700">3. Post-Processing</h4>
                <ul className="text-text text-sm space-y-1 list-disc list-inside">
                  <li>Open .frd in cgx or ParaView</li>
                  <li>View stress/displacement contours</li>
                  <li>Check for failure criteria</li>
                  <li>Iterate on design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-text">Input File Structure</h3>
            <p className="text-text text-lg text-justify">
              CalculiX reads <strong>.inp</strong> files that define every aspect of the simulation using
              keyword-based blocks. Here is a minimal example for a cantilever beam under a tip load:
            </p>
            <div className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
              <pre><code>{`** Cantilever Beam - Static Analysis
** Nodes: define X, Y, Z positions
*NODE
1,  0.0, 0.0, 0.0
2,  1.0, 0.0, 0.0
3,  2.0, 0.0, 0.0
...

** Elements: connect nodes into elements
*ELEMENT, TYPE=C3D8, ELSET=BEAM
1, 1, 2, 3, 4, 5, 6, 7, 8
...

** Material: define elastic properties
*MATERIAL, NAME=STEEL
*ELASTIC
210000.0, 0.3    ** E (MPa), Poisson ratio

** Assign material to element set
*SOLID SECTION, ELSET=BEAM, MATERIAL=STEEL

** Boundary condition: fix one end (nodes in set FIXED)
*BOUNDARY
FIXED, 1, 6    ** constrain DOF 1-6

** Step: apply load
*STEP
*STATIC
*CLOAD
TIP_NODE, 2, -1000.0    ** 1000 N in -Y direction
*NODE PRINT, NSET=ALL
U                        ** output displacements
*EL PRINT, ELSET=BEAM
S                        ** output stresses
*END STEP`}</code></pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Key Keywords</h4>
                <ul className="text-text text-sm space-y-1">
                  <li><code className="bg-gray-200 px-1 rounded">*NODE</code> — node coordinates</li>
                  <li><code className="bg-gray-200 px-1 rounded">*ELEMENT</code> — element connectivity</li>
                  <li><code className="bg-gray-200 px-1 rounded">*MATERIAL</code> — material properties</li>
                  <li><code className="bg-gray-200 px-1 rounded">*BOUNDARY</code> — constraints (DOF locks)</li>
                  <li><code className="bg-gray-200 px-1 rounded">*CLOAD</code> — concentrated nodal forces</li>
                  <li><code className="bg-gray-200 px-1 rounded">*STEP</code> — analysis step block</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Common Element Types</h4>
                <ul className="text-text text-sm space-y-1">
                  <li><code className="bg-gray-200 px-1 rounded">C3D8</code> — 8-node hexahedral (brick)</li>
                  <li><code className="bg-gray-200 px-1 rounded">C3D10</code> — 10-node tetrahedral (quadratic)</li>
                  <li><code className="bg-gray-200 px-1 rounded">S4</code> — 4-node shell element</li>
                  <li><code className="bg-gray-200 px-1 rounded">B31</code> — 2-node beam element</li>
                  <li><code className="bg-gray-200 px-1 rounded">CPS4</code> — 4-node plane stress</li>
                  <li><code className="bg-gray-200 px-1 rounded">CAX8</code> — 8-node axisymmetric</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-text">Running a Simulation</h3>
            <p className="text-text text-lg">Once your .inp file is ready, run the solver from the terminal:</p>
            <div className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
              <pre><code>{`# Run the solver (outputs .frd, .dat, .cvg files)
ccx my_model

# Open results in the CalculiX post-processor
cgx my_model.frd

# Or convert to VTK format for ParaView
cgx -b convert.fbd`}</code></pre>
            </div>
            <p className="text-text">
              The solver produces a <code className="bg-gray-200 px-1 rounded">.frd</code> file containing
              nodal results and a <code className="bg-gray-200 px-1 rounded">.dat</code> file with printed
              output. The <code className="bg-gray-200 px-1 rounded">.cvg</code> file tracks convergence for
              nonlinear problems.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-text">Tips for Getting Started</h3>
            <ul className="text-text text-lg list-disc list-inside space-y-3">
              <li><strong>Start with simple geometry</strong> — validate your setup on a beam or plate with a known analytical solution before tackling complex parts.</li>
              <li><strong>Check units</strong> — CalculiX has no built-in unit system. Pick one (e.g., N, mm, MPa) and use it consistently throughout the entire model.</li>
              <li><strong>Mesh density matters</strong> — use a finer mesh in areas of high stress gradient. Too coarse and results are inaccurate; too fine and solve time explodes.</li>
              <li><strong>Use node sets and element sets</strong> — grouping nodes with <code className="bg-gray-200 px-1 rounded">*NSET</code> and elements with <code className="bg-gray-200 px-1 rounded">*ELSET</code> makes applying loads and boundary conditions far easier.</li>
              <li><strong>Read the .dat file</strong> — the printed output file often reveals issues (large displacements, negative volumes) before you even open the visualizer.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-text">Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Official Documentation</h4>
                <ul className="text-text text-sm space-y-2">
                  <li>
                    <div className="flex flex-row justify-center mt-4 gap-5">
                      <Button href="http://www.dhondt.de/" new_tab={true} className="!w-fit !px-4">CalculiX Homepage</Button>
                    </div> 
                  </li>
                  <li className="mt-2">
                    <div className="flex flex-row justify-center mt-4 gap-5">
                      <Button href="http://www.dhondt.de/ccx_2.22.pdf" new_tab={true} className="!w-fit !px-4">CCX User Manual (PDF)</Button>
                    </div> 
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Community & Tutorials</h4>
                <ul className="text-text text-sm space-y-2">
                  <li>
                    <div className="flex flex-row justify-center mt-4 gap-5">
                      <Button href="https://www.feaforall.com/category/calculix/" new_tab={true} className="!w-fit !px-4">FEA For All — CalculiX Tutorials</Button>
                    </div> 
                  </li>
                  <li className="mt-2">
                    <div className="flex flex-row justify-center mt-4 gap-5">
                      <Button href="https://github.com/calculix" new_tab={true} className="mx-">CalculiX on GitHub</Button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center mt-4 gap-5">
            <Button href="/" className="mx-">← Back to Projects</Button>
          </div>

        </div>
      </div>
    </main>
  );
}
