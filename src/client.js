import api from '@cocreate/api'

const CoCreateTwitter = {
    name: 'twitter',
    actions: {
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
};

api.init({
	name: CoCreateTwitter.name, 
	module:	CoCreateTwitter,
});