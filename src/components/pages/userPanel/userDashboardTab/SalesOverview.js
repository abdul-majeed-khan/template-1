import React from "react";
import { overviewChartData } from "@/data/chartData";
import ReactApexChart from "react-apexcharts";

const SalesOverview = () => {
  return (
    <div className='col-xl-7 col-md-12'>
      <div className='common-card overview'>
        <div className='common-header'>
          <h5>Sales overview</h5>
        </div>
        <ul className='overview-content'>
          <li>
            <div className='d-flex'>
              <div>
                <p>Earned today</p>
                <h4>$31415</h4>
              </div>
              <span>
                <span className='label label-success'>+30%</span>
              </span>
            </div>
          </li>
          <li>
            <div className='d-flex'>
              <div>
                <p>Earned weekly</p>
                <h4>$78812</h4>
              </div>
              <span>
                <span className='label label-success'>+20%</span>
              </span>
            </div>
          </li>
          <li>
            <div className='d-flex'>
              <div>
                <p>Earned monthly</p>
                <h4>$67810</h4>
              </div>
              <span>
                <span className='label label-danger'>-10%</span>
              </span>
            </div>
          </li>
        </ul>
        <ReactApexChart options={overviewChartData?.options} series={overviewChartData?.series} id='overviewchart' type='area' height={280} />
        <div id='overviewchart'></div>
      </div>
    </div>
  );
};

export default SalesOverview;
