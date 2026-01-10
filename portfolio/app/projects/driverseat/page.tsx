import Image from "next/image";
import Button from "@/components/button";

function Buttons() {
    return (
        <div className="flex flex-row justify-center mt-6 gap-5">
            <Button href="https://github.com/matthewengineering/driverseat" className="mx-" new_tab={true}>View on GitHub</Button>
            <Button href="https://driverseat.matthewengineering.com" className="mx-" new_tab={true}>Visit Live Demo</Button>
        </div>
    )
}

export default function DriverseatProject() {
  return (
    <main className="bg-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 pt-20 pb-20 px-5">
        
        <div className="card flex flex-col gap-8 p-8">
            <div className="flex flex-row justify-between items-center mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-text">Driverseat</h2>
                <Button href="/" className="!w-fit !px-4">←</Button>
            </div>

            <Buttons />

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">About This Project</h3>
                <p className="text-text text-lg text-justify">
                    Driverseat is a comprehensive budgeting and investing tool designed to help users take control 
                    of their financial future. The platform provides intuitive interfaces for tracking expenses, 
                    managing budgets, and monitoring investment portfolios, all in one centralized location.
                </p>
                <p className="text-text text-lg text-justify">
                    I developed Driverseat to address the need for a unified financial management solution that 
                    combines everyday budgeting with long-term investment tracking. The application empowers users 
                    to make informed financial decisions by providing clear visualizations and actionable insights 
                    into their spending patterns and investment performance.
                </p>
            </div>

            <div className="max-w-xl mx-auto grid grid-cols-2 gap-4">
                <img alt="Driverseat dashboard" src="/projects/driverseat/main.png" className="rounded-lg object-cover w-full h-full col-span-2" />
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">💰 Budget Management</h4>
                        <p className="text-text">Create and track budgets across multiple categories with real-time updates</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">📊 Investment Tracking</h4>
                        <p className="text-text">Monitor your investment portfolio performance and analyze returns</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">📈 Financial Insights</h4>
                        <p className="text-text">Visualize spending patterns and identify opportunities for savings</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">🔒 Secure Data</h4>
                        <p className="text-text">Your financial data is encrypted and securely stored</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Core Capabilities</h3>
                <ul className="text-text text-lg list-disc list-inside space-y-2">
                    <li><strong>Expense Tracking</strong> - Log and categorize daily expenses effortlessly</li>
                    <li><strong>Budget Planning</strong> - Set spending limits and receive alerts when approaching thresholds</li>
                    <li><strong>Investment Portfolio</strong> - Track stocks, bonds, and other investment vehicles</li>
                    <li><strong>Financial Reports</strong> - Generate comprehensive reports for tax and planning purposes</li>
                    <li><strong>Goal Setting</strong> - Define and monitor progress toward financial objectives</li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-text">Technical Implementation</h3>
                <p className="text-text text-lg">
                    Built with a modern web stack featuring secure authentication, real-time data synchronization, 
                    and responsive design. The application leverages database systems for reliable data storage and 
                    implements industry-standard encryption for financial information protection. The frontend provides 
                    an intuitive user experience with interactive charts and dashboards powered by modern visualization libraries.
                </p>
            </div>

            <Buttons />

        </div>
      </div>
    </main>
  );
}
