import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan,FaBeer} from "react-icons/fa"

export default class ServicesHome extends Component {
    state={
        services:[
            {
             icon:<FaCocktail/>,
             title:"Free cocktails",
             info:" some information about the service" 
            },
            {
                icon:<FaHiking/>,
                title:"multiple options for hiking",
                info:" some information about the service" 
               },
               {
                icon:<FaShuttleVan/>,
                title:"Affordable commute",
                info:" some information about the service" 
               },
               {
                icon:<FaBeer/>,
                title:"Discounted beers.",
                info:" some information about the service" 
               }
        ]
    }
    render() {
        return (
            <section>
               <Title title="Services"></Title>
               <div className="services-center">
                   {this.state.services.map((item, index)=>{
                       return <article key={index} className="services">
                           <span>{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article>

                   })}
               </div>
            </section>
        )
    }
}
