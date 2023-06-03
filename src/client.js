import api from '@cocreate/api'

api.init({
    name: 'twitter',
    endPoints: {
        getFollowersList: {},
        getUsersShow: {},
        getSearchUser: {},
        getFriendsList: {},
        getSearchTweets: {},
        getUserslookup: {},
        getUserTimeline: {},
        getTrendsPlace: {},
        postTweet: {},
        getOauth2Token: {}
    }
});