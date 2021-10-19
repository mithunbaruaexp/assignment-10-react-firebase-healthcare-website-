import React, { useEffect, useState } from 'react';
import TeamMember from '../TeamMember/TeamMember';
import './Team.css'

const Team = () => {
    const [member, setMember] = useState([]);
    // console.log(member);
    useEffect(()=>{
        fetch('fakeDoctors.json')
            .then(res => res.json())
            .then(data => setMember(data));
    },[])
    return (
        <div className='team-container'>
            
            <div className='team'>
                <div className="team-top box-1">
                    <span>
                    <i className="fas fa-tooth"></i>
                    </span>
                    <h3>Best dental surgeons</h3>
                    <p>Dental surgeons perform procedures like tooth extractions.</p>

                    <button>Read more</button>

                </div>
                <div className="team-top box-2">
                    <span>
                    <i className="fas fa-tooth"></i>
                    </span>
                    <h3>Best dental surgeons</h3>
                    <p> While some dental surgery is performed on an emergency basis</p>
                    <button>Read more</button>

                </div>
                <div className="team-top box-3">
                    <span>
                    <i className="fas fa-tooth"></i>
                    </span>
                    <h3>Quick examination</h3>
                    <p>the dentist or hygienist will clean your teeth and check for cavities and gum disease.</p>
                    <button>Read more</button>

                </div>
                <div className="team-top box-4">
                    <span>
                    <i className="fas fa-tooth"></i>
                    </span>
                    <h3>Painless procedures</h3>
                    <p>For most people and abscess tooth comes with a considerable amount of pain</p>
                    <button>Chose your doctor <i className="fas   fa-chevron-down icon"></i></button>

                </div>
            </div>
            <div id='team' className="team-head">
                <div className="team-first">
                    <p>Dr Jenna Wilson</p>
                    <h2>YOUR DENTAL TEAM</h2>
                    <p className='para'>Dr. Jenna Wilson is is dedicated to providing her patients with the most beautiful smile together with the best dental protection available nowadays.</p>
                    <img src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/11/sign.png" alt="" />
                </div>
                <div className="team-second">
                    <img src="https://i.ibb.co/PzH4YtW/asset-3.png" alt="" />
                </div>
            </div>
            <hr />
       <div className="team-head">
       <div className="team-member">

                {
                    member.map(member=><TeamMember
                    key={member.id}
                    member={member}
                    ></TeamMember>)
                }

                </div>
       </div>
        </div>
    );
};

export default Team;