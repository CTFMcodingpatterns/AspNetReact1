import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

interface Position {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

interface PositionsState {
    positions: Position[];
    loading: boolean;
}

class PositionRepos {
    public static createPositions() : Position[] {
        const positions : Position[] = [
            { dateFormatted: "2018-04-15", temperatureC: 18, temperatureF: 60, summary: "cold" },
            { dateFormatted: "2018-04-16", temperatureC: 20, temperatureF: 61, summary: "warm" },
        ];
        return positions;
    }

    public static getPositionsAsync(): Promise<Position[]> {
        const positions = PositionRepos.createPositions();
        const promise = new Promise<Position[]>((resolve, reject) => resolve(positions));
        return promise;
    }
}

export class Positions extends React.Component<RouteComponentProps<{}>, PositionsState> {
    constructor() {
        super();
        this.state = {
            positions: [],
            loading: true
        };
        PositionRepos.getPositionsAsync()
            .then(data => this.setState({ positions: data, loading: false }))
            .catch(reason => console.log("reason: " + reason));
        //this.state = {
        //    positions: PositionRepos.createPositions(),
        //    loading: false
        //};
    }

    private fetchAndSetPositions() {
        fetch('api/SampleData/WeatherForecasts')
            .then(response => response.json() as Promise<Position[]>)
            .then(data => {
                this.setState({ positions: data, loading: false });
            })
            .catch(err => console.log("err: " + err));
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Positions.renderTable(this.state.positions);

        return <div>
            <h1>Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
            <button onClick={() => { this.fetchAndSetPositions() }}>Fetch</button>
        </div>;
    }

    private static renderTable(positions: Position[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {positions.map(forecast =>
                    <tr key={forecast.dateFormatted}>
                        <td>{forecast.dateFormatted}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}