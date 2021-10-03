import React from "react";
/*action button that refetches the next or previous page
* https://www.apollographql.com/docs/react/data/queries/#refetching
* */
export const actionButton = (refetch, action, description) => {
    return(
        <button className="all-pagination-button"
                onClick={() => refetch({navUrl: `${action}`})}>
            {description}
        </button>
    )
}