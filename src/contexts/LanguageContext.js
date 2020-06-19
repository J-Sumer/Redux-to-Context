import React from 'react';

const Context = React.createContext('english')

// here in Context, C should be capital, otherwise react will think it is a component instead of a context

export class LanguageStore extends React.Component {
    state = { language : 'english'};

    onLanguageChange = (language) => {
        this.setState({ language });
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state , onLanguageChange: this.onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        )
    }

    // this.props.children will have the jsx present inside the parent
}

export default Context;

// here we are exporting two things.



// const context = React.createContext('telugu');
// export default context;