"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 90,
    absent: 75,
  },
  {
    name: "Thu",
    present: 90,
    absent: 75,
  },
  {
    name: "Fri",
    present: 65,
    absent: 55,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        {/* Thiết lập một biểu đồ thanh với kích thước tự động điều chỉnh theo kích thước của phần tử chứa */}
        <BarChart width={500} height={300} data={data} barSize={20}>
          {/* Thêm lưới ngang cho biểu đồ, với các đường kẻ nét đứt */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          {/* Thiết lập trục X với nhãn là 'name' từ dữ liệu và loại bỏ đường trục */}
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          {/* Thiết lập trục Y và loại bỏ đường trục */}
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          {/* Cấu hình tooltip để hiển thị thông tin chi tiết khi hover vào thanh */}
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          {/* Thiết lập chú giải cho biểu đồ, căn trái và nằm ở trên */}
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          {/* Biểu đồ thanh đầu tiên với dữ liệu là 'present', màu vàng nhạt */}
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          {/* Biểu đồ thanh thứ hai với dữ liệu là 'absent', màu xanh nhạt */}
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
