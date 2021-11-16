import React, { useState, useEffect } from "react";

const userPosts = require("../../user-feed.json");

export const FeedList = () => {
  const [feed, setFeed] = useState(null);
  const [feed2, setFeed2] = useState(null);
  useEffect(() => {
    const post = userPosts.itemList;
    setFeed(post);
  }, []);

  // console.log("feed", feed);

 const request = () => fetch("https://tiktok33.p.rapidapi.com/video/info?video_url=https%3A%2F%2Fvm.tiktok.com%2FZMeb45Cv2%2F", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tiktok33.p.rapidapi.com",
		"x-rapidapi-key": "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66"
	}
})
.then(response => {
	console.log(response);
  return response.json()
})
.catch(err => {
	console.error(err);
});

const getFeed = () => request().then(result => result[0])

useEffect(() => {
  getFeed().then(setFeed2)
}, [])



console.log('feed2', feed2)

  return (
    <>
      <h1>Feed</h1>
      {feed &&
        feed.map(({ video }) => {
          console.log(video);
          return (
            <div key={video.id}>
              <video width="320" height="240" controls>
                <source src={video.cover} type='mp4'/>
                Your browser does not support the video tag.
              </video>
            </div>
          );
        })}
    </>
  );
};
