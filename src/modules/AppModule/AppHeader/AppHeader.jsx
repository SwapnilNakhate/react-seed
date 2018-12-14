import React, { Component} from "react";
import './AppHeader.scss';
import { Link } from 'react-router';

export default class AppHeader extends Component {
    render(){
        return (
            <div className="col-md-12 app-header">
                TPL Dashboard
                <div className="col-md-12">
                    <button className="btn btn-primary">
                        <Link to="/home"> Home </Link>
                    </button>
                    <button className="btn btn-primary">
                        <Link to="/about"> About </Link>
                    </button>
                    <button className="btn btn-primary">
                        <Link to="/contact"> Contact </Link>
                    </button>
                    <button className="btn btn-primary">
                        <Link to="/dsadas"> Invalid Path </Link>
                    </button>
                </div>
            </div>
        )
    }
}