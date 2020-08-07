import React from 'react';
import { Row, Col, Divider} from 'antd';
import "./index.css";

const total = [149, 99, 259];

class cart extends React.Component {

    render() {
      return(
        <div className="cart">
          {
            !this.props.hover1 ?
            <div>
              <Row gutter={[16,16]}>
                <Col xs={16}>
                  <h3>1x Elite Pass Plus Pack Season 14</h3>
                </Col>
                <Col xs={8}>
                  <h3>Rs. {total[0]}/-</h3>
                </Col>
              </Row>  
              <Divider/>
            </div> : ""
          } 
          {
            !this.props.hover2 ?
            <div>
              <Row gutter={[16,16]}>
                <Col xs={16}>
                  <h3>1x Royal Pass Pack Season 14</h3>
                </Col>
                <Col xs={8}>
                  <h3>Rs. {total[1]}/-</h3>
                </Col>
              </Row>  
              <Divider/>
            </div> : ""
          } 
          {
            !this.props.hover3 ?
            <div>
              <Row gutter={[16,16]}>
                <Col xs={16}>
                  <h3>1x Cash Season 14 (4300 UC)</h3>
                </Col>
                <Col xs={8}>
                  <h3>Rs. {total[2]}/-</h3>
                </Col>
              </Row>  
              <Divider/>
            </div> : ""
          } 
          <Row gutter={[0,16]}>

              <Col xs ={8} push={16}>
                <h2>Total Rs. {this.props.total}/-</h2>
              </Col>
          </Row>
        </div>
      );
    }
  }
  
  export default cart;