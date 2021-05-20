import React, {useState} from 'react';
import data from '../../assets/JSON/data.json'

function Project() {
    const [index, setNumber] = useState(0);
    
    const setIndex = (e) => {
        setNumber(parseInt(e.target.id))
    }
    return (
        < >
            <section id="projects" className="hero is-medium is-link has-background-primary-light">
                <div className="columns">
                    <div className="hero-body column is-6">
                        <h2 className="menu-label is-size-2">
                            My Projects so Far
                </h2>
                        <ul id="plist" className="column is-6 menu-list has-text-grey">
                            <li id="0" onClick={setIndex} className="pbtn"><a id="0" href={setIndex}>{data[0].title}</a></li>
                            <li id="1" onClick={setIndex} className="pbtn"><a id="1" href={setIndex}>{data[1].title}</a></li>
                            <li id="2" onClick={setIndex} className="pbtn"><a id="2" href={setIndex}>{data[2].title}</a></li>
                            <li id="3" onClick={setIndex} className="pbtn"><a id="3" href={setIndex}>{data[3].title}</a></li>
                        </ul>
                    </div>
                    <div className="hero-body column is-6">
                        <div id="pcard" className="card">
                            <div className="card-image">
                                <figure className="image ">
                                    <img id="pjpic" src="" alt="Placeholder"></img>
                                </figure>
                            </div>
                            <div className="card-content">
                                {/* <!-- <div className="media"> --> */}
                                <div className="media-content">
                                    <p id="ctitle" className="title is-4 has-text-grey">{data[index].name}</p>
                                    <p id="ghun" className="subtitle is-6 has-text-grey-light">
                                        <a href="https://github.com/a-andres1" target="_blank" rel="noreferrer">a-andres1</a></p>
                                    {/* <!-- </div> --> */}
                                </div>

                                <div className="content has-text-grey">
                                    <p id="ex">{data[index].description}
                            </p>
                                    <ul>
                                        <a id="deployed" href={data[index].deploy} target="_blank" rel="noreferrer">Deployed App </a>
                                        <a id="repo" href={data[index].repo} target="_blank" rel="noreferrer">Repo</a>
                                        {/* <a id="tyler" href={data[index].} target="_blank"> </a>
                                        <a id="deepali" href="#" target="_blank"></a> */}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )

}

export default Project;