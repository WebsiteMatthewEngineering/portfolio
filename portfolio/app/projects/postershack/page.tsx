import Button from "@/components/button";

function Buttons() {
    return (
        <div className="flex flex-row justify-center mt-6 gap-5">
            <Button href="https://postershack-api.matthewengineering.com/" className="mx-" new_tab={true}>Visit Postershack</Button>
            {/* <Button href="https://github.com/matthewengineering/postershack" className="mx-" new_tab={true}>View on GitHub</Button> */}
        </div>
    )
}

export default function PostershackProject() {
  return (
    <main className="bg-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 pt-20 pb-20 px-5">

        <div className="card flex flex-col gap-8 p-8">
            <div className="flex flex-row justify-between items-center mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-text">Postershack</h2>
                <Button href="/" className="!w-fit !px-4">←</Button>
            </div>

            <Buttons />

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">About This Project</h3>
                <p className="text-text text-lg text-justify">
                    Postershack is an e-commerce platform for discovering and purchasing unique AI-generated art prints.
                    Every poster in the collection is created using generative AI models, resulting in one-of-a-kind pieces
                    that blend algorithmic creativity with aesthetic curation.
                </p>
                <p className="text-text text-lg text-justify">
                    I built Postershack to explore the intersection of AI art generation and e-commerce — from generating
                    and curating the image catalog, to handling orders and fulfillment. The platform lets customers browse
                    a growing gallery of prints, preview them in detail, and purchase high-resolution files or physical prints.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-2xl mx-auto w-full">
                <img
                    alt="Postershack storefront"
                    src="/projects/postershack/main.png"
                    className="rounded-lg object-cover w-full sm:w-2/3 shadow-lg"
                />
                <img
                    alt="Postershack logo"
                    src="/projects/postershack/postershack.webp"
                    className="rounded-lg object-contain w-full sm:w-1/3 shadow-lg"
                />
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Example Posters</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <img
                        alt="Example poster 1"
                        src="/projects/postershack/poster1.webp"
                        className="rounded-lg object-cover w-full aspect-[2/3] shadow"
                    />
                    <img
                        alt="Example poster 2"
                        src="/projects/postershack/poster2.webp"
                        className="rounded-lg object-cover w-full aspect-[2/3] shadow"
                    />
                    <img
                        alt="Example poster 3"
                        src="/projects/postershack/poster3.webp"
                        className="rounded-lg object-cover w-full aspect-[2/3] shadow"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🎨 AI-Generated Art</h4>
                        <p className="text-text">Every poster is uniquely created using generative AI models and curated for quality</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🛒 E-Commerce Checkout</h4>
                        <p className="text-text">Full shopping cart and secure checkout flow for purchasing prints</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🖼 High-Resolution Gallery</h4>
                        <p className="text-text">Browsable gallery with detail previews of every piece in the collection</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">📦 Print Fulfillment</h4>
                        <p className="text-text">Integrated fulfillment pipeline from order to delivered physical print</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">How It Works</h3>
                <ul className="text-text text-lg list-disc list-inside space-y-2">
                    <li><strong>Image Generation</strong> — Posters are produced using AI image models with curated prompts and styles</li>
                    <li><strong>Curation Pipeline</strong> — Generated images are reviewed and selected for the storefront catalog</li>
                    <li><strong>Product Listings</strong> — Each piece gets a title, description, and pricing before going live</li>
                    <li><strong>Checkout & Payment</strong> — Customers complete purchases through a secure payment flow</li>
                    <li><strong>Fulfillment</strong> — Orders are routed to print-on-demand or digital delivery automatically</li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Technical Stack</h3>
                <p className="text-text text-lg">
                    Built with <strong>Next.js</strong> for the storefront and <strong>Stripe</strong> for payment processing.
                    Product data and the image catalog are managed through a lightweight backend, with images stored and served
                    via cloud storage. AI images are generated offline using diffusion models and uploaded to the catalog as they
                    are curated and approved.
                </p>
            </div>

            <Buttons />

        </div>
      </div>
    </main>
  );
}
