import { ArrowUpCircle, ArrowDownCircle, Wallet } from "lucide-react";

function TopCards({incomeAmount, expenseAmount}) {

    const totalBalance = incomeAmount - expenseAmount;

    const formatCurrency = (value) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    };

    return(
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="flex flex-col justify-between p-6 rounded-2xl bg-finance-card border border-finance-border shadow-sm">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-finance-muted uppercase tracking-wider font-['Outfit']">
                        Income Amount
                    </span>
                    <ArrowUpCircle className="w-6 h-6 text-finance-income" />
                </div>
                <div className="mt-4">
                    <span className="text-2xl lg:text-3xl font-bold text-finance-text font-['Outfit']">
                        {formatCurrency(incomeAmount)}
                    </span>
                </div>
            </div>

            <div className="flex flex-col justify-between p-6 rounded-2xl bg-finance-card border border-finance-border shadow-sm">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-finance-muted uppercase tracking-wider font-['Outfit']">
                        Expenses Amount
                    </span>
                    <ArrowDownCircle className="w-6 h-6 text-finance-expense" />
                </div>
                <div className="mt-4">
                    <span className="text-2xl lg:text-3xl font-bold text-finance-text font-['Outfit']">
                        {formatCurrency(expenseAmount)}
                    </span>
                </div>
            </div>

            <div className="flex flex-col justify-between p-6 rounded-2xl bg-finance-card border border-finance-border shadow-sm">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-finance-muted uppercase tracking-wider font-['Outfit']">
                        Total Balance
                    </span>
                    <Wallet className="w-6 h-6 text-finance-text" />
                </div>
                <div className="mt-4">
                    <span className={`text-2xl lg:text-3xl font-bold font-['Outfit'] ${
                        totalBalance >= 0 ? "text-finance-income" : "text-finance-expense"
                    }`}>
                        {formatCurrency(totalBalance)}
                    </span>
                </div>
            </div>

        </div>
    );
}

export default TopCards;