
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function EnrollmentChart() {

  const data = [
    { month: "Jan", enrollments: 10 },
    { month: "Feb", enrollments: 15 },
    { month: "Mar", enrollments: 25 },
    { month: "Apr", enrollments: 18 },
    { month: "May", enrollments: 30 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold mb-4">
        Monthly Enrollments
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="enrollments"
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default EnrollmentChart;