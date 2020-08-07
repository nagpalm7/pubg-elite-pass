import React from 'react';
import { Carousel, Layout, Menu, Card, Row, Col, Steps, Button, message } from 'antd';
import {img1, img2, img3 } from "../../assets/home";
import "./index.css";

import Shop from "../Shop";
import Cart from "../Cart";
import Checkout from "../Checkout";

const { Header, Footer, Content } = Layout;
const { Step } = Steps;

const total = [149, 99, 259];

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      hover1: true,
      hover2: true,
      hover3: true,
      total: 0,
    };
  }

  addToCart(id){
      console.log(id)
      var x = "hover" + (id);
      this.setState({
          [x]: !this.state[x],
          total: this.state[x] ? this.state.total + total[id-1] : this.state.total - total[id-1]
      })
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  handleClick(e) {
    console.log('click', e);
  }

  render() {
    const { current, hover1, hover2, hover3, total } = this.state;
    const steps = [
      {
        title: 'Shop',
        content: <Shop 
                    hover1={hover1}
                    hover2={hover2}
                    hover3={hover3}
                    total={total}
                    addToCart={(id) => {this.addToCart(id)}}/>,
      },
      {
        title: 'Invoice',
        content: <Cart
                  hover1={hover1}
                  hover2={hover2}
                  hover3={hover3}
                  total={total}
                />,
      },
      {
        title: 'Payment',
        content: <Checkout/>,
      },
    ];
  
    return(
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} onClick={this.handleClick.bind(this)}>
            <Menu.Item disabled className="logo" >PUBG ROYAL PASS</Menu.Item>
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="about">About Us</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 0px' }}>
          <Carousel autoplay>
            <div>
              <img src={img1} className="carousel-images" />
            </div>
            <div>
              <img src={img2} className="carousel-images" />
            </div>
            <div>
              <img src={img3} className="carousel-images" />
            </div>
          </Carousel>
          <div className="site-layout-content">
            <div className="form-royal-pass">
              <Steps current={current}>
                {steps.map(item => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
              <div className="steps-content">{steps[current].content}</div>
              <div className="steps-action">
                {current < steps.length - 1 && (
                  <Button type="primary" onClick={() => this.next()}>
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button type="primary" onClick={() => message.success('Processing complete! After Payment Verification Your Id Will Be Credited')}>
                    Pay Now
                  </Button>
                )}
                {current > 0 && (
                  <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                    Previous
                  </Button>
                )}
              </div>
            </div>

            <div className="site-card-wrapper">
              <Row gutter={[12,12]}>
                <Col md={6} className="gutter-row">
                    <Card
                      hoverable
                      style={{ width: "100%" }}
                    >
                      <img className="images" alt="example" src="https://sattricks24.com/wp-content/uploads/2020/07/1.png" />
                    </Card>
                </Col>
                <Col md={6} className="gutter-row">
                  <Card
                    hoverable
                    style={{ width: "100%" }}
                  >
                    <img className="images" alt="example" src="https://sattricks24.com/wp-content/uploads/2020/07/2.png" />
                  </Card>
                </Col>
                <Col md={6} className="gutter-row">
                  <Card
                    hoverable
                    style={{ width: "100%" }}
                  >
                    <img className="images" alt="example" src="https://sattricks24.com/wp-content/uploads/2020/07/4-1.png" />
                  </Card>
                </Col>
                <Col md={6} className="gutter-row">
                  <Card
                    hoverable
                    style={{ width: "100%" }}
                  >
                    <img className="images" alt="example" src="https://sattricks24.com/wp-content/uploads/2020/07/4.png" />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
        
        <Footer style={{ textAlign: 'center' }}>PUBG S14 Royal Elite Pass</Footer>
      </Layout>
    );
  }
}

export default Home;