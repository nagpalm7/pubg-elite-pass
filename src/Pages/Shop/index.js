import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import "./index.css";

const { Meta } = Card;
class Shop extends React.Component {

    render() {
      return(
        <div className="site-card-wrapper shop">
            <Row>
                <h3>Total Price Rs. {this.props.total}/-</h3>
            </Row>
            <Row gutter={[12,12]}>
                <Col md={8} className="gutter-row">
                    <Card
                        className={this.props.hover1 ? "" : "selected" }
                        hoverable = {this.props.hover1}
                        disabled = {true}
                        onClick={()=>this.props.addToCart(1)}
                        style={{ width: 240 }}
                        actions={[
                            "Add To Cart",
                          ]}
                        cover={<img alt="example" src="https://sattricks24.com/wp-content/uploads/2020/07/1594005794347cW0WS8ET-1-236x300.png" />}
                    >
                        <Meta title="Elite Pass Plus Pack S14" description="Rs. 149.00/-" />
                    </Card>
                    <Button></Button>
                </Col>
                <Col md={8} className="gutter-row">
                    <Card
                        className={this.props.hover2 ? "" : "selected" }
                        hoverable = {this.props.hover2}
                        onClick={()=>this.props.addToCart(2)}
                        style={{ width: 240 }}
                        actions={[
                            "Add To Cart",
                          ]}
                        cover={<img alt="example" src="https://sattricks24.com/wp-content/uploads/2020/07/1594005735758DDSV52N6-236x300-1.png" />}
                    >
                        <Meta title="Royal Pass Pack (S14)" description="Rs. 99.00/-" />
                    </Card>
                </Col>
                <Col md={8} className="gutter-row">
                    <Card
                        className={this.props.hover3 ? "" : "selected" }
                        hoverable = {this.props.hover3}
                        onClick={()=>this.props.addToCart(3)}
                        actions={[
                            "Add To Cart",
                          ]}
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://midas.gtimg.cn/oversea_web/pubgm/shop_list.png" />}
                    >
                        <Meta title="Cash S14 (4300 UC)" description="Rs. 259.00/-" />
                    </Card>
                </Col>
            </Row>
        </div>
      );
    }
  }
  
  export default Shop;