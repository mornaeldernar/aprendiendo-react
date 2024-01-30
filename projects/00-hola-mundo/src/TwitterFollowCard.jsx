import { useState } from "react";

/* eslint-disable react/prop-types */
export function TwitterFollowCard({ children, userName = 'unknown' , initialIsfollowing}){

    const [isFollowing,setIsFollowing]  = useState(initialIsfollowing);

    const imageSrc= `https://unavatar.io/${userName}`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" alt="El avatar de mornaeldernar" src={imageSrc}></img>
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className='tw-followCard-username'>
                        @{userName}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}