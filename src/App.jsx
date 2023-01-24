import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Layout,
  Menu,
  theme,
  Space,
  Modal,
  Form,
  Input,
} from "antd";
import { useState } from "react";
import CustTable from "./components/CustTable";
import useCreateIngridient from "./hooks/useCreateIngridient";
import useDeleteIngridient from "./hooks/useDeleteIngridient";
import useFetchAllIngridient from "./hooks/useFetchAllIngridient";
import useUpdateIngridient from "./hooks/useUpdateIngridient";
import IngridientService from "./services/ingridient.service";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [meta, setMeta] = useState({
    current: 1,
    pageSize: 5,
  });

  const [isUpdate, setIsUpdate] = useState(false);

  const { data, isFetching, refetch } = useFetchAllIngridient(meta);

  const { mutate } = useCreateIngridient();

  const { mutate: updateMutate } = useUpdateIngridient();

  const { mutate: deleteMutate } = useDeleteIngridient();

  const [form] = Form.useForm();

  const fetchDetailData = async (id) => {
    const res = await IngridientService.GetDetailIngridient(id);
    console.log(res);
    form.setFieldsValue({
      ...res,
    });
  };

  const tableColumn = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category Id",
      dataIndex: "category_id",
      key: "category_id",
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "Action",
      key: "action",
      render: (_, { id }) => (
        <Space size="middle">
          <a
            style={{
              color: "red",
            }}
            onClick={() =>
              deleteMutate(id, {
                onSuccess: () => {
                  refetch();
                },
              })
            }
          >
            Delete
          </a>
          <a
            onClick={() => {
              fetchDetailData(id);
              setIsUpdate(true);
              setIsModalOpen(true);
            }}
          >
            Update
          </a>
        </Space>
      ),
    },
  ];

  const [collapsed, setCollapsed] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem("Ingridient List", "1", <PieChartOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
      getItem("Team 1", "6"),
      getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <FileOutlined />),
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    if (isUpdate) {
      updateMutate(
        { ...values },
        {
          onSuccess: () => {
            refetch();
            form.resetFields();
            setIsModalOpen(false);
          },
          onError: () => {},
        }
      );
    } else {
      mutate(
        { ...values },
        {
          onSuccess: () => {
            refetch();
            form.resetFields();
            setIsModalOpen(false);
          },
          onError: () => {},
        }
      );
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (pagination) => {
    setMeta({
      ...pagination,
    });
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Button
              onClick={() => {
                setIsModalOpen(!isModalOpen);
                setIsUpdate(false);
                form.resetFields();
              }}
              style={{
                backgroundColor: "blue",
                color: "white",
              }}
            >
              Tambah Data
            </Button>
            <CustTable
              onChange={handleChange}
              columns={tableColumn}
              data={data}
              loading={isFetching}
            />
            <Modal
              open={isModalOpen}
              title={isUpdate ? "Update Ingridient" : "Add Ingridient"}
              okButtonProps={{
                hidden: true,
              }}
              cancelButtonProps={{
                hidden: true,
              }}
              onCancel={handleCancel}
            >
              <Form
                name="add-ingridient"
                layout="vertical"
                initialValues={{
                  remember: true,
                }}
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Category Id"
                  name="category_id"
                  rules={[
                    {
                      required: true,
                      message: "Please input your category id!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Price"
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: "Please input price!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Weight"
                  name="weight"
                  rules={[
                    {
                      required: true,
                      message: "Please input weight!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Quantity"
                  name="qty"
                  rules={[
                    {
                      required: true,
                      message: "Please input qty!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item hidden={true} label="Quantity" name="id">
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Space>
                    <Button htmlType="submit">
                      {isUpdate ? "Update Ingridient" : "Add Ingridient"}
                    </Button>
                    <Button onClick={handleCancel} htmlType="button">
                      Cancel
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
