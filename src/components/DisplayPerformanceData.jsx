import React, { Component } from 'react';
import { getData } from "../modules/performanceData";
import {Line} from 'react-chartjs-2'

class DisplayPerformanceData extends Component {
    state = { 
        performanceData: null 
    };

    componentDidMount() {
        this.getPerformanceData()
    }

    componentDidUpdate(prevProps) {
        if (this.props.updateIndex !== prevProps.updateIndex){
            this.getPerformanceData()
        }
    }

    async getPerformanceData() {
        let result = await getData();
        this.setState({performanceData: result.data.entries}, () => {
            this.props.indexUpdated();
        })
    }

    render () {
        let dataIndex;
        if(this.state.performanceData != null){
            dataIndex = (
                <>
                    {this.state.performanceData.map(run => {
                        return <div class="item"><div class="content" key={run.id}>{run.data.message} {run.data.distance}</div></div>
                    })}
                </>
            )
        }

        const distances = []
        const labels = []

        if(this.state.performanceData != null){
        this.state.performanceData.forEach(entry => {
          distances.push(entry.data.distance)  
          labels.push(entry.data.message)  
          } )
        }        

        let dataForDiagram = {
            datasets: [{
                data: distances,
                fill: true,
                borderColor: "#00008B",
                backgroundColor: "#B0E0E6"

                }],
                 labels: labels

        }

        var ctx = document.getElementById('myChart')
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#80b6f4");
        gradientStroke.addColorStop(1, "#f49080");

        return (
            <div className=" ui container" >
                <div className = "column">  {dataIndex}</div>
                <div className = "column" ><Line data = {dataForDiagram} 
                options={{ maintainAspectRatio: false }}/></div>
               
            </div>
        )
    }
}

export default DisplayPerformanceData