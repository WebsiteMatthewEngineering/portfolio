import Image from "next/image";
import Button from "@/components/button";

function Buttons() {
    return (
        <div className="flex flex-row justify-center mt-6 gap-5">
            <Button href="https://searxng.matthewengineering.com/" className="mx-" new_tab={true}>Visit SearXNG Instance</Button>
        </div>
    )
}

export default function SearXNGProject() {
  return (
    <main className="bg-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 pt-20 pb-20 px-5">
        
        <div className="card flex flex-col gap-8 p-8">
            <div className="flex flex-row justify-between items-center mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-text">SearXNG Private Search Engine</h2>
                <Button href="/" className="!w-fit !px-4">←</Button>
            </div>

            <Buttons />

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Why Private Search Engines Matter</h3>
                <p className="text-text text-lg text-justify">
                    Private search engines are critical to AI-based LLM web searching. Modern AI agents and language models 
                    increasingly rely on real-time web searches to provide up-to-date information and fact-checking capabilities. 
                    However, commercial search engines track queries, building profiles that can compromise both user privacy 
                    and the integrity of AI-generated responses.
                </p>
                <p className="text-text text-lg text-justify">
                    SearXNG addresses these concerns by providing a self-hosted, privacy-respecting metasearch engine that 
                    aggregates results from multiple search engines without tracking, profiling, or storing user data. This is 
                    particularly important for AI applications where search patterns might reveal sensitive research directions, 
                    proprietary interests, or confidential project details.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">My Implementation</h3>
                <p className="text-text text-lg text-justify">
                    I set up and customized my own SearXNG instance at <strong>searxng.matthewengineering.com</strong> to serve 
                    as the backbone for AI-powered research and web data retrieval. This self-hosted deployment gives me complete 
                    control over search functionality, ensures zero tracking, and provides a reliable API endpoint for integrating 
                    with LLM workflows, RAG systems, and automated research agents.
                </p>
                <p className="text-text text-lg text-justify">
                    The instance is configured to aggregate results from over a dozen search engines while respecting rate limits 
                    and maintaining response speed. Custom configurations optimize results for technical documentation, academic 
                    papers, and development resources - precisely the content most valuable for AI-assisted engineering work.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <img alt="SearXNG interface" src="/projects/searxng/SearXNG.png" className="rounded-lg object-cover w-full shadow-lg" />
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🔒 Complete Privacy</h4>
                        <p className="text-text">No tracking, no cookies, no search history logging</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🔄 Metasearch Aggregation</h4>
                        <p className="text-text">Results from Google, Bing, DuckDuckGo, and more combined</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🤖 API-Ready</h4>
                        <p className="text-text">JSON API for seamless LLM and automation integration</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">⚙️ Fully Customizable</h4>
                        <p className="text-text">Custom themes, search engines, and result filtering</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🚀 Self-Hosted Control</h4>
                        <p className="text-text">Complete ownership and uptime management</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🔍 Advanced Filtering</h4>
                        <p className="text-text">Time ranges, file types, and category-specific searches</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Use Cases for AI Development</h3>
                <ul className="text-text text-lg list-disc list-inside space-y-2">
                    <li><strong>LLM Web Search Integration:</strong> Provide language models with private, traceless web access for research and fact-checking</li>
                    <li><strong>RAG Pipeline Data Sources:</strong> Retrieve fresh web content for retrieval-augmented generation systems</li>
                    <li><strong>Automated Research Agents:</strong> Enable AI agents to conduct web research without creating searchable patterns</li>
                    <li><strong>Development Documentation:</strong> Fast access to technical documentation and API references</li>
                    <li><strong>Competitive Intelligence:</strong> Research market and technology trends without revealing strategic interests</li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Technical Stack</h3>
                <p className="text-text text-lg">
                    Built with <strong>SearXNG</strong> (Python/Flask), containerized with <strong>Docker</strong>, and reverse-proxied 
                    through <strong>Nginx</strong> with SSL/TLS encryption. The instance runs on dedicated infrastructure with automated 
                    updates and monitoring to ensure consistent uptime and performance.
                </p>
                <p className="text-text text-lg">
                    Configuration includes custom search engine selections, result ranking optimizations, and API rate limiting to 
                    balance between comprehensive results and respectful upstream service usage.
                </p>
            </div>

            <Buttons />

        </div>
      </div>
    </main>
  );
}
