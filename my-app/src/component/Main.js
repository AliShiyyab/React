import React from 'react';

class Main extends React.Component{
    render(){
        const UniWhal ="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg";
        const Rhino_Family ="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80";
        const Unicorn_Head ="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg";
        return(
            <main>
                <div>
                    <h2>UniWhal</h2>
                    <p>A unicorn and a narwhal nuzzling their horns</p>
                    <img src={UniWhal} alt="" />
                </div>
                <div>
                    <h2>Rhino Family</h2>
                    <p>Mother (or father) rhino with two babies</p>
                    <img src={Rhino_Family} alt="" />
                </div>
                <div>
                    <h2>Unicorn Head</h2>
                    <p>Someone wearing a creepy unicorn head mask</p>
                    <img src={Unicorn_Head} alt="" />
                </div>
            </main>
        )
    }
}

export default Main;