import React, { Component } from 'react'
import Title from './Title';
import {FaRegHandScissors, FaPaintBrush, FaShuttleVan,FaBeer} from "react-icons/fa";
import { IoMdCut, IoIosCut, IoIosColorPalette, IoIosEye} from "react-icons/io";

export default class ServicesHome extends Component {
    state={
        services:[
            {
             icon:<IoMdCut/>,
             title:"Haircut",
             info:" some information about the service" 
            },
            {
                icon:<FaPaintBrush/>,
                title:"Nails",
                info:" some information about the service" 
               },
               {
                icon:<IoIosColorPalette/>,
                title:"Hair colouring",
                info:" some information about the service" 
               },
               {
                icon:<IoIosEye/>,
                title:"Eye Brows",
                info:" some information about the service" 
               }
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="Services"></Title>
               <div className="services-center">
                   {this.state.services.map((item, index)=>{
                       return <article key={index} className="service">
                           <span className="service">{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article>

                   })}
               </div>
            </section>
        )
    }
}
