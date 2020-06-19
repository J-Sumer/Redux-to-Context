import React from 'react';

class LanguageSelector extends React.Component{
    render() {
        return (
            <div>
                Select a language:
                <i className="flag us" onClick={ ()=> this.props.onLanguageChange('english') } />
                <i className="flag india" onClick={ ()=> this.props.onLanguageChange('telugu') } />
            </div>
        )
    }
}

export default LanguageSelector;