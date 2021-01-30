import React from 'react'
import s from "../Profile/Profile.module.css"

const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-_mIfmXfxZydIr5sSyiVu6p_LMiG6L8ZDw&usqp=CAU"/>
            </div>
            <div>
                ava+desc
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div className={s.post}>
                    <div className={s.item}>post 1</div>
                    <div className={s.item}>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;