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

    return(
        <div className="flex flex-col items-center justify-center gap-3">
            <PageTitle 
                title={"Dashboard"}
                description={"Acompanhe em tempo real os dados do seu controle financeiro"}
            />

            <TopCards incomeAmount={incomeAmount} expenseAmount={expenseAmount} />
            <GraphicsSection />
        </div>
    );
}

export default Dashboard;