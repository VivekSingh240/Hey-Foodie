import Head from 'next/head'
import Image from 'next/image'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout,Menu,Row,Col,Carousel } from 'antd';
import styles from '../styles/Home.module.css'
import { Card, Avatar } from 'antd';
import { useQuery } from 'graphql-hooks'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
import Img1 from '../public/Images/img-1.webp'
import Img2 from '../public/Images/img-2.jpg'
import Img3 from '../public/Images/img-3.jpg'
import Img4 from '../public/Images/img-4.jpg'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Meta } = Card;
const contentStyle = {
  width:"100%",
  height:"auto",
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
// const HOMEPAGE_QUERY = `query HomePage($limit: Int) {
//   Products(limit: $limit) {
//     id
//     category
//     name
//     image
//     price
//   }
// }`
export default function Home() {
  // const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
  //   variables: {
  //     limit: 10
  //   }
  // })
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <Header >
      <Menu mode="horizontal" theme='dark' className={styles.header}>
       <Menu.Item key="mail">
          <a href="">Log in</a>
        </Menu.Item>
        <Menu.Item key="mail">
          <a href="">Sign up</a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="">Contact Us</a>
        </Menu.Item>
      </Menu>
      </Header>
      <Content>

      <Carousel autoplay>
    <div style={contentStyle}>
      <Image  preview={{ visible: false }} height={560}  src={Img1} />
    </div>
    <div style={contentStyle}>
    <Image preview={{ visible: false }} height={540}   src={Img2} />
    </div>
    <div style={contentStyle}>
    <Image preview={{ visible: false }} height={540}  src={Img3} />
    </div>
    <div style={contentStyle}>
    <Image  preview={{ visible: false }} height={540} src={Img2} />
    </div>
  </Carousel>

       <Row className={styles.text}>
         <Col span={24}> Our Partners </Col>
       </Row>
      <Row justify='space-around'>
        <Col span={5}>
        <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://img.freepik.com/free-photo/delicious-grilled-burgers_62847-14.jpg?w=2000"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Rolls Mania"
      description="Rolls, fast Food Beverage..."
    />
  </Card>
        </Col>
        <Col span={5}>
        <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-RvwrjfUawFq6UP6Laz3qmJHTmlkgL8GFg&usqp=CAU"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Domino's Pizza"
      description="Pizza, Fast Food, Dessert.."
    />
  </Card>
        </Col>
        <Col span={5}>
        <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://media-cdn.tripadvisor.com/media/photo-s/14/b9/ac/4a/best-for-morning-mac.jpg"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="The Dhaba Junction"
      description="Mughlai, North Indian..."
    />
  </Card>
        </Col>
        <Col span={5}>
        <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="http://www.afrolems.com/wp-content/uploads/2018/06/breakfast-pancake-ideas.jpg"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Xero Degrees"
      description="Cafe, Burger, Sandwitch,Pizza..."
    />
  </Card>
        </Col>
      </Row>
<Row justify='space-around' style={{marginTop:"50px"}}>
  <Col span={5}>
    <Card style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="data:image/jpeg;base64,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"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="McDonald's"
      description="Burger, Fast Food, Coke..."
    />
  </Card>
        </Col>
        <Col span={5}>
        <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://image.shutterstock.com/z/stock-photo-young-woman-is-eating-a-healthy-fresh-vegetable-salad-with-crisp-rye-bread-diet-and-healthy-1265749039.jpg"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Flavours Of Punjab"
      description="North Indian, Chinese, Desserts..."
    />
  </Card>
        </Col>
        <Col span={5}>
        <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbo34Gd1MGdc_pLE1RxDrLHOgjDtdqruFDATljbAcnUZEFjQ6eWqmMK_egBvT3aOdPqU&usqp=CAU"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Biryani Blues"
      description="Kebab, Hyderbadi Biryani..."
    />
  </Card>
        </Col>
        <Col span={5}>
        <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="The Burger Club"
      description="Burger, fast Food Dessert..."
    />
  </Card>
        </Col>
      </Row>
      <Row>
        <Col>

        </Col>
      </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  )
}
