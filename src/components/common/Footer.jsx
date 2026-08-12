import { HardDrive } from "lucide-react"

function Footer() {
    return(
        <footer className="border-t border-finance-border py-6 bg-finance-bg">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
                <div className="flex flex-col gap-2 font-semibold text-finance-text font-['Outfit']">
                    <span>FinanceControl</span>
                    <span>&copy; {new Date().getFullYear()} — Personal Finance Dashboard.</span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-finance-card border border-finance-border text-[11px]">
                    <HardDrive className="w-3.5 h-3.5 text-finance-income" />
                    <span className="text-finance-text">Storage: <strong>Local Browser (Offline)</strong></span>
                </div>

                
            </div>
        </footer>
    );
}

export default Footer;