import React from 'react';



class App extends React.Component {

    constructor() {
        super()
        this.state = {
            value1: '',
            value2: '',
            operation: '',
            result: null
        }
    }

    /*   onInputChange1 = (event) => {
   
   
           console.log(event.target.id);
           console.log(event.target.value);
           this.setState({ value1: event.target.value })
   
   
       }
   
       onInputChange2 = (event) => {
   
           console.log(event.target.id);
           console.log(event.target.value);
           this.setState({ value2: event.target.value })
   
       } */

    onInputChange = (event) => {
        if (event.target.id === 'value1') {
            console.log(event.target.value);
            this.setState({ value1: event.target.value })

        }
        else if (event.target.id === 'value2') {

            console.log(event.target.value);
            this.setState({ value2: event.target.value })
        }

    }

  /*  onSubmitButton1 = (event) => {


        var n3 = (Number(this.state.value1)) + (Number(this.state.value2));

        console.log(event.target.value);

        console.log(n3);
        this.setState({ result: n3, operation: '+' })

       
    }

    onSubmitButton2 = (event) => {


        var n3 = (Number(this.state.value1)) - (Number(this.state.value2));
        console.log(n3);
        this.setState({ result: n3, operation: '-' })
    }

    onSubmitButton3 = (event) => {


        var n3 = (Number(this.state.value1)) / (Number(this.state.value2));
        console.log(n3);
        this.setState({ result: n3, operation: '/' })
    }

    onSubmitButton4 = (event) => {


        var n3 = (Number(this.state.value1)) * (Number(this.state.value2));
        console.log(n3);
        this.setState({ result: n3, operation: '*' })
    }  */

    onSubmitButton = (event) => {

        var n3;

        if (event.target.value === 'Add')
        {
            n3 = (Number(this.state.value1)) + (Number(this.state.value2));

            console.log(event.target.value);
    
            console.log(n3);
            this.setState({ result: n3, operation: '+' })
        }
        else if (event.target.value === 'Sub')
        {
            n3 = (Number(this.state.value1)) - (Number(this.state.value2));
            console.log(n3);
            this.setState({ result: n3, operation: '-' })
        }
        else if (event.target.value === 'Div')
        {
            n3 = (Number(this.state.value1)) / (Number(this.state.value2));
            console.log(n3);
            this.setState({ result: n3, operation: '/' })
        }
        else if (event.target.value === 'Mul')
        {
            n3 = (Number(this.state.value1)) * (Number(this.state.value2));
            console.log(n3);
            this.setState({ result: n3, operation: '*' })
        }

    }



    render() {
        return (
            <div className='tc'>
                <h1 className='f2 white'>CALCULATOR</h1>

                <input className='tc br3 ba b--back  pa2 ma2' id='value1' type='number' placeholder='value 1' onChange={this.onInputChange} />
                <input className='tc br3 ba b--back pa2 ma2' id='value2' type='number' placeholder='value 2' onChange={this.onInputChange} /> <br />
                <input className='pa2 ph4 ma2 br3 ba b--black grow' id=" result" type='button' value='Add' onClick={this.onSubmitButton} />
                <input className='pa2 ph4 ma2 br3 ba b--black grow' id=" result" type='button' value='Sub' onClick={this.onSubmitButton} />
                <input className='pa2 ph4 ma2 br3 ba b--black grow' id=" result" type='button' value='Div' onClick={this.onSubmitButton} />
                <input className='pa2 ph4 ma2 br3 ba b--black grow' id=" result" type='button' value='Mul' onClick={this.onSubmitButton} /> <br />

                {
                    this.state.result !== null
                        ?
                        <p className='f3 white'>{this.state.value1} {this.state.operation} {this.state.value2} = {this.state.result}</p>
                        : null
                }

            </div>
        );
    }
}

export default App;