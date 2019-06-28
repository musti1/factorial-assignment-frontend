import React, {Component} from 'react';
import FactorialService from "../services/FactorialService";

class Factorial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: '',
            factorial: null
        };
    }

    handleChange = (e) => {
        this.setState({
            number: e.target.value
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await FactorialService.getFactorial(this.state);
        const result = await response.json();
        this.setState({
            factorial: result.factorial
        });
    };

    render() {
        const {userName} = this.props;
        return (
            <div>
                <div className="FormCenter">
                    <span style={{fontSize: "25px"}}>Welcome {userName}, </span><span> Enter a number to find factorial </span>
                    <form onSubmit={this.handleSubmit} className="FormFields">
                        <div className="FormField">
                            <input id="number" className="FormField__Input" placeholder="Enter number" name="number"
                                   value={this.state.number} onChange={this.handleChange}/>
                        </div>

                        <div className="FormField">
                            <button className="FormField__Button mr-20">Find</button>
                        </div>
                    </form>
                </div>
                {this.state.factorial !== null &&
                <div className="Factorial">
                    <label className="Result__Label">Factorial Of {this.state.number}</label>
                    <br/>
                    <span style={{fontSize: "30px"}}>{this.state.factorial}</span>
                </div>
                }
            </div>
        );
    }
}

export default Factorial;
