import React from "react";

;
export const withSearch = (Component, items) => {
    class wrapper extends React.Component {
        state = {
            searchTerm: '',
            items,
            filtereditems: items,
        }
        hendelChange = (event) => {
            const { value } = event.target;
            const { items } = this.state;

            const filtereditems = items.filter((item) =>
             item.name.toLowerCase().startsWith(value.toLowerCase()))
            this.setState({ searchTerm: value, filtereditems })
        }
        render() {
            const { filtereditems, searchTerm } = this.state;
            return <div>
                <input onChange={this.hendelChange}
                   type="text" 
                   placeholder="Search"  
                   value={searchTerm} />
                <Component filtereditems={filtereditems} {...this.props} />
            </div>
        }
    }
    return wrapper;
};