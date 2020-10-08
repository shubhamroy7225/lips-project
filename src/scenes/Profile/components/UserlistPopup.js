import React, { useEffect, useState } from 'react'
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
    let isFeedCallInProgress = false // if feed call in progress don't trigger multiple


    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            debugger;
            console.log("bottom");
            onReachingBottom();
        }
    }

    // called from HOC Scroller on reaching bottom 
    const onReachingBottom = () => {
        isPaginationCompleted = isOpeningFollowers ? isFollowersPaginationCompleted : isFollowingPaginationCompleted
        if (!isFeedCallInProgress && //if feed call in progress don't fire again
            !isPaginationCompleted) { //check if all the feeds are fetched - don't fire
            isFeedCallInProgress = true;
            //make feed call for page
            console.log("making pagination call");
            if (isOpeningFollowers) {
                fetchNextFollowers();
            } else {
                fetchNextFollowingUsers();
            }
            console.log("reached bottom initiate page call");
            onReachingBottom();
        }

    }

    if (followers.length > 0) {
        followersContent = followers.map(user => {
            return <FollowerItem data={user} user={user.follower} />
        })
    }
    if (following.length > 0) {
        followingContent = following.map(user => {
            return <FollowerItem data={user} user={user.followee} />
        })
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