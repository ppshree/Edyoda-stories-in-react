import React, { useEffect, useState } from "react";
import useFetchApi from "../../Custom Hooks/useFetchApi";
import classes from "./HomePage.module.css";

export default function HomePage(props) {
  const [slugName, setSlugName] = useState("");
  useEffect(() => {
    props.slug && setSlugName(props.slug);
  }, [props.slug]);
  //console.log(slugName);
  const baseUrl = `https://api.edyoda.com/v1/blog/${slugName}`;
  //const baseUrl = `https://api.edyoda.com/v1/blog/cloud-computing/`;
  //console.log(baseUrl);
  const { apiResults, isLoading } = useFetchApi(baseUrl);
  //console.log(apiResults);
  const apiDataArr = apiResults.data;
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className={classes.HomePageCardsWrapper}>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        apiDataArr.map((item, pos) => {
          const { authorname, description, id, posted_on, small_image, title } =
            item;
          //console.log(slug);
          let dateString = `${posted_on.substring(8, 10)}-${
            monthArr[parseInt(posted_on.substring(5, 7)) - 1]
          }-${parseInt(posted_on.substring(0, 4))}`;
          return (
            <div key={id} className={classes.HomePageCards}>
              <div className={classes.imageDivWrapper}>
                <img src={small_image} alt={title} />
              </div>
              <div className={classes.cardDescriptionDiv}>
                <h3>{title}</h3>
                <div className={classes.authorWrapper}>
                  <span>{authorname}</span>|<p>{dateString}</p>
                </div>
                <div>
                  <p className={classes.descriptionText}>{description}</p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
