import {  Drawer, Space,Avatar, List  } from "antd";
const ReviewSection = ({ open, setOpen }) => {
  const onClose = () => {
    setOpen(false);
  };



  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  return (
    <>
      <Drawer

        title="Product Reviews"
        placement={"right"}
        width={"100vw"}
        size={"large"}
        onClose={onClose}
        open={open}
        extra={
          <Space>
           
          </Space>
        }
      >
        <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
      </Drawer>
    </>
  );
};
export default ReviewSection;
