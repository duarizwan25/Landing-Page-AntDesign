import React, { useState } from "react";
import { Layout, Menu, Table, Input, Select, Avatar } from "antd";
import "antd/dist/reset.css";
import { SearchOutlined } from "@ant-design/icons";

const { Sider, Content } = Layout;
const { Option } = Select;

const LeadsPage = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const data = [
    { key: "1", name: "Jorge Ruiz", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Mexico" },
    { key: "2", name: "Bahar Zamir", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Mexico" },
    { key: "3", name: "Mary Lopez", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Brazil" },
    { key: "4", name: "Li Zijin", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "South Korea" },
    { key: "5", name: "Mark Antonov", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Russia" },
    { key: "6", name: "Jane Ma", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Mexico" },
    { key: "7", name: "Anand Jain", submitted: "02/02/2024, 2:45 PM", status: "Reached Out", country: "Mexico" },
    { key: "8", name: "Anna Voronova", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "France" }
  ];

  const filteredData = data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter ? item.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  const start = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(start, start + pageSize);

  const paginationRow = {
    key: "pagination",
    name: "",
    submitted: "",
    status: "",
    country: (
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "5px" }}>
        <span
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          style={{
            width: "28px",
            height: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#999",
            borderRadius: "4px",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#000";
            e.target.style.border = "1px solid #000";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#999";
            e.target.style.border = "none";
          }}
        >
          ‹
        </span>

        {[1, 2, 3].map((page) => (
          <span
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: page === currentPage ? "1px solid #000" : "1px solid transparent",
              color: page === currentPage ? "#000" : "#999",
              cursor: "pointer",
              borderRadius: "4px",
            }}
            onMouseEnter={(e) => {
              e.target.style.border = "1px solid #000";
              e.target.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.target.style.border = page === currentPage ? "1px solid #000" : "1px solid transparent";
              e.target.style.color = page === currentPage ? "#000" : "#999";
            }}
          >
            {page}
          </span>
        ))}

        <span
          onClick={() => setCurrentPage((p) => Math.min(p + 1, 3))}
          style={{
            width: "28px",
            height: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#999",
            borderRadius: "4px",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#000";
            e.target.style.border = "1px solid #000";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#999";
            e.target.style.border = "none";
          }}
        >
          ›
        </span>
      </div>
    ),
  };

  const tableData = [...paginatedData, paginationRow];

  const columns = [
  {
    title: (
      <span style={{ color: "#999", fontWeight: "normal" }}>
        Name <span style={{ fontSize: "16px", fontWeight: "bold" }}>↓</span>
      </span>
    ),
    dataIndex: "name"
  },
  {
    title: (
      <span style={{ color: "#999", fontWeight: "normal" }}>
        Submitted <span style={{ fontSize: "16px", fontWeight: "bold" }}>↓</span>
      </span>
    ),
    dataIndex: "submitted"
  },
  {
    title: (
      <span style={{ color: "#999", fontWeight: "normal" }}>
        Status <span style={{ fontSize: "16px", fontWeight: "bold" }}>↓</span>
      </span>
    ),
    dataIndex: "status"
  },
  {
    title: (
      <span style={{ color: "#999", fontWeight: "normal" }}>
        Country <span style={{ fontSize: "16px", fontWeight: "bold" }}>↓</span>
      </span>
    ),
    dataIndex: "country"
  }
];

  return (
    <Layout style={{ height: "100vh", background: "transparent" }}>
  {/* Sidebar */}
  <Sider
    width={200}
    style={{
      background: "transparent",
      borderRight: "1px solid #f0f0f0",
      position: "relative",
      overflow: "hidden",
      height: "100vh",
    }}
  >
    {/* Yellow semi-circle inside sidebar */}
    <div
      style={{
        position: "absolute",
        top: "-150px",
        left: "-150px",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(255,255,150,0.4) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 0
      }}
    />

    <div style={{ padding: "20px", fontWeight: "bold", fontSize: "20px", position: "relative", zIndex: 1 }}>
      almà
    </div>
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      style={{ borderRight: 0, background: "transparent", position: "relative", zIndex: 1 }}
    >
      <Menu.Item key="1" style={{ fontWeight: "bold" }}>
        Leads
      </Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
    </Menu>

    {/* Admin fixed to bottom */}
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        zIndex: 1
      }}
    >
      <Avatar style={{ backgroundColor: "#e5e5e5", color: "#000", fontWeight: "bold" }}>A</Avatar>
      <span style={{ fontWeight: "bold" }}>Admin</span>
    </div>
  </Sider>

      {/* Content */}
      <Layout style={{ padding: "20px", background: "#fff", borderRadius: "12px" }}>
        <Content>
          <h2 style={{ marginBottom: "20px" }}>Leads</h2>
          <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <Input
               placeholder="Search"
               prefix={<SearchOutlined style={{ color: "#999" }} />}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ width: 200 }}
            />
            <Select
              placeholder="Status"
              value={statusFilter}
              onChange={(value) => setStatusFilter(value)}
              style={{ width: 200 }}
              allowClear
            >
              <Option value="Pending">Pending</Option>
              <Option value="Reached Out">Reached Out</Option>
            </Select>
          </div>

          <Table
            columns={columns}
            dataSource={tableData}
            pagination={false}
            bordered
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "12px",
              overflow: "hidden",
            }}
            components={{
                header: {
                 cell: (props) => (
                 <th {...props} style={{ backgroundColor: "#fff", ...props.style }} />
                 ),
                },
              }}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LeadsPage;

