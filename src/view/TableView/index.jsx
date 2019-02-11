//Dependencies
import React, { Component } from 'react';

//Data
import data  from './data.json';
//Styled-Components
import { TableContainer } from './styled';

class TableComponent extends Component {
    render() {
        console.log("datos json", data.Table[0]);
        return (
            <div>
                
                <div className="row my-4">
                    <div className="col-lg-3 col-md-4">
                        <div className="card">
                            <img className="card-img-top img-fluid" src="//placehold.it/740x180/bbb/fff?text=..." alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title">Layouts</h4>
                                <p className="card-text">Flexbox provides simpler, more flexible layout options like vertical centering.</p>
                                <a href="#" className="btn btn-primary">Button</a>
                            </div>
                        </div>
                        <div className="card card-inverse bg-inverse mt-3">
                            <div className="card-body">
                                <h3 className="card-title">Flexbox</h3>
                                <p className="card-text">Flexbox is now the default, and Bootstrap 4 supports SASS out of the box.</p>
                                <a href="#" className="btn btn-outline-secondary">Outline</a>
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
                                    {data.Table.map((tr) => {
                                        return(
                                            <tr>
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