import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../eployees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Gocho', salary: 50000, increase: true, id: 1},
                {name: 'Docho', salary: 800, increase: false, id: 2},
                {name: 'Bocho', salary: 1000, increase: false, id: 3},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
        })
    }

    render() {
        return(
            <div className="app">
                <AppInfo/>
            
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmployeesAddForm/>
            </div>
         );
    }
}

export default App;