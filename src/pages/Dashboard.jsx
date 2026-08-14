import { useOutletContext } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import TopCards from "../components/dashboard/TopCards";
import GraphicsSection from "../components/dashboard/GraphicsSection";

function Dashboard() {

    const { transactions } = useOutletContext();

    const incomeAmount = transactions
        .filter((t) => t.type === 'income')
        .reduce((acc, t) => acc + Number(t.amount || 0), 0);

    const expenseAmount = transactions
        .filter((t) => t.type === 'expense')
        .reduce((acc, t) => acc + Number(t.amount || 0), 0);

    const expensesByCategory = transactions
        .filter((t) => t.type === "expense")
        .reduce((acc, t) => {
            const category = t.category || "Outros";
            const amount = Number(t.amount || 0);
            const existing = acc.find((item) => item.name === category);

            if (existing) {
                existing.value += amount;
            } else {
                acc.push({ name: category, value: amount });
            }
            return acc;
        }, []);

    
    function formatCurrency(value) {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    };
    

    return(
        <div className="flex flex-col items-center justify-center gap-3">
            <PageTitle 
                title={"Dashboard"}
                description={"Acompanhe em tempo real os dados do seu controle financeiro"}
            />

            <TopCards
                incomeAmount={incomeAmount}
                expenseAmount={expenseAmount}
                formatCurrency={formatCurrency}
            />
            <GraphicsSection 
                incomeAmount={incomeAmount}
                expenseAmount={expenseAmount}
                expensesByCategory={expensesByCategory}
                formatCurrency={formatCurrency}
            />
        </div>
    );
}

export default Dashboard;