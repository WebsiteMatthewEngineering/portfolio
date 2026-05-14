import Button from "@/components/button";

function Buttons() {
    return (
        <div className="flex flex-col sm:flex-row justify-center mt-6 gap-5">
            <Button href="https://marketplace.visualstudio.com/items?itemName=AdamCo.markdown-projects" new_tab={true}>Install from Marketplace</Button>
            <Button href="https://github.com/MatthewEngineering/MarkdownProjects/tree/main" new_tab={true}>View on GitHub</Button>
        </div>
    );
}

export default function MarkdownProjectsPage() {
  return (
    <main className="bg-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 pt-20 pb-20 px-5">

        <div className="card flex flex-col gap-8 p-8">
            <div className="flex flex-row justify-between items-center mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-text">Markdown Projects</h2>
                <Button href="/" className="!w-fit !px-4">←</Button>
            </div>

            <Buttons />

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">About This Extension</h3>
                <p className="text-text text-lg text-justify">
                    Markdown Projects is a Visual Studio Code extension that turns ordinary markdown
                    files into an interactive Kanban / list-style project board. Instead of juggling a
                    separate project management tool, you can plan, prioritize, and track work directly
                    alongside the code and notes already in your repository.
                </p>
                <p className="text-text text-lg text-justify">
                    The extension reads the headings and task lists in a markdown file and renders them
                    as draggable columns and cards inside a VS Code webview. Edits flow back to the
                    underlying markdown, so the file stays human-readable and version-controlled — your
                    board is just a nicer view of plain text you already own.
                </p>
            </div>

            <img
                alt="Markdown Projects board preview"
                src="/projects/markdown-projects/thumbnail.png"
                className="rounded-lg object-contain w-full max-h-[500px] mx-auto"
            />

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Kanban From Markdown</h4>
                        <p className="text-text">Render any markdown file as a Kanban board with columns built from headings.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Plain-Text Source of Truth</h4>
                        <p className="text-text">The markdown file remains the source — no proprietary format, fully git-friendly.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Lives In Your Editor</h4>
                        <p className="text-text">Open the board from the editor title bar or explorer context menu on any .md file.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Lightweight</h4>
                        <p className="text-text">No accounts, no servers, no telemetry — just a VS Code extension and your files.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Technical Implementation</h3>
                <p className="text-text text-lg">
                    Built with <strong>TypeScript</strong> against the <strong>VS Code Extension API</strong>,
                    using a webview to render the board UI. The extension registers commands and editor
                    menu contributions so it can be launched directly on any markdown document.
                </p>
            </div>

            <Buttons />

        </div>
      </div>
    </main>
  );
}
