//Dependencies
import React, { Component } from 'react';
import { Chart } from "react-google-charts";

//Data
import data  from './data.json';

//Components
import Paralax from '../paralax';

//Styled-Components
import { TableContainer } from './styled';


class TableComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: data,
            dataChart:[]
        }
        this.handleDataChart = this.handleDataChart.bind(this);
    }
    handleDataChart(){
        var dataChart =[['Task', 'Hours per Day']];
        data.Table.map((datamap)=>{
            return(
            dataChart.push([datamap.Column, datamap.Number1])
            )
        })
        this.setState({
            dataChart: dataChart
        })
    }
    componentDidMount() {
        this.handleDataChart();
    }
    render() {
        return (
            <div>
                <Paralax 
                    titleProps="Table"
                    imgUrl="https://cdnmundo1.img.sputniknews.com/images/108359/63/1083596310.jpg"
                />
                <h1>Table and Chart</h1>
                


                <div className="row my-4">
                    <div className="col-lg-3 col-md-4">
                        <div className="card">            
                            <img className="card-img-top img-fluid" src="//placehold.it/740x180/bbb/fff?text=..." alt="esta es una imagen" />
                            <div className="card-body">
                                <h4 className="card-title">Layouts</h4>
                                <p className="card-text">Flexbox provides simpler, more flexible layout options like vertical centering.</p>
                                <Chart
                                    width={'100%'}
                                    height={'auto'}
                                    chartType="PieChart"
                                    loader={<div>Loading Chart</div>}
                                    data={
                                       this.state.dataChart
                                    }
                                    options={{
                                        legend: 'none',
                                        pieSliceText: 'label',
                                        title: 'Title',
                                        pieStartAngle: 100,
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                />
                                <button href="#" className="btn btn-primary">Button</button>
                            </div>
                        </div>
                        <div className="card card-inverse bg-inverse mt-3">
                            <div className="card-body">
                                <h3 className="card-title">Flexbox</h3>
                                <p className="card-text">Flexbox is now the default, and Bootstrap 4 supports SASS out of the box.</p>
                                <button href="#" className="btn btn-outline-secondary">Outline</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8">
                        <div className="table-responsive">
                            <TableContainer>
                                <thead >
                                    <tr>
                                        <th>Id</th>
                                        <th>Label</th>
                                        <th>Header</th>
                                        <th>Column</th>
                                        <th>Data</th>
                                        <th>N1</th>
                                        <th>N2</th>
                                        <th>N3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.Table.map((tr,tri) => {
                                        return(
                                            <tr key={tri}>
                                                <td>{tr.id}</td>
                                                <td>{tr.Label}</td>
                                                <td>{tr.Header}</td>
                                                <td>{tr.Column}</td>
                                                <td>{tr.Data}</td>
                                                <td>{tr.Number1}</td>
                                                <td>{tr.Number2}</td>
                                                <td>{tr.Number3}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableComponent;