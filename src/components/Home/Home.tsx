// import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SlidingCarousel from "../SlidingCarousel/SlidingCarousel";
// import { RootState } from "../../state/store";
// import { useSelector, useDispatch } from "react-redux";

const a = [
    {
        kind: "youtube#searchResult",
        etag: "ObagH2Rxi0tPE8yPdyBBnm75epA",
        id: {
            kind: "youtube#video",
            videoId: "BzLDdA7xhRM",
        },
        snippet: {
            publishedAt: "2022-09-29T15:22:32Z",
            channelId: "UCVTIQDAGWGX72kp4v3vrCnw",
            title: "Best Compilation of Funny DOGS &amp; Cute PUPPIES! 🐶🐶",
            description:
                "Best Compilation of Funny DOG & Cute PUPPY Videos! Dogs are the best. They're so cute and funny, and they always make ...",
            thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/BzLDdA7xhRM/default.jpg",
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: "https://i.ytimg.com/vi/BzLDdA7xhRM/mqdefault.jpg",
                    width: 320,
                    height: 180,
                },
                high: {
                    url: "https://i.ytimg.com/vi/BzLDdA7xhRM/hqdefault.jpg",
                    width: 480,
                    height: 360,
                },
            },
            channelTitle: "Animal Squad",
            liveBroadcastContent: "none",
            publishTime: "2022-09-29T15:22:32Z",
        },
    },
    {
        kind: "youtube#searchResult",
        etag: "tpsYCOZEn1BhVlkqrOp61_P7cso",
        id: {
            kind: "youtube#video",
            videoId: "vFVe0ISQmY4",
        },
        snippet: {
            publishedAt: "2022-09-28T14:03:08Z",
            channelId: "UC7_VH_kj0aD9vhuHmFheUYQ",
            title: "Woman brings an unwanted kitten home. And this is how her dog reacted.",
            description:
                "Woman brings an unwanted kitten home. And this is how her dog reacted. Check out their story: ...",
            thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/vFVe0ISQmY4/default.jpg",
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: "https://i.ytimg.com/vi/vFVe0ISQmY4/mqdefault.jpg",
                    width: 320,
                    height: 180,
                },
                high: {
                    url: "https://i.ytimg.com/vi/vFVe0ISQmY4/hqdefault.jpg",
                    width: 480,
                    height: 360,
                },
            },
            channelTitle: "GeoBeats Animals",
            liveBroadcastContent: "none",
            publishTime: "2022-09-28T14:03:08Z",
        },
    },
    {
        kind: "youtube#searchResult",
        etag: "mYEfxPGZzQBFK5XW_KdE1RAOYEY",
        id: {
            kind: "youtube#video",
            videoId: "2QoTCZaiTQ0",
        },
        snippet: {
            publishedAt: "2022-09-29T15:00:01Z",
            channelId: "UC3rLoj87ctEHCcS7BuvIzkQ",
            title: "Top 10 Most Expensive Dog Breeds in the World",
            description:
                "These expensive dog breeds will have you barking all the way to the bank. For this list, we'll be looking at the priciest pups in the ...",
            thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/2QoTCZaiTQ0/default.jpg",
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: "https://i.ytimg.com/vi/2QoTCZaiTQ0/mqdefault.jpg",
                    width: 320,
                    height: 180,
                },
                high: {
                    url: "https://i.ytimg.com/vi/2QoTCZaiTQ0/hqdefault.jpg",
                    width: 480,
                    height: 360,
                },
            },
            channelTitle: "MsMojo",
            liveBroadcastContent: "none",
            publishTime: "2022-09-29T15:00:01Z",
        },
    },
    {
        kind: "youtube#searchResult",
        etag: "pnyboN4KIQOEjPxGtp7vsE2YUwE",
        id: {
            kind: "youtube#video",
            videoId: "I4KCmFfVm34",
        },
        snippet: {
            publishedAt: "2019-11-11T20:30:01Z",
            channelId: "UC2BDs0pu-C1A4POY0g9rZxw",
            title: "TV for Dogs! 8 HOURS of Fun Entertainment for Bored Dogs + Music! NEW",
            description:
                "TV for Dogs! 8 HOURS of Fun Entertainment for Bored Dogs + Music! NEW - Gives your dog hour of entertainment filled with dogs ...",
            thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/I4KCmFfVm34/default.jpg",
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: "https://i.ytimg.com/vi/I4KCmFfVm34/mqdefault.jpg",
                    width: 320,
                    height: 180,
                },
                high: {
                    url: "https://i.ytimg.com/vi/I4KCmFfVm34/hqdefault.jpg",
                    width: 480,
                    height: 360,
                },
            },
            channelTitle: "Relax My Dog - Relaxing Music for Dogs",
            liveBroadcastContent: "none",
            publishTime: "2019-11-11T20:30:01Z",
        },
    },
    {
        kind: "youtube#searchResult",
        etag: "QV2kb9cV4Rgphc--ISkHGsYI7Ck",
        id: {
            kind: "youtube#video",
            videoId: "udIsqyDtnsY",
        },
        snippet: {
            publishedAt: "2022-09-28T12:59:01Z",
            channelId: "UCzOoFSAJD94eEYaSehqKqHw",
            title: "Rebellious Animals 😬😬 || Funny Dog and Cat Reaction Video #67",
            description:
                "Here will be the best videos about dogs. Subscribe for more cute & funny pet videos: https://bit.ly/3AnOjJ4 Donate To Our ...",
            thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/udIsqyDtnsY/default.jpg",
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: "https://i.ytimg.com/vi/udIsqyDtnsY/mqdefault.jpg",
                    width: 320,
                    height: 180,
                },
                high: {
                    url: "https://i.ytimg.com/vi/udIsqyDtnsY/hqdefault.jpg",
                    width: 480,
                    height: 360,
                },
            },
            channelTitle: "All Dogs",
            liveBroadcastContent: "none",
            publishTime: "2022-09-28T12:59:01Z",
        },
    },
    {
        kind: "youtube#searchResult",
        etag: "MehqLsATJG_bfJWZCGhqAyigwfk",
        id: {
            kind: "youtube#video",
            videoId: "Yru8CRVGDcQ",
        },
        snippet: {
            publishedAt: "2022-09-28T13:10:26Z",
            channelId: "UCxaNGRFsS06rPm5u5VPs_Ug",
            title: "Abandoned Puppy Looks Like a Tiny Piglet and Transforms Into a Beautiful Dog After Being Rescued",
            description:
                "Become a member: https://www.youtube.com/channel/UCxaNGRFsS06rPm5u5VPs_Ug/join We followed up on a social media ...",
            thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/Yru8CRVGDcQ/default.jpg",
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: "https://i.ytimg.com/vi/Yru8CRVGDcQ/mqdefault.jpg",
                    width: 320,
                    height: 180,
                },
                high: {
                    url: "https://i.ytimg.com/vi/Yru8CRVGDcQ/hqdefault.jpg",
                    width: 480,
                    height: 360,
                },
            },
            channelTitle: "Paw Squadron",
            liveBroadcastContent: "none",
            publishTime: "2022-09-28T13:10:26Z",
        },
    },
    {
        kind: "youtube#searchResult",
        etag: "_Tloz1zT8z68HZWXfSR5wsC25l0",
        id: {
            kind: "youtube#video",
            videoId: "4QA30qkRYy8",
        },
        snippet: {
            publishedAt: "2016-01-08T16:52:44Z",
            channelId: "UCO6LS_5W7vqG9mALDNzSFug",
            title: "Dogs",
            description:
                "Provided to YouTube by Pink Floyd Dogs · Pink Floyd Animals ℗ Pink Floyd Records Released on: 1997-01-21 Auto-generated ...",
            thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/4QA30qkRYy8/default.jpg",
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: "https://i.ytimg.com/vi/4QA30qkRYy8/mqdefault.jpg",
                    width: 320,
                    height: 180,
                },
                high: {
                    url: "https://i.ytimg.com/vi/4QA30qkRYy8/hqdefault.jpg",
                    width: 480,
                    height: 360,
                },
            },
            channelTitle: "Pink Floyd - Topic",
            liveBroadcastContent: "none",
            publishTime: "2016-01-08T16:52:44Z",
        },
    },
    {
        kind: "youtube#searchResult",
        etag: "qqhrf1ijK-n_SPZM3NUHlbnO4yM",
        id: {
            kind: "youtube#video",
            videoId: "uDof2_iIymA",
        },
        snippet: {
            publishedAt: "2022-09-28T15:00:41Z",
            channelId: "UC43CkWhXhi20AvyrWG2nU_g",
            title: "What It’s Really Like Living With Dogs 😂",
            description:
                "What It's Really Like Living With Dogs What It's Really Like Having Dogs #mybloopers #dogs #shorts #funnydog.",
            thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/uDof2_iIymA/default.jpg",
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: "https://i.ytimg.com/vi/uDof2_iIymA/mqdefault.jpg",
                    width: 320,
                    height: 180,
                },
                high: {
                    url: "https://i.ytimg.com/vi/uDof2_iIymA/hqdefault.jpg",
                    width: 480,
                    height: 360,
                },
            },
            channelTitle: "Griffin Frenchie",
            liveBroadcastContent: "none",
            publishTime: "2022-09-28T15:00:41Z",
        },
    },
    {
        kind: "youtube#searchResult",
        etag: "AvmEmU0WVPgqpVxzasiCFXjXAWE",
        id: {
            kind: "youtube#video",
            videoId: "tqL_rGDRa7E",
        },
        snippet: {
            publishedAt: "2022-09-29T20:44:43Z",
            channelId: "UCKyCNNJMe7dqlHhA8TRbe2A",
            title: "Isle of Dogs is an overlooked masterpiece",
            description:
                "This movie is something I cannot describe in a few words so stop reading this description and watch the video. Come chat with me ...",
            thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/tqL_rGDRa7E/default.jpg",
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: "https://i.ytimg.com/vi/tqL_rGDRa7E/mqdefault.jpg",
                    width: 320,
                    height: 180,
                },
                high: {
                    url: "https://i.ytimg.com/vi/tqL_rGDRa7E/hqdefault.jpg",
                    width: 480,
                    height: 360,
                },
            },
            channelTitle: "BionicPIG",
            liveBroadcastContent: "none",
            publishTime: "2022-09-29T20:44:43Z",
        },
    },
    {
        kind: "youtube#searchResult",
        etag: "mIU6wU1bmvLTxnwpjNUXxC2pmQA",
        id: {
            kind: "youtube#video",
            videoId: "4-s5AQiOZnY",
        },
        snippet: {
            publishedAt: "2022-03-05T17:17:42Z",
            channelId: "UCmaRm-IIdEVsA0OIlhubPiQ",
            title: "20 Most Illegal Dog Breeds in the World",
            description:
                "Imagine you are cheerfully walking home one day with your newly bought dog. Imagine you meet a passerby, and he points out ...",
            thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/4-s5AQiOZnY/default.jpg",
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: "https://i.ytimg.com/vi/4-s5AQiOZnY/mqdefault.jpg",
                    width: 320,
                    height: 180,
                },
                high: {
                    url: "https://i.ytimg.com/vi/4-s5AQiOZnY/hqdefault.jpg",
                    width: 480,
                    height: 360,
                },
            },
            channelTitle: "Ultimate Fact",
            liveBroadcastContent: "none",
            publishTime: "2022-03-05T17:17:42Z",
        },
    },
];

const Home = () => {
    // const { searchedVideos, trendingVideos } = useSelector(
    //     (state: RootState) => state.videos
    // );
    // const dispatch = useDispatch();

    return (
        <div className="home">
            <SearchBar />
            <SlidingCarousel title="Searched Videos" videos={a} />
        </div>
    );
};

export default Home;
