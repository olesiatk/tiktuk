import React, { useState, useEffect } from "react";

export const FeedList = () => {
  const [feed, setFeed] = useState(null);

  const getData = async () => {
    const response = await fetch(
      "https://tiktok33.p.rapidapi.com/user/feed/dave.xp",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "tiktok33.p.rapidapi.com",
          "x-rapidapi-key":
            "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66",
        },
      }
    );
    return await response.json(); // parses JSON response into native JavaScript objects
  };

  //   const getFeed = async () => await fetch("https://tiktok33.p.rapidapi.com/user/feed/dave.xp", {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-host": "tiktok33.p.rapidapi.com",
  //     "x-rapidapi-key": "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66",
  //   },
  // })
  //   .then((response) => {
  //     setFeed(response.json());
  //     console.log("response", response.json());
  //   })
  //   .catch((err) => {
  //     console.error("err", err);
  //     throw err;
  //   });

  useEffect(() => {
    getData()
      .then((data) => {
        setFeed(data);
        console.log(data); // JSON data parsed by `response.json()` call
      })
      .catch((err) => {
        console.error("err", err);
        throw err;
      });
  }, []);

  console.log("feed", feed);

  return <h1>Feed</h1>;
};
