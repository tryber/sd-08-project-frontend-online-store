import React,{Component} from 'react';

class SearchBar extends Component {
        emptySearch(){
            return <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
        }
    render(){
        return (
            <>
                <form>
                    <input name="" value="" ></input>
                </form>
                {this.emptySearch()}
            </>
        );
    }
}
export default SearchBar;