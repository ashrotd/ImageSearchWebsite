import React,{Component} from "react";
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import '@material/floating-label'
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'
import ImageResults from '../Image-results/Image-results'
class Search extends Component{
    state = {
        searchText : '',
        amount : 15,
        apiURL : 'https://pixabay.com/api',
        apiKey : '8761127-15c354fd40a23de8d36bfe25d',
        images : []
    }
    onTextChange = (e) => {
        this.setState({
            searchText : e.target.value
        }, ()=> {
            axios.get(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}
            &image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res =>this.setState({images: res.data.hits}))
                .catch(err => console.log(err))
        })
    }
    onAmountChange = (e, index, value) => {
        this.setState({
            amount : e.target.value
        })
    }
    render() {
        console.log(this.state.images);
        return(
            <div>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    fullWidth={true}
                    label={'Search the Images'}
                />
                <br/>
                <Select
                    onChange={this.onAmountChange}
                    value={this.state.amount}
                >
                    <MenuItem value={this.state.amount}>
                        <em>{this.state.amount}</em>
                    </MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
                <br/>
                {this.state.images.length >0 ? (<ImageResults images={this.state.images}/>):null}
            </div>
        )
    }
}
export default Search;