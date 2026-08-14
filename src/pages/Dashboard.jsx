import PageTitle from "../components/common/PageTitle";
import TopCards from "../components/dashboard/TopCards";

function Dashboard() {
    return(
        <div>
            <PageTitle 
                title={"Dashboard"}
                description={"Acompanhe em tempo real os dados do seu controle financeiro"}
            />

            <TopCards />
        </div>
    );
}

export default Dashboard;