import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery';
import FollowerItem from './FollowerItem'
import { useSelector } from 'react-redux';

const UserListPopUp = ({ followers,
    following,
    isFollowersPaginationCompleted,
    isFollowingPaginationCompleted,
    fetchNextFollowingUsers,
    fetchNextFollowers
}) => {

    const { isOpeningFollowers } = useSelector((state) => state.authReducer)
    let followingContent = [];
    let followersContent = [];
    let isPaginationCompleted = isOpeningFollowers ? isFollowersPaginationCompleted : isFollowingPaginationCompleted;


    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            console.log("bottom");
            onReachingBottom();
        }
    }

    // called from HOC Scroller on reaching bottom 
    const onReachingBottom = () => {
        isPaginationCompleted = isOpeningFollowers ? isFollowersPaginationCompleted : isFollowingPaginationCompleted
        if (!isPaginationCompleted) { //check if all the feeds are fetched - don't fire
            //make feed call for page
            console.log("making pagination call");
            if (isOpeningFollowers) {
                fetchNextFollowers();
            } else {
                fetchNextFollowingUsers();
            }
            console.log("reached bottom initiate page call");
        }

    }

    if (followers.length > 0) {
        followersContent = followers.map(user => {
            return <FollowerItem data={user} user={user.follower} />
        })
    }
    else {
        followersContent = (
            <div class="lps_tb_para">
                <h4>No followers yet</h4>
            </div>
        )
    }

    if (following.length > 0) {
        followingContent = following.map((user, index) => {
            return <FollowerItem key={index} data={user} user={user.followee} />
        })
    }
    else {
        followingContent = (
            <div class="lps_tb_para">
                <h4>You haven't started following anyone yet</h4>
            </div>
        )
    }

    return (
        <div class="follow_overflow" onScroll={handleScroll}>
            {
                isOpeningFollowers ?
                    followersContent : followingContent
            }
        </div>
    )
}

export default UserListPopUp;