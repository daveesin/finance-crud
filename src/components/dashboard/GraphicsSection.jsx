import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
} from "recharts";


function GraphicsSection({ incomeAmount, expenseAmount, expensesByCategory, formatCurrency }) {

    const CATEGORY_COLORS = [
        "#10B981", 
        "#F59E0B", 
        "#EF4444", 
        "#8B5CF6", 
        "#3B82F6", 
        "#EC4899", 
    ];

    const comparisonData = [
        {
            name: "Resumo",
            Income: incomeAmount,
            Expenses: expenseAmount,
        },
    ];

    return (
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col p-6 rounded-2xl bg-finance-card border border-finance-border shadow-sm">
                <h3 className="text-lg font-bold text-finance-text font-['Outfit'] mb-4">
                    Expenses by Category
                </h3>

                {expensesByCategory.length === 0 ? (
                    <div className="h-64 flex items-center justify-center text-finance-muted text-sm font-['Outfit']">
                        No expense data available.
                    </div>
                ) : (
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={expensesByCategory}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={85}
                                    paddingAngle={5}
                                    dataKey="value"
                                    
                                >
                                    {expensesByCategory.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={CATEGORY_COLORS[index % CATEGORY_COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value) => formatCurrency(value)}
                                    contentStyle={{
                                        backgroundColor: "#18181b",
                                        borderColor: "#27272a",
                                        borderRadius: "12px",
                                        color: "#fff",
                                    }}
                                />
                                <Legend 
                                    verticalAlign="bottom" 
                                    height={36} 
                                    formatter={(value) => <span className="text-finance-text text-xs font-['Outfit']">{value}</span>}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>

            <div className="flex flex-col p-6 rounded-2xl bg-finance-card border border-finance-border shadow-sm">
                <h3 className="text-lg font-bold text-finance-text font-['Outfit'] mb-4">
                    Income vs Expenses
                </h3>

                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={comparisonData} barGap={12}>
                            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                            <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
                            <YAxis stroke="#a1a1aa" fontSize={12} />
                            <Tooltip
                                formatter={(value) => formatCurrency(value)}
                                contentStyle={{
                                    backgroundColor: "#18181b",
                                    borderColor: "#27272a",
                                    borderRadius: "12px",
                                    color: "#fff",
                                }}
                            />
                            <Bar dataKey="Income" fill="#10B981" radius={[8, 8, 0, 0]} name="Income" />
                            <Bar dataKey="Expenses" fill="#EF4444" radius={[8, 8, 0, 0]} name="Expenses" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
}

export default GraphicsSection;