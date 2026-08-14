import { Link } from 'react-router-dom';
import { Wallet, Plus, Minus } from "lucide-react";

function Navbar({ balance }) {
    return(
        <header className="bg-finance-bg backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="w-auto h-auto flex gap-2">
                    <Wallet className="text-emerald-500 " />
                    <h1 className="text-finance-text font-bold text-xl tracking-tight font-['Outfit']">Finance Control</h1>
                </div>

                <nav className="flex gap-10 items-center">
                    <Link to="/dashboard" className="text-finance-text tracking-tight font-['Outfit']">
                        Dashbooard
                    </Link>
                    <Link to="/" className="text-finance-text tracking-tight font-['Outfit']">
                        Transactions
                    </Link>
                    <Link to="/categories" className="text-finance-text tracking-tight font-['Outfit']">
                        Categories (Soon)
                    </Link>
                </nav>

                <div className="flex gap-3 items-center">
                    <span className="text-2xl font-['Outfit']">
                        {balance >= 0 ? (
                            <span className="flex gap-2 items-center text-finance-income "><Plus /> {balance} R$</span>
                        ) : (
                            <span className="flex gap-2 items-center text-finance-expense"><Minus /> {balance * -1} R$</span>
                        )}
                    </span>
                </div>

            </div>
        </header>
    );
}

export default Navbar;