import React from 'react';

export default function Info() {
    return (
        <header>
            <img src="../images/photo.jpg" className="header--profile_photo"/>
            <h1 className="header--name">Arkadiy Deykin</h1>
            <p className="header--job">Frontend Developer</p>
            <p className="header--site">arkadiydeykin.website</p>
            <div className="header--buttons">
                 <form action="mailto:superarkada@gmail.com">   
                    <button className="header--email_btn"><img src="../images/email.png" />Email</button>
                 </form>   
                <form action="https://hh.ru/resume/c88a0cbbff0b040ec60039ed1f6c797275334e" target="_blank">
                    <button className="header--hh_btn"><img src="../images/hh.png" width="15px"/>HeadHunter</button>
                </form>
            </div>
        </header>
    )
}