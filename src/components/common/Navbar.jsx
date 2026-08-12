import { Wallet } from "lucide-react";

function Navbar() {
    return(
        <header className="bg-finance-bg backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="w-auto h-auto flex gap-2">
                    <Wallet className="text-emerald-500 " />
                    <h1 className="text-finance-text font-bold text-xl tracking-tight font-['Outfit']">Finance Control</h1>
                </div>
                <nav>
                    
                </nav>
            </div>
        </header>
    );
}

export default Navbar;