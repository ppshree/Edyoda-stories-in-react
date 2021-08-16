import React from "react";
import useFetchApi from "../../Custom Hooks/useFetchApi";
import classes from "./CategoriesPage.module.css";

export default function CategoriesPage(props) {
  const url = "https://api.edyoda.com/v1/blog/postcategories/";
  const { apiResults, isLoading } = useFetchApi(url);
  //console.log(apiResults.data);
  let baseData = apiResults.data;
  const actualData = [
    [
      {
        id: 0,
        meta_description: "",
        meta_keywords: "",
        meta_title: "",
        slug: "all",
        title: "All",
      },
    ].concat(baseData),
  ];
  console.log(actualData);
  const apiDataArr = actualData[0];

  return (
    <div className={classes.categoriesWrapper}>
      <div className={classes.latestPostWrapper}>
        <h2>Latest Posts</h2>
      </div>

      <div className={classes.filterTextWrapper}>
        <h3>
          <span>
            <i class="fas fa-filter"></i>
          </span>
          Filter by Category
        </h3>
      </div>

      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div className={classes.categoryCardsWrapper}>
          {/* <div className={highlightClass.join(" ")}>All</div> */}

          {apiDataArr.map((item, pos) => {
            const highlightClass = [classes.categoryCards];
            const { title, slug, id } = item;
            if (pos === props.position) {
              console.log("pos matched!");
              highlightClass.push(classes.categoryCardsHighlight);
            }
            return (
              <div
                key={id}
                className={highlightClass.join(" ")}
                onClick={() => props.handleClick(slug, pos)}
              >
                {title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
