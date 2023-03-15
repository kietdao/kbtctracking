import React, { Fragment } from 'react'
import { Row, Col, Image, Button, InputNumber, Tabs} from 'antd'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { v4 as uuidv4 } from 'uuid';
import TopContent from './components/TopContent'

export default function MainPage() {
  const dataOpen = {
    'current':
    [{
      action: 'buy',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM',
      status: 'increase'
    },
    {
      action: 'buy',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM',
      status: 'increase'
    },
    {
      action: 'buy',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM',
      status: 'increase'
    },
    {
      action: 'buy',
      oder: 400,
      profit: 400,
      time: '9:20:35 AM',
      status:'decrease'
    },
    {
      action: 'sell',
      oder: 400,
      profit: 400,
      time: '9:20:35 AM',
      status:'decrease'
    },
    {
      action: 'sell',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM',
      status: 'increase'
    },
    {
      action: 'sell',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM',
      status: 'increase'
    },
    {
      action: 'sell',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM'
    },
    {
      action: 'sell',
      oder: 400,
      profit: 400,
      time: '9:20:35 AM',
      status:'decrease'
    }
    ]
  }
  const dataClose = {
    'current':
    [
      {
      action: 'buy',
      oder: 400,
      profit: 400,
      time: '9:20:35 AM',
      status:'decrease'
    },
    {
      action: 'sell',
      oder: 400,
      profit: 400,
      time: '9:20:35 AM',
      status:'decrease'
    },
    {
      action: 'sell',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM',
      status: 'increase'
    },
    {
      action: 'sell',
      oder: 400,
      profit: 400,
      time: '9:20:35 AM',
      status:'decrease'
    },
    {
      action: 'buy',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM',
      status: 'increase'
    },
    {
      action: 'sell',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM',
      status: 'increase'
    },
    {
      action: 'sell',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM'
    },
    {
      action: 'buy',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM',
      status: 'increase'
    },
    {
      action: 'buy',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM',
      status: 'increase'
    },
    {
      action: 'buy',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM',
      status: 'increase'
    },
    {
      action: 'sell',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM',
      status: 'increase'
    },
    {
      action: 'sell',
      oder: 400,
      profit: 400,
      time: '9:20:35 AM',
      status:'decrease'
    },
    {
      action: 'sell',
      oder: 400,
      profit: 780,
      time: '9:20:35 AM',
      status: 'increase'
    },
    ]
  }
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
  );
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Main chart',
      },
    },
  };
  const optionsMini = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Mini chart',
      },
    },
  };
  const labels = ['13:00', '13:05', '13:10', '13:15', '13:20'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataOpen.current.map(item => item.profit),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: dataClose.current.map(item => item.profit),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const dataMini = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataOpen.current.map(item => item.profit),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  const tabs = [
    {
      key:'open',
      label:'Open',
      children: (
        <div className='history_list'>
          <div className='history_title'>
              <span>your oder</span>
              <span>profit</span>
          </div>
          {dataOpen?.current.map(item => (
            <div className='item' key={uuidv4()}>
              <div className='action'>
                <span className={`action_symbol ${item.action === 'buy' ? 'buy' : 'sell'}`}></span>
                <div className={`action_detail ${item.action === 'buy' ? 'buy' : 'sell'}`}>
                  <span className='action_name'>{item.action}</span>
                  <span className='action_oder'>${item.oder}</span>
                </div>
              </div>
              <div className='profit_time'>
                <span className={`profit ${item.status === 'increase' ? `increase` : `descrease`}`}>{item.status === 'increase' ? `+ $${item.profit}` : `- $${item.profit}`}</span>
                <span className='time'>{item.time}</span>
              </div>  
            </div>
          ))}
        </div>
      )
    },
    {
      key:'close',
      label:'Close',
      children: (
        <div className='history_list'>
          <div className='history_title'>
            <span>your oder</span>
            <span>profit</span>
          </div>
          {dataClose?.current.map(item => (
            <div className='item' key={uuidv4()}>
              <div className='action'>
                <span className={`action_symbol ${item.action === 'buy' ? 'buy' : 'sell'}`}></span>
                <div className={`action_detail ${item.action === 'buy' ? 'buy' : 'sell'}`}>
                  <span className='action_name'>{item.action}</span>
                  <span className='action_oder'>${item.oder}</span>
                </div>
              </div>
              <div className='profit_time'>
                <span className={`profit ${item.status === 'increase' ? `increase` : `descrease`}`}>{item.status === 'increase' ? `+ $${item.profit}` : `- $${item.profit}`}</span>
                <span className='time'>{item.time}</span>
              </div>  
            </div>
          ))}
        </div>
      )
    }
  ]
  const onChange = (value) => {
    console.log(value)
  }
  return (
    <div className='main'>
      <TopContent />
      <div className='container'>
        <Row gutter={[24, 20]}>
          <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
              <div className='exchange_rate'>
                <div className='exchange_container'>
                  <span className='subtitle'>Bitcoin/ US Dollar</span>
                  <h4 className='main_title'>BTC/ USD</h4>
                  <div className='mini_chart'>
                    <Line options={optionsMini} data={dataMini} />;
                  </div>
                  <div className='exchange_info'>
                    <div className='exchange_item'>
                      <h6 className="title">Daily change <span className='exchange_rate increase'>0.32%</span></h6>
                      <p className='content'>20.2476 <span className='unit'>USD</span></p>
                    </div>
                    <div className='exchange_item'>
                      <h6 className="title">24h volume</h6>
                      <p className='content'>381.404863.1842 <span className='unit'>BTC</span></p>
                    </div>
                    <div className='exchange_item'>
                      <h6 className="title">Day's range</h6>
                      <p className='content'>2678.1842 - 2678.1900 <span className='unit'>BTC</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mybalance'>
                <div className='mybalance_container'>
                  <h5 className='title'>my balance</h5>
                  <hr />
                  <div className='content'>
                    <div className='content_item'>
                      <div className='left'>
                        <span className='coin_symbol'></span>
                        <div className='balance_number'>
                          <span className='number'>2000 BTC</span>
                          <span className='amount'>$12345.6789</span>
                        </div>
                      </div>
                      <div className='right'>
                        <Button>
                          <Image src='./add_file.png' width={12} preview={false} alt='add file'/>
                          <span>Deposits</span>
                        </Button>
                      </div>
                    </div>
                    <hr />
                    <div className='content_item'>
                      <div className='left'>
                        <span>Available funds:</span>
                      </div>
                      <div className='right'>
                        <span className='funds_number'>2,000 BTC</span>
                      </div>
                    </div>
                    <div className='content_item'>
                      <div className='left'>
                        <span>Earnings available now:</span>
                      </div>
                      <div className='right'>
                        <span>457,930 BTC</span>
                      </div>
                    </div>
                    <hr />
                    <div className='content_item total'>
                      <div className='left'>
                        <span>30-day Volume:</span>
                      </div>
                      <div className='right'>
                        <span>200 BTC</span>
                      </div>
                    </div>
                    <div className='content_item'>
                      <span className='note'>Refreshes every 24 hrs</span>
                    </div>
                  </div>
                </div>
              </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <div className='chart'>
                <Line options={options} data={data} />;
              </div>
              <div className='calculator_tool'>
                <div className='calculator_container'>
                  <h5 className='title'>bet</h5>
                  <hr />
                  <div className='content'>
                    <Row gutter={[0, 60]}>
                      <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                        <div className='content_item amount'>
                          <h6 className='title'>amount</h6>
                          <div className='calculator'>
                            <div className='calculator_input'>
                              <InputNumber addonAfter={'USD'}/>
                            </div>
                            <div className='calculator_keys'>
                                <div className='keys_row'>
                                  <button><span>+</span> 5</button>
                                  <button><span>+</span> 10</button>
                                  <button><span>+</span> 15</button>
                                  <button><span>+</span> 20</button>
                                  <button><span>+</span> 30</button>
                                </div>
                                <div className='keys_row'>
                                  <button><span>+</span> 100</button>
                                  <button><span>+</span> 200</button>
                                  <button><span>+</span> 500</button>
                                  <button>all</button>
                                </div>
                                <div className='keys_row'>
                                  <button className='sell_button'>&#8595; Sell</button>
                                  <button className='buy_button'>&#8593; Buy</button>
                                </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                        <div className='content_item emotion_forecast'>
                          <h6 className='title'>emotion forecast</h6>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
              <div className='oder'>
                <div className='oder_container'>
                  <h5 className='title'>oder</h5>
                  <hr />
                  <div className='open_close'>
                    <Tabs defaultActiveKey='open' items={tabs} onChange={onChange}/>
                  </div>
                </div>
              </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
