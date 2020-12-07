import React from "react";
import PortfolioPresenter from "./PortfolioPresenter";
import { tvApi } from "api";
export default class extends React.Component {
    state = {
        topRated : null,
        popular : null,
        airingToday : null,
        error : null,
        loading : true
    }
    async componentDidMount() {
        try {
            const {data:{results:topRated}} = await tvApi.topRated();
            const {data:{results:popular}} = await tvApi.popular();
            const {data:{results:airingToday}} = await tvApi.airingToday();
            
            this.setState({
                topRated,popular,airingToday
            });
        }catch {
            this.setState({
                error:"Cant't find the TV information.."
            })
        } finally {
            this.setState({
                loading:false
            })
        }
        
    }
    render() {
        const {topRated, popular, airingToday, error, loading} = this.state;
        console.log(this.state);
        return (
            <PortfolioPresenter 
                topRated={topRated} 
                popular={popular}
                airingToday={airingToday} 
                error={error}
                loading={loading} />
        )
    }
}