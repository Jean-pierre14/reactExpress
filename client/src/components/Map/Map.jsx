import React, { Component } from 'react'

// import Axios from 'axios'

// const options = {
//     method: 'GET',
//     url: 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary',
//     params: {
//         bl_latitude: '11.847676',
//         bl_longitude: '108.473209',
//         tr_longitude: '109.149359',
//         tr_latitude: '12.838442',
//         limit: '30',
//         child_rm_ages: '7,10',
//         currency: 'USD',
//         subcategory: 'hotel,bb,specialty',
//         zff: '4,6',
//         hotel_class: '1,2,3',
//         amenities: 'beach,bar_lounge,airport_transportation',
//         adults: '1'
//     },
//     headers: {
//         'x-rapidapi-key': '7ffe277cf5mshcf4db704601812ep1cc290jsn1d5ef023e30b',
//         'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
//     }
// };
import './style.css'

export default class Map extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <h2>Map header</h2>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum sapiente ab omnis quaerat fugit ipsam sed molestiae est nostrum molestias laborum qui temporibus incidunt laudantium, soluta sint consequuntur illum, quibusdam tempora. Nemo veritatis illum quasi, unde sit rem impedit facilis. Impedit assumenda distinctio repellendus sunt velit quod quae dignissimos? Molestias dolore adipisci nihil recusandae dolorum sed aspernatur facere ratione quidem harum odio, aliquid repellat tempora nam, officiis itaque accusamus provident minima et ipsum ullam? Provident animi quibusdam fuga ullam fugiat ut? Impedit, nisi possimus. Inventore velit incidunt doloribus! Quaerat tempora quod dolorem expedita esse laudantium praesentium distinctio temporibus non nam?
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <h2>footer</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}