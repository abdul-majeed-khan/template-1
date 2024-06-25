import React, { Fragment } from "react";
import { Col } from "reactstrap";
import { smallChartData1 } from "@/data/chartData";
import ReactApexChart from "react-apexcharts";

const SmallBarCard = () => {
  return (
    <Fragment>
      <Col md='4'>
        <div className='common-card'>
          <div className='widgets'>
            <div className='media'>
              <div className='media-body'>
                <p>total agents</p>
                <h5>2145</h5>
              </div>
              <div className='small-bar'>
                <ReactApexChart options={{ ...smallChartData1.options, colors: [`var(--theme-default)`] }} series={smallChartData1.series} type='bar' className='small-chart' />
              </div>
            </div>
          </div>
        </div>
      </Col>
      <div className='col-md-4'>
        <div className='common-card'>
          <div className='widgets widget-1'>
            <div className='media'>
              <div className='media-body'>
                <p>total sales</p>
                <h5>$54871.12</h5>
              </div>
              <div className='small-bar'>
                <ReactApexChart options={{ ...smallChartData1.options, colors: [`var(--theme-default2)`] }} series={smallChartData1.series} type='bar' className='small-chart' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='common-card'>
          <div className='widgets widget-2'>
            <div className='media'>
              <div className='media-body'>
                <p>total properties</p>
                <h5>25</h5>
              </div>
              <div className='small-bar'>
                <ReactApexChart options={{ ...smallChartData1.options, colors: [`var(--theme-default)`] }} series={smallChartData1.series} type='bar' className='small-chart' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SmallBarCard;
